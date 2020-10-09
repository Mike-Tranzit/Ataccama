import React, {ReactElement} from 'react';
import {DataRowLabelProps} from "../../types";
import './style.css';

const DataRowLabel: React.FC<DataRowLabelProps<string>> = ({label}: DataRowLabelProps<string>): ReactElement => {
    return (
        <th>{label}</th>
    )
};

export default DataRowLabel;
