import { Response, Request, NextFunction } from "express";
import { FindOptions, Op, Order } from "sequelize";
import User, { EUserStatus } from "../models/user.model";
import { sort, validateYup } from "../utils/general";
import * as yup from "yup";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = yup.object().shape({
      email: yup.string().email().required("Email is required"),
      phone: yup.string().required("Phone is required"),
      name: yup.string().required("Name is required"),
      second_name: yup.string().required("Second name is required"),
      surname: yup.string().required("Surname is required"),
      second_surname: yup.string().required("Second surname is required"),
      birth_date: yup.date().required("Birth date is required"),
      status: yup
        .mixed()
        .oneOf(Object.values(EUserStatus))
        .required("Status is required"),
      card_number: yup.string().required("Card number is required"),
      cvv: yup.number().required("CVV is required"),
      date: yup.date().required("Date is required"),
      full_name: yup.string().required("Full name is required"),
      pin: yup.number().required("PIN is required"),
      type: yup.string().required("Type is required"),
    });

    try {
      await validateYup(req.body, schema);
    } catch (err: any) {
      return res.status(400).json(err.errors);
    }

    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user = await user.update(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

export const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { sort: sort_order, search } = req.query;

    let order: Order;
    if (sort_order) {
      order = sort(sort_order);
    } else {
      order = [["name", "DESC"]];
    }

    const query: FindOptions = {
      order,
    };

    if (search) {
      query.where = {
        [Op.or]: [
          { name: { [Op.iLike]: `%${search}%` } },
          { status: { [Op.iLike]: `%${search}%` } },
        ],
      };

      const isNotNumber = isNaN(Number(search));

      if (!isNotNumber) {
        query.where = {
          id: Number(search),
        };
      }
    }

    const users = await User.findAll(query);
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    return res.status(200).json({ message: "User deleted" });
  } catch (error) {
    return next(error);
  }
};

export const findOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};
