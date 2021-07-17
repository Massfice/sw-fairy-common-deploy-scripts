import Stream from 'stream';
import Vinyl from 'vinyl';
import gulp from 'gulp';
import { PackageDeployConfig } from '../types';

const createNPMrc = (config: PackageDeployConfig) => (): Stream => {
    const { npmToken, dirname } = config;

    if (!npmToken) {
        throw new Error('Invalid npm token');
    }

    return new Stream.Readable({
        objectMode: true,
        read: function () {
            this.push(
                new Vinyl({
                    path: '.npmrc',
                    contents: Buffer.from(`//registry.npmjs.org/:_authToken=${npmToken}`, 'utf-8'),
                }),
            );
            this.push(null);
        },
    }).pipe(gulp.dest(dirname));
};

export default createNPMrc;
