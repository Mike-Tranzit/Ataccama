import _ from "lodash";

export const propsIsEqual = (field: string = '') => (prevProps: any, nextProps: any) => {
    if (field) {
        return _.isEqual(prevProps[field], nextProps[field]);
    }
    return _.isEqual(prevProps, nextProps);
};

