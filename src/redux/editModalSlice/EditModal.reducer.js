import Types from './Types';

const { SHOW_MODAL_STORE, HIDE_MODAL_AND_RESET } = Types;

const initialState = {
    showModal: false,
    title: 'Create New Task',
    type: 'create',
    modalData: {}
};

const editModalReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL_STORE:
            return { ...state, ...payload };
        case HIDE_MODAL_AND_RESET:
            return { ...{ showModal: false, modalData: {} } };
        default:
            return state;
    };
};

export {
    editModalReducer
};