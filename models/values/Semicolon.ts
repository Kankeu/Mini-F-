import { Stmt } from "./Stmt"
import { Expr } from './Expr';
import { Signature, Type, Environment, Val, TypeVariable, ValVariable } from "../context/Context";


export class Semicolon extends Expr {
    private left: Expr
    private right: Expr
    private expectedS: Type
    constructor(left?: Expr, right?: Expr) {
        super()
        this.left = left
        this.right = right
        this.expectedS = new TypeVariable()
    }

    public getLeft(): Expr {
        return this.left
    }
    public setLeft(left: Expr) {
        this.left = left
    }
    public getRight(): Expr {
        return this.right
    }
    public setRight(right: Expr) {
        this.right = right
    }
    public evaluateS(s: Signature): Type {
        this.getLeft().evaluateS(s)
        return this.getRight().evaluateS(s)
    }
    public evaluateE(e: Environment): ValVariable {
        this.getLeft().evaluateE(e).listen(this.getHash(),_=>{
             this.getRight().evaluateE(e).listen(this.getHash(), (rightVal: Val)=>{
                this.valVariable.setVal(rightVal)
             })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return this.expectedS
    }
    public toString(): string {
        return this.getLeft().toString() + $k(";") + this.getRight().toString()
    }
    public clone() {
        return new Semicolon(this.getLeft().clone(),this.getRight().clone())
    }
}
