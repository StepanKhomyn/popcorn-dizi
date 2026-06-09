<template>
  <div class="slide">
    <!-- Ефект легкої віньєтки та художнього освітлення -->
    <div class="ambient-overlay" aria-hidden="true"></div>

    <!-- ЛІВА ПАНЕЛЬ: Елегантна журнальна верстка тексту -->
    <div class="content-side">
      <div class="brand-tag">
        <span class="tag-line">Premium Quality</span>
      </div>

      <div class="text-container">
        <h2 class="text text-top">
          {{ $t('slider.slide_2_text_1') }}
        </h2>
        <div class="text-divider"></div>
        <p class="text text-bottom">
          {{ $t('slider.slide_2_text_2') }}
        </p>
      </div>
    </div>

    <!-- ПРАВА ПАНЕЛЬ: Об'ємна 3D композиція бренду -->
    <div class="visual-side">
      <div class="hero-composition">
        <!-- Центральний боул або фірмова пачка -->
        <div class="main-dish-wrapper">
          <div class="main-dish-image"></div>
          <!-- Логотип, що ніби "ширяє" над попкорном -->
          <div class="logo-floating-badge">
            <div class="dizi-logo"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- ФРОНТАЛЬНИЙ ШАР: Динамічний 3D-пад кукурудзи (ефект глибини різкості) -->
    <div class="popcorn-rain-overlay" aria-hidden="true">
      <!-- Задні дрібні зерна -->
      <div class="falling-pop core-back b-1"></div>
      <div class="falling-pop core-back b-2"></div>
      <div class="falling-pop core-back b-3"></div>

      <!-- Середні чіткі зерна -->
      <div class="falling-pop core-mid m-1"></div>
      <div class="falling-pop core-mid m-2"></div>
      <div class="falling-pop core-mid m-3"></div>

      <!-- Передні гігантські розмиті зерна (кінематографічний blur) -->
      <div class="falling-pop core-front f-1"></div>
      <div class="falling-pop core-front f-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondSlide'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500;600&display=swap');

.slide {
  position: relative;
  height: 560px;
  background-image: url("@/assets/about_us_fourth_bg.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  font-family: 'Inter', sans-serif;
}

/* Об'ємне тонування фону */
.ambient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.2) 100%);
  z-index: 1;
  pointer-events: none;
}

/* --- ЛІВА СТОРОНА: ТЕКСТ --- */
.content-side {
  position: relative;
  z-index: 10;
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5rem;
}

.brand-tag {
  opacity: 0;
  animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  margin-bottom: 1rem;
}

.tag-line {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: #e8820c;
  background: rgba(232, 130, 12, 0.08);
  padding: 4px 12px;
  border-radius: 4px;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.text {
  margin: 0;
  opacity: 0;
  color: #231206; /* Шляхетний шоколадний */
}

.text-top {
  font-family: "DM Serif Display", serif;
  font-size: 2.4rem;
  line-height: 1.2;
  max-width: 520px;
  animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
}

.text-divider {
  width: 40px;
  height: 3px;
  background-color: #e8820c;
  border-radius: 2px;
  opacity: 0;
  animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.3s;
}

.text-bottom {
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.7;
  color: #544438;
  max-width: 460px;
  animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s;
}

/* --- ПРАВА СТОРОНА: СЦЕНА З БОУЛОМ ТА ЛОГОТИПОМ --- */
.visual-side {
  flex: 0.9;
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-composition {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Контейнер для головної страви/пачки попкорну */
.main-dish-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  animation: dishEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Малюємо умовну красиву тарілку/елемент за допомогою фону або твого ассету */
.main-dish-image {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-image: url("@/assets/popcorn-pack.png"); /* Можна змінити на купу попкорну або боул */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0 20px 40px rgba(35, 18, 6, 0.15));
}

/* Логотип, що елегантно літає над об'єктом */
.logo-floating-badge {
  position: absolute;
  top: -10px;
  right: -20px;
  background: white;
  padding: 12px 24px;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgba(232, 130, 12, 0.15);
  animation: floaty 4s ease-in-out infinite;
}

.dizi-logo {
  width: 100px;
  height: 40px;
  background-image: url("@/assets/dizi-logo-without-text.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

/* --- КІНЕМАТОГРАФІЧНИЙ ПАД ПОПКОРНУ (3 SHADOW LAYERS) --- */
.popcorn-rain-overlay {
  position: absolute;
  inset: 0;
  z-index: 20; /* Поверх усього контенту */
  pointer-events: none;
}

.falling-pop {
  position: absolute;
  background-image: url("@/assets/one-popcorn.png");
  background-size: contain;
  background-repeat: no-repeat;
  top: -60px;
  opacity: 0;
}

/* Шар 1: Далекий план (маленькі, за контентом) */
.core-back {
  width: 20px;
  height: 20px;
  z-index: 2;
  filter: blur(1px);
  animation: cinemaFall 3.5s linear infinite;
}
.b-1 { left: 15%; animation-delay: 0.2s; }
.b-2 { left: 45%; animation-delay: 1.5s; }
.b-3 { left: 75%; animation-delay: 0.8s; }

/* Шар 2: Середній план (чіткі зерна середнього розміру) */
.core-mid {
  width: 35px;
  height: 35px;
  z-index: 12;
  animation: cinemaFall 2.8s linear infinite;
}
.m-1 { left: 30%; animation-delay: 0s; }
.m-2 { left: 60%; animation-delay: 1.1s; }
.m-3 { left: 85%; animation-delay: 2.1s; }

/* Шар 3: Ближній план (величезні, розмиті перед камерою) */
.core-front {
  width: 75px;
  height: 75px;
  z-index: 25;
  filter: blur(5px); /* Ефект фокусу камери */
  animation: cinemaFall 2.2s linear infinite;
}
.f-1 { left: 8%; animation-delay: 0.5s; }
.f-2 { left: 70%; animation-delay: 1.8s; }

/* --- ПРЕМІУМ АНІМАЦІЇ --- */
@keyframes revealUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes dishEntrance {
  from { opacity: 0; transform: scale(0.9) rotate(-3deg); }
  to   { opacity: 1; transform: scale(1) rotate(0deg); }
}

@keyframes floaty {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-8px) rotate(2deg); }
}

/* Реалістичне падіння з обертанням у просторі */
@keyframes cinemaFall {
  0% {
    top: -60px;
    opacity: 0;
    transform: translateX(0) rotate(0deg);
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 105%;
    opacity: 0;
    transform: translateX(45px) rotate(360deg);
  }
}

/* --- АДАПТИВНІСТЬ --- */
@media (max-width: 1200px) {
  .content-side { padding-left: 3rem; }
  .text-top { font-size: 2rem; }
  .main-dish-wrapper { width: 260px; height: 260px; }
  .logo-floating-badge { padding: 8px 16px; }
}

@media (max-width: 850px) {
  .slide {
    height: auto;
    flex-direction: column;
    padding: 5rem 2rem 3rem 2rem;
  }
  .ambient-overlay {
    background: linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%);
  }
  .content-side { padding-left: 0; flex: 1; width: 100%; }
  .visual-side { margin-top: 2.5rem; flex: 1; width: 100%; }
  .main-dish-wrapper { width: 240px; height: 240px; }
  .core-front { display: none; } /* Вимикаємо важкі ефекти блуру на мобільних */
}
</style>