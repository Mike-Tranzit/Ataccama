import React, {ReactElement} from 'react';
import {IDataItem, WrapperProps} from '../../types'
import { generate } from 'shortid';
import './style.css';
import DataRow from "../DataRow";



const Wrapper: React.FC<WrapperProps> = ({dataList}: WrapperProps): ReactElement => {
    return (
        <div className="container">
            <table className="data-table">
                {
                    dataList.map((item: IDataItem, index: number) => {
                        let uniqId: string = generate();
                        let showLabel: boolean = index === 0;
                        return <DataRow item={item} showLabel={showLabel} key={uniqId} />
                    })
                }
            </table>
        </div>
    );
};

export default Wrapper;
