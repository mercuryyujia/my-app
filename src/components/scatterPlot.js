import React from 'react';
import Points from './points';
import YAxis from './yAxis';
import XAxis from './xAxis';
function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipData, setTooltipX, setTooltipY } = props;

    const plotHeight = height - offsetY;
    const plotWidth = width - offsetX;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points data={data} xScale={xScale} yScale={yScale} radius={5} color='steelblue' selectedStation = {selectedStation} setSelectedStation = {setSelectedStation} setTooltipData={setTooltipData} setTooltipX={setTooltipX} setTooltipY={setTooltipY}/>
            <YAxis xScale = {xScale} yScale={yScale} axisLabel="Trip duration ended in" />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration started from"} />
        </g>
    );
}

export default ScatterPlot