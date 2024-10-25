import React, { useState } from 'react';
function Points(props) {
    const {data, xScale, yScale, height, width} = props;
    //Note: 
    //the if(data){...} means when data is not null, the component will return the points; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    const getColor = (station) => station === selectedStation ? 'red' : 'steelblue';

    const getRadius = (station) => station === selectedStation ? 10 : 5;
    
    // const [selectedStation, setSelectedStation] = useState(null);

    const handleMouseEnter = (event, d) => {
        setSelectedStation(d.station);
        setTooltipData(d);
        setTooltipX(event.pageX);
        setTooltipY(event.pageY);

    };

    const handleMouseOut = () => {
        setSelectedStation(null);
        setTooltipData(null);
        setTooltipX(null);
        setTooltipY(null);
    };

    if (data) {
        return (<g>
            {selectedStation && (<rect x = {0} y = {0} width="88%" height="90%" fill="yellow" fillOpacity={0.3} />)}
            {data.map((d, index) => {
                const isSelected = d.station === selectedStation;
                // If the station is the selected one, we'll render it later to bring it in front
                if (isSelected) return null;
                
                return (
                    <circle
                        key={index}
                        cx={xScale(d.tripdurationS)}
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(d.station)}
                        fill={getColor(d.station)}
                        stroke="black"
                        onMouseEnter={(event) => handleMouseEnter(event, d)}
                        onMouseOut={handleMouseOut}
                    />
                );
            })}
            {selectedStation && data.map((d, index) => {
                // Only render the selected station
                if (d.station !== selectedStation) return null;
                
                return (
                    <circle
                        key={`selected-${index}`}
                        cx={xScale(d.tripdurationS)}
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(d.station)}
                        fill={getColor(d.station)}
                        stroke="black"
                        
                        onMouseOut={handleMouseOut}
                    />
                );
            })}
        </g>
        );
    } else {
        return <g></g>;
    }
}

export default Points;