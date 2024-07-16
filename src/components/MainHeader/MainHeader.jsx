import React from 'react'
import TypeWriter from './TypeWriter'

export default function MainHeader() {
    
    return (
      <div className="m-header">
        <h1>LeafList</h1>
        <div className="t-animation">
          <TypeWriter  />
        </div>
      </div>
    );
}
