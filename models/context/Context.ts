import { Param } from "../values/FunCall";
import { Expr } from "../values/Expr";

export class Signature {
    private context: ISignatureContext
    constructor(context: ISignatureContext = {}) {
        this.context = context
    }
    public clone(): Signature {
        return new Signature({...this.context})
    }
    public get(ident: string): Type {
        return this.context[ident]
    }
    public put(ident: string, type: Type): Signature {
        this.context[ident] = type
        return this
    }
    public getContext(): ISignatureContext {
        return this.context
    }
    public merge(e: Signature): Signature {
        this.context = { ...this.context, ...e.getContext() }
        return this
    }
    public getHash(): string {
        let tmp = Object.keys(this.context).reduce((acc, ident) => acc + ", " + ident + " " + $i('&#x21A6;') + " " + this.get(ident).toString(), "")
        return "{ " + tmp.substr(2) + " }"
    }
    public toString(): string {
        return this.getHash()
    }
}
export class SignatureVariable {
    private name: string
    private signature: Signature
    private id: string
    static counter: number = 0
    constructor(value?: Signature) {
        SignatureVariable.counter++
        this.name = "&Sigma;<sub>" + SignatureVariable.counter + "</sub>"
        this.id = btoa(this.name + Date.now())
        this.setSignature(value)
    }

    public getName(): string {
        return this.name
    }
    public getSignature(): Signature {
        return this.signature
    }
    public setSignature(value: Signature): SignatureVariable {
        if (this.signature == null) {
            const id = CSS.escape(this.id)
            if (document.querySelector("." + id))
                document.querySelectorAll("." + id).forEach(e => e.outerHTML = value.toString())
            this.signature = value
        }
        return this
    }
    public isAssigned(): boolean {
        return this.signature != null
    }
    public equals(value: Type | SignatureVariable) {
        if (!(value instanceof SignatureVariable)) return false
        return value.getHash() == this.getHash()
    }
    public getHash(): string {
        return this.signature == null ? this.getName() : this.signature.getHash()
    }
    public toString(): string {
        return this.signature != null ? this.signature.toString() : $t(this.name, { id: this.id })
    }
    public clone() {
        return new SignatureVariable()
    }
}
export class Environment {
    private context: IEnvironementContext
    private memory: Memory
    constructor(context: IEnvironementContext = {}, memory: Memory = null) {
        this.context = context
        this.memory = memory
    }
    public clone(withMemory = false): Environment {
        return new Environment({...this.context}, withMemory ? this.memory.clone() : this.memory)
    }
    public get(ident: string): Val {
        return this.context[ident]
    }
    public put(ident: string, val: Val): Environment {
        this.context[ident] = val
        return this
    }
    public getContext(): IEnvironementContext {
        return this.context
    }
    public merge(e: Environment): Environment {
        this.context = { ...this.context, ...e.getContext() }
        return this
    }
    public getMemory(): Memory {
        return this.memory
    }
    public toString(): string {
        let tmp = Object.keys(this.context).reduce((acc, ident) => acc + "," + ident + " " + $i('&#x21A6;') + " " + this.get(ident).toString(), "")
        return "{ " + tmp.substr(1) + " }" //+ (Environment.memory == null ? "" : (" &boxV; " + Environment.memory.toString()))
    }
}
export class Memory {
    private context: IMemoryContext
    static counter: number = 0
    static memoryCounter: number = 0
    private id: string
    constructor(context: IMemoryContext = {}) {
        Memory.memoryCounter++
        this.id = "memory-" + Memory.memoryCounter
        this.context = context
    }
    public clone(): Memory {
        return new Memory({ ...this.context })
    }
    public get(ident: string): Val {
        return this.context[ident]
    }
    public put(ident: string, val: Val): Memory {
        //if (!(Object.keys(this.context) as any).includes(ident))
        //throw Error("The address \"" + ident + "\" is unallocated")
        this.context[ident] = val
        const id = CSS.escape(this.id)
        if (document.querySelector("." + id))
            document.querySelectorAll("." + id).forEach(e => e.outerHTML = this.toString())

        return this
    }
    public allocate(): string {
        Memory.counter++

        let address = "a<sub memory=" + this.id + ">" + Memory.counter + "</sub>"
        //this.context[address] = null
        return address
    }
    public getContext(): IEnvironementContext {
        return this.context
    }
    public merge(e: Memory): Memory {
        this.context = { ...this.context, ...e.getContext() }
        return this
    }
    public toString(): string {
        let tmp = Object.keys(this.context).reduce((acc, ident) => this.get(ident) == null ? acc : (acc + "," + ident + " " + $i('&#x21A6;') + " " + this.get(ident).toString()), "")
        return $m("{" + tmp.substr(1) + "}", { id: this.id })
    }
}

