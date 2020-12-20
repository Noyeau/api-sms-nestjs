

export const environment: any = {
    production: true,
    apiCode: "media",
    bddConfig: {
        type: (process.env.dbType || 'mysql') as any,
        host: process.env.dbHost || '192.168.1.15',
        port: +process.env.dbPort || 3307,
        username: process.env.dbUsername || 'smsd',
        password: process.env.dbPassword || 'password',
        database: process.env.dbDatabase || 'smsd',
        entities: [process.env.dbEntities || "dist/**/*.entity{.ts,.js}"],
        synchronize: (process.env.dbSynchronize == 'true' ? true : false) || false
    },
    apiSystem: process.env.apiSystem || 'http://192.168.1.15:1899',
    apiKeyCode: process.env.apiKeyCode || 'appNoyeau',
    tokenSecret: process.env.tokenSecret || "monSecretTokenMedia",
    tokenTime: process.env.tokenTime || 3000
};