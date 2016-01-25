$(document).ready(function() {
  
  
  
  
/////////////////COLOR CHANGES//////////////////
  
  
var colors = ["#990000", "#009933","#0065ff","#ac3973","#ff9900","#33cccc"];
var colorNumber = Math.floor(Math.random() * (colors.length));
  
function changeColors() {
  $("span").css("color", colors[colorNumber]);
  $(".titledivider").css("background-color", colors[colorNumber]);
  $("footer").css("background-color", colors[colorNumber]);
  $(".hollowbtn").css({"border": "solid 2px " + colors[colorNumber], "color": colors[colorNumber]});
  $(".fullbtn").css("background", colors[colorNumber]);
  $("#about h2").css("color", colors[colorNumber]);
  $(".contactform form textarea").focusin(function() {
    $(this).css({
      "border-bottom": "2px solid " + colors[colorNumber],
      "border-left": "1px solid " + colors[colorNumber],
      "border-right": "1px solid " + colors[colorNumber]
    });
  }).focusout(function() {
    $(this).css({
      "border-bottom": "2px solid #8e8e8e",
      "border-left": "1px solid #8e8e8e",
      "border-right": "1px solid #8e8e8e"
    });
  });
  $(".contactform form input").focusin(function() {
    $(this).css({
      "border-bottom": "2px solid " + colors[colorNumber]
    });
  }).focusout(function() {
      $(this).css({
        "border-bottom": "2px solid #8e8e8e"
      });
  });
}
    
changeColors();
  
  
  
  
/////////////////BUTTON HOVER EFFECTS//////////////////

  
$(function(){
  $('.hollowbtn').hover(function(){
    $(this).html('Go To Website<i style="font-size:1em;padding: 0 0 1.75px 0.5em;" class="fa fa-caret-right"></i>');
  }, function(){
    $(this).html('Go To Website'); 
  });
})

$(function(){  
  $('.fullbtn').hover(function(){
    $(this).html('Send<i style="font-size:1em;padding: 0 0 0px 0.5em;" class="fa fa-envelope-o"></i>');
  }, function(){
    $(this).html('Send'); 
  });
})
  
  
  
  
  
/////////////////////FORM SUBMIT///////////////////////

$('#formbtn').click(function(event) {
  event.preventDefault();
  
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  
  if (name != "" && email != "" && message != "") {
  $.ajax({
    url: "./php/mailer.php",
    type:"POST",
    dataType: "html",
    data: {
      name: name,
      email: email,
      message: message
    },
    success: function() {
      $("#form-messages").removeClass("error"); 
      $("#form-messages").addClass("success"); 
      $("#form-messages").text("Thank you! Your message has been sent!");
      
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    },
    fail: function() {
      $("#form-messages").removeClass("success"); 
      $("#form-messages").addClass("error"); 
      $("#form-messages").text("There was an error!"); 
    }
  });
  } else {
     $("#form-messages").removeClass("success"); 
      $("#form-messages").addClass("error"); 
      $("#form-messages").text("Please fill out the fields!"); 
  }

});  
  


/////////////////////STICKY HEADER///////////////////////
  
$('header').sticky({
  topSpacing:0,
});
  

$('header').on('sticky-start', function() {
  $('header').addClass('sticky-header');
}).on('sticky-end', function() { 
  $('header').removeClass('sticky-header'); 
});
  
  

  
/////////////////////SMOOTH SCROLLING///////////////////////

$(document).on("scroll", onScroll);

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
        $(this).removeClass('selected');
    })
    $(this).addClass('selected');

    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-100
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu-center ul li a').removeClass("selected").css("color","#343434");
          currLink.addClass("selected").css("color",colors[colorNumber]);
      }
      else{
          currLink.removeClass("selected");
      }
  });
}
  
  
/////////////////////SCROLLME///////////////////////
  

  
  
  
  
  
/////////////////////SKILL CHARTS///////////////////////
 
function doughnutHTML() {
  var doughnutData = [
          {
            value: 84,
            color:colors[colorNumber],
            label: "True"
          },
          {
            value: 16,
            color: "#ededed",
            label: "False"
          }
        ];
  
  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#html')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#html').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}

  
function doughnutCSS() {
var doughnutData = [
				{
					value: 81,
					color:colors[colorNumber],
					label: "True"
				},
				{
					value: 19,
					color: "#ededed",
					label: "False"
				}
			];

  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#css')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#css').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}

  
  function doughnutjava() {
  var doughnutData = [
          {
            value: 65,
            color:colors[colorNumber],
            label: "True"
          },
          {
            value: 35,
            color: "#ededed",
            label: "False"
          }
        ];
  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#java')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#java').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}


  
function doughnutJQuery() {
var doughnutData = [
				{
					value: 73,
					color:colors[colorNumber],
					label: "True"
				},
				{
					value: 27,
					color: "#ededed",
					label: "False"
				}
			];

  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#jquery')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#jquery').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}

  
function doughnutPHP() {
  var doughnutData = [
          {
            value: 64,
            color:colors[colorNumber],
            label: "True"
          },
          {
            value: 36,
            color: "#ededed",
            label: "False"
          }
        ];

  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#php')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#php').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}


  
function doughnutSQL() {
var doughnutData = [
				{
					value: 68,
					color:colors[colorNumber],
					label: "True"
				},
				{
					value: 32,
					color: "#ededed",
					label: "False"
				}
			];
  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#sql')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#sql').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}

  
function doughnutphotoshop() {
  var doughnutData = [
          {
            value: 78,
            color:colors[colorNumber],
            label: "True"
          },
          {
            value: 22,
            color: "#ededed",
            label: "False"
          }
        ];
  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#photoshop')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#photoshop').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}


  
function doughnutillustrator() {
var doughnutData = [
				{
					value: 72,
					color:colors[colorNumber],
					label: "True"
				},
				{
					value: 28,
					color: "#ededed",
					label: "False"
				}
			];
  var inView = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#illustrator')) {
      if (inView) { return; }
        inView = true;

    var ctx = $('#illustrator').get(0).getContext("2d");
    var myDoughnut = new Chart(ctx).Doughnut(doughnutData,{
      animation:true,
      responsive: true,
      showTooltips: false,
      percentageInnerCutout : 70,
      segmentShowStroke : false,
      onAnimationComplete: function() {
      
      var canvasWidthvar = $('.canvas').width();
      var canvasHeight = $('.canvas').height();
      var constant = 114;
      var fontsize = (canvasHeight/constant).toFixed(2);

      ctx.font=fontsize +"em Lato";
      ctx.textBaseline="middle"; 
      var total = 0;
      $.each(doughnutData,function() {
          total += parseInt(this.value,10);
      });
      var tpercentage = ((doughnutData[0].value/total)*100).toFixed(0)+"%";
      var textWidth = ctx.measureText(tpercentage).width;
      
       var txtPosx = Math.round((canvasWidthvar - textWidth)/2);
      ctx.fillText(tpercentage, txtPosx, canvasHeight/2);
    }
  });
      } else {
        inView = false;  
      }
  });
}

  
  
doughnutHTML();
doughnutCSS();
doughnutjava();
doughnutJQuery();
doughnutPHP();
doughnutSQL();
doughnutphotoshop();
doughnutillustrator();
  
});