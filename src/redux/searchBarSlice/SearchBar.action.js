import Types from './Types';
const { SEARCH_QUERY, RESET_SEARCH } = Types;

const resetSearchAction = () => {
    return { type: RESET_SEARCH, payload: [] }
};

const searchQueryAction = (query) => {
    return (dispatch, getState) => {
        const taskListArr = getState().trackerReducer;
        const isQuerying = query && query.length > 0;
        if (isQuerying) {
            const filteredData = taskListArr.filter((item) => {
                if ((item.title && item.title.includes(query)) || (item.description && item.description.includes(query))) return true
            });
            dispatch({ type: SEARCH_QUERY, payload: { isSearching: isQuerying, taskList: filteredData } });
        } else {
            dispatch(resetSearchAction());
        }
    }
};


export {
    searchQueryAction,
    resetSearchAction
}