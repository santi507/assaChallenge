import { View, FlatList, StyleSheet, Text } from "react-native"
import { useSelector } from 'react-redux'

export function ListTask() {
    const tasks = useSelector((state: any) => {        
        return state.task.tasks
    });

    const renderTask = ({item}: any) => {
        
        return (
            <View style={styles.taskContainer}>
                <Text style={{color:"black"}} testID="task-item">{item}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                renderItem={renderTask}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 16
    },
    taskContainer: {
        margin: 8,
        borderWidth:0.5,
        borderColor: 'black',
        padding: 8,
        backgroundColor: '#fff',
    }
});
