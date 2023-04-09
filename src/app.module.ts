import {
  GetSecretValueCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [
        async () => {
          const secret_name = 'infra-test-env';

          const client = new SecretsManagerClient({
            // credentials: {
            //   accessKeyId: process.env.AWS_ACCESS_KEY,
            //   secretAccessKey: process.env.AWS_SECRET_KEY,
            // },
            region: 'ap-northeast-2',
          });

          const response = await client.send(
            new GetSecretValueCommand({
              SecretId: secret_name,
              VersionStage: 'AWSCURRENT', // VersionStage defaults to AWSCURRENT if unspecified
            }),
          );

          // TODO: add validate
          return JSON.parse(response.SecretString);
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
