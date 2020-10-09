import {PropsWithChildren} from 'react';
import {IDataItem} from "./data.interface";

export type WrapperProps = PropsWithChildren<{
    dataList: IDataItem[]
}>

export type DataRowProps = PropsWithChildren<{
    item: IDataItem,
    showLabel: boolean
}>

export type DataRowLabelProps<T> = PropsWithChildren<{
   label: T
}>;
