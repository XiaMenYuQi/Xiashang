<template>
    <div>
      <articleHead :title="title"></articleHead>
      <div class="newsMainBox wow slideInUp animated animated" style="visibility: visible; animation-name: slideInUp;">
        <div class="container">
          <!--    	<em>新闻中心</em>-->
          <div class="news-list-box">
            <ul class="news-list-top">
              <li class="col-sm-4 col-xs-12" v-for=" ( item,index ) in data" v-if="index < 3">
                <span>
                  <router-link :to="'/news/' + index" class="news-img"><img :src="item.cover" :alt="item.title"></router-link>
                  <span class="news-date">{{item.date}}</span>
                  <router-link :to="'/news/' + index"><em>{{item.title}}</em></router-link>
                  <p>{{item.dec}}</p>
                  <router-link :to="'/news/' + index" class="news-more">了解更多</router-link>
                </span>
              </li>
              <div class="clearfix"></div>
            </ul>
            <ul class="news-list">
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/google%20adwords%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83%E5%BC%80%E6%94%BE%E6%97%A5%EF%BC%8C%E4%B8%83%E6%9C%88%E9%9B%86%E9%94%A6_n205" class="news-img"><img src="/static/images/news/278f2afa868d63f10fecffb3bae47d7c.png" alt="Google AdWords体验中心开放日，七月集锦"></a>
                    <span class="news-date">17-07-31</span>
                    <a href="https://www.dyyseo.com/google%20adwords%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83%E5%BC%80%E6%94%BE%E6%97%A5%EF%BC%8C%E4%B8%83%E6%9C%88%E9%9B%86%E9%94%A6_n205"><em>Google AdWords体验中心开放日，七月集锦</em></a>
                    <p>七月的Google AdWords体验中心一如既往，每周五下午两点半，为大家准备了别开生面的外贸大讲堂，有空调、冰饮带来清凉，也有Google知识壮你前程。 &nbsp;七月Google AdWords体验中心一共进行了四场外贸讲座，内容从关键词到广告到广告类型到官网，面面俱到。 杨扬 &nbsp;《如何提高企业官网在Google上的战斗力》 曾辉 &nbsp;《数字化营销之-通过Google看外贸新世界》 赖扬平 &nbsp;《“对”的关键词让你事半功倍》 郑伟鸿 &nbsp;《获得一年的收益为广告费用75倍的Google AdWords广告类型》 &nbsp; &nbsp; 作为Google的核心代理，第一页网络科技精通Google AdWords营销的全过程，授人以鱼不如授人以渔是我们一直秉持的理念。七月Google AdWords体验中心开放日外贸大讲堂完美收官，八月每周五下午两点半Google AdWords体验中心Google开放日恭候光临。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E5%A4%A9%E6%B4%A5%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E5%8D%8F%E4%BC%9A%E6%9D%A5%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0_n204" class="news-img"><img src="/static/images/news/41591a12f04ed8050ce789e737c4b550.jpg" alt="天津电子商务协会来第一页交流学习"></a>
                    <span class="news-date">17-07-04</span>
                    <a href="https://www.dyyseo.com/%E5%A4%A9%E6%B4%A5%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E5%8D%8F%E4%BC%9A%E6%9D%A5%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0_n204"><em>天津电子商务协会来第一页交流学习</em></a>
                    <p>2017年7月3日，天津电子商务协会部长阎祺松带领的游学团一行54人来到第一页交流学习。第一页两位营销总监和外贸营销达人一起为客人们带来了内容丰富的主题分享，让游学团不负此行。 阎祺松部长带领的游学团由天津市各高校电子商务专业的老师组成，有着深厚的理论功底，借此暑假各位老师们想要汲取更多的实操经验，听到外贸一线人员们的亲身感受，更好的应用到教学之中。 &nbsp; 开篇是由第一页营销总监曾辉带来的《数字化营销中流量扮演的角色》，曾总监是华南地区外贸电子商务资深讲师，2004年入行，有着13年互联网推广经验，是SEO、SEM、SNS数字化营销的集大成者。曾总监强调了流量对于外贸行业的重要作用，分析了外贸企业如何享有网络流量，站在买家角度思考买家如何选择供应商，如何提升买家的信任度和如何提升询盘转化。曾总监的分享深入浅出，妙语连连让来客听得津津有味。 另一位第一页总监杨扬为大家带来的是《如何提高企业官网在Google上的战斗力》。杨扬着重讲解了Google规则，作为互联网营销7年的从业者，杨总监对于Google规则已经了然于心，又能够以女性特有的细致去体察客户细微的心理。 第一页特邀嘉宾黄勐先生为大家带来了《2017年漳州跨境电商人才漫谈》，黄勐先生现任漳州芒果帮CEO，漳州芒果帮是由一群专注实业发展，致力于在本行业不断创新的漳州本地外贸企业自发组成的商业协会。黄勐先生一直对接外贸一线，深知外贸企业的用人情况，向各位老师分析了现在企业的人才需求情况，让各位老师明白当前市场的状况，更好地培养市场紧缺的人才。 第一页总经理孙荣耀先生详尽地主之谊，向大家介绍了第一页以及Google AdWords体验中心，介绍了整个公司的设计理念和功能分区，还亲自带领各位参观了公司。整个公司的设计风格简单干练，同时茶水间的设计保留了闽南特色，功夫茶吸引了远道而来的客人们的注意力；休闲区干净敞亮，办公区的员工们工作认真，传递出公司的工作氛围是轻松与严肃相济的，这也是现代化企业该有的。 一天的行程安排满满的都是干货，高校老师教书育人、培育英才，是外贸人才产生的第一线，而第一页长期接触外贸企业，深入研究外贸推广的规律，而人才在成长的过程中必须深入实践之中，第一页就是想将13年的外贸推广经验传授给未来的外贸人，让他们能够少走弯路，能够更好更快地投入到外贸行业之中。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/google%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83%E5%BC%80%E6%94%BE%E6%97%A5%E6%AC%A2%E8%BF%8E%E4%BD%A0%E7%9A%84%E5%88%B0%E6%9D%A5_n202" class="news-img"><img src="/static/images/news/e66332da584ad241f469bad245c7e3a5.jpg" alt="Google体验中心开放日欢迎你的到来"></a>
                    <span class="news-date">17-06-20</span>
                    <a href="https://www.dyyseo.com/google%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83%E5%BC%80%E6%94%BE%E6%97%A5%E6%AC%A2%E8%BF%8E%E4%BD%A0%E7%9A%84%E5%88%B0%E6%9D%A5_n202"><em>Google体验中心开放日欢迎你的到来</em></a>
                    <p>为更好地服务外贸企业，打造沟通的平台，四月起，第一页将每周五定为开放日，14:00--17:00在Google AdWords体验中心准时进行主题讲座，每周都有新看点，欢迎外贸人前来交流学习。 &nbsp; Google AdWords体验中心开放日计划开始于2017年4月，到目前为止已经成功开办了十场，做了十场内容丰富的主题讲座，累计到会人数近千人，我们力争在外贸推广领域尽我们所能，传播更多的外贸营销知识。 六月更是与合作企业共同分享成功经验，我们邀请到了漳州大珅金属制品有限公司的外贸经理出晓婷小姐，分享她的大客户开发心得，作《通过Google开发、验证客户》主题分享。 第一页营销总监曾辉，《通过数据挖掘潜在市场》 第一页高级经理杨扬，《网站运营之用户体验》 高级经理兰连光，《关键词匹配方案》 高级经理庄伟阳，《如何判断网站是否符合Google规则》 四月牛刀小试，五月初成系统，六月精彩继续。 Google AdWords体验中心开放日欢迎你的到来。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E7%BD%91%E7%BB%9C%E7%A7%91%E6%8A%80%E8%8D%A3%E8%8E%B7%E2%80%9C2016%E5%B9%B4%E5%BA%A6%E4%BC%98%E7%A7%80google%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%E2%80%9D%E7%A7%B0%E5%8F%B7_n201" class="news-img"><img src="/static/images/news/5270f199b449cf1c415ef12c59be8524.jpg" alt="第一页网络科技荣获“2016年度优秀Google合作伙伴”称号"></a>
                    <span class="news-date">17-04-19</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E7%BD%91%E7%BB%9C%E7%A7%91%E6%8A%80%E8%8D%A3%E8%8E%B7%E2%80%9C2016%E5%B9%B4%E5%BA%A6%E4%BC%98%E7%A7%80google%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%E2%80%9D%E7%A7%B0%E5%8F%B7_n201"><em>第一页网络科技荣获“2016年度优秀Google合作伙伴”称号</em></a>
                    <p>2017年4月11日，第一页网络科技受邀参与Google大中华区合作伙伴杭州年会，并荣获“Google2016年度优秀合作伙伴”称号。 第一页与Google一直保持着良好的合作关系。自2015年2月以来，第一页正式成为全球最大搜索引擎Google中国区核心合作伙伴；2016年1月，由厦门市湖里区人民政府、谷歌广告（上海）有限公司、第一页网络科技有限公司三方联合推进的厦门Google&nbsp;AdWords体验中心在厦门湖里高新技术园区正式落地启动，成为福建省首家、全国第六家Google AdWords体验中心，由第一页负责项目运营。 第一页网络科技有限公司十分感谢Google的信任，也十分感谢合作客户们的支持。接下来的时间里，第一页将保持与Google的良好合作关系，遵守Google规则，将Google的平台优势发挥到最大，更好的服务于外贸企业，为外贸企业的推广扩展献上绵薄之力。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AD%91%E6%A2%A6%E5%89%8D%E8%A1%8C%EF%BC%8C%E7%AC%AC%E4%B8%80%E9%A1%B5%E6%96%B0%E5%B9%B4%E5%85%A8%E5%91%98%E5%8A%A8%E5%91%98%E5%A4%A7%E4%BC%9A%EF%BC%8C%E6%88%91%E4%BB%AC%E5%9C%A8%E4%B8%80%E8%B5%B7_n198" class="news-img"><img src="/static/images/news/4d9a90aef96b3ed7b8c3f3a381506284.jpg" alt="筑梦前行，第一页新年全员动员大会，我们在一起"></a>
                    <span class="news-date">17-02-07</span>
                    <a href="https://www.dyyseo.com/%E7%AD%91%E6%A2%A6%E5%89%8D%E8%A1%8C%EF%BC%8C%E7%AC%AC%E4%B8%80%E9%A1%B5%E6%96%B0%E5%B9%B4%E5%85%A8%E5%91%98%E5%8A%A8%E5%91%98%E5%A4%A7%E4%BC%9A%EF%BC%8C%E6%88%91%E4%BB%AC%E5%9C%A8%E4%B8%80%E8%B5%B7_n198"><em>筑梦前行，第一页新年全员动员大会，我们在一起</em></a>
                    <p>新春大年后我们正式告别了2016年，第一页的伙伴们也开始了2017年的新征程。2017年2月5日、6日，第一页网络科技有限公司在Google AdWords体验中心组织厦门销售总部、合肥技术总部、广州销售团队、深圳销售团队进行了历时两天的新年全员动员大会。 整个动员大会围绕着工作总结、经验分享、发展规划、表扬鼓励展开。总经理孙荣耀先生的新年致辞，肯定了大家过去一年的努力，也指明接下来公司的发展方向；这次动员大会是许多同事第一次见面，彼此介绍相互熟悉拉近了我们的距离；2016年成绩突出的销售同事分享心得体会，大家相互学习共同进步；各部门负责人总结2016年工作结果，规划2017年发展方向；给予2016年突出表现得团队和个人以表扬与奖励。 2016年是第一页网络科技有限公司成立11周年，公司特意为每位六年以上的老员工定制了一枚黄金戒指作为同行六年的特别答谢。 新的一年，第一页全体员工必将更加努力，全体上下一心让第一页走得更远，更好地服务每一位客户。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E4%B8%89%E5%9B%9B%E6%9C%9F%E4%B8%A4%E5%9C%B0%E4%BA%89%E5%A6%8D_n197" class="news-img"><img src="/static/images/news/84f1baea9614264dab34c860f5bba2b9.jpg" alt="极客堂外贸营销实战营三四期两地争妍"></a>
                    <span class="news-date">17-01-16</span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E4%B8%89%E5%9B%9B%E6%9C%9F%E4%B8%A4%E5%9C%B0%E4%BA%89%E5%A6%8D_n197"><em>极客堂外贸营销实战营三四期两地争妍</em></a>
                    <p>极客堂外贸营销实战营深圳站打响新年第一枪。这是极客堂第一次到深圳开课，形成闽粤两地相互呼应。 极客堂第三期第一次走出大本营--厦门--来到深圳，带着未知，我们也有顾虑和担忧，对于一个全新的环境我们也担心不能为大家所认可，万幸的是，你们都来了，有许多同学是不辞辛劳从广州过来的，杰木楷电子技术有限公司的马总更是带病前来，这份支持我们铭记于心。为了保证质量，我们将企业数量尽量控制在十家以内。小规模的精品课程也让我们有了新的感受，都说浓缩的才是精华，老师和同学们都可以充分地交流，大概是因为广州深圳都是包容的城市的缘故，学员们开朗活泼，课堂气氛轻松活跃，提问和回答都积极踊跃，加上张岳老师的幽默，整个课堂时不时发出阵阵笑声。 第四期紧随其后，再次回归厦门，临近春节，不少企业已经呈现出坐等放假的姿态，但是仍有老板没有松懈，圣诞节和春节前后是一家企业最好的转型时机，这段时间老板有足够的时间来制定新的计划和目标。而推掉尾牙来上课同学，这一期比比皆是，同学们来自不同行业，服装、金属、机械，甚至还有来自锁具行业的锁易购，这家企业让同学们大开眼界。各行各业的同学们不存在竞争关系，课上课下交流也很融洽，吃饭时间大家也分析自己现在在做的平台的优劣，其实外贸企业现在面临的同一个问题就是被绑定，而逐渐独立逐渐脱离这是企业摆脱绑定命运的做法。 与前两次外贸营销实战营一样，这次极客堂请到的依然是外贸名师张岳老师为学员们带来三天两夜的导师亲授，张老师有着丰富的实战经验和扎实的理论功底，曾任职美国跨国公司营销副总裁十年，深谙欧美市场的游戏规则；回国后孵化了一家家居家居类企业，创造了一个月出口额从0到180条柜的业界传奇；张老师的实力受到认可，成为国家商务部培训中心跨境电商课题组策划人、特邀讲师；中国科技部火炬中心“COSEP工程”欧美市场网络营销专家；创办了南开大学跨境电子商务研究生班，是南开大学的客座教授。 张老师的课程是围绕海外市场营销展开的，市场营销是一个从找到细分市场开始的螺旋式上升的结构，从细分市场开始，找到能响应客户痛痒的关键词，出现在客户响应客户痛痒的第一现场，通过有吸引力的文案来吸引客户点击，最后从五遵守五个因素来建立着陆页，提高转化率，最后进入销售环节，从这一系列流程中不断地强化、更新细分市场，如此循环往复周而复始。 期间具体传授Google工具的使用方法，虽然不少企业在做Google推广，但是对于Google工具的使用却不一定熟练，都说工欲善其事必先利其器，Google工具对于互联网营销来说无异于是企业营销的武器；对于怎么匹配关键词，撰写具有吸引力的广告文案，设计高转化率的详情页等个性化方面，也给出了具体的方法论，对于学员们牛刀小试的练手之做也是逐个评价讨论。 老师课程中提出的很多理论让同学们耳目一新，颠覆了许多外贸人原有的思路，这就是极客堂外贸营销实战营的意义所在，刷新你的三观，传授秘而不宣的营销技巧，在贸易终端化的大浪潮下抢占先机。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E5%8F%97%E9%82%80%E5%8F%82%E5%8A%A0%E6%B3%89%E5%B7%9E%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%E5%8D%8F%E4%BC%9A%E8%B7%A8%E5%B9%B4%E6%99%9A%E4%BC%9A_n196" class="news-img"><img src="/static/images/news/ba6c6e68ee2da5cdeeee20a13930cd76.jpg" alt="第一页受邀参加泉州跨境电商协会跨年晚会"></a>
                    <span class="news-date">16-12-30</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E5%8F%97%E9%82%80%E5%8F%82%E5%8A%A0%E6%B3%89%E5%B7%9E%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%E5%8D%8F%E4%BC%9A%E8%B7%A8%E5%B9%B4%E6%99%9A%E4%BC%9A_n196"><em>第一页受邀参加泉州跨境电商协会跨年晚会</em></a>
                    <p>2016年12月29日，第一页受邀参加泉州跨境电商协会“梦飞YOUNG”的主题跨年晚会，第一页总监曾辉等人作为代表，出席了跨年晚会，对协会的盛情邀请表示感谢，也表达了对协会发展的美好祝愿。 &nbsp; 泉州市跨境电商协会以“抱团发展，合作共赢”为宗旨，以服务为主要方式，以促进、共建、互享为目的，共同聚产业优势，建电商强市，是泉州地区跨境电商企业的大本营，为泉州外贸企业带来了巨大贡献。 泉州跨境电子商务协会成立以来就和第一页网络科技保持着良好的合作关系，第一页倾力为协会打造官方网站，双方合作开展了海外市场网络整合营销主题分享会，作为泉厦两地交流合作的典范，在2017年双方将继续保持友好合作关系，互利共赢，第一页网络科技有限公司也对泉州跨境电子商务协会表示衷心的祝愿，祝愿泉州跨境电商协会在新的一年里继续聚产业优势，将泉州电子商务发扬光大。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E7%AC%AC%E4%BA%8C%E6%9C%9F%E5%AE%8C%E7%BE%8E%E5%BC%80%E8%90%A5_n195" class="news-img"><img src="/static/images/news/8f026768964d215c171c0c479230156e.JPG" alt="极客堂外贸营销实战营第二期完美开营"></a>
                    <span class="news-date">16-12-12</span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E7%AC%AC%E4%BA%8C%E6%9C%9F%E5%AE%8C%E7%BE%8E%E5%BC%80%E8%90%A5_n195"><em>极客堂外贸营销实战营第二期完美开营</em></a>
                    <p>时隔一月，极客堂外贸营销实战营第二期开课了。 这次的学员来自四面八方不同的城市，远道而来的各位都对极客堂外贸营销实战营充满了期待。 这次进行的是三天两夜的导师亲授，我们请到的导师是中国顶尖外贸营销大师张岳老师，张老师有着丰富的实战经验和扎实的理论功底，曾任职美国跨国公司营销副总裁十年，深谙欧美市场的游戏规则；回国后孵化了一家家居家居类企业，创造了一个月出口额从0到180条柜的业界传奇；张老师的实力受到认可，成为国家商务部培训中心跨境电商课题组策划人、特邀讲师；中国科技部火炬中心“COSEP工程”欧美市场网络营销专家；创办了南开大学跨境电子商务研究生班，是南开大学的客座教授。 这次外贸营销实战营围绕海外市场搜索营销展开，认知搜索和搜索引擎的工作机制，找到搜索的盈利套路，从定位到引流再到转化的全方位指导。 张老师首先从AdWords出发，帮助学员找到AdWords的本质，传授AdWords的学习方法；分析搜索引擎运作机制和搜索者行为；确定细分市场。AdWords中不得不提的就是key words，张老师也分析了Keywords 的本质，强调keywords的获取方式和管理方法。张老师同样也透露了Google adwords 的规则，让大家学会以合理的成本完成最大的推广。 实操部分让同学们大开眼界，张老师逐个分析学员们的landing page,并给出调整建议。不少同学反应这真是一个毁三观的过程。 这些同学们都是非竞争性企业，交流讨论都是畅所欲言，每一个人的实操都能够集思广益博采众长，短短的三天两夜大家思想的碰撞带来了精彩的火花，每一个学员都是满载而归。 与第一期一样，第二期极客堂外贸营销实战营也是为期六个月，分为三天两夜导师亲授，每月一次线下实操教学，每月两次线上视频答疑。三天两夜虽然结束了，但是这只是一个开始，剩下的时间大家还要一起交流学习讨论，共同实现我们的目标。 第二期极客堂外贸营销实战营受到了同学们的极高评价，这也让我们更加坚定了做好外贸营销培训服务的信念，坚持为我们的学员提供高品质高价值的培训服务。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B511%E6%9C%88%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E4%B8%BB%E9%A2%98%E5%B3%B0%E4%BC%9A%E5%9C%86%E6%BB%A1%E8%90%BD%E5%B9%95_n194" class="news-img"><img src="/static/images/news/abdec41d37188fb9355218cc091e0565.jpg" alt="第一页11月外贸营销主题峰会圆满落幕"></a>
                    <span class="news-date">16-11-25</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B511%E6%9C%88%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E4%B8%BB%E9%A2%98%E5%B3%B0%E4%BC%9A%E5%9C%86%E6%BB%A1%E8%90%BD%E5%B9%95_n194"><em>第一页11月外贸营销主题峰会圆满落幕</em></a>
                    <p>十一月厦门第一页网络科技有限公司联合外贸营销大师张岳老师，在广州、深圳、泉州、汕头四地举办的四场外贸营销圆满落幕。 外贸营销名师张岳带来了海外市场网络整合营销主题峰会。张岳先生任职美国跨国公司营销副总裁10年，是国家科技部和商务部的特邀讲师，同时还创办了南开大学跨境电子商务研究生班和天津跨境电子商务协会。 张岳老师在11月23日、24日分别在汕头和泉州带来了海外市场网络整合营销峰会。分享他10年海外营销实战案例，同时帮助与会者分析海外买家真实采购心理，利用互联网工具把握趋势定位市场，在买家的采购思维中提升产品曝光度。整场主题峰会幽默诙谐，妙趣横生，会场时不时地发出大笑，与会者都为张岳老师对于海外营销的见解所折服。 12月9日第一页将推出极客堂-外贸营销实战营第二期，将再次邀请张岳老师作为外贸的特邀讲师，为大家带来一场外贸营销盛宴。 第一页网络科技CEO孙荣耀先生11月22日和23日分别在广州和深圳带来题为“开拓全球数字营销的机遇”的外贸推广营销研讨会议。孙先生拥有16年的外贸推广管理经验，是外贸黄埔军校的特邀讲师，尤其擅长出口企业外部信息化、网络广告投放、推广运营管理。 这次研讨会孙总与各位企业负责人一起探讨外贸数字化营销和Google本地化精准营销，分析互联网营销趋势，找到海外整合营销实战策略。这次会议含金量颇高，不少与会者表示受益匪浅。 &nbsp; 这次峰会得到了泉州跨境电商协会、泉州威尔伯网络科技有限公司、厦门嘉联恒进出口有限公司的大力支持，也得到了与会者的一致好评。第一页将继续努力，不断为外贸企业带来精彩的课程，与大家一起进步。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E7%AC%AC%E4%B8%80%E6%9C%9F%E6%AD%A3%E5%BC%8F%E5%BC%80%E8%90%A5_n192" class="news-img"><img src="/static/images/news/5e5dfee99640ebd5b9bb1d805e84b54b.png" alt="极客堂外贸营销实战营第一期正式开营"></a>
                    <span class="news-date">16-11-07</span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E7%AC%AC%E4%B8%80%E6%9C%9F%E6%AD%A3%E5%BC%8F%E5%BC%80%E8%90%A5_n192"><em>极客堂外贸营销实战营第一期正式开营</em></a>
                    <p>千呼万唤始出来，筹备多日的极客堂外贸营销实战营终于和大家见面了，2016年11月4日，来自省内外的学员们终于齐聚一堂，在Google体验中心聆听了来自外贸营销名师张岳的精彩课程。 &nbsp; 张岳老师带来了北方的爽朗，整个课堂风趣幽默，妙趣横生。从看似与主题无关的中国体育入手，引出管理系统对成绩的影响，另辟蹊径，让人耳目一新，迅速抓住了学员的注意力。张岳老师首先讲解了搜索引擎检索的运作机制，分析搜索者的行为方式，如何优化关键词，发现客户的真正需要。同时也传授了如何充分利用Adwords的数据，从技术和营销层面达成自己营销诉求的方法。在学员们展示了自己的着陆页了之后，张岳老师针对每个学员提出了各自网络改版优化的思路。通过多次分组讨论，学员们充分了解彼此，探讨在各自行业内的优势和不足，集思广益。张岳老师也对学员们实际工作中遇到的问题给出解决意见，同学们纷纷表示受益匪浅，在课程结束后依然围绕老师周围，意犹未尽。 &nbsp; 学员们都是这个领域内的佼佼者，课上专心致志，小组讨论积极发言，将自己在实践中遇到的经验和问题提出来和老师同学们一同探讨。课下也是不放过每一个讨论的机会，同学们各抒己见，场面热烈。课堂氛围轻松和谐，学员们迅速熟悉起来，展开热烈的交流讨论，仿佛回到了学生时代。 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 这次三天两夜的课堂只是一个开端，接下来还有每月两次的线上视频答疑和每月一次的线下实操培训，帮助学员解决实际中遇到的问题，更好的巩固学习成果。 &nbsp; &nbsp; 第一期正在进行，极客堂外贸营销实战营第二期火热集结，12月9号，张岳老师再度亲临Google体验中心，再一次带领外贸人探索外贸营销的秘境。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82-%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E9%A6%96%E6%9C%9F%E5%BC%80%E8%AF%BE_n191" class="news-img"><img src="/static/images/news/da7070ec781aa497857cd4e18a3657e8.jpg" alt="极客堂-外贸营销实战营首期开课"></a>
                    <span class="news-date">16-11-01</span>
                    <a href="https://www.dyyseo.com/%E6%9E%81%E5%AE%A2%E5%A0%82-%E5%A4%96%E8%B4%B8%E8%90%A5%E9%94%80%E5%AE%9E%E6%88%98%E8%90%A5%E9%A6%96%E6%9C%9F%E5%BC%80%E8%AF%BE_n191"><em>极客堂-外贸营销实战营首期开课</em></a>
                    <p>&nbsp;&nbsp;外贸营销绝对是世界上最烧脑的工种之一，外贸业务员如何在脑力严重消耗的情况下获得应有的价值回报？在大变革的时代，面对错综复杂的局面，探索未知，找到道路是我们的宿命！ &nbsp;&nbsp;现在探索和学习的机会来了，第一页与极客堂联合推出外贸营销实战营，邀请顶尖海外营销专家张岳老师，带来实战训练营。 18单元（三天两夜） 5个单元（2次/月） 5个单元（1次/月，半天） 周期6个月 亲身讲授 线上教学视频答疑 线下实操培训 l&nbsp;1998-2002 &nbsp;Next Generation, Founder ²&nbsp;创办天津最早的互联网营销公司 ²&nbsp;《互联网周刊》专栏撰稿人 l&nbsp;2002-2011 &nbsp;&nbsp;ExperVision,VP of Onlion Marketing ²&nbsp;&nbsp;ExperVision Inc. 1989年创立于美国硅谷，公司总部位于San Jose,全球三大OCR核心技术供应商之一，99%的客户来自美国和欧盟。负责公司做美国和欧盟主要市场的互联网营销工作，2万小时+海外市场网络营销实战经验，带领公司准确定位并成功转型Application Oriented OCR业务，并连续三年实现在欧美市场上100%的业务增长。 ²&nbsp;期间与国家科技部火炬中心合作，策划中国软件欧美出口工程（COSEP),并担任欧美市场网络营销导师。 l&nbsp;2002-至今 &nbsp;天津市电子商务协会秘书长 ²&nbsp;国家商务部培训中心，跨境电商课题组 &nbsp;&nbsp;&nbsp;策划人，特邀讲师 ²&nbsp;APEC跨境电子商务创新发展研究中心 &nbsp;&nbsp;&nbsp;特邀研究员 ²&nbsp;南开大学跨境电子商务研究生班 &nbsp;&nbsp;&nbsp;创始人，客座教授 ²&nbsp;出版《网络整合营销（外贸篇）》、《跨境电子商务实物》、《跨境电商第三方平台实物》 ²&nbsp;全国首创跨境电商出口海外仓供应链金融服务体系，并推动天津市与eBay签订三年双向排他合作协议，预计三年内拉动天津出口增长5%-10%。 ²&nbsp;孵化跨境电商家具家居类目领先B2C出口企业，协助企业实现跨越式发展，创业两年业绩从零成长到月均出口150条货柜，年营业额超过1亿美元。 l&nbsp;2016–2040 &nbsp;目标 ²&nbsp;中国制造进入全球终端 • 孵化100家年营业额超过1亿美元，毛利超过25%的国际化企业。 &nbsp; 时间：2016年11月4日-2017年5月4日 地址：厦门高新技术园Google adwords体验中心 咨询热线：400-666-7710 &nbsp;400-661-8788 张岳老师带领学员一起探索打开海外市场的终极秘籍，用搜索营销打开全球终端市场的大门。 &nbsp;</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5&amp;google%20adwords%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83%E5%87%BA%E5%B8%ADwish%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%E5%B9%B3%E5%8F%B0%E6%8E%A8%E4%BB%8B%E4%BC%9A_n186" class="news-img"><img src="/static/images/news/96f50bf1c2eb91d378739cae419664f8.jpg" alt="第一页&amp;Google AdWords体验中心出席WISH跨境电商平台推介会"></a>
                    <span class="news-date">16-08-05</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5&amp;google%20adwords%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%BF%83%E5%87%BA%E5%B8%ADwish%E8%B7%A8%E5%A2%83%E7%94%B5%E5%95%86%E5%B9%B3%E5%8F%B0%E6%8E%A8%E4%BB%8B%E4%BC%9A_n186"><em>第一页&amp;Google AdWords体验中心出席WISH跨境电商平台推介会</em></a>
                    <p>&nbsp; &nbsp; 2016年8月4日下午，由中国邮政集团福建分公司、上海薇仕网络科技主办的“2016年WISH跨境电商平台福建专场客户推介会”在厦门牡丹国际大酒店举行。第一页&amp;Google AdWords体验中心应邀出席本次大会。 &nbsp; &nbsp; &nbsp; WISH是北美最大的移动跨境电商平台，用最快最简单的方式帮商户把东西卖出去是平台的运作理念，WISH 89%以上的商家来自中国。本次推介会来到了福建，对于福建外贸企业来说，不仅是一个全面认识移动跨境平台的好契机，更是一次跨境电商新思维的启发和碰撞。 &nbsp; &nbsp; &nbsp; 第一页营销总监曾辉先生在本次会议中，分享了Google大数据在跨境电商平台引流方面的运用，以及在外贸企业海外推广渠道方式中的运用。关于跨境电商流量问题，第一页在SEO优化引流方面具有10年以上专业经验，且第一页运营的厦门Google AdWords体验中心借助全球最大搜索引擎Google授权的技术以及资源，在海外推广、流量获取方面具有行业领先水平。第一页&amp;厦门Google AdWords体验中心计划在3年内为3000家福建企业增加10亿美元的线上出口额，本次出席WISH跨境电商平台推介会，希望能够帮助更多的外贸企业拓宽外贸思路，找到更好的跨境电商解决办法。 第一页营销总监曾辉先生分享Google大数据引流 &nbsp; &nbsp; &nbsp; 做跨境电商，解决了平台问题，流量问题，还需要有完善的物流服务做支撑。作为推介会主办方的中国邮政，在本次会上特别分享的“邮政国际小包”服务，凭借“万国邮政联盟”的庞大网络，通达全球200多个国家或地区，能够为跨境电商外贸企业提供全面优质的物流服务。&nbsp; &nbsp; &nbsp; 本次WISH跨境电商平台推介会从平台、流量、物流三大方面进行全面分享解析后成功落幕，解决了参会的外贸企业嘉宾关于跨境电商的许多疑惑。期待WISH平台在未来更加强大，凭借庞大流量，帮助越来越多的外贸企业把更多的产品卖出去。</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%B8%8E%E5%98%89%E8%81%94%E6%81%92%E6%AD%A3%E5%BC%8F%E6%88%90%E4%B8%BA%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4_n185" class="news-img"><img src="/static/images/news/2146947d12953245784e983d3a8622bb.jpg" alt="第一页与嘉联恒正式成为战略合作伙伴"></a>
                    <span class="news-date">16-08-02</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%B8%8E%E5%98%89%E8%81%94%E6%81%92%E6%AD%A3%E5%BC%8F%E6%88%90%E4%B8%BA%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4_n185"><em>第一页与嘉联恒正式成为战略合作伙伴</em></a>
                    <p>&nbsp; &nbsp; 2016年7月26日下午，第一页网络科技与厦门嘉联恒进出口有限公司，在厦门Google AdWords体验中心正式签订战略合作协议。 签约现场 &nbsp; &nbsp; &nbsp; &nbsp;第一页总经理孙荣耀先生与嘉联恒总经理叶明媚女士通过详细洽谈合作事项后，正式签署了战略合作协议。从成功签署协议的那一刻开始，第一页与嘉联恒正式成为了战略合作伙伴，在外贸服务领域达成了战略共识。 &nbsp; &nbsp; &nbsp; 厦门嘉联恒进出口有限公司是一家以提供进出口贸易服务为主的进出口企业，提供优质高效的外贸综合服务，经营规模一直位于厦门市进出口贸易企业的前列。获得“厦门重点贸易出口企业”、“厦门市出口超亿美元企业”、“海关A类管理企业”等多项荣誉。第一页与嘉联恒的合作基于共同的外贸服务理念和宗旨。第一页十年专注SEO外贸推广，整合Google核心合作伙伴资源，Google AdWords体验中心资源，以及各合作伙伴资源，不断地提升、优化、完善外贸海外推广服务，使第一页成为外贸推广服务领跑者。此次与嘉联恒的合作，标志着双方在外贸服务范畴将实现优势互补，资源共享，携手为更多的外贸企业打造更优质、更全面、更高效的外贸服务。 第一页总经理孙荣耀先生（左）&nbsp;&nbsp;&nbsp;嘉联恒总经理叶明媚女士（右） &nbsp; &nbsp; &nbsp; 嘉联恒服务宗旨——诚信服务，创造完美！第一页将与嘉联恒一起秉持宗旨，与外贸企业朋友建立良好合作关系，助力外贸出口额增长，创外贸出口营销新高度！</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%B8%8E%E4%B8%AD%E6%81%92%E5%A4%A9%E4%B8%8B%E6%AD%A3%E5%BC%8F%E8%BE%BE%E6%88%90%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%E5%85%B3%E7%B3%BB_n181" class="news-img"><img src="/static/images/news/468e9593f7f59c3ad84fdd5dda0d4a94.jpg" alt="第一页与中恒天下正式达成战略合作伙伴关系"></a>
                    <span class="news-date">16-07-22</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%B8%8E%E4%B8%AD%E6%81%92%E5%A4%A9%E4%B8%8B%E6%AD%A3%E5%BC%8F%E8%BE%BE%E6%88%90%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%E5%85%B3%E7%B3%BB_n181"><em>第一页与中恒天下正式达成战略合作伙伴关系</em></a>
                    <p>&nbsp; &nbsp; 2016年7月21日下午，第一页网络科技有限公司与厦门中恒天下网络科技有限公司，在厦门Google AdWords体验中心正式签署战略合作协议。此次签约，标志着第一页与中恒天下在外贸电商服务范畴建立了稳固长期的合作伙伴关系。 &nbsp; &nbsp; 第一页与中恒天下在外贸电商服务领域均有多年的专业经验。第一页十年来专注于外贸SEO推广服务，作为Google大中华区核心合作伙伴，第一页运营的厦门Google AdWords体验中心为广大外贸企业提供了专业和前端的外贸海外推广营销服务。中恒天下专注于云端B2C商城的研发，是中国首家SaaS系统云商城（B2C）技术服务商。此次与中恒天下的合作将通过高质量的B2C商城、专业SEO优化水平以及高效数字营销推广方案，为外贸企业客户提供更专业、更全面、更高水平的外贸B2C商城、海外推广服务。 &nbsp; &nbsp; &nbsp; 双方就各项合作意向达成一致，第一页总经理孙荣耀先生与中恒天下总经理陈郭靖先生正式签署了战略合作协议。PayPal中国区渠道拓展部高级经理魏冉、大客户部业务拓展经理王利出席了本次签约会。至此，第一页与中恒天下正式成为战略合作伙伴。 &nbsp; &nbsp; &nbsp; &nbsp;第一页与中恒天下战略协议签约现场 第一页总经理孙荣耀先生（左） 中恒天下总经理陈郭靖先生（右） &nbsp; 第一页与中恒天下的战略合作，将为广大外贸企业创造更多的服务价值，在外贸发展的道路上，我们一起携手并进，共铸辉煌！</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E7%BD%91%E7%BB%9C%E7%A7%91%E6%8A%80%E4%BC%81%E4%B8%9Alogo%E6%9B%B4%E6%8D%A2%E9%80%9A%E7%9F%A5_n178" class="news-img"><img src="/static/images/news/b3c6e80ae62545c80994960acf8c7255.jpg" alt="第一页网络科技企业LOGO更换通知"></a>
                    <span class="news-date">16-07-11</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E7%BD%91%E7%BB%9C%E7%A7%91%E6%8A%80%E4%BC%81%E4%B8%9Alogo%E6%9B%B4%E6%8D%A2%E9%80%9A%E7%9F%A5_n178"><em>第一页网络科技企业LOGO更换通知</em></a>
                    <p>尊敬的新老客户、合作伙伴： &nbsp;&nbsp;&nbsp;&nbsp;非常感谢大家一直以来对第一页网络科技的大力支持！ 为了进一步提升公司的品牌价值、提升公司形象，第一页网络科技有限公司即日起正式启用新的企业LOGO标识。请各位新老客户朋友们、各合作伙伴，认准第一页公司名称、网站名称以及公司标识。 &nbsp; 旧标识： 新标识： &nbsp; &nbsp; 公司官网、各类宣传品、企业资料、技术资料、员工名片等的LOGO均将陆续更换。在此期间，旧标识与新标识具有同等效力。 &nbsp; 由此带来的不便，敬请谅解！ 特此通知！ &nbsp; 第一页网络科技有限公司 2016年7月11日</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B56%E6%9C%887%E5%9C%BA%E7%BA%BF%E4%B8%8B%E4%BA%A4%E6%B5%81%E5%9F%B9%E8%AE%AD%E4%BC%9A%E6%B1%87%E8%81%9A%E4%B8%8A%E5%8D%83%E5%90%8D%E5%A4%96%E8%B4%B8%E4%BA%BA%EF%BC%8C%E7%81%AB%E7%88%86%E5%90%84%E5%9C%B0%E5%A4%96%E8%B4%B8%E5%9C%88_n169" class="news-img"><img src="/static/images/news/7fb96ad411c4121469a2d7efe4424137.jpg" alt="第一页6月7场线下交流培训会汇聚上千名外贸人，火爆各地外贸圈"></a>
                    <span class="news-date">16-06-30</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B56%E6%9C%887%E5%9C%BA%E7%BA%BF%E4%B8%8B%E4%BA%A4%E6%B5%81%E5%9F%B9%E8%AE%AD%E4%BC%9A%E6%B1%87%E8%81%9A%E4%B8%8A%E5%8D%83%E5%90%8D%E5%A4%96%E8%B4%B8%E4%BA%BA%EF%BC%8C%E7%81%AB%E7%88%86%E5%90%84%E5%9C%B0%E5%A4%96%E8%B4%B8%E5%9C%88_n169"><em>第一页6月7场线下交流培训会汇聚上千名外贸人，火爆各地外贸圈</em></a>
                    <p>2016年6月，第一页7场线下交流培训会分别在福州、广州、汕头、厦门、深圳开展。其中6月15日下午，广州、厦门、汕头三大地区联动开展外贸培训会议。大量外贸海外推广营销实战干货，Google工具实操运用，外贸网站运营实操干货，以及前瞻性的行业洞察等培训内容，在各大地区与数百位外贸人交流分享。帮助更多的外贸企业寻找到最有效的外贸营销方法与渠道增加线上出口额，是交流培训会的主要目标，后续第一页线下交流培训会依然会在各地与广大外贸人一起探讨学习。外贸之路学无止境，我们与您一起共同进步！ &nbsp; 以下是6月线下培训交流会概况： 2016年6月3日，福州专场 福州专场外贸电子商务研讨培训会，在闽侯县甘蔗镇御龙湾举办，由第一页营销总监曾辉先生担任讲师。 2016年6月14日，广州专场 第一页运营总监丁娟老师的外贸人网站运营必备课程——《洞察买家和“蜘蛛”思维的外贸网站运营》来到了广州，与近百位广州外贸人一起学习分享外贸网站运营专业实操知识。 2016年6月15日，广州九鸣电商学院专场 倍受外贸人热捧的《洞察买家和“蜘蛛”思维的外贸网站运营》主题培训课程，继续在广州九鸣电商学院开展。 2016年6月15日，潮汕专场 创新思维之企业互联网运用——Google专场培训会在汕头龙湖区金海湾酒店举行，由第一页总经理孙荣耀先生担任讲师。 2016年6月15日，厦门Google AdWords体验中心专场 “外贸数字化营销新载体”主题培训会在厦门Google AdWords体验中心举行，由第一页营销总监曾辉先生担任讲师。 2016年6月16日，深圳专场 《洞察买家和“蜘蛛”思维的外贸网站运营》主题培训会继连续两场广州专场会后，进入深圳，第一页运营总监丁娟老师带领深圳外贸人一起深入探讨网站运营思维策略。 2016年6月25日，福州梦商会携手第一页等第三方合作伙伴共同举办跨境电商论坛大会 福州梦商会携手第一页等第三方合作伙伴共同举办的“穿云破雾，生态联动——传统企业如何破局跨境电商”主题论坛大会，在福州西湖大酒店隆重举行，500多人的会场满场爆棚。 7月第一页线下交流培训会继续与您相约！更多精彩，敬请期待！ &nbsp;</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E6%80%BB%E7%BB%8F%E7%90%86%E4%B8%8Egoogle%E5%A4%A7%E4%B8%AD%E5%8D%8E%E5%8C%BA%E6%B8%A0%E9%81%93%E4%BA%8B%E4%B8%9A%E9%83%A8%E6%80%BB%E7%BB%8F%E7%90%86%E7%99%BD%E6%B9%A7%E5%86%8D%E6%AC%A1%E8%81%9A%E9%A6%96_n168" class="news-img"><img src="/static/images/news/4241206b13d64e1ee1ed0e987e01477c.jpg" alt="第一页总经理与Google大中华区渠道事业部总经理白湧再次聚首"></a>
                    <span class="news-date">16-06-30</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E6%80%BB%E7%BB%8F%E7%90%86%E4%B8%8Egoogle%E5%A4%A7%E4%B8%AD%E5%8D%8E%E5%8C%BA%E6%B8%A0%E9%81%93%E4%BA%8B%E4%B8%9A%E9%83%A8%E6%80%BB%E7%BB%8F%E7%90%86%E7%99%BD%E6%B9%A7%E5%86%8D%E6%AC%A1%E8%81%9A%E9%A6%96_n168"><em>第一页总经理与Google大中华区渠道事业部总经理白湧再次聚首</em></a>
                    <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2016年6月28日，由亚太经合组织（APEC）、中国商务部举办的第六届APEC电子商务工商联盟分论坛暨“跨境电商促进中小企业外贸转型”为主题的分论坛——晋江市第二届跨境电商峰会在晋江召开。此次论坛邀请了互联网商界大咖带来精彩的主题分享。他们在互联网营销、跨境电商发展策略等领域有着丰富的实战专业经验和深刻的见解。 &nbsp; &nbsp; 全球最大搜索引擎Google大中华区渠道事业部总经理白湧出席本次论坛，进行《驾驭数字技术 开拓全球市场》主题分享。第一页总经理孙荣耀先生在本次论坛中，与Google大中华区渠道事业部总经理白湧先生再次聚首，进一步交流探讨Google数字化营销在中小外贸企业转型发展中的运用策略。 Google大中华区渠道事业部总经理白湧先生（右） 与第一页总经理孙荣耀先生（左）的合影</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B55%E6%9C%88%E7%BA%BF%E4%B8%8B%E5%88%86%E4%BA%AB%E4%BA%A4%E6%B5%81%E5%9F%B9%E8%AE%AD%E2%80%94%E2%80%945%E5%A4%A7%E4%B8%93%E5%9C%BA%EF%BC%8C%E8%81%9A%E7%84%A6%E5%A4%96%E8%B4%B8%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1_n147" class="news-img"><img src="/static/images/news/4280417989e02b2591471c06dcc024ca.jpg" alt="第一页5月线下分享交流培训——5大专场，聚焦外贸电子商务"></a>
                    <span class="news-date">16-06-02</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B55%E6%9C%88%E7%BA%BF%E4%B8%8B%E5%88%86%E4%BA%AB%E4%BA%A4%E6%B5%81%E5%9F%B9%E8%AE%AD%E2%80%94%E2%80%945%E5%A4%A7%E4%B8%93%E5%9C%BA%EF%BC%8C%E8%81%9A%E7%84%A6%E5%A4%96%E8%B4%B8%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1_n147"><em>第一页5月线下分享交流培训——5大专场，聚焦外贸电子商务</em></a>
                    <p>2016年5月，第一页线下分享交流培训会继续火热开展，5大专场培训陆续在漳州、深圳、德化、广州开展。培训会主题围绕外贸行业热门话题——“外贸电子商务”展开，互联网新思维、数字化营销、Google搜索、Google大数据应用仍然是培训会的核心内容。在这个特别的5月，第一页外贸电子商务培训会走进了中国瓷都·德化电子商务创业园，与诸多电子商务人才分享交流经验。 6月新起点！第一页培训会继续火力全开！ 6月份培训会预告： 时间 地点 参会预约咨询 2016年6月3日 福州 18206067704（郑经理） 2016年6月14、15日 广州 15013005566(李经理) 2016年6月15日 &nbsp; 厦门 400-661-8788 2016年6月15日 &nbsp; 汕头 18659772068（杨经理） 2016年6月16日 &nbsp; 深圳 15889641140(黄经理) 2016年6月17日 &nbsp; 漳州 15160077051（吕经理） 更多沙龙培训会（待定），参会预约咨询：400-661-8788 【精彩回顾】5月份第一页培训会概览： 2016年5月5 日——漳州专场 外贸电子商务研讨培训会（漳州专场）在漳州万达嘉华酒店举行，由第一页营销总监曾辉先生担任培训讲师。 &nbsp; 2016年5月12日——“漳州芒果帮”专场 利用Google开发客户主题培训会“漳州芒果帮”专场，由第一页市场副总监杨扬担任培训讲师。 2016年5月17日——深圳专场 数字化营销主题培训会在深圳圣廷苑酒店举行，由第一页总经理孙荣耀先生担任培训讲师。 2016年5月18日——德化电子商务创业园专场 Google开发海外客户主题培训会走进中国瓷都·德化电子商务创业园。由第一页市场副总监杨扬担任讲师。 2016年5月19日——广州专场 外贸企业互联网营销主题研讨会(广州专场)在广州中心皇冠假日酒店举办，由第一页广东区域总监李木担任讲师。 &nbsp;</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B54%E6%9C%88%E7%BA%BF%E4%B8%8B%E5%88%86%E4%BA%AB%E4%BA%A4%E6%B5%81%E5%9F%B9%E8%AE%AD%E2%80%94%E2%80%949%E5%9C%BA%EF%BC%8C%E6%B1%87%E8%81%9A%E8%BF%91%E5%8D%83%E5%90%8D%E5%A4%96%E8%B4%B8%E4%BA%BA_n144" class="news-img"><img src="/static/images/news/0926879966daf83c921c98bc6a1c00d7.JPG" alt="第一页4月线下分享交流培训——9场，汇聚近千名外贸人"></a>
                    <span class="news-date">16-06-30</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B54%E6%9C%88%E7%BA%BF%E4%B8%8B%E5%88%86%E4%BA%AB%E4%BA%A4%E6%B5%81%E5%9F%B9%E8%AE%AD%E2%80%94%E2%80%949%E5%9C%BA%EF%BC%8C%E6%B1%87%E8%81%9A%E8%BF%91%E5%8D%83%E5%90%8D%E5%A4%96%E8%B4%B8%E4%BA%BA_n144"><em>第一页4月线下分享交流培训——9场，汇聚近千名外贸人</em></a>
                    <p>2016年4月，9场外贸电子商务研讨培训会议分别在厦门、泉州、福州、汕头、广州陆续举行，会议核心为《Google高效营销——全球买家开发系列培训课程》的开展。近千名外贸行业精英人才汇聚，学习外贸新思维、Google海外营销策略以及分享交流行业经验。内容涵盖了外贸互联网新思维运用、Google数字营销、Google AdWords实操、网站内容营销等前沿的外贸海外营销知识以及实操干货培训。 &nbsp; 2016年4月6日——厦门Google AdWords体验中心专场 Google AdWords体验中心专场《数字营销，Google AdWords实操培训》。由第一页技术总监戴永担任讲师。 2016年4月7日——泉州专场 《数字营销，Google AdWords实操培训》在泉州万达文化酒店举办。由第一页技术总监戴永担任讲师。 2016年4月8日——福州企业专场 第一页外贸电子商务研讨培训会议走进福州北半球服装有限公司。由第一页营销总监曾辉以及第一页技术总监戴永担任讲师，分享内容包括外贸互联网新思维运用，Google数字营销思维与方法。 2016年4月8日，泉州专场 《Google大数据开发海外买家》泉州外贸圈企业专场培训，由第一页高级经理杨扬担任讲师。 2016年4月12日——厦门企业专场 《洞察买家思维与“蜘蛛”思维的网站内容营销》云聪网络科技公司企业专场培训。由第一页运营总监丁娟担任讲师。 2016年4月13日——泉州专场 《洞察买家思维与“蜘蛛”思维的网站内容营销》泉州万达文化酒店专场分享会。由第一页运营总监丁娟担任讲师。 2016年4月13日——汕头专场 第一页外贸电子商务研讨培训会议首次走进经济特区汕头 汕头君悦大厦外贸企业专场，由第一页高级经理杨扬担任讲师，分享外贸新思维运用以及Google开发海外客户战略。 2016年4月14日——厦门Google AdWords体验中心专场 《洞察买家思维与“蜘蛛”思维的网站内容营销》Google AdWords体验中心专场培训。由第一页运营总监丁娟担任讲师。 2016年4月20日——广州专场 《如何借助互联网提升企业战斗力》广州中心皇冠假日酒店专场培训会议。由第一页广东区域总监李木担任讲师。 5月培训即将陆续开展，敬请期待！会议咨询；400-666-7710 &nbsp;&nbsp;400-661-8788</p>
                </span></li>
              <li class="col-sm-3 col-xs-6 wow fadeIn animated animated" style="visibility: visible; animation-name: fadeIn;"><span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%BB%A3%E8%A1%A8%E8%B0%B7%E6%AD%8C%E5%8E%A6%E9%97%A8%E5%87%BA%E5%B8%AD2016%E5%8E%A6%E9%97%A8%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E5%8D%83%E4%BA%BA%E8%AE%BA%E5%9D%9B%E5%A4%A7%E4%BC%9A_n143" class="news-img"><img src="/static/images/news/f58319fdac73fcf8caff85e58bb5fd16.jpg" alt="第一页代表谷歌厦门出席2016厦门创新创业千人论坛大会"></a>
                    <span class="news-date">16-04-15</span>
                    <a href="https://www.dyyseo.com/%E7%AC%AC%E4%B8%80%E9%A1%B5%E4%BB%A3%E8%A1%A8%E8%B0%B7%E6%AD%8C%E5%8E%A6%E9%97%A8%E5%87%BA%E5%B8%AD2016%E5%8E%A6%E9%97%A8%E5%88%9B%E6%96%B0%E5%88%9B%E4%B8%9A%E5%8D%83%E4%BA%BA%E8%AE%BA%E5%9D%9B%E5%A4%A7%E4%BC%9A_n143"><em>第一页代表谷歌厦门出席2016厦门创新创业千人论坛大会</em></a>
                    <p>&nbsp; &nbsp; 2016年4月13日上午，由厦门市人民政府指导，厦门市发改委、厦门市科技局、厦门日报社等十几个部委办局联合主办的“2016厦门创新创业千人论坛大会”在厦门国际会展中心举行。第一页网络科技代表谷歌厦门出席本次论坛大会。第一页市场总监叶荣生先生作为谷歌厦门创业精英代表亮相论坛大会。 &nbsp; &nbsp; &nbsp; 本次千人论坛，创投大咖、优秀创客云集,是厦门拥抱各路创客们的一场大联欢也是创新创业者互相交流促进的思想盛宴。业界大咖相继在会上分享其创业心路历程和对创业“风口”的看法；论坛还邀请了多位在多个领域表现优异的创客，现身说法。在“创新创业精英亮相”环节，谷歌厦门代表——第一页市场总监叶荣生先生在论坛上表示，谷歌厦门未来三年内的计划是为福建的3000家企业增长10亿美元线上的出口额，为福建培养5000名互联网营销人才，这也是第一页运营的厦门Google AdWords体验中心落地厦门的主要的目标。 &nbsp;第一页市场总监叶荣生先生亮相论坛发表讲话 &nbsp; &nbsp; &nbsp; 厦门Google AdWords体验中心将为更多的中小企业以及初创企业提供咨询与服务，帮助推进厦门创新创业的萌发与进步。</p>
                </span></li>
              <div class="clearfix"></div>
            </ul>
            <div class="clearfix"></div>
          </div>
          <!--<ul class="page_num">-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1">首页</a></li>-->
            <!--<li><p>1</p></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_2" class="pages underline">2</a></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_3" class="pages underline">3</a></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_4" class="pages underline">4</a></li>-->
            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_5" class="pages underline">5</a></li>-->

            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_2" class="pages">&gt;&gt;</a></li>-->

            <!--<li><a href="https://www.dyyseo.com/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83_nc1_5">末页</a></li>-->
            <!--<span>共<p>5</p>页</span>-->
          <!--</ul>-->
        </div>
        <div class="clearfix"></div>
      </div>

    </div>
</template>

<script>
  import articleHead from '../common/articleHead.vue'
  import { data } from '../../assets/data.js'

	export default {
		name: 'newsList',
    components: {
      articleHead
    },
		data () {
			return {
				title : '新闻中心',
        data : data.news
      }
		},
    created(){
//			var pageNo = parseInt(this.$route.params.pageNo);
//      this.title = data.server[id].title;
//      this.content = data.server[id].content
    }
	}
</script>

<style scope>
  .news-img{width: 100%}
</style>
