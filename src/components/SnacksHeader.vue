<template>
    <header class="navbar navbar-expand-lg navbar-dark header">
        <div class="container flex-column position-relative">
            <!-- Logo -->
            <router-link to="/" class="logo"><img src="@/assets/dizi-logo.png" alt="dizi-logo"/></router-link>

            <!-- Social media icons -->
                        <div class="social-icons">
                            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                        </div>

            <!-- Navigation toggle button -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navigation links -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle links" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Попкорн
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" data-bs-theme="dark">
                            <li><router-link to="/caramel-popcorn" class="dropdown-item drp-link">Карамелізований попкорн</router-link></li>
                            <li><router-link to="/ready-popcorn" class="dropdown-item drp-link">Готовий попкорн</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link links">Кукурудзяні палички</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contact" class="nav-link links">Контакти</router-link>
                    </li>
                    <li class="nav-item flags">
                        <span class="links"><UAFlag class="flag-icons"/>UA</span>
                        <span class="links"><UKFlag class="flag-icons"/>UK</span>
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
    components: {UAFlag, UKFlag}
}
</script>

<style scoped>
/* Add any custom styles here */
.header{
    border-bottom: 2px solid #2b2f32;
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
