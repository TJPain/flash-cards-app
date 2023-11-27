<template>
  <header class="header__container">
    <div class="header__wrapper">
      <NuxtLink to="/" class="header__logo-container">
        <img
          src="@/assets/images/header/logo.png"
          alt="Yoga poses"
          class="header__logo-icon"
        />
        <h1 class="header__logo-text">Yoga poses</h1>
      </NuxtLink>
      <MainNavigation />
      <MainMobileNavigation />
    </div>
  </header>
</template>

<script>
import MainNavigation from '@/components/global/navigation-elements/MainNavigation'
import MainMobileNavigation from '@/components/global/navigation-elements/MainMobileNavigation'

export default {
  name: 'MainHeader',
  components: {
    MainNavigation,
    MainMobileNavigation,
  },
  props: {
    whiteCta: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.header__container {
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 1000;
  width: 100%;
  background-color: #fffefa;
  top: 0;
  border-bottom: 1px solid #e3e3e3;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
}
.header__logo-container {
  display: flex;
  width: auto;
  cursor: pointer;
  align-items: center;
  flex-direction: row;
}
.header__logo-text {
  color: #9a9796;
  font-size: 22px;
  font-weight: 700;
  font-family: 'Gothic A1', 'Montserrat', sans-serif;
  text-decoration: unset;
}

.header__logo-text::after {
  content: '';
  width: 0;
  height: 2px;
  display: block;
  background: #9a9796;
  transition: 300ms;
}

.header__logo-text:hover::after {
  width: 100%;
}

.header__logo-icon {
  background-size: cover;
  width: auto;
  display: inline-block;
  height: 35px;
  color: #fff;
  margin-right: 6px;
  position: relative;
}

@media only screen and (min-width: 668px) and (max-width: 1270px) {
  .header__wrapper {
    width: calc(100% - 100px);
    padding: 0;
  }
}
@media only screen and (max-width: 1024px) {
  .header__wrapper {
    height: 66px;
    position: fixed;
    top: 0;
    width: calc(100%);
    z-index: 999;
    padding: 0 15px;
    background-color: #fffefa;
    border-bottom: 1px solid #fffefa;
  }
  .logo {
    width: auto;
  }
  .logo-desktop {
    display: none;
  }
  .logo-mobile {
    display: block;
    width: 31px;
  }
}
</style>
