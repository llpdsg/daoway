$(function () {
  //头部标签点击变色
  $(".change").click(function () {
    $(".change").removeClass("active")
    $(this).addClass("active")
  })
  $(".header-location").click(function () {
    $(".change").removeClass("active")
    $(".changecity").addClass("active")
  })
  //轮播图淡入淡出,小圆点
  function slide() {
    var i= 1
    var timer= setInterval(
      function () {
        $(".slide_img").removeClass("show")
        $(".slide_img" + i).addClass("show")
        $(".point").removeClass("show")
        $(".point" + i).addClass("show")
        i++
        $(".point").click(function () {
          var index= $(".over").index($(this))+ 1
          console.log(index)
          $(".slide_img").removeClass("show")
          $(".slide_img" + index).addClass("show")
          $(".over").removeClass("show")
          $(".point" + index).addClass("show")
          i= index
        })
        if (i==4) {
          i=1
        }
      }
      ,3000)
  }
  slide()

  // setInterval(
  //   function () {
  //     $(".slide_img1").fadeToggle()
  //   }, 6000)
  // setTimeout(
  //   function () {
  //     setInterval(
  //       function () {
  //         $(".slide_img2").fadeToggle()
  //       }, 6000)
  //   },3000)

  // var slide1= function () {
  //   $(".slide_img1").fadeOut()
  //   setTimeout(function () {
  //     $(".slide_img1").fadeIn()
  //     // slide1()
  //   },3000)
  // }
  // var slide2= setTimeout(
  //   function () {
  //     $(".slide_img2").fadeOut()
  //     setTimeout(function () {
  //       $(".slide_img2").fadeIn()
  //       // slide2()
  //     },3000)
  //   },3000)
  // setInterval(
  //   slide1, 3000
  // )
  // setInterval(
  //   slide2, 3000
  // )
  // setInterval(
  //   function () {
  //     $(".slide_img1").fadeOut()
  //     setTimeout(function () {
  //       $(".slide_img1").fadeIn()
  //     },6000)
  // },3000)
  // setInterval(
  //   function () {
  //     $(".slide_img2").fadeOut()
  //     setTimeout(function () {
  //       $(".slide_img2").fadeIn()
  //     },6000)
  // },6000)

  //二级菜单切换
  $(".item").mouseover(function () {
    $(this).addClass("act")
    $(".act>img").attr("src", "images/icon1.png")
    // $(".act>ul").css("display", "inline-block")
    var position= $(".act").position().top
    $(".act>ul").css("top", -position + "px")
  })
  $(".item").mouseout(function () {
    $(".act>img").attr("src", "images/right.png")
    // $(".act>ul").css("display", "none")
    $(this).removeClass("act")
  })
})