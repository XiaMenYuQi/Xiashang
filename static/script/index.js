import $ from 'jquery'

$(function(){
  //nav-fixed
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

//banner

  // $('.flexslider01').flexslider({
  //   directionNav: true,
  //   pauseOnAction: false
  // });
  //
  //
  // $('.flexslider01-s').flexslider({
  //   directionNav: true,
  //   pauseOnAction: false
  // });
  //
  // $('.flexslider02').flexslider({
  //   directionNav: true,
  //   pauseOnAction: false
  // });


//index-work

  var spotlight = {
    // the opacity of the "transparent" images - change it if you like
    opacity : 0.6,
    /*the vars bellow are for width and height of the images so we can make
     the &lt;li&gt; same size */
    imgWidth : $('.spotlightWrapper ul li').find('img').width(),
    imgHeight : $('.spotlightWrapper ul li').find('img').height()

  };

  //set the width and height of the list items same as the images
  $('.spotlightWrapper ul li').css({ 'width' : spotlight.imgWidth, 'height' : spotlight.imgHeight });

  //when mouse over the list item...
  $('.spotlightWrapper ul li').hover(function(){

    //...find the image inside of it and add active class to it and change opacity to 1 (no transparency)
    $(this).find('img').addClass('active').css({ 'opacity' : 1});

    //get the other list items and change the opacity of the images inside it to the one we have set in the spotlight array
    $(this).siblings('li').find('img').css({'opacity' : spotlight.opacity}) ;

    //when mouse leave...
  }, function(){

    //... find the image inside of the list item we just left and remove the active class
    $(this).find('img').removeClass('active');

  });

  //when mouse leaves the unordered list...
  $('.spotlightWrapper ul').bind('mouseleave',function(){
    //find the images and change the opacity to 1 (fully visible)
    $(this).find('img').css('opacity', 1);
  });



  $(".spotlightWrapper li .light-active").hide();
  $(".spotlightWrapper li").hover(function(){
    $(this).find(".light-active").toggle();
  });


  //faq-left
  $(".subNav").click(function(){
    $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
    $(this).next(".navContent").slideToggle(500).siblings(".navContent").slideUp(500);
  });
//contact-tab
  //Horizontal Tab
  // $('#parentHorizontalTab').easyResponsiveTabs({
  //   type: 'default', //Types: default, vertical, accordion
  //   width: 'auto', //auto or any width like 600px
  //   fit: true, // 100% fit in a container
  //   tabidentify: 'hor_1', // The tab groups identifier
  //   activate: function(event) { // Callback function if tab is switched
  //     var $tab = $(this);
  //     var $info = $('#nested-tabInfo');
  //     var $name = $('span', $info);
  //     $name.text($tab.text());
  //     $info.show();
  //   }
  // });
  //
  // // Child Tab
  // $('#ChildVerticalTab_1').easyResponsiveTabs({
  //   type: 'vertical',
  //   width: 'auto',
  //   fit: true,
  //   tabidentify: 'ver_1', // The tab groups identifier
  //   activetab_bg: '#fff', // background color for active tabs in this group
  //   inactive_bg: '#F5F5F5', // background color for inactive tabs in this group
  //   active_border_color: '#c1c1c1', // border color for active tabs heads in this group
  //   active_content_border_color: '#5AB1D0' // border color for active tabs contect in this group so that it matches the tab head border
  // });
  //
  // //Vertical Tab
  // $('#parentVerticalTab').easyResponsiveTabs({
  //   type: 'vertical', //Types: default, vertical, accordion
  //   width: 'auto', //auto or any width like 600px
  //   fit: true, // 100% fit in a container
  //   closed: 'accordion', // Start closed if in accordion view
  //   tabidentify: 'hor_1', // The tab groups identifier
  //   activate: function(event) { // Callback function if tab is switched
  //     var $tab = $(this);
  //     var $info = $('#nested-tabInfo2');
  //     var $name = $('span', $info);
  //     $name.text($tab.text());
  //     $info.show();
  //   }
 });




//
// $(window).load(function(){
//
//   $("#flexiselDemo3").flexisel({
//     visibleItems: 4,
//     animationSpeed: 2000,
//     autoPlay: true,
//     autoPlaySpeed: 5000,
//     pauseOnHover: true,
//     enableResponsiveBreakpoints: true,
//     responsiveBreakpoints: {
//       portrait: {
//         changePoint:480,
//         visibleItems: 1
//       },
//       landscape: {
//         changePoint:640,
//         visibleItems: 2
//       },
//       tablet: {
//         changePoint:768,
//         visibleItems: 3
//       }
//     }
//   });
//
//   $("#flexiselDemo4").flexisel({
//     visibleItems: 4,
//     animationSpeed: 2000,
//     autoPlay: true,
//     autoPlaySpeed: 5000,
//     pauseOnHover: true,
//     enableResponsiveBreakpoints: true,
//     responsiveBreakpoints: {
//       portrait: {
//         changePoint:480,
//         visibleItems: 1
//       },
//       landscape: {
//         changePoint:640,
//         visibleItems: 2
//       },
//       tablet: {
//         changePoint:768,
//         visibleItems: 3
//       }
//     }
//   });
//
// })






