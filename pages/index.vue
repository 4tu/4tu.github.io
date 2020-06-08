<template>
    <MainSection>
        <template v-slot:subsections>
            <!-- section: abstract -->
            <SubSection value="Abstract">
                <template v-slot:contents>
                    <p>hello</p>
                </template>
            </SubSection>

            <!-- section: index -->
            <SubSection value="Index">
                <template v-slot:contents>
                    <ul>
                        <li class="item" v-for="link in links" :key="link.index">
                            <a class="text" :href="'/' + link">{{ link }}</a>
                        </li>
                    </ul>
                </template>
            </SubSection>

            <!-- section: todo -->
            <SubSection value="Todo">
                <template v-slot:contents>
                    <ul>
                        <li class="item" v-for="todo in todos" :key="todo.name">
                            {{ todo }}
                        </li>
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
    name: 'index',
    components: {
        MainSection,
        SubSection,
    },
    data() {
        return{
            links: ['about', 'stack', 'contact'],
            todos: [
                'セクションをコンポーネントで分ける',
                'ほかの画面を作る',
                'フォント見にくくない？',
                'sassとvueをリファクタリングできる気しかしない'
            ],
        }
    }
}
</script>