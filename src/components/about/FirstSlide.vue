<template>
  <div class="hero-slide">
    <!-- Фонові художні кола та ефект карамельного підсвічування -->
    <div class="bg-decorations" aria-hidden="true">
      <div class="glow-orb orb-1"></div>
      <div class="glow-orb orb-2"></div>
    </div>
    <div class="grain-texture" aria-hidden="true"></div>

    <!-- Ліва текстова панель -->
    <div class="content-panel">
      <div class="brand-badge">
        <div class="badge-dot" aria-hidden="true"></div>
        <span>{{ $t("header.about") }}</span>
      </div>

      <h1 class="main-headline">
        <span class="headline-accent">{{ $t("slider.slide_1_text_1") }}</span>
      </h1>

      <p class="sub-headline">
        {{ $t("slider.slide_1_text_2") }}
      </p>

      <!-- Оновлений блок статистики з повною підтримкою i18n -->
      <div class="metrics-container">
        <div class="metric-block">
          <span class="metric-number">9+</span>
          <span class="metric-text">{{ $t("slider.metrics.experience") }}</span>
        </div>
        <div class="metric-divider" aria-hidden="true"></div>
        <div class="metric-block">
          <span class="metric-number">20+</span>
          <span class="metric-text">{{ $t("slider.metrics.types") }}</span>
        </div>
        <div class="metric-divider" aria-hidden="true"></div>
        <div class="metric-block">
          <span class="metric-number">UA</span>
          <span class="metric-text">{{ $t("slider.metrics.location") }}</span>
        </div>
      </div>
    </div>

    <!-- Права панель із 3D-ефектом літаючого попкорну -->
    <div class="visual-panel" aria-hidden="true">
      <div class="bowl-wrapper">
        <div class="main-bowl-glow">
          <div class="popcorn-icon">🍿</div>
        </div>
      </div>

      <!-- Динамічні дрібні частинки -->
      <div class="fx-particles">
        <div
          v-for="(p, i) in particles"
          :key="i"
          class="fx-pop"
          :style="p.style"
        >
          🍿
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSlide",
  data() {
    return {
      particleConfigs: [
        { tx: "-60px", ty: "-110px", rot: "-35deg", dur: "1.9s", del: "0.2s" },
        { tx: "-30px", ty: "-150px", rot: "15deg", dur: "2.2s", del: "0.5s" },
        { tx: "40px", ty: "-130px", rot: "-25deg", dur: "1.7s", del: "0.8s" },
        { tx: "70px", ty: "-90px", rot: "45deg", dur: "2.4s", del: "0.3s" },
        { tx: "-100px", ty: "-70px", rot: "-15deg", dur: "2.0s", del: "1.1s" },
        { tx: "40px", ty: "-160px", rot: "25deg", dur: "2.1s", del: "1.4s" },
      ],
      loopInterval: null,
    };
  },
  computed: {
    particles() {
      return this.particleConfigs.map((c) => ({
        style: {
          "--tx": c.tx,
          "--ty": c.ty,
          "--rot": c.rot,
          "--dur": c.dur,
          "--del": c.del,
          right: "25%",
          top: "45%",
        },
      }));
    },
  },
  mounted() {
    this.loopInterval = setInterval(this.resetAnimation, 4500);
  },
  beforeUnmount() {
    clearInterval(this.loopInterval);
  },
  methods: {
    resetAnimation() {
      const elements = this.$el.querySelectorAll(".fx-pop");
      elements.forEach((el) => {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "";
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap");

.hero-slide {
  position: relative;
  width: 100%;
  height: 560px;
  background: radial-gradient(
    circle at 20% 30%,
    #3a1e0b 0%,
    #231206 70%,
    #140a03 100%
  );
  overflow: hidden;
  font-family: "Inter", sans-serif;
  display: flex;
  padding-bottom: 40px;
}

/* --- ХУДОЖНІЙ ФОН --- */
.bg-decorations {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.glow-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(232, 130, 12, 0.2) 0%,
    rgba(232, 130, 12, 0) 70%
  );
  filter: blur(40px);
}
.orb-1 {
  width: 600px;
  height: 600px;
  right: -150px;
  top: -100px;
  opacity: 0.7;
}
.orb-2 {
  width: 400px;
  height: 400px;
  left: -100px;
  bottom: -100px;
  opacity: 0.3;
}

.grain-texture {
  position: absolute;
  inset: 0;
  opacity: 0.25;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
}

/* --- ЛІВА ПАНЕЛЬ --- */
.content-panel {
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem 0 5rem;
  z-index: 5;
}

.brand-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 213, 128, 0.06);
  border: 1px solid rgba(255, 213, 128, 0.15);
  border-radius: 100px;
  padding: 6px 16px 6px 10px;
  width: fit-content;
  margin-bottom: 1.8rem;
  opacity: 0;
  animation: revealUp 0.6s ease forwards;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #e8820c;
  box-shadow: 0 0 8px #e8820c;
}

.brand-badge span {
  font-size: 11px;
  font-weight: 600;
  color: #ffd580;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.main-headline {
  font-family: "DM Serif Display", serif;
  font-size: 2.3rem;
  font-weight: 400;
  line-height: 1.25;
  color: #fff6e5;
  margin: 0 0 1.2rem 0;
  max-width: 580px;
  opacity: 0;
  animation: revealUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
  /* Запобігаємо розриву слів по буквах */
  word-break: keep-all;
  overflow-wrap: break-word;
}

.headline-accent {
  background: linear-gradient(to bottom, #ffffff 40%, #ffd580 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sub-headline {
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.65;
  color: rgba(255, 246, 229, 0.7);
  max-width: 480px;
  margin: 0 0 2.2rem 0;
  opacity: 0;
  animation: revealUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s;
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* Статистика */
.metrics-container {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  animation: revealUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s;
}

.metric-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.metric-number {
  font-family: "DM Serif Display", serif;
  font-size: 1.8rem;
  color: #e8820c;
  line-height: 1;
}

.metric-text {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 246, 229, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap; /* Не дає тексту підпису переноситися на новий рядок у вузьких контейнерах */
}

.metric-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 246, 229, 0.1);
}

/* --- ПРАВА ВІЗУАЛЬНА ПАНЕЛЬ --- */
.visual-panel {
  flex: 0.9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
}

.bowl-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  opacity: 0;
  animation: zoomEntrance 1s cubic-bezier(0.34, 1.3, 0.64, 1) forwards 0.3s;
}

