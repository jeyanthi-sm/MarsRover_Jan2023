
import { setPlateauStartXCoordinates,setPlateauStartYCoordinates,setPlateauEndXCoordinates, setPlateauEndYCoordinates } from '../models/plateau';
import { getPlateauStartXCoordinates,getPlateauStartYCoordinates,getPlateauEndXCoordinates, getPlateauEndYCoordinates } from '../models/plateau';
import { inputValidation } from '../views/askPlateau';

describe("test inputValidation", () => {
    
    it("should return 0 for setPlateauStartXCoordinates()", () => {
        expect(inputValidation('xy')).toBe(0);
    });
});

