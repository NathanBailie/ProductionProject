import { Profile } from '@/entities/Profile';
import { ValidateProfileErrors } from '../consts/consts';

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    isError?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileErrors[];
}
