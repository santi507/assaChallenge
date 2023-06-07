import { render, screen, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('Navigation test', () => {

    test('Should be navigate to Task Page', async () => {
        render(<App />);
        const navigateToTasktBtn = screen.getByTestId('navigate-to-task');
        expect(navigateToTasktBtn).toBeDefined();
        fireEvent(navigateToTasktBtn, 'press');

        screen.getByTestId('add-task-view');
    });

    test('Should be navigate to List Page', async () => {
        render(<App />);
        const navigateToTasktBtn = screen.getByTestId('navigate-to-list');
        expect(navigateToTasktBtn).toBeDefined();
        fireEvent(navigateToTasktBtn, 'press');

        screen.getByTestId('loading-indicator');
    });

});