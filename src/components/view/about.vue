<template>
  <div>
    <articleHead :title="title"></articleHead>
    <!--目录-->
    <div class="clearfix"  v-html="content">

    </div>

  </div>
</template>
<script>
  import articleHead from '../common/articleHead.vue'
  import { data } from '../../assets/data.js'

  export default {
    name: 'about',
    components: {
      articleHead
    },
    data () {
    return {
      title : '',
      content : ''
    }
  },
  watch :{
    '$route' (to, from) {
      var id = parseInt(this.$route.params.id);
      this.title = data.about[id].title;
      this.content = data.about[id].content;
    }
  },
  created(){
    var id = parseInt(this.$route.params.id);
    this.title = data.about[id].title;
    this.content = data.about[id].content;
  }
  }
</script>
