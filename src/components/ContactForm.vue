<template>
  <section id="contacts" class="contacts-section">
    <div class="popcorn-bg" aria-hidden="true">
      <span v-for="i in 12" :key="i" class="kernel" :style="kernelStyle(i)">🍿</span>
    </div>

    <div class="contacts-inner">
      <div class="section-header">
        <span class="section-eyebrow">{{ $t('header.contacts') }}</span>
        <h2 class="section-title">{{ $t('form.get_in_touch') || 'Зв\'яжіться з нами' }}</h2>
      </div>

      <div class="contacts-grid">
        <!-- Left: Info -->
        <div class="info-column">
          <div class="info-card">
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div class="info-content">
                <p class="info-label">{{ $t('form.main_address') }}</p>
                <p class="info-value">{{ $t('form.address_main') }}</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="info-content">
                <p class="info-label">{{ $t('form.working_address') }}</p>
                <p class="info-value">{{ $t('form.address_working') }}</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
              </div>
              <div class="info-content">
                <p class="info-label">{{ $t('form.info') }}</p>
                <p class="info-value">+38 (093) 735 63 33</p>
                <p class="info-value">dizzisnacks@gmail.com</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
              <div class="info-content">
                <p class="info-label">{{ $t('form.social_acc') }}</p>
                <a
                    href="https://www.instagram.com/dizzi_snacks?igsh=MWhnMGxzM3U1aTBwbg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-link"
                    aria-label="Instagram Dizzi Snacks"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  @dizzi_snacks
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="form-column">
          <div class="form-card">
            <h3 class="form-title">{{ $t('form.send_message') || 'Надіслати повідомлення' }}</h3>

            <transition name="toast">
              <div v-if="showToast" class="toast-success" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ $t('form.success') || 'Повідомлення надіслано!' }}
              </div>
            </transition>

            <div class="form-body">
              <div class="field-group" :class="{ 'has-error': !isNameValid }">
                <label for="f-name" class="field-label">
                  {{ $t('form.name') }}<span class="required">*</span>
                </label>
                <div class="input-wrapper">
                  <svg class="field-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  <input
                      id="f-name"
                      type="text"
                      class="field-input"
                      :placeholder="$t('form.name_placeholder') || 'Ваше імя'"
                      v-model="formData.name"
                      @blur="validateName"
                      autocomplete="name"
                  />
                </div>
                <transition name="err">
                  <p v-if="!isNameValid" class="field-error">{{ $t('form.enter_name') }}</p>
                </transition>
              </div>

              <div class="field-group" :class="{ 'has-error': !isPhoneValid }">
                <label for="f-phone" class="field-label">
                  {{ $t('form.phone_number') }}<span class="required">*</span>
                </label>
                <div class="input-wrapper">
                  <svg class="field-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                  <input
                      id="f-phone"
                      type="tel"
                      class="field-input"
                      :placeholder="$t('form.phone_placeholder') || '0XXXXXXXXX'"
                      v-model="formData.phone"
                      @blur="validatePhone"
                      autocomplete="tel"
                  />
                </div>
                <transition name="err">
                  <p v-if="!isPhoneValid" class="field-error">{{ $t('form.enter_phone') }}</p>
                </transition>
              </div>

              <div class="field-group" :class="{ 'has-error': !isMessageValid }">
                <label for="f-message" class="field-label">
                  {{ $t('form.text_message') }}<span class="required">*</span>
                </label>
                <textarea
                    id="f-message"
                    class="field-input field-textarea"
                    :placeholder="$t('form.message_placeholder') || 'Ваше повідомлення…'"
                    v-model="formData.message"
                    rows="4"
                    @blur="validateMessage"
                ></textarea>
                <transition name="err">
                  <p v-if="!isMessageValid" class="field-error">{{ $t('form.enter_text') }}</p>
                </transition>
              </div>

              <button type="button" class="submit-btn" @click="submitForm" :disabled="isSubmitting">
                <span v-if="!isSubmitting" class="btn-inner">
                  {{ $t('form.send') }}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="17" height="17">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </span>
                <span v-else class="spinner" aria-label="Надсилання..."></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        formData: { name: '', phone: '', message: '' },
        isNameValid: true,
        isPhoneValid: true,
        isMessageValid: true,
        showToast: false,
        isSubmitting: false,
      };
    },
    methods: {
      kernelStyle(i) {
        const positions = [
          { top: '8%',  left: '5%'  }, { top: '15%', left: '88%' },
          { top: '30%', left: '2%'  }, { top: '45%', left: '93%' },
          { top: '62%', left: '7%'  }, { top: '75%', left: '90%' },
          { top: '85%', left: '12%' }, { top: '20%', left: '78%' },
          { top: '55%', left: '82%' }, { top: '70%', left: '3%'  },
          { top: '90%', left: '70%' }, { top: '5%',  left: '45%' },
        ];
        const p = positions[(i - 1) % positions.length];
        return {
          top: p.top,
          left: p.left,
          animationDelay: `${(i * 0.7) % 4}s`,
          fontSize: `${1.2 + ((i * 0.3) % 1.2)}rem`,
          opacity: 0.12 + (i % 5) * 0.04,
        };
      },
      validateName()    { this.isNameValid    = !!this.formData.name.trim(); },
      validatePhone()   { this.isPhoneValid   = /^[0-9]{10}$/.test(this.formData.phone.trim()); },
      validateMessage() { this.isMessageValid = !!this.formData.message.trim(); },
      async submitForm() {
        this.validateName();
        this.validatePhone();
        this.validateMessage();
        if (!this.isNameValid || !this.isPhoneValid || !this.isMessageValid) return;
        this.isSubmitting = true;
        await new Promise(r => setTimeout(r, 900));
        this.isSubmitting = false;
        this.formData = { name: '', phone: '', message: '' };
        this.showToast = true;
        setTimeout(() => { this.showToast = false; }, 3500);
      },
    },
  };
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

