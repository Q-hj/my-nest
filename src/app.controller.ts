import { Controller, Get ,Param,Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 
  @Get('/user/:id')
  getUserById(@Param() param): string {
    return 'user id: '+ param.id;
  }
  @Get('/user')
  getUserByQuery(@Query() query): string {
    return  query;
  }
}
