import yargs, { Argv } from 'yargs';
import { KubernetesConfigFunction } from '../types';

const kubernetesConfig: KubernetesConfigFunction = (dirname, server, dockerImage) => {
    const { argv } = yargs(process.argv.slice(2)).command(
        'gulp deploy [commit, dtoken, ktoken]',
        'Set commitId for kubernetes deploy',
    ) as Argv<{ commit: string | boolean; dtoken: string | boolean; ktoken: string | boolean }>;

    if (argv instanceof Promise) {
        throw new Error('Something went wrong');
    }

    const { commit, dtoken, ktoken } = argv;

    if (
        typeof commit === 'boolean' ||
        !commit ||
        typeof dtoken === 'boolean' ||
        !dtoken ||
        typeof ktoken === 'boolean' ||
        !ktoken
    ) {
        throw new Error('Something went wrong');
    }

    return {
        dirname,
        server,
        dockerImage,
        commitId: commit,
        kubeToken: ktoken,
        dockerToken: dtoken,
    };
};

export default kubernetesConfig;
