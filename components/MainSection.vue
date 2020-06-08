<template>
    <div class="main-section">
        <div class="main-header">
            https://4tu.github.io/<span class="red">{{ value }}</span>
        </div>
        <div>
            <slot name="subsections"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainSection",
    data() {
        return{
            value: location.pathname.slice(1),
        }
    }
}
</script>