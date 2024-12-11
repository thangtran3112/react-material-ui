/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductOrderItem } from "./Product";

//Generated by Copilot lol
export interface IOrder {
  _id: string;
  userId: string;
  items: ProductOrderItem[];
  amount: number;
  address: any;
  status: string;
  paymentMethod: string;
  payment: boolean;
  date: number;
}

export interface OrderProductItem extends ProductOrderItem {
  status: string;
  payment: boolean;
  paymentMethod: string;
  date: number;
}
