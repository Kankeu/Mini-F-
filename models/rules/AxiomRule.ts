import { Rule, Statement } from './Rule'
import { NatConst } from '../values/Nat';
import { BoolConst } from '../values/Bool';
import { StringConst } from '../values/String';
import { VarUse } from '../values/Let';
import { Expr } from '../values/Expr';
import { Signature, TypeVariable, TypeFun, TypeRef, Environment } from '../context/Context';


export class AxiomRule implements Rule {
    private ruleType: Expr
    apply(stmt: Statement): Statement[] {
        if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null || stmt.getExpectedS() instanceof TypeVariable)
                stmt.setExpectedS((stmt.getProg() as Expr).evaluateS(stmt.getContext(true) as Signature))
            else if (stmt.getExpectedS() instanceof TypeFun) {
                let expectedFun = stmt.getExpectedS() as TypeFun
                if (expectedFun.getParamType() instanceof TypeVariable || expectedFun.getBodyType() instanceof TypeVariable)
                    stmt.setExpectedS((stmt.getProg() as Expr).evaluateS(stmt.getContext(true) as Signature))
            } else if (stmt.getExpectedS() instanceof TypeRef) {
                let expectedRef = stmt.getExpectedS() as TypeRef
                if (expectedRef.getType() instanceof TypeVariable)
                    stmt.setExpectedS((stmt.getProg() as Expr).evaluateS(stmt.getContext(true) as Signature))
            }

        } else {
            let prog = stmt.getProg()
            if (prog instanceof NatConst || prog instanceof BoolConst || prog instanceof StringConst || prog instanceof VarUse)
                prog.compute(stmt.getContext() as Environment)
        }
        return []
    }

    match(stmt: Statement): boolean {
        const className = (new BoolConst().constructor as any).name
        return stmt.getProg()instanceof BoolConst && (this.ruleType.constructor as any).name===className ? (stmt.getProg() as BoolConst).getValue() === (this.ruleType as BoolConst).getValue() : (stmt.getProg().constructor as any).name === (this.ruleType.constructor as any).name
    }

    setRuleType(expr: Expr): AxiomRule {
        this.ruleType = expr
        return this
    }
    getRuleType(): Expr {
        return this.ruleType
    }

}