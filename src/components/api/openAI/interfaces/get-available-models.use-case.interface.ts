import { AvailableModelsResponseDTO } from '../dto/available-models-response.dto';

export interface GetAvailableModelsUseCaseInterface {
  execute(): Promise<AvailableModelsResponseDTO[]>;
}
