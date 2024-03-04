<template>
    <div class="slide">
        <div class="text-container">
            <span class="text from-top">
                Компанія ТОВ «КДМ Продукт» була заснована в 2016 році у місті Червоноград, Львівської області.
            </span>
            <span class="text from-bottom">
            Ми спеціалізуємося на виготовленні попкорну та кукурудзяних паличок різних смаків  під торгівельною маркою «ТМ Dizzi», а також під власними марками наших клієнтів.
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
    name: 'FirstSlide'
}
</script>

<style scoped>

.slide {
    position: relative;
    height: 600px;
    background-image: url("@/assets/fone/about_us_six_bg.jpg");
    opacity: 0.9;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
}
.text-container{
    display: flex;
    flex-direction: column;
    width: 65%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    gap: 1.2rem;
    text-align: start;
}
.text{
    /*display: block;*/
    font-family: "DM Serif Display";
    text-shadow: 0 0 5px rgb(255 255 255);
    font-weight: 400;
    letter-spacing: 0;
    font-size: 2.4rem;
    line-height: 1.1;
    color: #000000;
}
.from-top {
    opacity: 0;
    animation: slideInFromTop 1s forwards;
}

.from-bottom {
    opacity: 0;
    animation: slideInFromBottom 1s forwards;
}
.tracking-in-expand-fwd {
    -webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
}

.person {
    width: 300px;
    height: 390px;
    background-image: url("@/assets/popcorn/person.png");
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 20px;
    z-index: 2;
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
    background-image: url("@/assets/popcorn/one-popcorn.png");
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

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideInFromTop {
    from {
        opacity: 0;
        transform: translateY(-100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
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
