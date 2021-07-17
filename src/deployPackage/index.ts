import gulp from 'gulp';
import { PackageDeployFunction } from '../types';
import createNPMrc from './createNPMrc';
import publishPackage from './publishPackage';

const invoke: PackageDeployFunction = (config) => {
    return gulp.series(createNPMrc(config), publishPackage());
};

export default invoke;
