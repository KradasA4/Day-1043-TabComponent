import React from 'react';
import './App.css';
import TabComponent from './components/TabComponent';
import Tab from './components/Tab';

function App() {
  return (
    <div className="App">
      <TabComponent defaultMenu="Codecamp">
        <Tab title="Google">This is Google</Tab>
        <Tab title="Yahoo">This is Yahoo</Tab>
        <Tab title="Facebook">This is Facebook</Tab>
        <Tab title="Codecamp">This is Codecamp</Tab>
      </TabComponent>
    </div>
  );
}

export default App;