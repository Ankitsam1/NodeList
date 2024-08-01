import React from 'react'
import TypeWriter from './TypeWriter'

export default function MainHeader() {
    
    return (
      <div className="m-header">
        <h1>Notepad</h1>
        <div className="t-animation">
          <TypeWriter  />
        </div>
      </div>
    );
}
