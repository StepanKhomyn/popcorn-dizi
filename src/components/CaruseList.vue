<template>
  <div class="custom-carousel">
    <div class="carousel-inner">
      <transition name="fade" mode="out-in">
        <div :key="currentSlide" class="carousel-item-wrapper">
          <component :is="slides[currentSlide].component" :is-active="true" />
        </div>
      </transition>
    </div>

    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        type="button"
        :class="{ active: index === currentSlide }"
        :aria-label="'Slide ' + (index + 1)"
        @click="goToSlide(index)"
      ></button>
    </div>

    <button class="carousel-control prev" type="button" @click="prevSlide">
      <span class="control-icon">&lsaquo;</span>
    </button>
    <button class="carousel-control next" type="button" @click="nextSlide">
      <span class="control-icon">&rsaquo;</span>
    </button>
  </div>
</template>

<script>
import FirstSlide from "@/components/about/FirstSlide.vue";
import SecondSlide from "@/components/about/SecondSlide.vue";
import ThirdSlide from "@/components/about/ThirdSlide.vue";
import FourthSlide from "@/components/about/FourthSlide.vue";

export default {
  name: "CaruseList",
  data() {
    return {
      currentSlide: 0,
      autoplayTimer: null,
      intervalDuration: 15000, // 15 секунд для кожного слайду
      slides: [
        { component: FirstSlide },
        { component: SecondSlide },
        { component: ThirdSlide },
        { component: FourthSlide },
      ],
    };
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    startAutoplay() {
      this.stopAutoplay(); // Про всяк випадок очищуємо старий таймер
      this.autoplayTimer = setInterval(() => {
        this.nextSlide();
      }, this.intervalDuration);
    },
    stopAutoplay() {
      if (this.autoplayTimer) {
        clearInterval(this.autoplayTimer);
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.resetAutoplay();
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.resetAutoplay();
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.resetAutoplay();
    },
    resetAutoplay() {
      // Скидаємо таймер при ручному кліку, щоб слайд не перемикався одразу
      this.startAutoplay();
    },
  },
};
</script>

<style scoped>
.custom-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #000; /* або колір вашого фону */
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item-wrapper {
  width: 100%;
  height: 100%;
}

/* --- Керування стрілочками --- */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.2);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 30;
  transition: background 0.3s ease;
}
.carousel-control:hover {
  background: rgba(0, 0, 0, 0.5);
}
.carousel-control.prev {
  left: 20px;
}
.carousel-control.next {
  right: 20px;
}
.control-icon {
  line-height: 0;
  margin-top: -4px; /* Коригування центрування знака */
}

/* --- Індикатори (Крапки) --- */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 30;
}
.carousel-indicators button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
}
.carousel-indicators button.active {
  background: #e8820c; /* Твій фірмовий помаранчевий колір */
  transform: scale(1.2);
}

/* --- Vue Transition Анімація плавного згасання (Fade) --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
