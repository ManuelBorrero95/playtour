// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
// import Home from './pages/Home.jsx'
// import CreateEvent from './pages/CreateEvent.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
    
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="create-event" element={<CreateEvent />} />
//       </Route>
//     </Routes>
//   )
// }

// export default App



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
 import Layout from './components/Layout.jsx'
 import Home from './pages/Home.jsx'
 import CreateEvent from './pages/CreateEvent.jsx'

//import PlaytourLayout from "/PlaytourLayout.jsx"
import PlayTourLayout from './PlayTourLayout.jsx'

export default function App() {
  return <PlayTourLayout />
}