import { Type, Val, Signature, Environment } from "../context/Context";

export abstract class Program{
    static counter: number = 0
    private hash: string
    public getHash(){
        return this.hash
    }
    constructor(){
        this.hash = "node-"+(Program.counter++)
    }
    public evaluateS(s: Signature): Type | Signature {
        return null
    }
    public evaluateE(e: Environment): Val | Environment {
        return null
    }

    public clone() {
        return null
    }
}