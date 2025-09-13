import { Controller, Get, Inject } from '@nestjs/common';
import { AvailableModelsResponseDTO } from './dto/available-models-response.dto';
import { ApiResponse } from '@nestjs/swagger';
import { GetAvailableModelsUseCaseInterface } from './interfaces/get-available-models.use-case.interface';

@Controller('OpenAI/models')
export class AvailableModelsController {
  constructor(
    @Inject('GetAvailableModelsUseCaseInterface')
    private readonly getModels: GetAvailableModelsUseCaseInterface,
  ) {}

  @Get()
  @ApiResponse({ type: AvailableModelsResponseDTO, isArray: true })
  async getAll(): Promise<AvailableModelsResponseDTO[]> {
    return this.getModels.execute();
  }
}
