import { Rule, Statement } from './Rule'
import { ExprBinary, ExprIf } from '../values/Expr'
import { Let, In, VarUse } from '../values/Let';
import { Signature, Environment, SignatureVariable } from '../context/Context';


export class LetRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as Let
        if (stmt.isStatic()) {

            let sv = (stmt.getExpectedS() as SignatureVariable) || new SignatureVariable().setSignature(prog.evaluateS(stmt.getContext() as Signature))
            stmt.setExpectedS(sv)

            return [new Statement(prog.getValue(), stmt.getContext(true)).setExpectedS(sv.getSignature().get(prog.getName()))]
        }
        return [new Statement(prog.getValue(), stmt.getContext(true))]
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof Let
    }
}

export class InRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as In
        let left = new Statement(prog.getLeft(), stmt.getContext(true))

        if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null)
                stmt.setExpectedS(prog.getExpectedS())
            let sv = new SignatureVariable().setSignature(prog.getLeft().evaluateS(stmt.getContext() as Signature))

            return [left.setExpectedS(sv), new Statement(prog.getRight(), (stmt.getContext(true) as Signature).merge(sv.getSignature())).setExpectedS(stmt.getExpectedS())]
        }
        else{
            return [left, new Statement(prog.getRight(), (stmt.getContext(true) as Environment).merge(left.evaluateE() as Environment))]
        }
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof In
    }

}

