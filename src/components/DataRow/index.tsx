import React, {ReactElement} from 'react';
import {DataRowProps} from "../../types";
import DataRowThead from "../DataRowThead";
import { generate } from 'shortid';
import './style.css';

const DataRow: React.FC<DataRowProps> = ({item, showLabel}: DataRowProps): ReactElement => {
    const {data, kids} = item;
    return (
            <>
            {showLabel && <DataRowThead label={false}>
                {
                    Object.keys(data).map((label: string, index: number) => {
                        let key = generate();
                        let firstElement = index === 0;
                        return (
                            <>
                            {firstElement && <th className="data-table__label--empty"/>}
                            <th className="data-table__label" key={key}>{label}</th>
                            </>
                        )
                    })
                }
            </DataRowThead>}
            </>
    );
};

export default DataRow;