interface ISignatureContext {
    [ident: string]: Type
}
interface IEnvironementContext {
    [ident: string]: Val
}
interface IMemoryContext {
    [ident: string]: Val
}


export type Type = TypeNat | TypeBool | TypeString | TypeFun | TypeVariable | TypeRef | TypeUnit

export class TypeNat {
    public getHash(): string {
        return "Nat"
    }
    public toString(): string {
        return $t(this.getHash())
    }
    public equals(value: Type | SignatureVariable) {
        return value.getHash() == this.getHash()
    }
    public clone() {
        return new TypeNat()
    }
}
export class TypeBool {
    public getHash(): string {
        return "Bool"
    }
    public toString(): string {
        return $t(this.getHash())
    }
    public equals(value: Type | SignatureVariable) {
        return value.getHash() == this.getHash()
    }
    public clone() {
        return new TypeBool()
    }
}
export class TypeString {
    public getHash(): string {
        return "String"
    }
    public toString(): string {
        return $t(this.getHash())
    }
    public equals(value: Type | SignatureVariable) {
        return value.getHash() == this.getHash()
    }
    public clone() {
        return new TypeString()
    }
}

export class TypeVariable {
    private name: string
    private type: Type
    private id: string
    public listeners: ITypeVariable = {}
    static counter: number = 0
    constructor() {
        TypeVariable.counter++
        this.name = "t<sub>" + TypeVariable.counter + "</sub>"
        this.id = btoa(this.name + Date.now())
    }

    public getName(): string {
        return this.name
    }
    public getType(): Type {
        return this.type
    }
    public setType(value: Type) {
        if (this.type == null && value != null) {
            const id = CSS.escape(this.id)
            if (document.querySelector("." + id))
                document.querySelectorAll("." + id).forEach(e => e.outerHTML = value.toString())
            this.type = value
            Object.keys(this.listeners).forEach(k => this.listeners[k](this.type))
        }
    }
    public isAssigned(): boolean {
        return this.type != null
    }
    public listen(key: string, listener: (type: Type) => any): TypeVariable {
        if (this.type) listener(this.type)
        this.listeners[key] = listener
        return this
    }
    public equals(value: Type | SignatureVariable) {
        if (value instanceof SignatureVariable) return false
        if (this.type == null) return true
        return value instanceof TypeVariable ? value.getType().equals(this.getType()) : value.equals(this.type)
    }
    public getHash(): string {
        return this.type == null ? $t(this.name, { id: this.id }) : this.type.getHash()
    }
    public toString(): string {
        return this.type != null ? this.type.toString() : $t(this.name, { id: this.id })
    }
    public clone() {
        return new TypeVariable()
    }
}

interface ITypeVariable {
    [key: string]: ((type: Type) => any)
}

export class TypeFun {
    private paramType: Type
    private bodyType: Type
    constructor(paramType: Type, bodyType: Type) {
        this.paramType = paramType
        this.bodyType = bodyType
    }

    public getParamType(): Type {
        return this.paramType
    }
    public getBodyType(): Type {
        return this.bodyType
    }
    public setBodyType(value: Type) {
        this.bodyType = value
    }
    public equals(value: Type | SignatureVariable) {
        if (value instanceof TypeFun) {
            let valueFun = value as TypeFun
            if (this.getParamType() instanceof TypeVariable)
                return this.getBodyType().equals(valueFun.getBodyType())
            if (this.getBodyType() instanceof TypeVariable)
                return this.getParamType().equals(valueFun.getParamType())
            return true
        }
        return value.getHash() == this.getHash()
    }
    public getHash(): string {
        return this.getParamType().toString() + " " + $i('&#x21A6;') + " " + this.getBodyType().toString()
    }
    public toString(): string {
        return $t(this.getHash())
    }
    public clone() {
        return new TypeFun(this.getParamType().clone(), this.getBodyType().clone())
    }
}

export class TypeRef {
    private type: Type
    constructor(type: Type) {
        this.type = type
    }

    public getType(): Type {
        return this.type
    }
    public equals(value: Type | SignatureVariable) {
        if (value instanceof TypeRef) return this.getType().equals(value.getType())
        return this.type instanceof TypeVariable ? this.type.equals(value) : value.getHash() == this.getHash()
    }
    public getHash(): string {
        return "Ref &lt;" + this.type.getHash() + "&gt;"
    }
    public toString(): string {
        return $t(this.getHash())
    }
    public clone() {
        return new TypeRef(this.getType().clone())
    }
}

