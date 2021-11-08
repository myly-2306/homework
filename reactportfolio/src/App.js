import './App.css';
import React, { Fragment, Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 


import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Project } from './components/Project';
// import { ProjectCard } from './components/ProjectCard';

// function App() {
//   return (
    
//     <Fragment>
//     <Navbar />
//       <Switch>
//         <Route path="/" component={Header} /> 
//         <Route path="/project" component={Project} />
//         {/* <Route path="/project" component={Project} /> */}
//       </Switch>
//     <Footer />
//     </Fragment>
    
//   );
// }

function App() {
  return (
    <BrowserRouter>
    <Fragment>
    <Navbar />
      <Switch>
        <Route path="/" component={Header} exact/> 
        <Route path="/project" component={Project} />
        {/* <Route path="/project" component={Project} /> */}
      </Switch>
    <Footer />
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
