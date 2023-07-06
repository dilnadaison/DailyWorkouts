import React, { Profiler } from 'react';
import SampleText from './SampleText';



const Profilers = () =>{
    const handleProfilerRender = (
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions
      ) => {
        console.log(`Component ${id} took ${actualDuration}ms to render (phase: ${phase})`);
      };
    
      return (
        <Profiler id="mainApp" onRender={handleProfilerRender}>
          <div>
          <h1
          style={{
            color: "white",
            backgroundColor: "darkred",
            textAlign: "center",
          }}
        >
          <b>Profiler</b>
        </h1>
            <SampleText/>
          </div>
        </Profiler>
      );
}

export default Profilers