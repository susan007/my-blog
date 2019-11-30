<template>
    <div class="box">
        <h2>Object.keys()引发的命案</h2>
        <p>接到一个需求，页面的数据形如key-value这种形式，以一定顺序去显示，比如下面示例。</p>
        <ul>
            <li>
                <label>品牌：</label> Apple
            </li>
            <li>
                <label>型号：</label> 5SE
            </li>
            <li>
                <label>内存：</label> 16G
            </li>
        </ul>

        <p>后台给的数据:</p>
        <pre>
            data = {
                100: 'Apple',
                101: '5SE',
                102: '16G'
            }
        </pre>

        <p>对应的标签数据：</p>
        <pre>
            data = {
                100: 'Apple',
                101: '5SE',
                102: '16G'
            }
        </pre>


    </div>
</template>

<script>
    export default {
        name: 'keys'
    }
</script>

<style scoped>
    .box {
        text-align: center;
    }

</style>
