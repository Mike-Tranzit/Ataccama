import React, {ReactElement} from 'react';
import {IDataItem, BodyWrapperProps} from "../../../types";
import {generate} from "shortid";
import {BodyTr} from "../";
import {propsIsEqual} from "../../../utils/MemoHandler";

const BodyWrapper: React.FC<BodyWrapperProps> = ({dataList, path = ''}: BodyWrapperProps): ReactElement => {

    return (
        <>
            {
                dataList.map((item: IDataItem, index: number) => {
                    let uniqId: string = generate();
                    const newPath = path ? `${path}.${index}` : `${index}`;
                    return <BodyTr item={item} key={uniqId} path={newPath}/>
                })
            }
        </>
    );
};

export default React.memo(BodyWrapper, propsIsEqual());
