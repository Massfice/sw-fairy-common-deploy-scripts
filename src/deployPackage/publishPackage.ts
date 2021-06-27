import childProcess from 'child_process';

const publishPackage = (): Promise<boolean> => {
    return new Promise(
        (
            resolve: (value: boolean | PromiseLike<boolean>) => void,
            reject: (error: childProcess.ExecException | string) => void,
        ) => {
            childProcess.exec('echo "abc"', (error, stdout, stderr) => {
                const err = error || stderr;

                if (err) {
                    reject(err);
                }

                console.log(stdout);

                resolve(true);
            });
        },
    );
};

export default publishPackage;
