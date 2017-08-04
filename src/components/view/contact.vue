<template>
<div>
  <articleHead :title="title"></articleHead>
  <div class="contactBox wow slideInUp animated">
    <div class="container">
        <div class="resp-tabs-container hor_1">
          <div>
            <div>
              <p style="font-weight:bold;color:#ff002b;margin-bottom:15px;">厦门销售中心</p>
              地址：厦门市湖里区护安路73-75号湖里高新技术园西区梅花大厦一楼Google AdWords体验中心<br />
              <br />
              电话：0592-5553237&nbsp;<br />
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
  .resp-tabs-container{height: 310px;}
</style>
