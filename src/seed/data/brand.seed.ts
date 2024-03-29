import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRAND_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'toyota',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'fiat',
    createdDate: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'mazad',
    createdDate: new Date().getTime(),
  },
];
