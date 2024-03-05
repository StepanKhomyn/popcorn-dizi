<template>
    <div class="w-100 pt-3 pb-3" id="corn-snacks">
        <h2 class="fs-2 text-center heading-content">Кукурудзяні палички</h2>
        <Carousel :items-to-show="1" :wrap-around="true">
            <Slide v-for="(item, index) in items" :key="index" class="card-carousel-cards">

                <div class="carousel__item">{{ slide }}</div>

                <div class="card-carousel--card">
                    <img :src="item.background"/>
                    <div class="card-carousel--card--footer">
                        <p class="fs-6">{{ item.name }}</p>
                        <p class="tag" v-for="(tag, index) in item.tag" :key="index" :class="index &gt; 0 ? 'secondary' : ''">{{ tag }}</p>
                    </div>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import first from "./slider-element/corn_girl_boy.png"

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'CornSticksSlider',
    data() {
        return {
            items: [
                {
                    name: 'Кукурудзяні палички солодкі з сюрпризом для хлопчиків ТМ Dizzi',
                    background: first,
                    tag: ["80 г"]
                },
                {
                    name: 'Кукурудзяні палички солодкі з сюрпризом для дівчаток ТМ Dizzi',
                    background: first,
                    tag: ["80 г"]
                },
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
})
</script>
<style scoped>


.card-carousel-cards .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    background-color: #fff;
    z-index: 3;
    margin-bottom: 2px;
    width: 100%
}
.card-carousel-cards .card-carousel--card:first-child {
    margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
    margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
    vertical-align: bottom;
    transition: opacity 150ms linear;
    height: 12rem;
    user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
    opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
    border-top: 0;
    padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
    padding: 3px 0;
    margin: 0;
    margin-bottom: 2px;
    font-size: 19px;
    font-weight: 500;
    color: #2c3e50;
    user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p.tag {
    font-size: 11px;
    font-weight: 300;
    padding: 4px;
    background: rgba(40, 44, 53, 0.06);
    display: inline-block;
    position: relative;
    margin-left: 4px;
    color: #666a73;
}
.card-carousel-cards .card-carousel--card--footer p.tag:before {
    content: "";
    float: left;
    position: absolute;
    top: 0;
    left: -12px;
    width: 0;
    height: 0;
}
.card-carousel-cards .card-carousel--card--footer p.tag.secondary {
    margin-left: 0;
}
.card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
    display: none !important;
}
.card-carousel-cards .card-carousel--card--footer p.tag:after {
    content: "";
    position: absolute;
    top: 8px;
    left: -3px;
    float: left;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: white;
    box-shadow: 0px 0px 0px #004977;
}
</style>