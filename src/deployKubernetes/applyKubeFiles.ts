import childProcess from 'child_process';
import { KubernetesDeployConfig } from '../types';

const appyKubeFiles = (config: KubernetesDeployConfig) => async (): Promise<boolean> => {
    const command = `kubectl --kubeconfig=/dev/null --server=${config.server} --insecure-skip-tls-verify --token=${config.kubeToken} apply -f ./kubeprepared/`;

    return new Promise(
        (
            resolve: (value: boolean | PromiseLike<boolean>) => void,
            reject: (error: childProcess.ExecException) => void,
        ) => {
            childProcess.exec(command, { cwd: __dirname }, (error) => {
                if (error) {
                    reject(error);
                }

                resolve(true);
            });
        },
    );
};

export default appyKubeFiles;
