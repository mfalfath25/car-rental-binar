import React, { useState } from 'react'

const Comptest = () => {
  const [count] = useState(5)

  const renderBar = () => {
    const bars = []
    for (let i = 0; i < count; i++) {
      bars.push(
        <div
          style={{
            backgroundColor: 'rgba(212, 112, 211)',
            height: '100%',
            width: '10%',
          }}
        ></div>
      )
    }

    return bars
  }
  return (
    <>
      <h1>Try useState</h1>
      <div
        style={{
          border: '0.1rem solid rgba(0,0,0,0.3)',
          height: '100px',
          width: '80%',
          margin: '2rem auto',
          display: 'flex',
        }}
      >
        {renderBar()}
      </div>
    </>
  )
}

export default Comptest
