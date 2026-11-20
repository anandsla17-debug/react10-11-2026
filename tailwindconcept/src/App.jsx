
import './App.css'
import Form from './Component/Form'
import Tailwind from './Component/Tailwind'
import  {BrowserRouter,Routes,Route} from "react-router-dom"
import Main from './Main/Main'
import Materialui from './Materialui/Materialui'
function App() {
 

  return (
    <BrowserRouter>
   {/* <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> */}

  <Routes>
<Route path='/' element={<Main></Main>} >
<Route path='form' element={<Form></Form>}></Route>
<Route path='tailwind' element={<Tailwind></Tailwind>}></Route>
<Route path='material' element={<Materialui></Materialui>}></Route>
</Route>


  </Routes>


    </BrowserRouter>
  )
}

export default App
