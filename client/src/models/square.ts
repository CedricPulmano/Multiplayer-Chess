import Piece from "./piece";
import {Colour} from "./piece";

export class Square {
    private colour: Colour;
    private x: number;
    private y: number;
    private piece: Piece | null;

    constructor(x: number, y: number, colour: Colour) {
        this.x = x; // int 0 < x < 7
        this.y = y; // int 0 < y < 7
        this.piece = null;
        this.colour = colour;
    }

    getColour() { return this.colour; }

    getCoord() { return [this.x, this.y]; }

    getPiece() { return this.piece; }

    setPiece(newPiece: Piece) {
        this.piece = newPiece;
    }

    setColour(colour: Colour) {
        this.colour = colour;
    }

    removePiece() {
        this.piece = null;
    }

    isOccupied() { 
        return this.piece != null; 
    }
}

export default Square;