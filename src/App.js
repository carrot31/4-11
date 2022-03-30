import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './Main';
import Add from './Add';
import Update from './Update';
import NotFound from './NotFound';
import styled from 'styled-components';
import './App.css';
import SimpleSlider from './SimpleSlider';


function App() {

  return (
    <div className='App'>
      <NavBar>
        <h1>독일어 단어장</h1>
      </NavBar>
      <Switch>
        <Route path='/' exact>
          <SimpleSlider />
          <Main />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
        <Route path='/update/:index'>
          <Update />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

const NavBar = styled.div`
  width: 100%;
  height: 80px;
  background: white;
  display: flex;
  text-align: center;
  border-bottom: 1px solid #F08080;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
}
  & h1{
    color: #F26565;
    margin: auto;
    font-family: 'OTJalollineunharuRA';
    /* font-weight: 700; */ //웹폰트써라~~~~ 
  }
`;
export default App;
