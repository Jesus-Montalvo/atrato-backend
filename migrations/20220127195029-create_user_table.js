module.exports = {
	up: (queryInterface, Sequelize) =>
		queryInterface.createTable(
			'User',
			{
				id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					primaryKey: true,
					autoIncrement: true,
				},
				email: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				phone: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				name: {
					type: Sequelize.STRING,
					allowNull: true,
				},
				second_name: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				surname: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				second_surname: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				birth_date: {
					type: Sequelize.DATE,
					allowNull: false,
				},
				status: {
					type: Sequelize.STRING,
					allowNull: false,
					defaultValue: 'PENDING',
				},
				card_number: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				cvv: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				date: {
					type: Sequelize.DATE,
					allowNull: false,
				},
				full_name: {
					type: Sequelize.STRING,
					allowNull: false,
				},
				pin: {
					type: Sequelize.INTEGER,
					allowNull: false,
				},
				type: {
					type: Sequelize.STRING,
					allowNull: false,
				},
			},
			{
				charset: 'utf8',
			}
		),
	down: (queryInterface) => queryInterface.dropTable('User'),
};
