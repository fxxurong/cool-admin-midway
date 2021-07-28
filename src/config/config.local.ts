import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  config.orm = {
 type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'RYF997816xurong',
    database: 'cool',
    synchronize: true,
    logging: true,
  };

  config.logger = {
    coreLogger: {
      consoleLevel: 'INFO',
    },
  };

  return config;
};
