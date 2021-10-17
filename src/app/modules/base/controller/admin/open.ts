import {
  Provide,
  Body,
  ALL,
  Inject,
  Post,
  Get,
  Query,
} from '@midwayjs/decorator';
import { Context } from 'egg';
import { CoolController, BaseController } from 'midwayjs-cool-core';
import { LoginDTO } from '../../dto/login';
import { BaseSysLoginService } from '../../service/sys/login';
import { BaseSysParamService } from '../../service/sys/param';

/**
 * 不需要登录的后台接口
 */
@Provide()
@CoolController()
export class BaseOpenController extends BaseController {
  @Inject()
  baseSysLoginService: BaseSysLoginService;

  @Inject()
  baseSysParamService: BaseSysParamService;

  @Inject()
  ctx: Context;

  /**
   * 登录
   * @param login
   */
  @Post('/login')
  async login(@Body(ALL) login: LoginDTO) {
    return this.ok(await this.baseSysLoginService.login(login));
  }

  /**
   * 退出
   */
  @Post('/logout')
  async logout() {
    await this.baseSysLoginService.logout();
    return this.ok();
  }

  /**
   * 获得验证码
   */
  @Get('/captcha')
  async captcha(
    @Query() type: string,
    @Query() width: number,
    @Query() height: number
  ) {
    return this.ok(await this.baseSysLoginService.captcha(type, width, height));
  }

  /**
   * 刷新token
   */
  @Get('/refreshToken')
  async refreshToken(@Query() refreshToken: string) {
    return this.ok(await this.baseSysLoginService.refreshToken(refreshToken));
  }
}
