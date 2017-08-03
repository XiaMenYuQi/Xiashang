<template>
    <div>
      <articleHead :title="title"></articleHead>

      <div class="aboutBox wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
        <div class="container">
          <!--    	<em>多语种整合营销</em>-->
          <div class="clearfix" v-html="content">

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
		name: 'server',
    components: {
      articleHead
    },
		data () {
			return {
				title : '',
        content : ''
      }
		},
    created(){
			var id = parseInt(this.$route.params.id);
      this.title = data.server[id].title;
      this.content = data.server[id].content
    }
	}
</script>
