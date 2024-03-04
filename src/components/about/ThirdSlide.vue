<template>
    <div class="slide">
        <div class="logo">
            <div class="logo-container">
            <span class="letter">D</span>
            <span class="letter">I</span>
            <span class="letter">Z</span>
            <span class="letter">Z</span>
            <span class="letter">I</span>
                <span class="letter">Т</span>
                <span class="letter">M</span>

            </div>
        </div>
        <div class="text-container">
            <span class="text">
                Головна мета ТОВ «КДМ Продукт» полягає в тому,щоб наші споживачі були задоволені смаком нашої продукції,а також могли бути впевнені,що у виробництві снекової продукції ТМ «Dizzi» ми не використовуємо штучних барвників і консервантів.
            </span>
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
    background-image: url("@/assets/fone/about_us_first_bg.jpg");
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
    /*display: block;*/
    font-family: "DM Serif Display";
    text-shadow: 0 0 5px rgb(255 255 255);
    font-weight: 400;
    letter-spacing: 0;
    font-size: 2.4rem;
    line-height: 1.1;
    color: #000000;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100%;
}
.logo-container{
    position: relative;
    width: 350px;
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

.logo .letter:nth-child(1) { top: 10px; left: 0; animation: fadeIn 1s forwards 0.1s; }
.logo .letter:nth-child(2) { top: -5px; left: 70px; animation: fadeIn 1s forwards 0.2s; }
.logo .letter:nth-child(3) { top: -10px; left: 120px; animation: fadeIn 1s forwards 0.3s; }
.logo .letter:nth-child(4) { top: 0px; left: 190px; animation: fadeIn 1s forwards 0.4s; }
.logo .letter:nth-child(5) { top: 10px; left: 250px; animation: fadeIn 1s forwards 0.5s; }
.logo .letter:nth-child(6) {font-size: 40px; top: 70px; left: 110px; animation: fadeIn 1s forwards 0.5s; }
.logo .letter:nth-child(7) {font-size: 40px; top: 70px; left: 145px; animation: fadeIn 1s forwards 0.5s; }

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
