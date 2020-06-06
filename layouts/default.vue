<template>
  <div class="app-area">
    <Header />
    <section class="section main-content">
      <nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
}
</script>