// d3.selectAll("#selDataset").on("c", getData)
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";
// const url = "./samples.json"

function optionChanged(selectedID) {

    bubblechart(selectedID);
    barchart(selectedID);
    metadata(selectedID);

}
// Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.


function init() {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
        console.log(data);
    let dropdownMenu = d3.select("#selDataset");
    let names = data.names;
    names.forEach(name => {
        dropdownMenu.append("option").property("value", name).text(name);
    })});
};


function bubblechart(ID) {
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
        console.log(data);
        
        let ID_filtered = data.samples.filter(sampleObj => sampleObj.id == ID
        );
        
        var trace = {
            x:ID_filtered[0].otu_ids,
            y:ID_filtered[0].sample_values,
            text: ID_filtered[0].otu_labels,
            mode: 'markers',
            marker: {
                size: ID_filtered[0].sample_values,
                color: ID_filtered[0].otu_ids,
                colorscale: 'Earth'
            }
        };
    
        var data = [trace];
    
        var layout = {
            title: 'Bubble Chart',
            showlegend: false,
            height: 600,
            width: 800
        };
    
        Plotly.newPlot("bubble", data, layout);
    });
    
}


// ------
// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// function barchart(ID) {
//     console.log(ID);
// }

function barchart(selectedID) {
    // Filter the data for the selected ID
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
        console.log(data);
        
        let ID_filtered = data.samples.filter(sampleObj => sampleObj.id == selectedID
        );
    
    // Create the trace for the horizontal bar chart
        let trace = {
            x: ID_filtered[0].otu_ids,
            y: ID_filtered[0].sample_values.slice(0,10),
            text: ID_filtered[0].otu_labels,
            type: "bar",
            orientation: "h"
        };

    // Create the data array for the plot
    let data = [trace];

    // Define the layout for the plot
    let layout = {
        title: `Top 10 OTUs for Individual ${selectedID}`
    };

    // Plot the chart
    Plotly.newPlot("bar", data, layout);

});
}

//  check parenthesis


// -------
// Display the sample's metadata, i.e., an individual's demographic information.
// Loop through each key-value pair from the metadata JSON object and create a text string.
// Append an html tag with that text to the #sample-metadata panel.


function metadata(ID) {
    console.log(ID);
}

// Get a reference to the #sample-metadata panel
const sampleMetadataPanel = document.getElementById('sample-metadata');

// Clear any existing content in the panel
sampleMetadataPanel.innerHTML = '';

// Loop through each key-value pair in the metadata object
for (const key in metadata) {
  if (metadata.hasOwnProperty(key)) {
    // Create a text string for the key-value pair
    const text = `${key}: ${metadata[key]}`;

    // Create a new paragraph element
    const p = document.createElement('p');
    
    // Set the text content of the paragraph
    p.textContent = text;

    // Append the paragraph to the #sample-metadata panel
    sampleMetadataPanel.appendChild(p);
  }
}

init();