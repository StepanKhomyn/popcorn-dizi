<template>
    <div v-if="show" class="position-fixed top-0 start-50 translate-middle-x">
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ $t('success')}}
            <button @click="dismissAlert" type="button" class="btn-close" aria-label="Close"></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        };
    },
    methods: {
        dismissAlert() {
            this.show = false;
        }
    },
    mounted() {
        setTimeout(() => {
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 3000); // Close after 3 seconds
        }, 100); // Show after 100ms to ensure transition effect
    }
};
</script>
