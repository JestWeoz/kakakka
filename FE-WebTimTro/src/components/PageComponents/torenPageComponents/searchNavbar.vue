<template>
  <div class="search-bar-child">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <!-- Thanh tìm kiếm với nút trong cùng -->
          <div class="input-group keywords">
            <div class="input-group-prepend">
              <span class="input-group-text color-search" id="basic-addon1">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </div>
            <input
              style="height: 40px; border: none"
              type="text"
              v-model="searchKeyword"
              class="form-control bg-light color-search"
              placeholder="Từ khóa, Đường, Quận, Dự án hoặc địa danh ..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              @keyup.enter="handleSearch"
            />
            <div class="input-group-append">
              <button
                class="btn btn-success color-search"
                style="height: 40px"
                @click="handleSearch"
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchNavbar",
  data() {
    return {
      searchKeyword: "", // Chứa từ khóa tìm kiếm
    };
  },
  watch: {
    // Theo dõi sự thay đổi của route để cập nhật từ khóa
    "$route.query.keyword": {
      immediate: true,
      handler(newKeyword) {
        this.searchKeyword = newKeyword || ""; // Gán từ khóa từ URL vào input
      },
    },
  },
  methods: {
    handleSearch() {
      if (this.searchKeyword) {
        // Cập nhật URL mà không reload trang
        this.$router.push({
          path: "/search",
          query: { keyword: this.searchKeyword },
        });
      } else {
        this.$router.push("/search");
      }
    },
  },
};
</script>
