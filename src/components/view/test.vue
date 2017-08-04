<template>
  <div>
    <articleHead :title="title"></articleHead>

    <div class="clearfix">
      <!--目录-->
      <!--主要内容-->
      <div class="couresBox wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
        <div class="container">

          <div id="timeline">
            <div class="timeline-item wow slideInUp animated animated"
                 style="visibility: visible; animation-name: slideInUp;">
              <div class="timeline-icon"></div>
              <div class="timeline-content">
                <p class="MsoNormal" style="line-height:150%;">
                  <b style="line-height:150%;"><span
                    style="font-family:宋体;line-height:150%;font-size:18px;">2017年至今</span></b>
                </p>
                <p class="MsoNormal" style="line-height:150%;"><span
                  style="font-family:宋体;line-height:150%;font-size:18px;">2017年4月，五华区人民政府、Google、夏商三方联合推进，“西南Google AdWords运营总部”正式落地启动。
                        </span>
                </p>
                <br>
              </div>
            </div>
            <div class="timeline-item wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
              <div class="timeline-icon"></div>
              <div class="timeline-content right"><p class="MsoNormal" style="line-height:150%;">
                <b><span style="font-family:宋体;line-height:150%;font-size:18px;">2016年</span></b></p>
                <p class="MsoNormal" style="line-height:150%;"><span
                  style="font-family:宋体;line-height:150%;font-size:18px;">2016年12月，正式落户昆明五华产业区</span>
                </p>
                <br>
                <p class="MsoNormal" style="line-height:150%;"><span
                  style="font-family:宋体;line-height:150%;font-size:18px;">2016年，推出自动优化建站产品，为广大外贸企业解决推广难题。推出多语种优化通服务，在昆明、厦门、福州等地开展线下会议交流培训服务。</span>
                </p>
              </div>
            </div>
            <div class="timeline-item wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
              <div class="timeline-icon"></div>
              <div class="timeline-content">
                <p class="MsoNormal" style="line-height:150%;">
                  <b><span style="font-family:宋体;line-height:150%;font-size:18px;">2015年</span></b>
                </p>
                <p class="MsoNormal" style="line-height:150%;"><span
                  style="font-family:宋体;line-height:150%;font-size:18px;">云南夏商科技推出全能型营销产品外贸通，整合facebook、twitter、youtube等多渠道互动营销，更好地为当地企业提供网络服务。</span>
                </p>
                <br>
              </div>
            </div>
            <div class="timeline-item wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
              <div class="timeline-icon"></div>
              <div class="timeline-content right">
                <p class="MsoNormal" style="line-height:150%;">
                  <b><span style="font-family:宋体;line-height:150%;font-size:18px;">2014年</span></b>
                </p>
                <p class="MsoNormal" style="line-height:150%;"><span
                  style="font-family:宋体;line-height:150%;font-size:18px;">在中国昆明、厦门、福州等地设立分支机构，为中小企业提供B2B网络推广服务。并且自主研发了SEO关键词报价系统，正式推出关键词优化服务，推出自主研发、创建的B2B/B2C平台收集买家大数据。</span>
                </p>
                <br>
               </div>
            </div>
          </div>
          <div class="clearfix"></div>

        </div>
        <div class="clearfix"></div>
      </div>





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
        title: "测试"
      }
    }
  }
</script>
