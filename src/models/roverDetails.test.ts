import { roverWhereAbouts } from "./roverDetails";
import { setRoverXCoordinates, setRoverYCoordinates, setRoverFacingDirection } from "./roverDetails";
import { getRoverWhereAbouts, getRoverFacingDirection } from "./roverDetails";


describe("test set Rover X Coordinates to -1 ", () => {
    setRoverXCoordinates(-1);    
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(undefined);
    });
});

describe("test set Rover X Coordinates to 6 ", () => {
    setRoverXCoordinates(6);    
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(undefined);
    });
});


describe("test set Rover X Coordinates to 2 ", () => {
    setRoverXCoordinates(2);    
    it("should return undefined for setRoverXCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(2);
    });
});

describe("test set Rover Y Coordinates to 6 ", () => {
    setRoverYCoordinates(6);    
    it("should return undefined for setRoverYCoordinates()", () => {
        expect(getRoverWhereAbouts().xcoordinates).toBe(undefined);
    });
});
