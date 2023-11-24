<template>
  <div class="hero-banner">
    <client-only>
      <parallax :speed-factor="0.4" class="hero__image">
        <img
          src="@/assets/images/home/hero-banner-image.jpg"
          alt="A woman doing yoga"
        />
      </parallax>
    </client-only>
    <img
      src="@/assets/images/home/hero-banner-image.jpg"
      alt="A woman doing yoga"
      class="hero_img-mobile"
    />
    <div class="hero__contents-wrapper">
      <div class="hero__buttons-wrapper">
        <div class="hero__buttons-glass-background">
          <p class="hero__glass-title">Practice all 83 poses or 10 at random</p>
          <div class="hero_buttons-flex-container">
            <a class="hero__cta-button" href="/practice"> Practice all </a>
            <a class="hero__cta-button" href="/quick-practice"> Quick practice </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  name: 'HeroBanner',
  components: {
    Parallax,
  },
}
</script>

<style lang="scss" scoped>
.hero-banner {
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
  position: relative;
}
.hero__contents-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.hero__buttons-wrapper {
  margin-top: 41px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
}
.hero_img-mobile {
  display: none;
}
.hero__buttons-glass-background {
  height: auto;
  width: auto;
  color: #fff;
  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 40px 32px;
  backdrop-filter: blur(10px);
}
.hero__glass-title {
  color: #e3e3e3;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
}
.hero_buttons-flex-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.hero__cta-button {
  width: 180px;
  outline: none;
  margin: 5px;
  display: inline-block;
  padding: 24px 32px 22px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(30px);
  color: #e3e3e3;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
}
.hero__cta-button:hover {
  background-color: rgba(255,255,255,0.2);
  color: #fff;
}
.hero__cta-button:focus{
   border: none;
   outline: none;
}
@media (max-width: 768px) {
  .hero-banner, .hero__image {
    min-height: 100vh;
  }
}
@media (max-width: 650px) {
  .hero-banner {
    width: auto;
    display: flex;
    justify-content: center;
  }
  .hero__image {
    display: none;
  }
  .hero_img-mobile {
    display: block;
  }
}
@media (max-width: 370px) {
  .hero-banner {
    min-height: unset;
  }
}
</style>
