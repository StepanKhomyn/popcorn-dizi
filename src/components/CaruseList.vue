<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="(slide, index) in slides" :key="index" type="button" :data-bs-target="'#carouselExampleIndicators'" :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-current="true" aria-label="Slide {{ index + 1 }}"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === 0 }">
                <img :src="slide.image" class="d-block w-100" :alt="'Slide ' + (index + 1)">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ slide.title }}</h5>
                    <p>{{ slide.description }}</p>
                </div>
            </div>
        </div>
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
export default {
    name: 'Carousel',
    data() {
        return {
            slides: [
                {
                    image: 'https://via.placeholder.com/800x400',
                    title: 'First slide',
                    description: 'This is the first slide',
                },
                {
                    image: 'https://via.placeholder.com/800x400',
                    title: 'Second slide',
                    description: 'This is the second slide',
                },
                {
                    image: 'https://via.placeholder.com/800x400',
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
