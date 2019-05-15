<template>
    <div style="text-align: center">
        <h3>输入一个1~10的数字，体验filter属性</h3>
        <input type="text" placeholder="文字个数上限" v-model="num"/>
        <ul>
            <li v-for="(info, index) in infos" :key="index">{{ info | filterInfo(num) }}</li>
        </ul>

        <h3 @click="showPhoto">点击我，体验优雅的切换写法</h3>
        <img v-show="isShow" src="../public/imgs_vue/filter/mai.png"/>
    </div>
</template>

<script>
    export default {
        name: 'filter',
        data() {
            return {
                isShow: false,
                num: 0,
                infos: [
                    '曲曲折折的荷塘上面',
                    '微风过处送来缕缕清香',
                    '霎时传过荷塘的那边去',
                    '叶子出水很高'
                ]
            }
        },
        filters: {
            filterInfo(info, num) {
                const numInt = parseInt(num)
                return info.length > numInt ? info.slice(0, numInt) : info
            }
        },
        methods: {
            /**
             * 优雅切换
             * @return {boolean}
             */
            showPhoto() {
                this.isShow = !this.isShow
            }
        }
    }
</script>

<style scoped>
    ul, input, h3{
        cursor: pointer;
    }

    input {
        padding: 0.5rem 0.5rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 1px solid limegreen;
    }

    ul {
        list-style: none;
    }

</style>
