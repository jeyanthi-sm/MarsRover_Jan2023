import { askQuestion } from '../views/console';
import { printRoverWhereAbouts } from '../views/askRover';
import { setRoverWhereAbouts, setRoverFacingDirection, getRoverWhereAbouts } from '../models/roverDetails';
import { startRoverNavigation } from '../views/index';
import { roverWhereAbouts } from '../models/roverDetails';
import { marsPlateau } from '../models/plateau';
import { roverWhereAboutsCurrent } from '../models/roverDetails';

export function haveRoverNavigate(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent,instructions: string): void {
    for (let i = 0; i < instructions.length; ++i) {
        switch (instructions[i]) {
            case 'L': let endResultDir: string = rotateLeftRover(inputRoverclass);
                setRoverFacingDirection(inputRoverclass,endResultDir);
                break;
            case 'R': let endResultDirection: string = rotateRightRover(inputRoverclass);
                setRoverFacingDirection(inputRoverclass,endResultDirection);
                break;
            case 'M': moveRover(inputRoverclass);
                break;
        }
    }
    printRoverWhereAbouts(inputRoverclass);
    askQuestion('Enter Y to Continue', startRoverNavigation);
}

export function rotateLeftRover(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent): string {
    const roverFacingDirection: string = inputRoverclass.facingDirection;
    type leftTurnObject = { [index: string]: string; };
    const leftTurnObj: leftTurnObject = { 'N': 'W', 'W': 'S', 'S': 'E', 'E': 'N', };
    const resleftTurnObject: string = leftTurnObj[roverFacingDirection];
    return resleftTurnObject;

}
export function rotateRightRover(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent): string {
    const roverFacingDirection: string = inputRoverclass.facingDirection;
    type rightTurnObject = { [index: string]: string; };
    const rightTurnObj: rightTurnObject = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N', };
    const resrightTurnObject: string = rightTurnObj[roverFacingDirection];
    return resrightTurnObject;

}


export function moveRover(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent): roverWhereAbouts {
    const roverFacingDirection: string = inputRoverclass.facingDirection;
    let proposedRoverWhereAbouts: roverWhereAbouts = new roverWhereAbouts();
    switch (roverFacingDirection) {
        case 'N': northMove(inputRoverclass);
            break;
        case 'S': southMove(inputRoverclass);
            break;
        case 'E': eastMove(inputRoverclass);
            break;
        case 'W': westMove(inputRoverclass);
            break;
    }
    proposedRoverWhereAbouts = getRoverWhereAbouts();
    return proposedRoverWhereAbouts;

}

export function northMove(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent):void {
    const newRoverYCoordinatesval: number = inputRoverclass.ycoordinates as number;
    let proposedRoverYCoordinatesVal: number = newRoverYCoordinatesval + 1;
    if (proposedRoverYCoordinatesVal >= marsPlateau.startRangeYCoordinates &&
        proposedRoverYCoordinatesVal <= marsPlateau.endRangeYCoordinates)
        setRoverWhereAbouts(inputRoverclass,inputRoverclass.xcoordinates, proposedRoverYCoordinatesVal, 'N');
}

export function southMove(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent) : void {
    const newRoverYCoordinatesval: number = inputRoverclass.ycoordinates as number;
    let proposedRoverYCoordinatesVal: number = newRoverYCoordinatesval - 1;
    if (proposedRoverYCoordinatesVal >= marsPlateau.startRangeYCoordinates &&
        proposedRoverYCoordinatesVal <= marsPlateau.endRangeYCoordinates)
        setRoverWhereAbouts(inputRoverclass,inputRoverclass.xcoordinates, proposedRoverYCoordinatesVal, 'S');

}

export function eastMove(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent ): void {
    const newRoverXCoordinatesval: number = inputRoverclass.xcoordinates as number;
    let proposedRoverXCoordinatesVal: number = newRoverXCoordinatesval + 1;
    if (proposedRoverXCoordinatesVal >= marsPlateau.startRangeXCoordinates &&
        proposedRoverXCoordinatesVal <= marsPlateau.endRangeXCoordinates)
        setRoverWhereAbouts(inputRoverclass,proposedRoverXCoordinatesVal, inputRoverclass.ycoordinates, 'E');
}
export function westMove(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent): void {
    const marsPlateauStartXcoordinates = marsPlateau.startRangeXCoordinates as number;
    const newRoverXCoordinatesval: number = inputRoverclass.xcoordinates as number;
    const proposedRoverXCoordinatesVal: number = inputRoverclass.xcoordinates - 1;
    if (proposedRoverXCoordinatesVal >= marsPlateau.startRangeXCoordinates &&
        proposedRoverXCoordinatesVal <= marsPlateau.endRangeXCoordinates)
        setRoverWhereAbouts(inputRoverclass,proposedRoverXCoordinatesVal, inputRoverclass.ycoordinates, 'W');
}
