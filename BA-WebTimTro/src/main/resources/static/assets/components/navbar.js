var navbar = Vue.component('navbar', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light nav-desktop">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto logo">
          <li class="nav-item">
            <a href="./index.html">
              <img src="https://business.pinterest.com/brand-guidelines/" width="85" height="36" alt="mogi" />
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto menu-top">
          <li class="nav-item ml-2">
            <a class="nav-link" href="./torent.html">Tìm thuê</a>
          </li>
          <li class="nav-item ml-2">
            <a class="nav-link" href="./lienhe.html">Liên hệ</a>
          </li>
          <li class="nav-item ml-2">
            <a class="nav-link"><i class="far fa-heart"></i></a>
          </li>
          <li class="nav-item ml-2">
            <a class="nav-link"><i class="far fa-bell"></i></a>
          </li>
          <li class="nav-item ml-2">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng tin</button>
          </li>
        </ul>
      </div>
    </nav>
  `
})