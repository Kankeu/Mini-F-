import { Program } from "./Program";
import { Expr } from "./Expr";
import { Signature, Environment, ValVariable, Val } from "../context/Context";

export abstract class Stmt extends Program {
    protected valVariable: ValVariable = new ValVariable()
    public evaluateS(s: Signature): Signature{
        return null
    }
    public evaluateE(e: Environment): Environment {
        return null
    }
    public getExpectedS(): Signature {
        return null
    }
    toString(): string{
        return null
    }
    public clone() {
        return null
    }
}

export class StmtBracket extends Stmt{
    private stmt: Stmt

    constructor(stmt: Stmt){
        super()
        this.stmt = stmt
    }
    public getStmt(): Stmt{
        return this.stmt
    }
    public evaluateS(s: Signature): Signature{
        return this.getStmt().evaluateS(s)
    }
    public evaluateE(e: Environment): Environment {
        return this.getStmt().evaluateE(e)
    }
    public toString(): string{
        return "("+this.getStmt().toString()+")"
    }

    public clone() {
        return new StmtBracket(this.getStmt().clone())
    }

}