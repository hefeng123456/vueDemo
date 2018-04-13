<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>

      <template v-for="pers in productList">
          <h3>{{pers.title}}</h3>
          <ul>
            <li v-for="item in pers.list ">
              <a :href="item.url">{{item.name}}</a>
              <span  v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="pers.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="newitem in newsList">
            <a :href="newitem.url" class="new-item">{{ newitem.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="" style="border: 1px solid red ;height: 330px;width: 100%">
        <slideShow :slides="slides"> </slideShow>
      </div>
      <!--<slide-show :slides="slides" :inv="invTime"></slide-show>-->
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item, index) in boardList"
          :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
          <div class="index-board-item-inner" >
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">
              <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import slideShow from '../components/slideShow'
export default{
  components:{
    slideShow
  },
  created:function (){
    this.$http.post('api/getNewsList').then( (res)=> {
  this.newsList=res.data
//      console.log(res.data)
    }) ,  (err)=> {
//      console.log(err)
      console.log("錯誤提示")
    }
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      productList: {
        pc: {
              title: 'PC产品',
                list: [
                {
                  name: '数据统计',
                  url: 'http://starcraft.com'
                },
                {
                  name: '数据预测',
                  url: 'http://warcraft.com'
                },
                {
                  name: '流量分析',
                  url: 'http://overwatch.com',
                  hot: true
                },
                {
                  name: '广告发布',
                  url: 'http://hearstone.com'
                }
              ]
            },
        app: {
          title: '手机应用类',
          last: true,
          list: [
            {
              name: '91助手',
              url: 'http://weixin.com'
            },
            {
              name: '产品助手',
              url: 'http://twitter.com',
              hot: true
            },
            {
              name: '智能地图',
              url: 'http://maps.com'
            },
            {
              name: '团队语音',
              url: 'http://phone.com'
            }]
        }},
      newsList: [],
      boardList:[
        {
          title:'开放产品',
          descriptiom:'开放产品开放产品',
          id:'car',
          saleout:false
        },
        {
          title:'品牌营销',
          descriptiom:'品牌营销品牌营销',
          id:'loud',
          saleout:false
        },
        {
          title:'使命传达',
          descriptiom:'使命传达使命传达',
          id:'earth',
          saleout:true
        },
        {
          title:'用拍高峰',
          descriptiom:'用拍高峰用拍高峰',
          id:'hill',
          saleout:true
        }
      ]
    }
  }

}
</script>
<style scoped>
  .index-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  s{
    color: red;;font-size: 16px;
  }
  .index-left {
    float: left;
    width: 300px;
    text-align: left;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block .hr {
    margin-bottom: 20px;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 5px;
  }
  .index-board-list {
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last {
    margin-right: 0;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .lastest-news {
    min-height: 512px;
  }
  .hot-tag {
    background: red;
    color: #fff;
  }
  .new-item {
    display: inline-block;
    width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
