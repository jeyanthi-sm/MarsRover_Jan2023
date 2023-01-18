import { roverWhereAboutsInit,getRoverWhereAbouts, setRoverFacingDirection, setRoverWhereAbouts } from '../models/roverDetails';
import { haveRoverNavigate, northMove, southMove, eastMove, westMove, rotateLeftRover, rotateRightRover, moveRover } from '../controllers/rover_navigation';
import { marsPlateau, plateauInit,setPlateauEndXCoordinates, setPlateauEndYCoordinates } from '../models/plateau';


describe("test rotateLeftRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'N';
    const returnRoverFacingDirection = 'W';

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();

    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);

    it("should return W for rotateLeftRover from N Direction ()", () => {
        expect(rotateLeftRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});

describe("test rotateLeftRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'W';
    const returnRoverFacingDirection = 'S';


    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();

    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);

    it("should return S for rotateLeftRover from W Direction ()", () => {
        expect(rotateLeftRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});

describe("test rotateLeftRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'S';
    const returnRoverFacingDirection = 'E';

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();

    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);

    it("should return S for rotateLeftRover from E Direction ()", () => {
        expect(rotateLeftRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});

describe("test rotateLeftRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'E';
    const returnRoverFacingDirection = 'N';

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();

    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);

    it("should return N for rotateLeftRover from E Direction ()", () => {
        expect(rotateLeftRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});


describe("test rotateRightRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'E';
    const returnRoverFacingDirection = 'S';

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);


    it("should return N for rotateRightRover from E Direction ()", () => {
        expect(rotateRightRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});



describe("test rotateRightRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'S';
    const returnRoverFacingDirection = 'W';

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);


    it("should return W for rotateRightRover from S Direction ()", () => {
        expect(rotateRightRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});


describe("test rotateRightRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'W';
    const returnRoverFacingDirection = 'N';

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();

    let currentPlateauInstance = plateauInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);


    it("should return N for rotateRightRover from W Direction ()", () => {
        expect(rotateRightRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});


describe("test rotateRightRover", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 1;
    const roverFacingDirection = 'N';
    const returnRoverFacingDirection = 'E';


    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);


    it("should return E for rotateRightRover from N Direction ()", () => {
        expect(rotateRightRover(currentRoverInstance)).toBe(returnRoverFacingDirection);
    });
});


describe("test haveRoverNavigate", () => {
    const plateauEndXcoordinates = 5;
    const plateauEndYCoordinates = 5;
    const roverXCoordinates = 1;
    const roverYCoordinates = 2;
    const roverFacingDirection = 'N';
    const roverInstruction = 'LMLMLMLMM';
    const returnRoverXCoordinates = 3;
    const returnRoverYCoordinates = 3;
    const returnRoverFacingDirection = 'E';

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);

    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);
    haveRoverNavigate(currentPlateauInstance,currentRoverInstance,roverInstruction);
    console.log(currentRoverInstance);
    it("haveRoverNavigate should return 3,3,E ()", () => {
        expect(((getRoverWhereAbouts(currentRoverInstance).xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).facingDirection === returnRoverFacingDirection))
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


    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);
    
    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);
    
    northMove(currentPlateauInstance,currentRoverInstance);


    it("should return 1,3,N for North Move ()", () => {
        expect(((getRoverWhereAbouts(currentRoverInstance).xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).facingDirection === returnRoverFacingDirection))
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

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);
    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);
    southMove(currentPlateauInstance,currentRoverInstance);

    it("should return 1,1,S for South Move ()", () => {
        expect(((getRoverWhereAbouts(currentRoverInstance).xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).facingDirection === returnRoverFacingDirection))
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

    let currentPlateauInstance = plateauInit();


    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();

    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);
    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);
    eastMove(currentPlateauInstance,currentRoverInstance);

    
    it("should return 2,2,E for East Move ()", () => {
        expect(((getRoverWhereAbouts(currentRoverInstance).xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).facingDirection === returnRoverFacingDirection))
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

    let currentPlateauInstance = plateauInit();

    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();


    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);
    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);

    westMove(currentPlateauInstance,currentRoverInstance);

    it("should return 0,2,W for West Move ()", () => {
        expect(((getRoverWhereAbouts(currentRoverInstance).xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).facingDirection === returnRoverFacingDirection))
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
    
    let currentPlateauInstance = plateauInit();


    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();

    setPlateauEndXCoordinates(currentPlateauInstance,plateauEndXcoordinates);
    setPlateauEndYCoordinates(currentPlateauInstance,plateauEndYCoordinates);
    setRoverWhereAbouts(currentRoverInstance,roverXCoordinates, roverYCoordinates, roverFacingDirection);
    moveRover(currentPlateauInstance,currentRoverInstance);


    it("should return 0,0,W for move Rover ()", () => {
        expect(((getRoverWhereAbouts(currentRoverInstance).xcoordinates === returnRoverXCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).ycoordinates === returnRoverYCoordinates) &&
            (getRoverWhereAbouts(currentRoverInstance).facingDirection === returnRoverFacingDirection))
        ).toBe(true);
    });
});
