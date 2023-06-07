import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { 
    StyleSheet, 
    Modal, 
    Button, 
    View, 
    SafeAreaView,
    TextInput,
} from 'react-native';

export function AddTask() {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [task, setTask] = useState('');
    
    const handleAddTask = () => {
        
        if (task === '') {
            return false;
        }
        
        setModalVisible(!modalVisible);
        dispatch(addTask(task));
        setTask('');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View testID='add-task-view'>
                <Modal
                    visible={modalVisible}
                    testID='add-task-modal'
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput
                                inputMode='text'
                                style={styles.inputText}
                                placeholder="New Task Name"
                                value={task}
                                onChangeText={task => setTask(task)}
                                testID='task-name-input'
                            />
                            <View style={styles.buttonContainer}>
                                <Button
                                    title='Add'
                                    onPress={handleAddTask}
                                    testID='add-task-btn'
                                />
                            </View>
                        </View>
                    </View>
                </Modal>
                <Button
                    title='New Task'
                    onPress={() => setModalVisible(!modalVisible)}
                    testID='new-task-btn'
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 16
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    inputText: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        width: '80%',
    }
});
