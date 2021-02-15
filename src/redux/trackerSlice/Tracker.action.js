import Types from './Types';

const { ADD_TASK, EDIT_TASK, DELETE_TASK } = Types;

const addTask = (payload) => {
    return { type: ADD_TASK, payload };
};

const editTask = (payload) => {
    return { type: EDIT_TASK, payload };
};

const deleteTask = (id) => {
    return (dispatch, getState) => {
        let taskListArr = getState().trackerReducer;
        const foundIndex = taskListArr.findIndex((item) => item.id === id);
        taskListArr.splice(foundIndex, 1);
        dispatch({ type: DELETE_TASK, payload: taskListArr });
    };
};

const startClockAction = (id) => {
    return (dispatch, getState) => {
        const taskListArr = getState().trackerReducer;
        const foundIndex = taskListArr.findIndex((item) => item.id === id);

        if (foundIndex > -1) {
            taskListArr[foundIndex].startTimestamp = taskListArr[foundIndex].startTimestamp.length > 0 ? taskListArr[foundIndex].startTimestamp : new Date().getTime().toString();
            taskListArr[foundIndex].inProgress = true;
            dispatch(editTask(taskListArr));
        }
    }
};
const stopClockAction = (id) => {
    return (dispatch, getState) => {
        const taskListArr = getState().trackerReducer;
        const foundIndex = taskListArr.findIndex((item) => item.id === id);

        if (foundIndex > -1) {
            taskListArr[foundIndex].endTimestamp = new Date().getTime().toString();
            taskListArr[foundIndex].inProgress = false;
            dispatch(editTask(taskListArr));
        }
    }
};

export {
    addTask,
    editTask,
    deleteTask,
    startClockAction,
    stopClockAction
};