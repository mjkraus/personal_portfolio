    // Build the chart
$('#skillOne').highcharts({
	colors: ["#292929", "#bababa"],
	chart: {
		width: 200,
        height: 200,
        spacingBottom: 25,
        backgroundColor: null,
        borderWidth: null,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
    },
    navigation: {
    	buttonOptions: {
    		enabled: false
        }
    },
  	credits: {
    	enabled: false,
  	},
    labels: {
    	enabled: false,
    },
    title: {
      	text: "100%",
      	verticalAlign: 'middle',
      	floating: true,
        style: {
            "fontFamily":'Roboto Condensed',
            "fontSize": "15px",
            "fontWeight": "normal",
            "textTransform": "uppercase",
            "color": "#292929"
        }
    },
    subtitle: {
    	text: 'HTML5',
    	floating: true,
    	verticalAlign: 'bottom',
        style: {
            "fontFamily":'Cormorant Garamond',
            "fontSize": "15px",
            "color": "#666666"
        }
    },
    tooltip: {
    	enabled: false
    },
    plotOptions: {
        pie: {
        	allowPointSelect: false,
        	innerSize: '75%',
        	cursor: 'pointer',
        	dataLabels: {
            enabled: false
        	},
        	borderWidth:0
        }
    },
    legend: {
    	enabled: false
    },
    series: [{
    	colorByPoint: true,
    	data: [{
          y: 100
        }, {
          y: 0
        }]
    }]

});

// SKILL TWO

$('#skillTwo').highcharts({
    colors: ["#292929", "#bababa"],
    chart: {
        width: 200,
        height: 200,
        spacingBottom: 25,
        backgroundColor: null,
        borderWidth: null,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
    },
    navigation: {
        buttonOptions: {
            enabled: false
        }
    },
    credits: {
        enabled: false,
    },
    labels: {
        enabled: false,
    },
    title: {
        text: "95%",
        verticalAlign: 'middle',
        floating: true,
        style: {
            "fontFamily":'Roboto Condensed',
            "fontSize": "15px",
            "fontWeight": "normal",
            "textTransform": "uppercase",
            "color": "#292929"
        }
    },
    subtitle: {
        text: 'CSS3',
        floating: true,
        verticalAlign: 'bottom',
        style: {
            "fontFamily":'Cormorant Garamond',
            "fontSize": "15px",
            "color": "#666666"
        }
    },
    tooltip: {
        enabled: false
    },
    plotOptions: {
        pie: {
            allowPointSelect: false,
            innerSize: '75%',
            cursor: 'pointer',
            dataLabels: {
            enabled: false
            },
            borderWidth:0
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        colorByPoint: true,
        data: [{
          y: 95
        }, {
          y: 0
        }]
    }]

});

// SKILL Three

$('#skillThree').highcharts({
	colors: ["#292929", "#bababa"],
	chart: {
		width: 200,
        height: 200,
        spacingBottom: 25,        
        backgroundColor: null,
        borderWidth: null,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
    },
    navigation: {
    	buttonOptions: {
    		enabled: false
        }
    },
  	credits: {
    	enabled: false,
  	},
    labels: {
    	enabled: false,
    },
    title: {
      	text: "80%",
      	verticalAlign: 'middle',
      	floating: true,
        style: {
            "fontFamily":'Roboto Condensed',
            "fontSize": "15px",
            "fontWeight": "normal",
            "textTransform": "uppercase",
            "color": "#292929"
        }
    },
    subtitle: {
    	text: 'JavaScript',
    	floating: true,
    	verticalAlign: 'bottom',
        style: {
            "fontFamily":'Cormorant Garamond',
            "fontSize": "15px",
            "color": "#666666"
        }    
    },
    tooltip: {
    	enabled: false
    },
    plotOptions: {
        pie: {
        	allowPointSelect: false,
        	innerSize: '75%',
        	cursor: 'pointer',
        	dataLabels: {
            enabled: false
        	},
        	borderWidth:0        	
        }
    },
    legend: {
    	enabled: false
    },
    series: [{
    	colorByPoint: true,
    	data: [{
          y: 80
        }, {
          y: 20
        }]
    }]

});

// SKILL FOUR

$('#skillFour').highcharts({
	colors: ["#292929", "#bababa"],
	chart: {
		width: 200,
        height: 200,
        spacingBottom: 25,        
        backgroundColor: null,
        borderWidth: null,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
    },
    navigation: {
    	buttonOptions: {
    		enabled: false
        }
    },
  	credits: {
    	enabled: false,
  	},
    labels: {
    	enabled: false,
    },
    title: {
      	text: "85%",
      	verticalAlign: 'middle',
      	floating: true,
        style: {
            "fontFamily":'Roboto Condensed',
            "fontSize": "15px",
            "fontWeight": "normal",
            "textTransform": "uppercase",
            "color": "#292929"
        }
    },
    subtitle: {
    	text: 'jQuery',
    	floating: true,
    	verticalAlign: 'bottom',
        style: {
            "fontFamily":'Cormorant Garamond',
            "fontSize": "15px",
            "color": "#666666"
        }    
    },    
    tooltip: {
    	enabled: false
    },
    plotOptions: {
        pie: {
        	allowPointSelect: false,
        	innerSize: '75%',
        	cursor: 'pointer',
        	dataLabels: {
            enabled: false
        	},
        	borderWidth:0        	
        }
    },
    legend: {
    	enabled: false
    },
    series: [{
    	colorByPoint: true,
    	data: [{
          y: 85
        }, {
          y: 15
        }]
    }]

});

// SKILL FIVE

$('#skillFive').highcharts({
	colors: ["#292929", "#bababa"],
	chart: {
		width: 200,
        height: 200,
        spacingBottom: 25,        
        backgroundColor: null,
        borderWidth: null,
        plotBackgroundColor: null,
        plotShadow: false,
        plotBorderWidth: 0,
        type: 'pie'
    },
    navigation: {
    	buttonOptions: {
    		enabled: false
        }
    },
  	credits: {
    	enabled: false,
  	},
    labels: {
    	enabled: false,
    },
    title: {
      	text: "100%",
      	verticalAlign: 'middle',
      	floating: true,
        style: {
            "fontFamily":'Roboto Condensed',
            "fontSize": "15px",
            "fontWeight": "normal",
            "textTransform": "uppercase",
            "color": "#292929"
        }
    },
    subtitle: {
    	text: 'Responsive Design',
    	floating: true,
    	verticalAlign: 'bottom',
        style: {
            "fontFamily":'Cormorant Garamond',
            "fontSize": "15px",
            "color": "#666666"
        }    
    }, 
    tooltip: {
    	enabled: false
    },
    plotOptions: {
        pie: {
        	allowPointSelect: false,
        	innerSize: '75%',
        	cursor: 'pointer',
        	dataLabels: {
            enabled: false
        	},
        	borderWidth:0        	
        }
    },
    legend: {
    	enabled: false
    },
    series: [{
    	colorByPoint: true,
    	data: [{
          y: 100
        }]
    }]

});



