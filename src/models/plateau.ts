import { askQuestion, clear, print } from '../views/console';
import { endAdventure, startRoverNavigation } from '../views/index';

export class plateau //extends coordinates 
{
    startRangeXCoordinates!: number;
    startRangeYCoordinates!: number;
    endRangeXCoordinates!: number;
    endRangeYCoordinates!: number;

    plateau(startRangeXcoordinates?: number, startRangeYCoordinates?: number,
        endRangeXCoordinates?: number, endRangeYCoordinates?: number) {
        this.startRangeXCoordinates = startRangeXcoordinates || 0;
        this.startRangeYCoordinates = startRangeYCoordinates || 0;
        this.endRangeXCoordinates = endRangeXCoordinates || 0;
        this.endRangeYCoordinates = endRangeYCoordinates || 0;
    }

};

export let marsPlateau = new plateau();


export function setPlateauXCoordinates(endXCoordinates: number): void {
    marsPlateau.startRangeXCoordinates = 0;
    marsPlateau.endRangeXCoordinates = endXCoordinates;
}


export function setPlateauYCoordinates(endYCoordinates: number): void {
    marsPlateau.startRangeYCoordinates = 0;
    marsPlateau.endRangeYCoordinates = endYCoordinates;
}

