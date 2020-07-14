<template>
    <MainSection>
        <template v-slot:subsections>
            <!-- section: serverside -->
            <SubSection value="Language">
                <template v-slot:contents>
                    <!-- section: php -->
                    <SubSubSection value="PHP">
                        <template v-slot:contents>
                            <ul>
                                <li>経験は1年ほど。</li>
                                <li>案件レベルの使用ができる。</li>
                                <li>とても好き。</li>
                            </ul>
                        </template>
                    </SubSubSection>

                    <!-- section: scala -->
                    <SubSubSection value="Scala">
                        <template v-slot:contents>
                            <ul>
                                <li>経験は1年ほど。</li>
                                <li>案件レベルの使用ができる。</li>
                                <li>あまり好きではない。</li>
                            </ul>
                        </template>
                    </SubSubSection>

                    <!-- section: go -->
                    <SubSubSection value="Go">
                        <template v-slot:contents>
                            <ul>
                                <li>現在勉強中。</li>
                                <li>基礎もなんとなくで理解している状態。</li>
                            </ul>
                        </template>
                    </SubSubSection>

                    <!-- section: php -->
                    <SubSubSection value="JavaScript">
                        <template v-slot:contents>
                            <ul>
                                <li>経験は3年ほど。</li>
                                <li>案件レベルの使用ができる。</li>
                            </ul>
                        </template>
                    </SubSubSection>
                </template>
            </SubSection>

            <!-- section: serverside -->
            <SubSection value="WebServer">
                <template v-slot:contents>
                    <!-- section: laravel -->
                    <SubSubSection value="Laravel">
                        <template v-slot:contents>
                            <ul>
                                <li>経験は1年ほど。</li>
                                <li>案件レベルの使用ができる。</li>
                                <li>一番好きで一番できる。作りたいものはだいたいなんでも作れる。</li>
                            </ul>
                        </template>
                    </SubSubSection>

                    <!-- section: node -->
                    <SubSubSection value="Node">
                        <template v-slot:contents>
                            <ul>
                                <li>経験は2年ほど。</li>
                                <li>案件レベルの使用ができる。</li>
                                <li>Express・Meteor</li>
                            </ul>
                        </template>
                    </SubSubSection>
                </template>
            </SubSection>

            <!-- section: frontside -->
            <SubSection value="WebFront">
                <template v-slot:contents>
                    <!-- section: vue -->
                    <SubSubSection value="Vue">
                        <template v-slot:contents>
                            <ul>
                                <li>経験は1年ほど。</li>
                                <li>案件レベルの使用ができる。</li>
                            </ul>
                        </template>
                    </SubSubSection>

                    <!-- section: react -->
                    <SubSubSection value="React">
                        <template v-slot:contents>
                            <ul>
                                <li>経験は半年ほど。</li>
                                <li>案件レベルの使用ができる。</li>
                                <li>個人的にVueより好き。</li>
                            </ul>
                        </template>
                    </SubSubSection>
                </template>
            </SubSection>
        </template>
    </MainSection>
</template>

<script>
import MainSection from '@/components/MainSection.vue'
import SubSection from '@/components/SubSection.vue'
import SubSubSection from '@/components/SubSubSection.vue'

export default {
    name: 'stack',
    components: {
        MainSection,
        SubSection,
        SubSubSection,
    },
    data() {
        return{
            path: 'stack',
        }
    }
}
</script>
