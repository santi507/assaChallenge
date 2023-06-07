import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./pages/HomePage";
import { TasksPage } from "./pages/TasksPage";
import { ListPage } from "./pages/ListPage";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Tasks" component={TasksPage} />
        <Stack.Screen name="List" component={ListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
