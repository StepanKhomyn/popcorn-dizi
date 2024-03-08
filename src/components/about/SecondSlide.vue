<template>
    <div class="slide">
        <div class="logo">
            <div class="logo-container">
            </div>
        </div>
        <div class="text-container">
            <span class="text from-right">
                {{$t('slider.slide_2_text_1')}}
            </span>
            <span class="text from-left">
                {{$t('slider.slide_2_text_2')}}
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
    name: 'SecondSlide'
}
</script>

<style scoped>

.slide {
    position: relative;
    height: 600px;
    background-image: url("@/assets/about_us_fourth_bg.jpg");
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
.from-right {
    opacity: 0;
    animation: slideInFromRight 1s forwards;
}

.from-left {
    opacity: 0;
    animation: slideInFromLeft 1s forwards;
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
    right: 20px;
    z-index: 2;
}
.logo-container {
    position: relative;
    width: 290px;
    height: 120px;
    background-image: url("@/assets/dizi-logo-without-text.png");
    background-size: cover;
}


.logo-container .letter {
    position: absolute;
    font-family: 'Rouge Script', cursive;
    font-size: 90px;
    font-weight: bold;
    color: #fafafa;
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
        margin-bottom: 1.2rem;
    }
    .person {
        width: 200px!important;
        height: 290px!important;
    }
}
@media (max-width: 600px) {
    .text {
        font-size: 1.2rem;
    }
    .person {
        width: 160px!important;
        height: 240px!important;
    }
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.items{
    width: 300px;
    height: 100%;
    position: relative;
}
.pack {
    position: absolute;
    width: 250px;
}
.pack-1{
    width: 250px;
    height: 295px;
    background-size: cover;
    background-image: url("@/assets/popcorn-pack.png");
    animation: slideInFromBottomLeft 1s forwards;
    bottom: 50px
}
.pack-2{
    width: 250px;
    height: 280px;
    background-size: cover;
    background-image: url("@/assets/popcorn3.png");
    animation: slideInFromTopRight 1s forwards;
    right: 130px
}

@keyframes slideInFromBottomLeft {
    from {
        opacity: 0;
        transform: translate(-100%, 100%);
    }
    to {
        opacity: 1;
        transform: translate(-20%, 20%);
    }
}

@keyframes slideInFromTopRight {
    from {
        opacity: 0;
        transform: translate(100%, -100%);
    }
    to {
        opacity: 1;
        transform: translate(90%, 0);
    }
}

</style>
