<template>
  <div class="slide">
    <!-- Робимо градієнт зліва щільнішим, щоб чорний/шоколадний текст не губився на фоні попкорну з image_26ef66.jpg -->
    <div class="scenery-gradient" aria-hidden="true"></div>
    <div class="grain-overlay" aria-hidden="true"></div>

    <!-- ЛІВА ПАНЕЛЬ: Акуратний блок без розривів слів -->
    <div class="editorial-panel">
      <!-- Наш красивий Glassmorphism бренд-бейдж -->
      <div class="glass-brand-card">
        <div class="logo-container"></div>
        <div class="glass-shine"></div>
      </div>

      <div class="text-block-wrapper">
        <!-- Анімація цілими логічними рядками з ефектом підйому та розмиття -->
        <p class="slide-pure-text">
          {{ $t('slider.slide_3_text') }}
        </p>
      </div>
    </div>

    <!-- ПРАВА ПАНЕЛЬ: Хом'ячок з круглим бекдропом та покращеним салютом -->
    <div class="interactive-stage">
      <div class="scene-composition">
        <div class="circle-backdrop" aria-hidden="true"></div>

        <div class="character-wrapper">
          <div class="person"></div>
        </div>

        <!-- Наш салют із попкорну -->
        <div class="vortex-fountain" aria-hidden="true">
          <div v-for="n in 6" :key="n" class="spatial-pop" :class="'pop-3d-' + n"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirdSlide'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap');

.slide {
  position: relative;
  height: 560px;
  background-image: url("@/assets/about_us_first_bg.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  font-family: 'Inter', sans-serif;
}

/* М'яка біла підкладка зліва, яка плавно сходить нанівець до центру,
   щоб перекрити строкатість попкорну з лівого боку зображення image_26ef66.jpg */
.scenery-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
  rgba(255, 255, 255, 0.95) 0%,
  rgba(255, 255, 255, 0.85) 35%,
  rgba(255, 255, 255, 0.3) 60%,
  rgba(255, 255, 255, 0) 100%
  );
  z-index: 1;
  pointer-events: none;
}

.grain-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.12;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  z-index: 2;
}

/* --- ЛІВА СТОРОНА: ТЕКСТ ТА ТИПОГРАФІКА --- */
.editorial-panel {
  position: relative;
  z-index: 10;
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
}

