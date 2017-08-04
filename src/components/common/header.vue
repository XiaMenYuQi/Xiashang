<template>
  <header class="large">
    <div class="container">
      <nav>
        <a href="/" id="logo"><img src="/static/images/index/24cca6e93a356e99c1638d0751af6622.png" alt="第一页网络科技有限公司"></a>
        <ul class="head_right">
          <li><img src="/static/images/head-phone.jpg" alt=""><p>400-666-7710</p><p>400-661-8788</p></li>
          <li><img src="/static/images/head-qq.jpg" alt=""><p>800018510</p></li>
        </ul>
        <div id="cssmenu"><div id="menu-line" style="width: 36px; left: 0px;"></div><div id="menu-button">Menu</div>
          <ul class="c-hidden">
            <li class="active"><router-link to="/">首页</router-link></li>
            <li class="has-sub"><span class="submenu-button"></span><router-link to="/about/0" title="关于我们">关于我们</router-link>
              <ul class="c-hidden">
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/about/1" title="发展历程">发展历程</router-link>
                </li>
              </ul>
            </li>
            <li class="has-sub">
              <span class="submenu-button"></span>
              <router-link to="/server/0" title="服务项目">服务项目</router-link>
              <ul class="c-hidden">
                <li class="has-sub">
                  <span class="submenu-button"></span>
                  <router-link to="/server/0" title="海外推广">海外推广</router-link>
                  <ul class="c-hidden">
                    <li><router-link to="/server/0" title="多语种整合营销">多语种整合营销</router-link></li>
                    <li><router-link to="/server/1" title="单语种整合营销">单语种整合营销</router-link></li>
                    <li><router-link to="/server/2" title="响应式营销网站">响应式营销网站</router-link></li>
                    <li><router-link to="/server/3" title="海外SNS整合营销">海外SNS整合营销</router-link></li>
                    <li><router-link to="/server/4" title="网站全球CDN加速">网站全球CDN加速</router-link></li>
                    <!--<li><router-link to="/server6">外贸网站整站优化</a></li>-->
                  </ul>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/5" title="中文推广">中文推广</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/6" title="国际B2B平台">国际B2B平台</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/7" title="外贸黄埔军校">外贸黄埔军校</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/8" title="网店代运营">网店代运营</router-link>
                </li>
              </ul>
            </li>

            <li class="has-sub "><span class="submenu-button"></span><router-link to="/casesList">案例欣赏</router-link>
            <li class="has-sub "><span class="submenu-button"></span><router-link to="/cases/0" title="案例欣赏">案例欣赏</router-link>
            </li>

            <li class="has-sub "><span class="submenu-button"></span><router-link to="/newsList" title="新闻中心">新闻中心</router-link>
            </li>

            <li class="has-sub"><span class="submenu-button"></span><router-link to="/contact" title="联系我们">联系我们</router-link>
            </li>

            <li id="nav-google" class="has-sub"><span class="submenu-button"></span><router-link to="/google/0" title="Google AdWords 体验中心">Google AdWords 体验中心<img src="/static/images/hot.gif" alt=""></router-link>
              <ul class="c-hidden">
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/1" title="Google AdWords">Google AdWords</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/2" title="Google联盟广告">Google联盟广告</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/3" title="Google移动广告">Google移动广告</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/4" title="Google视频广告">Google视频广告</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  import $ from 'jquery'

	export default {
		name: 'head-component',
		data () {
			return {}
		},
    updated(){
      $(document).on("scroll",function(){
        if($(document).scrollTop()>100){
          $("header").removeClass("large").addClass("small");
          $(".head_right").fadeOut(200);
        }
        else{
          $("header").removeClass("small").addClass("large");
          $(".head_right").fadeIn(200);
        }
      });
    }
	}
</script>
