import React, { useState, useEffect, useRef } from 'react';
import Gamepad from './gamepad';
function App() {

  "abc".toLowerCase().includes('a');
  const [count, setCount] = useState(0);
  const requestRef = useRef();

  const animate = (time) => {
    // Update your component's state based on the animation progress
    setCount(prevCount => prevCount + 1);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Empty dependency array ensures this effect runs once

  const gamepads = navigator.getGamepads().filter(gp => !!gp);


  return (
    <div>
      <div>
        <h1>Gamepad Tester</h1>
      </div>
      <div>
        {gamepads.map(gp => (
          <div
            key={gp.index}
            className="gamepad-box"
          >
            <div
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              {gp.id}
            </div>
            <div>
              mapping: <span style={{ fontWeight: 'bold' }}>{gp.mapping}</span>
            </div>
            <div style={{
              display: 'flex',
              width: '100%',
              flexWrap: 'wrap',
            }}>
              {gp.buttons.map((button, index) => (
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    background: button.pressed ? 'red' : 'white',
                    color: button.pressed ? 'white' : 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid black',
                    borderRadius: '10%',
                    margin: '3px',
                  }}
                  key={index}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      marginTop: '2px',
                    }}
                  >{index}</div>
                  <div
                    style={{
                      fontSize: '10px',
                      marginBottom: '2px',
                    }}
                  >{button.value.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div>
              {gp.axes.map((axis, index) => (
                <div
                  key={index}
                  style={{
                    background: ((axis > -0.07) && (axis < 0.07)) ? 'white' : (axis > 0 ? 'lightgreen' : '#FF4444'),
                    border: '1px solid black',
                    borderRadius: '2px',
                    margin: '5px',
                    paddingLeft: '5px',
                  }}
                >
                  {index}: {axis}
                </div>
              ))}
            </div>
            {gp.mapping === 'standard' && (
              <div>
                <Gamepad gamepad={gp} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
