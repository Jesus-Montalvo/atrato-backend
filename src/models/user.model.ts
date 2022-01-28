import { Table, Column, DataType, Model } from 'sequelize-typescript';

export enum EUserStatus {
	PENDING = 'pending',
	IN_PROGRESS = 'in_progress',
	COMPLETE = 'complete',
}

export interface IUser {
	id?: number;
	email?: string;
	phone?: string;
	name?: string;
	second_name?: string;
	surname?: string;
	second_surname?: string;
	birth_date?: Date;
	status?: EUserStatus;
	card_number?: string;
	cvv?: number;
	date?: Date;
	full_name?: string;
	pin?: number;
	type?: string;
}

@Table
export default class User extends Model {
	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	email!: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	phone!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	second_name!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	surname!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	second_surname!: string;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	birth_date!: Date;

	@Column({
		type: DataType.ENUM(
			EUserStatus.COMPLETE,
			EUserStatus.IN_PROGRESS,
			EUserStatus.PENDING
		),
		allowNull: false,
		defaultValue: EUserStatus.PENDING,
	})
	status!: EUserStatus;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	card_number!: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	cvv!: number;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	date!: Date;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	full_name!: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	pin!: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	type!: string;
}
