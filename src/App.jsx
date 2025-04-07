import { useState } from "react"
// hook
const App = () => {
  
  const [son  , setSon] = useState(0);
  
  const HandlePlus = () => {
    setSon((prosto) => prosto + 1)
  }
  
  const HandleMinus = (e) => {
    if(son  == 0){
      alert("Son noldan kam bomaydi");
      e.disabled = true;
    }
    else{
      setSon((prew) => prew -1)
      e.disabled = false;
    }
  }
  
  
  // const son = 0;
  return (
    <div>
    <h1 className='text-center bg-red-600 text-[40px]'>Hello, React!</h1>
    <p>{son}</p>
    <button onClick={HandlePlus}>Plus</button>
    <button onClick={HandleMinus}>Minus</button>
    </div>
  )
}

export default App