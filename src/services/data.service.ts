import * as initJsonData from '../data/data.json';
import {IDefaultData} from "../types";

export class DataService {
    getData() {
        return (initJsonData as unknown as IDefaultData).default;
    }
}
