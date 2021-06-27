import { KubernetesConfigFunction } from '../types';

const kubernetesConfig: KubernetesConfigFunction = (dirname) => {
    return {
        dirname,
        commitId: '',
    };
};

export default kubernetesConfig;
