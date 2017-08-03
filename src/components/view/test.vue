<template>
    <div>
      <articleHead :title="title"></articleHead>
      <div class="aboutBox wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
        <div class="container">
          <!--    	<em>Google AdWords</em>-->
          <div class="clearfix"></div>
          <!--        <ul class="about_nav wow slideInUp animated">
                                                              <li class="col-sm-4 col-xs-12">
                  <a href="/荣誉证书_d55" title="荣誉证书">
                  <span><img src="/uploadfile/single/dc84beef3d4daa10a8edd8942d66ab5c.jpg" alt="荣誉证书" /><p></p></span>
                  <em>荣誉证书</em></a>
              </li>
                                      <li class="col-sm-4 col-xs-12">
                  <a href="/员工风采_d56" title="员工风采">
                  <span><img src="/uploadfile/single/d84d78060f4695bd37b230c1cc632ae0.jpg" alt="员工风采" /><p></p></span>
                  <em>员工风采</em></a>
              </li>
                                      <div class="clearfix"></div>
          </ul>-->
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
</template>

<script>
  import articleHead from '../common/articleHead.vue'

	export default {
		name: 'server3',
    components: {
      articleHead
    },
		data () {
			return {
				title : "网店代运营"
      }
		}
	}
</script>
