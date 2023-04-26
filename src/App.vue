<script>
export default {

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

    <div class="main_header">
      <div class="container">

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
}
</style>