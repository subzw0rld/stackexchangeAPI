import React from 'react';
import { Route } from "react-router";
import SearchComponent from '../components/searchcomponent';
import SearchRouter from './searchrouter';
import Answer from '../container/Answer/';

export default(
  <Route component = {SearchRouter}>
    <Route path ='/' components = {{main:SearchComponent}} />
    <Route path = '/answers/:questionID' components = {{main: Answer}} />
  </Route>
);
