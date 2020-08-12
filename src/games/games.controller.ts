import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateGameDto } from './dtos/create-game.dto';
import { GamesService } from './games.service';
import { Game } from './interfaces/game.interface';

const games = [];

@Controller('games')
export class GamesController {
    constructor(private gameService: GamesService) {}

    @Post()
    create(@Body() body: CreateGameDto): Game {
        const newGame = {
            name: body.name,
        };

        this.gameService.create(newGame);
        return newGame;
    }

    @Get()
    getAll(): Game[] {
        return this.gameService.getAll();
    }
}
