import { Rule, Statement,StatementVariable } from './Rule'
import { ExprBinary, ExprIf, ExprBracket, Expr } from '../values/Expr'
import { PVal, Environment, TypeBool, TypeNat } from '../context/Context';
import { Equals, Unequals, Less } from '../values/Bool';


export class ExprBinaryRule implements Rule {
    private ruleType: Expr
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as ExprBinary
        let leftType = prog.getLeft().getExpectedS()

        if (stmt.isStatic()) {
            stmt.setExpectedS(prog.getExpectedS())
            leftType = (stmt.getProg() instanceof Equals||stmt.getProg() instanceof Unequals) ? prog.getLeft().getExpectedS() :  new TypeNat()  
        }
        return [new Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(leftType), new Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(leftType)]
    }

    match(stmt: Statement): boolean {
        return (stmt.getProg().constructor as any).name === (this.ruleType.constructor as any).name //stmt.getProg() instanceof ExprBinary 
    }

    setRuleType(expr: Expr): ExprBinaryRule{
        this.ruleType = expr
        return this
    }

    getRuleType(): Expr{
        return  this.ruleType
    }

}

export class ExprIfRule implements Rule {
    apply(stmt: Statement): (Statement|StatementVariable)[] {
        let prog = stmt.getProg() as ExprIf
        if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null)
                stmt.setExpectedS(prog.getExpectedS())
        }
        if (stmt.isStatic())
            return [new Statement(prog.getCond(), stmt.getContext(true)).setExpectedS(new TypeBool()), new Statement(prog.getThen(), stmt.getContext(true)).setExpectedS(stmt.getExpectedS()), new Statement(prog.getElse(), stmt.getContext(true)).setExpectedS(stmt.getExpectedS())]
        else {
            const stmtVar = new StatementVariable()
            prog.getCond().evaluateE(stmt.getContext(true)as Environment).listen(stmt.getHash(), (val: PVal)=>{
                stmtVar.setStmt(val.getValue() as boolean ? new Statement(prog.getThen(), stmt.getContext(true)): new Statement(prog.getElse(), stmt.getContext(true)))
            })
            return [new Statement(prog.getCond(), stmt.getContext(true)), stmtVar]
        }
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof ExprIf
    }

}

export class ExprBracketRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as ExprBracket
        return [new Statement(prog.getExpr(), stmt.getContext(true))]
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof ExprBracket
    }

}

