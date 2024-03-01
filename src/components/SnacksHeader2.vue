<template>
    <header class="navbar navbar-expand-lg navbar-dark bg-dark">
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
                            <li><router-link to="/caramel-popcorn" class="dropdown-item links">Карамелізований попкорн</router-link></li>
                            <li><router-link to="/ready-popcorn" class="dropdown-item links">Готовий попкорн</router-link></li>
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
import UAFlag from "@/assets/country/UAFlag.vue";
import UKFlag from "@/assets/country/UKFlag.vue";

export default {
    name: "SnacksHeader2",
    components: {UKFlag, UAFlag}
}
</script>

<style scoped>
/* Add any custom styles here */

/* Styles for social media icons */
.social-icons {
    position: absolute;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 50%;
    right: 0;
}

.social-icon {
    margin-right: 10px;
    color: #fff; /* Adjust color as needed */
}

/* Style the logo */
.navbar-brand {
    margin-right: auto;
}
.links{
    color: #fafafa;
    font-weight: 600;
    font-family: sans-serif;
    cursor: pointer;
}
.logo{
    width: 200px;
    height: 98px;
    background-color: #fafafa;
    border-radius: 30px;
}
.flags{
    display: flex;
    align-items: center;
    padding-right: var(--bs-navbar-nav-link-padding-x);
    padding-left: var(--bs-navbar-nav-link-padding-x);
    gap: 15px;
}
.flag-icons{
    margin-right: 5px;
}
</style>
