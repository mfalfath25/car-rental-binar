import React, { useState, useEffect } from 'react'

const TestUseEffect = () => {
  const [showStatement, setShowStatement] = useState(false)
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => {
      setShowStatement(true)
    },
    3000,
    []
  )

  return (
    <>
      <div>
        {showStatement && (
          <div className="test-wrap">
            <h1 className="scary-text">Try UseEffect - Pick a box</h1>
            <div className="box-container">
              <div id="1" className="box">
                <h2>Box 1</h2>
              </div>
              <div id="2" className="box">
                <h2>Box 2</h2>
              </div>
              <div id="3" className="box">
                <h2>Box 3</h2>
              </div>
            </div>
          </div>
        )}
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Add</button>
      </div>
    </>
  )
}

export default TestUseEffect
