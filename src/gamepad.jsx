import * as React from "react";


const pressedBackground = 'red';
const pressedText = 'white';
const defaultBackground = 'white';
const defaultText = 'black';

const SVGComponent = (props) => {
  const { gamepad } = props;
  const { axes, buttons } = gamepad;
  const buttonSouth = buttons[0] && buttons[0].pressed;
  const buttonEast = buttons[1] && buttons[1].pressed;
  const buttonWest = buttons[2] && buttons[2].pressed;
  const buttonNorth = buttons[3] && buttons[3].pressed;
  const buttonMenu = buttons[16] && buttons[16].pressed;
  const buttonSelect = buttons[8] && buttons[8].pressed;
  const buttonStart = buttons[9] && buttons[9].pressed;
  const buttonLeftStick = buttons[10] && buttons[10].pressed;
  const buttonRightStick = buttons[11] && buttons[11].pressed;
  const dpadNorth = buttons[12] && buttons[12].pressed;
  const dpadSouth = buttons[13] && buttons[13].pressed;
  const dpadWest = buttons[14] && buttons[14].pressed;
  const dpadEast = buttons[15] && buttons[15].pressed;
  const buttonLeftShoulder = buttons[4] && buttons[4].pressed;
  const buttonRightShoulder = buttons[5] && buttons[5].pressed;
  const buttonLeftTrigger = buttons[6] && buttons[6].pressed;
  const buttonRightTrigger = buttons[7] && buttons[7].pressed;
return (
  <svg
    viewBox="0 0 600 450"
    id="svg2"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    {...props}
  >
    <g
      id="layer1"
      style={{
        display: "inline",
      }}
      transform="translate(-128.09714,-243.74222)"
    />
    <g
      id="layer2"
      style={{
        display: "inline",
      }}
      transform="translate(-128.09714,-243.74222)"
    >
      <g id="g3788" transform="translate(58.719552,141.85595)">
        <path
          style={{
            fill: "none",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="m 263.57143,419.50504 c -28.03572,56.42858 -80.49928,92.08847 -100.73276,90.44683 -20.23348,-1.64165 -48.23687,-25.58484 -45.92365,-67.64816 4.55975,-82.91401 73.58785,-221.40908 83.79926,-229.94153 10.21141,-8.53244 18.78619,-14.07754 71.22999,-14.52433 41.022,-0.34948 55.19859,-2.26138 52.34145,25.95291"
          id="path2985"
        />
        <path
          style={{
            fill: "none",
            stroke: "#000000",
            strokeWidth: 1,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeOpacity: 1,
          }}
          d="m 473.50901,365.07965 c 0,0 0.73545,8.10393 -6.7986,8.0934 -7.53405,-0.0105 -70.34884,0.0366 -77.88289,0.0261 -7.53405,-0.0105 -5.72717,-8.24589 -5.72717,-8.24589"
          id="path3838"
          transform="translate(-58.719552,-141.85595)"
        />
      </g>
      <ellipse
        id="path2994"
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 0.873299,
        }}
        cx={348.71954}
        cy={533.14667}
        rx={47.561932}
        ry={47.564766}
      />
      <ellipse
        id="path3766"
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1.15627,
        }}
        cx={310.86243}
        cy={442.4324}
        rx={77.421921}
        ry={77.421814}
      />
      <path
        id="path3776"
        d="m 371.48803,492.47778 c -3.15673,-1.86247 -3.15673,-1.86247 -3.15673,-1.86247 v 0"
        style={{
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path3778"
        d="m 303.78652,520.71367 0.40178,-2.36608"
        style={{
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <rect
        style={{
          fill: "#ffffff",
          stroke: "#ffffff",
        }}
        id="rect3834"
        width={65.535683}
        height={34.46431}
        x={304.64285}
        y={492.36218}
      />
    </g>
    <g
      style={{
        display: "inline",
      }}
      id="g3802"
      transform="translate(-128.09714,-243.74222)"
    >
      <path
        id="path3808"
        d="m 534.42715,561.36099 c 28.03572,56.42858 80.49928,92.08847 100.73276,90.44683 20.23348,-1.64165 48.23687,-25.58484 45.92365,-67.64816 -4.55975,-82.91401 -73.58785,-221.40908 -83.79926,-229.94153 -10.21141,-8.53244 -18.78619,-14.07754 -71.22999,-14.52433 -41.022,-0.34948 -55.19859,-2.26138 -52.34145,25.95291"
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 0.873299,
        }}
        id="path3810"
        transform="scale(-1,1)"
        cx={-507.99857}
        cy={533.14667}
        rx={47.561932}
        ry={47.564766}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1.15627,
        }}
        id="path3812"
        transform="scale(-1,1)"
        cx={-545.85571}
        cy={442.4324}
        rx={77.421921}
        ry={77.421814}
      />
      <path
        style={{
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 485.2301,492.47778 c 3.15673,-1.86247 3.15673,-1.86247 3.15673,-1.86247 v 0"
        id="path3814"
      />
      <path
        style={{
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 552.93161,520.71367 -0.40178,-2.36608"
        id="path3816"
      />
      <rect
        style={{
          fill: "#ffffff",
          stroke: "#ffffff",
          strokeWidth: 0.987663,
        }}
        id="rect3830"
        width={65.695984}
        height={33.636066}
        x={486.27444}
        y={492.4823}
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 395.71429,539.50504 64.82142,0.0893"
        id="path3836"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Induction",
          InkscapeFontSpecification: "Induction",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={541.78571}
        y={465.93362}
        id="text4345"
      >
        <tspan
          id="tspan4347"
          x={541.78571}
          y={465.93362}
          style={{
            fontSize: 12,
            lineHeight: 1.25,
          }}
        />
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Induction",
          InkscapeFontSpecification: "Induction",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#338000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={542.85712}
        y={468.07648}
        id="text4349"
      >
        <tspan
          id="tspan4351"
          x={542.85712}
          y={468.07648}
          style={{
            fontSize: 12,
            lineHeight: 1.25,
          }}
        />
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Induction",
          InkscapeFontSpecification: "Induction",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={540}
        y={474.50504}
        id="text4353"
      >
        <tspan
          id="tspan4355"
          x={540}
          y={474.50504}
          style={{
            fontSize: 12,
            lineHeight: 1.25,
          }}
        />
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Induction",
          InkscapeFontSpecification: "Induction",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={547.3764}
        y={453.65738}
        id="text4357"
      >
        <tspan
          id="tspan4359"
          x={547.3764}
          y={453.65738}
          style={{
            fontSize: 12,
            lineHeight: 1.25,
          }}
        />
      </text>
    </g>
    <g id="layer5" transform="translate(-128.09714,-243.74222)">
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
        }}
        id="path3845"
        transform="matrix(1.3583623,0,0,1.0688757,-109.76203,-28.21247)"
        cx={309.10669}
        cy={438.94705}
        rx={36.36549}
        ry={46.214478}
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 300.13896,392.88521 c 0,0 0.21752,6.21345 0.31578,9.66211 -0.55737,11.95566 2.83194,22.26427 -5.30375,27.18421 -5.89285,3.44866 -19.27082,1.58089 -33.02082,1.58089"
        id="path3847"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 357.8672,430.52556 c 0,0 -6.21345,0.21752 -9.66211,0.31578 -11.95566,-0.55737 -22.26427,2.83194 -27.18421,-5.30375 -3.44866,-5.89285 -1.58089,-19.27082 -1.58089,-33.02082"
        id="path3847-1"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 299.92758,489.2228 c 0,0 0.21752,-6.21345 0.31578,-9.66211 -0.55737,-11.95566 2.83194,-22.26427 -5.30375,-27.18421 -5.89285,-3.44866 -19.27082,-1.58089 -33.02082,-1.58089"
        id="path3847-7"
      />
      <path
        style={{
          fill: "none",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 357.9195,451.1566 c 0,0 -6.21345,-0.21752 -9.66211,-0.31578 -11.95566,0.55737 -22.26427,-2.83194 -27.18421,5.30375 -3.44866,5.89285 -1.58089,19.27082 -1.58089,33.02082"
        id="path3847-4"
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
        }}
        id="path3892"
        transform="matrix(1.8336949,0,0,1.4280878,-291.53629,-223.11064)"
        cx={349.76532}
        cy={530.61841}
        rx={19.950512}
        ry={25.75889}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
        }}
        id="path3892-9"
        transform="matrix(1.8336949,0,0,1.4280878,-133.86288,-223.62178)"
        cx={349.76532}
        cy={530.61841}
        rx={19.950512}
        ry={25.75889}
      />
      <ellipse
        ry={14.235094}
        rx={14.156614}
        cy={471.95999}
        cx={426.59915}
        style={{
          fill: buttonMenu ? pressedBackground : defaultBackground,
          stroke: "#000000",
          strokeWidth: 0.62620896,
        }}
        id="path3892-9-3"
      />
    </g>
    <g id="layer6" transform="translate(-128.09714,-243.74222)">
      <rect
        style={{
          fill: buttonStart ? pressedBackground : defaultBackground,
          stroke: "#000000",
          strokeWidth: 1.43921,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="start-btn"
        width={25.693605}
        height={18.463243}
        x={445.35208}
        y={395.10068}
        ry={8.5988941}
      />
      <path
        style={{
          fill: buttonStart ? 'white' : 'black',
          stroke: "#000000",
          strokeWidth: "1.43921px",
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeOpacity: 1,
        }}
        d="m 451.84235,399.22388 -3e-5,10.56731 13.38828,-5.28368 z"
        id="path4104"
      />
      <rect
        style={{
          fill: buttonSelect ? pressedBackground : defaultBackground,
          stroke: "#000000",
          strokeWidth: 1.43921,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="select-btn"
        width={25.693605}
        height={18.463243}
        x={386.6756}
        y={395.51428}
        ry={8.5988941}
      />
      <path
        style={{
          fill: buttonSelect ? 'white' : 'black',
          stroke: "#000000",
          strokeWidth: "1.43921px",
          strokeLinecap: "square",
          strokeLinejoin: "square",
          strokeOpacity: 1,
        }}
        d="m 405.5412,399.63827 3e-5,10.56731 -13.38828,-5.28368 z"
        id="path4104-8"
      />
      <path
        style={{
          fill: buttonRightTrigger ? pressedBackground : 'none',
          stroke: "#000000",
          strokeWidth: "0.901653px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 500,339 v -12 l 4,-6 70,0 3,3 0,4 -43,0 -12.7,12"
        id="path4171"
      />
      <path
        style={{
          fill: buttonLeftTrigger ? pressedBackground : 'none',
          stroke: "#000000",
          strokeWidth: "0.888544px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 355,340 v -14 l -4,-6 -70,1 -4,4 0,3 h 42 l 12,12"
        id="path4171-2"
      />
      <ellipse
        style={{
          fill: buttonLeftStick ? pressedBackground : "black",
          strokeWidth: 1.03142,
        }}
        id="leftStick"
        cx={350.36276 + axes[0] * 25}
        cy={535.1485 + axes[1] * 25}
        rx={19.140625}
        ry={19.53125}
      />
      <ellipse
        style={{
          fill: buttonRightStick ? pressedBackground : "black",
          strokeWidth: 1.03142,
        }}
        id="rightStick"
        cx={508.30026 + axes[2] * 25}
        cy={534.211 + axes[3] * 25}
        rx={19.140625}
        ry={19.53125}
      />
      <path
        style={{
          fill: dpadEast ? 'white' : 'black',
          stroke: dpadEast ? pressedBackground : 'black',
          strokeWidth: dpadEast ? '5px' : '1px',
          strokeLinecap: "square",
          strokeLinejoin: "square",
          strokeOpacity: 1,
        }}
        d="m 338.95354,435.44515 -5e-5,10.29985 16.12406,-5.14994 z"
        id="path4104-4"
      />
      <path
        style={{
          fill: dpadSouth ? 'white' : 'black',
          stroke: dpadSouth ? pressedBackground : 'black',
          strokeWidth: dpadSouth ? '5px' : '1px',
          strokeLinecap: "square",
          strokeLinejoin: "square",
          strokeOpacity: 1,
        }}
        d="m 314.6979,469.59725 -10.29985,-5e-5 5.14994,16.12406 z"
        id="path4104-4-4"
      />
      <path
        style={{
          fill: dpadNorth ? 'white' : 'black',
          stroke: dpadNorth ? pressedBackground : 'black',
          strokeWidth: dpadNorth ? '5px' : '1px',
          strokeLinecap: "square",
          strokeLinejoin: "square",
          strokeOpacity: 1,
        }}
        d="m 304.42698,411.83316 10.29985,5e-5 -5.14994,-16.12406 z"
        id="path4104-4-8"
      />
      <path
        style={{
          fill: dpadWest ? 'white' : 'black',
          stroke: dpadWest ? pressedBackground : 'black',
          strokeWidth: dpadWest ? '5px' : '1px',
          strokeLinecap: "square",
          strokeLinejoin: "square",
          strokeOpacity: 1,
        }}
        d="m 281.29771,446.01878 5e-5,-10.29985 -16.12406,5.14994 z"
        id="path4104-4-6"
      />
    </g>
    <g id="layer7" transform="translate(-128.09714,-243.74222)">
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212-1"
        transform="matrix(1.3351132,0,0,1.9720704,-96.78891,-432.50229)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212-5-4"
        transform="matrix(1.3351132,0,0,1.9720704,-96.70624,-434.05825)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212-2"
        transform="matrix(1.3351132,0,0,1.9720704,-136.51444,-397.50229)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212-5-3"
        transform="matrix(1.3351132,0,0,1.9720704,-136.78891,-399.05825)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212-22"
        transform="matrix(1.3351132,0,0,1.9720704,-136.78891,-472.50229)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212-5-1"
        transform="matrix(1.3351132,0,0,1.9720704,-136.70624,-474.05825)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212"
        transform="matrix(1.3351132,0,0,1.9720704,-176.78891,-432.50229)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <ellipse
        style={{
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 1,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        id="path4212-5"
        transform="matrix(1.3351132,0,0,1.9720704,-176.70624,-434.05825)"
        cx={512.90497}
        cy={442.10379}
        rx={12.879445}
        ry={8.7125654}
      />
      <path
        style={{
          fill: buttonSouth ? 'red' : 'white',
          fillOpacity: 1,
          stroke: "#000000",
          strokeWidth: 0.29228577,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        d="m 547.26452,454.96682 c -8.99466,0.14886 -17.15195,8.1631 -17.09419,17.40605 -0.4705,8.75652 6.52899,16.7924 14.94723,18.03231 8.1379,1.44809 16.88935,-3.49526 19.67598,-11.4751 2.5451,-6.81932 0.42098,-15.13904 -5.24513,-19.69002 -3.37564,-2.93548 -7.85236,-4.46284 -12.28389,-4.27324 z"
        id="path4325"
      />
      <path
        style={{
          fill: buttonWest ? pressedBackground : defaultBackground,
          fillOpacity: 1,
          stroke: "#000000",
          strokeWidth: 0.29228571,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        d="m 507.34719,419.96682 c -8.99466,0.14886 -17.15195,8.1631 -17.09419,17.40605 -0.47048,8.75651 6.52898,16.7924 14.94722,18.03231 8.13791,1.44809 16.88936,-3.49528 19.67598,-11.47511 2.54511,-6.81931 0.42099,-15.13903 -5.24512,-19.69003 -3.37566,-2.93548 -7.85238,-4.46282 -12.28389,-4.27322 z"
        id="path4333"
      />
      <path
        style={{
          fill: buttonEast ? pressedBackground : defaultBackground,
          fillOpacity: 1,
          stroke: "#000000",
          strokeWidth: 0.29228565,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        d="m 587.34719,419.96682 c -8.99466,0.14886 -17.15194,8.16312 -17.09419,17.40606 -0.47048,8.75651 6.529,16.7924 14.94722,18.03231 8.13791,1.44808 16.88936,-3.49528 19.67598,-11.47511 2.54511,-6.81931 0.42099,-15.13903 -5.24512,-19.69002 -3.37564,-2.93548 -7.85238,-4.46282 -12.28389,-4.27324 z"
        id="path4337"
      />
      <path
        style={{
          fill: buttonNorth ? pressedBackground : defaultBackground,
          fillOpacity: 1,
          stroke: "#000000",
          strokeWidth: 0.29228565,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
        }}
        d="m 547.34719,379.96682 c -8.99465,0.14886 -17.15194,8.1631 -17.09418,17.40606 -0.47048,8.75651 6.52898,16.7924 14.94722,18.03231 8.1379,1.44808 16.88936,-3.49528 19.67598,-11.47511 2.54511,-6.81931 0.42099,-15.13903 -5.24512,-19.69002 -3.37566,-2.93548 -7.85238,-4.46282 -12.2839,-4.27324 z"
        id="path4341"
      />
    </g>
    <g id="layer8" transform="translate(-128.09714,-243.74222)">
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "normal",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Induction",
          InkscapeFontSpecification: "Induction",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={549.27045}
        y={452.33157}
        id="text4362"
      >
        <tspan
          id="tspan4364"
          x={549.27045}
          y={452.33157}
          style={{
            fontSize: 12,
            lineHeight: 1.25,
          }}
        />
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Mycalc",
          InkscapeFontSpecification: "'Sans Bold'",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={542.42029}
        y={480.00809}
        id="text4370"
      >
        <tspan
          id="tspan4372"
          x={542.42029}
          y={480.00809}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: 18,
            lineHeight: 1.25,
            fontFamily: "Mycalc",
            InkscapeFontSpecification: "'Mycalc Bold'",
            fill: buttonSouth ? pressedText : defaultText,
            fillOpacity: 1,
          }}
        >
          {"S"}
        </tspan>
        <tspan
          x={542.42029}
          y={496.73206}
          style={{
            fontWeight: "normal",
            fontSize: 18,
            lineHeight: 1.25,
            InkscapeFontSpecification: "Mycalc",
            fill: "#000000",
            fillOpacity: 1,
          }}
          id="tspan3402"
        />
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Mycalc",
          InkscapeFontSpecification: "'Sans Bold'",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#030000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={582.77081}
        y={445.09735}
        id="text4374"
      >
        <tspan
          id="tspan4376"
          x={582.77081}
          y={445.09735}
          style={{
            fontSize: 18,
            lineHeight: 1.25,
            fill: buttonEast ? pressedText : defaultText,
            fillOpacity: 1,
          }}
        >
          {"E"}
        </tspan>
        <tspan
          x={582.77081}
          y={461.82132}
          style={{
            fontSize: 18,
            lineHeight: 1.25,
            fill: "#030000",
            fillOpacity: 1,
          }}
          id="tspan3404"
        />
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Mycalc",
          InkscapeFontSpecification: "'Sans Bold'",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={499.13235}
        y={443.78043}
        id="text4378"
      >
        <tspan
          id="tspan4380"
          x={499.13235}
          y={443.78043}
          style={{
            fontSize: 18,
            lineHeight: 1.25,
            fill: buttonWest ? pressedText : defaultText,
            fillOpacity: 1,
          }}
        >
          {"W"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Mycalc",
          InkscapeFontSpecification: "'Sans Bold'",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#000000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={542.01184}
        y={404.47235}
        id="text4382"
      >
        <tspan
          id="tspan4384"
          x={542.01184}
          y={404.47235}
          style={{
            fontSize: 18,
            lineHeight: 1.25,
            fill: buttonNorth ? pressedText : defaultText,
            fillOpacity: 1,
          }}
        >
          {"N"}
        </tspan>
      </text>
      <path
        style={{
          fill: buttonRightShoulder ? pressedBackground : 'none',
          stroke: "#000000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 535,328 62,0 6.5,7 0,28 -10,-12.5 -14,-7 -20,-3 -25,-1 -13,-0.2 14,-12"
        id="path3057"
      />
      <path
        style={{
          fill: buttonLeftShoulder ? pressedBackground : 'none',
          stroke: "#000000",
          strokeWidth: "1px",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeOpacity: 1,
        }}
        d="m 330,340 -10.7,-11.7 -61,-0.1 -9,7.7 0.1,32 10,-14 10,-6.5 10,-4 15,-2 15,-1"
        id="path3057-1"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: "bold",
          fontStretch: "normal",
          lineHeight: "0%",
          fontFamily: "Mycalc",
          InkscapeFontSpecification: "'Sans Bold'",
          letterSpacing: 0,
          wordSpacing: 0,
          fill: "#220000",
          fillOpacity: 1,
          stroke: "none",
        }}
        x={417.94507}
        y={477.21729}
        id="text4370-6"
      >
        <tspan
          id="tspan4372-7"
          x={417.94507}
          y={477.21729}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: 18,
            lineHeight: 1.25,
            fontFamily: "Mycalc",
            InkscapeFontSpecification: "'Mycalc Bold'",
            fill: buttonMenu ? pressedText : defaultText,
            fillOpacity: 1,
          }}
        >
          {"M"}
        </tspan>
        <tspan
          x={417.94507}
          y={497.69125}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "bold",
            fontStretch: "normal",
            fontSize: 18,
            lineHeight: 1.25,
            fontFamily: "Mycalc",
            InkscapeFontSpecification: "'Mycalc Bold'",
            fill: "#220000",
            fillOpacity: 1,
          }}
          id="tspan4246"
        />
        <tspan
          x={417.94507}
          y={516.44128}
          style={{
            fontWeight: "normal",
            fontSize: 18,
            lineHeight: 1.25,
            InkscapeFontSpecification: "Mycalc",
            fill: "#220000",
            fillOpacity: 1,
          }}
          id="tspan3402-5"
        />
      </text>
    </g>
  </svg>)
};
export default SVGComponent;
