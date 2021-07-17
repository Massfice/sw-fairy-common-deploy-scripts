import yargs, { Argv } from 'yargs';
import { KubernetesConfigFunction } from '../types';

const kubernetesConfig: KubernetesConfigFunction = (dirname, server) => {
    const { argv } = yargs(process.argv.slice(2)).command(
        'gulp deploy [commitId]',
        'Set commitId for kubernetes deploy',
    ) as Argv<{ commit: string | boolean }>;

    if (argv instanceof Promise || typeof argv.commit === 'boolean' || !argv.commit) {
        throw new Error('Invalid commitId');
    }

    return {
        dirname,
        server,
        commitId: argv.commit,
    };
};

export default kubernetesConfig;
