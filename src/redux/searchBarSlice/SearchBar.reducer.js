import Types from './Types';

const { SEARCH_QUERY, RESET_SEARCH } = Types;
const initialState = { isSearching: false, taskList: [] };

const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_QUERY:
            return { ...{ isSearching: payload.isSearching, taskList: payload.taskList } };
        case RESET_SEARCH:
            return { ...{ isSearching: false, taskList: [] } };
        default:
            return state;
    };
};

export {
    searchReducer
};