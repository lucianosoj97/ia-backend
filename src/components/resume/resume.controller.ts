import { OpenAIResponseInterceptor } from 'src/common/interceptors/openai-usage.interceptor';
import {
  Body,
  Controller,
  Inject,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { PostResumeDTO } from './dto/send-resume.dto';
import { SendResumeUseCaseInterface } from './interfaces/send-resume.use-case.interface';
import { ApiResponse } from '@nestjs/swagger';
import { SendResumeResponseDTO } from './dto/send-resume-response.dto';

@Controller('Resume')
export class ResumeController {
  constructor(
    @Inject('SendResumeUseCaseInterface')
    private readonly sendResumeUseCase: SendResumeUseCaseInterface,
  ) {}

  @ApiResponse({ type: SendResumeResponseDTO })
  @Post()
  @UseInterceptors(OpenAIResponseInterceptor)
  async resumir(@Body() dto: PostResumeDTO) {
    return await this.sendResumeUseCase.execute(dto);
  }
}
