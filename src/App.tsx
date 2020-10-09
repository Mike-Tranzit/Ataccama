import React from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import {IDataItem, IDefaultData} from "./types/index";
import * as initJsonData from './data/data.json';

function App() {
  const dataList: IDataItem[] = (initJsonData as unknown as IDefaultData).default;
  return (
    <div className="App">
        <Wrapper dataList={dataList}/>
    </div>
  );
}

export default App;
