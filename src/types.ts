import { TaskFunction, TaskFunctionWrapped } from 'undertaker';

type KubernetessDeployFunction = (config: null) => TaskFunction | TaskFunctionWrapped;

type PackageDeployFunction = (config: null) => TaskFunction | TaskFunctionWrapped;

export { KubernetessDeployFunction, PackageDeployFunction };
