import Types from './Types';
import { generateUUID } from '../../utils/uuid';
import { addTask, editTask } from '../trackerSlice/Tracker.action';

const { SHOW_MODAL_STORE, HIDE_MODAL_AND_RESET } = Types;

const showModalCreateTask = () => {
    const payload = {
        showModal: true,
        title: 'Create New Task',
        type: 'create',
        modalData: {}
    }
    return { type: SHOW_MODAL_STORE, payload }
}

const showModalEditTask = (taskItem) => {
    const payload = {
        showModal: true,
        title: 'Edit Task',
        type: 'edit',
        modalData: {
            ...taskItem
        }
    };

    return { type: SHOW_MODAL_STORE, payload }
}

const createTask = (title, desc, id) => {
    const payload = {
        id: generateUUID(),
        title: title,
        description: desc,
        startTimestamp: '',
        endTimestamp: '',
        elapsedTime: '',
        inProgress: false
    };

    return (dispatch, getState) => {
        const taskListArr = getState().trackerReducer
        taskListArr.push(payload);
        console.log('taskListArr', taskListArr)
        dispatch(addTask(taskListArr));
        dispatch({ type: HIDE_MODAL_AND_RESET });
    }
}

const doEdit = (title, desc, id) => {
    return (dispatch, getState) => {
        const taskListArr = getState().trackerReducer;
        const foundIndex = taskListArr.findIndex((item) => item.id === id);

        if (foundIndex > -1) {
            taskListArr[foundIndex].title = title;
            taskListArr[foundIndex].description = desc;
            dispatch(editTask(taskListArr));
        }
        dispatch({ type: HIDE_MODAL_AND_RESET });
    }
}

const closeModal = () => {
    return { type: HIDE_MODAL_AND_RESET, payload: {} }
}

export {
    showModalCreateTask,
    showModalEditTask,
    createTask,
    doEdit,
    closeModal,
}