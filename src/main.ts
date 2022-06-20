import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ValidationPipe 설정
  // - whitelist: entity decorator에 없는 property 값은 무조건 거른다
  // - forbidNonWhitelisted: entity decorator에 없는 값 인입시 그 값에 대한 에러메시지 전달
  // - transform: 컨트롤러가 값을 받을 때 컨트롤러에 정의한 타입으로 형변환 하겠다
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  await app.listen(3000);
}
bootstrap();
