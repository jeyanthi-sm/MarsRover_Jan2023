import { clear, print, askQuestion } from '../views/console'
import { marsPlateau } from '../models/plateau';
import { endMarsNavigation, startRoverNavigation } from './index';
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
        haveRoverNavigate(marsPlateau,roverWhereAboutsCurrent,inp.toUpperCase());
    else
        endMarsNavigation();
}

function inputValidationForRoverXCoordinates(inp: string): void {
    const typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        print(`😮`);
        print(`That's not a number 😭`);
        return endMarsNavigation();
    }
    if (typeinp > marsPlateau.endRangeXCoordinates) {
        print(`Enter a number <= ${marsPlateau.endRangeXCoordinates}`);
        return endMarsNavigation();
    }
    if (typeinp < marsPlateau.startRangeXCoordinates) {
        print(`Enter a number > ${marsPlateau.startRangeXCoordinates}`);
        return endMarsNavigation();
    }

    if (typeinp <= marsPlateau.endRangeXCoordinates) {
        setRoverXCoordinates(undefined,typeinp);
        return askRoverYCoordinates();
    }
    else
        endMarsNavigation();


}

function inputValidationForRoverYCoordinates(inp: string): void {
    const typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        print(`😮`);
        print(`That's not a number 😭`);
        return endMarsNavigation();
    }
    if (typeinp > marsPlateau.endRangeYCoordinates) {
        print(`Enter a number <= ${marsPlateau.endRangeYCoordinates}`);
        return endMarsNavigation();
    }
    if (typeinp < marsPlateau.startRangeYCoordinates) {
        print(`Enter a number > ${marsPlateau.startRangeYCoordinates}`);
        return endMarsNavigation();
    }

    if (typeinp <= marsPlateau.endRangeYCoordinates) {
        setRoverYCoordinates(undefined,typeinp);
        return askRoverFacingDirection();
    }
    else
        endMarsNavigation();


}


function inputValidationRoverFacingDirection(inp: string): void {
    const strPattern = new RegExp(/^[news]+$/, 'gi');
    const matchPattern = strPattern.test(inp);
    if (matchPattern) {
        setRoverFacingDirection(roverWhereAboutsCurrent,inp.toUpperCase());
        clear(true);
        printPlateauCoordinates();
        printRoverWhereAbouts();
        return askRoverInstruction();
    }
    else
        endMarsNavigation();

}


export function printRoverWhereAbouts(inpRoverWhereAbouts:roverWhereAbouts = roverWhereAboutsCurrent): void {
    print('    Rover WhereAbouts    ');
    print(`${inpRoverWhereAbouts.xcoordinates}  ${inpRoverWhereAbouts.ycoordinates}  ${inpRoverWhereAbouts.facingDirection}`);
}


export function getRoverWhereAboutsInp(inpRoverWhereAbouts: roverWhereAbouts): roverWhereAbouts {
    return inpRoverWhereAbouts;
}



