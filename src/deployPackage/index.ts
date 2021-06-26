import gulp from 'gulp';
import { PackageDeployFunction } from '../types';

const func = async (): Promise<void> => {
    console.log('Deploy Package');
};

const invoke: PackageDeployFunction = () => {
    return gulp.series(func);
};

export default invoke;
