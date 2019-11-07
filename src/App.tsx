import React from 'react';
import Header from './components/Header';

import './App.scss';
import CreateStatement from './components/CreateStatement';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="row justify-content-md-center">
          <div className="col col-lg-6">
            <CreateStatement />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
