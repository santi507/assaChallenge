import store from '../redux/store';
import { Provider } from "react-redux"
import { AddTask } from "../components/AddTask"
import { ListTask } from '../components/ListTask';

export function TasksPage() {
    return (
        <Provider store={store}>
            <AddTask />
            <ListTask />
        </Provider>
    )
}
