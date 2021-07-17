import childProcess from 'child_process';
import { KubernetesDeployConfig } from '../types';

const buildDocker = (config: KubernetesDeployConfig) => async (): Promise<boolean> => {
    const command = `docker build . --tag ${config.dockerImage}:${config.commitId}`;

    return new Promise(
        (
            resolve: (value: boolean | PromiseLike<boolean>) => void,
            reject: (error: childProcess.ExecException) => void,
        ) => {
            childProcess.exec(command, (error) => {
                if (error) {
                    reject(error);
                }

                resolve(true);
            });
        },
    );
};

export default buildDocker;
