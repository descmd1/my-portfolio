import React from "react";
import { Route, Routes,} from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Hire from './components/Hire';
import Skills from './components/Skills';

function App() {
  return (
    <div> <Header/>
     
          <Routes>
                <Route exact path='/' element={< Showcase />}></Route>
                <Route exact path='/skills' element={< Skills />}></Route>
                <Route exact path='/projects' element={< Projects />}></Route>
                <Route exact path='/hire' element={< Hire />}></Route>
         </Routes>
        
         </div>
  );
 }


export default App;
