<template>
  <header class="snacks-header" :class="{ scrolled: isScrolled }">
    <div class="header-top-bar"></div>
    <div class="header-inner">
      <!-- Logo -->
      <router-link to="/" class="header-logo">
        <img src="@/assets/dizi-logo.png" alt="Dizzi Snacks" class="logo-img"/>
      </router-link>

      <!-- Desktop nav -->
      <nav class="header-nav desktop-nav" aria-label="Головна навігація">
        <a href="#carouselExampleIndicators" class="nav-link">{{ $t('header.about') }}</a>
        <a href="#caramel-popcorn" class="nav-link">{{ $t('header.popcorn') }}</a>
        <a href="#corn-snacks" class="nav-link">{{ $t('header.corns') }}</a>
        <a href="#contacts"    class="nav-link">{{ $t('header.contacts') }}</a>
      </nav>

      <!-- Right controls -->
      <div class="header-controls">
        <button
            class="lang-btn desktop-lang"
            @click="switchLocale($i18n.locale === 'en' ? 'uk' : 'en')"
            :title="$i18n.locale === 'en' ? 'Switch to Ukrainian' : 'Switch to English'"
        >
          <component :is="$i18n.locale === 'en' ? 'UAFlag' : 'UKFlag'" class="flag-icon"/>
          <span>{{ $i18n.locale === 'en' ? 'UA' : 'EN' }}</span>
        </button>

        <!-- Burger -->
        <button
            class="burger-btn"
            @click.stop="mobileOpen = !mobileOpen"
            :aria-expanded="mobileOpen"
            aria-label="Відкрити меню"
        >
          <span class="burger-line" :class="{ open: mobileOpen }"></span>
          <span class="burger-line" :class="{ open: mobileOpen }"></span>
          <span class="burger-line" :class="{ open: mobileOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Мобільне меню">
      <nav class="mobile-nav">
        <a href="#carouselExampleIndicators" class="mobile-nav-link" @click="mobileOpen = false">{{ $t('header.about') }}</a>

        <a href="#caramel-popcorn" class="mobile-nav-link" @click="mobileOpen = false">{{ $t('header.popcorn') }}</a>

        <a href="#corn-snacks" class="mobile-nav-link" @click="mobileOpen = false">{{ $t('header.corns') }}</a>
        <a href="#contacts"    class="mobile-nav-link" @click="mobileOpen = false">{{ $t('header.contacts') }}</a>
      </nav>
      <div class="mobile-footer">
        <button class="lang-btn" @click="switchLocale($i18n.locale === 'en' ? 'uk' : 'en')">
          <component :is="$i18n.locale === 'en' ? 'UAFlag' : 'UKFlag'" class="flag-icon"/>
          <span>{{ $i18n.locale === 'en' ? 'UA' : 'EN' }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  import UKFlag from "@/assets/country/UKFlag.vue";
  import UAFlag from "@/assets/country/UAFlag.vue";

  export default {
    name: "SnacksHeader",
    components: { UAFlag, UKFlag },
    data() {
      return {
        mobileOpen: false,
        dropdownOpen: false,
        mobileDropdownOpen: false,
        isScrolled: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      document.addEventListener('click', this.handleOutsideClick);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      document.removeEventListener('click', this.handleOutsideClick);
    },
    methods: {
      switchLocale(locale) {
        this.$i18n.locale = locale;
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 10;
      },
      handleOutsideClick(event) {
        if (this.$refs.dropdownRef && !this.$refs.dropdownRef.contains(event.target)) {
          this.dropdownOpen = false;
        }
        if (this.$el && !this.$el.contains(event.target)) {
          this.mobileOpen = false;
        }
      },
    },
    watch: {
      $route() {
        this.mobileOpen = false;
        this.dropdownOpen = false;
      },
    },
  };
</script>

<style scoped>
/* ── tokens ── */
:root {
  --c-bg: #F5F0E8;
  --c-dark: #2b2f32;
  --c-yellow: #F5C518;
  --c-yellow-hover: #e0b200;
  --c-white: #ffffff;
  --h-height: 72px;
  --font-main: 'Arial', 'Helvetica Neue', sans-serif;
  --radius: 8px;
  --shadow: 0 2px 16px rgba(43, 47, 50, 0.08);
}

/* ── header ── */
.snacks-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #F5F0E8;
  box-shadow: 0 2px 16px rgba(43, 47, 50, 0.08);
  font-family: 'Arial', 'Helvetica Neue', sans-serif;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.snacks-header.scrolled {
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(43, 47, 50, 0.12);
}

.header-top-bar {
  height: 4px;
  background: #F5C518;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  gap: 24px;
}

/* ── logo ── */
.header-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  height: 60px;
  width: auto;
  display: block;
}

/* ── desktop nav ── */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: #2b2f32;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  position: relative;
  transition: color 0.18s, background 0.18s;
  letter-spacing: 0.01em;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 14px;
  right: 14px;
  height: 2px;
  background: #F5C518;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
  border-radius: 2px;
}

