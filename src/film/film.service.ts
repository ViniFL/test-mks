import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from './film.entity';
import { Repository } from 'typeorm';
import { CreateFilmDto } from './dto/CreateFilmDTO';

@Injectable()
export class FilmService {
    constructor(
        @InjectRepository(Film)
        private filmRepo: Repository<Film>,
    ) {}


    async findAll() {
        return this.filmRepo.find();
    }

    async findById(id:number): Promise<Film> {
        return this.filmRepo.findOneBy({id});
    }

    async create(createFilmDto: CreateFilmDto): Promise<Film> {
        const film = new Film();
        film.title = createFilmDto.title;
        film.description = createFilmDto.description;
        film.year = createFilmDto.year;
    
        return await this.filmRepo.save(film);
    }

}
