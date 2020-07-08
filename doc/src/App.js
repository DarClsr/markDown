import React from 'react';
import logo from './logo.svg';
import './App.css';
import Numbutton from './components/NumButton.js'
import DogShow from './components/DogShow'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from './components/FileSearch';


function App() {
  return (
    <div className="App container-fluid">
      <div className="row">

        <div className="col-3  left-panel">
          <FileSearch
          title='我的雲文檔'
          onFileSearch={(value)=>{console.log(value)}}
          />

        </div>
        <div className="col-9 bg-danger right-panel">
          right
      </div>


      </div>


    </div>
  );
}

export default App;
