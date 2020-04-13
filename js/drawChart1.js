am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        choice: "Yes",
        value: 51
      },
      {
        choice: "No",
        value: 32
      },
      {
        choice: "Can't remember",
        value: 17
      }
    ];
    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = 180;
    chart.endAngle = 360;  
    
    var title = chart.titles.create();
    title.text = "Response to the question, “were the insults gender-based?” ";
    title.fontSize = 25;
    title.marginTop = 20;
    title.marginBottom = 20;
    

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "choice";
    
    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;
    
    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;
    
    chart.legend = new am4charts.Legend();
    
    }); // end am4core.ready()