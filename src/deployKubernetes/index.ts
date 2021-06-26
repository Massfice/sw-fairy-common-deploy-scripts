import gulp from 'gulp';
import { KubernetessDeployFunction } from '../types';

const func = async (): Promise<void> => {
    console.log('Deploy Kubernetes');
};

const invoke: KubernetessDeployFunction = () => {
    return gulp.series(func);
};

export default invoke;
