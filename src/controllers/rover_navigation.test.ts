import { getRoverWhereAbouts, setRoverFacingDirection, setRoverWhereAbouts } from '../models/roverDetails';
import { haveRoverNavigate, northMove, southMove, eastMove, westMove, rotateLeftRover, rotateRightRover, moveRover } from '../controllers/rover_navigation';
import { setPlateauEndXCoordinates, setPlateauEndYCoordinates } from '../models/plateau';


describe("test rotateLeftRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'N';
    const returnRoverFacingDirection = 'W';

    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);

    it("should return W for rotateLeftRover from N Direction ()", () => {
        expect(rotateLeftRover()).toBe(returnRoverFacingDirection);
    });
});

describe("test rotateRightRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'N';
    const returnRoverFacingDirection = 'E';

    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);


    it("should return E for rotateRightRover from N Direction ()", () => {
        expect(rotateRightRover()).toBe(returnRoverFacingDirection);
    });
});

describe("test haveRoverNavigate", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 2;
    const roverFacingDirection = 'N';
    const roverInstruction = 'LMLMLMLML';
    const returnRoverXCoordinates = 1;
    const returnRoverYCoordinates = 3;
    const returnRoverFacingDirection = 'N';


    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);
    haveRoverNavigate(roverInstruction);

    it("haveRoverNavigate should return 3,3,E ()", () => {
        expect(((getRoverWhereAbouts().xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts().ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts().facingDirection === returnRoverFacingDirection))
        ).toBe(true);
    });
});

describe("test NorthMove", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 2;
    const roverFacingDirection = 'N';
    const roverInstruction = 'M';
    const returnRoverXCoordinates = 1;
    const returnRoverYCoordinates = 3;
    const returnRoverFacingDirection = 'N';


    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);
    haveRoverNavigate(roverInstruction);
    northMove(roverXCoordinates, roverYCoordinates);


    it("should return 1,3,N for North Move ()", () => {
        expect(((getRoverWhereAbouts().xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts().ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts().facingDirection === returnRoverFacingDirection))
        ).toBe(true);
    });
});


describe("test SouthMove", () => {

    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 2;
    const roverFacingDirection = 'S';

    const returnRoverXCoordinates = 1;
    const returnRoverYCoordinates = 1;
    const returnRoverFacingDirection = 'S';


    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);

    southMove(roverXCoordinates, roverYCoordinates);

    setPlateauEndXCoordinates(5);
    setPlateauEndYCoordinates(5);
    setRoverWhereAbouts(1, 1, 'S');
    southMove(1, 2);

    it("should return 1,1,S for South Move ()", () => {
        expect(((getRoverWhereAbouts().xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts().ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts().facingDirection === returnRoverFacingDirection))
        ).toBe(true);
    });
});

describe("test EastMove", () => {

    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 2;
    const roverFacingDirection = 'E';

    const returnRoverXCoordinates = 2;
    const returnRoverYCoordinates = 2;
    const returnRoverFacingDirection = 'E';


    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);

    eastMove(roverXCoordinates, roverYCoordinates);

    setPlateauEndXCoordinates(5);
    setPlateauEndYCoordinates(5);
    setRoverWhereAbouts(1, 2, 'E');
    eastMove(1, 2);

    it("should return 2,2,E for East Move ()", () => {
        expect(((getRoverWhereAbouts().xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts().ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts().facingDirection === returnRoverFacingDirection))
        ).toBe(true);
    });
});

describe("test WestMove", () => {

    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 2;
    const roverFacingDirection = 'W';
    const returnRoverXCoordinates = 0;
    const returnRoverYCoordinates = 2;
    const returnRoverFacingDirection = 'W';


    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);

    westMove(roverXCoordinates, roverYCoordinates);

    it("should return 0,2,W for West Move ()", () => {
        expect(((getRoverWhereAbouts().xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts().ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts().facingDirection === returnRoverFacingDirection))
        ).toBe(true);
    });
});


describe("test MoveRover", () => {

    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 0;
    const roverYCoordinates = 0;
    const roverFacingDirection = 'W';
    const roverInstruction = 'M';
    const returnRoverXCoordinates = 0;
    const returnRoverYCoordinates = 0;
    const returnRoverFacingDirection = 'W';


    setPlateauEndXCoordinates(plateauEndXcoordinates);
    setPlateauEndYCoordinates(plateauEndYCoordinates);
    setRoverWhereAbouts(roverXCoordinates, roverYCoordinates, roverFacingDirection);
    haveRoverNavigate(roverInstruction);
    moveRover();


    it("should return 0,0,W for move Rover ()", () => {
        expect(((getRoverWhereAbouts().xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts().ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts().facingDirection === returnRoverFacingDirection))
        ).toBe(true);
    });
});
