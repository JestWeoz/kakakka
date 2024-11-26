var kindsOfHouse = Vue.component('kindsOfHouse', {
  template: `
    <div class="widget">
      <h3>Loại bất động sản</h3>
      <ul>
        <li>
          <a class="circle" href="/thue-nha" title="Nhà"><i class="fas fa-chevron-circle-right"></i>Nhà <span class="counter">(52.903)</span>
          </a>
        </li>
        <li>
          <a class="circle" href="/thue-can-ho" title="Căn hộ"><i class="fas fa-chevron-circle-right"></i>Căn hộ <span class="counter">(52.611)</span>
          </a>
        </li>
        <li>
          <a class="circle" href="/thue-phong-tro-nha-tro" title="Phòng trọ"><i class="fas fa-chevron-circle-right"></i>Phòng trọ <span class="counter">(6.428)</span>
          </a>
        </li>
        <li>
          <a class="circle" href="/thue-mat-bang-cua-hang-shop" title="Mặt bằng"><i class="fas fa-chevron-circle-right"></i>Mặt bằng <span class="counter">(6.890)</span>
          </a>
        </li>
        </ul>
    </div>
  `
})