<template>
    <div>
      <articleHead :title="title"></articleHead>

      <div class="newsMainBox wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
        <div class="container">
          <div class="news-main">
            <em>{{title}}</em>
            <span class="news-top"><p>日期：</p>{{date}}</span>
          </div>
          <!--v-html="content"-->
          <div class="news-text" v-html="content">


          </div>

          <div class="page-turn wow fadeIn animated" style=" animation-name: none;">
            <ul class="paget-left">
              <li v-if="flag"><p>下一个 :</p><a :href="'/news/'+ nextId">{{nextTitle}}</a></li>
              <li v-else><p>到底了</p></li>
            </ul>
            <div class="paget-right">
              <a v-if="flag" :href="'/news/'+ nextId"><img src="/static/images/b-next.png" :alt="nextTitle"></a>
              <a v-else href="#"><img src="/static/images/b-next.png"></a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
</template>

<script>
  import articleHead from '../common/articleHead.vue'
  import { data } from '../../assets/data.js'

	export default {
		name: 'newsDetail',
    components: {
      articleHead
    },
		data () {
			return {
				title : '',
        content : '',
        date : '',
        nextTitle : '',
        nextId : '',
        flag : true
      }
		},
    created(){
      window.scrollTo(0,0);
			var id = parseInt(this.$route.params.id);
      if(id >= data.news.length) return;
      this.title = data.news[id].title;
      this.content = data.news[id].content;
      this.date = data.news[id].date;
      if(id+2 >= data.news.length) {
        this.flag = false;
      }else{
        this.nextTitle = data.news[id+1].title;
        this.nextId = id + 1;
      }

    }
	}
</script>
