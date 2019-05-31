<template>
  <span tooltip="hello world">Pop Up-Right</span>
</template>

<script>
export default {
  name: 'Tooltip'
}
</script>

<style lang="scss" scoped>
:root {
  --bg: #353539;
  --alt: #ad4375;
  --text: #fff;
  --opacity: 0.9;
  --accent: #8fd1f2;
  --shadow: rgba(0, 0, 0, 0.35);
  --dink: 5px;
  --ani: 150ms cubic-bezier(0.5, 0, 0.6, 1.3) 1ms forwards;
}

@keyframes tips-vert {
  to {
    opacity: var(--opacity);
    transform: translate(-50%, 0);
  }
}

@keyframes tips-horz {
  to {
    opacity: var(--opacity);
    transform: translate(0, -50%);
  }
}

@keyframes tips-diag-right {
  to {
    opacity: var(--opacity);
    transform: translate(-1em, 0);
  }
}

@keyframes tips-diag-left {
  to {
    opacity: var(--opacity);
    transform: translate(1em, 0);
  }
}

// tooltips
[tooltip] {
  position: relative;
  &::before,
  &::after {
    text-transform: none;
    line-height: 1;
    font-size: 0.9em;
    user-select: none;
    pointer-events: none;
    position: absolute;
    display: none;
    opacity: 0;
  }
  // the dink
  &::before {
    content: '';
    border: var(--dink) solid transparent;
    z-index: 1001;
  }
  // the bubble
  &::after {
    content: attr(tooltip);
    font-family: Helvetica, sans-serif;
    text-align: center;

    min-width: 3em;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    padding: 1ch 1.5ch;
    border-radius: 0.3em;
    box-shadow: 0 1em 2em -0.5em var(--shadow);
    background: var(--bg);
    color: var(--text);
    z-index: 1000;
  }
  // show the tooltip
  &:hover::before,
  &:hover::after {
    display: block;
  }
}

[tooltip]:not([flow]),
[tooltip][flow^='up'] {
  &::before {
    bottom: 100%;
    border-bottom-width: 0;
    border-top-color: var(--bg);
  }
  &::after {
    bottom: calc(100% + var(--dink));
  }
  &::before,
  &::after {
    left: 50%;
    transform: translate(-50%, 0.5em);
  }
}

[tooltip][flow^='down'] {
  &::before {
    top: 100%;
    border-top-width: 0;
    border-bottom-color: var(--bg);
  }
  &::after {
    top: calc(100% + var(--dink));
  }
  &::before,
  &::after {
    left: 50%;
    transform: translate(-50%, -0.5em);
  }
}

[tooltip][flow$='-left']::after {
  right: 50%;
  left: auto;
}

[tooltip][flow='up-left']::after {
  transform: translate(1.5em, 0.5em);
}

[tooltip][flow='down-left']::after {
  transform: translate(1.5em, -0.5em);
}

[tooltip][flow='up-right']::after {
  transform: translate(-1.5em, 0.5em);
}

[tooltip][flow='down-right']::after {
  transform: translate(-1.5em, -0.5em);
}

[tooltip][flow='left'] {
  &::before {
    top: 50%;
    border-right-width: 0;
    border-left-color: var(--bg);
    left: calc(0em - var(--dink));
    transform: translate(0.5em, -50%);
  }
  &::after {
    top: 50%;
    right: calc(100% + var(--dink));
    transform: translate(0.5em, -50%);
  }
}

[tooltip][flow='right'] {
  &::before {
    top: 50%;
    border-left-width: 0;
    border-right-color: var(--bg);
    right: calc(0em - var(--dink));
    transform: translate(-0.5em, -50%);
  }
  &::after {
    top: 50%;
    left: calc(100% + var(--dink));
    transform: translate(-0.5em, -50%);
  }
}

// FX: do the thing
[tooltip]:not([flow]):hover,
[tooltip][flow^='up']:hover,
[tooltip][flow^='down']:hover {
  &::before,
  &::after {
    animation: tips-vert var(--ani);
  }
}

[tooltip][flow$='-right']:hover::after {
  animation: tips-diag-right var(--ani);
}

[tooltip][flow$='-left']:hover::after {
  animation: tips-diag-left var(--ani);
}

[tooltip][flow='left']:hover,
[tooltip][flow='right']:hover {
  &::before,
  &::after {
    animation: tips-horz var(--ani);
  }
}

// don't show empty tooltips
[tooltip=''] {
  &::after,
  &::before {
    display: none !important;
  }
}
</style>
