<template>
  <div class="w-100 pt-3 pb-3 mt-1" id="caramel-popcorn">
    <h2 class="fs-2 text-center heading-content">{{ $t('header.caramel_pop') }}</h2>
    <Carousel :items-to-show="itemsToShow" :wrap-around="true" :transition="500">
      <Slide v-for="(item, index) in items" :key="index" class="card-carousel-cards">
        <div class="card-carousel--card">
          <div class="card-img-wrap">
            <img :src="item.background" :alt="$t(item.name)" />
          </div>
          <div class="card-carousel--card--footer">
            <p class="product-name">{{ $t(item.name) }}</p>
            <div class="tags-row">
              <span class="tag" v-for="(tag, tagIndex) in item.tag" :key="tagIndex">
                {{ tag }} {{ $t('products.gram') }}
              </span>
            </div>
            <p class="qty-info">
              {{ $t('products.group_qty') }}: <strong>{{ item.qty }}</strong> {{ $t('products.pcs') }}
            </p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  import caramel_150g       from "./slider-element/caramel_150g.png"
  import caramel_fruit_100g from "./slider-element/caramel_fruit_100g.png"
  import caramel_52_5       from "./slider-element/caramel_52.5.png"
  import caramel_fruit_55   from "./slider-element/caramel_fruit_55.png"
  import caramel_choc_55    from "./slider-element/caramel_chocolate_55.png"
  import caramel_surprise   from "./slider-element/caramel_dizzi_100.png"

  export default defineComponent({
    name: 'CaramelPopcornSlider',
    components: { Carousel, Slide, Navigation },
    data() {
      return {
        windowWidth: window.innerWidth,
        items: [
          { name: 'products.caramel_popcorn_150',    background: caramel_150g,       tag: ['150'],  qty: 12 },
          { name: 'products.fruit_mix_popcorn_100',  background: caramel_fruit_100g, tag: ['100'],  qty: 15 },
          { name: 'products.caramel_popcorn',        background: caramel_52_5,       tag: ['52,5'], qty: 20 },
          { name: 'products.fruit_popcorn',          background: caramel_fruit_55,   tag: ['55'],   qty: 20 },
          { name: 'products.chocolate_popcorn',      background: caramel_choc_55,    tag: ['55'],   qty: 20 },
          { name: 'products.caramel_surprise_popcorn', background: caramel_surprise, tag: ['100'],  qty: 15 },
        ],
      }
    },
    computed: {
      itemsToShow() {
        if (this.windowWidth < 576) return 1
        if (this.windowWidth < 992) return 2
        return 3
      },
    },
    mounted() {
      window.addEventListener('resize', this.onResize)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.onResize)
    },
    methods: {
      onResize() { this.windowWidth = window.innerWidth },
    },
  })
</script>

<style scoped>
.heading-content {
  font-family: 'Nunito', Roboto, sans-serif;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
}

.carousel {
  margin: 16px 0 24px;
  padding: 16px 0 24px;
}

.carousel__slide {
  padding: 8px 12px;
}

:deep(.carousel__viewport) {
  overflow: hidden;
}

.carousel__slide {
  opacity: 0.75;
  transform: scale(0.92);
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.carousel__slide--prev,
.carousel__slide--next {
  opacity: 0.88;
  transform: scale(0.96);
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
}

/* ── Card ── */
.card-carousel--card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  width: 100%;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}
.card-carousel--card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
}

/* ── Image ── */
.card-img-wrap {
  width: 100%;
  height: 220px;
  background: #f9f7f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
  overflow: hidden;
}
.card-img-wrap img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  user-select: none;
  transition: transform 0.25s ease;
}
.card-carousel--card:hover .card-img-wrap img {
  transform: scale(1.04);
}

/* ── Footer ── */
.card-carousel--card--footer {
  padding: 12px 16px 14px;
  border-top: 1px solid #f0ede6;
}

.product-name {
  font-family: 'Nunito', Roboto, sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 8px;
  line-height: 1.35;
  min-height: 2.4em;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
  justify-content: center;
}

.tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  background: rgba(255, 215, 0, 0.15);
  border: 1px solid rgba(255, 215, 0, 0.4);
  color: #7a6000;
  border-radius: 20px;
  letter-spacing: 0.03em;
}

/* ── Group quantity ── */
.qty-info {
  font-size: 0.75rem;
  color: #666;
  margin: 0;
  padding-top: 6px;
  border-top: 1px dashed #e8e4db;
  line-height: 1.4;
}
.qty-info strong {
  color: #1a1a2e;
}

/* ── Nav buttons ── */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background: #FFD700;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #1a1a2e;
  box-shadow: 0 2px 12px rgba(255, 215, 0, 0.4);
  transition: background 0.2s, transform 0.15s;
}
:deep(.carousel__prev:hover),
:deep(.carousel__next:hover) {
  background: #ffbe00;
  //transform: scale(1.08);
}

@media (max-width: 576px) {
  .card-img-wrap { height: 180px; }
}
</style>