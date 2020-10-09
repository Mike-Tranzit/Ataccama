import React, {ReactElement} from 'react';
import {DataRowLabelProps} from "../../types";
import DataRowLabel from "../DataRowLabel";
import './style.css';

const DataRowThead: React.FC<DataRowLabelProps<string | boolean>> = ({label = false, children}: DataRowLabelProps<string | boolean>): ReactElement => {
    return (
        <>
            <thead className="data-table__thead">
            <tr>
                {label && <DataRowLabel label={label as string}/>}
                {children}
            </tr>
            </thead>
        </>
    )
};

export default DataRowThead;
