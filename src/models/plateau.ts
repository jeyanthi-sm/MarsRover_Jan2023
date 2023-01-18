import { askQuestion, clear, print } from '../views/console';
import { endMarsNavigation, startRoverNavigation } from '../views/index';

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

export const PLATEAU_END_RANGE = 5;
export const PLATEAU_START_RANGE = 0;
export let marsPlateau = new plateau();
setPlateauStartXCoordinates(marsPlateau);
setPlateauStartYCoordinates(marsPlateau);

export function plateauInit(): plateau {
    const outputPlateauClass: plateau = new plateau();
    setPlateauStartXCoordinates(outputPlateauClass);
    setPlateauStartYCoordinates(outputPlateauClass);
    
    return outputPlateauClass;
}


export function setPlateauStartXCoordinates(inputPlateauClass:plateau = marsPlateau): void {
    inputPlateauClass.startRangeXCoordinates = 0;
}


export function setPlateauEndXCoordinates(inputPlateauClass:plateau=marsPlateau,endXCoordinates: number): boolean {
    if (endXCoordinates > 0 && endXCoordinates <= PLATEAU_END_RANGE) {
        inputPlateauClass.endRangeXCoordinates = endXCoordinates;
        return true;
    }
    else
        return false;
}

export function setPlateauStartYCoordinates(inputPlateauClass:plateau=marsPlateau): void {
    inputPlateauClass.startRangeYCoordinates = 0;
}

export function setPlateauEndYCoordinates(inputPlateauClass:plateau=marsPlateau,endYCoordinates: number): boolean {
    if (endYCoordinates > 0 && endYCoordinates <= PLATEAU_END_RANGE) {
        inputPlateauClass.endRangeYCoordinates = endYCoordinates;
        return true;
    }
    else
        return false;
}

export function getPlateauStartXCoordinates(inputPlateauClass:plateau=marsPlateau): number {
    return inputPlateauClass.startRangeXCoordinates;
}

export function getPlateauStartYCoordinates(inputPlateauClass:plateau=marsPlateau): number {
    return inputPlateauClass.startRangeYCoordinates;
}

export function getPlateauEndXCoordinates(inputPlateauClass:plateau=marsPlateau): number {
    return inputPlateauClass.endRangeXCoordinates;
}
export function getPlateauEndYCoordinates(inputPlateauClass:plateau=marsPlateau): number {
    return inputPlateauClass.endRangeYCoordinates;
}
export function getPlateauCoordinates(inputPlateauClass:plateau=marsPlateau): plateau {
    return inputPlateauClass;
}
