import YAML from 'yaml';

const deploymentTransform =
    (commitId: string) =>
    (contents: string): string => {
        const deployment = YAML.parse(contents);

        const { image }: { image: string } = deployment.spec.template.spec.containers[0];
        deployment.spec.template.spec.containers[0].image = image.replace('{{commitId}}', commitId);

        return YAML.stringify(deployment);
    };

export default deploymentTransform;
