import React, {ReactElement} from 'react';
import {TheadKidLabel, TheadTr} from "../";
import {TheadWrapperProps} from '../../../types';
import {generate} from "shortid";
import {propsIsEqual} from "../../../utils/MemoHandler";

const TheadWrapper: React.FC<TheadWrapperProps> = ({label, labels}: TheadWrapperProps): ReactElement => {
    const labelsSize: number = labels.length + 1;
    const labelIsValid = label && labelsSize > 1;
    return (
        <>
            {labelIsValid && <TheadKidLabel label={label} size={labelsSize}/>}
            {
                <TheadTr label={false}>
                    {
                        labels.map((label: string, index: number) => {
                            let uniqId: string = generate();
                            let firstElement = index === 0;
                            return (
                                <React.Fragment key={uniqId}>
                                    {firstElement && <th className="data-table__label--empty"/>}
                                    <th className="data-table__label">{label}</th>
                                </React.Fragment>
                            )
                        })
                    }
                </TheadTr>
            }
        </>
    );
};

export default React.memo(TheadWrapper, propsIsEqual());
