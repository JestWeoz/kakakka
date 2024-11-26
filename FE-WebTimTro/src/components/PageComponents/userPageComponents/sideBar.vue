<template>
  <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap" />
      </svg>
      <span class="fs-4">Trang chủ</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#home" />
          </svg>
          Thông tin
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2" />
          </svg>
          Đăng Tin
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#table" />
          </svg>
          Quản lý tin đã đăng
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#grid" />
          </svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#people-circle" />
          </svg>
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <Dropdown />
  </div>
</template>
  
  <script>
import dropdown from "./dropdown.vue";

export default {
  name: "Sidebar",
  components: {
    Dropdown: dropdown,
  },
};
</script>
  
  <style scoped>
.sidebar {
  width: 280px;
  height: 100vh; /* Full screen height */
  position: fixed; /* Fixed on the left side */
  top: 0;
  left: 0;
}
</style>
  