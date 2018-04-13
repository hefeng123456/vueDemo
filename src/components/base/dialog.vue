<template>
  <div>
    <div class="dialog-wrap" v-if="isShow">
      <div class="dialog-cover" ></div>
      <!--<transition name="drop">-->
        <div class="dialog-content" >
          <p class="dialog-close" :is-show="dialog-ishou">x</p>
          <P>
            迪丽热巴（Dilraba），1992年6月3日出生于新疆乌鲁木齐市，中国内地影视女演员。2013年，迪丽热巴因主演个人首部电视剧《阿娜尔罕》而出道。2014年，她主演了奇幻剧《逆光之恋》。2015年，迪丽热巴凭借爱情剧《克拉恋人》赢得高人气，并获得国剧盛典最受欢迎新人女演员奖。2016年，其主演的现代剧《麻辣变形计》播出；同年，她还凭借喜剧片《傲娇与偏见》获得中英电影节最佳新人奖。2017年，迪丽热巴因在玄幻剧《三生三世十里桃花》中饰演青丘白凤九而获得白玉兰奖最佳女配角提名
          </P>
          <slot>empty</slot>
        </div>
      <!--</transition>-->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
