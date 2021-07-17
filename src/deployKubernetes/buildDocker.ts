import { KubernetesDeployConfig } from '../types';

const buildDocker = (config: KubernetesDeployConfig) => async (): Promise<void> => {
    console.log('Docker has been build.');
};

export default buildDocker;
