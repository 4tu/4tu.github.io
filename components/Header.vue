<template>
    <div class="header-area">
        <div class="logo-area">
            <a class="title" href="/">
                <span class="red">T</span>heory of Fortune.
            </a>
        </div>
        <nav class="nav-area">
            <div id="navbutton">
                <div class="button" v-for="link in links" :key="link.index">
                    <a class="text" :href="path + link"><i class="far fa-check-circle"></i> {{ link }}</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return{
            path: '',
            links: ['About', 'Stack', 'Contact'],
        }
    },
    created() {
        this.path = location.protocol + '//' + location.hostname + ':' + location.port + '/'
    }
}
</script>