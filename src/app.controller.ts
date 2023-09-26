import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/user/:id')
  // getUserById(@Param() param): string {
  //   return 'user id: ' + param.id;
  // }
  @Get('/user/list')
  getUserList(@Param() param): string[] {
    return ['小田', '小慧', '亚楠'];
  }
  @Get('/user')
  getUserByQuery(@Query() query): any {
    return query;
    return {
      name: '小田很甜',
      age: 18,
    };
  }
  @Post('/user')
  getUserByData(@Body() param): any {
    return param;
    return {
      name: '小田很甜',
      age: 18,
    };
  }
  @Post('/login')
  login(@Body() param): any {
    const res = param.userName.includes('admin')
      ? {
          msg: '登录成功',
          code: 200,
          token: '123f21fds2f1f2sdfsd1ghhg2h',
        }
      : {
          msg: '用户不存在',
          code: 500,
          data: null,
        };

    return res;
  }
}
