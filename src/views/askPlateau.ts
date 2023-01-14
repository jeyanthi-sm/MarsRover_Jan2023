import { askQuestion, clear, print } from '../views/console';
import { endAdventure, startRoverNavigation } from '../views/index';
import { plateau, marsPlateau } from '../models/plateau';
import { setPlateauXCoordinates, setPlateauYCoordinates } from '../models/plateau';
import { askRoverXCoordinates } from '../views/askRover';

export function askPlateauEndXCoordinates(): void {
    askQuestion('Enter the X Coordinate <= 7 ', inputValidationXCoordinates);
}
export function askPlateauEndYCoordinates(startNavigation: string): void {
    askQuestion('Enter the Y Coordinate <= 7 ', inputValidationYCoordinates);
}


function inputValidation(inp: string): boolean {
    const typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        print(`😮`);
        print(`That's not a number 😭`);
        return false;
    }
    if (typeinp > 7) {
        print('Enter a number <= 7');
        return false;
    }
    if (typeinp < 0) {
        print('Enter a number > 0');
        return false;
    }

    if (typeinp <= 7)
        return true;
    else
        return false;

}



function inputValidationXCoordinates(inp: string): void {
    if (inputValidation(inp)) {
        setPlateauXCoordinates(parseInt(inp));
        return askPlateauEndYCoordinates('Y');
    }
    else
        endAdventure();

}


function inputValidationYCoordinates(inp: string): void {
    if (inputValidation(inp)) {
        setPlateauYCoordinates(parseInt(inp));
        printPlateauCoordinates();
        return askRoverXCoordinates();
    }
    else
        endAdventure();

}


export function printPlateauCoordinates() {
    clear(true);
    print('Plateau Coordinates');
    print(`${marsPlateau.endRangeXCoordinates}  ${marsPlateau.endRangeYCoordinates}   `);
}