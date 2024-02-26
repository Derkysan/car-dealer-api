import { Injectable } from '@nestjs/common';
import { CAR_SEED } from './data/car.seed';
import { BRAND_SEED } from './data/brand.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carService: CarsService,
    private readonly brandService: BrandsService,
  ) {}

  populateDB() {
    this.carService.fillCarssWithSeedData(CAR_SEED);
    this.brandService.fillBrandssWithSeedData(BRAND_SEED);
    return `Seed executed!`;
  }
}