.contacts-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
  min-height: 100vh;
  padding: 72px 24px 80px;
  font-family: 'Inter', sans-serif;
}

.popcorn-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.kernel {
  position: absolute;
  animation: floatKernel 6s ease-in-out infinite alternate;
  user-select: none;
}
@keyframes floatKernel {
  from { transform: translateY(0) rotate(-8deg); }
  to   { transform: translateY(-18px) rotate(8deg); }
}
@media (prefers-reduced-motion: reduce) {
  .kernel { animation: none; }
}

.contacts-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 52px;
}
.section-eyebrow {
  display: inline-block;
  background: rgba(255, 215, 0, 0.15);
  border: 1px solid rgba(255, 215, 0, 0.35);
  color: #FFD700;
  font-family: 'Nunito', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 14px;
}
.section-title {
  font-family: 'Nunito', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

.contacts-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 32px;
  align-items: start;
}
@media (max-width: 768px) {
  .contacts-grid { grid-template-columns: 1fr; }
}

.info-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.info-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.info-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  background: rgba(255, 215, 0, 0.12);
  border: 1px solid rgba(255, 215, 0, 0.25);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFD700;
}
.info-icon svg { width: 18px; height: 18px; }
.info-content { flex: 1; }
.info-label {
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #FFD700;
  margin: 0 0 4px;
}
.info-value {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0 0 2px;
  line-height: 1.55;
}
.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}
.social-link:hover { color: #FFD700; }
.social-link:focus-visible {
  outline: 2px solid #FFD700;
  outline-offset: 3px;
  border-radius: 4px;
}

.form-card {
  background: #FFF8E7;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.35);
  position: relative;
  overflow: hidden;
}
.form-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700, #FF6B6B, #FFD700);
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}
@keyframes shimmer {
  from { background-position: 0% center; }
  to   { background-position: 200% center; }
}
.form-title {
  font-family: 'Nunito', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 28px;
}
.form-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.field-group { display: flex; flex-direction: column; gap: 6px; }
.field-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #3a3a4a;
  letter-spacing: 0.02em;
}
.required { color: #FF6B6B; margin-left: 2px; }
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.field-icon {
  position: absolute;
  left: 13px;
  width: 16px;
  height: 16px;
  color: #aaa;
  pointer-events: none;
  transition: color 0.2s;
}
.input-wrapper:focus-within .field-icon { color: #ffbe00; }
.field-input {
  width: 100%;
  padding: 11px 14px 11px 40px;
  border: 1.5px solid #e0ddd4;
  border-radius: 12px;
  background: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 0.93rem;
  color: #1a1a2e;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
  outline: none;
  appearance: none;
}
.field-textarea {
  padding-left: 14px;
  resize: vertical;
  min-height: 110px;
}
.field-input::placeholder { color: #bbb; }
.field-input:focus {
  border-color: #FFD700;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.18);
}
.has-error .field-input {
  border-color: #FF6B6B;
  box-shadow: 0 0 0 3px rgba(255,107,107,0.12);
}
.field-error {
  font-size: 0.77rem;
  color: #FF6B6B;
  margin: 0;
  font-weight: 500;
}

.submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #FFD700 0%, #ffbe00 100%);
  color: #1a1a2e;
  border: none;
  border-radius: 14px;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s;
  margin-top: 4px;
  box-shadow: 0 6px 20px rgba(255,215,0,0.4);
}
.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(255,215,0,0.55);
}
.submit-btn:active:not(:disabled) { transform: translateY(0); }
.submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
.submit-btn:focus-visible { outline: 2px solid #1a1a2e; outline-offset: 3px; }
.btn-inner { display: flex; align-items: center; gap: 9px; }

.spinner {
  display: inline-block;
  width: 20px; height: 20px;
  border: 2.5px solid rgba(26,26,46,0.3);
  border-top-color: #1a1a2e;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.toast-success {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #e6f9ee;
  border: 1px solid #5cb85c;
  color: #2d6a2d;
  border-radius: 12px;
  padding: 11px 15px;
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 16px;
}
.toast-enter-active, .toast-leave-active { transition: opacity 0.3s, transform 0.3s; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-8px); }

.err-enter-active, .err-leave-active { transition: opacity 0.2s, transform 0.2s; }
.err-enter-from, .err-leave-to { opacity: 0; transform: translateY(-4px); }

@media (max-width: 480px) {
  .contacts-section { padding: 48px 16px 60px; }
  .form-card { padding: 28px 20px; }
  .info-card { padding: 24px 20px; }
}
</style>