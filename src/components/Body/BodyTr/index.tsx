import React, {ReactElement, useContext, useState} from 'react';
import {DataRowProps} from "../../../types";
import {generate} from 'shortid';
import {DataContext} from "../../../context/DataContext";
import {kidsIsNotEmpty} from "../../../utils/KidsHandlers";
import {BodyTd, BodyExtraTd} from "../";
import {childVisibleInitialState} from "../../../utils/ChildVisibleInitialState";
import './style.css';


const BodyTr: React.FC<DataRowProps> = ({item, path}: DataRowProps): ReactElement => {
    const {removeHandler, lastRemovePath} = useContext<any>(DataContext);
    const initState = childVisibleInitialState(lastRemovePath, path);
    const [opened, setOpen] = useState<boolean>(initState);
    const handleClick = () => setOpen(!opened);

    const {data, kids = {}} = item;
    const kidsArray = kidsIsNotEmpty(kids);
    const dataValues = Object.values(data);
    const dataValuesLength = dataValues.length;
    const handleRemove = removeHandler(path);

    const firstElementClassNames = ['data-table__td--empty'];
    if (kidsArray) {
        firstElementClassNames.push(
            opened ? "data-table__td--open" : "data-table__td--close"
        );
    }

    return (
        <React.Fragment>
            {
                <tr onClick={handleClick}>
                    {
                        dataValues.map((value: string, index: number) => {
                            let key = generate();
                            const payload = {
                                value,
                                firstElement: index === 0,
                                firstElementClassNames,
                                handleRemove
                            };
                            return <BodyTd {...payload} key={key}/>
                        })
                    }
                </tr>
            }
            {kidsArray && opened && (
                <tr className="data-table__tr-kit">
                    <BodyExtraTd colSpan={dataValuesLength} kidsArray={kidsArray} path={path}/>
                </tr>
            )
            }
        </React.Fragment>
    );
};

export default BodyTr;
