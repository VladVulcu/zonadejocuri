import { Genre } from "../shared/genre.model";

export class Game {
    public name: string;
    public description: string;
    public imagePath: string;
    public genres: Genre [];

    constructor(name: string, description: string, imagePath: string, genres: Genre[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.genres = genres;
    }
}