import { TaskFunction, TaskFunctionWrapped } from 'undertaker';

interface KubernetesDeployConfig {
    commitId: string;
    dirname: string;
}

interface PackageDeployConfig {
    npmToken: string | undefined;
    dirname: string;
}

type KubernetesConfigFunction = (dirname: string) => KubernetesDeployConfig;
type PackageConfigFunction = (dirname: string) => PackageDeployConfig;

type KubernetessDeployFunction = (config: KubernetesDeployConfig) => TaskFunction | TaskFunctionWrapped;
type PackageDeployFunction = (config: PackageDeployConfig) => TaskFunction | TaskFunctionWrapped;

export {
    KubernetessDeployFunction,
    PackageDeployFunction,
    KubernetesDeployConfig,
    PackageDeployConfig,
    KubernetesConfigFunction,
    PackageConfigFunction,
};
