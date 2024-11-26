var navbarmobile = Vue.component('navbarmobile', {
  template: `
    <div class="nav-mobile">
      <div>
        <a href="/index.html">
          <img src="https://logodownload.org/wp-content/uploads/2019/08/alba-logo.png" width="85" height="36" alt="mogi" />
        </a>
      </div>
      <div>
        <div class="icon-nav"
        style="cursor: pointer;" 
        v-on:click="toggerNav()"
        v-bind:class="{changeNav: checkNav}"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
    </div>
  `,
  data: function(){
    return{
      checkNav: false
    }
  },
  methods:{
    toggerNav(){
      this.checkNav = !this.checkNav;
    }
  },
  mounted(){
  }
})