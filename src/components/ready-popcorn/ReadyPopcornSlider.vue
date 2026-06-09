<template>
  <div class="w-100 pt-3" id="ready-popcorn">
    <h2 class="fs-2 text-center heading-content">{{ $t('header.ready_pop') }}</h2>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true" :transition="500">
      <Slide v-for="(item, index) in items" :key="index" class="card-carousel-cards">
        <div class="card-carousel--card">
          <img :src="item.background" :alt="$t(item.name)"/>
          <div class="card-carousel--card--footer">
            <p class="fs-6">{{ $t(`${item.name}`) }}</p>
            <p class="tag" v-for="(tag, tagIndex) in item.tag" :key="tagIndex" :class="tagIndex > 0 ? 'secondary' : ''">
              {{ tag }}</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation/>
      </template>
    </Carousel>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'
  import {Carousel, Navigation, Slide} from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  import img1 from "./slider-element/1.png"
  import img2 from "./slider-element/2.png"
  import img3 from "./slider-element/3.png"
  import img4 from "./slider-element/4.png"
  import img5 from "./slider-element/5.png"
  import img6 from "./slider-element/6.png"
  import img7 from "./slider-element/7.png"
  import img8 from "./slider-element/8.png"

  export default defineComponent({
    name: 'ReadyPopcornSlider',
    data() {
      return {
        windowWidth: window.innerWidth,
        items: [
          {name: 'products.item1', background: img1, tag: ["70 г"]},
          {name: 'products.item2', background: img2, tag: ["20 г"]},
          {name: 'products.item3', background: img3, tag: ["20 г"]},
          {name: 'products.item4', background: img4, tag: ["20 г"]},
          {name: 'products.item5', background: img5, tag: ["20 г"]},
          {name: 'products.item6', background: img6, tag: ["70 г"]},
          {name: 'products.item7', background: img7, tag: ["70 г"]},
          {name: 'products.item8', background: img8, tag: ["70 г"]},
        ]
      }
    },
    computed: {
      itemsToShow() {
        if (this.windowWidth < 576) return 1
        if (this.windowWidth < 992) return 2
        return 3
      }
    },
    mounted() {
      window.addEventListener('resize', this.onResize)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.onResize)
    },
    methods: {
      onResize() {
        this.windowWidth = window.innerWidth
      }
    },
    components: {Carousel, Slide, Navigation},
  })
</script>

<style scoped>
.heading-content {
  font-family: Roboto, sans-serif;
}

.fs-6 {
  font-size: 0.85rem !important;
  font-family: Roboto, sans-serif;
}

.carousel {
  margin: 10px 0;
}

.carousel__slide {
  padding: 10px;
  margin: 10px 0;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, .06), 0 2px 2px 0 rgba(40, 44, 53, .08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
  width: 100%;
}

.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}

.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}

.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}

.card-carousel-cards .card-carousel--card--footer p.tag {
  font-size: 11px;
  font-weight: 300;
  padding: 4px;
  background: rgba(40, 44, 53, .06);
  display: inline-block;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}

.card-carousel-cards .card-carousel--card--footer p.tag:before {
  content: "";
  float: left;
  position: absolute;
  top: 0;
  left: -12px;
  width: 0;
  height: 0;
  border-color: transparent rgba(40, 44, 53, .06) transparent transparent;
  border-style: solid;
  border-width: 8px 12px 12px 0;
}

.card-carousel-cards .card-carousel--card--footer p.tag.secondary {
  margin-left: 0;
  border-left: 1.45px dashed white;
}

.card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
  display: none !important;
}

.card-carousel-cards .card-carousel--card--footer p.tag:after {
  content: "";
  position: absolute;
  top: 8px;
  left: -3px;
  float: left;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: white;
  box-shadow: 0 0 0 #004977;
}
</style>