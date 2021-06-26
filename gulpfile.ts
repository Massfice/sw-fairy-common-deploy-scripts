import { deployPackage } from './src';

console.log(__dirname, process.env.NPM_TOKEN);

const deploy = deployPackage({
    npmToken: process.env.NPM_TOKEN,
    dirname: __dirname,
});

export { deploy };
