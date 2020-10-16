import React, {ReactElement} from 'react';
import {DataRowLabelProps} from "../../../types";
import { TheadLabel } from "../";
import './style.css';

const TheadTr: React.FC<DataRowLabelProps<string | boolean>> = ({label = false, children}: DataRowLabelProps<string | boolean>): ReactElement => {
    return (
            <tr>
                {label && <TheadLabel label={label as string}/>}
                {children}
            </tr>
    )
};

export default TheadTr;
