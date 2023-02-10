import { Rule, Statement, StatementVariable } from './Rule'
import { ExprBinary, ExprIf } from '../values/Expr'
import { Let, In, VarUse } from '../values/Let';
import { Signature, Environment, SignatureVariable, TypeRef, TypeUnit, TypeVariable, Type } from '../context/Context';
import { Ref, Bang, Assign } from '../values/State';


export class RefRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as Ref
        if (stmt.isStatic()) {
            let tr = prog.evaluateS(stmt.getContext() as Signature) as TypeRef
            stmt.setExpectedS(tr)

            return [new Statement(prog.getExpr(), stmt.getContext(true)).setExpectedS(tr.getType())]
        }
        let prevCtx = stmt.getContext(true)

        prog.evaluateE(prevCtx as Environment)
        prog.compute()


        return [new Statement(prog.getExpr(), prevCtx)]
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof Ref
    }
}

export class BangRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as Bang
        if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null)
                stmt.setExpectedS(prog.evaluateS(stmt.getContext() as Signature))

            return [new Statement(prog.getExpr(), stmt.getContext(true)).setExpectedS(new TypeRef(stmt.getExpectedS()))]
        }
        return [new Statement(prog.getExpr(), stmt.getContext(true))]
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof Bang
    }

}

export class AssignRule implements Rule {
    apply(stmt: Statement): (Statement | StatementVariable)[] {
        let prog = stmt.getProg() as Assign
        if (stmt.isStatic()) {
            let type = prog.evaluateS(stmt.getContext() as Signature) as TypeUnit
            stmt.setExpectedS(type)
            let tr = prog.getLeft().evaluateS(stmt.getContext(true) as Signature)


            const stmtVar = new StatementVariable()
            if (tr instanceof TypeVariable)
                tr.listen(stmt.getHash(), (val: Type) => {
                    stmtVar.setStmt(new Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(val instanceof TypeRef ?val.getType():val));
                })
            else stmtVar.setStmt(new Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(tr instanceof TypeRef ?tr.getType():tr));

            return [new Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(tr), stmtVar]


            //return [new Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(tr), new Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(tr.getType())]
        }
        return [new Statement(prog.getLeft(), stmt.getContext(true)), new Statement(prog.getRight(), stmt.getContext(true))]
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof Assign
    }

}

