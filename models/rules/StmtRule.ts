import { Rule,Statement } from './Rule'
import { StmtBracket } from '../values/Stmt'


export class StmtBracketRule implements Rule{
    apply(stmt: Statement): Statement[] {
        let prog = stmt.getProg() as  StmtBracket
        return [new Statement(prog.getStmt(),stmt.getContext(true))]
    }    
    
    match(stmt: Statement): boolean {
        return stmt.getProg() instanceof StmtBracket
    }

}
