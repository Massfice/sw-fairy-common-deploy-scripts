import { deployPackage, deployKubernetes, configs } from './src';

// const config = configs.package(__dirname);

const deploy = deployKubernetes({
    commitId: '',
    dirname: __dirname,
});

export { deploy };
