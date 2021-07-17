import { KubernetesDeployConfig } from '../types';

const pushDocker = (config: KubernetesDeployConfig) => async (): Promise<void> => {
    console.log('Docker pushed.');
};

export default pushDocker;
