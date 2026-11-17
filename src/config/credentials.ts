import { envOr } from './env';

const password = process.env.TTA_SECRET;
if (!password) {
    throw new Error('TTA_SECRET must be set in the environment to run browser login tests.');
}

export const credentials = {
    standardUser: envOr('STANDARD_USER', 'standard_user'),
    password,
} as const;