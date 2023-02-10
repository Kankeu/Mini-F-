import { Expr, ExprBinary } from "./Expr"
import { Type, Signature, Environment, Val, PVal, TypeBool, TypeNat, TypeVariable, ValVariable } from '../context/Context';

export class BoolConst extends Expr {
    private value: boolean
    constructor(value?: boolean) {
        super()
        this.value = value
    }
    public getType(): Type {
        return new TypeBool()
    }
    public getValue(): boolean {
        return this.value
    }
    public setValue(value: boolean) {
        this.value = value
    }
    public evaluateS(s: Signature): Type {
        return this.getType()
    }
    public evaluateE(e: Environment): ValVariable {
        return this.valVariable
    }
    public compute(){
        this.valVariable.setVal(new PVal(this.getValue()))
    }
    public toString(): string {
        return this.getValue() ? "true" : "false"
    }
    public clone() {
        return new BoolConst(this.value)
    }
}

export class Equals extends ExprBinary {
    public evaluateS(s: Signature): Type {
        return new TypeBool()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" = "+right.toString())

        left.listen(this.getHash(), (leftVal: PVal) => {
            right.listen(this.getHash(), (rightVal: PVal) => {
                this.valVariable.setVal(new PVal((leftVal.getValue() as number) == (rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return new TypeBool()
    }
    public toString(): string {
        return this.getLeft().toString() + " = " + this.getRight().toString()
    }
    public clone() {
        return new Equals(this.getLeft().clone(), this.getRight().clone())
    }
}
export class Unequals extends ExprBinary {
    public evaluateS(s: Signature): Type {
        return new TypeBool()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" <> "+right.toString())

        left.listen(this.getHash(), (leftVal: PVal) => {
            right.listen(this.getHash(), (rightVal: PVal) => {
                this.valVariable.setVal(new PVal((leftVal.getValue() as number) != (rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return new TypeBool()
    }
    public toString(): string {
        return this.getLeft().toString() + " <> " + this.getRight().toString()
    }
    public clone() {
        return new Unequals(this.getLeft().clone(),this.getRight().clone())
    }
}
export class Less extends ExprBinary {
    public evaluateS(s: Signature): Type {
        return new TypeBool()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" < "+right.toString())

        left.listen(this.getHash(), (leftVal: PVal) => {
            right.listen(this.getHash(), (rightVal: PVal) => {
                this.valVariable.setVal(new PVal((leftVal.getValue() as number) < (rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return new TypeBool()
    }
    public toString(): string {
        return this.getLeft().toString() + " < " + this.getRight().toString()
    }
    public clone() {
        return new Less(this.getLeft().clone(), this.getRight().clone())
    }
}
export class LessOrEquals extends ExprBinary {
    public evaluateS(s: Signature): Type {
        return new TypeBool()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" <= "+right.toString())

        left.listen(this.getHash(), (leftVal: PVal) => {
            right.listen(this.getHash(), (rightVal: PVal) => {
                this.valVariable.setVal(new PVal((leftVal.getValue() as number) <= (rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return new TypeBool()
    }
    public toString(): string {
        return this.getLeft().toString() + " <= " + this.getRight().toString()
    }
    public clone() {
        return new LessOrEquals(this.getLeft().clone(),this.getRight().clone())
    }
}
export class Greater extends ExprBinary {
    public evaluateS(s: Signature): Type {
        return new TypeBool()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" > "+right.toString())

        left.listen(this.getHash(), (leftVal: PVal) => {
            right.listen(this.getHash(), (rightVal: PVal) => {
                this.valVariable.setVal(new PVal((leftVal.getValue() as number) > (rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return new TypeBool()
    }
    public toString(): string {
        return this.getLeft().toString() + " > " + this.getRight().toString()
    }
    public clone() {
        return new Greater(this.getLeft().clone(),this.getRight().clone())
    }
}
export class GreaterOrEquals extends ExprBinary {
    public evaluateS(s: Signature): Type {
        return new TypeBool()
    }
    public evaluateE(e: Environment): ValVariable {
        const left = this.getLeft().evaluateE(e)
        const right = this.getRight().evaluateE(e)
        this.valVariable.setToString(left.toString()+" >= "+right.toString())

        left.listen(this.getHash(), (leftVal: PVal) => {
            right.listen(this.getHash(), (rightVal: PVal) => {
                this.valVariable.setVal(new PVal((leftVal.getValue() as number) >= (rightVal.getValue() as number)))
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return new TypeBool()
    }
    public toString(): string {
        return this.getLeft().toString() + " >= " + this.getRight().toString()
    }
    public clone() {
        return new GreaterOrEquals(this.getLeft().clone(),this.getRight().clone())
    }
}