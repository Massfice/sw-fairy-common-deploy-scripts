import yargs, { Argv } from 'yargs';
import { PackageConfigFunction } from '../types';

const packageConfig: PackageConfigFunction = (dirname) => {
    const { argv } = yargs(process.argv.slice(2)).command(
        'gulp deploy [token]',
        'Set token for package deploy',
    ) as Argv<{ token: string | boolean }>;

    if (argv instanceof Promise || typeof argv.token === 'boolean' || !argv.token) {
        throw new Error('Invalid token');
    }

    return {
        dirname,
        npmToken: argv.token,
    };
};

export default packageConfig;
