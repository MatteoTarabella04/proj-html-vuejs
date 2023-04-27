<script>
import AppHeader from './components/AppHeader.vue'
import sliderImages from './assets/data/sliderImages'
import yourWebsiteCards from './assets/data/yourWebsiteCards'
export default {

  components: { AppHeader, },

  data() {
    return {
      sliderImages,
      yourWebsiteCards,
      activeImg: 1,
    }
  }

}
</script>
<template>
  <AppHeader />
  <!-- /AppHeader -->

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
    <section id="whatWeDo">
      <div class="container d-flex">
        <div class="text_desc">
          <h2>
            we are here to make your <b>website</b> look more <b>elegant</b> and stylish!
          </h2>
          <div class="my_banner">
            <div class="small_banner"></div>
            <div class="large_banner"></div>
          </div>
          <button class="myBtn rounded-pill">vew all</button>
        </div>
        <div class="cards">
          <div class="row row-cols-2">
            <div v-for="card in yourWebsiteCards" class="col">
              <div class="card">
                <img :src="card.icon" :alt="card.title">
                <h3>
                  {{ card.title }}
                </h3>
                <p>
                  {{ card.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /#whatWeDo -->
    <section id="learnMore">
      <div class="bg_image">
        <div class="bg_cover"></div>
      </div>

      <div class="container d-flex">
        <div class="poster">
          <img src="./assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
        </div>
        <div class="learn_desc">
          <h2>
            learn more about our <b>missions</b>
          </h2>
          <div class="my_banner">
            <div class="small_banner"></div>
            <div class="large_banner"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus voluptas itaque ut explicabo totam vel
            accusantium veniam! Architecto velit beatae, temporibus magnam, odio, asperiores esse cum earum quis fuga
            iure.
          </p>
          <button class="myBtn rounded-pill">read more</button>
        </div>
      </div>
    </section>
    <!-- /#learnMore -->
  </main>
  <!-- /#page_main -->
</template>


<style lang="scss" scoped>
#slider_sec {
  margin-bottom: 15rem;

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

#whatWeDo {

  padding-bottom: 10rem;

  .text_desc {
    width: 40%;
    padding-top: 4rem;

    h2 {
      font-size: 4rem;
      text-transform: capitalize;
      line-height: 5rem;

      b {
        color: #00d9a6;
      }
    }

  }


  .cards {
    width: 60%;

    .col {
      margin-bottom: 2rem;
    }

    .card {

      img {
        color: #00d9a6;
        height: 5rem;
        width: 5rem;
        margin-bottom: 2rem;
      }

      h3 {
        margin-bottom: 1rem;
        text-transform: capitalize;
      }

      border: none;
      border-radius: 1.5rem;
      box-shadow: 3px 3px 15px 2px #e7e7e7;
      padding: 3rem;

      &:hover {
        cursor: pointer;
        transition: 0.8s;
        background-image: linear-gradient(to right, #bdf574 0%, #00d9a6 51%, #0fdee6 100%);
        color: #ffffff;

        img {
          transition: 0.8s;
          filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(200%) contrast(100%);
        }
      }
    }
  }
}

#learnMore {
  background-color: #f5f5f5;
  padding-top: 10rem;
  height: 1000px;
  display: flex;

  .bg_image {
    position: relative;

    width: 750px;
    height: 640px;
    background-image: url('./assets/img/busy-architect-PYVKWM4-1024x872.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    border-top-right-radius: 3rem;

    .bg_cover {
      width: 750px;
      height: 640px;
      background-image: linear-gradient(to right, #bdf574 0%, #00d9a6 51%, #0fdee6 100%);
      border-top-right-radius: 3rem;
      filter: opacity(80%);
    }
  }

  .poster {
    position: absolute;
    left: 235px;
    top: 2480px;

    img {
      width: 750px;
      border-radius: 2rem;
    }
  }

  .learn_desc {
    margin-left: auto;
    margin-top: 5rem;
    padding: 1rem;
    width: 60%;

    h2 {
      font-size: 3rem;

      b {
        color: #00d9a6;
      }
    }

    .myBtn {
      margin: 3rem 0;
    }
  }

}
</style>