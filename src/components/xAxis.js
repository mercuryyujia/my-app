import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate




function XAxis(props){
    const { xScale, height, width, axisLable } = props;
    //Note:
    //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
    //2. you can use typeof(xScale.domain()[0]) to decide the return value
    //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.
    
    const xAxisRef = useRef();
    const [isLinear, setIsLinear] = useState(true);

    useEffect(() => {
        // Check if xScale is linear or band
        setIsLinear(typeof xScale.domain()[0] === 'number');

        // Create an axis function based on the scale
        const axis = d3.axisBottom(xScale);

        // Call the axis function and apply it to the ref
        const xAxis = d3.select(xAxisRef.current).call(axis);

        // If the scale is band (not linear), rotate the labels
        if (!isLinear) {
            xAxis.selectAll(".tick text")
                .style("text-anchor", "start")
                .attr("dx", "1em")
                .attr("dy", "0.15em")
                .attr("transform", "rotate(80)");
        }

    }, [xScale, isLinear]);

    return (
        <g 
            transform={`translate(0, ${height})`} 
            ref={xAxisRef} 
            className="x-axis">
            {/* Optionally, add an axis label */}
            {axisLabel && (
                <text 
                    x={width / 2} 
                    y={isLinear? 30 : 50} // Adjust this value based on your margin
                    textAnchor="end">
                    {axisLabel}
                </text>
            )}
        </g>
    );
}

export default XAxis;