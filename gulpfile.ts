import { deployPackage, configs } from './src';

const config = configs.package(__dirname);
const deploy = deployPackage(config);

export { deploy };
