const sequelizeConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
    pool: {
        max: 1,
        min: 0,
        idle: 10000,
    },
};

module.exports = sequelizeConfig;
