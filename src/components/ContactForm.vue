<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-6 pt-4">
                <form class="needs-validation" novalidate @submit.prevent="submitForm">
                    <div class="row g-3">
                        <div class="col-12 text-center mb-4">
                            <h2 class="text-light">Контакти</h2>
                            <p class="text-light">Email: dizzi@email.com | Тел.: 0990000</p>
                        </div>
                        <div class="col-md-6">
                            <label for="validationCustom01" class="form-label " :class="{'text-light': isNameValid, 'text-danger': !isNameValid}">Ім'я <span :class="{'text-danger': !isNameValid}">*</span></label>
                            <div class="input-group has-validation">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" :class="{'text-black': isNameValid, 'text-danger': !isNameValid}"  viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </span>
                                <input type="text" class="form-control" id="validationCustom01" required v-model="formData.name" :class="{'is-invalid': !isNameValid}">
                                <div class="invalid-feedback text-danger" v-if="!isNameValid">
                                    Будь ласка, введіть ім'я.
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <label for="validationCustom02" class="form-label " :class="{'text-light': isPhoneValid, 'text-danger': !isPhoneValid}">Телефон <span :class="{'text-danger': !isPhoneValid}">*</span></label>
                            <div class="input-group has-validation">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" :class="{'text-black': isPhoneValid, 'text-danger': !isPhoneValid}"  viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg>
                                </span>
                                <input type="tel" class="form-control" id="validationCustom02" required pattern="[0-9]{10}" v-model="formData.phone" :class="{'is-invalid': !isPhoneValid}">
                                <div class="invalid-feedback text-danger" v-if="!isPhoneValid">
                                    Будь ласка, введіть телефон у форматі 0990000000.
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mt-5 mb-4">
                            <label for="validationCustom03" class="form-label" :class="{'text-light': isMessageValid, 'text-danger': !isMessageValid}">Текст повідомлення <span :class="{'text-danger': !isMessageValid}">*</span></label>
                            <textarea class="form-control" id="validationCustom03" rows="3" required v-model="formData.message" :class="{'is-invalid': !isMessageValid}"></textarea>
                            <div class="invalid-feedback text-danger" v-if="!isMessageValid">
                                Будь ласка, введіть текст повідомлення.
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-primary" type="button" @click="submitForm">Надіслати</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data() {
        return {
            formData: {
                name: '',
                phone: '',
                message: ''
            },
            isNameValid: true,
            isPhoneValid: true,
            isMessageValid: true,
            showToast: false // Додана властивість для відображення Toast
        };
    },
    methods: {
        submitForm() {
            // Валідація імені
            this.isNameValid = !!this.formData.name;
            // Валідація телефону
            this.isPhoneValid = /^[0-9]{10}$/.test(this.formData.phone);
            // Валідація повідомлення
            this.isMessageValid = !!this.formData.message;
            console.log(this.isNameValid, this.isPhoneValid, this.isMessageValid)
            // Перевірка, чи всі дані валідні
            if (this.isNameValid && this.isPhoneValid && this.isMessageValid) {
                console.log("llsd")
                // Очищення форми
                this.formData = {
                    name: '',
                    phone: '',
                    message: ''
                };
            }
        }
    }
}
</script>

<style scoped>
.container-fluid {
    background-color: #343a40; /* Темний фон */
    height: 100vh;
}

.input-group-text {
    width: 40px; /* Зменшення розміру іконки */
    color: #ff606e; /* Червоний колір для невалідних іконок */
}
</style>
