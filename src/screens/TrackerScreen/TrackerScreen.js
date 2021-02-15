import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './TrackerScreen.styles';
import Header from '../../components/header/Header';
import TaskList from '../../components/taskList/TaskList';
import SearchBar from '../../components/searchBar/SearchBar';
import { showModalCreateTask } from '../../redux/editModalSlice/EditModal.action';

const TrackerScreen = () => {
    const dispatch = useDispatch();
    const createTask = () => dispatch(showModalCreateTask())

    return (
        <View style={styles.trackerContainer}>
            <Header title="Task Tracker" />
            <SearchBar />
            <TaskList />
            <Pressable style={styles.creatTaskView}
                onPress={createTask}>
                <Text style={styles.createText}>+</Text>
            </Pressable>
        </View>
    )
};

export default TrackerScreen;