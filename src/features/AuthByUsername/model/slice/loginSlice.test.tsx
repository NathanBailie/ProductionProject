import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('Username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'username' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('username123'),
            ),
        ).toEqual({ username: 'username123' });
    });

    test('Password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'password' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('password123'),
            ),
        ).toEqual({ password: 'password123' });
    });
});
