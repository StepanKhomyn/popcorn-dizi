<template>
    <header class="navbar navbar-expand-lg navbar-dark header">
        <div class="container flex-column position-relative adaptive">
            <!-- Logo -->
            <router-link to="/" class="logo"><img src="@/assets/dizi-logo.png" alt="dizi-logo"/></router-link>

            <!-- Social media icons -->
            <div class="social-icons">
                <div class="social-icons-instagram">
                    <a href="https://www.instagram.com/dizzi_snacks?igsh=MWhnMGxzM3U1aTBwbg==" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 2500 2500"><defs><radialGradient id="0" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"/><stop offset=".78" stop-color="#d82d7e"/></radialGradient><radialGradient id="1" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"/><stop offset="1" stop-color="#8c3aaa"/></radialGradient></defs><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#0)"/><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#1)"/></svg>
                    </a>
                </div>
                <div v-if="$i18n.locale === 'en'" class="links" @click="switchLocale('uk')">
                  <UAFlag class="flag-icons"/>UA
                </div>
                <div v-else class="links" @click="switchLocale('en')">
                  <UKFlag class="flag-icons"/>EN
                </div>
            </div>

            <div class="d-flex align-items-center flex-row burger">
                <!-- Navigation toggle button -->
                <div data-bs-toggle="collapse" ata-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" v-if="$i18n.locale === 'en'" class="links" @click="switchLocale('uk')">
                    <UAFlag class="flag-icons"/>UA
                </div>
                <div v-else class="links" @click="switchLocale('en')">
                    <UKFlag class="flag-icons"/>EN
                </div>
                <button @click="closed = !closed" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <svg v-if="closed" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000"/>
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>

            <!-- Navigation links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#carouselExampleIndicators" class="nav-link links">{{$t('header.about')}}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle links" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{$t('header.popcorn')}}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" data-bs-theme="dark">
                            <li><a href="#caramel-popcorn" class="dropdown-item drp-link">{{$t('header.caramel_pop')}}</a></li>
                            <li><a href="#ready-popcorn" class="dropdown-item drp-link">{{$t('header.ready_pop')}}</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="#corn-snacks" class="nav-link links">{{$t('header.corns')}}</a>
                    </li>
                    <li class="nav-item">
                        <a href="#contacts" class="nav-link links">{{$t('header.contacts')}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import UKFlag from "@/assets/country/UKFlag.vue";
import UAFlag from "@/assets/country/UAFlag.vue";

export default {
    name: "SnacksHeader",
    components: {UAFlag, UKFlag},
    data() {
        return {
            closed: true
        }
    },
    methods: {
        switchLocale(locale) {
            this.$i18n.locale = locale;
        }
    }
}
</script>

<style scoped>
/* Add any custom styles here */
.header{
    /*border-bottom: 2px solid #2b2f32;*/
}
.social-icons-instagram {
    margin-right: 20px;
}
.logo img{
    height: 70px;
}
.navbar-toggler {
    background: transparent!important;
}
.navbar-toggler-icon {
    color:red;
}
/* Styles for social media icons */
.social-icons {
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: row;
    top: 50px;
    right: 0;
}

.social-icon {
    margin-right: 10px;
    color: #2b2f32; /* Adjust color as needed */
}

/* Style the logo */
.navbar-brand {
    margin-right: auto;
}
@media (max-width: 990px) {
    .adaptive {
        flex-direction: row!important;
    }
    .social-icons {
        display: none;
    }
    .nav-item {
        text-align: left;
    }
}
@media (min-width: 990px) {
    .burger {
        display: none!important;
    }
}
.links{
    color: #2b2f32;
    font-weight: 600;
    font-family: sans-serif;
    cursor: pointer;
}
.flags{
    display: flex;
    align-items: center;
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
    gap: 10px;
}
.flag-icons{
    margin-right: 5px;
}
.links:hover {
    color: #2b2f32;
}

/* Hover styles for dropdown */
.dropdown-item:hover {
    background-color: #2b2f32;
}
.drp-link{
    color: #fff;
    font-weight: 600;
    font-family: sans-serif;
    cursor: pointer;
}
.nav-link.dropdown-toggle.links.show {
    color: #2b2f32; /* Color for dropdown toggle when dropdown is shown */
}
.navbar-toggler{
    background-color: #2b2f32;
}
</style>
