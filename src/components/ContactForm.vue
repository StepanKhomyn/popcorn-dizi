<template>
    <div class="container-fluid" id="contacts">
        <h1 class="text-center text-light mt-4">{{$t('header.contacts')}}</h1>
        <div class="row justify-content-center container-form">
            <div class="col-md-7 pt-4">
                <div class="row">
                    <div class="col-md-6 info-text">
                        <div class="contact-info">
                            <p class="text-light mb-1 form-text"><strong>{{$t('form.main_address')}}</strong></p>
                            <p class="text-light form-text">{{$t('form.address_main')}}</p>
                        </div>
                        <div class="contact-info">
                            <p class="text-light mb-1 form-text"><strong>{{$t('form.working_address')}}</strong></p>
                            <p class="text-light form-text">{{$t('form.address_working')}}</p>
                        </div>
                        <div class="contact-info mt-4">
                            <p class="text-light mb-1 form-text"><strong>{{$t('form.info')}}</strong></p>
                            <p class="text-light form-text">{{$t('form.phone')}}: +38 (093) 735 63 33</p>
                            <p class="text-light form-text">Email: dizzisnacks@gmail.com</p>
                        </div>
                        <div class="social-list mt-4">
                            <p class="text-light mb-1 form-text"><strong>{{$t('form.social_acc')}}</strong></p>
                            <p class="text-light form-text">
                                <a href="https://www.instagram.com/dizzi_snacks?igsh=MWhnMGxzM3U1aTBwbg==" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a></p>
                        </div>
                    </div>
                    <div class="col-md-6 row-margin">
                        <form class="needs-validation contact-form" novalidate @submit.prevent="submitForm">
                    <div class="row g-3">
                        <div class="col-12 mb-4">
                            <label for="validationCustom01" class="form-label " :class="{'text-black': isNameValid, 'text-danger': !isNameValid}">{{$t('form.name')}}<span :class="{'text-danger': !isNameValid}">*</span></label>
                            <div class="input-group has-validation">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" :class="{'text-black': isNameValid, 'text-danger': !isNameValid}"  viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                </span>
                                <input type="text" class="form-control" id="validationCustom01" required v-model="formData.name" :class="{'is-invalid': !isNameValid}">
                                <div class="invalid-feedback text-danger" v-if="!isNameValid">
                                    {{$t('form.enter_name')}}
                                </div>
                            </div>
                        </div>

                        <div class="col-12 mb-4">
                            <label for="validationCustom02" class="form-label " :class="{'text-black': isPhoneValid, 'text-danger': !isPhoneValid}">{{$t('form.phone_number')}}<span :class="{'text-danger': !isPhoneValid}">*</span></label>
                            <div class="input-group has-validation">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" :class="{'text-black': isPhoneValid, 'text-danger': !isPhoneValid}"  viewBox="0 0 16 16">
                                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                    </svg>
                                </span>
                                <input type="tel" class="form-control" id="validationCustom02" required pattern="[0-9]{10}" v-model="formData.phone" :class="{'is-invalid': !isPhoneValid}">
                                <div class="invalid-feedback text-danger" v-if="!isPhoneValid">
                                    {{$t('form.enter_phone')}}
                                </div>
                            </div>
                        </div>

                        <div class="col-12  mb-4">
                            <label for="validationCustom03" class="form-label" :class="{'text-black': isMessageValid, 'text-danger': !isMessageValid}">{{$t('form.text_message')}}<span :class="{'text-danger': !isMessageValid}">*</span></label>
                            <textarea class="form-control" id="validationCustom03" rows="3" required v-model="formData.message" :class="{'is-invalid': !isMessageValid}"></textarea>
                            <div class="invalid-feedback text-danger" v-if="!isMessageValid">
                                {{$t('form.enter_text')}}
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="button" class="btn btn-outline-secondary" @click="submitForm">{{$t('form.send')}}</button>
                        </div>
                    </div>
                        </form>
                    </div>
                </div>
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

.input-group-text {
    width: 40px; /* Зменшення розміру іконки */
    color: #ff606e; /* Червоний колір для невалідних іконок */
}
.container-fluid {
    background-color: #343a40;
    padding: 20px;
    margin-top: 20px;
    height: max-content;
}

.text-light {
    color: #fff !important;
}

.contact-info {
    margin-bottom: 1.4rem;
}
.contact-form{
    background-color: #fafafa;
    border-radius: 20px;
    padding: 20px;
}
.form-text{
    text-align: left;
    max-width: 360px;
}
.social-icon {
    margin-right: 10px;
    color: #fff; /* Adjust color as needed */
}
.info-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.container-form{
    height: 90%;
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>
