import { AvailableModelsResponseDTO } from './../dto/available-models-response.dto';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { IOpenAIAPIUseCaseInterface } from 'src/components/api/openAI/interfaces/openai.api.use-case.interface';
import { GetAvailableModelsUseCaseInterface } from '../interfaces/get-available-models.use-case.interface';

@Injectable()
export class GetAvailableModelsUseCase
  implements GetAvailableModelsUseCaseInterface
{
  private readonly logger = new Logger(GetAvailableModelsUseCase.name);

  constructor(
    @Inject('IOpenAIAPIUseCaseInterface')
    private readonly openAI: IOpenAIAPIUseCaseInterface,
  ) {}

  async execute(): Promise<AvailableModelsResponseDTO[]> {
    try {
      const apiClient = await this.openAI.apiOpenAIConection();
      const response = await apiClient.models.list();

      return response.data.map((model) => ({
        id: model.id,
        object: model.object,
        owned_by: model.owned_by,
      }));
    } catch (error) {
      this.logger.error('Erro ao listar modelos:', error);
      throw new Error('Falha ao listar modelos disponíveis');
    }
  }
}
