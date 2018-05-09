const sequelizeConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
};

module.exports = sequelizeConfig;