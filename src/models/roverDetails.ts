import { PLATEAU_END_RANGE, PLATEAU_START_RANGE } from "./plateau";

export class roverWhereAbouts {
    xcoordinates!: number;
    ycoordinates!: number;
    facingDirection!: string;

    roverWhereAbouts(xCoordinates?: number, ycoordinates?: number, facingDirection?: string) {
        this.xcoordinates = xCoordinates || 0;
        this.ycoordinates = ycoordinates || 0;
        this.facingDirection = facingDirection || 'N';
    }
};

export let roverWhereAboutsCurrent: roverWhereAbouts = new roverWhereAbouts();

export function setRoverWhereAbouts(xCoordinates: number, ycoordinates: number, facingDirection: string): void {
    setRoverXCoordinates(xCoordinates);
    setRoverYCoordinates(ycoordinates);
    setRoverFacingDirection(facingDirection);
}

export function setRoverXCoordinates(xCoordinates: number): boolean {
    if (xCoordinates >= PLATEAU_START_RANGE && xCoordinates <= PLATEAU_END_RANGE) {
        roverWhereAboutsCurrent.xcoordinates! = xCoordinates;
        return true;
    }
    else
    {
        roverWhereAboutsCurrent.xcoordinates! = 0;
        return false;
    }

}

export function setRoverYCoordinates(yCoordinates: number): boolean {
    if (yCoordinates >= PLATEAU_START_RANGE && yCoordinates <= PLATEAU_END_RANGE)
    {
    roverWhereAboutsCurrent.ycoordinates! = yCoordinates;
    return true;
    }
    else
    {
        roverWhereAboutsCurrent.ycoordinates! = 0;
        return false;
    }
}


export function setRoverFacingDirection(inpDirection: string) {
    const strPattern = new RegExp(/^[nesw]+$/, 'gi');
    const matchPattern = strPattern.test(inpDirection);
    if (matchPattern)
        roverWhereAboutsCurrent.facingDirection = inpDirection.toUpperCase();
    else
        roverWhereAboutsCurrent.facingDirection = "";
}



export function getRoverWhereAbouts(): roverWhereAbouts {
    return roverWhereAboutsCurrent;
}
