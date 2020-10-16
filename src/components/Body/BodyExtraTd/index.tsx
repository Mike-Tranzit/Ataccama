import React, {ReactElement} from 'react';
import Wrapper from "../../Wrapper";
import {BodyExtraTdProps} from '../../../types';

const BodyExtraTd: React.FC<BodyExtraTdProps> = ({colSpan, kidsArray, path}: BodyExtraTdProps): ReactElement => {
    return (
        <td colSpan={++colSpan} className="data-table__td-kit">
            <Wrapper dataList={kidsArray.value} label={kidsArray.label} path={`${path}.kids.${kidsArray.label}.records`}/>
        </td>
    );
};

export default BodyExtraTd;
