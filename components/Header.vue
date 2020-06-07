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
                    <a :href='"/"+link'><i class="far fa-check-circle"></i> {{ link }}</a>
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
            links: ['about', 'stack', 'contact'],
        }
    }
}
</script>