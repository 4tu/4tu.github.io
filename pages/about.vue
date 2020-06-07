<template>
    <div class="main-section">
        <div class="main-header">
            https://4tu.github.io/<span class="red">{{ path }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return{
            path: 'about',
        }
    }
}
</script>