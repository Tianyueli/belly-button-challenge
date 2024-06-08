// d3.selectAll("#selDataset").on("c", getData)

let data;

const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";
// const url = "./samples.json"

d3.json(url).then(response => {
    data = response;
    console.log(response);
    let dropdownMenu = d3.select("#selDataset");
    let names = response.names
    // console.log(names);
    
    names.forEach(name => {
        dropdownMenu.append("option").property("value", name).text(name);
    });
    optionChanged(names[0]);
})

function optionChanged(selectedID) {

    bubblechart(selectedID);
    // barchart(selectedID);
    // metadata(selectedID);

}
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

function bubblechart(ID) {
    console.log(ID);
}


function bubblechart(ID) {
    // Assuming you have the necessary data for the bubble chart
    // Replace the sample data below with your actual data
    var trace = {
        x:data.otu_ids,
        y:data.sample_values,
        text: ['A', 'B', 'C', 'D'], // Sample otu_labels for text values
        mode: 'markers',
        marker: {
            size: [10, 20, 30, 40], // Sample sample_values for marker size
            color: [1, 2, 3, 4], // Sample otu_ids for marker colors
            colorscale: 'Earth' // You can choose a different colorscale
        }
    };

    var data = [trace];

    var layout = {
        title: 'Bubble Chart',
        showlegend: false,
        height: 600,
        width: 800
    };

    Plotly.newPlot(ID, data, layout);
}

// Call the function with the ID of the HTML element where you want to display the chart
bubblechart('yourDivId');



// Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.


function barchart(ID) {
    console.log(ID);
}

function metadata(ID) {
    console.log(ID);
}