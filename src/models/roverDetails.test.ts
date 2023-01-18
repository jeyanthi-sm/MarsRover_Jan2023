import { PLATEAU_END_RANGE, PLATEAU_START_RANGE } from "./plateau";
import { roverWhereAbouts } from "./roverDetails";
import { setRoverXCoordinates, setRoverYCoordinates, setRoverFacingDirection } from "./roverDetails";
import { getRoverWhereAbouts,roverWhereAboutsInit } from "./roverDetails";


describe("test set Rover X Coordinates to 0 ", () => {
    const inputValue = -1;
    const returnValue = 0;
    let currentRoverInstance = roverWhereAboutsInit();    
    setRoverXCoordinates(currentRoverInstance,inputValue);
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts(currentRoverInstance).xcoordinates).toBe(returnValue);
    });
});

describe("test set Rover X Coordinates to 0 ", () => {
    const inputValue = 6;
    const returnValue = 0;
    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();
    setRoverXCoordinates(currentRoverInstance,inputValue);
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts(currentRoverInstance).xcoordinates).toBe(returnValue);
    });
});


describe("test set Rover Y Coordinates to 0 ", () => {
    const inputValue = 6;
    const returnValue = 0;
    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();
    setRoverYCoordinates(currentRoverInstance, inputValue);
    it("should return 0 for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts(currentRoverInstance).ycoordinates).toBe(returnValue);
    });
});

describe("test set Rover Y Coordinates to 0 ", () => {
    const inputValue = -1;
    const returnValue = 0;
    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance=roverWhereAboutsInit();
    setRoverYCoordinates(currentRoverInstance,inputValue);
    it("should return 0 for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts(currentRoverInstance).ycoordinates).toBe(returnValue);
    });
});


describe("test set Rover Facing Direction ", () => {
    const xcoordinates = 1;
    const ycoordinates = 1;
    const inputValue = 'N';
    const returnValue = 'N';
    let currentRoverInstance = roverWhereAboutsInit();
    setRoverXCoordinates(currentRoverInstance, xcoordinates);
    setRoverYCoordinates(currentRoverInstance,ycoordinates);
    setRoverFacingDirection(currentRoverInstance,inputValue);
    it("should return N for setRoverFacingDirection()", () => {
        console.log(getRoverWhereAbouts().facingDirection);
        expect(getRoverWhereAbouts(currentRoverInstance).facingDirection).toBe('N');
    });
});


describe("test set Rover Facing Direction ", () => {
    const xcoordinates = 1;
    const ycoordinates = 1;
    
    const inputValue = 'T';
    const returnValue = '';
    let currentRoverInstance = roverWhereAboutsInit();
    currentRoverInstance = roverWhereAboutsInit();
    setRoverXCoordinates(currentRoverInstance,xcoordinates);
    setRoverYCoordinates(currentRoverInstance,ycoordinates);
    setRoverFacingDirection(currentRoverInstance,inputValue);
    it("should return empty string for setRoverFacingDirection()", () => {
        expect(getRoverWhereAbouts(currentRoverInstance).facingDirection).toMatch(returnValue);
    });
});


