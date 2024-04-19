import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto } from './dto/CreateFilmDTO';
import { Film } from './film.entity';

@Controller('film')
export class FilmController {
    constructor(
        private readonly filmService: FilmService
    ){}

    @Post()
    async create(@Body() createFilmDTO: CreateFilmDto): Promise<Film> {
        return await this.filmService.create(createFilmDTO);
    }

    @Get()
    async findAll(): Promise<Film[]> {
        return await this.filmService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Film> {
        return await this.filmService.findById(id);
    }
}
