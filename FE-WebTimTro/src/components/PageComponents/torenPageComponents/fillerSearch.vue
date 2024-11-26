<template>
  <div class="widget">
    <!-- Nút mũi tên -->
    <div class="toggle-button" @click="toggleExpand">
      <span>{{ isExpanded ? "Đóng" : "Bộ Lọc Tìm Kiếm" }}</span>
      <img
        v-if="isExpanded"
        src="@/assets/chevron-up.svg"
        alt="Chevron Up"
        class="icon"
      />
      <img
        v-else
        src="@/assets/chevron-down.svg"
        alt="Chevron Down"
        class="icon"
      />
    </div>

    <!-- Nội dung bảng lọc -->
    <div v-if="isExpanded" class="filter-content">
      <!-- Bộ lọc Tỉnh/Thành -->
      <div class="filter-group">
        <h5>Chọn Tỉnh/Thành</h5>
        <select
          v-model="province"
          class="form-select"
          @change="onProvinceChange"
        >
          <option value="">Tất cả</option>
          <option
            v-for="province in provinces"
            :key="province.code"
            :value="province.name"
          >
            {{ province.name }}
          </option>
        </select>
      </div>
      <!-- Bộ lọc Quận -->
      <div class="filter-group">
        <h5>Chọn Quận</h5>
        <select
          v-model="district"
          @change="onDistrictChange"
          :disabled="!districts.length"
          class="form-select"
        >
          <option value="" selected>Tất cả</option>
          <option
            v-for="district in districts"
            :key="district.code"
            :value="district.name"
          >
            {{ district.name }}
          </option>
        </select>
      </div>

      <!-- Bộ lọc Khoảng Giá -->
      <div class="filter-group">
        <h5>Khoảng Giá (VNĐ)</h5>
        <div class="input-group">
          <input
            type="number"
            v-model="priceRange.min"
            placeholder="Từ"
            class="form-control"
          />
          <span class="input-group-text">-</span>
          <input
            type="number"
            v-model="priceRange.max"
            placeholder="Đến"
            class="form-control"
          />
        </div>
      </div>

      <!-- Bộ lọc Khoảng Diện Tích -->
      <div class="filter-group">
        <h5>Khoảng Diện Tích (m²)</h5>
        <div class="input-group">
          <input
            type="number"
            v-model="areaRange.min"
            placeholder="Từ"
            class="form-control"
          />
          <span class="input-group-text">-</span>
          <input
            type="number"
            v-model="areaRange.max"
            placeholder="Đến"
            class="form-control"
          />
        </div>
      </div>

      <!-- Nút Áp Dụng -->
      <div class="filter-group">
        <button class="btn btn-success mt-3" @click="applyFilters">
          Áp dụng
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchAdvance",
  data() {
    return {
      searchKeyword: "",
      districts: [],
      provinces: [],
      isExpanded: false,
      district: "",
      province: "",
      priceRange: { min: null, max: null },
      areaRange: { min: null, max: null },
    };
  },
  created() {
    this.fetchCities();
    this.syncFiltersWithQuery();
  },
  watch: {
    "$route.query": {
      immediate: true,
      handler(newQuery) {
        this.syncFiltersWithQuery();
      },
    },
    "$route.query.keyword": {
      immediate: true,
      handler(newKeyword) {
        this.searchKeyword = newKeyword || ""; // Gán từ khóa từ URL vào input
      },
    },
  },
  methods: {
    async onProvinceChange() {
      if (!this.province) {
        this.districts = [];
        this.district = "";
        return;
      }

      let code;
      for (let item of this.provinces) {
        if (item.name == this.province) {
          code = item.code;
          break;
        }
      }

      try {
        const response = await axios.get(
          `https://provinces.open-api.vn/api/p/${code}?depth=2`
        );
        this.districts = response.data.districts;
      } catch (error) {
        console.error("Error fetching districts:", error);
        this.districts = [];
      }
    },
    async fetchCities() {
      try {
        const response = await axios.get(
          "https://provinces.open-api.vn/api/?depth=1"
        );
        this.provinces = response.data;

        if (this.$route.query.province) {
          await this.onProvinceChange();
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    syncFiltersWithQuery() {
      const query = this.$route.query;

      this.province = query.province || "";
      this.district = query.district || "";

      this.priceRange = {
        min: query.priceFrom ? Number(query.priceFrom) : null,
        max: query.priceTo ? Number(query.priceTo) : null,
      };
      this.areaRange = {
        min: query.areaFrom ? Number(query.areaFrom) : null,
        max: query.areaTo ? Number(query.areaTo) : null,
      };

      this.isExpanded =
        !!query.province ||
        !!query.district ||
        !!query.priceFrom ||
        !!query.priceTo ||
        !!query.areaFrom ||
        !!query.areaTo;
    },
    applyFilters() {
      const filters = {
        district: this.district,
        province: this.province,
        priceFrom: this.priceRange.min,
        priceTo: this.priceRange.max,
        areaFrom: this.areaRange.min,
        areaTo: this.areaRange.max,
      };

      // Remove undefined values
      Object.keys(filters).forEach(
        (key) => filters[key] === undefined && delete filters[key]
      );

      // Kiểm tra nếu không có filter nào được chọn
      const hasNoFilters = Object.keys(filters).length === 0;

      if (hasNoFilters) {
        if (this.searchKeyword) {
          this.$router.push({
            path: "/search",
            query: { keyword: this.searchKeyword },
          });
        } else {
          this.$router.push("/search");
        }
      } else {
        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            ...filters,
          },
        });
      }
    },
  },
};
</script>


<style scoped>
.widget {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}

.toggle-button {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;
}

.toggle-button i {
  margin-left: 8px;
}

.filter-content {
  margin-top: 8px;
}

.filter-group {
  margin-bottom: 1rem;
}

.input-group {
  display: flex;
  align-items: center;
}

.input-group-text {
  background-color: #f8f9fa;
}

.btn {
  width: 100%;
}
.icon {
  margin-left: 8px;
}
</style>
