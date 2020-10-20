export function childVisibleInitialState (lastRemovePath: string, path: string) {
    let initState = false;
    if(lastRemovePath.indexOf(`${path}.`) === 0) {
        initState = true;
    }
    return initState;
}
