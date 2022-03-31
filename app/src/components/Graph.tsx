import React from "react";
import { useColorMode, useBreakpointValue, useColorModeValue, Text } from "native-base";
import { VStack, Center } from "native-base";
import V from "@utils/victory";

function ScatterPoint ({ x, y, datum }) {
    const [selected, setSelected] = React.useState(false);
    const [hovered, setHovered] = React.useState(false);

    return (
        <circle
        cx={x}
        cy={y}
        r={datum.x * datum.y}
        stroke={hovered ? "pink" : "cyan"}
        strokeWidth={2}
        fill={selected ? "magenta" : "blue"}
        onClick={() => setSelected(!selected)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        />
    );
};

function Graph () {
    return (
        <V.VictoryChart>
        <V.VictoryScatter
            data={[
                {x: 1, y: 7},
                {x: 2, y: 5},
                {x: 3, y: 2},
                {x: 4, y: 6},
                {x: 5, y: 1},
            ]}
            dataComponent={
            <ScatterPoint />
            }
        />
        </V.VictoryChart>
    )
}

// function Graph ({ health_data }) {
//     return (
//         <V.VictoryChart>
//         <V.VictoryScatter
//             data={[
//             {x: health_data.deaths[0], y: health_data.cases[0]},
//             {x: health_data.deaths[1] + 1, y: health_data.cases[1] + 2}
//             ]}
//             dataComponent={
//             <ScatterPoint />
//             }
//         />
//         </V.VictoryChart>
//     )
// }

export default Graph;
