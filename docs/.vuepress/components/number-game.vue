<template>
    <div class="content">
        <!--&lt;!&ndash;tip start&ndash;&gt;-->
        <!--<el-alert-->
                <!--:title="msgTitle"-->
                <!--:type="msgType"-->
                <!--show-icon-->
                <!--class="tip">-->
        <!--</el-alert>-->
        <!--&lt;!&ndash;tip end&ndash;&gt;-->

        <!--&lt;!&ndash;form start&ndash;&gt;-->
        <!--<el-form :model="ruleForm" :rules="rules" ref="ruleForm" style="margin-right: 25%;margin-left: 25%;width: 50%">-->
            <!--<el-form-item prop="answer" required>-->
                <!--<el-input size="small" placeholder="请输入1~99之间数字" v-model="ruleForm.answer" clearable></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item>-->
                <!--<el-button type="primary" @click="submitForm('ruleForm')">提交猜想</el-button>-->
            <!--</el-form-item>-->
        <!--</el-form>-->
        <!--&lt;!&ndash;form end&ndash;&gt;-->
    </div>
</template>

<script>
    export default {
        name: 'number-game',
        data() {
            return {
                // ruleForm: {
                //     answer: ''
                // },
                // rules: {
                //     answer: { required: true, min: 1, max: 2, message: '输入1~99之间的数字', trigger: 'blur' }
                // },
                // question: null,
                // msgTitle: '输入猜想，点击提交开始游戏！',
                // msgType: 'warning'
            }
        },
        mounted() {
            // this.handleNumber()
        },
        methods: {
            handleNumber() {
                // 随机生成1~99的数字并取整
                this.question = Math.floor(Math.random() * 100)
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const answer = parseInt(this.ruleForm.answer)
                        if (answer > this.question) {
                            this.msgTitle = `你的答案是${answer}，猜大了！`
                            this.msgType = 'error'
                        } else if (answer < this.question) {
                            this.msgTitle = `你的答案是${answer}，猜小了！`
                            this.msgType = 'error'
                        } else if (answer === this.question) {
                            this.msgTitle = '你猜对了！再来一局吧'
                            this.msgType = 'success'
                            this.handleNumber()
                        } else {
                            this.msgTitle = '你猜的是什么玩意？'
                            this.msgType = 'error'
                        }
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .content{
        width: 100%;
        height: 100%;
        text-align: center;
        background-image: url("../public/bg_sweet.png");
    }

    .tip{
        padding: 20px 30px;
        margin-bottom: 50px;
        width: 50%;
        margin-left: 25%;
        margin-right: 50%;
    }
</style>
