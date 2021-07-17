import { deployPackage, deployKubernetes, configs } from './src';

const config = configs.kubernetes(__dirname, 'https://9766b21f-9055-436e-a20a-8018422119a5.k8s.ondigitalocean.com');
// const deploy = deployPackage(config);

const deploy = deployKubernetes(config);

export { deploy };
