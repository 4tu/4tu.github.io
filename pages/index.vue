<template>
    <div class="main-section">
        <div class="main-header">
            https://4tu.github.io/<span class="red">{{ uri }}</span>
        </div>
        <div class="sub-section">
            <div class="sub-header">
                <i class="fas fa-angle-right"></i> Abstract
            </div>
            <p>hello</p>
        </div>
        <div class="sub-section">
            <div class="sub-header">
                <i class="fas fa-angle-right"></i> Index
            </div>
            <div class="contents">
                <ul>
                    <li class="item" v-for="link in links" :key="link.index">
                        <a class="text" :href="'/' + link">{{ link }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sub-section">
            <div class="sub-header">
                <i class="fas fa-angle-right"></i> ToDo
            </div>
            <div class="contents">
                <ul>
                    <li class="item" v-for="todo in todos" :key="todo.name">
                        {{ todo }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return{
            uri: '',
            links: ['About', 'Stack', 'Contact'],
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