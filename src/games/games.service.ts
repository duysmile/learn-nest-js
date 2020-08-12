import { Injectable } from '@nestjs/common';
import { Game } from './interfaces/game.interface';
import { CreateGameDto } from './dtos/create-game.dto';

@Injectable()
export class GamesService {
    private readonly games: Game[] = [];

    create(game: CreateGameDto): Game {
        this.games.push(game);
        return game;
    }

    getAll(): Game[] {
        return this.games;
    }
}
