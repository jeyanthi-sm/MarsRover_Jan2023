import { askQuestion } from '../views/console';
import { printRoverWhereAbouts } from '../views/askRover';
import { setRoverWhereAbouts, setRoverFacingDirection, getRoverFacingDirection, getRoverWhereAbouts } from '../models/roverDetails';
import { startRoverNavigation } from '../views/index';
import { roverWhereAbouts } from '../models/roverDetails';
import { marsPlateau } from '../models/plateau';

export function haveRoverNavigate(instructions: string): void {
    for (let i = 0; i < instructions.length; ++i) {
        switch (instructions[i]) {
            case 'L': let endResultDir: string = rotateLeftRover();
                setRoverFacingDirection(endResultDir);
                break;
            case 'R': let endResultDirection: string = rotateRightRover();
                setRoverFacingDirection(endResultDirection);
                break;
            case 'M': moveRover();
                break;
        }
    }
    printRoverWhereAbouts();
    askQuestion('Enter Y to Continue', startRoverNavigation);
}

function rotateLeftRover(): string {
    const roverFacingDirection: string = getRoverFacingDirection();
    type leftTurnObject = { [index: string]: string; };
    const leftTurnObj: leftTurnObject = { 'N': 'W', 'W': 'S', 'S': 'E', 'E': 'N', };
    const resleftTurnObject: string = leftTurnObj[roverFacingDirection];
    return resleftTurnObject;

}
function rotateRightRover(): string {
    const roverFacingDirection: string = getRoverFacingDirection()
    type rightTurnObject = { [index: string]: string; };
    const rightTurnObj: rightTurnObject = { 'N': 'E', 'E': 'S', 'S': 'W', 'W': 'N', };
    const resrightTurnObject: string = rightTurnObj[roverFacingDirection];
    return resrightTurnObject;

}


function moveRover(): roverWhereAbouts {
    let currentRoverWhereAbouts: roverWhereAbouts = getRoverWhereAbouts();
    const roverFacingDirection: string = getRoverFacingDirection();
    let proposedRoverWhereAbouts: roverWhereAbouts = new roverWhereAbouts();
    switch (roverFacingDirection) {
        case 'N': northMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
        case 'S': southMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
        case 'E': eastMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
        case 'W': westMove(currentRoverWhereAbouts.xcoordinates, currentRoverWhereAbouts.ycoordinates);
            break;
    }
    proposedRoverWhereAbouts = getRoverWhereAbouts();
    return proposedRoverWhereAbouts;

}

function northMove(currentRoverWhereAboutsXcoordinates: number,
    currentRoverWhereAboutsYCoordinates: number): void {
    //const marsPlateauEndYcoordinates: number = marsPlateau.endRangeYCoordinates as number;
    const newRoverYCoordinatesval: number = currentRoverWhereAboutsYCoordinates as number;
    let proposedRoverYCoordinatesVal: number = newRoverYCoordinatesval + 1;
    if (proposedRoverYCoordinatesVal >= marsPlateau.startRangeYCoordinates &&
        proposedRoverYCoordinatesVal <= marsPlateau.endRangeYCoordinates)
        setRoverWhereAbouts(currentRoverWhereAboutsXcoordinates, proposedRoverYCoordinatesVal, 'N');
}

function southMove(currentRoverWhereAboutsXcoordinates: number,
    currentRoverWhereAboutsYCoordinates: number): void {
    //  const marsPlateauStartYcoordinates: number = marsPlateau.startRangeYCoordinates as number;
    const newRoverYCoordinatesval: number = currentRoverWhereAboutsYCoordinates as number;
    let proposedRoverYCoordinatesVal: number = newRoverYCoordinatesval - 1;
    if (proposedRoverYCoordinatesVal >= marsPlateau.startRangeYCoordinates &&
        proposedRoverYCoordinatesVal <= marsPlateau.endRangeYCoordinates)
        setRoverWhereAbouts(currentRoverWhereAboutsXcoordinates, proposedRoverYCoordinatesVal, 'S');

}

function eastMove(currentRoverWhereAboutsXcoordinates: number, currentRoverWhereAboutsYCoordinates: number): void {
    //const marsPlateauEndXcoordinates: number = marsPlateau.endRangeXCoordinates as number;
    const newRoverXCoordinatesval: number = currentRoverWhereAboutsXcoordinates as number;
    let proposedRoverXCoordinatesVal: number = newRoverXCoordinatesval + 1;
    if (proposedRoverXCoordinatesVal >= marsPlateau.startRangeXCoordinates &&
        proposedRoverXCoordinatesVal <= marsPlateau.endRangeXCoordinates)
        setRoverWhereAbouts(proposedRoverXCoordinatesVal, currentRoverWhereAboutsYCoordinates, 'E');
}
function westMove(currentRoverWhereAboutsXcoordinates: number, currentRoverWhereAboutsYCoordinates: number): void {
    const marsPlateauStartXcoordinates = marsPlateau.startRangeXCoordinates as number;
    const newRoverXCoordinatesval: number = currentRoverWhereAboutsXcoordinates as number;
    const proposedRoverXCoordinatesVal: number = currentRoverWhereAboutsXcoordinates - 1;
    if (proposedRoverXCoordinatesVal >= marsPlateau.startRangeXCoordinates &&
        proposedRoverXCoordinatesVal <= marsPlateau.endRangeXCoordinates)
        setRoverWhereAbouts(proposedRoverXCoordinatesVal, currentRoverWhereAboutsYCoordinates, 'W');
}
