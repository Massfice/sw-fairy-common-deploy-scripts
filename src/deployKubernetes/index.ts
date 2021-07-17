import gulp from 'gulp';
import { KubernetessDeployFunction } from '../types';
import prepareKubeFiles from './prepareKubeFiles';
import buildDocker from './buildDocker';
import pushDocker from './pushDocker';
import appyKubeFiles from './applyKubeFiles';

const invoke: KubernetessDeployFunction = (config) => {
    return gulp.series(prepareKubeFiles(config), buildDocker(config), pushDocker(config), appyKubeFiles(config));
};

export default invoke;
