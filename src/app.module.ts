import { Module } from '@nestjs/common';
import { ResumeModule } from './components/resume/resume.module';
import { ConfigModule } from '@nestjs/config';
import { AvailableModelsModule } from './components/api/openAI/available-models.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ResumeModule,
    AvailableModelsModule,
  ],
})
export class AppModule {}
