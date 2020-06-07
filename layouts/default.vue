<template>
    <div class="app-area">
        <Header />
        <div class="container">
            <nuxt />
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

export default {
    components: {
        Header,
        Footer,
    },
}
</script>