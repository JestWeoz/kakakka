<template>
  <div class="container">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages" :key="page">
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      pages: Array.from({ length: 10 }, (_, i) => i + 1) // Tạo danh sách trang từ 1 đến 10
    };
  }
};
</script>

<style scoped>
/* Thêm CSS tùy chỉnh nếu cần */
</style>
