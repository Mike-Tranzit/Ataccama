import React, {ReactElement} from 'react';
import {IDataItem, WrapperProps} from '../../types';
import { BodyWrapper } from "../Body";
import { TheadWrapper } from "../Thead";
import './style.css';

const Wrapper: React.FC<WrapperProps> = ({dataList, label = false, path = ''}: WrapperProps): ReactElement => {
    let firstItem = dataList.find((item:IDataItem) => Boolean(item));
    if(!firstItem) {
        firstItem = {data: {}, kids: {}};
    }
    const labels = Object.keys(firstItem.data);
    return (
            <table className={`data-table ${label ? "data-table-kit" : ""}`}>
                <thead className="data-table__thead">
                    <TheadWrapper label={label} labels={labels}/>
                </thead>
                <tbody>
                    <BodyWrapper dataList={dataList} path={path}/>
                </tbody>
            </table>
    );
};

export default Wrapper;
