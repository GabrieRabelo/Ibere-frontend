import React from 'react';
import HomeView from './views/home/HomeView';

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/joaocv3/sample_endpoint_ibere');

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <HomeView />
      <Admin dataProvider={dataProvider} >
       <Resource name="instituicoes" list={ListGuesser} />
      </Admin>
    </div>
  );
}

export default App;
