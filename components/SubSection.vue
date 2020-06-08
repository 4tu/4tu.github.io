<template>
    <div class="sub-section">
        <div class="sub-header">
            <i class="fas fa-angle-right"></i> {{ value }}
        </div>
        <div class="contents">
            <slot name="contents"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubSection",
    props: {
        value: String,
    }
}
</script>