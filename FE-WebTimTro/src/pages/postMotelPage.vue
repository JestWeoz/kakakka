<template>
  <div>
    <!-- NAVBAR -->
    <div class="hpc-navbar">
      <div class="container">
        <div class="row">
          <cls-navbar />
          <cls-navbarmobile />
        </div>
      </div>
    </div>
    <!-- END NAVBAR -->

    <!-- REVIEW WARD -->
    <div class="col-12">
      <div class="container">
        <div class="widget">
          <form-post></form-post>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="card-footer">
      <cls-footer />
    </div>
    <!-- END FOOTER -->
  </div>
</template>

<script>
import Footer from "@/components/PageComponents/homePageComponents/footer.vue";
import NavbarMobile from "@/components/PageComponents/homePageComponents/navbarMobile.vue";
import NavbarPostPage from "@/components/PageComponents/postMotelPageComponents/navbarPostPage.vue";
import formPost from "@/components/PageComponents/postMotelPageComponents/formPost.vue";

export default {
  name: "postMotelPage",
  components: {
    "cls-navbar": NavbarPostPage,
    "cls-navbarmobile": NavbarMobile,
    "cls-footer": Footer,
    "form-post": formPost,
  },
};
</script>