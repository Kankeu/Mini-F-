import { Rule,Statement } from './Rule'
import { FunDecl } from '../values/FunDecl'
import { Type, Signature, ValFun, Environment } from '../context/Context';


export class FunDeclRule implements Rule{
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as  FunDecl
        let ctx = stmt.getContext(true)
        if(ctx instanceof Signature){
            ctx.merge(prog.evaluateS(stmt.getContext(true) as Signature))
            ctx.put(prog.getParam().getName(), prog.getParam().getType())
            return [new Statement(prog.getBody(),ctx).setExpectedS(prog.getReturnType())]
        } else {
            ctx.merge(prog.evaluateE(stmt.getContext(true) as Environment))

            return []
        }  
        
    }    
    
    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof FunDecl
    }

}
