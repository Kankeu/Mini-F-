import { FunDecl } from './FunDecl'
import { Environment, ValFun, ValRecFun, ValVariable } from '../context/Context';


export class RecFunDecl extends FunDecl {
    public evaluateE(e: Environment): Environment {
        let valFun = new ValRecFun(e.clone(), this.getName(), this.getParam(), this.getBody())
        //valFun.getEnv().put(this.getName(), valFun)

        return new Environment().put(this.getName(), valFun)
    }
    public toString(): string {
        return $k("let")+" "+$k("rec")+" "+this.getName()+" (" + this.getParam().toString() + ") : "+this.getReturnType().toString()+" = " + this.getBody().toString()
    }
    public clone() {
        return new RecFunDecl(this.getName(),this.getParam().clone(),this.getBody().clone(), this.getReturnType().clone())
    }
}