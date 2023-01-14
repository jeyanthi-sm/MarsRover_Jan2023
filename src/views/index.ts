import { clear, print, askQuestion } from './console';
import { askPlateauEndXCoordinates, askPlateauEndYCoordinates } from '../views/askPlateau';


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


export function endAdventure(): void {
	print('***************************************');
	print('You did not make it through Wonderland. 😭');
	askQuestion('Press ENTER to restart! ', startRoverNavigation);
}
startRoverNavigation();


