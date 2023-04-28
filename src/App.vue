<script>
import AppHeader from './components/AppHeader.vue'
import sliderImages from './assets/data/sliderImages'
import yourWebsiteCards from './assets/data/yourWebsiteCards'
import exaplesImages from './assets/data/exaplesImages'
export default {

  components: { AppHeader, },

  data() {
    return {
      sliderImages,
      yourWebsiteCards,
      exaplesImages,
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
    <section id="examples">
      <div class="container">
        <div class="intro_content d-flex">

          <div class="right">
            <h2>
              Our recent <b>web design</b> & some exaple of past <b>projects</b>
            </h2>
            <div class="my_banner">
              <div class="small_banner"></div>
              <div class="large_banner"></div>
            </div>
          </div>
          <div class="left">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe labore tenetur perferendis vel excepturi
              laudantium blanditiis tempore. Libero quibusdam voluptatem enim nam adipisci quos? Eaque expedita velit
              facilis magnam mollitia tempore animi eius obcaecati error quod quaerat, veniam harum at tenetur voluptate
              praesentium. Sequi harum, deleniti debitis hic officia fugit?
            </p>
          </div>

        </div>
        <div class="row row-cols-4">
          <div v-for="item in exaplesImages" class="col g-1 flex-shrink-1">
            <div class="card">
              <img :src="item.path" :alt="item.title" class="img-fluid">
            </div>
            <div class="card hidden">
              <img :src="item.path" :alt="item.title" class="img-fluid">
              <div class="card_content">
                <h3>
                  {{ item.title }}
                </h3>
                <h5>
                  {{ item.category.toUpperCase() }}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="btn_sec w-100 d-flex justify-content-center">
          <button class="myBtn rounded-pill">read more</button>

        </div>
      </div>
    </section>
    <!-- /#examples -->
    <section id="stats">
      <div class="container position-relative">
        <div class="card myCard d-flex alig align-items-center justify-content-center">
          <div class="content">
            <h2>
              280
            </h2>
            <p>
              projects
            </p>
            <div class="statistics d-flex justify-content-between align-items-center">
              <div class="left">
                <h3>
                  +3,500
                </h3>
                <p>
                  users' comments
                </p>
              </div>
              <div class="bord_banner"></div>
              <div class="right">
                <h3>
                  100%
                </h3>
                <p>
                  happy clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card myCard_2 position-absolute">
          <h2>
            we <b>love</b> what we do
          </h2>
          <div class="my_banner">
            <div class="small_banner"></div>
            <div class="large_banner"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nesciunt aperiam tempore, error, a vero
            voluptatem dolorem, deserunt sed magnam aut cum at suscipit? Quam vitae asperiores vel ad nulla distinctio,
            expedita animi a iure, officia magni neque corporis recusandae! Ab consequuntur necessitatibus molestiae
            cupiditate.
          </p>
          <ul class="list-unstyled">
            <li>
              <span>✔</span> Lorem ipsum dolor sit amet.
            </li>
            <li>
              <span>✔</span> Lorem ipsum, dolor sit amet consectetur adipisicing.
            </li>
            <li>
              <span>✔</span> Lorem ipsum dolor sit.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- /#stats -->
    <section id="support">
      <div class="container d-flex flex-wrap gap-5">
        <div class="description">
          <h2>
            with <b>live chat 24/7</b> support
          </h2>
          <div class="my_banner">
            <div class="small_banner"></div>
            <div class="large_banner"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias! Consequuntur sit adipisci odio,
            magnam autem minus cum exercitationem, qui reiciendis commodi cumque officia dolore perferendis nam animi,
            doloremque laborum?
          </p>
        </div>
        <div class="card">
          <div class="title">
            <h3>
              designing
            </h3>
            <p>
              all designs
            </p>
          </div>
          <div class="price">
            <p>
            <h2>$</h2>
            <h3>13</h3>
            <h2>/ design</h2>
            </p>
          </div>
          <div class="body">
            <ul class="list-unstyled">
              <li>
                <span>✔</span> creative design enabled
              </li>
              <li>
                <span>✔</span> vibrant color usage
              </li>
              <li>
                <span>✔</span> eye catching design
              </li>
              <li>
                <span>✔</span> extreme typography
              </li>
              <li>
                <span>✔</span> exceptional design
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="title">
            <h3>
              designing
            </h3>
            <p>
              all designs
            </p>
          </div>
          <div class="price">
            <p>
            <h2>$</h2>
            <h3>13</h3>
            <h2>/ design</h2>
            </p>
          </div>
          <div class="body">
            <ul class="list-unstyled">
              <li>
                <span>✔</span> creative design enabled
              </li>
              <li>
                <span>✔</span> vibrant color usage
              </li>
              <li>
                <span>✔</span> eye catching design
              </li>
              <li>
                <span>✔</span> extreme typography
              </li>
              <li>
                <span>✔</span> exceptional design
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="title">
            <h3>
              designing
            </h3>
            <p>
              all designs
            </p>
          </div>
          <div class="price">
            <p>
            <h2>$</h2>
            <h3>13</h3>
            <h2>/ design</h2>
            </p>
          </div>
          <div class="body">
            <ul class="list-unstyled">
              <li>
                <span>✔</span> creative design enabled
              </li>
              <li>
                <span>✔</span> vibrant color usage
              </li>
              <li>
                <span>✔</span> eye catching design
              </li>
              <li>
                <span>✔</span> extreme typography
              </li>
              <li>
                <span>✔</span> exceptional design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- /#support -->
    <section id="client">
      <div class="container d-flex flex-column align-items-center justify-content-center h-100">
        <b>&#786; &#786;</b><br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi qui magnam, mollitia ipsa
          reprehenderit! Quam voluptatibus asperiores commodi ipsa.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, consequatur?
        </p>
        <div class="avatar">
          <img src="./assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="">
        </div>
        <div class="client_infos">
          <h3>
            lissa durbin
          </h3>
          <p>
            client
          </p>
        </div>
      </div>
    </section>
    <!-- /#client -->
    <section id="news">
      <div class="container">
        <div class="title">
          <h2>
            latest news & our <b>blog</b>
          </h2>
        </div>
        <div class="my_banner">
          <div class="small_banner"></div>
          <div class="large_banner"></div>
        </div>

        <div class="row row-cols-3">
          <div class="col">
            <div class="card">
              <img src="./assets/img/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1024.jpg" alt=""
                class="img-fluid">
              <div class="news_banner">
                <p>May 24, 2018 ●by Alex</p>
                <ul>
                  <li>
                    <span>
                      <h3>
                        Marketing ideas
                      </h3>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./assets/img/Businessman-at-the-desk-in-his-office-resting--1024x768.jpg" alt=""
                class="img-fluid">
              <div class="news_banner">
                <p>May 24, 2018 ●by Alex</p>
                <ul>
                  <li>
                    <span>
                      <h3>
                        rest during working hours
                      </h3>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./assets/img/simple-home-office-with-tree-PBXRXYB-large-1024x768.jpg" alt="" class="img-fluid">
              <div class="news_banner">
                <p>May 24, 2018 ●by Alex</p>
                <ul>
                  <li>
                    <span>
                      <h3>
                        develop yours startup ideas
                      </h3>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="button d-flex justify-content-center">
          <button class="myBtnSecondary rounded-pill">vew all posts</button>
        </div>
      </div>
    </section>
    <!-- /#news -->
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
  margin-bottom: 10rem;

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

#examples {

  .right {
    width: 45%;

    h2 {
      font-size: 3.5rem;

      b {
        color: #00d9a6;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;
    width: 55%;
  }



  .col {

    &:hover {
      .card {
        cursor: pointer;
        display: none;
        transform: scale(1.10);
        box-shadow: 2px 2px 10px #f5f5f5;
        z-index: 1000;
      }

      img {
        opacity: 10%;
      }

      .hidden {
        display: block;
      }
    }

    .hidden {
      background-image: linear-gradient(to right, #bdf574 0%, #00d9a6 51%, #0fdee6 100%);

      position: relative;
      display: none;

      h3 {
        text-transform: capitalize;
      }

      .card_content {
        color: #ffffff;
        padding: 2rem;
        position: absolute;
        top: 60%;
      }
    }

    .card {
      border: none;

      img {
        border-radius: 0.5rem;
      }

    }
  }

  .myBtn {
    margin: 5.5rem 0;
  }


}

#stats {

  height: 1200px;
  padding-top: 7rem;
  padding-bottom: 15rem;
  background-color: #f5f5f5;

  .card {
    width: 900px;
    height: 700px;
    border: none;
    border-radius: 1rem;
  }

  .myCard {
    margin: 5rem 0;

    background-image: linear-gradient(to right, #bdf574e1 0%, #00d9a6e0 51%, #0fdfe6e0 100%), url('./assets/img/person-with-long-curly-hair-PZ99QM2-2x.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    .content {
      color: #ffffff;
      text-transform: uppercase;
      text-align: center;

      h2 {
        font-size: 8rem;
      }

      h3 {
        font-size: 3rem;
        font-weight: lighter;
      }

      p {
        font-size: 1.5rem;
      }

      .left {
        padding: 1rem 2rem;
        max-width: 100%;
      }

      .right {
        padding: 1rem 2rem;
        max-width: 100%;
      }

      .bord_banner {
        height: 65px;
        border: 0.5px solid #ffffff;
      }
    }

  }

  .myCard_2 {
    top: 10%;
    left: 45%;

    padding: 10rem 8rem;
    box-shadow: 10px 2px 25px 5px #dadada;

    h2 {
      font-size: 3rem;
      margin-right: 15rem;
      text-transform: capitalize;

      b {
        color: #00d9a6;
      }
    }

    li {
      margin: 0.8rem 0;

      span {
        margin-right: 0.3rem;
        color: #00d9a6;
      }
    }
  }
}

#support {

  padding: 5rem 0;

  background-color: #f5f5f5;

  .description {

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 25%;

    h2 {
      font-size: 3.5rem;
      text-transform: capitalize;

      b {
        color: #00d9a6;
      }
    }
  }

  .card {

    cursor: pointer;

    width: 340px;
    height: 600px;
    border: none;
    border-radius: 1.5rem;
    margin: 2rem 0;
    box-shadow: 10px 2px 25px 5px #dadada;

    background-image: linear-gradient(to right, #bdf574 0%, #00d9a6 51%, #0fdee6 100%);

    &:nth-child(even) {
      background-image: linear-gradient(to right, #686868 0%, #353535 51%, #222222 100%);
    }

    &:hover {
      transform: scale(1.1);
    }

    .title {
      text-align: center;
      margin-top: 1.4rem;
      background-color: #ffffff;
      padding: 1rem;

      h3 {
        text-transform: uppercase;
        font-weight: bold;
      }

      p {
        color: #686868;
        text-transform: capitalize;
      }
    }

    .price {
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      color: #ffffff;

      h2 {
        font-size: 2rem;
        text-transform: capitalize;
      }

      h3 {
        font-size: 4rem;
      }
    }

    .body {
      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #ffffff;
      height: 100%;
      border-bottom-right-radius: 1.5rem;
      border-bottom-left-radius: 1.5rem;

      li {
        margin: 0.7rem 0;
      }
    }

  }
}

#client {
  height: 750px;

  background-image: linear-gradient(60deg, #242424ea, #3b3b3be5), url('./assets/img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg'), ;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;


  b {
    color: #00d9a6;
    font-size: 10rem;
  }

  p {
    color: #ffffff;
    font-size: 1.5rem;
    text-align: center;
    margin: 1rem 10rem;
    font-style: italic;
    font-weight: 100;
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 90px;
    margin: 3rem 0;
    height: 90px;
    border-radius: 50%;
    border: 3px solid #ffffff;

    img {
      height: 90px;
      width: 90px;
      border-radius: 50%;
      object-fit: cover;
    }

  }

  .client_infos {
    text-align: center;

    h3 {
      color: #00d9a6;
      text-transform: uppercase;
    }

    p {
      font-style: normal;
      text-transform: capitalize;
      font-weight: 400;
    }
  }

}

#news {

  background-color: #f5f5f5;

  height: 980px;

  .title {
    padding: 8rem 0 0 0;
    text-align: center;

    h2 {
      font-size: 4rem;
      text-transform: capitalize;

      b {
        color: #00d9a6;
      }
    }
  }

  .my_banner {
    justify-content: center;
  }

  .card {
    position: relative;
    border: none;
    border-radius: 1rem;
    box-shadow: 5px 5px 15px 5px #dadada;

    img {
      border-radius: 1rem;
    }
  }

  .news_banner {
    position: absolute;
    top: 80%;
    left: 6%;
    height: 110px;
    width: 450px;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    text-transform: capitalize;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      margin: 0;
    }

    p {
      font-size: 0.89rem;
      margin-left: 2rem;
      margin-bottom: 0;
      color: #686868;
    }

    li {
      color: #00d9a6;
      font-weight: bold;
      font-size: 1.5rem;

      span {
        color: #000000;
      }
    }

  }

  .button {
    margin-top: 5rem;
  }

}
</style>