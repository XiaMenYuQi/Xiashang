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
          <ul style="overflow: hidden;">
            <li class="active"><router-link to="/">首页</router-link></li>
            <li class="has-sub"><span class="submenu-button"></span><router-link to="/about/0">关于我们</router-link>
              <ul style="overflow: hidden;">
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/about/1">发展历程</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/about/2">荣誉证书</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/about/3">员工风采</router-link>
                </li>
              </ul>
            </li>
            <li class="has-sub">
              <span class="submenu-button"></span>
              <router-link to="/server/0">服务项目</router-link>
              <ul style="overflow: hidden;">
                <li class="has-sub">
                  <span class="submenu-button"></span>
                  <router-link to="/server/0">海外推广</router-link>
                  <ul style="overflow: hidden;">
                    <li><router-link to="/server/0">多语种整合营销</router-link></li>
                    <li><router-link to="/server/1">单语种整合营销</router-link></li>
                    <li><router-link to="/server/2">响应式营销网站</router-link></li>
                    <li><router-link to="/server/3">海外SNS整合营销</router-link></li>
                    <li><router-link to="/server/4">网站全球CDN加速</router-link></li>
                    <!--<li><router-link to="/server6">外贸网站整站优化</a></li>-->
                  </ul>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/5">中文推广</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/6">国际B2B平台</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/7">外贸黄埔军校</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/server/8">网店代运营</router-link>
                </li>
              </ul>
            </li>

            <li class="has-sub "><span class="submenu-button"></span><router-link to="/casesList">案例欣赏</router-link>
            </li>

            <li class="has-sub "><span class="submenu-button"></span><router-link to="/newsList">新闻中心</router-link>
            </li>

            <li class="has-sub"><span class="submenu-button"></span><router-link to="/newsList">联系我们</router-link>
              <ul style="overflow: hidden;">
                <li class="has-sub"><span class="submenu-button"></span><a href="https://www.dyyseo.com/%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC_d20" title="联系我们">联系我们</a>
                  <ul style="overflow: hidden;">
                    <li><a href="https://www.dyyseo.com/%E5%8E%A6%E9%97%A8%E9%94%80%E5%94%AE%E4%B8%AD%E5%BF%83_d51" title="厦门销售中心">厦门销售中心</a></li>
                    <li><a href="https://www.dyyseo.com/%E6%B7%B1%E5%9C%B3%E9%94%80%E5%94%AE%E5%88%86%E5%85%AC%E5%8F%B8_d53" title="深圳销售分公司">深圳销售分公司</a></li>
                    <li><a href="https://www.dyyseo.com/%E5%B8%82%E5%9C%BA%E9%83%A8_d58" title="市场部">市场部</a></li>
                    <li><a href="https://www.dyyseo.com/%E5%B9%BF%E5%B7%9E%E9%94%80%E5%94%AE%E5%88%86%E5%85%AC%E5%8F%B8_d52" title="广州销售分公司">广州销售分公司</a></li>
                    <li><a href="https://www.dyyseo.com/%E5%8C%97%E5%8C%BA%E9%94%80%E5%94%AE%E4%B8%AD%E5%BF%83_d57" title="北区销售中心">北区销售中心</a></li>
                    <li><a href="https://www.dyyseo.com/%E5%90%88%E8%82%A5%E6%8A%80%E6%9C%AF%E6%80%BB%E9%83%A8_d50" title="合肥技术总部">合肥技术总部</a></li>
                  </ul>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><a href="https://www.dyyseo.com/%E5%90%88%E8%82%A5%E6%8A%80%E6%9C%AF%E6%80%BB%E9%83%A8_d16">招贤纳士</a>
                  <ul style="overflow: hidden;">
                    <li><a href="https://www.dyyseo.com/%E5%90%88%E8%82%A5%E6%8A%80%E6%9C%AF%E6%80%BB%E9%83%A8_d16" title="合肥技术总部">合肥技术总部</a></li>
                    <li><a href="https://www.dyyseo.com/%E5%8E%A6%E9%97%A8%E9%94%80%E5%94%AE%E4%B8%AD%E5%BF%83_d17" title="厦门销售中心">厦门销售中心</a></li>
                    <li><a href="https://www.dyyseo.com/%E5%B9%BF%E4%B8%9C%E9%94%80%E5%94%AE%E5%88%86%E5%85%AC%E5%8F%B8_d18" title="广东销售分公司">广东销售分公司</a></li>
                  </ul>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><a href="https://www.dyyseo.com/%E5%8A%A0%E7%9B%9F%E4%BB%A3%E7%90%86_d21" title="加盟代理">加盟代理</a>
                </li>

              </ul>
            </li>

            <li id="nav-google" class="has-sub"><span class="submenu-button"></span><router-link to="/google/0">Google AdWords 体验中心<img src="/static/images/hot.gif" alt=""></router-link>
              <ul style="overflow: hidden;">
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/1">Google AdWords</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/2">Google联盟广告</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/3">Google移动广告</router-link>
                </li>
                <li class="has-sub"><span class="submenu-button"></span><router-link to="/google/4">Google视频广告</router-link>
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
