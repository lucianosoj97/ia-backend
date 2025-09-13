import { ApiProperty } from '@nestjs/swagger';

export class SendResumeResponseDTO {
  @ApiProperty({ readOnly: true })
  summary: string;

  @ApiProperty({ readOnly: true })
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}
