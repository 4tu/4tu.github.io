<template>
    <div class="header-area">
        <div class="logo-area">
            <a class="title" href="/">
                <span class="red">T</span>heory of Fortune.
            </a>
        </div>
        <nav class="nav-area">
            <div id="navbutton">
                <div class="button" v-for="link in links" :key="link.name">
                    <a class="text" href="/">{{ link }}</a>
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
            links: ['About', 'Stack', 'Contact'],
        }
    }
}
</script>