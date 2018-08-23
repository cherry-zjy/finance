// var mainurl = "http://192.168.1.106/ZYJF/"
var mainurl = "http://zyjf.nbzzjr.com/"


function setCookie(name, value) {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

  if (arr = document.cookie.match(reg))

    return (arr[2]);
  else
    return null;
}

function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

$(function(){
	$('.content_2_box').css({
		position:'relative',
		opacity: 0,
		top: '90px',
	});
	$('.content_3_box').css({
		position:'relative',
		opacity: 0,
		top: '90px'
  });
  $('.content_4_box').css({
		position:'relative',
		opacity: 0,
		top: '90px'
	});


	$(window).scroll(function(){
		var sTop = $(document).scrollTop();
		if($('.content_2').offset().top - sTop < 400) {
			$('.content_2_box').animate({
				position:'absolute',
				opacity: 1,
				top: '50px',
			}, 1200)
		}
		if($('.content_3').offset().top - sTop < 400) {
			$('.content_3_box').animate({
				position:'absolute',
				opacity: 1,
				top: '50px'
			}, 1200)
    }
    if($('.content_4').offset().top - sTop < 400) {
			$('.content_4_box').animate({
				position:'absolute',
				opacity: 1,
				top: '50px'
			}, 1200)
		}
	})
})