<template>
  <div>
    <articleHead :title="title"></articleHead>
    <!--目录-->
    <div class="caseBox">
      <div class="container" v-html="content">

      </div>
    </div>
  </div>
</template>
<script>
  import articleHead from '../common/articleHead.vue'
  import { data } from '../../assets/data.js'

  export default {
    name: 'cases',
    components: {
      articleHead
    },
    data () {
    return {
      title : '案例欣赏',
      content : ''
    }
  },
  created(){
    window.scrollTo(0,0);
    var id = parseInt(this.$route.params.id);
    this.content = data.cases[id].content
  }
  }
</script>
