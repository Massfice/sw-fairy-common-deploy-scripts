import childProcess from 'child_process';
import { KubernetesDeployConfig } from '../types';

const runCommand = (command: string): Promise<boolean> => {
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

const pushDocker = (config: KubernetesDeployConfig) => async (): Promise<boolean> => {
    const taggedImage = `${config.dockerImage}:${config.commitId}`;

    const command1 = `docker login -u ${config.dockerToken} -p ${config.dockerToken} registry.digitalocean.com`;
    const command2 = `docker tag ${taggedImage} registry.digitalocean.com/sw-fairy-k8s/${taggedImage}`;
    const command3 = `docker push registry.digitalocean.com/sw-fairy-k8s/${taggedImage}`;

    await runCommand(command1);
    await runCommand(command2);
    await runCommand(command3);

    return true;
};

export default pushDocker;
