import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './Main';
import Add from './Add';
import Update from './Update';
import styled from 'styled-components';

function App() {
  return (
    <div className='App'>
      <NavBar>
        <h1>독일어 단어장</h1>
      </NavBar>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
        <Route path='/update'>
          <Update />
        </Route>
      </Switch>
    </div>
  );
}

const NavBar = styled.div`
  width: 100%;
  height: 80px;
  background: green;
  display: flex;
  text-align: center;
  & h1{
    /* background: yellow; */
    color: white;
    margin: auto;
  }
`;
export default App;
