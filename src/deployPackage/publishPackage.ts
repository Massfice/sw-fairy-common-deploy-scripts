import childProcess from 'child_process';

const publishPackage = (): Promise<boolean> => {
    return new Promise(
        (
            resolve: (value: boolean | PromiseLike<boolean>) => void,
            reject: (error: childProcess.ExecException | string) => void,
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

export default publishPackage;
