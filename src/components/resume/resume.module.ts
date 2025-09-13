import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { SendResumeUseCase } from './use-case/send-resume.use-case';
import { IOpenAIAPIUseCase } from '../api/openAI/use-case/openai.api.use-case';

@Module({
  controllers: [ResumeController],
  providers: [
    {
      provide: 'SendResumeUseCaseInterface',
      useClass: SendResumeUseCase,
    },
    {
      provide: 'IOpenAIAPIUseCaseInterface',
      useClass: IOpenAIAPIUseCase,
    },
  ],
})
export class ResumeModule {}
