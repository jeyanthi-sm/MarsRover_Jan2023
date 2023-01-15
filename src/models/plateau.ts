import { askQuestion, clear, print } from '../views/console';
import { endMarsNavigation,startRoverNavigation } from '../views/index';

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
setPlateauStartXCoordinates();
setPlateauStartYCoordinates();

export function setPlateauStartXCoordinates(): void {
    marsPlateau.startRangeXCoordinates = 0;
}

export function setPlateauEndXCoordinates(endXCoordinates: number): boolean {
    if (endXCoordinates > 0 && endXCoordinates <= 7) {
        marsPlateau.endRangeXCoordinates = endXCoordinates;
        return true;
    }
    else
        return false;
}

export function setPlateauStartYCoordinates(): void {
    marsPlateau.startRangeYCoordinates = 0;
}

export function setPlateauEndYCoordinates(endYCoordinates: number): boolean {
    if (endYCoordinates > 0 && endYCoordinates <= 7) {
        marsPlateau.endRangeYCoordinates = endYCoordinates;
        return true;
    }
    else
        return false;
}

export function getPlateauStartXCoordinates(): number {
    return marsPlateau.startRangeXCoordinates;
}

export function getPlateauStartYCoordinates(): number {
    return marsPlateau.startRangeYCoordinates;
}

export function getPlateauEndXCoordinates(): number {
    return marsPlateau.endRangeXCoordinates;
}
export function getPlateauEndYCoordinates(): number {
    return marsPlateau.endRangeYCoordinates;
}
export function getPlateauCoordinates(): plateau {
    return marsPlateau;
}
