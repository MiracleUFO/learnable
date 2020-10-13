import React from 'react';
import Header from './components/Header';
import Learnable from './components/Learnable-Home';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div>
    <Header />
    <Route path='/Learnable' component={Learnable}/>
    </div>
  );
}

export default App;
