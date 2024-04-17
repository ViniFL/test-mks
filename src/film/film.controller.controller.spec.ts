import { Test, TestingModule } from '@nestjs/testing';
import { FilmControllerController } from './film.controller.controller';

describe('FilmControllerController', () => {
  let controller: FilmControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmControllerController],
    }).compile();

    controller = module.get<FilmControllerController>(FilmControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
