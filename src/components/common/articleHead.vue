<template>
    <div>
      <div class="cl banner banner_about">
        <div class="container">
          <h3>{{title}}</h3>
        </div>
      </div>
      <div style="background-color:#f4f4f4; line-height:40px; font-size:14px;">
        <div class="container">
          <div>
            <i class="fa fa-home"></i> <a href="/" class="maincolor">首页</a>
            <span class="c_gray en">&gt;</span><span class="c_gray">{{title}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'articleHead',
    props: ['title'],
		data () {
			return {}
		}
	}
</script>

<style scope>
  .cl{padding-top: 140px;}
</style>
