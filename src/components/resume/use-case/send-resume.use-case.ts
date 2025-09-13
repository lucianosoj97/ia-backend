import { Inject, Injectable, Logger } from '@nestjs/common';
import { IOpenAIAPIUseCaseInterface } from 'src/components/api/openAI/interfaces/openai.api.use-case.interface';
import { PostResumeDTO } from '../dto/send-resume.dto';
import { SendResumeUseCaseInterface } from '../interfaces/send-resume.use-case.interface';

@Injectable()
export class SendResumeUseCase implements SendResumeUseCaseInterface {
  private readonly logger = new Logger(SendResumeUseCase.name);
  constructor(
    @Inject('IOpenAIAPIUseCaseInterface')
    private readonly openAI: IOpenAIAPIUseCaseInterface,
  ) {}

  async execute(dto: PostResumeDTO): Promise<any> {
    try {
      const prompt = `Resuma o seguinte texto em português de forma clara e objetiva:\n\n${dto.text}`;

      const apiClient = await this.openAI.apiOpenAIConection();
      const response = await apiClient.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'Você é um assistente que resume textos.',
          },
          { role: 'user', content: prompt },
        ],
        max_tokens: 200,
      });

      return response;
    } catch (error) {
      this.logger.error('Erro ao gerar resumo:', error);
      throw new Error('Falha ao gerar resumo com a OpenAI', error.message);
    }
  }
}
