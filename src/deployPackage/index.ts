import gulp from 'gulp';
import { PackageDeployFunction } from '../types';
import createNPMrc from './createNPMrc';
import publishPackage from './publishPackage';

const invoke: PackageDeployFunction = (config) => {
    const prepare = async (): Promise<void> => {
        if (!config.npmToken) {
            return;
        }

        createNPMrc(config.npmToken).pipe(gulp.dest(config.dirname));
    };

    return gulp.series(prepare, publishPackage);
};

export default invoke;
