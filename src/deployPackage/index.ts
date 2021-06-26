import gulp from 'gulp';
import Stream from 'stream';
import Vinyl from 'vinyl';
import childProcess from 'child_process';
import { PackageDeployFunction } from '../types';

const createNPMRC = (npmToken: string): Stream => {
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
    });
};

const publishPackage = (): Promise<boolean> => {
    return new Promise(
        (
            resolve: (value: boolean | PromiseLike<boolean>) => void,
            reject: (error: childProcess.ExecException) => void,
        ) => {
            childProcess.exec('npm publish', (error) => {
                if (error) {
                    reject(error);
                }

                resolve(true);
            });
        },
    );
};

const invoke: PackageDeployFunction = (config) => {
    const prepare = async (): Promise<void> => {
        if (!config.npmToken) {
            return;
        }

        createNPMRC(config.npmToken).pipe(gulp.dest(config.dirname));
    };

    return gulp.series(prepare, publishPackage);
};

export default invoke;
