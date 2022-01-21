'use strict';

const fs = require('fs');

// https://www.npmjs.com/package/svg-builder

var svg = require('svg-builder')
        .width(600)
        .height(25);
 

    // <rect x="1" y="1" rx="1" ry="1" width="3" height="20" style="fill:green;stroke:black;stroke-width:1;opacity:1.0" />
    var seeTime = svg
        .rect({
            rx: 1,
            ry: 1,
            width: 3,
            height: 20,
            fill: '#00FF00',
            'stroke-width': 1,
            stroke: '#000000'
        }).rect({
            rx: 5,
            ry: 1,
            width: 3,
            height: 20,
            fill: '#000000',
            'stroke-width': 1,
            stroke: '#000000'
        }).rect({
            rx: 9,
            ry: 1,
            width: 3,
            height: 20,
            fill: '#00FF00',
            'stroke-width': 1,
            stroke: '#000000'
        }).rect({
            rx: 13,
            ry: 1,
            width: 3,
            height: 20,
            fill: '#00FF00',
            'stroke-width': 1,
            stroke: '#000000'
        }).render();
    
    //svg.reset(); //removes all elements from the internal DOM.
    
    //console.log(output)

    fs.writeFileSync('see-time.svg', seeTime, 'utf8');