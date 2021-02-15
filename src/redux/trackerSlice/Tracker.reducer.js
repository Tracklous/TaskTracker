import Types from './Types';

const { ADD_TASK, EDIT_TASK, DELETE_TASK } = Types;

const initialState = [
    {
        id: '3213123123',
        title: 'Create a time-tracking RN app',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
        startTimestamp: '',
        endTimestamp: '',
        elapsedTime: '',
        inProgress: false
    },
    {
        id: '12312',
        title: 'Demo Task',
        description: 'This is a demo description.',
        startTimestamp: '',
        endTimestamp: '',
        elapsedTime: '',
        inProgress: false
    }
];

const trackerReducer = (state = initialState, { type, payload = [] }) => {
    switch (type) {
        case ADD_TASK:
            return [...payload];
        case EDIT_TASK:
            return [...payload];
        case DELETE_TASK:
            return [...payload];
        default:
            return state;
    };
};

export {
    trackerReducer
}