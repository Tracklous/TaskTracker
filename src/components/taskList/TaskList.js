import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskList.styles';
import { image } from '../../assets';
import { Colors } from '../../themes';
import { millisecondsToFormat } from '../../utils/timeUtils';
import { showModalEditTask } from '../../redux/editModalSlice/EditModal.action';
import { deleteTask, startClockAction, stopClockAction } from '../../redux/trackerSlice/Tracker.action';

const TimerClock = ({ startTime, taskPaused }) => {
    const getTimeDiff = ()=> {
        return new Date().getTime() - Number(startTime)
    };

    const [timerClock, setTimerClock] = useState(getTimeDiff());

    useEffect(() => {
        let clockIntervalId;
        if (taskPaused) {
            clockIntervalId = setInterval(() => {
                setTimerClock(millisecondsToFormat(getTimeDiff()));
            }, 1000)
        }
        return () => clearInterval(clockIntervalId)
    }, [timerClock, taskPaused]);

    return (
        <View style={styles.timerView}>
            <Image source={image.clock} style={styles.clockIcon} />
            <Text style={styles.timeText} numberOfLines={1}>{millisecondsToFormat(new Date().getTime() - Number(startTime))}</Text>
        </View>
    )
};

const TaskList = ({ }) => {
    const dispatch = useDispatch();
    const tasksArray = useSelector(({ searchReducer, trackerReducer }) => {
        const listData = searchReducer && (searchReducer.taskList.length > 0 || searchReducer.isSearching) ? searchReducer.taskList : trackerReducer;
        return listData;
    });

    const startTask = (id) => {
        dispatch(startClockAction(id))
    }

    const stopTask = (id) => {
        dispatch(stopClockAction(id))
    }

    const editTask = (item) => {
        dispatch(showModalEditTask(item))
    };

    const deleteTaskAction = (id) => {
        dispatch(deleteTask(id))
    }

    const renderClock = (ended, inProgress, startTime) => {
        if (ended || inProgress) {
            return (
                <TimerClock startTime={startTime} taskPaused={inProgress} />
            )
        }
    }

    const renderItemView = ({ _, item }) => {

        return (
            <View style={styles.itemView}>
                <Text style={styles.taskTitleText} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.descText} numberOfLines={3}>{item.description}</Text>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.startButton}
                        onPress={() => item.inProgress ? stopTask(item.id) : startTask(item.id)}
                    >
                        <Text style={[styles.buttonText, { color: item.inProgress ? Colors.grey_140 : Colors.tealBlue }]}>{item.inProgress ? "STOP" : "START"}</Text>
                    </Pressable>
                    <Pressable style={styles.editButton}
                        onPress={() => editTask(item)}
                    >
                        <Text style={styles.buttonText}>EDIT</Text>
                    </Pressable>
                    <Pressable style={styles.editButton}
                        onPress={() => deleteTaskAction(item.id)}
                    >
                        <Text style={[styles.buttonText, { color: 'red' }]}>DELETE</Text>
                    </Pressable>
                </View>
                {
                    renderClock(item.endTimestamp.length, item.inProgress, item.startTimestamp)
                }

            </View>
        )
    };

    const renderEmptyView = () => {
        return (
            <View style={styles.emptyView}>
                <Text style={styles.emptyText}>No Tasks</Text>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 150 }}
                data={tasksArray}
                extraData={tasksArray}
                ListEmptyComponent={renderEmptyView}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItemView}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default TaskList;