export class TypeUnit {
    public getHash(): string {
        return "Unit"
    }
    public toString(): string {
        return $t(this.getHash())
    }
    public equals(value: Type | SignatureVariable) {
        return value.getHash() == this.getHash()
    }
    public clone() {
        return new TypeUnit()
    }
}


export abstract class Val {
    private memory: Memory = new Memory()
    public setMemory(memory: Memory) {
        this.memory = memory
    }
    public getMemory(): Memory {
        return this.memory
    }
}

export class PVal extends Val {
    private value: number | boolean | string
    constructor(value: number | boolean | string) {
        super()
        this.value = value
    }
    public getValue(): number | boolean | string {
        return this.value
    }
    public toString(): string {
        if (typeof this.getValue() === 'number') return "" + this.getValue()
        if (typeof this.getValue() === 'boolean') return this.getValue() ? "true" : "false"
        return '"' + this.getValue() + '"'
    }
    public clone() {
        return new PVal(this.getValue())
    }
}

export class ValFun extends Val {
    private param: Param
    private body: Expr
    private env: Environment
    constructor(env: Environment, param: Param, body: Expr) {
        super()
        this.env = env
        this.param = param
        this.body = body
    }
    public getEnv(clone = false): Environment {
        return clone ? this.env.clone() : this.env
    }
    public getBody(): Expr {
        return this.body
    }
    public getParam(): Param {
        return this.param
    }
    public toString(): string {
        return "<" + this.env.toString() + ", " + this.param.getName() + ", " + this.body.toString() + ">"
    }
    public clone() {
        return new ValFun(this.getEnv().clone(), this.getParam().clone(), this.getBody().clone())
    }
}

export class ValRecFun extends ValFun {
    private funName: string
    constructor(env: Environment, funName: string, param: Param, body: Expr) {
        super(env, param, body)
        this.funName = funName
    }
    public getFunName(): string {
        return this.funName
    }
    public toString(): string {
        return "<" + this.getEnv().toString() + ", " + this.getFunName() + ", " + this.getParam().getName() + ", " + this.getBody().toString() + ">"
    }
    public clone() {
        return new ValRecFun(this.getEnv().clone(), this.getFunName(), this.getParam().clone(), this.getBody().clone())
    }
}

export class ValUnit extends Val {
    public toString(): string {
        return "()"
    }
    public clone() {
        return new ValUnit()
    }
}

export class ValAddress extends Val {
    private address: string
    constructor(address: string) {
        super()
        this.address = address
    }
    public getAddress(): string {
        return this.address
    }
    public toString(): string {
        return this.address
    }
    public clone() {
        return new ValAddress(this.getAddress())
    }
}


export class ValVariable extends Val {
    private val: Val | Environment
    public listeners: IValVariable = {}
    static counter: number = 0
    private id: string
    private name: string
    private _toString: string
    constructor(val?: Val | Environment) {
        super()
        this.val = val
        ValVariable.counter++
        this.name = "n<sub>" + ValVariable.counter + "</sub>"
        this.id = btoa(this.name + Date.now())
    }
    public getVal(): Val | Environment {
        return this.val
    }
    public setVal(val: Val | Environment): ValVariable {
        if (val == null || this.val != null) return
        if (this.val == null) this.val = val
        else {
            if (this.val instanceof Val) {
                if (!(val instanceof Val)) throw Error("val should be of type \"Val\"")
                this.val = val
            }
            if (this.val instanceof Environment) {
                if (!(val instanceof Environment)) throw Error("val should be of type \"Environment\"")
                this.val.merge(val)
            }
        }
        const id = CSS.escape(this.id)
        if (document.querySelector("." + id))
            document.querySelectorAll("." + id).forEach(e => e.outerHTML = this.val.toString())

        Object.keys(this.listeners).forEach(k => this.listeners[k](this.val))

        return this
    }
    public listen(key: string, listener: (val: Val | Environment) => any): ValVariable {
        if (this.val) listener(this.val)
        this.listeners[key] = listener
        return this
    }

    setToString(toString: string) {
        const id = CSS.escape(this.id)
        
        if (document.querySelector("." + id)&&!this._toString)
            document.querySelectorAll("." + id).forEach(e => e.innerHTML = toString)

        this._toString = toString
    }

    public toString(): string {
        return (this.val == null ? $v(this._toString || this.name, { id: this.id }) : $v(this.val.toString(), { id: this.id }))
    }
    public clone() {
        return new ValVariable(this.getVal())
    }
}
interface IValVariable {
    [key: string]: ((val: Val | Environment) => any)
}
