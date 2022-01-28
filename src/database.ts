import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import config from './config/config';

const sequelize = new Sequelize(
	config.database.NAME,
	config.database.USER,
	config.database.PASSWORD,
	{
		host: config.database.HOST,
		port: config.database.PORT,
		dialect: 'postgres',
		modelPaths: [path.join(__dirname, 'models')],
		timezone: 'America/Merida',
		dialectOptions: {
			useUTC: false,
		},
		define: {
			freezeTableName: true,
			timestamps: false,
			paranoid: true,
			underscored: true,
		},
	}
);

sequelize.sync({ force: false });
