import React from 'react';
import Header from './components/Header';
import InputField from './common/InputField';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
        <div className="row">
          <div className="col">
            <form className="form">
              <div className="form-group">
                <InputField />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
