import {Expr,ExprBinary} from "./Expr"
import { Type, PVal, Signature, Environment, TypeNat, ValVariable } from '../context/Context';

export class NatConst extends Expr {
    private value: number
    constructor(value?: number){
        super()
        this.value=value
    }
    public getType(): Type{
        return new TypeNat()
    }

    public getValue(){
        return this.value
    }
    public setValue(value: number){
        this.value = value
    }
    public evaluateS(s: Signature): Type{
        return this.getType()
    }
    public evaluateE(e: Environment): ValVariable {
        return this.valVariable
    }
    public compute(e: Environment){
        this.valVariable.setVal(new PVal(this.getValue()))
    }
    public toString(): string{
        return ""+this.getValue()
    }
    public clone(){
        return new NatConst(this.getValue())
    }
}

export class Times extends ExprBinary {
    public evaluateS(s: Signature): Type{
        return new TypeNat()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" &times; "+right.toString())

        left.listen(this.getHash(),(leftVal: PVal)=>{
            right.listen(this.getHash(),(rightVal: PVal)=>{
                this.valVariable.setVal(new PVal((leftVal.getValue() as number)*(rightVal.getValue() as number)))
            })
        })
        
        return this.valVariable
    }
    public getExpectedS(): Type{
        return new TypeNat()
    }
    public toString(): string{
        return this.getLeft().toString() + " &times; " + this.getRight().toString() 
    }
    public clone() {
        return new Times(this.getLeft().clone(), this.getRight().clone())
    }
}
export class Div extends ExprBinary {
    public evaluateS(s: Signature): Type{
        return new TypeNat()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" / "+right.toString())

        left.listen(this.getHash(),(leftVal: PVal)=>{
            right.listen(this.getHash(),(rightVal: PVal)=>{
                this.valVariable.setVal(new PVal((leftVal.getValue() as number)/(rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type{
        return new TypeNat()
    }
    public toString(): string{
        return this.getLeft().toString() + " / " + this.getRight().toString() 
    }
    public clone() {
        return new Div(this.getLeft().clone(), this.getRight().clone())
    }
}
export class Mod extends ExprBinary {
    public evaluateS(s: Signature): Type{
        return new TypeNat()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" % "+right.toString())

        left.listen(this.getHash(),(leftVal: PVal)=>{
            right.listen(this.getHash(),(rightVal: PVal)=>{
                this.valVariable.setVal(new PVal((leftVal.getValue() as number)%(rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type{
        return new TypeNat()
    }
    public toString(): string{
        return this.getLeft().toString() + " % " + this.getRight().toString() 
    }
    public clone() {
        return new Mod(this.getLeft().clone(), this.getRight().clone())
    }
}
export class Plus extends ExprBinary {
    public evaluateS(s: Signature): Type{
        return new TypeNat()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" + "+right.toString())

        left.listen(this.getHash(),(leftVal: PVal)=>{
            right.listen(this.getHash(),(rightVal: PVal)=>{
                this.valVariable.setVal(new PVal((leftVal.getValue() as number)+(rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type{
        return new TypeNat()
    }
    public toString(): string{
        return this.getLeft().toString() + " + " + this.getRight().toString() 
    }
    public clone() {
        return new Plus(this.getLeft().clone(), this.getRight().clone())
    }
}
export class Minus extends ExprBinary {
    public evaluateS(s: Signature): Type{
        return new TypeNat()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
      
        //console.log("----+++++++++---",this.valVariable.id,left.toString()+" - "+right.toString())
        this.valVariable.setToString(left.toString()+" - "+right.toString())

        left.listen(this.getHash(),(leftVal: PVal)=>{
            right.listen(this.getHash(),(rightVal: PVal)=>{
                const val = (leftVal.getValue() as number)-(rightVal.getValue() as number)
                this.valVariable.setVal(new PVal(val<0?0:val))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type{
        return new TypeNat()
    }
    public toString(): string{
        return this.getLeft().toString() + " - " + this.getRight().toString() 
    }
    public clone() {
        return new Minus(this.getLeft().clone(), this.getRight().clone())
    }
}