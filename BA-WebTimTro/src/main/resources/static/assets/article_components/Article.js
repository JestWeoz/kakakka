var article = Vue.component('Article', {
  template: `
    <div>
      <div class="breadcrumb">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <ul>
                <li>Hpc</li>
                <li><i class="fa fa-caret-right"></i></li>
                <li>Cho thuê nhà đất</li>
                <li><i class="fa fa-caret-right"></i></li>
                <li>Cho thuê chung cư Vinhome Phạm Ngọc Thạch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mg-page-content">
        <div class="container">
          <div class="row">
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div class="main">
                <div class="prop-intro">
                  <div class="gallery" id="gallery">
                    <div class="gallery-item">
                      <img src="https://cloud.mogi.vn/images/2020/10/06/345/3617025d26e4481aa639847e9b6b62a3.jpg" />
                    </div>
                    <div class="gallery-item">
                      <img src="https://cloud.mogi.vn/images/2020/10/06/345/3617025d26e4481aa639847e9b6b62a3.jpg" />
                    </div>
                    <div class="gallery-item">
                      <img src="https://cloud.mogi.vn/images/2020/10/06/345/3617025d26e4481aa639847e9b6b62a3.jpg" />
                    </div>
                    <div class="gallery-item">
                      <img src="https://cloud.mogi.vn/images/2020/10/06/345/3617025d26e4481aa639847e9b6b62a3.jpg" />
                    </div>
                  </div>
                  <div class="header-article">
                    <h1 class="title">Căn hộ mini, có gác full nội thất, siêu đẹp q7</h1>
                    <div class="address nowrap"> Đường số 1, Phường Bình Thuận, Quận 7, TPHCM</div>
                    <div class="price">5 triệu</div>
                  </div>
                  <div class="property-info">
                    <h2 class="prop-content-header">Thông tin chính</h2>
                    <div id="prop-info" class="prop-attrs">
                      <ul class="prop-info">
                        <li><span>Giá</span>: 5 triệu</li>
                        <li><span>Diện tích sử dụng</span>: 30 m<sup>2</sup></li>
                        <li><span>Diện tích đất</span>: </li>
                        <li><span>Ngày đăng</span>: 27/09/2020</li>
                        <li class="last"><span>Mã BĐS</span>: 20657824</li>
                      </ul>
                        <ul class="prop-info">
                        <li><span>Phòng ngủ</span>: 1</li>
                        <li><span>Nhà tắm</span>: 1</li>
                        <li><span>Pháp lý</span>: Không xác định</li>
                        <li class="lastest"><span>Hướng</span>: Không xác định</li>
                      </ul>
                    </div>
                  </div>
                  <div class="prop-info-content">
                    <h2 class="prop-content-header">Mô tả chi tiết</h2>
                    <div class="main-contents-info">
                    CĂN HỘ MINI TẠI QUẬN 7<br />

                    🎁🏵🏵☘️☘️☘️🎆 Vị trí ngay trung tâm Quận 7: gần sát Lotte Mart, SC ViVo, Đh Tôn Đức Thắng, Rmit,..Chỉ 5p ra Quận 4, 10p qua Q1,Q5,Q8…<br />

                    🌲 Phòng mới tinh chưa ai ở.<br />

                    🌲 Đầy đủ tiện nghi, chỉ cần xách vali đến ở.<br />

                    🌲 Hệ thống thang máy, PCCC hiện đại.<br />

                    🌲 Bảo vệ hoặc bảo mật vân tay an toàn🌲 Khu vực an ninh tối ưu.<br />

                    🌲 Wiffi tốc độ cao.<br />

                    🌲 Giờ giấc tự do, không chung chủ, cho bạn thoải mái ra vào.<br />

                    Đầy đủ dạng phòng cho bạn tha hồ lựa chọn.<br />
                    - Phòng có gác đầy đủ nội thất 30m<br />
                    - Phòng có gác, đầy đủ nội thất, có ban công 35m<br />

                    VỚI GIÁ chỉ từ 5tr-6tr<br />

                    🚨Nhanh tay liên hệ để nhận thông tin chi tiết và đi xem nhà nhé👉.<br />
                    Dương (zalo, viber)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <div class="side-bar">
                <div class="agent-info">
                  <img class="agent-avatar" src="https://mogi.vn/content/images/avatar.png" alt="TRAN VAN HOAN" />
                  <div class="agent-name">
                    <a href="/moi-gioi/0785658886-pham-tuan-uid12091171">Trần Văn Hoàn<i class="fas fa-chevron-circle-down"></i></a>
                  </div>
                  <div class="agent-date">Đã tham gia: 1 năm 2 tháng</div>
                </div>
                <div class="agent-contact">
                  <a href="#"><i class="fas fa-phone-alt"></i><strong>0964 341 ***</strong></a>
                  <a href="#"><i class="far fa-envelope"></i><span class="hidden-xs">Gửi tin nhắn</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="SimilarUrl">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="similar-property">
                <h2 class="prop-content-header">Bất động sản tương tự</h2>
                <div class="row row-cols-1 row-cols-md-3" id="SimilarUrlSlide">
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/thumb-small/2020/10/09/096/c343e80e8eb6412bb12bce1c63e33e20.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">6 triệu 300 nghìn</h5>
                          <p class="card-text"><a href="#">Căn Hộ Gác Lững Tiện Nghi, PHAN XÍCH LONG - Gần CoopMart Rạch Miêu</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/201905/21/423/8abccee50a1a4b3ea1b5b3e851aecc29.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">3 triệu 700 nghìn</h5>
                          <p class="card-text"><a href="#">Cho Thuê Căn Hộ Chung Cư Lý Thường Kiệt Quận 10 gần Đại Học HUFLIT</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/thumb-small/2020/06/03/212/32108ac6d06b40b0b6d74775d78e5dad.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">5 triệu 300 nghìn</h5>
                          <p class="card-text"><a href="#">CCăn Hộ Chung Cư Nội Thất Cao cấp Quận 10 Tô Hiến Thành Siêu Thị Big C</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/thumb-small/2020/07/01/331/74aa4ebc05544b219726e9bb02985b3c.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">8 triệu 300 nghìn</h5>
                          <p class="card-text"><a href="#">Căn hộ cao Cấp Quận 10 Tô Hiến Thành TT Thương Mại Sư Vạn Hạnh Small</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/thumb-small/2020/10/09/096/c343e80e8eb6412bb12bce1c63e33e20.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">6 triệu 300 nghìn</h5>
                          <p class="card-text"><a href="#">Căn Hộ Gác Lững Tiện Nghi, PHAN XÍCH LONG - Gần CoopMart Rạch Miêu</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/201905/21/423/8abccee50a1a4b3ea1b5b3e851aecc29.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">3 triệu 700 nghìn</h5>
                          <p class="card-text"><a href="#">Cho Thuê Căn Hộ Chung Cư Lý Thường Kiệt Quận 10 gần Đại Học HUFLIT</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/thumb-small/2020/06/03/212/32108ac6d06b40b0b6d74775d78e5dad.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">5 triệu 300 nghìn</h5>
                          <p class="card-text"><a href="#">CCăn Hộ Chung Cư Nội Thất Cao cấp Quận 10 Tô Hiến Thành Siêu Thị Big C</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="col mb-4">
                      <div class="card">
                        <img src="https://cloud.mogi.vn/images/thumb-small/2020/07/01/331/74aa4ebc05544b219726e9bb02985b3c.jpg" class="card-img-top" alt="test" />
                        <div class="card-body">
                          <h5 class="card-title">8 triệu 300 nghìn</h5>
                          <p class="card-text"><a href="#">Căn hộ cao Cấp Quận 10 Tô Hiến Thành TT Thương Mại Sư Vạn Hạnh Small</a></p>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
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
    initSlicker(){
    $('#gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        infinite: true
    });
   },
   similarUrlSlide(){
    $('#SimilarUrlSlide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
   }
  },
  mounted(){
    this.initSlicker();
    this.similarUrlSlide();
  }
})