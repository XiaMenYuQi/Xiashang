<template>
    <div>
      <articleHead :title="title"></articleHead>
      <div class="newsMainBox wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
        <div class="container">
          <!--    	<em>新闻中心</em>-->
          <div class="news-list-box">
            <ul class="news-list-top">
              <li class="col-sm-4 col-xs-12" v-for=" ( item,index ) in data" v-if="index < 3">
                <span>
                  <router-link :to="'/news/' + index" class="news-img"><img :src="item.cover" :alt="item.title"></router-link>
                  <span class="news-date">{{item.date}}</span>
                  <router-link :to="'/news/' + index"><em>{{item.title}}</em></router-link>
                  <p>{{item.dec}}</p>
                  <router-link :to="'/news/' + index" class="news-more">了解更多</router-link>
                </span>
              </li>
              <div class="clearfix"></div>
            </ul>
            <ul class="news-list">
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" v-for=" ( item,index ) in data" style="visibility: visible; animation-name: fadeIn;">
                <span>
                  <router-link :to="'/news/' + index"  class="news-img"><img :src="item.cover" :alt="item.title"></router-link>
                  <span class="news-date">{{item.date}}</span>
                  <router-link :to="'/news/' + index"><em>{{item.title}}</em></router-link>
                  <p>{{item.dec}}</p>
                </span>
              </li>

              <div class="clearfix"></div>
            </ul>
            <div class="clearfix"></div>
          </div>
          <!--<ul class="page_num">-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1">首页</a></li>-->
            <!--<li><p>1</p></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_2" class="pages underline">2</a></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_3" class="pages underline">3</a></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_4" class="pages underline">4</a></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_5" class="pages underline">5</a></li>-->

            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_2" class="pages">&gt;&gt;</a></li>-->

            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_5">末页</a></li>-->
            <!--<span>共<p>5</p>页</span>-->
          <!--</ul>-->
        </div>
        <div class="clearfix"></div>
      </div>

    </div>
</template>

<script>
  import articleHead from '../common/articleHead.vue'
  import { data } from '../../assets/data.js'

	export default {
		name: 'newsList',
    components: {
      articleHead
    },
		data () {
			return {
				title : '新闻中心',
        data : data.news
      }
		},
    created(){
      window.scrollTo(0,0);
//			var pageNo = parseInt(this.$route.params.pageNo);
//      this.title = data.server[id].title;
//      this.content = data.server[id].content
    }
	}
</script>

<style scope>
  .news-img{width: 100%}
</style>
