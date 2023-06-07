import { StyleSheet, Button, SafeAreaView, View } from 'react-native';

export function HomePage({navigation}: {navigation: any}) {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            testID='navigate-to-task'
            title='Tasks'
            onPress={() => navigation.navigate('Tasks') }
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            testID='navigate-to-list'
            title='List'
            onPress={() => navigation.navigate('List') }
          />
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: {
      margin: 16,
    }
});