.main-bowl-glow {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 35% 35%,
    #ffe6b3 0%,
    #e8820c 50%,
    #4a2000 100%
  );
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 80px rgba(232, 130, 12, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popcorn-icon {
  font-size: 130px;
  user-select: none;
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.4));
  animation: smoothFloat 4s ease-in-out infinite;
}

.fx-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.fx-pop {
  position: absolute;
  font-size: 24px;
  opacity: 0;
  user-select: none;
  animation: flyOut var(--dur) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: var(--del);
}

/* --- АНІМАЦІЇ --- */
@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes zoomEntrance {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes smoothFloat {
  0%,
  100% {
    transform: translateY(0) rotate(-2deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
}

@keyframes flyOut {
  0% {
    opacity: 0;
    transform: translate(0, 0) scale(0.5) rotate(0deg);
  }
  15% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(var(--tx), var(--ty)) scale(1.1) rotate(var(--rot));
  }
}

/* --- АДАПТИВНІСТЬ --- */
@media (max-width: 1200px) {
  .content-panel {
    padding-left: 3rem;
  }
  .main-headline {
    font-size: 1.9rem;
  }
  .bowl-wrapper {
    width: 260px;
    height: 260px;
  }
  .popcorn-icon {
    font-size: 100px;
  }
}

@media (max-width: 850px) {
  .hero-slide {
    height: auto;
    flex-direction: column;
    padding: 4rem 1.5rem 3rem 1.5rem;
  }
  .content-panel {
    padding: 0;
    text-align: left;
    align-items: flex-start;
    width: 100%;
  }
  .visual-panel {
    margin-top: 3rem;
    width: 100%;
    height: 260px;
  }
  .bowl-wrapper {
    width: 220px;
    height: 220px;
  }
  .popcorn-icon {
    font-size: 90px;
  }
  .metrics-container {
    gap: 1.5rem;
  }
}
</style>
