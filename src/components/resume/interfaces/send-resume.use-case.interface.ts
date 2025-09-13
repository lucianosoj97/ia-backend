import { PostResumeDTO } from '../dto/send-resume.dto';

export interface SendResumeUseCaseInterface {
  execute(dto: PostResumeDTO): Promise<any>;
}
