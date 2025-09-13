import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
import { IOpenAIAPIUseCaseInterface } from '../interfaces/openai.api.use-case.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class IOpenAIAPIUseCase implements IOpenAIAPIUseCaseInterface {
  private client: OpenAI;
  private readonly logger = new Logger(IOpenAIAPIUseCase.name);

  constructor(private readonly configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: this.configService.get('OPENAI_API_KEY'),
    });
  }

  async apiOpenAIConection(): Promise<OpenAI> {
    try {
      const response = await this.client.models.list();
      this.logger.log(
        `Conectado à OpenAI! Total de modelos disponíveis: ${response.data.length}`,
      );

      return this.client;
    } catch (error) {
      this.logger.error('Erro ao conectar na OpenAI:', error.message);
      throw new Error('Não foi possível conectar à OpenAI', error.message);
    }
  }
}
