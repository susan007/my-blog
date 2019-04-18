<template>
    <div class="vueContent">
        <!--title bar start-->
        <header class="header">
            <div class="block-left">
                <img src="../public/icons/icon_flower.png">
            </div>
            <form name="search" class="block-right">
                <input v-model="searchValue" name="wd" value="小花纯粹搜索" autocomplete="on">
                <input type="button" value="百度一下"
                       onclick="window.open('https://www.baidu.com/s?wd='+search.wd.value, '')">
                <input type="button" value="谷歌一下"
                       onclick="window.open('https://www.google.com/search?q='+search.wd.value,'')">
            </form>
        </header>
        <!--title bar end-->

        <!--content start-->
        <div style="height: 5rem"></div>
        <div class="content">
            <ul>
                <li v-for="(item, index) in nums" :key="index" @click="handleLi(item)">
                    <button class="jian">{{item}}</button>
                </li>
            </ul>

            <ul>
                <li v-for="(item, index) in words1" :key="index" @click="handleLi(item)">
                    <button class="jian">{{item}}</button>
                </li>
            </ul>

            <ul>
                <li v-for="(item, index) in words2" :key="index" @click="handleLi(item)">
                    <button class="jian">{{item}}</button>
                </li>
            </ul>

            <ul>
                <li v-for="(item, index) in words3" :key="index" @click="handleLi(item)">
                    <button class="jian">{{item}}</button>
                </li>
            </ul>

        </div>
        <!--content end-->

        <!--foot bar start-->
        <footer class="footer">
            <div>
                特别推荐的站点：
                <a href="https://susan007.github.io">白玫瑰</a>
                <a href="https://susan007.github.io">红玫瑰</a>
                <a href="https://susan007.github.io">野蔷薇</a>
            </div>
            <div>
                ♥Enthusiastically Assembled by susan without you
            </div>
        </footer>
        <!--foot bar end-->
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                searchValue: '',
                nums: [
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
                ],
                words1: [
                    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'
                ],
                words2: [
                    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'
                ],
                words3: [
                    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
                ]
            }
        },
        methods: {
            handleLi(item) {
                this.searchValue += item
                console.log(this.searchValue)
            }
        }
    }

</script>

<style scoped>
    .vueContent{
        height: 100%;
        background-image: url("../public/bg_flower.jpg");
    }

    ul {
        list-style: none;
    }

    ul li {
        display: inline;
    }

    .header {
        background-color: black;
        height: 6rem;
    }

    .header img {
        width: 4rem;
        height: 4rem;
        vertical-align: middle;
    }

    .block-left {
        display: inline-block;
        width: 60%;
        text-align: center;
        height: 6rem;
        line-height: 6rem;
    }

    .block-right {
        display: inline-block;
        width: 35%;
        text-align: left;
        height: 100%;
    }

    .block-right input, button {
        background-color: #555;
        border-radius: 0.1rem;
        border: none;
        color: white;
        height: 2rem;
        padding: 0.3rem 0.3rem;
        box-sizing: border-box;
    }

    .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: floralwhite;
        height: 5rem;
        color: #b0b0b0;
        text-align: center;
        font-size: small;
    }

    .footer a {
        text-decoration: none;
        color: #666666;
        font-weight: bold;
    }

    .footer div {
        padding-top: 1rem;
    }

    .content {
        height: 600px;
        text-align: center;
    }

    .jian {
        width: 3rem;
        height: 3rem;
        text-align: center;
        border: 1px solid #b0b0b0;
        background: floralwhite;
        border-radius: 3px;
        color: #666666;
        opacity: 0.7;
        margin: 1rem 1rem;
        box-shadow: 0px 3px 5px #b0b0b0;
    }

    .jian:hover {
        height: 2.6rem;
        background: white;
        border: 1px solid #efefff;
    }
</style>
