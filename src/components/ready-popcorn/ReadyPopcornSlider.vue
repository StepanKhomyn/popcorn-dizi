<template>
    <div class="w-100 pt-3 pb-3">
        <h2 class="fs-2 text-center pb-2">Готовий попкорн</h2>
        <Carousel :items-to-show="3" :wrap-around="true">
            <Slide v-for="(item, index) in items" :key="index" class="card-carousel-cards">

                <div class="carousel__item">{{ slide }}</div>

                <div class="card-carousel--card">
                    <img :src="item.background"  />
                    <div class="card-carousel--card--footer">
                        <p>{{ item.name }}</p>
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

import 'vue3-carousel/dist/carousel.css'

import first from "./slider-element/super_cheeze_70.png"
import second from "./slider-element/salted_70.png"
import third from "./slider-element/cheeze_70.png"

export default defineComponent({
    name: 'ReadyPopcornSlider',
    data() {
        return {
            items: [
                {
                    name: 'Попкорн у карамелі Dizzi 52,5 г',
                    background: first,
                    tag: ["52,5 г"]
                },
                {
                    name: 'Попкорн у фруктовій карамелі Dizzi 55 г',
                    background: second,
                    tag: ["55 г"]
                },
                {
                    name: 'Попкорн у шоколадній карамелі Dizzi 55 г',
                    background: third,
                    tag: ["55 г"]
                },
                // {
                //     name: 'Попкорн у карамелі ТМ Dizzi 100 г',
                //     background: caramel_fourth,
                //     tag: ["100 г"]
                // }
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
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);
    background-color: #fff;
    border-radius: 4px;
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
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    transition: opacity 150ms linear;
    height: 320px;
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
    border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
    border-style: solid;
    border-width: 8px 12px 12px 0;
}
.card-carousel-cards .card-carousel--card--footer p.tag.secondary {
    margin-left: 0;
    border-left: 1.45px dashed white;
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

h1 {
    font-size: 3.6em;
    font-weight: 100;
    text-align: center;
    margin-bottom: 0;
    color: #42b883;
}
</style>