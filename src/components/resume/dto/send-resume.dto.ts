import { ApiProperty } from '@nestjs/swagger';

export class PostResumeDTO {
  @ApiProperty({ required: true })
  text: string;
}
