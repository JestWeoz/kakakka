// <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//   <ul class="top-price-items">
//     <li class="top-price-item clearfix">
//       <span class="title">Giá nhà cho thuê</span>
//       <a class="more" href="#">Xem thêm<i class="fas fa-chevron-right"></i></a>
//     </li>
//     <li class="top-price-item">
//       <a href="#">
//         <span class="price-item-street">Nguyễn Thiệp, Phường Bến Nghé</span> 
//         <span class="price-item-price">1 tỷ/m<sup>2<sup></sup></sup></span>
//       </a>
//     </li>
//     <li class="top-price-item">
//       <a href="#">
//         <span class="price-item-street">Nguyễn Thiệp, Phường Bến Nghé</span> 
//         <span class="price-item-price">1 tỷ/m<sup>2<sup></sup></sup></span>
//       </a>
//     </li>
//     <li class="top-price-item">
//       <a href="#">
//         <span class="price-item-street">Nguyễn Thiệp, Phường Bến Nghé</span> 
//         <span class="price-item-price">1 tỷ/m<sup>2<sup></sup></sup></span>
//       </a>
//     </li>
//     <li class="top-price-item">
//       <a href="#">
//         <span class="price-item-street">Nguyễn Thiệp, Phường Bến Nghé</span> 
//         <span class="price-item-price">1 tỷ/m<sup>2<sup></sup></sup></span>
//       </a>
//     </li>
//   </ul>
// </div>
var propertyListing = Vue.component('propertyListing', {
  template: `
    <div class="property-listing">
      <h2 class="title">Cho thuê tại Hà Nội</h2>
      <div class="row property-list">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ul class="property-items">
            <li class="property-item">
              <img class="lozad" alt="" src="https://cloud.mogi.vn/images/thumb-xs/2020/06/11/339/8915f665192843efa9a7341c4816721e.jpg" data-loaded="true" />
              <a href="./article.html" class="title link-overlay" gtm-event="link" gtm-cat="home" gtm-act="property-latest">Cho thuê dãy nhà trọ khu tái định cư êm đềm,gần kcx linh trung1 th đức.</a>
              <ul class="prop-attr">
                <li><i class="fa fa-chart-area"></i>121 m<sup>2</sup></li>
                <li><i class="fa fa-bed"></i>8</li>
                <li><i class="fa fa-bath"></i>8</li>
              </ul>
              <div class="price">2 triệu</div>
            </li>
            <li class="property-item">
              <img class="lozad" alt="" src="https://cloud.mogi.vn/images/thumb-small/2020/08/13/161/9d92e59686d147a3b3d68a528386594f.jpg" data-loaded="true" />
              <a href="./article.html" class="title link-overlay" gtm-event="link" gtm-cat="home" gtm-act="property-latest">Bán nhà dãy nhà trọ khu tái định cư êm đềm,gần kcx linh trung1 th đức.</a>
              <ul class="prop-attr">
                <li><i class="fa fa-chart-area"></i>121 m<sup>2</sup></li>
                <li><i class="fa fa-bed"></i>8</li>
                <li><i class="fa fa-bath"></i>8</li>
              </ul>
              <div class="price">2.5 triệu</div>
            </li>
            <li class="property-item">
              <img class="lozad" alt="" src="https://cloud.mogi.vn/images/thumb-small/2020/07/06/349/109894f4096f4539ab1b017e867db7d6.jpg" data-loaded="true" />
              <a href="./article.html" class="title link-overlay" gtm-event="link" gtm-cat="home" gtm-act="property-latest">Cho thuê dãy nhà trọ khu tái định cư êm đềm,gần kcx linh trung1 th đức.</a>
              <ul class="prop-attr">
                <li><i class="fa fa-chart-area"></i>121 m<sup>2</sup></li>
                <li><i class="fa fa-bed"></i>8</li>
                <li><i class="fa fa-bath"></i>8</li>
              </ul>
              <div class="price">5 triệu</div>
            </li>
            <li class="property-item">
              <img class="lozad" alt="" src="https://cloud.mogi.vn/images/thumb-small/2020/08/28/492/e2c5e373d9e94823b28fba1f12538be3.jpg" data-loaded="true" />
              <a href="./article.html" class="title link-overlay" gtm-event="link" gtm-cat="home" gtm-act="property-latest">Cho thuê dãy nhà trọ khu tái định cư êm đềm,gần kcx linh trung1 th đức.</a>
              <ul class="prop-attr">
                <li><i class="fa fa-chart-area"></i>121 m<sup>2</sup></li>
                <li><i class="fa fa-bed"></i>8</li>
                <li><i class="fa fa-bath"></i>8</li>
              </ul>
              <div class="price">3 triệu</div>
            </li>
            <li class="property-item">
              <img class="lozad" alt="" src="https://cloud.mogi.vn/images/thumb-small/2020/06/28/384/28478a24b0c447b88ae2982d2e47311b.jpg" data-loaded="true" />
              <a href="./article.html" class="title link-overlay" gtm-event="link" gtm-cat="home" gtm-act="property-latest">Cho thuê dãy nhà trọ khu tái định cư êm đềm,gần kcx linh trung1 th đức.</a>
              <ul class="prop-attr">
                <li><i class="fa fa-chart-area"></i>121 m<sup>2</sup></li>
                <li><i class="fa fa-bed"></i>8</li>
                <li><i class="fa fa-bath"></i>8</li>
              </ul>
              <div class="price">5 triệu</div>
            </li>
            <li class="property-item">
              <img class="lozad" alt="" src="https://cloud.mogi.vn/images/thumb-xs/2020/10/05/529/8c29a982845249eb8ff43269909ea308.jpg" data-loaded="true" />
              <a href="./article.html" class="title link-overlay" gtm-event="link" gtm-cat="home" gtm-act="property-latest">Cho thuê dãy nhà trọ khu tái định cư êm đềm,gần kcx linh trung1 th đức.</a>
              <ul class="prop-attr">
                <li><i class="fa fa-chart-area"></i>121 m<sup>2</sup></li>
                <li><i class="fa fa-bed"></i>8</li>
                <li><i class="fa fa-bath"></i>8</li>
              </ul>
              <div class="price">6 triệu</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})