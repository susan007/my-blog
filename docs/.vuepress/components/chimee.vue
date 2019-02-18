<template>
    <div :id="mid" style="padding: 50px 50px"></div>
</template>

<script>
    export default {
        name: "chimee",
        data() {
            return {
                mid: 'container'
            }
        },
        mounted() {
            // import('chimee-player').then(module => {
            //     let ChimeePlayer = module.default
            //     const chimee =new ChimeePlayer({
            //         wrapper: `#${this.mid}`,
            //         src: 'http://cdn.toxicjohann.com/lostStar.mp4',
            //         controls: false,
            //         autoplay: true
            //     });
            // })
        }
    }
</script>

<style scoped>

</style>
