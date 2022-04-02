import React, { useState } from 'react'

const TestUseState = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  const changeCount = (operation) => {
    if (operation === 'add') {
      if (count < 10) setCount(count + 1)
      if (count > 3) setMessage('You are too much')
    } else {
      if (count > 0) setCount(count - 1)
      setMessage('You are too little')
    }
  }

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
      <div className="test-wrapper" style={{ margin: 'auto', width: '1000px' }}>
        <h1>{message}</h1>
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

        <button onClick={() => changeCount('substract')}>Subtract Bar</button>
        <button onClick={() => changeCount('add')}>Add Bar</button>
      </div>
    </>
  )
}

export default TestUseState
