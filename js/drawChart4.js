am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // create chart
    var chart = am4core.create("chartdiv4", am4charts.TreeMap);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    chart.data = [{
      
      name: "first",
      children: [
        {
          name: "No",
          value: 58
        },
        
      ]},{

      name : "second",
        children: [
          {
            name: "Not clear",
            value: 26
          }
        ]
      },
      {
      
        name: "third",
        children: [
          
          {
            name: "Women only",
            value: 14
          }
        ]},
        {
      
          name: "forth",
          children: [
            
            {
                name: "Men only",
                value: 2
              }
          ]}
    ];
    
    chart.colors.step = 2;
    
    // define data fields
    chart.dataFields.value = "value";
    // chart.dataFields.name = "name";
    chart.dataFields.children = "children";
    
    chart.zoomable = false;
    var bgColor = new am4core.InterfaceColorSet().getFor("background");
    
    var title = chart.titles.create();
    title.text = "Does gender discrimination occur at your \n news organization?";
    title.fontSize = 25;
    title.marginTop = 20;
    title.marginBottom = 20;

    // level 0 series template
    var level0SeriesTemplate = chart.seriesTemplates.create("0");
    var level0ColumnTemplate = level0SeriesTemplate.columns.template;
    
    level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
    level0ColumnTemplate.fillOpacity = 0;
    level0ColumnTemplate.strokeWidth = 4;
    level0ColumnTemplate.strokeOpacity = 0;
    
    // level 1 series template
    var level1SeriesTemplate = chart.seriesTemplates.create("1");
    var level1ColumnTemplate = level1SeriesTemplate.columns.template;
    
    level1SeriesTemplate.tooltip.animationDuration = 0;
    level1SeriesTemplate.strokeOpacity = 1;
    
    level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10)
    level1ColumnTemplate.fillOpacity = 1;
    level1ColumnTemplate.strokeWidth = 4;
    level1ColumnTemplate.stroke = bgColor;
    
    var bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
    bullet1.locationY = 0.5;
    bullet1.locationX = 0.5;
    bullet1.label.text = "{name}";
    bullet1.label.fill = am4core.color("#ffffff");
    
    chart.maxLevels = 2;
    
    }); // end am4core.ready()