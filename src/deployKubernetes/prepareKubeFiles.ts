import { promises as fs } from 'fs';
import path from 'path';
import gulp from 'gulp';
import Stream from 'stream';
import mergeStream from 'merge-stream';
import transform from 'gulp-transform';
import { KubernetesDeployConfig } from '../types';
import deploymentTransform from './deploymentTransform';

const prepareKubeFiles = (config: KubernetesDeployConfig) => async (): Promise<Stream> => {
    const stream = mergeStream();
    const { dirname, commitId } = config;

    const files: string[] = await fs.readdir(path.join(dirname, 'kube'));
    const outputDir = path.join(__dirname, 'kubeprepared');

    files.forEach((file: string) => {
        const inputFile = path.join(dirname, 'kube', file);

        if (file === 'deployment.yml') {
            stream.add(gulp.src(inputFile).pipe(transform('utf8', deploymentTransform(commitId))));

            return;
        }

        stream.add(gulp.src(inputFile));
    });

    return stream.pipe(gulp.dest(outputDir));
};

export default prepareKubeFiles;
