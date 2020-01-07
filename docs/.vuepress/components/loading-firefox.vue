<template>
    <div class="lds-circle">
        <div></div>
    </div>
</template>

<script>
export default {
    name: 'loading-firefox'
}
</script>

<style scoped>
.lds-circle>div {
      position: fixed;
      top: 50%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      display: block;
      margin: 0 auto;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #1b1919;
      animation: lds-circle 2.4s cubic-bezier(0,.2,.8,1) infinite;
    }

    @keyframes lds-circle {
        0%, 100% {
          animation-timing-function: cubic-bezier(.5,0,1,.5);
        }
        0% {
          transform: rotateY(0deg);
        }
        50% {
          transform: rotateY(1800deg);
          animation-timing-function: cubic-bezier(0,.5,.5,1);
        }
        100% {
          transform: rotateY(3600deg);
        }
    }
</style>