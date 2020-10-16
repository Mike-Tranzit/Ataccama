import React, {ReactElement} from "react";

const BodyTd: React.FC = ({value, firstElement, firstElementClassNames, handleRemove}: any): ReactElement => {
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
