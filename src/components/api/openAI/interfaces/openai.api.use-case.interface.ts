import OpenAI from 'openai';

export interface IOpenAIAPIUseCaseInterface {
  apiOpenAIConection(): Promise<OpenAI>;
}
