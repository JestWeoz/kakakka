<template>
  <div class="search-bar-box">
    <h2>Đúng nhà, đúng giá, đúng thời điểm</h2>
    <div class="search-bar">
      <div class="container-search">
        <div class="search">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text color-search" id="basic-addon1">
                <i class="fas fa-search"></i>
              </span>
            </div>
            <input
              type="text"
              v-model="searchKeyword"
              class="form-control bg-light color-search"
              placeholder="Từ khóa, Đường, Quận, Dự án hoặc địa danh ..."
              aria-label="Username"
              aria-describedby="basic-addon1"
              @keyup.enter="handleSearch"
            />
            <div class="input-group-prepend">
              <span
                class="input-group-text color-search btn-search"
                id="basic-addon1"
                @click="handleSearch"
              >
                Tìm kiếm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchKeyword: "", // Chứa từ khóa tìm kiếm
    };
  },
  methods: {
    handleSearch() {
      if (this.searchKeyword) {
        // Chuyển hướng URL kèm từ khóa bằng Vue Router
        this.$router.push({
          path: "/search",
          query: { keyword: this.searchKeyword },
        });
      } else {
        alert("Vui lòng nhập từ khóa tìm kiếm!");
      }
    },
  },
};
</script>
