import { render, screen, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { ListTask } from '../components/ListTask';
import { AddTask } from '../components/AddTask';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer, {addTask} from '../redux/taskSlice';

const store = configureStore({
    reducer: {
        task: taskReducer,
    }
});

function renderWithRedux(renderedComponent: any) {
    return render(<Provider store={store}>{renderedComponent}</Provider>);
}

describe('List tasks', () => {
    
    test('it should execute with a store with 3 tasks', async () => {
        
        // Tasks
        store.dispatch(addTask('Learn React Native'));
        store.dispatch(addTask('Learn Redux'));
        store.dispatch(addTask('Learn React Apollo'));
        
        renderWithRedux(<><ListTask /></>);

        const taskList = screen.getAllByTestId('task-item');
        
        expect(taskList.length).toEqual(3);
    });

    test('it should add a task', async () => {
        
        renderWithRedux(<><AddTask /><ListTask /></>);

        const newTaskBtn = screen.getByTestId('new-task-btn');
        fireEvent(newTaskBtn, 'press');

        const taskNameInput = screen.getByTestId('task-name-input');
        fireEvent.changeText(taskNameInput, 'Learn React Forms');

        const addTaskBtn = screen.getByTestId('add-task-btn');
        fireEvent(addTaskBtn, 'press');

        const addTaskModal = screen.getByTestId('add-task-modal');
        expect(addTaskModal.props).toMatchObject({
            visible: false,
        });

        const taskList = screen.getAllByTestId('task-item');
        expect(taskList.length).toEqual(4);
    });

    test('It should not be create a task if input is empty', async () => {
        
        renderWithRedux(<><AddTask /><ListTask /></>);

        const newTaskBtn = screen.getByTestId('new-task-btn');
        fireEvent(newTaskBtn, 'press');

        const addTaskBtn = screen.getByTestId('add-task-btn');
        fireEvent(addTaskBtn, 'press');

        const addTaskModal = screen.getByTestId('add-task-modal');
        expect(addTaskModal.props).toMatchObject({
            visible: true,
        });
    });

});
