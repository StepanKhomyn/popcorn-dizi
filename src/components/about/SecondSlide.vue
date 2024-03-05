<template>
    <div class="slide">
       
        <div class="text-container">
            <span class="text from-right">
                {{$t('slider.slide_2_text_1')}}
            </span>
            <span class="text from-left">
                {{$t('slider.slide_2_text_2')}}
            </span>
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
    background-image: url("@/assets/fone/about_us_fourth_bg.jpg");
    overflow: hidden;
    background-size: cover;
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
    font-family: "DM Serif Display";
    text-shadow: 0 0 5px rgb(255 255 255);
    font-weight: 400;
    letter-spacing: 0;
    font-size: 2.4rem;
    line-height: 1.1;
    color: #000000;
}
.from-right {
    opacity: 0;
    animation: slideInFromRight 1s forwards;
}

.from-left {
    opacity: 0;
    animation: slideInFromLeft 1s forwards;
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
    background-image: url("@/assets/popcorn/popcorn-pack.png");
    animation: slideInFromBottomLeft 1s forwards;
    bottom: 50px
}
.pack-2{
    width: 250px;
    height: 280px;
    background-size: cover;
    background-image: url("@/assets/popcorn/popcorn3.png");
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
