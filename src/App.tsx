import React, {useState, useEffect} from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import {IDataItem} from "./types";
import {DataService} from './services/data.service';
import {DataContext} from './context/DataContext';
import StateCreator from './utils/StateCreator';
import {dataHandlers} from "./utils/DataContextHandlers";


function App() {
    const [list, setList] = useState<IDataItem[]>([]);
    const [lastRemovePath, setLastRemovePath] = useState<string>('');
    const [context, setContext] = useState({});
    useEffect(() => {
        const fetchData = () => {
            const dataService: DataService = new DataService();
            const dataList: IDataItem[] = dataService.getData();
            setList(dataList);
        }
        const setInitContext = () => {
            const initContext = dataHandlers(setList, setLastRemovePath, StateCreator);
            setContext(initContext)
        };
        fetchData();
        setInitContext();
    }, []);
    return (
        <DataContext.Provider value={{...context, lastRemovePath}}>
            <div className="App">
                <div className="container">
                    <Wrapper dataList={list} label={false} path=''/>
                </div>
            </div>
        </DataContext.Provider>
    );
}

export default App;
