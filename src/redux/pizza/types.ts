import { Status } from "./slice";

export type Pizza = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  rating: number;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status.LOADING | Status.SUCCESS | Status.ERROR;
}
