<template>
  <nav class="n-main__navigation">
    <ul class="n-navigation__list">
      <li class="n-navigation__item">
        <a class="navigation__text" href="/quick-practice">Quick practice</a>
      </li>
      <li class="n-navigation__item">
        <a class="navigation__text" href="/practice">Practice all poses</a>
      </li>
      <li class="n-navigation__item">
        <a class="navigation__text" href="/all-cards">See all poses</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavigation',
  props: {
    whiteCta: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.n-navigation__list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 83px;
}
.n-navigation__item {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 25px;
  color: #9a9796;
  font-size: 16px;
  font-weight: 500;
  border-top: 3px solid transparent;
  transition: all 0.4s ease;
  &:hover {
    border-top: 3px solid #bdb6b2;
    background: #f2efee;
  }
  &:visited {
    color: #9a9796;
  }
  & span:hover {
    cursor: pointer;
  }
  &:hover.no-hover {
    border-top: 3px solid transparent;
    background: #fff;
  }
  &:hover .n-submenu__container {
    left: 0;
    opacity: 1;
    height: auto;
    transform: translateY(0);
    z-index: 1000;
    border-top: 1px solid #e4e4e4;
    pointer-events: all;
  }
}
.navigation__text {
  color: #9a9796;
  &:visited {
    color: #9a9796;
  }
}

@media all and (max-width: 1024px) {
  .n-main__navigation {
    display: none;
  }
}
</style>
