<template>
    <MainSection>
        <template v-slot:subsections>
            <!-- section: name -->
            <SubSection value="Name">
                <template v-slot:contents>
                    <p>Fortune. (4tu)</p>
                </template>
            </SubSection>

            <!-- section: picture -->
            <SubSection value="Picture">
                <template v-slot:contents>
                    <img src="/image/icon.png" width="200px">
                </template>
            </SubSection>

            <!-- section: description -->
            <SubSection value="Description">
                <template v-slot:contents>
                    <p>社会人1年目でアイドルが好きな人です。最近太ってきました。</p>
                    <ul>
                        <li>年齢: 20才</li>
                        <li>性別: 男</li>
                        <li>居住: 奈良</li>
                    </ul>
                </template>
            </SubSection>

            <!-- section: history -->
            <SubSection value="History">
                <template v-slot:contents>
                    <ul>
                        <li>2016-2020 / 奈良工業高等専門学校本科 情報工学科</li>
                        <li>2020-???? / </li>
                    </ul>
                </template>
            </SubSection>

            <!-- section: account -->
            <SubSection value="Account">
                <template v-slot:contents>
                    <ul>
                        <li><a href="https://twitter.com/yakiniku_now"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="https://github.com/4tu"><i class="fab fa-github"></i> GitHub</a></li>
                    </ul>
                </template>
            </SubSection>
        </template>
    </MainSection>
</template>

<script>
import MainSection from '@/components/MainSection.vue'
import SubSection from '@/components/SubSection.vue'

export default {
    name: 'about',
    components: {
        MainSection,
        SubSection,
    }
}
</script>