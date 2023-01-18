import { askQuestion, clear, print } from '../views/console';
import { endMarsNavigation,startRoverNavigation } from './index';
import { plateau, marsPlateau, PLATEAU_END_RANGE, PLATEAU_START_RANGE } from '../models/plateau';
import { setPlateauStartXCoordinates, setPlateauStartYCoordinates,setPlateauEndXCoordinates, setPlateauEndYCoordinates } from '../models/plateau';
import { askRoverXCoordinates } from '../views/askRover';

export function askPlateauEndXCoordinates(): void {
    askQuestion(`Enter the X Coordinate <=  ${PLATEAU_END_RANGE} `, inputValidationXCoordinates);
}
export function askPlateauEndYCoordinates(startNavigation: string): void {
    askQuestion(`Enter the Y Coordinate <= ${PLATEAU_END_RANGE} `, inputValidationYCoordinates);
}


export function inputValidation(inp: string): boolean {
    const typeinp = parseInt(inp);
    if (isNaN(typeinp)) {
        print(`😮`);
        print(`That's not a number 😭`);
        return false;
    }
    if (typeinp > PLATEAU_END_RANGE)
    {
        print(`😮`);
        print(`Enter a number 😭 < ${PLATEAU_END_RANGE}`);
        return false;        
    }
    if (typeinp < PLATEAU_START_RANGE)
    {
        print(`😮`);
        print(`Enter a number 😭 > ${PLATEAU_START_RANGE}`);
        return false;        
    }
    
    if (typeinp <= PLATEAU_END_RANGE)
        return true;
    else
        return false;

}



function inputValidationXCoordinates(inp: string): void {
    if (inputValidation(inp)) {
        setPlateauStartXCoordinates();
        if (setPlateauEndXCoordinates(parseInt(inp)))
            return askPlateauEndYCoordinates('Y');
        else
            endMarsNavigation();
    }
    else
        endMarsNavigation();

}


function inputValidationYCoordinates(inp: string): void {
    if (inputValidation(inp)) {
        setPlateauStartXCoordinates();
        if (setPlateauEndYCoordinates(parseInt(inp))) {
            printPlateauCoordinates();
            return askRoverXCoordinates();
        }
        else
            endMarsNavigation();
    }
    else
        endMarsNavigation();

}


export function printPlateauCoordinates() {
    clear(true);
    print('Plateau Coordinates');
    print(`${marsPlateau.endRangeXCoordinates}  ${marsPlateau.endRangeYCoordinates}   `);
}