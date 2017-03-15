// Create data array of values to visualize
var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];

// Create variable for the SVG
var svg = d3.select("body").append("svg")
	.attr("height","100%")
        .attr("width","100%");

// Select, append to SVG, and add attributes to rectangles for bar chart
svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
       	    .attr("class", "bar")
	    .attr("height", function(d, i) {return (d * 10)})   //.attr("height","250")
            .attr("width","40")
            .attr("x", function(d, i) {return i * 60;})    //.attr("x","25")
            .attr("y", function(d, i) {return 400 - (d * 10)})    //.attr("y","50")
	    //.attr("stroke", "black")
            //.attr("stroke-width", "5");


// Select, append to SVG, and add attributes to text
svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function(d) {return d;})
          .attr("class", "text")
	  .attr("x", function(d, i) {return (i * 60) + 20})
          .attr("y", function(d, i) {return 415 - (d * 10)});


//d3.json("myData.json", function(json) {
// code for D3 charts in here
//});
