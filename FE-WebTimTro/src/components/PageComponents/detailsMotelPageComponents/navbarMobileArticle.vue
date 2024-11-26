<template>
  <div class="nav-mobile">
    <div>
      <a href="./index.html">
        <img
          src="https://logodownload.org/wp-content/uploads/2019/08/alba-logo.png"
          width="85"
          height="36"
          alt="mogi"
        />
      </a>
    </div>
    <div>
      <div
        class="icon-nav"
        style="cursor: pointer"
        @click="toggerNav"
        :class="{ changeNav: checkNav }"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  name: "NavbarMobile",
  data() {
    return {
      checkNav: false,
    };
  },
  methods: {
    toggerNav() {
      this.checkNav = !this.checkNav;
    },
  },
};
</script>
    
   