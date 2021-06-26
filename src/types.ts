import { TaskFunction, TaskFunctionWrapped } from 'undertaker';

interface KubernetesDeployConfig {
    commitId: string;
}

type KubernetessDeployFunction = (config: null) => TaskFunction | TaskFunctionWrapped;

type PackageDeployFunction = (config: null) => TaskFunction | TaskFunctionWrapped;

export { KubernetessDeployFunction, PackageDeployFunction, KubernetesDeployConfig };
