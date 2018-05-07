// $(window).ready(
//   function(){
//     if(confirm ("CTY13 現正報名中！ 立即前往CTY13頁面觀看最新資訊!")){　       
//     window.open("https://goo.gl/wK1PfY");  　 
//   }
//     }
// );


$(window).scroll(function(evt) {
  if ($(window).scrollTop() > 0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");

});


// 超連結效果

$(function(){
	
	$(".p1").click(function(){
$("html,body").animate({scrollTop:675},900);
		return false;
	});
});

$(".p2").click(function(){
$("html,body").animate({scrollTop:1360},900);
		return false;
	});

$(".p3").click(function(){
$("html,body").animate({scrollTop:2580},900);
		return false;
	});

$(".p4").click(function(){
$("html,body").animate({scrollTop:3366},900);
		return false;
	});


$(".p5").click(function(){
$("html,body").animate({scrollTop:4191},900);
		return false;
	});

$(".p6").click(function(){
$("html,body").animate({scrollTop:5028.88},900);
		return false;
	});

$(".p7").click(function(){
$("html,body").animate({scrollTop:6656.25},900);
		return false;
	});



// 課程介紹

$(".cs").mouseenter(
  function() {
    $(this).css("background", "rgba(255,255,255,0.5)")
    
  }
);

$(".cs").mouseleave(
  function() {
    $(this).css("background", "rgba(255,255,255,0)")
  }
);






// 實習計畫區
$(".intern").mouseenter(
  function() {
    $(this).css("background-color", "#fdf0ef");
    $(this).css("color", "#000");

  }
);
$(".intern").mouseleave(
  function() {
    $(this).css("background-color", " #3f2d2c");
    $(this).css("color", "#EEF8FA");

  }
);

// 提攜人
$(".i1").click(
  function() {
    $(".discription_img").css("background-image", "url(https://i.imgur.com/ZBaOszs.jpg");
    $(".discription_text").text("提攜人計畫為小玉山實習生向具有豐富經驗的企業家學習，為期一年的計畫希望藉由雙向溝通交流能使實習生提升就業準備能力、開拓國際視野並學習企業家宏觀的思維。提攜人計畫援引提攜人豐厚的實務經驗與資源，對實習生進行諮詢與輔導，諸如：生涯規劃、企業實習、求職與就業準備、多元能力發展、舉行職涯相關演講、經驗分享、座談、餐敘、企業參訪、擔任一日助理等，協助實習生提早適應工作環境。以「每月至少一次」的見面形式進行，讓提攜人成為實習生未來路途上的一盞明燈，並能與提攜人培養終身的關係，實踐一日為師、終身為父的精神。");

  });

// FVY

$(".i2").click(
  function() {
    $(".discription_img").css("background-image", "url(https://i.imgur.com/Lz7v3WP.jpg)");
    $(".discription_text").text("第三屆玉山跨視際青年論壇（FVY）分為上下半場。上半場座談會介紹人工智慧於金融、科技、生技三大產業的影響；下半場分桌交流透過科技新創、電子商務、資訊科技、金融科技四大領域分享其工作內容、未來發展以及進入管道。");

  });

$(".i3").click(
  function() {
    $(".discription_img").css("background-image", "url(https://i.imgur.com/cXR2qTL.jpg)");
    $(".discription_text").text("邁入第11年的CTY，是以創新創業為主軸的營隊，由當屆實習生負責籌辦，從主題制定、活動發想、宣傳招生、金錢管理到活動實際執行。最完整的大型專案實作經驗讓你領導力、執行力，趨勢洞察力UPUP!");

  });

$(".i4").click(
  function() {
    $(".discription_img").css("background-image", "url(https://i.imgur.com/YquxR8w.jpg)");
    $(".discription_text").text("「溝通實務」、「面試技巧」、「履歷撰寫」、「設計思考」等內容豐富的課程，由小玉山的幹事群邀請來自不同領域的專家為實習生上課，使實習生在團隊合作、舉辦活動時能夠更加流暢 。");

  });

$(".i5").click(
  function() {
    $(".discription_img").css("background-image", "url(https://i.imgur.com/QhO1Khu.jpg)");
    $(".discription_text").text("與北京大學進行學術交流，至各式企業參訪，包含騰訊、果殼網、搜狗等企業，踏出台灣增廣國際視野。玉山科技協會在全球共有14個分會，這些據點都有可能成為當年度的海外參訪地點 ！");

  });

$(".i6").click(
  function() {
    $(".discription_img").css("background-image", "url(https://github.com/ymj-cty12/cty12/blob/master/img%20for%20dead/i6.jpg?raw=true)");
    $(".discription_text").text("小玉山的實習生每週需至協會排班，此為實習生的基本義務，並在排班時也可以更加了解協會內部處理事務嚴謹且高效率的的方式及制度!");

  });

$(".i7").click(
  function() {
   
    $(".discription_img").css("background-image", "url(https://github.com/ymj-cty12/cty12/blob/master/img%20for%20dead/i7.jpg?raw=true)");
    $(".discription_text").text("產業界最新的趨勢論壇，舉凡Fintech、全球併購到數位智能每個月不同的主題論壇，讓你在協辦的同時也能夠對於產業趨勢有著更深入的了解！");

  });




var s = skrollr.init();