<template>
    <div class="page">
        <section class="page-edit">
            <!--占位标签-->
            <div style="border-top: 1px solid #eaecef;height: 1rem"></div>
            <div >
                <!-- id 将作为查询条件 -->
                <span class="leancloud-visitors"
                      data-flag-title="Your Article Title">
                <span class="post-meta-item-text">阅读量： </span>
                <span class="leancloud-visitors-count"></span>
            </span>
            </div>
            <div id="vcomments" style="margin-top: 1rem"></div>
        </section>
    </div>
</template>

<script>
    const APP_ID = 'uO4iepX1XldGM6sOXypwg6ay-gzGzoHsz'
    const APP_KEY = 'qh5lJGVodwr6grB6YzzTInUe'
    export default {
        name: 'Valine',
        mounted: function () {
            // require window
            const Valine = require('valine');
            if (typeof window !== 'undefined') {
                this.window = window
                window.AV = require('leancloud-storage')
            }
            this.valine = new Valine()
            this.initValine()
        },
        watch: {
            $route (to, from) {
                if (from.path != to.path) {
                    this.initValine()
                }
            }
        },
        methods: {
            initValine () {
                let path = location.origin + location.pathname
                // vuepress打包后变成的HTML不知为什么吞掉此处的绑定`:id="countId"`
                document.getElementsByClassName('leancloud-visitors')[0].id = path
                this.valine.init({
                    el: '#vcomments',
                    appId: APP_ID,// your appId
                    appKey: APP_KEY, // your appKey
                    notify: true, // 邮件提醒
                    verify: false,
                    path: path,
                    visitor: true,
                    avatar: 'mm',
                    placeholder: '说出你的想法叭(*^▽^*)'
                });
            }
        }
    }
</script>


