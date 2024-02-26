import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CAR_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'toyota',
    model: 'corolla',
  },
  {
    id: uuid(),
    brand: 'fiat',
    model: 'uno',
  },
  {
    id: uuid(),
    brand: 'mazda',
    model: '3',
  },
];
