import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { trackerReducer } from './trackerSlice/Tracker.reducer';
import { editModalReducer } from './editModalSlice/EditModal.reducer';
import { searchReducer } from './searchBarSlice/SearchBar.reducer';

const rootReducer = combineReducers({
    trackerReducer,
    editModalReducer,
    searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;