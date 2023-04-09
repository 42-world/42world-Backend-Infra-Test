import {
  GetSecretValueCommand,
  SecretsManagerClient,
  SecretsManagerClientConfig,
} from '@aws-sdk/client-secrets-manager';

export const getEnvFromSecretManager = async () => {
  const secret_name = 'infra-test-env';

  const config: SecretsManagerClientConfig = {
    region: 'ap-northeast-2',
  };

  if (process.env.PHASE === 'local') {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    };
  }

  const client = new SecretsManagerClient(config);

  const response = await client.send(
    new GetSecretValueCommand({
      SecretId: secret_name,
      VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
    }),
  );

  // TODO: add validate
  return JSON.parse(response.SecretString);
};