/* Скляна плашечка для логотипу Dizzi */
.glass-brand-card {
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 12px 24px;
  border-radius: 20px;
  width: fit-content;
  box-shadow: 0 10px 30px rgba(35, 18, 6, 0.06);
  margin-bottom: 2rem;
  overflow: hidden;
  opacity: 0;
  animation: slideFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.logo-container {
  width: 130px;
  height: 50px;
  background-image: url("@/assets/dizi-logo-without-text.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.glass-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
  transform: skewX(-30deg);
  animation: dynamicShine 4s infinite ease-in-out 1s;
}

/* Контейнер для тексту */
.text-block-wrapper {
  max-width: 520px;
  overflow: hidden; /* Ховаємо текст, поки він випливає */
}

/* КІНЕМАТОГРАФІЧНА АНІМАЦІЯ ЦІЛОГО ТЕКСТУ БЕЗ СМИКАННЯ ЛІТЕР */
.slide-pure-text {
  font-family: "DM Serif Display", serif;
  font-size: 1.85rem; /* Трохи зменшили, щоб текст дихав і не переносився по складах */
  line-height: 1.4;
  color: #1a0f07; /* Глибокий благородний темний колір замість брудного чорного */
  margin: 0;
  word-break: keep-all; /* Забороняємо некрасиві переноси слів */
  overflow-wrap: break-word;

  opacity: 0;
  filter: blur(8px);
  transform: translateY(35px);
  /* Плавна поява всього масиву з ефектом фокусу камери */
  animation: smoothTextReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.25s;
}

/* --- ПРАВА СТОРОНА: ХОМ'ЯЧОК ТА ЕФЕКТИ --- */
.interactive-stage {
  flex: 0.9;
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scene-composition {
  position: relative;
  width: 360px;
  height: 440px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

/* Світле коло-підкладка за хом'яком для об'єму */
.circle-backdrop {
  position: absolute;
  bottom: 40px;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, #ffe3ae 0%, #ffcc66 100%);
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 15px 45px rgba(232, 130, 12, 0.18);
  opacity: 0;
  animation: scaleEntrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.character-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 3;
  overflow: hidden;
}

.person {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/person1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
  filter: drop-shadow(0 20px 40px rgba(35, 18, 6, 0.22));
  opacity: 0;
  animation: characterPopIn 1.1s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.15s;
}

/* Фонтан попкорну */
.vortex-fountain {
  position: absolute;
  top: 34%;
  left: 44%;
  width: 1px;
  height: 1px;
  z-index: 20;
}

.spatial-pop {
  width: 34px;
  height: 34px;
  background-image: url("@/assets/one-popcorn.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  opacity: 0;
}

.pop-3d-1 { animation: vortexTrack1 2.5s infinite linear 0s; }
.pop-3d-2 { animation: vortexTrack2 2.5s infinite linear 0.4s; }
.pop-3d-3 { animation: vortexTrack3 2.5s infinite linear 0.8s; }
.pop-3d-4 { animation: vortexTrack4 2.5s infinite linear 1.2s; }
.pop-3d-5 { animation: vortexTrack5 2.5s infinite linear 1.6s; }
.pop-3d-6 { animation: vortexTrack6 2.5s infinite linear 2.0s; }

/* --- КІНЕМАТОГРАФІЧНІ КЛЮЧОВІ КАДРИ --- */
@keyframes smoothTextReveal {
  0% {
    opacity: 0;
    filter: blur(8px);
    transform: translateY(35px);
  }
  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}

@keyframes slideFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes scaleEntrance {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes characterPopIn {
  from { opacity: 0; transform: translateY(120px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes dynamicShine {
  0%   { left: -100%; }
  35%, 100% { left: 150%; }
}

/* Траєкторії вихору попкорну */
@keyframes vortexTrack1 {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.3) rotate(0deg); }
  10%  { opacity: 1; }
  50%  { transform: translate(-50px, -90px) scale(1.0) rotate(180deg); }
  100% { opacity: 0; transform: translate(-120px, -140px) scale(1.5) rotate(360deg); filter: blur(2px); }
}
@keyframes vortexTrack2 {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.3) rotate(0deg); }
  10%  { opacity: 1; }
  50%  { transform: translate(45px, -110px) scale(1.1) rotate(-140deg); }
  100% { opacity: 0; transform: translate(110px, -170px) scale(1.6) rotate(-280deg); filter: blur(2px); }
}
@keyframes vortexTrack3 {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.3) rotate(0deg); }
  10%  { opacity: 1; }
  50%  { transform: translate(-15px, -130px) scale(0.9) rotate(120deg); }
  100% { opacity: 0; transform: translate(-40px, -220px) scale(1.4) rotate(240deg); filter: blur(1px); }
}
@keyframes vortexTrack4 {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.3) rotate(0deg); }
  10%  { opacity: 1; }
  50%  { transform: translate(-70px, -50px) scale(1.1) rotate(-90deg); }
  100% { opacity: 0; transform: translate(-160px, -70px) scale(1.7) rotate(-200deg); filter: blur(3px); }
}
@keyframes vortexTrack5 {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.3) rotate(0deg); }
  10%  { opacity: 1; }
  50%  { transform: translate(65px, -60px) scale(1.0) rotate(160deg); }
  100% { opacity: 0; transform: translate(140px, -90px) scale(1.5) rotate(320deg); filter: blur(3px); }
}
@keyframes vortexTrack6 {
  0%   { opacity: 0; transform: translate(0, 0) scale(0.3) rotate(0deg); }
  10%  { opacity: 1; }
  50%  { transform: translate(10px, -140px) scale(1.2) rotate(-60deg); }
  100% { opacity: 0; transform: translate(25px, -240px) scale(1.8) rotate(-120deg); filter: blur(1px); }
}

/* --- АДАПТИВНІСТЬ ДЛЯ МОБІЛЬНИХ ТА ПЛАНШЕТІВ --- */
@media (max-width: 1200px) {
  .editorial-panel { padding-left: 3rem; }
  .slide-pure-text { font-size: 1.6rem; }
  .scene-composition { width: 300px; height: 380px; }
  .circle-backdrop { width: 230px; height: 230px; }
}

@media (max-width: 850px) {
  .slide {
    height: auto;
    flex-direction: column;
    padding: 4.5rem 1.5rem 2.5rem 1.5rem;
  }
  .scenery-gradient {
    background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,0.7) 100%);
  }
  .editorial-panel { padding-left: 0; width: 100%; align-items: flex-start; }
  .glass-brand-card { margin-bottom: 1.5rem; }
  .slide-pure-text { font-size: 1.35rem; line-height: 1.45; max-width: 100%; }
  .interactive-stage { margin-top: 2.5rem; width: 100%; }
  .scene-composition { width: 250px; height: 320px; }
  .circle-backdrop { width: 190px; height: 190px; bottom: 20px; }
}
</style>