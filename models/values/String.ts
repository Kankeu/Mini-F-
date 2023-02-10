import { Expr } from "./Expr";
import { Type, TypeString, Environment, PVal } from "../context/Context";

export class StringConst extends Expr {
    private value: string
    constructor(value?: string){
        super()
        this.value=value
    }
    public getType(){
        return new TypeString()
    }

    public getValue(): string{
        return this.value
    }
    public setType(value: string){
        this.value = value
    }
    public compute(e: Environment){
        this.valVariable.setVal(new PVal(this.getValue()))
    }
    public clone() {
        return new StringConst(this.getValue())
    }
}