import gulp from 'gulp';
import { KubernetessDeployFunction } from '../types';
import prepareKubeFiles from './prepareKubeFiles';
import buildDocker from './buildDocker';
import pushDocker from './pushDocker';
import appyKubeFiles from './applyKubeFiles';

const invoke: KubernetessDeployFunction = () => {
    const parallelJobs = gulp.parallel(prepareKubeFiles, buildDocker);

    return gulp.series(parallelJobs, pushDocker, appyKubeFiles);
};

export default invoke;
