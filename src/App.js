
/* - - - - - - - - - - - -

Name: Miracle Ufodiama
Track: Frontend Virtual
Week: 15
Task: Replica of Genesys Learnable Proto
 - - - - - - - - - - - - - */


import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Learnable from './components/Learnable-Home';
import DevPage from './components/DevPage';
import DesignerPage from './components/DesignerPage';
import Journal from './components/Journal';
import Apply from './components/Apply';
import FAQPage from './components/FAQPage';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import Error from './components/Error';



function App() {
  return (
    <div id='wrapper'>
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/Learnable' component={Learnable} />
    <Route path='/DevPage' component={DevPage} />
    <Route path='/DesignerPage' component={DesignerPage} />
    <Route path='/Journal' component={Journal} />
    <Route path='/Apply' component={Apply} />
    <Route path='/FAQs' component={FAQPage} />
    <Route path='/null' component={ComingSoon}/>
    <Route component={Error}/>
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
