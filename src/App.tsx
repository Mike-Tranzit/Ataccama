import React, {useState} from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import {IDataItem} from "./types";
import {DataService} from './services/data.service';
import {DataContext} from './context/DataContext';
import StateCreator from './utils/StateCreator';
import {dataHandlers} from "./utils/DataContextHandlers";


function App() {
    const dataService: DataService = new DataService();
    const dataList: IDataItem[] = dataService.getData();
    const [list, setList] = useState<IDataItem[]>(dataList);
    const context = dataHandlers(setList, StateCreator);
    return (
        <DataContext.Provider value={context}>
            <div className="App">
                <div className="container">
                    <Wrapper dataList={list} label={false} path=''/>
                </div>
            </div>
        </DataContext.Provider>
    );
}

export default App;
