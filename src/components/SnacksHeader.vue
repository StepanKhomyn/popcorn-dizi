<template>
    <header class="navbar navbar-expand-lg navbar-dark header">
        <div class="container flex-column position-relative">
            <!-- Logo -->
            <router-link to="/" class="logo"><img src="@/assets/dizi-logo.png" alt="dizi-logo"/></router-link>

            <!-- Social media icons -->
                        <div class="social-icons">
                            <a href="https://www.instagram.com/dizzi_snacks?igsh=MWhnMGxzM3U1aTBwbg==" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                        </div>

            <!-- Navigation toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

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
                    <li class="nav-item flags">
                        <span class="links" @click="switchLocale('uk')">
                          <UAFlag class="flag-icons"/>UA
                        </span>
                        <span class="links" @click="switchLocale('en')">
                          <UKFlag class="flag-icons"/>UK
                        </span>
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
.logo img{
    height: 70px;
}
/* Styles for social media icons */
.social-icons {
    position: absolute;
    display: flex;
    align-items: center;
    position: absolute;
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
