<template>
    <MainSection>
        <template v-slot:subsections>

        </template>
    </MainSection>
</template>

<script>
import MainSection from '@/components/MainSection.vue'
import SubSection from '@/components/SubSection.vue'

export default {
    name: 'contact',
    components: {
        MainSection,
        SubSection,
    },
    data() {
        return{
            path: 'contact',
        }
    }
}
</script>