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
        <div class="nav-dropdown" v-click-outside="() => dropdownOpen = false">
          <button class="nav-link dropdown-btn" :aria-expanded="dropdownOpen" @click="dropdownOpen = !dropdownOpen">
            {{ $t('header.popcorn') }}
            <svg class="chevron" :class="{ rotated: dropdownOpen }" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <transition name="dropdown-fade">
            <div class="dropdown-menu" v-show="dropdownOpen">
              <a href="#caramel-popcorn" class="dropdown-item" @click="dropdownOpen = false">{{ $t('header.caramel_pop') }}</a>
              <a href="#ready-popcorn" class="dropdown-item" @click="dropdownOpen = false">{{ $t('header.ready_pop') }}</a>
            </div>
          </transition>
        </div>
        <a href="#corn-snacks" class="nav-link">{{ $t('header.corns') }}</a>
        <a href="#contacts" class="nav-link">{{ $t('header.contacts') }}</a>
      </nav>

      <!-- Right controls: lang + burger -->
      <div class="header-controls">
        <!-- Language switcher (desktop) -->
        <button class="lang-btn desktop-lang" @click="switchLocale($i18n.locale === 'en' ? 'uk' : 'en')" :title="$i18n.locale === 'en' ? 'Switch to Ukrainian' : 'Switch to English'">
          <component :is="$i18n.locale === 'en' ? 'UAFlag' : 'UKFlag'" class="flag-icon"/>
          <span>{{ $i18n.locale === 'en' ? 'UA' : 'EN' }}</span>
        </button>

        <!-- Burger button (mobile) -->
        <button class="burger-btn" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-label="Відкрити меню">
          <span class="burger-line" :class="{ open: mobileOpen }"></span>
          <span class="burger-line" :class="{ open: mobileOpen }"></span>
          <span class="burger-line" :class="{ open: mobileOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile drawer -->
    <transition name="slide-down">
      <div v-if="mobileOpen" class="mobile-menu" role="dialog" aria-modal="true" aria-label="Мобільне меню">
        <nav class="mobile-nav">
          <a href="#carouselExampleIndicators" class="mobile-nav-link" @click="mobileOpen = false">{{ $t('header.about') }}</a>
          <div class="mobile-nav-group">
            <button class="mobile-nav-link mobile-dropdown-btn" @click="mobileDropdownOpen = !mobileDropdownOpen">
              {{ $t('header.popcorn') }}
              <svg class="chevron" :class="{ rotated: mobileDropdownOpen }" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4L6 8L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <transition name="fade">
              <div v-if="mobileDropdownOpen" class="mobile-submenu">
                <a href="#caramel-popcorn" class="mobile-sub-link" @click="mobileOpen = false">{{ $t('header.caramel_pop') }}</a>
                <a href="#ready-popcorn" class="mobile-sub-link" @click="mobileOpen = false">{{ $t('header.ready_pop') }}</a>
              </div>
            </transition>
          </div>
          <a href="#corn-snacks" class="mobile-nav-link" @click="mobileOpen = false">{{ $t('header.corns') }}</a>
          <a href="#contacts" class="mobile-nav-link" @click="mobileOpen = false">{{ $t('header.contacts') }}</a>
        </nav>
        <div class="mobile-footer">
          <button class="lang-btn" @click="switchLocale($i18n.locale === 'en' ? 'uk' : 'en')">
            <component :is="$i18n.locale === 'en' ? 'UAFlag' : 'UKFlag'" class="flag-icon"/>
            <span>{{ $i18n.locale === 'en' ? 'UA' : 'EN' }}</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
  import UKFlag from "@/assets/country/UKFlag.vue";
  import UAFlag from "@/assets/country/UAFlag.vue";

  export default {
    name: "SnacksHeader",
    components: { UAFlag, UKFlag },
    directives: {
      clickOutside: {
        mounted(el, binding) {
          el._clickOutsideHandler = (event) => {
            if (!el.contains(event.target)) binding.value(event);
          };
          document.addEventListener('click', el._clickOutsideHandler);
        },
        unmounted(el) {
          document.removeEventListener('click', el._clickOutsideHandler);
        },
      },
    },
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
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      switchLocale(locale) {
        this.$i18n.locale = locale;
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 10;
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
  --font-bold: 'Arial Black', 'Arial', sans-serif;
  --radius: 8px;
  --shadow: 0 2px 16px rgba(43, 47, 50, 0.08);
}

/* ── layout ── */
.snacks-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--c-bg);
  box-shadow: var(--shadow);
  font-family: var(--font-main);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.snacks-header.scrolled {
  background: #ffffff;
  box-shadow: 0 2px 20px rgba(43, 47, 50, 0.12);
}

