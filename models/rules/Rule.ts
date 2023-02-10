import { Signature, Environment, Type, Val, TypeVariable, TypeFun, SignatureVariable, TypeRef } from "../context/Context"
import { Program } from "../values/Program";
import { Expr } from "../values/Expr";
import { Stmt } from "../values/Stmt";

export interface Rule {
    apply(stmt: Statement): (Statement | StatementVariable)[]
    match(stmt: Statement): boolean

}
export class Statement {
    private context: Signature | Environment
    private prog: Program
    private expectedS: Type
    private back: string
    public constructor(prog: Program, context?: Signature | Environment) {
        this.context = context
        this.prog = prog
    }

    public getContext(clone = false): Signature | Environment {
        return clone && this.context != null ? this.context.clone() : this.context
    }
    public getProg(): Program {
        return this.prog
    }
    public evaluateS(): Type | Signature {
        return this.prog.evaluateS(this.getContext(true) as Signature)
    }
    public evaluateE(): Val | Environment {
        return this.prog.evaluateE(this.getContext(true) as Environment)
    }
    public isStatic(): boolean {
        return this.getContext() instanceof Signature
    }
    public setExpectedS(value: Type | SignatureVariable): Statement {
        if (value instanceof Signature) {
            if (this.expectedS instanceof SignatureVariable) {
                (this.expectedS as SignatureVariable).setSignature(value)
            }
        } else if (this.expectedS != null) {
            value = value instanceof TypeVariable ? value.getType() : value
            if (this.expectedS instanceof TypeVariable) {
                (this.expectedS as TypeVariable).setType(value)
            } else if (this.expectedS instanceof TypeFun && value instanceof TypeFun) {
                let typeFun = this.expectedS as TypeFun
                let valueFun = value as TypeFun

                if (typeFun.getParamType() instanceof TypeVariable)
                    (typeFun.getParamType() as TypeVariable).setType(valueFun.getParamType())
                if (typeFun.getBodyType() instanceof TypeVariable)
                    (typeFun.getBodyType() as TypeVariable).setType(valueFun.getBodyType())
            } if (this.expectedS instanceof TypeRef && value instanceof TypeRef) {
                let typeRef = this.expectedS as TypeRef
                let valueRef = value as TypeRef

                if (typeRef.getType() instanceof TypeVariable)
                    (typeRef.getType() as TypeVariable).setType(valueRef.getType())
            }
        }
        if (this.expectedS == null && !(value instanceof Signature))
            this.expectedS = value
        return this
    }
    public getExpectedS(): Type | SignatureVariable {
        return this.expectedS
    }
    public isTypeCorrect(): boolean {
        
        if (this.getExpectedS() == null || (this.evaluateS() instanceof Signature)) return true

        if ((this.getExpectedS() instanceof TypeVariable)) {
            let expectedType = this.getExpectedS() as TypeVariable

            if (expectedType.isAssigned()) return (this.getExpectedS() as Type).equals(this.evaluateS() as Type)
            else expectedType.listen(this.getHash(), (val: Type)=>{
                if (this.evaluateS() instanceof TypeVariable)
                (this.evaluateS() as TypeVariable).listen("tc-"+this.getHash(),(type: Type)=>{
                    document.querySelector('#'+"tc-"+this.getHash()).outerHTML = $e((this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " : " + (val || "").toString(), { skip: (val as Type).equals(type), msg: 'Ungültiger Typ' })
                })  
                else  document.querySelector('#'+"tc-"+this.getHash()).outerHTML = $e((this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " : " + (val || "").toString(), { skip: (val as Type).equals(this.evaluateS() as Type), msg: 'Ungültiger Typ' })
            
                
            })
            return true
        }
        if (this.evaluateS() instanceof TypeVariable) {
            (this.evaluateS() as TypeVariable).listen("tc-"+this.getHash(),(type: Type)=>{
                document.querySelector('#'+"tc-"+this.getHash()).outerHTML = $e((this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " : " + (this.getExpectedS() || "").toString(), { skip: (this.getExpectedS() as Type).equals(type), msg: 'Ungültiger Typ' })
            })
            return (this.evaluateS() as Type).equals(this.getExpectedS() as Type)
        }
        return (this.getExpectedS() as Type).equals(this.evaluateS() as Type)
    }
    public getHash(): string {
        return "s-" + this.getProg().getHash()
    }
    public toString(): string {
        if (this.getContext(true) instanceof Signature){
            if(this.getExpectedS()==null) this.setExpectedS(new TypeVariable())
            return $e((this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " : " + (this.getExpectedS() ||  (this.prog instanceof Expr ? this.prog:(this.prog as Stmt)).getExpectedS()  || "").toString(), { skip: this.isTypeCorrect(), msg: 'Ungültiger Typ', id:"tc-"+this.getHash() })//this.prog.evaluateS(this.getContext(true) as Signature).toString()
        }
        else return (this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " " + $i('&dArr;') + " " + this.prog.evaluateE(this.getContext(true) as Environment).toString() //+  ((this.getContext(true) as Environment).getMemory()==null ?"":(" &boxV; "+(this.getContext(true) as Environment).getMemory().toString()))
    }
    public clone() {
        return new Statement(this.getProg().clone(), this.getContext().clone())
    }
}

export class StatementVariable {
    private stmt: Statement

    public listener: (stmt: Statement) => any
    static counter: number = 0
    private id: string
    public constructor(stmt?: Statement) {
        this.stmt = stmt
        StatementVariable.counter++
        const name = "s<sub>" + StatementVariable.counter + "</sub>"
        this.id = btoa(name + Date.now())
    }

    public getStmt(): Statement {
        return this.stmt
    }
    public setStmt(stmt: Statement) {
        this.stmt = stmt
        const id = CSS.escape(this.id)
        if (document.querySelector("." + id))
            document.querySelectorAll("." + id).forEach(e => e.outerHTML = this.stmt.toString())

        if (this.listener)
            this.listener(this.stmt)

        return this
    }
    public listen(listener: (stmt: Statement) => any): StatementVariable {
        if (this.stmt) listener(this.stmt)
        this.listener = listener
        return this
    }

    public toString(): string {
        return (this.stmt == null ? $s(null, { id: this.id }) : $v(this.stmt.toString(), { id: this.id }))
    }
    public clone() {
        return new StatementVariable(this.getStmt().clone())
    }
}
