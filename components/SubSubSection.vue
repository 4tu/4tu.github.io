<template>
    <div class="sub-sub-section">
        <div class="sub-sub-header">
            <i class="fas fa-long-arrow-alt-right"></i> {{ value }}
        </div>
        <div class="contents">
            <slot name="contents"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubSubSection",
    props: {
        value: String,
    }
}
</script>
