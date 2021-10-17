import { Application } from 'egg';
import { ModuleConfig } from 'midwayjs-cool-core';

/**
 * 模块配置
 */
export default (app: Application) => {
  return {
    // 模块名称
    name: '登陆及用户管理',
    // 模块描叙
    description: '登陆，用户管理，权限管理',
    // 中间件
    globalMiddlewares: ['baseAuthorityMiddleware', 'baseLogMiddleware'],
    // jwt 生成解密的token
    jwt: {
      // 密钥
      secret: 'ryf-fashion',
      // token
      token: {
        // 2小时过期，需要重新刷新token
        expire: 2 * 3600,
        // 15天内，如果没有操作过就需要重新登陆
        refreshExpire: 24 * 3600 * 15,
      },
    },
  } as ModuleConfig;
};
