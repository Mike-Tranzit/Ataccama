import {IDataItem} from "../types";

export const dataHandlers = (setList: Function, setLastRemovePath: Function, Creator: any) => {
    const handlerRemove = function (path: string) {
        setList((prevState: IDataItem[]) => {
            const stateChecker = new Creator(prevState, path);
            stateChecker.omitByPath();
            stateChecker.checkLastPath();
            return stateChecker.getNewStateAsArray();
        });
        setLastRemovePath(path);
    };

    const removeHandler = (path: string) => (event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        handlerRemove(path);
    };

    return {
        removeHandler
    };
};
