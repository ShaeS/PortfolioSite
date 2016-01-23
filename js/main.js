$(document).ready(function() {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
function doughnutHTML() {
  var doughnutData = [
          {
            value: 84,
            color:"#990000",
            label: "True"
          },
          {
            value: 16,
            color: "#ededed",
            label: "False"
          }
        ];

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
}

  
function doughnutCSS() {
var doughnutData = [
				{
					value: 81,
					color:"#990000",
					label: "True"
				},
				{
					value: 19,
					color: "#ededed",
					label: "False"
				}
			];

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
}
  
  function doughnutjava() {
  var doughnutData = [
          {
            value: 65,
            color:"#990000",
            label: "True"
          },
          {
            value: 35,
            color: "#ededed",
            label: "False"
          }
        ];

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
}

  
function doughnutJQuery() {
var doughnutData = [
				{
					value: 73,
					color:"#990000",
					label: "True"
				},
				{
					value: 27,
					color: "#ededed",
					label: "False"
				}
			];

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
}
  
function doughnutPHP() {
  var doughnutData = [
          {
            value: 64,
            color:"#990000",
            label: "True"
          },
          {
            value: 36,
            color: "#ededed",
            label: "False"
          }
        ];

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
}

  
function doughnutSQL() {
var doughnutData = [
				{
					value: 68,
					color:"#990000",
					label: "True"
				},
				{
					value: 32,
					color: "#ededed",
					label: "False"
				}
			];

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
}
  
function doughnutphotoshop() {
  var doughnutData = [
          {
            value: 78,
            color:"#990000",
            label: "True"
          },
          {
            value: 22,
            color: "#ededed",
            label: "False"
          }
        ];

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
}

  
function doughnutillustrator() {
var doughnutData = [
				{
					value: 72,
					color:"#990000",
					label: "True"
				},
				{
					value: 28,
					color: "#ededed",
					label: "False"
				}
			];

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