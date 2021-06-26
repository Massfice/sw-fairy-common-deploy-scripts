import { TaskFunction, TaskFunctionWrapped } from 'undertaker';

interface KubernetesDeployConfig {
    commitId: string;
}

interface PackageDeployConfig {
    npmToken: string | undefined;
    dirname: string;
}

type KubernetessDeployFunction = (config: PackageDeployConfig) => TaskFunction | TaskFunctionWrapped;

type PackageDeployFunction = (config: PackageDeployConfig) => TaskFunction | TaskFunctionWrapped;

export { KubernetessDeployFunction, PackageDeployFunction, KubernetesDeployConfig, PackageDeployConfig };
