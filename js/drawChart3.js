am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("chartdiv3", am4charts.PieChart);
    
    // Add data
    chart.data = [
        { group: "Yes", cases: 41 },
        { group: 'No', cases: 38 },
        { group: 'uncertain', cases: 21 },
        
    ];
    
    var title = chart.titles.create();
    title.text = "Have you witnessed an editor making assignments to cover \n the protests based on gender?";
    title.fontSize = 25;
    title.marginTop = 20;
    title.marginBottom = 20;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "cases";
    pieSeries.dataFields.category = "group";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.alignLabels = false;  //prevent out margin
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;   //show to fade in effect
    pieSeries.hiddenState.properties.startAngle = -90;
    
    }); // end am4core.ready()