import { Expr } from "./Expr"
import { VarUse } from './Let';
import { Type, TypeFun, Signature, Environment, Val, ValFun, ValRecFun, TypeVariable, ValVariable } from "../context/Context";

export class AnonymeFunDecl extends Expr {
    private param: Param
    private body: Expr
    private expectedS: TypeFun
    constructor(param?: Param, body?: Expr) {
        super()
        this.param = param
        this.body = body
        this.expectedS = new TypeFun(this.getParam().getType(), new TypeVariable())
    }

    public getParam(): Param {
        return this.param
    }
    public setParam(param: Param) {
        this.param = param
    }
    public getBody(): Expr {
        return this.body
    }
    public setBody(body: Expr) {
        this.body = body
    }
    public evaluateS(s: Signature): Type {
        return new TypeFun(this.getParam().getType(), this.getBody().evaluateS(s.clone().put(this.getParam().getName(), this.getParam().getType())))
    }
    public evaluateE(e: Environment): ValVariable {
        this.valVariable.setVal(new ValFun(e.clone(), this.getParam(), this.getBody()))
        return this.valVariable
    }
    public getExpectedS(): Type {
        return this.expectedS
    }
    public toString(): string {
        return $k("fun") + " (" + this.getParam().toString() + ") -> " + this.getBody().toString()
    }
    public clone(){
        return new AnonymeFunDecl(this.getParam(), this.getBody())
    }
}

export class Param {
    private name: string
    private type: Type
    constructor(name?: string, type?: Type) {
        this.name = name
        this.type = type
    }

    public getName(): string {
        return this.name
    }
    public setName(name: string) {
        this.name = name
    }
    public getType(): Type {
        return this.type
    }
    public setType(type: Type) {
        this.type = type
    }
    public toString(): string {
        return this.getName() + " : " + this.getType().toString()
    }
    public clone(){
        return new Param(this.getName(), this.getType().clone())
    }
}

export class FunCall extends Expr {
    private fun: Expr
    private arg: Expr
    private expectedS: Type = new TypeVariable()
    constructor(fun?: Expr, arg?: Expr) {
        super()
        this.fun = fun
        this.arg = arg
    }

    public getFun(): Expr {
        return this.fun
    }
    public setFun(fun: Expr) {
        this.fun = fun
    }
    public getArg(): Expr {
        return this.arg
    }
    public setArg(arg: Expr) {
        this.arg = arg
    }
    public evaluateS(s: Signature): Type {
        let fun = this.getFun().evaluateS(s) as TypeFun
        return fun.getBodyType()
    }
    public evaluateE(e: Environment): ValVariable {
        this.valVariable.setToString("?")
        this.setArg(this.getArg().clone())

    
        this.getArg().evaluateE(e).listen(this.getHash(), (argVal: Val) => {
            this.getFun().evaluateE(e).listen(this.getHash(), (funVal: Val) => {
     
                if (funVal instanceof ValRecFun) {
                    const ctx = funVal.getEnv().clone().put(funVal.getFunName(), funVal).put(funVal.getParam().getName(), argVal)
                    funVal.getBody().evaluateE(ctx).listen(this.getHash(), (bodyVal: Val) => {
                        this.valVariable.setVal(bodyVal)
                    })
                } else if (funVal instanceof ValFun) {
                    const ctx = funVal.getEnv().clone().put(funVal.getParam().getName(), argVal)
                    funVal.getBody().evaluateE(ctx).listen(this.getHash(), (bodyVal: Val) => {
                        this.valVariable.setVal(bodyVal)
                    })
                }
            })
        })
        return this.valVariable
    }
    public getExpectedS(): Type {
        return this.expectedS
    }
    public toString(): string {
        return this.getFun().toString() + " " + this.getArg().toString()
    }
    public clone(){
        return new FunCall(this.getFun().clone(), this.getArg().clone())
    }
}