import { Module } from '@nestjs/common';
import { AvailableModelsController } from './available-models.controller';
import { GetAvailableModelsUseCase } from './use-case/get-available-models.use-case';
import { IOpenAIAPIUseCase } from './use-case/openai.api.use-case';

@Module({
  controllers: [AvailableModelsController],
  providers: [
    {
      provide: 'IOpenAIAPIUseCaseInterface',
      useClass: IOpenAIAPIUseCase,
    },
    {
      provide: 'GetAvailableModelsUseCaseInterface',
      useClass: GetAvailableModelsUseCase,
    },
  ],
})
export class AvailableModelsModule {}