.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}

.nav-link:hover,
.nav-link:focus-visible {
  color: #2b2f32;
  outline: none;
}

/* ── dropdown ── */
.nav-dropdown {
  position: relative;
}

.dropdown-btn {
  display: flex;
  align-items: center;
  gap: 5px;
}

.chevron {
  transition: transform 0.2s ease;
  flex-shrink: 0;
}
.chevron.rotated {
  transform: rotate(180deg);
}

/* Ключовий фікс: задаємо position, z-index та прибираємо pointer-events на батьку */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #2b2f32;
  border-radius: 8px;
  padding: 8px;
  min-width: 200px;
  box-shadow: 0 8px 24px rgba(43, 47, 50, 0.25);
  z-index: 9999;
}

.dropdown-item {
  display: block;
  color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;
  white-space: nowrap;
}

.dropdown-item:hover {
  background: #F5C518;
  color: #2b2f32;
}

/* ── controls ── */
.header-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: 2px solid #2b2f32;
  border-radius: 20px;
  padding: 5px 12px;
  font-weight: 700;
  font-size: 13px;
  color: #2b2f32;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  font-family: inherit;
}

.lang-btn:hover {
  background: #2b2f32;
  color: #ffffff;
}

.flag-icon {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
}

/* ── burger — КЛЮЧОВИЙ ФІК: явно display:flex на мобільному ── */
.burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  transition: background 0.15s;
}

.burger-btn:hover {
  background: rgba(43, 47, 50, 0.08);
}

.burger-line {
  display: block;
  width: 24px;
  height: 2.5px;
  background: #2b2f32;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

.burger-line:nth-child(1).open { transform: translateY(7.5px) rotate(45deg); }
.burger-line:nth-child(2).open { opacity: 0; transform: scaleX(0); }
.burger-line:nth-child(3).open { transform: translateY(-7.5px) rotate(-45deg); }

/* ── mobile menu ── */
.mobile-menu {
  background: #F5F0E8;
  border-top: 1px solid rgba(43, 47, 50, 0.1);
  padding: 12px 24px 24px;
  /* Прибрано display:none — тепер v-if керує видимістю */
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #2b2f32;
  font-weight: 700;
  font-size: 17px;
  text-decoration: none;
  padding: 14px 4px;
  border-bottom: 1px solid rgba(43, 47, 50, 0.08);
  background: transparent;
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  text-align: left;
  transition: color 0.15s;
}

.mobile-nav-link:hover { color: #e0b200; }

.mobile-submenu {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-bottom: 8px;
  gap: 2px;
}

.mobile-sub-link {
  color: #2b2f32;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  padding: 10px 4px;
  border-bottom: 1px solid rgba(43, 47, 50, 0.06);
  display: block;
  transition: color 0.15s;
}

.mobile-sub-link:hover { color: #e0b200; }

.mobile-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}

/* ── responsive ── */
@media (max-width: 768px) {
  .desktop-nav,
  .desktop-lang {
    display: none !important;
  }
  .burger-btn {
    display: flex !important;
  }
  .header-inner {
    padding: 0 16px;
  }
}

@media (min-width: 769px) {
  .burger-btn {
    display: none !important;
  }
}

/* ── accessibility ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
  }
}

:focus-visible {
  outline: 2px solid #F5C518;
  outline-offset: 2px;
}
</style>