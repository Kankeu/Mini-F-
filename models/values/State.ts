import { Expr } from "./Expr"
import { Type, PVal, Val, Signature, Environment, TypeNat, TypeRef, TypeVariable, TypeUnit, ValVariable, ValUnit, ValAddress, Memory } from '../context/Context';

export class Ref extends Expr {
    private expr: Expr
    private address: string
    private expectedS: Type = new TypeRef(new TypeVariable())
    private memory: Memory = new Memory()
    constructor(expr: Expr) {
        super()
        this.expr = expr
    }

    public getExpr(): Expr {
        return this.expr
    }
    public setExpr(expr: Expr) {
        this.expr = expr
    }
    public evaluateS(s: Signature): Type {
        return this.expectedS
    }
    public evaluateE(e: Environment): ValVariable {
        if (this.address == null)
            this.address = e.getMemory().allocate()
        
        const exprVal = this.getExpr().evaluateE(e)
       
        //valAddr.setMemory(m.put(this.address, exprVal))
        this.memory.put(this.address, exprVal)
        this.valVariable.setMemory(this.memory)
        exprVal.listen(this.getHash(), (val: Val) => {
          
            //alert(4)
            //valAddr.setMemory(val.getMemory().merge(m))
            this.valVariable.setMemory(val.getMemory().merge(this.memory.put(this.address, val)))
            //e.getMemory().put(this.address, val)
        })


        



        return this.valVariable
    }
    public compute(){
        this.valVariable.setVal(new ValAddress(this.address))
    }
    public toString(): string {
        return $k("ref") + " " + this.expr.toString()
    }
    public clone() {
        return new Ref(this.getExpr().clone())
    }
}

export class Bang extends Expr {
    private expr: Expr
    private expectedS: Type = new TypeVariable()
    constructor(expr: Expr) {
        super()
        this.expr = expr
    }

    public getExpr(): Expr {
        return this.expr
    }
    public setExpr(expr: Expr) {
        this.expr = expr
    }
    public evaluateS(s: Signature): Type {
        return this.expectedS
    }
    public evaluateE(e: Environment): ValVariable {
        const expr = this.getExpr().evaluateE(e)
        this.valVariable.setToString("?")
        expr.listen(this.getHash(), (addressVal: ValAddress) => {
            this.valVariable.setVal(e.getMemory().get(addressVal.getAddress()))
        })
        return this.valVariable
    }
    public toString(): string {
        return $k("!") + this.expr.toString()
    }
    public clone() {
        return new Bang(this.getExpr().clone())
    }
}

export class Assign extends Expr {
    private left: Expr
    private right: Expr
    private expectedS: Type = new TypeUnit()
    constructor(left: Expr, right: Expr) {
        super()
        this.left = left
        this.right = right
    }

    public getLeft(): Expr {
        return this.left
    }
    public setLeft(expr: Expr) {
        this.left = expr
    }
    public getRight(): Expr {
        return this.right
    }
    public setRight(expr: Expr) {
        this.right = expr
    }
    public evaluateS(s: Signature): Type {
        return this.expectedS
    }
    public evaluateE(e: Environment): ValVariable {
        this.getLeft().evaluateE(e).listen(this.getHash(), (addressVal: ValAddress) => {
            this.getRight().evaluateE(e).listen(this.getHash(), (valueVal: Val) => {
                e.getMemory().put(addressVal.getAddress(), valueVal)
            })
        })
        this.valVariable.setVal(new ValUnit())
        return this.valVariable
    }
    public toString(): string {
        return this.left.toString() + " " + $k(":=") + " " + this.right.toString()
    }
    public clone() {
        return new Assign(this.getLeft().clone(),this.getRight().clone())
    }
}