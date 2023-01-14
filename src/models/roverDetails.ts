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




export function getRoverWhereAboutsInp(inpRoverWhereAbouts: roverWhereAbouts): roverWhereAbouts {
    return inpRoverWhereAbouts;
}



export function setRoverWhereAbouts(xCoordinates: number, ycoordinates: number, facingDirection: string): void {
    roverWhereAboutsCurrent.xcoordinates! = xCoordinates;
    roverWhereAboutsCurrent.ycoordinates! = ycoordinates;
    roverWhereAboutsCurrent.facingDirection = facingDirection;
}



export function setRoverXCoordinates(xCoordinates: number): void {
    roverWhereAboutsCurrent.xcoordinates! = xCoordinates;
}

export function setRoverYCoordinates(yCoordinates: number): void {
    roverWhereAboutsCurrent.ycoordinates! = yCoordinates;
}


export function setRoverFacingDirection(inpDirection: string) {
    roverWhereAboutsCurrent.facingDirection = inpDirection;
}


export function getRoverWhereAbouts(): roverWhereAbouts {
    return roverWhereAboutsCurrent;
}

export function getRoverFacingDirection(): string {
    return roverWhereAboutsCurrent.facingDirection!;
}

