import * as _package from './deployPackage';
import * as _k8s from './deployK8s';
import * as types from './types';

const registerDeployPackage = (name: string, register: types.RegisterFunction = _package.register): void => {
    register(name, _package.invoke);
};

const registerDeployKubernetes = (name: string, register: types.RegisterFunction = _k8s.register): void => {
    register(name, _k8s.invoke);
};

const deployPackage = { register: registerDeployPackage };
const deployKubernetes = { register: registerDeployKubernetes };

export { deployPackage, deployKubernetes };
