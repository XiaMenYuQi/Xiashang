<template>
<div>
  <articleHead :title="title"></articleHead>
  <div class="contactBox wow slideInUp animated">
    <div class="container">
        <div class="resp-tabs-container hor_1">
          <div>
            <div>
              地址：云南省昆明市建设路296号银燕中心11层<br />
              <br />
              电话：13132139813&nbsp;<br />
              <br />
              邮箱：4501897@qq.com                    </div>
          </div>
        </div>
      <div class="clearfix"></div>
    </div>
    <div class="clearfix"></div>
  </div>
</div>
</template>

<script>
  import articleHead from '../common/articleHead.vue'

	export default {
		name: 'contact',
    components: {
      articleHead
    },
		data () {
			return {
				title: '联系我们'
      }
		}
	}
</script>

<style scope>
  .resp-tabs-container{height: 340px;}
</style>
