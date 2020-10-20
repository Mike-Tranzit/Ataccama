import React, {PropsWithChildren} from 'react';
import {IDataItem} from "./data.interface";

export type WrapperProps = PropsWithChildren<{
    dataList: IDataItem[],
    label: string | false
} & PathToRemove>

export type DataRowProps = PropsWithChildren<{
    item: IDataItem
} & PathToRemove>

export type DataRowLabelProps<T> = PropsWithChildren<{
   label: T
}>;


export type BodyWrapperProps = PropsWithChildren<{
    dataList: IDataItem[]
} & PathToRemove>

export type TheadWrapperProps = PropsWithChildren<{
    labels: string[]
} & Label>


export type BodyExtraTdProps = PropsWithChildren<{
    colSpan: number,
    kidsArray: {label: string, value: []},
} & PathToRemove>

export type TheadKidLabelProps = PropsWithChildren<{ size: number } & Label>;

export type BodyTdProps = PropsWithChildren<{
    readonly handleRemove: (event: React.MouseEvent) => void,
    readonly firstElementClassNames: string[],
    readonly firstElement: boolean,
    readonly value: string
}>

type Label = {
    label: string | false
}

type PathToRemove = {
    path: string
}


