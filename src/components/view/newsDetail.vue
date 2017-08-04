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
          <div class="news-text" >


          </div>

          <div class="page-turn wow fadeIn animated" style=" animation-name: none;">
            <ul class="paget-left">
              <li><p>下一个 :</p><a href="/">天津电子商务协会来第一页交流学习</a></li>
            </ul>
            <div class="paget-right">
              <a href="/"><img src="/static/images/b-next.png" alt="天津电子商务协会来第一页交流学习"></a>
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
        date : ''
      }
		},
    created(){
			var id = parseInt(this.$route.params.id);
      this.title = data.news[id].title;
      this.content = data.news[id].content;
      this.date = data.news[id].date;
    }
	}
</script>
