import { AnonymeFunDecl, Param } from './FunCall'
import { Type, Signature, TypeFun, Environment, Val, ValFun, ValVariable } from '../context/Context';
import { Stmt } from './Stmt';
import { Expr } from './Expr';

export class FunDecl extends Stmt {
    private name: string
    private returnType: Type
    private param: Param
    private body: Expr


    constructor(name?: string, param?: Param, body?: Expr, returnType?: Type){
        super()
        this.name=name
        this.param = param
        this.body = body
        this.returnType=returnType
    }

    public getName(): string{
        return this.name
    }
    public setName(name: string){
        this.name = name
    }
    public getReturnType(): Type{
        return this.returnType
    }
    public setReturnType(returnType: Type){
        this.returnType = returnType
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
    public evaluateS(s: Signature): Signature {
        return new Signature().put(this.getName(), new TypeFun(this.getParam().getType(), this.getReturnType()))
    }
    public evaluateE(e: Environment): Environment {
        return new Environment().put(this.getName(), new ValFun(e.clone(), this.getParam(), this.getBody()))
    }
    public toString(): string {
        return $k("let")+" "+this.getName()+" (" + this.getParam().toString() + ") : "+this.getReturnType().toString()+" = " + this.getBody().toString()
    }
    public clone() {
        return new FunDecl(this.getName(),this.getParam().clone(),this.getBody().clone(), this.getReturnType().clone())
    }
}