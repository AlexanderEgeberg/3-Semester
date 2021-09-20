import { Vector } from "./vector";
import { GameObject } from "./gameObject";
import { GameEngine } from "./index";

let divPoints: HTMLDivElement = <HTMLDivElement>document.getElementById("points");

let canvas = <HTMLCanvasElement> document.getElementById("canvas");

export class Player implements GameObject
{   
    public position:Vector;
    private gameEngine:GameEngine;
    private playerNumber:number;

    private speed:number = 40;
    public height:number = 30;
    public width:number = 10;
    public point:number = 0;

    constructor(position:Vector, gameEngine:GameEngine, playerNumber:number)
    {
        this.position = position;
        this.gameEngine = gameEngine;
        this.playerNumber = playerNumber;
    }

    update(time: number): void {

        if (this.playerNumber == 1) {
            if (this.gameEngine.aKey)
            {
                //move down
                this.position.y += time/1000 * this.speed 
            }
            if (this.gameEngine.qKey)
            {
                //move up
                this.position.y -= time/1000 * this.speed
            }
        }
        if (this.playerNumber == 2) {
            if (this.gameEngine.oKey)
            {
                //move down
                this.position.y -= time/1000 * this.speed 
            }
            if (this.gameEngine.lKey)
            {
                //move up
                this.position.y += time/1000 * this.speed
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "#0bbd58";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        //ctx.fillText(this.point + " points", this.position.x, this.position.y);

    }

    onColliosion(other: GameObject): void {
        this.point++;
        console.log(this.point);
        let stringPoints: string = this.point.toString();
        divPoints.innerHTML = "Points: " + stringPoints;
    }
    
}