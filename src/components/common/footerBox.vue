<template>
    <div class="foot-pos">
      <div class="footerBox wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;">
        <ul class="fot-line">
          <li class="fline-01"></li>
          <li class="fline-02"></li>
          <li class="fline-03"></li>
          <li class="fline-04"></li>
        </ul>
        <div class="container">
          <div id="right_column" class="fot-nav clearfix">
            <section class="block products_block column_box">
              <span class="fot_title"><em>关于我们</em><i class="column_icon_toggle icon-plus-sign"></i></span>
              <div class="block_content toggle_content c-hidden" >
                <ul>
                  <li><router-link to="/about/1" title="发展历程">发展历程</router-link></li>
                </ul>
              </div>
            </section>
          </div>
          <div class="fot-nav02 clearfix">
            <section class="block products_block column_box">
              <span class="fot_title"><em>服务项目</em><i class="column_icon_toggle icon-plus-sign"></i></span>
              <div class="block_content toggle_content c-hidden">
                <ul>
                  <li><router-link to="/server/0" title="海外推广">海外推广</router-link></li>
                  <li><router-link to="/server/5" title="中文推广">中文推广</router-link></li>
                  <li><router-link to="/server/6" title="国际B2B平台">国际B2B平台</router-link></li>
                  <li><router-link to="/server/7" title="外贸黄埔军校">外贸黄埔军校</router-link></li>
                  <li><router-link to="/server/8" title="网店代运营">网店代运营</router-link></li>
                </ul>
              </div>
            </section>
          </div>
          <div class="fot-con clearfix">
            <section class="block products_block column_box">
              <span class="fot_title"><em>联系我们</em><i class="column_icon_toggle icon-plus-sign"></i></span>
              <div class="block_content toggle_content c-hidden">
                <ul>
                  <li class="col-sm-4 col-xs-6">
                    <div> 地址：云南省昆明市建设路296号银燕中心11层<br />
                      <br />
                      电话：13132139813&nbsp;<br />
                      <br />
                      邮箱：4501897@qq.com</div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div class="fot-share clearfix">
            <!--<span><img src="/static/images/wechat.jpg" width="100" height="100"><p>关注官方微信</p></span>-->
            <span class="main-paypal"><a href="https://www.paypal.com/" target="_blank"><img src="/static/images/paypal_0.png" alt=""></a><p>点击上方注册PayPal账号</p></span>
          </div>
          <div class="clearfix"></div>
        </div>

      </div>


      <div class="fot-bot">
        <p>云南夏商科技有限公司 © 2015-2017</p>
        <!--<li>您是今天的第509位访问者  一共有405662位访问者</li>-->
      </div>
    </div>
</template>

<script>
	export default {
		name: 'footBox',
		data () {
			return {}
		}
	}
</script>

<style>
  .foot-pos{position: relative;bottom: 0}
</style>
