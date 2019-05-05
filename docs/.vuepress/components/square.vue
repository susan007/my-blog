<template>
    <ul class="content" ref="content">
        <li v-for="(square, index) in squares" :key="index">{{square}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'square',
        data: {
            squares: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        },
        mounted() {
            this.createDivs()
            this.addEvent()
        },
        methods: {
            /**
             * 生成小块
             */
            createDivs() {
                for (let i = 0; i < 16; i++) {
                    var mdiv = document.createElement('div')
                    mdiv.style.backgroundColor = `rgb(${this.createRandom(255)}, ${this.createRandom(255)}, ${this.createRandom(255)})`
                    this.$refs['content'].appendChild(mdiv)
                }
            },
            /**
             * 生成随机数
             **/
            createRandom(num) {
                return Math.floor(Math.random() * num)
            },
            /**
             * 随机生成颜色
             * @return {string}
             */
            createBg() {
                return `rgb(${this.createRandom(255)}, ${this.createRandom(255)}, ${this.createRandom(255)})`
            },
            addEvent() {
                const self = this
                const divs = document.getElementsByTagName('div')
                const len = divs.length
                for (let i = 0; i < len; i++) {
                    divs[i].onclick = function(e) {
                        e.target.style.backgroundColor = `rgb(${self.createRandom(255)}, ${self.createRandom(255)}, ${self.createRandom(255)})`
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .content{
        width: 100%;
        height: 100%;
        background: red;
        overflow-y: hidden;
    }
    div{
        width: 25%;
        height: 100px;
        float: left;
        background: black;
    }

</style>
