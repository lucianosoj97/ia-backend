import { ApiProperty } from '@nestjs/swagger';

export class AvailableModelsResponseDTO {
  @ApiProperty({ example: 'gpt-4o', description: 'ID do modelo' })
  id: string;

  @ApiProperty({ example: 'model', description: 'Tipo do objeto' })
  object: string;

  @ApiProperty({ example: 'user', description: 'Proprietário do modelo' })
  owned_by: string;
}
