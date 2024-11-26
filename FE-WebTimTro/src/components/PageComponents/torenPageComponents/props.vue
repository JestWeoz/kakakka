<template>
  <div class="property-list-result">
    <div class="row">
      <div class="col-sm-9">
        <div class="property-result-summary">
          Có <b>{{ motels.length }}</b> kết quả
        </div>
      </div>
      <div class="col-sm-3">
        <div class="sort-dropdown">
          <select id="sort" v-model="sortOption" @change="sortMotels">
            <option value="date-desc">Mới Nhất</option>
            <option value="price-asc">Giá tiền (Tăng dần)</option>
            <option value="price-desc">Giá tiền (Giảm dần)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <ul class="props">
    <li
      v-for="(motel, index) in motels"
      :key="index"
      style="background-color: #f3ebebc0"
    >
      <div class="prop-img">
        <img
          v-if="motel.filesDTO && motel.filesDTO.length > 0"
          class="lozad"
          :src="motel.filesDTO[0].fileUrl"
          alt="Image"
        />
        <span v-else> Không có hình ảnh</span>
      </div>
      <div class="prop-info">
        <h2 class="prop-title">
          <a
            class="link-overlay"
            @click="toDetailsPage(motel.id, motel.title)"
            >{{ motel.title || motel.detail }}</a
          >
        </h2>
        <div class="prop-addr">{{ motel.address }}</div>
        <ul class="prop-attr">
          <li>
            <i class="fa fa-chart-area"></i> {{ motel.area }} m<sup>2</sup>
          </li>
        </ul>
        <div class="price">{{ formatVND(motel.price) }}</div>
        <div class="prop-extra">
          <div class="prop-created">
            <span>Ngày Đăng: </span>
            <span>{{ formatDate(motel.createAt) || "N/A" }}</span>
          </div>
          <div class="favorite">
            <ul>
              <li><i class="fas fa-phone-alt"></i></li>
              <li class="call-tlphone">
                SĐT: {{ motel.owner.phone || "N/A" }}
              </li>
              <li><i class="far fa-heart"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import { removeVietnameseTones } from "../../../utils/removeVnTone";
export default {
  data() {
    return {
      motels: [],
      sortOption: "date-desc",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.fetchMotels(); // Gọi lại API khi query thay đổi
      },
    },
  },

  mounted() {
    this.fetchMotels(); // Gọi hàm fetch dữ liệu
  },
  methods: {
    formatVND(amount) {
      if (typeof amount !== "number") {
        return "Invalid input";
      }
      return amount.toLocaleString("vi-VN", { style: "decimal" }) + " VND";
    },
    sortMotels() {
      if (this.sortOption === "date-asc") {
        this.motels.sort((a, b) => new Date(a.createAt) - new Date(b.createAt));
      } else if (this.sortOption === "date-desc") {
        this.motels.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
      } else if (this.sortOption === "price-asc") {
        this.motels.sort((a, b) => a.price - b.price);
      } else if (this.sortOption === "price-desc") {
        this.motels.sort((a, b) => b.price - a.price);
      }
    },
    toDetailsPage(id, title) {
      const newTitle = removeVietnameseTones(title);
      const slug = newTitle
        .toLowerCase()
        .replace(/ /g, "-") // Thay khoảng trắng bằng dấu '-'
        .replace(/[^\w-]+/g, "");
      this.$router.push(`/motel/${slug}-${id}`);
    },

    async fetchMotels() {
      try {
        const keyword = this.$route.query.keyword || "";
        const filters = {
          province: this.$route.query.province || "",
          district: this.$route.query.district || "",
          priceFrom: this.$route.query.priceFrom || null,
          priceTo: this.$route.query.priceTo || null,
          areaFrom: this.$route.query.areaFrom || null,
          areaTo: this.$route.query.areaTo || null,
        };

        const response = await axios.get("http://localhost:8081/search", {
          params: {
            keyword,
            ...filters, // Truyền các bộ lọc vào params
          },
        });

        this.motels = response.data;
        this.sortMotels();
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu motels:", error);
      }
    },

    formatDate(date) {
      if (!date) return null;

      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return new Date(date).toLocaleDateString("vi-VN", options);
    },
  },
};
</script>
<style scoped>
.props {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Khoảng cách giữa các mục */
}

.props li {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
}

.prop-img {
  width: 200px; /* Đặt kích thước cố định cho khung chứa ảnh */
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  margin-right: 16px; /* Khoảng cách giữa ảnh và phần thông tin */
}

.prop-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prop-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.prop-title {
  font-size: 16px;
  font-weight: bold;
}

.prop-addr,
.prop-attr,
.price {
  margin: 4px 0;
}

.price {
  color: #00a65a;
  font-size: 18px;
  font-weight: bold;
}

.prop-extra {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}
</style>