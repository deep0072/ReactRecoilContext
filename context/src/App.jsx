import { createContext, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '@mui/material/Card';
import { Button, Typography } from '@mui/material';
import {
  atom,
  RecoilRoot,
  useRecoilValue,
  useSetRecoilState,

} from 'recoil';

// const CountContext = createContext()
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//       <CountContext.Provider value={{count:count,setCount:setCount}}>
//       <div style={{display:"flex", justifyContent:"center"}}>
//         <Card variant="outlined">
//           <Typography variant='h5'>Welcome to Counter</Typography>
//             <br />

//            <Buttons ></Buttons>
//            <CountComponent />
//         </Card>
      
       
      
       
//     </div>
//     </CountContext.Provider>
//   )
// }

// export default App


// function Buttons () {
//   return <div style={{display:"flex", justifyContent:"space-between"}}>
//     <IncreaseCount ></IncreaseCount>
//     <DecreaseCount></DecreaseCount>

//   </div>

// }


// function IncreaseCount (){
//   const {count, setCount} = useContext(CountContext)
//   return <div>
//     <Button variant={'contained'} onClick={()=>setCount(existingCount=>existingCount+1) }>IncreaseCount</Button>
//   </div>
// }

// function DecreaseCount (){
//   const {count, setCount} = useContext(CountContext)
//   return <div>
//     <Button variant={'contained'} onClick={()=>setCount(existingCount => existingCount-1) }>DecreaseCount</Button>
//   </div>
// }

// function CountComponent(){
//   const {count} = useContext(CountContext)
//   return <div>
//     <h1> {count}</h1>
//   </div>
// }


// Recoil => context management librarys
// get value from atom =>useRecoilValue
// update value to atom =>useSetRecoilState

function App() {


  return (
      <RecoilRoot>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Card variant="outlined">
          <Typography variant='h5'>Welcome to Counter</Typography>
            <br />

           <Buttons ></Buttons>
           <CountComponent />
        </Card>
      
       
      
       
    </div>
    </RecoilRoot>
  )
}

export default App


function Buttons () {
  return <div style={{display:"flex", justifyContent:"space-between"}}>
    <IncreaseCount ></IncreaseCount>
    <DecreaseCount></DecreaseCount>

  </div>

}


function IncreaseCount (){
  const setCount = useSetRecoilState(countState)
   return <div>
    <Button variant={'contained'} onClick={()=>setCount(existingCount=>existingCount+1) }>IncreaseCount</Button>
  </div>
}

function DecreaseCount (){
   const setCount = useSetRecoilState(countState)
  return <div>
    <Button variant={'contained'} onClick={()=>setCount(existingCount=>existingCount-1) }>DecreaseCount</Button>
  </div>
}

function CountComponent(){
  // get calue from atom using useRecoilValue()

  const count = useRecoilValue(countState)

  return <div>
    <h1> {count}</h1>
  </div>
}


const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});