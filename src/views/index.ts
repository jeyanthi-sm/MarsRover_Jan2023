import { clear, print, askQuestion } from './console';
import { askPlateauEndXCoordinates, askPlateauEndYCoordinates } from './askPlateau';


export function startRoverNavigation(): void {
	clear(false);
	print('-------------------------------------------------');
	print('| Welcome to Mars land! You are The Chosen One  |');
	print('| To give Mars Rover Navigation                 |');
	print('-------------------------------------------------');
	askPlateauEndXCoordinates();
}



function startProcess(): void {
	askPlateauEndXCoordinates();
}


export function endMarsNavigation(): void {
	print('***************************************');
	print('No Rover Instructions are presented 😭');
	askQuestion('Press ENTER to restart! ', startRoverNavigation);
}
startRoverNavigation();


