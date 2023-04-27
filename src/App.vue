<script>
import AppHeader from './components/AppHeader.vue'
import sliderImages from './assets/data/sliderImages'
export default {

  components: { AppHeader, },

  data() {
    return {
      sliderImages,
      activeImg: 1,
    }
  }

}
</script>
<template>
  <AppHeader />
  <main id="page_main">
    <section id="slider_sec">
      <div class="slider w-100">
        <div class="image w-100">
          <img :src="'/src/assets/' + sliderImages[activeImg].imgSrc" alt="slider_img"
            :class="i == activeImg ? 'd-block' : 'd-none'" v-for="(img, i) in sliderImages[activeImg].imgSrc"
            class="img-fluid">
        </div>
        <div class="comands position-absolute py-1 bg-dark rounded-pill">
          <button :class="activeImg == 0 ? 'myBtn' : ''" class="rounded-pill btn" @click="activeImg = 0">01</button>
          <button :class="activeImg == 1 ? 'myBtn' : ''" class="rounded-pill btn" @click="activeImg = 1">02</button>
          <button :class="activeImg == 2 ? 'myBtn' : ''" class="rounded-pill btn" @click="activeImg = 2">03</button>
        </div>
      </div>
      <!-- TODO : insert paragraph description  -->
      <div class="focus_paragraph position-absolute">
        <h5 class="text-uppercase">17 years of experience</h5>
        <h1>
          focus on your <b>business</b>
        </h1>
        <div class="my_banner">
          <div class="small_banner"></div>
          <div class="large_banner"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet necessitatibus ex quo pariatur consequatur
          repellat deleniti, numquam inventore corrupti, provident sapiente illum quidem non suscipit quasi obcaecati at
          quos! Aliquid, corrupti, doloremque quae, numquam repellat accusantium atque perferendis voluptate illum totam
          incidunt quisquam quia neque nemo quas dolor excepturi asperiores.
        </p>
        <button class="myBtnSecondary rounded-pill">read more</button><br>
        <span> <a href="#">facebook</a> </span>
        <span> - </span>
        <span> <a href="#">instagram</a> </span>
        <span> - </span>
        <span> <a href="#">youtube</a> </span>
        <span> - </span>
        <span> <a href="#">twitter</a> </span>
      </div>
    </section>
    <!-- /#slider_sec -->
  </main>
  <!-- /#page_main -->
</template>


<style lang="scss" scoped>
#slider_sec {

  position: relative;
  background-color: #f5f5f5;

  .image {

    img {
      margin-left: auto;
      width: 1200px;
      height: 920px;
      object-fit: none;
      object-position: 80px -200px;
    }
  }

  .comands {
    z-index: 100000;

    background-image: linear-gradient(to right, #686868 0%, #353535 51%, #222222 100%);
    left: 40%;
    top: 90%;

    button {
      color: #dadada;
      font-size: large;
      font-weight: bold;

    }

    .myBtn {
      padding: 0.5rem 1rem;
      margin: 0px 5px;
      box-shadow: none;

    }
  }

  .focus_paragraph {
    width: 35%;
    top: 20%;
    left: 10%;

    h5 {
      color: #00d9a6;
      font-size: 1.10rem;
      letter-spacing: 4px;
      word-spacing: 10px;
    }

    h1 {
      text-transform: capitalize;
      font-weight: 700;
      font-size: 5rem;
      word-spacing: 5px;

      b {
        color: #00d9a6;
      }
    }

    span {
      a {
        text-transform: uppercase;
        text-decoration: none;
        color: #000000;

        &:hover {
          text-decoration: underline;
        }

      }
    }
  }


}
</style>