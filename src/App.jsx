import { BrowserRouter,Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/Notfound"

function App() {

  return (
    <>
     <BrowserRouter  basename="/jayee-portfolio">
       <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
