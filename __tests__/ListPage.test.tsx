import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { ListPage } from '../pages/ListPage';
import server from '../mocks/server';

describe('List page test', () => {

    beforeAll(() => {
        server.listen();
    });

    afterEach(() => server.resetHandlers());

    afterAll(() => {
        server.close();
    });

    test('Show the users from the API', async () => {
        render(<ListPage />);
        await waitFor(() => {
            const userList = screen.getByTestId('user-list');
            expect(userList).toBeTruthy();
        });
    });

});