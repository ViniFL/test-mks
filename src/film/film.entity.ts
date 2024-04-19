import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Film {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    title: string;

    @Column()
    description: string;

    @Column()
    year: number;
}
