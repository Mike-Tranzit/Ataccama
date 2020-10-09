
interface IData {
    [key: string] : string
}


export interface IDataItem {
    data: IData,
    kids: {
        has_relatives?: {
            records: IDataItem[]
        },
        has_phone?: {
            records: IDataItem[]
        }
    }
}

export interface IDefaultData {
    default: IDataItem[]
}
