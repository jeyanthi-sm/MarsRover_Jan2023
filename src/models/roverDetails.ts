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

export function roverWhereAboutsInit(): roverWhereAbouts {
    const outputRoverClass: roverWhereAbouts = new roverWhereAbouts();
    return outputRoverClass;
}

export let roverWhereAboutsCurrent: roverWhereAbouts = new roverWhereAbouts();

export function setRoverWhereAbouts(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent,xCoordinates: number, ycoordinates: number, facingDirection: string): void {
    setRoverXCoordinates(inputRoverclass,xCoordinates);
    setRoverYCoordinates(inputRoverclass,ycoordinates);
    setRoverFacingDirection(inputRoverclass,facingDirection);
}

export function setRoverXCoordinates(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent,xCoordinates: number): boolean {
    if (xCoordinates >= PLATEAU_START_RANGE && xCoordinates <= PLATEAU_END_RANGE) {
        inputRoverclass.xcoordinates = xCoordinates;
        return true;
    }
    else
    {
        inputRoverclass.xcoordinates = 0;
        return false;
    }

}

export function setRoverYCoordinates(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent,yCoordinates: number): boolean {
    if (yCoordinates >= PLATEAU_START_RANGE && yCoordinates <= PLATEAU_END_RANGE)
    {
    inputRoverclass.ycoordinates = yCoordinates;
    return true;
    }
    else
    {
        inputRoverclass.ycoordinates = 0;
        return false;
    }
}


export function setRoverFacingDirection(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent,inpDirection: string):boolean {
    const strPattern = new RegExp(/^[nesw]+$/, 'gi');
    const matchPattern = strPattern.test(inpDirection);
    if (matchPattern)
    {
        inputRoverclass.facingDirection = inpDirection.toUpperCase();
        return true;
    }
    else
    {
        inputRoverclass.facingDirection = "";
        return false;
    }
}



export function getRoverWhereAbouts(inputRoverclass:roverWhereAbouts = roverWhereAboutsCurrent,): roverWhereAbouts {
    return inputRoverclass;
}
