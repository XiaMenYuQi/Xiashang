<template>
  <div>
    <articleHead :title="title"></articleHead>
    <div class="caseBox">
      <div class="container">
        <ul class="case-list">
          <li class="col-sm-3 wow fadeIn animated animated" v-for="( item,index ) in d" style="visibility: visible; animation-name: fadeIn;"><span>
            	<router-link :to="'/cases/' + index" class="case-img"><img :src="item.cover" :alt="item.title"/></router-link>
                <router-link :to="'/cases/' + index"><em>{{item.title}}</em></router-link>
                <p>{{item.dec}}</p>
<!--                <ul class="case-tag">
                	<p>关键词：</p>
                	<li><a href="#">高级多语言优化</a></li>
                    <li><a href="#">谷歌Adwords排名</a></li>
                	<li><a href="#">高级多语言优化</a></li>
                </ul>-->
                </span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  import articleHead from '../common/articleHead.vue'
  import { data } from '../../assets/data.js'
  export default {
    name: 'casesList',
    components: {
      articleHead

    },
    data () {
    return {
      title : "案例欣赏",
      d : ''
    }
  },
  created(){
    this.d = data.cases
  }
  }
</script>
