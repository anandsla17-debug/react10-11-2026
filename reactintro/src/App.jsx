
import Get from './Apicalling/Get';
import Mainapi from './Apicalling/MainApi';
import Post from './Apicalling/Post';
import './App.css'

import Form from './Component/Form'
import Mainpage from './Mainpage/Mainpage';
import About from './Nestedrouting/About';
import Contact from './Nestedrouting/Contact';
import Home from './Nestedrouting/Home';
import Style from './Style/Style'
import Useeffecthook from './Useeffect/Useffecthook'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage></Mainpage>}>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      </Route>
      <Route path='/style' element={<Style></Style>}></Route>
      <Route path='/propsandusestate' element={<Form></Form>}></Route>
      <Route path='/useeffect' element={<Useeffecthook></Useeffecthook>}></Route>
      {/* nexted routing */}
      <Route path='/mainapi' element={<Mainapi></Mainapi>}>
      <Route path='post' element={<Post></Post>}></Route>
      <Route path='get' element={<Get></Get>}></Route>
      </Route>
    
    </Routes>
    
   </BrowserRouter>
  )
}

export default App
