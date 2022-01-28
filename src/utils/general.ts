import { Order } from 'sequelize';
import yup from 'yup';

export function sort(sort: any = null): Order {
	try {
		const splitted = sort.split(',');

		return splitted.map((item: string) => {
			const split = item.split(' ');
			if (split[0] && split[1]) {
				return [split[0], split[1]];
			} else {
				return null;
			}
		});
	} catch (err) {
		return [['name', 'DESC']];
	}
}

export async function validateYup(body: any, schema: yup.AnyObjectSchema) {
	const isValid = await schema.isValid(body);

	if (!isValid) {
		await schema.validate(body);
	}
}
