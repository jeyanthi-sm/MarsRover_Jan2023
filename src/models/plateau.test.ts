
import { setPlateauStartXCoordinates,setPlateauStartYCoordinates,setPlateauEndXCoordinates, setPlateauEndYCoordinates } from '../models/plateau';
import { getPlateauStartXCoordinates,getPlateauStartYCoordinates,getPlateauEndXCoordinates, getPlateauEndYCoordinates } from '../models/plateau';


describe("test set Plateau Start X Coordinates", () => {
    setPlateauStartXCoordinates();
    
    it("should return 0 for setPlateauStartXCoordinates()", () => {
        expect(getPlateauStartXCoordinates()).toBe(0);
    });
});


describe("test set Plateau Start Y Coordinates", () => {
    setPlateauStartYCoordinates();
    
    it("should return 0 for setPlateauStartYCoordinates()", () => {
        expect(getPlateauStartYCoordinates()).toBe(0);
    });
});


describe("test set Plateau End X Coordinates", () => {
    setPlateauEndXCoordinates(-1);
    
    it("should return undefined for setPlateauEndXCoordinates() -1 ", () => {
        expect(getPlateauEndXCoordinates()).toBe(undefined);
    });
});

describe("test set Plateau End X Coordinates", () => {
    setPlateauEndXCoordinates(2);
    
    it("should return undefined for setPlateauEndXCoordinates() -1 ", () => {
        expect(getPlateauEndXCoordinates()).toBe(2);
    });
});


describe("test set Plateau End X Coordinates", () => {
    setPlateauEndXCoordinates(6);
    
    it("should return undefined for setPlateauEndXCoordinates() >7 ", () => {
        expect(getPlateauEndXCoordinates()).toBe(undefined);
    });
});

describe("test set Plateau End Y Coordinates", () => {
    setPlateauEndYCoordinates(-1);
    
    it("should return undefined for setPlateauEndYCoordinates() = -1", () => {
        expect(getPlateauEndYCoordinates()).toBe(undefined);
    });
});

describe("test set Plateau End Y Coordinates", () => {
    setPlateauEndYCoordinates(6);
    
    it("should return undefined for setPlateauEndYCoordinates() = 8", () => {
        expect(getPlateauEndYCoordinates()).toBe(undefined);
    });
});

