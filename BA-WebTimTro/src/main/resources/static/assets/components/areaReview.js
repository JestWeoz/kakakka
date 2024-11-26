var areaReview = Vue.component('areaReview', {
  template: `
    <div class="ward-review">
      <h2 class="title">Khu vực nhiều người xem</h2>
      <div class="row ward-review-list" id="area-review">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="ward-review-item">
              <img src="../img/ho-chi-minh-city.jpg" alt="" />
              <div class="caption">
                Khám phá 154 khu vực ở
                <span>Quận Nam Từ Liêm</span>
              </div>  
              <a href="#" class="link-overlay">
                <span>Xem ngay</span>
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="ward-review-item">
              <img src="../img/hanoi-city.jpg" alt="" />
              <div class="caption">
                Khám phá 124 khu vực ở
                <span>Quận Bắc Từ Liêm</span>
              </div>  
              <a href="#" class="link-overlay">
                <span>Xem ngay</span>
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="ward-review-item">
              <img src="../img/ho-chi-minh-city.jpg" alt="" />
              <div class="caption">
                Khám phá 154 khu vực ở
                <span>Quận Hồ Tây</span>
              </div>  
              <a href="#" class="link-overlay">
                <span>Xem ngay</span>
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="ward-review-item">
              <img src="../img/ho-chi-minh-city.jpg" alt="" />
              <div class="caption">
                Khám phá 154 khu vực ở
                <span>Quận Hồ Tây</span>
              </div>  
              <a href="#" class="link-overlay">
                <span>Xem ngay</span>
              </a>
            </div>
          </div>
      </div>
    </div>
  `,
  data: function(){
    return{

    }
  },

  methods:{
    areaReview(){
    $('#area-review').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        arrows: false,
        responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
   }
  },
  mounted(){
    this.areaReview();
  }
})