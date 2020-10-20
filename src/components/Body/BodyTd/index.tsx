import React, {ReactElement} from "react";
import {BodyTdProps} from "../../../types";

const BodyTd: React.FC<BodyTdProps> = ({value, firstElement, firstElementClassNames, handleRemove}: BodyTdProps): ReactElement => {
    return (
        <React.Fragment>
            {firstElement && <td className={firstElementClassNames.join(" ")}><button onClick={handleRemove}>X</button></td>}
            <td className="data-table__td">
                {value}
            </td>
        </React.Fragment>
    )
};

export default BodyTd;
