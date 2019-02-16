<template>
    <div :id="mid" style="width: 500px;height: 400px;padding: 50px 50px"></div>
</template>

<script>
    import ChimeePlayer from 'chimee-player';
    export default {
        name: "chimee",
        data() {
            return {
                mid: 'container'
            }
        },
        mounted() {
            this.play()
        },
        methods: {
            play() {
                const chimee = new ChimeePlayer({
                    wrapper: `#${this.mid}`,
                    src: 'http://cdn.toxicjohann.com/lostStar.mp4',
                    controls: false,
                    autoplay: true
                });
            }
        }
    }
</script>

<style scoped>

</style>
