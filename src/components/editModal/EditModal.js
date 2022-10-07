import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from "../../themes";
import { normalize, vh, vw } from "../../utils/dimension";
import { closeModal, createTask, doEdit } from '../../redux/editModalSlice/EditModal.action';

const TASK_TYPE_CREATE = 'create';
const ANIM_TYPE = 'slide';
const TASK_PLACEHOLDER = "Task Title";
const TASK_DESCRIPTION = "Description";

const EditModal = () => {
    const dispatch = useDispatch();
    const { showModal, title, type, modalData } = useSelector(({ editModalReducer }) => editModalReducer);
    const [titleVal, setTitleVal] = useState('');
    const [desc, setDesc] = useState('');
    const isNewTask = type === TASK_TYPE_CREATE;

    useEffect(() => {
        setTitleVal(isNewTask ? '' : modalData.title);
        setDesc(isNewTask ? '' : modalData.description);
    }, [showModal]);

    const closeModalAction = () => {
        dispatch(closeModal())
    };

    const onSubmit = () => {
        const submitAction = isNewTask ? createTask : doEdit;
        dispatch(submitAction(titleVal, desc, modalData.id ))
    };

    return (
        <Modal
            animationType={ANIM_TYPE}
            transparent={true}
            visible={showModal}
            onRequestClose={closeModalAction}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <TextInput
                        style={styles.inputStyle}
                        value={titleVal}
                        onChangeText={(val => setTitleVal(val))}
                        placeholder={TASK_PLACEHOLDER}
                    />
                    <TextInput
                        style={styles.inputStyle}
                        value={desc}
                        onChangeText={(val => setDesc(val))}
                        placeholder={TASK_DESCRIPTION}
                        multiline
                    />
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={[styles.buttonClose, styles.closeButton]}
                            onPress={closeModalAction}
                        >
                            <Text style={[styles.textStyle, { color: "rgba(102,235,143,0.8)" }]}>close</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.buttonClose, { backgroundColor: !(titleVal && titleVal.length > 0 && desc.length > 0) ? Colors.grey_140 : "rgba(102,235,143,0.8)" }]}
                            onPress={onSubmit}
                            disabled={!(titleVal && titleVal.length > 0 && desc.length > 0)}
                        >
                            <Text style={styles.textStyle}>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.black_02
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.white,
        width: normalize(330),
        minHeight: normalize(220),
        borderRadius: 20,
        padding: normalize(20),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonContainer: {
        marginTop: normalize(20),
        flexDirection: 'row'
    },
    buttonClose: {
        width: vw(100),
        borderRadius: vh(20),
        padding: 8
    },
    closeButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'rgba(102,235,143,0.8)',
        marginEnd: vw(10)
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        color: Colors.tealBlue,
        fontSize: 17,
        fontWeight: 'bold'
    },
    inputStyle: {
        backgroundColor: Colors.offWhite,
        padding: normalize(8),
        marginTop: normalize(10)
    }
});

export default EditModal;