<template>
    <div class="main-section">
        <div class="main-header">
            https://4tu.github.io/<span class="red">{{ uri }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data() {
        return{
            uri: 'About',
        }
    }
}
</script>