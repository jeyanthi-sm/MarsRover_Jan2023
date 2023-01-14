import { clear, print, askQuestion } from '../views/console'
import { marsPlateau } from '../models/plateau';
import { endAdventure, startRoverNavigation } from '../views/index';
import { printPlateauCoordinates } from './askPlateau';
import { setRoverYCoordinates, setRoverXCoordinates, setRoverFacingDirection } from '../models/roverDetails';
import { roverWhereAboutsCurrent } from '../models/roverDetails';
import { haveRoverNavigate } from '../controllers/rover_navigation';
import { roverWhereAbouts } from '../models/roverDetails';

export function askRoverXCoordinates(): void {
    askQuestion(`Enter the Rover X Coordinate <= ${marsPlateau.endRangeXCoordinates}`, inputValidationForRoverXCoordinates);
}
export function askRoverYCoordinates(): void {
    askQuestion(`Enter the Rover Y Coordinate <= ${marsPlateau.endRangeYCoordinates}`, inputValidationForRoverYCoordinates);
}

export function askRoverFacingDirection(): void {
    askQuestion('Enter the Rover Facing Direction ', inputValidationRoverFacingDirection);
}

export function askRoverInstruction(): void {
    askQuestion('Enter the Rover Instructions ', inputValidationRoverInstructions);
}


function inputValidationRoverInstructions(inp: string): void {
    const strPattern = new RegExp(/^[lrm]+$/, 'gi');
    const matchPattern = strPattern.test(inp);
    if (matchPattern)
        haveRoverNavigate(inp.toUpperCase());
    else
        endAdventure();
}

function inputValidationForRoverXCoordinates(inp: string): void {
    const typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        print(`😮`);
        print(`That's not a number 😭`);
        return endAdventure();
    }
    if (typeinp > marsPlateau.endRangeXCoordinates) {
        print(`Enter a number <= ${marsPlateau.endRangeXCoordinates}`);
        return endAdventure();
    }
    if (typeinp < marsPlateau.startRangeXCoordinates) {
        print(`Enter a number > ${marsPlateau.startRangeXCoordinates}`);
        return endAdventure();
    }

    if (typeinp <= marsPlateau.endRangeXCoordinates) {
        setRoverXCoordinates(typeinp);
        return askRoverYCoordinates();
    }
    else
        endAdventure();


}

function inputValidationForRoverYCoordinates(inp: string): void {
    const typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        print(`😮`);
        print(`That's not a number 😭`);
        return endAdventure();
    }
    if (typeinp > marsPlateau.endRangeYCoordinates) {
        print(`Enter a number <= ${marsPlateau.endRangeYCoordinates}`);
        return endAdventure();
    }
    if (typeinp < marsPlateau.startRangeYCoordinates) {
        print(`Enter a number > ${marsPlateau.startRangeYCoordinates}`);
        return endAdventure();
    }

    if (typeinp <= marsPlateau.endRangeYCoordinates) {
        setRoverYCoordinates(typeinp);
        return askRoverFacingDirection();
    }
    else
        endAdventure();


}


function inputValidationRoverFacingDirection(inp: string): void {
    const strPattern = new RegExp(/^[news]+$/, 'gi');
    const matchPattern = strPattern.test(inp);
    if (matchPattern) {
        setRoverFacingDirection(inp.toUpperCase());
        clear(true);
        printPlateauCoordinates();
        printRoverWhereAbouts();
        return askRoverInstruction();
    }
    else
        endAdventure();

}


export function printRoverWhereAbouts(): void {
    print('    Rover WhereAbouts    ');
    print(`${roverWhereAboutsCurrent.xcoordinates}  ${roverWhereAboutsCurrent.ycoordinates}  ${roverWhereAboutsCurrent.facingDirection}`);
}


export function getRoverWhereAboutsInp(inpRoverWhereAbouts: roverWhereAbouts): roverWhereAbouts {
    return inpRoverWhereAbouts;
}



