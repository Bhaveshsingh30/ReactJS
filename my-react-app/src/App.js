
import { useState } from 'react'
function App() {
  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ color: '#333' }}>Chai aur react</h1>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Counter value: {counter}</h2>
        <button
          style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={addValue}
        >
          Add value
        </button>
        <button
          style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={removeValue}
        >
          Remove value
        </button>
        <p style={{ fontSize: '14px', marginTop: '20px', color: '#888' }}>Footer: {counter}</p>
      </div>
    </>
  )
};
export default App;
