<template>
    <div class="slide">
        <div class="logo">
            <div class="logo-container">
                <span class="letter">D</span>
                <span class="letter">I</span>
                <span class="letter">Z</span>
                <span class="letter">Z</span>
                <span class="letter">I</span>
            </div>
        </div>
        <div class="text-container">
            <span class="text">
                {{$t('slider.slide_3_text')}}
            </span>
        </div>
        <div class="person">
            <div class="popcorn-container">
                <div class="popcorn-container2">
                    <div class="one-pop" v-for="(index, key) in 6" :key="key"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ThirdSlide'
}
</script>

<style scoped>

.slide {
    position: relative;
    height: 600px;
    background-image: url("@/assets/about_us_first_bg.jpg");
    overflow: hidden;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

.text-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    gap: 1.2rem;
    text-align: start;
    animation: slideInFromBottom 1s forwards;
}

.text {
    font-family: "DM Serif Display";
    text-shadow: 0 0 5px rgb(255 255 255);
    font-weight: 400;
    letter-spacing: 0;
    font-size: 1.7rem;
    line-height: 1.1;
    color: #000000;
    width: 50%;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
}
.person {
    width: 300px;
    height: 390px;
    background-image: url("@/assets/person1.png");
    background-size: cover;
    position: absolute;
    bottom: 0;
    z-index: 2;
}

.logo-container {
    position: relative;
    width: 40%;
}

.logo-container .letter {
    position: absolute;
    font-family: "DM Serif Display";
    font-size: 6rem;
    font-weight: bold;
    color: #ff5000;
    text-transform: uppercase;
    font-weight: 600;
    width: 40px;
    height: 40px;
    line-height: 40px;
    opacity: 0;
}
.popcorn-container {
    position: absolute;
    bottom: 255px; /* Adjust the bottom position */
    transform: translateX(-50%);
}

.popcorn-container2 {
    position: relative;
    height: 260px;
}

.one-pop {
    width: 50px;
    height: 50px;
    background-image: url("@/assets/one-popcorn.png");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    animation: popAnimation 1.5s forwards;
}

.one-pop:nth-child(1) {
    animation-delay: 0.3s;
    animation: popAnimation1 1s forwards;
}

.one-pop:nth-child(2) {
    animation-delay: 0.5s;
    animation: popAnimation2 0.5s forwards;
}

.one-pop:nth-child(3) {
    animation-delay: 0.4s;
    animation: popAnimation3 2s forwards;
}

.one-pop:nth-child(4) {
    animation-delay: 0.6s;
    animation: popAnimation4 1.5s forwards;
}

.one-pop:nth-child(5) {
    animation-delay: 0.7s;
    animation: popAnimation5 1s forwards;
}

.one-pop:nth-child(6) {
    animation-delay: 0.3s;
    animation: popAnimation6 0.5s forwards;
}

@keyframes popAnimation1 {
    0% {
        transform: translateY(0px) translateX(0px); /* Start at 0px left */
    }
    100% {
        transform: translateY(266px) translateX(-45px); /* End at 10px left */
    }
}

@keyframes popAnimation2 {
    0% {
        transform: translateY(0px) translateX(0px); /* Start at 0px left */
    }
    100% {
        transform: translateY(256px) translateX(-17px); /* End at 15px left */
    }
}

@keyframes popAnimation3 {
    0% {
        transform: translateY(0px) translateX(0px); /* Start at 0px left */
    }
    100% {
        transform: translateY(275px) translateX(49px); /* End at 20px left */
    }
}

@keyframes popAnimation4 {
    0% {
        transform: translateY(0px) translateX(0px); /* Start at 0px left */
    }
    100% {
        transform: translateY(245px) translateX(25px); /* End at 25px left */
    }
}

@keyframes popAnimation5 {
    0% {
        transform: translateY(0px) translateX(0px); /* Start at 0px left */
    }
    100% {
        transform: translateY(255px) translateX(80px); /* End at 100px left */
    }
}

@keyframes popAnimation6 {
    0% {
        transform: translateY(0px) translateX(0px); /* Start at 0px left */
    }
    100% {
        transform: translateY(270px) translateX(5px); /* End at 25px left */
    }
}
@media (max-width: 1250px) {
    .text {
        font-size: 1.6rem;
        width: 60%;
    }
    .text-container{
        align-items: self-start;
        justify-content: start;
        height: 90%;
    }
    .person {
        width: 200px!important;
        height: 290px!important;
    }
    .logo{
        width: 100%;
    }
}
@media (max-width: 600px) {
    .text {
        font-size: 1.3rem;
    }
    .text-container{
        margin-bottom: 40px;
    }
    .person {
        width: 160px!important;
        height: 240px!important;
    }
    .logo-container{
        width: 75%;
    }
}

.logo .letter:nth-child(1) { top: 0px; left: 0; animation: fadeIn 1s forwards 0.1s; }
.logo .letter:nth-child(2) { top: 0px; left: 70px; animation: fadeIn 1s forwards 0.2s; }
.logo .letter:nth-child(3) { top: 0px; left: 120px; animation: fadeIn 1s forwards 0.3s; }
.logo .letter:nth-child(4) { top: 0px; left: 190px; animation: fadeIn 1s forwards 0.4s; }
.logo .letter:nth-child(5) { top: 0px; left: 250px; animation: fadeIn 1s forwards 0.5s; }
.logo .letter:nth-child(6) { font-size: 40px; top: 70px; left: 110px; animation: fadeIn 1s forwards 0.5s; }
.logo .letter:nth-child(7) { font-size: 40px; top: 70px; left: 145px; animation: fadeIn 1s forwards 0.5s; }

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInFromBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
