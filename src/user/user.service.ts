import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/CreateUserDTO';

@Injectable()
export class UserService {
    constructor(
     @InjectRepository(User)
    private userRepo: Repository<User>,
    ) {}

    async findAll() {
        return this.userRepo.find();
    }

    async findById(id: number): Promise<User> {
        return this.userRepo.findOneBy({id});
    }

    async create(createUserDTO: CreateUserDTO): Promise<User> {
        const user = new User();
        user.email = createUserDTO.email;
        user.username = createUserDTO.username;
        user.password = createUserDTO.password;

        return this.userRepo.save(user);
    }
}
