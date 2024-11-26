<template>
  <!-- NAVBAR -->

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
</template>
  
  <script>
import Footer from "../homePageComponents/footer.vue";
import formPost from "../postMotelPageComponents/formPost.vue";

export default {
  name: "postMotelPage",
  components: {
    "cls-footer": Footer,
    "form-post": formPost,
  },
};
</script>