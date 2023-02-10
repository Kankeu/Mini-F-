import { Stmt } from "./Stmt"
import { Expr } from './Expr';
import { Signature, Type, Environment, Val, TypeVariable, ValVariable } from "../context/Context";


export class Let extends Stmt {
    private name: string
    private value: Expr
    constructor(name?: string, value?: Expr) {
        super()
        this.name = name
        this.value = value
    }

    public getName(): string {
        return this.name
    }
    public setName(name: string) {
        this.name = name
    }
    public getValue(): Expr {
        return this.value
    }
    public setValue(value: Expr) {
        this.value = value
    }
    public evaluateS(s: Signature): Signature {
        return new Signature().put(this.getName(), new TypeVariable())//new Signature().put(this.getName(), this.getValue().evaluateS(s))
    }
    public evaluateE(e: Environment): Environment {
        const value = this.getValue().evaluateE(e)

        return new Environment().put(this.getName(), value)
    }
    public toString(): string {
        return $k("let") + " " + this.getName() + " = " + this.getValue().toString()
    }
    public clone() {
        return new Let(this.getName(), this.getValue().clone())
    }
}

export class In extends Expr {
    private left: Stmt
    private right: Expr
    private expectedS: Type
    constructor(left?: Stmt, right?: Expr) {
        super()
        this.left = left
        this.right = right
        this.expectedS = new TypeVariable()
    }

    public getLeft(): Stmt {
        return this.left
    }
    public setLeft(left: Stmt) {
        this.left = left
    }
    public getRight(): Expr {
        return this.right
    }
    public setRight(right: Expr) {
        this.right = right
    }
    public evaluateS(s: Signature): Type {
        let s2 = s.clone()
        s2.merge(this.getLeft().evaluateS(s2))
        return this.getRight().evaluateS(s2)
    }
    public evaluateE(e: Environment): ValVariable {
        let e2 = e.clone()

        e2.merge(this.getLeft().evaluateE(e2))
        const right = this.getRight().evaluateE(e2)
        this.valVariable.setToString("?")
        right.listen(this.getHash(), (rightVal: Val) => {
            this.valVariable.setVal(rightVal)
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return this.expectedS
    }
    public toString(): string {
        return this.getLeft().toString() + " " + $k("in") + " " + this.getRight().toString()
    }
    public clone() {
        return new In(this.getLeft().clone(), this.getRight().clone())
    }
}

export class VarUse extends Expr {
    private name: string
    constructor(name?: string) {
        super()
        this.name = name
    }

    public getName(): string {
        return this.name
    }
    public setName(name: string) {
        this.name = name
    }
    public evaluateS(s: Signature): Type {
        let tmp = s.get(this.getName())
        while (tmp instanceof TypeVariable) {
            if (tmp.getType() == null) break
            tmp = tmp.getType()
        }
        return tmp
    }
    public evaluateE(e: Environment): ValVariable {
        return this.valVariable
    }
    public compute(e: Environment) {
        let tmp = e.get(this.getName())
        while ((tmp instanceof ValVariable) && (tmp.getVal() instanceof ValVariable))
            tmp = tmp.getVal() as Val
        if (tmp instanceof ValVariable)
            tmp.listen(this.getHash(), val => this.valVariable.setVal(val))
        else this.valVariable.setVal(tmp)
    }
    public toString(): string {
        return this.getName()
    }
    public clone() {
        return new VarUse(this.getName())
    }
}