.logo-img {
  height: 60px;
  width: auto;
  display: block;
}

.header-top-bar {
  height: 4px;
  background: var(--c-yellow);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: var(--h-height);
  gap: 24px;
}

/* ── logo ── */
.header-logo {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-svg {
  height: 52px;
  width: auto;
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
  color: var(--c-dark);
  font-weight: 700;
  font-size: 15px;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: var(--radius);
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
  background: var(--c-yellow);
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
  color: var(--c-dark);
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

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--c-dark);
  border-radius: var(--radius);
  padding: 8px;
  min-width: 200px;
  box-shadow: 0 8px 24px rgba(43, 47, 50, 0.18);
  z-index: 100;
}

.dropdown-item {
  display: block;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.15s;
}

.dropdown-item:hover {
  background: var(--c-yellow);
  color: var(--c-dark);
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
  border: 2px solid var(--c-dark);
  border-radius: 20px;
  padding: 5px 12px;
  font-weight: 700;
  font-size: 13px;
  color: var(--c-dark);
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  font-family: inherit;
}

.lang-btn:hover {
  background: var(--c-dark);
  color: #fff;
}

.flag-icon {
  width: 18px;
  height: 18px;
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
}

/* ── burger ── */
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
  border-radius: var(--radius);
  transition: background 0.15s;
}

.burger-btn:hover {
  background: rgba(43, 47, 50, 0.08);
}

.burger-line {
  display: block;
  width: 24px;
  height: 2.5px;
  background: var(--c-dark);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease, width 0.25s ease;
  transform-origin: center;
}

.burger-line:nth-child(1).open { transform: translateY(7.5px) rotate(45deg); }
.burger-line:nth-child(2).open { opacity: 0; transform: scaleX(0); }
.burger-line:nth-child(3).open { transform: translateY(-7.5px) rotate(-45deg); }

/* ── mobile menu ── */
.mobile-menu {
  background: var(--c-bg);
  border-top: 1px solid rgba(43, 47, 50, 0.1);
  padding: 12px 24px 24px;
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
  color: var(--c-dark);
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

.mobile-nav-link:hover { color: var(--c-yellow-hover); }

.mobile-submenu {
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-bottom: 8px;
  gap: 2px;
}

.mobile-sub-link {
  color: var(--c-dark);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  padding: 10px 4px;
  border-bottom: 1px solid rgba(43, 47, 50, 0.06);
  display: block;
  transition: color 0.15s;
}

.mobile-sub-link:hover { color: var(--c-yellow-hover); }

.mobile-footer {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}

/* ── transitions ── */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
  max-height: 500px;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}

/* ── responsive ── */
@media (max-width: 768px) {
  .desktop-nav,
  .desktop-lang {
    display: none;
  }
  .burger-btn {
    display: flex;
  }
  .header-inner {
    padding: 0 16px;
  }
}

@media (min-width: 769px) {
  .mobile-menu {
    display: none !important;
  }
  .burger-btn {
    display: none;
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
  outline: 2px solid var(--c-yellow);
  outline-offset: 2px;
}
</style>