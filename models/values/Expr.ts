import { NatConst } from "./Nat"
import { BoolConst } from './Bool';
import { Signature, Environment, Type, Val, PVal, TypeVariable, ValVariable } from "../context/Context"
import { Program } from "./Program";



export abstract class Expr extends Program {
    protected valVariable: ValVariable = new ValVariable()
    public evaluateS(s: Signature): Type {
        return null
    }
    public getExpectedS(): Type {
        return null
    }
    public evaluateE(e: Environment): ValVariable {
        return null
    }
    public clone() {
        return null
    }
}

export abstract class ExprBinary extends Expr {
    private left: Expr
    private right: Expr
    constructor(left?: Expr, right?: Expr) {
        super()
        this.left = left
        this.right = right
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
    public clone() {
        return null
    }
}

export class ExprIf extends Expr {
    private cond: Expr
    private then: Expr
    private else: Expr
    private expectedS: Type = new TypeVariable()
    constructor(cond?: Expr, then?: Expr, else_?: Expr) {
        super()
        this.cond = cond
        this.then = then
        this.else = else_
    }

    public getCond(): Expr {
        return this.cond
    }
    public setCond(cond: Expr) {
        this.cond = cond
    }
    public getThen(): Expr {
        return this.then
    }
    public setThen(then: Expr) {
        this.then = then
    }
    public getElse(): Expr {
        return this.else
    }
    public setElse(else_: Expr) {
        this.else = else_
    }
    public evaluateS(s: Signature): Type {
        return this.getThen().evaluateS(s)
    }
    public getExpectedS(): Type {
        return this.expectedS
    }
    public evaluateE(e: Environment): ValVariable {
        const cond = this.getCond().evaluateE(e)
        const then = this.getThen().evaluateE(e)
        const else_ = this.getElse().evaluateE(e)
        this.valVariable.setToString("?")

        cond.listen(this.getHash(), (condVal: PVal) => {
            if (condVal.getValue() as boolean) {
                this.valVariable.setToString(then.toString())
                then.listen(this.getHash(), (thenVal: Val) => {
                    this.valVariable.setVal(thenVal)
                })
            }
            else {
                this.valVariable.setToString(else_.toString())
                else_.listen(this.getHash(), (elseVal: Val) => {
                    this.valVariable.setVal(elseVal)
                })
            }
        })
        return this.valVariable
    }
    public toString(): string {
        return $k("if") + " " + this.getCond() + " " + $k("then") + " " + this.getThen().toString() + " " + $k("else") + " " + this.getElse().toString()
    }
    public clone() {
        return new ExprIf(this.getCond().clone(), this.getThen().clone(), this.getElse().clone())
    }
}

export class ExprBracket extends Expr {
    private expr: Expr

    constructor(expr: Expr) {
        super()
        this.expr = expr
    }
    public getExpr(): Expr {
        return this.expr
    }
    public evaluateS(s: Signature): Type {
        return this.getExpr().evaluateS(s)
    }
    public evaluateE(e: Environment): ValVariable {
        /*const expr = this.getExpr().evaluateE(e)
        this.valVariable.setToString(expr.toString())

        expr.listen(this.getHash(), (exprVal: Val) => {
            this.valVariable.setVal(exprVal)
        })*/
        return this.getExpr().evaluateE(e)//this.valVariable
    }
    public getExpectedS(): Type {
        return this.getExpr().getExpectedS()
    }
    public toString(): string {
        return "(" + this.getExpr().toString() + ")"
    }
    public clone() {
        return new ExprBracket(this.getExpr().clone())
    }
}