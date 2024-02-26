import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto ';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsServices: CarsService) {}

  @Get()
  getCars() {
    return this.carsServices.findAll();
  }

  @Get(':id')
  getCarByID(@Param('id', new ParseUUIDPipe({ version: '5' })) id: string) {
    const car = this.carsServices.findCarByID(id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found!`);
    }
    return car;
  }

  @Post()
  // @UsePipes(ValidationPipe)
  create(@Body() createCarDto: CreateCarDto) {
    return this.carsServices.create(createCarDto);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateCarDto) {
    return this.carsServices.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsServices.delete(id);
  }
}
