import { Rule, Statement } from './Rule'
import { ExprBinary, ExprIf } from '../values/Expr'
import { Let, In, VarUse } from '../values/Let';
import { Signature, Environment, SignatureVariable } from '../context/Context';
import { Semicolon } from '../values/Semicolon';


export class SemicolonRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as Semicolon
        let left = new Statement(prog.getLeft(), stmt.getContext(true))

        if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null)
                stmt.setExpectedS(prog.getExpectedS())

            return [left, new Statement(prog.getRight(), (left.getContext() as Signature)).setExpectedS(stmt.getExpectedS())]
        }
        else return [left, new Statement(prog.getRight(), (left.getContext() as Environment))]
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof Semicolon
    }

}

