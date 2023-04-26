<script>
import menuLinks from './assets/data/menuLinks'
export default {

  data() {
    return {
      menuLinks,
      isActive: 0,
    }
  }

}
</script>
<template>
  <header id="page_header">
    <div class="header_top">
      <div class="container d-flex justify-content-between h-100">
        <div class="header_contacts d-flex align-items-center gap-2 h-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" class="bi bi-telephone-fill"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <span>(001)</span>
          <a href="tel:+">88451234</a>
          <a href="tel:+">88455438</a>
        </div>
        <div class="header_socials d-flex align-items-center gap-4 h-100">

          <a href="http://facebook.com">
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </a>

          <a href="http://pinterest.com">
            <font-awesome-icon icon="fa-brands fa-pinterest-p" />
          </a>

          <a href="http://twitter.com">
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </a>

        </div>

      </div>
    </div>
    <!-- /.header_top -->

    <div class="main_header bg-light">

      <div class="container h-100">
        <nav class="h-100 d-flex justify-content-between">

          <div class="logo d-flex align-items-center h-100">
            <a href="/">
              <img src="./assets/img/cropped-Group-39-2x.png" alt="logo_group" height="45">
            </a>
          </div>
          <div class="menu d-flex align-items-center h-100">
            <ul class="list-unstyled d-flex align-items-center gap-3 m-0">
              <li v-for="(link, i) in menuLinks" :class="isActive == i ? 'active' : ''" @click="isActive = i">
                <a :href="link.href">{{ link.link.toUpperCase() }}</a>
              </li>
            </ul>
          </div>
          <div class="btn_sec h-100 d-flex align-items-center gap-3">
            <button class="myBtn rounded-pill">purchase</button>
            <button class="search btn m-0 rounded-circle">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" />
            </button>

          </div>
        </nav>
      </div>

    </div>
    <!-- /.main_header -->
  </header>
  <!-- /#page_header -->
</template>


<style lang="scss" scoped>
#page_header {

  .header_top {
    height: 40px;
    background-color: #3d3d3d;
    color: #ffffff;

    a {
      text-decoration: none;
      color: #ffffff;
      margin: 0;
    }

    .header_contacts {

      a:hover {
        text-decoration: underline;
      }
    }

    .header_socials {
      svg {
        width: 20px;
        height: 20px;
      }
    }

  }

  .main_header {
    height: 100px;

    nav {
      .menu {
        li {

          a {
            text-decoration: none;
            color: #000000;
          }

          &.active {
            a {
              font-weight: bold;
            }
          }
        }
      }

      .btn_sec {
        .myBtn {
          background-image: linear-gradient(to right, #bdf574 0%, #00d9a6 51%, #0fdee6 100%);
          margin: 10px;
          padding: 15px 45px;
          text-align: center;
          text-transform: uppercase;
          transition: 0.5s;
          background-size: 200% auto;
          color: #ffffff;
          box-shadow: 4px 4px 20px 0px #9ccdee;
          border-radius: 10px;
          border: none;
          display: block;

          &:hover {
            background-position: right center;
            color: #ffffff;
            text-decoration: none;
          }
        }

        .search {

          &:hover {
            background-color: #9ccdee;

            .icon {
              color: #ffffff;
            }
          }

          .icon {
            color: #00d9a6;
          }

        }
      }

    }

  }
}
</style>