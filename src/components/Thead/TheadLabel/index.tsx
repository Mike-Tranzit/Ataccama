import React, {ReactElement} from 'react';
import {DataRowLabelProps} from "../../../types";

const TheadLabel: React.FC<DataRowLabelProps<string>> = ({label}: DataRowLabelProps<string>): ReactElement => {
    return (
        <th>{label}</th>
    )
};

export default React.memo(TheadLabel);
