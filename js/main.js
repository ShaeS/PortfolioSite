"use strict";

$(document).ready(function () {

  /////////////////IMAGE FLYIN//////////////////


  $(".homepic img").hide().fadeIn();

  /////////////////COLOR CHANGES//////////////////


  var colors = ["#009933", "#186ff4", "#ac3973", "#ff9900", "#33cccc", "#ff3333", "#7C71C5"];
  var colorNumber = Math.floor(Math.random() * (colors.length));

  $(function () {
    $("span").css("color", colors[colorNumber]);
    $(".titledivider").css("background-color", colors[colorNumber]);
    $("footer").css("background-color", colors[colorNumber]);
    $(".social").hover(function () {
      $(this).css("color", colors[colorNumber])
    }, function () {
      $(this).css("color", "#f0f0f0")
    });
    $(".hollowbtn").css({
      "border": "solid 2px " + colors[colorNumber],
      "color": colors[colorNumber]
    });
    $(".fullbtn").css("background", colors[colorNumber]);
    $("#about h2").css("color", colors[colorNumber]);
    $(".contactform form textarea").focusin(function () {
      $(this).css({
        "border-bottom": "2px solid " + colors[colorNumber],
        "border-left": "1px solid " + colors[colorNumber],
        "border-right": "1px solid " + colors[colorNumber]
      });
    }).focusout(function () {
      $(this).css({
        "border-bottom": "2px solid #8e8e8e",
        "border-left": "1px solid #8e8e8e",
        "border-right": "1px solid #8e8e8e"
      });
    });
    $(".contactform form input").focusin(function () {
      $(this).css({
        "border-bottom": "2px solid " + colors[colorNumber]
      });
    }).focusout(function () {
      $(this).css({
        "border-bottom": "2px solid #8e8e8e"
      });
    });
  });



  /////////////////BUTTON HOVER EFFECTS//////////////////


  $(function () {
    $('.hollowbtn').hover(function () {
      $(this).html('Go To Website<i style="font-size:1em;padding: 0 0 2.75px 0.5em;" class="fa fa-arrow-right"></i>');
    }, function () {
      $(this).html('Go To Website');
    });
  })

  $(function () {
    $('.fullbtn').hover(function () {
      $(this).html('<i style="font-size:1em;padding: 0 0.5em 0px 0;" class="fa fa-envelope-o"></i>Send');
    }, function () {
      $(this).html('Send');
    });
  })



  /////////////////////FORM SUBMIT///////////////////////

  $('#formbtn').click(function (event) {
    event.preventDefault();

    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if (name != "" && email != "" && message != "") {
      $.ajax({
        url: "./php/mailer.php",
        type: "POST",
        dataType: "html",
        data: {
          name: name,
          email: email,
          message: message
        },
        success: function () {
          $("#form-messages").removeClass("error");
          $("#form-messages").addClass("success");
          $("#form-messages").text("Thank you! Your message has been sent!");

          $('#name').val('');
          $('#email').val('');
          $('#message').val('');
        },
        fail: function () {
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
    topSpacing: 0,
  });


  $('header').on('sticky-start', function () {
    $('header').addClass('sticky-header');
  }).on('sticky-end', function () {
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
      'scrollTop': $target.offset().top - 100
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#menu-center ul li a').removeClass("selected").css({
          "color": "#343434",
          "font-size": "1em"
        });
        currLink.addClass("selected").css({
          "color": colors[colorNumber],
          "font-size": "1.1em"
        });
      } else {
        currLink.removeClass("selected");
      }
    });
  }



  /////////////////////SKILL CHARTS///////////////////////

  function doughnutData(value, remain, idnum) {
    var doughnutData = [
      {
        value: value,
        color: colors[colorNumber],
        label: "True"
          },
      {
        value: remain,
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

    $(window).scroll(function () {
      if (isScrolledIntoView(idnum)) {
        if (inView) {
          return;
        }
        inView = true;

        var ctx = $(idnum).get(0).getContext("2d");
        var myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
          animation: true,
          responsive: true,
          showTooltips: false,
          percentageInnerCutout: 70,
          segmentShowStroke: false,
          animationEasing: "easeOutSine",
          animationSteps: 40,
          onAnimationComplete: function () {

            var canvasWidthvar = $('.canvas').width();
            var canvasHeight = $('.canvas').height();
            var constant = 114;
            var fontsize = (canvasHeight / constant).toFixed(2);

            ctx.font = fontsize + "em Lato";
            ctx.textBaseline = "middle";
            var total = 0;
            $.each(doughnutData, function () {
              total += parseInt(this.value, 10);
            });
            var tpercentage = ((doughnutData[0].value / total) * 100).toFixed(0) + "%";
            var textWidth = ctx.measureText(tpercentage).width;

            var txtPosx = Math.round((canvasWidthvar - textWidth) / 2);
            ctx.fillText(tpercentage, txtPosx, canvasHeight / 2);
          }
        });
      } else {
        inView = false;
      }
    });
  }


  doughnutData(92, 8, "#html");
  doughnutData(89, 11, "#css");
  doughnutData(80, 20, "#java");
  doughnutData(83, 17, "#jquery");
  doughnutData(71, 29, "#php");
  doughnutData(73, 27, "#sql");
  doughnutData(82, 18, "#photoshop");
  doughnutData(76, 24, "#illustrator");

});