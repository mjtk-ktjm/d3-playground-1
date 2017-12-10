// d3.selectAll(".item:nth-child(2)").text("good2")
// d3.selectAll(".item:nth-child(odd)").text("good2")
// d3.selectAll(".item:nth-child(3n)").html('<strong>selection</strong>')

// adding a new div inside of 3rd-x child
// d3.selectAll(".item:nth-child(3n)")
//   .append('div')
//   .html('<strong>new selection</strong>')

// instead, insert at element 3
// d3.select('#chart')
//   .insert('div', ':nth-child(3)')
//   .html('<strong>Added here</strong>')

// // delete the 3rd element from DOM
// d3.select('#chart .item:nth-child(3)')
//   .remove()

// attr
// d3.selectAll('.item')
//   .attr('class', 'highlight')

// don't replace the class, but add a second class
// d3.selectAll('.item:nth-child(2)')
//   .classed('highlight', true);

//! this example does not work as described
// https://github.com/d3/d3-selection/blob/master/README.md#selection_classed
// d3.selectAll('.item:nth-child(2)')
//   .classed({
//     'highlight': true,
//     'item': false,
//     'bigger': true
//   })

// // do this instead and/or dig into the problem
// d3.selectAll('.item:nth-child(2)')
//   .classed('highlight', true)
//   .classed('item', false)
//   .classed('bigger', true)

//! also does not work
//! fixed! https://d3js.org/d3-selection-multi.v1.min.js
// using .style method instead
// d3.selectAll('.item:nth-child(2)')
//   .styles({
//     'background': '#f0f',
//     'padding': '10px',
//     'margin': '5px',
//     'color': '#e5e',
//   })
