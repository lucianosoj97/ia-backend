import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class OpenAIResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response) => {
        const summary = response.choices?.[0]?.message?.content ?? '';
        const tokensUsed = response.usage?.total_tokens ?? 0;

        return { summary, tokensUsed };
      }),
    );
  }
}
