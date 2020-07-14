<template>
    <MainSection>
        <template v-slot:subsections>
            <SubSection value="Social">
                <template v-slot:contents>
                    <ul>
                        <li><a href="https://twitter.com/yakiniku_now"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="https://github.com/4tu"><i class="fab fa-github"></i> GitHub</a></li>
                    </ul>
                </template>
            </SubSection>

            <SubSection value="Form">
                <template v-slot:contents>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeAWHMKhaKu3db1SIOaPXZBVGs5w0zcZ3vrSXJzQnAGvC0fEA/viewform?embedded=true" width="100%" height="850px" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
                </template>
            </SubSection>
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
