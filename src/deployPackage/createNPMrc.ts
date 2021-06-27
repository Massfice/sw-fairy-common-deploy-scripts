import Stream from 'stream';
import Vinyl from 'vinyl';

const createNPMrc = (npmToken: string): Stream => {
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

export default createNPMrc;
