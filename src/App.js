import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Learnable from './components/Learnable-Home';
import DevPage from './components/DevPage';
import DesignerPage from './components/DesignerPage';
import Journal from './components/Journal';
import Apply from './components/Apply';
import FAQs from './components/FAQs';
import Footer from './components/Footer'



function App() {
  return (
    <div>
    <Header />
    <Route exact path='/' component={Landing} />
    <Route path='/Learnable' component={Learnable} />
    <Route path='/DevPage' component={DevPage} />
    <Route path='/DesignerPage' component={Learnable} />
    <Route path='/Journal' component={Journal} />
    <Route path='/Apply' component={Apply} />
    <Route path='/FAQs' component={FAQs} />
    <Footer />
    </div>
  );
}

export default App;
