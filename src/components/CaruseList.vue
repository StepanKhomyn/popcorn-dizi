<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <!-- Carousel Indicators -->
        <div class="carousel-indicators">
            <button v-for="(slide, index) in slides" :key="index" type="button" :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-current="true" :aria-label="'Slide ' + (index + 1)"></button>
        </div>

        <!-- Carousel Inner -->
        <div class="carousel-inner">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                <!-- Adjusted image size -->
                <component :is="slide.component"/>

                <!-- Carousel Caption -->
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ slide.title }}</h5>
                    <p>{{ slide.description }}</p>
                </div>
            </div>
        </div>

        <!-- Carousel Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
import PopcornSlide from "@/components/PopcornSlide.vue";

export default {
    name: 'CaruseList',
    data() {
        return {
            slides: [
                {
                    image: 'https://via.placeholder.com/800x400',
                    component: PopcornSlide,
                    title: 'First slide',
                    description: 'This is the first slide',
                },
                {
                    image: 'https://via.placeholder.com/800x400',
                    component: PopcornSlide,
                    title: 'Second slide',
                    description: 'This is the second slide',
                },
                {
                    image: 'https://via.placeholder.com/800x400',
                    component: PopcornSlide,
                    title: 'Third slide',
                    description: 'This is the third slide',
                },
            ]
        };
    }
};
</script>

<style scoped>
/* Add any custom styles for your carousel */
</style>
