import React from 'react';
import {TheadKidLabelProps} from "../../../types";
import './style.css';

const TheadKidLabel = ({label, size}: TheadKidLabelProps) => {
    return (
        <tr className="data-table__kit-label">
            <th colSpan={size}>{label}</th>
        </tr>
    )
};

export default TheadKidLabel;
