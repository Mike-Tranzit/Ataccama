import {IDataItem} from "../types";
import _ from "lodash";

export default class StateCreator {
    constructor(public prevState: IDataItem[], private path: string, private newState: IDataItem[] = []) {
    }

    /**
     * create new initial state without del element
     */
    omitByPath() {
        this.newState = _.toArray(_.omit(this.prevState, this.path));
    }

    checkLastPath() {
        const pathToFilter = this.path.substring(0, this.path.lastIndexOf('.'));
        const lastWord = pathToFilter.substring(pathToFilter.lastIndexOf('.') + 1);
        if(lastWord === 'records') {
            const filteredState = this.filterNewState(pathToFilter);
            this.setFilteredState(filteredState, pathToFilter);
        }
        this.lastWordIsNumber(lastWord, pathToFilter);
    }

    /**
     * Remove and filtering (remove null, undefined) items in kids objects
     * @param pathToFilter
     */
    private filterNewState(pathToFilter: string) {
        return _.filter(_.get(this.newState, pathToFilter), (v: any) => Boolean(v));
    }

    /**
     * set new array without null, undefined
     * @param filteredState
     * @param pathToFilter
     */
    private setFilteredState(filteredState: Object[], pathToFilter: string) {
        if(filteredState.length === 0) {
            const kidsPath = pathToFilter.substring(0, this.path.lastIndexOf('kids'));
            _.set(this.newState, `${kidsPath}kids`, {});
        } else {
            _.set(this.newState, pathToFilter, filteredState)
        }
    }

    /**
     * check that last word is number
     * @param lastWord
     * @param pathToFilter
     */
    private lastWordIsNumber(lastWord: string, pathToFilter: string) {
        if(/^\d+$/.test(lastWord) && !_.get(this.newState, `${pathToFilter}.kids`)) {
           _.set(this.newState, `${pathToFilter}.kids`, {});
        }
    }

    /**
     * return new state
     */
    getNewStateAsArray() {
        return this.newState;
    }
}
