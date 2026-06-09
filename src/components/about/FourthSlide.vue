<template>
  <div class="slide">
    <!-- Текстовий журнальний блок (Editorial Layout) -->
    <div class="editorial-column">
      <!-- Величезна фонова графіка "250" для глибини та журнального стилю -->
      <div class="editorial-bg-number">250</div>

      <div class="editorial-content">
        <div class="magazine-tag animate-up">
          <span class="gold-dot"></span> FORBES NEXT 2025
        </div>

        <h2 class="magazine-title animate-up">
          ТОВ «КДМ Продукт» <br />
          <span class="gold-text">— у списку NEXT 250!</span>
        </h2>

        <div class="premium-divider animate-up"></div>

        <div class="magazine-lead animate-up">
          <p>
            {{ $t("slider.forbes_body_1") }}
            <a
              href="https://www.instagram.com/forbes.ukraine.official/"
              target="_blank"
              rel="noopener noreferrer"
              class="magazine-link"
              >@forbes.ukraine.official</a
            >
          </p>
        </div>

        <div class="magazine-quote animate-up">
          <p class="quote-primary">«{{ $t("slider.forbes_body_2") }}»</p>
          <p class="quote-secondary">{{ $t("slider.forbes_body_3") }}</p>
        </div>
      </div>
    </div>

    <!-- Права частина: Твій фірмовий постер Dizzi -->
    <div class="poster-column">
      <div class="poster-wrapper">
        <div class="poster-image"></div>
        <!-- Елегантне підсвічування за плакатом для об'єму -->
        <div class="poster-glow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FourthSlide",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;600;700&display=swap");

.slide {
  position: relative;
  height: 560px; /* Трохи збільшили висоту для кращої місткості типографіки */
  background-color: #d10512; /* Глибокий благородний червоний */
  display: flex;
  overflow: hidden;
}

/* --- ЛІВА ЧАСТИНА: EDITORIAL DESIGN --- */
.editorial-column {
  flex: 1.2;
  position: relative;
  display: flex;
  align-items: center;
  padding: 3rem 2rem 3rem 6rem;
  z-index: 2;
}

/* Величезна стильна цифра на задньому плані тексту */
.editorial-bg-number {
  position: absolute;
  left: 2rem;
  bottom: -2rem;
  font-family: "DM Serif Display", serif;
  font-size: 28rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.07);
  line-height: 1;
  pointer-events: none;
  z-index: 1;
  user-select: none;
}

.editorial-content {
  position: relative;
  z-index: 2;
  max-width: 580px;
  display: flex;
  flex-direction: column;
}

/* Маленький брендовий тег зверху */
.magazine-tag {
  font-family: "Inter", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.gold-dot {
  width: 6px;
  height: 6px;
  background-color: #ffd700;
  border-radius: 50%;
  box-shadow: 0 0 10px #ffd700;
}

/* Сильний журнальний заголовок */
.magazine-title {
  font-family: "DM Serif Display", serif;
  font-size: 2.6rem;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.01em;
}

.gold-text {
  color: #ffd700;
  font-style: italic;
  font-weight: 400;
  text-shadow: 0 2px 15px rgba(255, 215, 0, 0.2);
}

/* Тонка преміальна лінія */
.premium-divider {
  width: 120px;
  height: 2px;
  background: linear-gradient(to right, #ffd700, rgba(255, 215, 0, 0));
  margin-bottom: 2rem;
}

/* Основний текст */
.magazine-lead {
  font-family: "Inter", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.magazine-link {
  color: #ffd700;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 215, 0, 0.4);
  transition: all 0.2s ease;
}

.magazine-link:hover {
  color: #ffffff;
  border-bottom-color: #ffffff;
}

/* Блок цитати (заклик до дії) */
.magazine-quote {
  border-left: 3px solid #ffd700;
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.quote-primary {
  font-family: "DM Serif Display", serif;
  font-size: 1.35rem;
  font-style: italic;
  color: #ffd700;
  margin: 0;
}

.quote-secondary {
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* --- ПРАВА ЧАСТИНА: ПОСТЕР СЛАЙДА --- */
.poster-column {
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
  z-index: 2;
}

.poster-wrapper {
  position: relative;
  height: 85%;
  width: 75%;
  max-width: 380px;
}

.poster-image {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/about_as_fourth_slide.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 2;
  /* М'яка журнальна тінь під плакатом, щоб він відділявся від фону */
  filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.4));

  animation: posterEntrance 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.poster-glow {
  position: absolute;
  inset: 10%;
  background: #ffd700;
  filter: blur(80px);
  opacity: 0.12;
  z-index: 1;
  pointer-events: none;
}

/* --- КРУТА ЕФЕКТНА АНІМАЦІЯ (Editorial Reveal) --- */
.animate-up {
  opacity: 0;
  transform: translateY(30px);
  animation: elegantReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Почергове відкриття елементів з таймінгом */
.magazine-tag.animate-up {
  animation-delay: 0.1s;
}
.magazine-title.animate-up {
  animation-delay: 0.25s;
}
.premium-divider.animate-up {
  animation-delay: 0.4s;
}
.magazine-lead.animate-up {
  animation-delay: 0.55s;
}
.magazine-quote.animate-up {
  animation-delay: 0.7s;
}

@keyframes elegantReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes posterEntrance {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* --- АДАПТИВНІСТЬ (RESPONSIVE) --- */
@media (max-width: 1300px) {
  .editorial-column {
    padding-left: 3rem;
  }
  .magazine-title {
    font-size: 2.2rem;
  }
  .editorial-bg-number {
    font-size: 22rem;
  }
}

@media (max-width: 1024px) {
  .slide {
    height: auto;
    min-height: 560px;
  }
  .magazine-title {
    font-size: 1.9rem;
  }
  .magazine-lead {
    font-size: 1rem;
  }
  .poster-wrapper {
    width: 85%;
    height: 80%;
  }
}

/* Перехід у вертикальний журнальний формат для мобілок */
@media (max-width: 768px) {
  .slide {
    flex-direction: column-reverse;
  }
  .editorial-column {
    padding: 3rem 1.5rem;
    flex: none;
    width: 100%;
  }
  .poster-column {
    padding: 2rem 1.5rem 0 1.5rem;
    height: 400px;
    flex: none;
    width: 100%;
  }
  .poster-wrapper {
    width: 100%;
    height: 100%;
  }
  .editorial-bg-number {
    font-size: 14rem;
    top: 0;
    left: auto;
    right: 0;
  }
  .magazine-title {
    font-size: 1.75rem;
  }
}
</style>
