import { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator,
} from 'react-native';

type User = {
    id: number,
    name: string,
    avatar: string
}

export function ListPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = () => {
        fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements')
            .then(response => response.json())
            .then(jsonResponse => {
                setUsers(jsonResponse);
                setLoading(false);
            })
            .catch(error => console.log(error))
    };

    const renderUser = ({ item }: any) => {
        return (
            <View style={styles.listContainerItem}>
                <Text style={{ color: "black" }}>Name : {item.name}</Text>
            </View>
        );
    };

    if (loading) {
        return (
            <View style={styles.container} testID="loading-indicator">
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={styles.container} testID="user-list-container">
            <FlatList
                data={users}
                renderItem={renderUser}
                testID="user-list"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    listContainerItem: {
        margin: 8,
        borderWidth: 0.5,
        borderColor: 'black',
        padding: 8,
        backgroundColor: '#fff',
    }
});
