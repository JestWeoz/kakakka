<template>
  <div class="hpc-navbar">
    <div class="container">
      <div class="row">
        <NavbarAcrticle />
        <NavbarMobileArticle />
      </div>
    </div>
  </div>

  <MainDetails />
  <Footer></Footer>
</template>

<script>
import MainDetails from "@/components/PageComponents/detailsMotelPageComponents/mainDetails.vue";
import NavbarAcrticle from "@/components/PageComponents/detailsMotelPageComponents/navbarAcrticle.vue";
import NavbarMobileArticle from "@/components/PageComponents/detailsMotelPageComponents/navbarMobileArticle.vue";
import Footer from "@/components/PageComponents/homePageComponents/footer.vue";

export default {
  name: "MotelDetail",
  components: {
    NavbarAcrticle,
    NavbarMobileArticle,
    MainDetails,
    Footer,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

