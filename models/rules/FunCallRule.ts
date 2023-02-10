import { Rule, Statement } from './Rule'
import { FunDecl } from '../values/FunDecl'
import { Type, Signature, ValFun, TypeFun, Environment, ValRecFun, TypeVariable } from '../context/Context';
import { FunCall, AnonymeFunDecl } from '../values/FunCall';
import { VarUse } from '../values/Let';


export class AnonymeFunDeclRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as AnonymeFunDecl

        if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null)
                stmt.setExpectedS(prog.getExpectedS())

            let expectedFun = stmt.getExpectedS() as TypeFun
            return [new Statement(prog.getBody(), (stmt.getContext(true) as Signature).put(prog.getParam().getName(), prog.getParam().getType())).setExpectedS(expectedFun.getBodyType())]
        }
        else {
            return []
        }
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof AnonymeFunDecl
    }

}

export class FunCallRule implements Rule {
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as FunCall
        if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null)
                stmt.setExpectedS(prog.getExpectedS())

            if (prog.getFun() instanceof VarUse) {
                let expectedFun = new TypeFun(new TypeVariable(), stmt.getExpectedS())
                return [new Statement(prog.getFun(), stmt.getContext(true)).setExpectedS(expectedFun), new Statement(prog.getArg(), stmt.getContext(true)).setExpectedS(expectedFun.getParamType())]
            }
            else {
                let expectedFun = prog.getFun().getExpectedS() as TypeFun
                expectedFun.setBodyType(stmt.getExpectedS())
                return [new Statement(prog.getFun(), stmt.getContext(true)).setExpectedS(expectedFun), new Statement(prog.getArg(), stmt.getContext(true)).setExpectedS(expectedFun.getParamType())]
            }
        }
        else {
            if (prog.getFun() instanceof VarUse) {
                let fun = (stmt.getContext().get((prog.getFun() as VarUse).getName()) as ValFun)
                const arg = prog.getArg()
                return [new Statement(prog.getFun(), stmt.getContext(true)), new Statement(arg, stmt.getContext(true)), new Statement(fun.getBody(), (fun instanceof ValRecFun ? fun.getEnv(true).put((fun as ValRecFun).getFunName(), fun.clone()) : fun.getEnv(true)).put(fun.getParam().getName(), arg.evaluateE(stmt.getContext(true) as Environment)))]
            } else {
                let fun = (prog.getFun() as AnonymeFunDecl).evaluateE(stmt.getContext(true) as Environment).getVal() as ValFun
                return [new Statement(prog.getFun(), stmt.getContext(true)), new Statement(prog.getArg(), stmt.getContext(true)), new Statement(fun.getBody(), fun.getEnv(true).put(fun.getParam().getName(), prog.getArg().evaluateE(stmt.getContext(true) as Environment)))]
            }
        }
    }

    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof FunCall
    }

}
