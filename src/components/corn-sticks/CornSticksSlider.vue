<template>
  <div class="w-100 pt-3 pb-3" id="corn-snacks">
    <h2 class="fs-2 text-center heading-content">{{ $t('header.corns') }}</h2>
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
  import first from "./slider-element/corn_girl_boy.png"

  export default defineComponent({
    name: 'CornSticksSlider',
    components: { Carousel, Slide, Navigation },
    data() {
      return {
        windowWidth: window.innerWidth,
        items: [
          { name: 'products.corns_for_boys',  background: first, tag: ['80'], qty: 20 },
          { name: 'products.corns_for_girls', background: first, tag: ['80'], qty: 20 },
        ],
      }
    },
    computed: {
      itemsToShow() {
        // тільки один елемент — завжди по центру
        return 1
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

/* ── Carousel: немає overflow щоб не розширювати сторінку ── */
.carousel {
  margin: 16px auto 24px;
  padding: 16px 0 24px;
  max-width: 480px;   /* один слайд — обмежена ширина */
}

.carousel__slide {
  padding: 8px 12px;
}

/* Прибираємо perspective — головна причина горизонтального скролу */
:deep(.carousel__viewport) {
  overflow: hidden;   /* НЕ visible — щоб не виходило за межі */
}

.carousel__slide {
  opacity: 0.85;
  transform: scale(0.95);
  transition: transform 0.4s ease, opacity 0.4s ease;
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
  height: 260px;
  background: #f9f7f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
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
  padding: 14px 18px 16px;
  border-top: 1px solid #f0ede6;
  text-align: center;
}

.product-name {
  font-family: 'Nunito', Roboto, sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 10px;
  line-height: 1.35;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  justify-content: center;
  margin-bottom: 10px;
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

.qty-info {
  font-size: 0.75rem;
  color: #666;
  margin: 0;
  padding-top: 8px;
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
  .carousel { max-width: 100%; }
  .card-img-wrap { height: 200px; }
}
</style>