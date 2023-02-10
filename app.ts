import { Expr, ExprIf, ExprBracket } from "./models/values/Expr"
import { Plus, NatConst, Times, Minus } from './models/values/Nat';
import { ExprBinaryRule, ExprIfRule, ExprBracketRule } from './models/rules/ExprRule';
import { AxiomRule } from './models/rules/AxiomRule';
import { Program } from "./models/values/Program";
import { Rule, Statement, StatementVariable } from "./models/rules/Rule";
import { Environment, Signature, TypeNat, TypeBool, Memory, TypeVariable, ValVariable } from "./models/context/Context";
import { BoolConst, Less, Greater, Equals, Unequals, GreaterOrEquals } from './models/values/Bool';
import { In, Let, VarUse } from "./models/values/Let";
import { LetRule, InRule } from './models/rules/LetRule';
import { FunDecl } from './models/values/FunDecl';
import { Param, AnonymeFunDecl, FunCall } from "./models/values/FunCall";
import { FunDeclRule } from './models/rules/FunDeclRule';
import { AnonymeFunDeclRule, FunCallRule } from './models/rules/FunCallRule';
import { RecFunDecl } from './models/values/RecFunDecl';
import { StmtBracket } from "./models/values/Stmt";
import { StmtBracketRule } from "./models/rules/StmtRule";
import { RefRule, BangRule, AssignRule } from './models/rules/StateRule';
import { Ref, Bang, Assign } from './models/values/State';
import { Semicolon } from "./models/values/Semicolon";
import { SemicolonRule } from "./models/rules/SemicolonRule";

import { RealRule } from './appInterface';

import { parse } from './parser/parser'



declare global {
    function $k(name: string): string
    function $i(name: string): string
    function $e(name: string, options?: any): string
    function $opt(value: any): any
    function $t(name: string, options?: any): string
    function $v(name: string, options?: any): string
    function $m(name: string, options?: any): string
    function $s(name: string, options?: any): string
    function launcher(REAL_RULES: RealRule[]): any
}

(window as any).$opt = (value) => {
    return value || {}
}

(window as any).$k = (name) => {
    return "<span class='m-keyword'>" + name + "</span>"
}

(window as any).$t = (name, options: any) => {
    return "<span class='m-type " + $opt(options).id + "'>" + name + "</span>"
}

(window as any).$v = (name, options: any) => {
    return "<span class='m-val " + $opt(options).id + "'>" + name + "</span>"
}

(window as any).$m = (name, options: any) => {
    return "<span class='m-memory " + $opt(options).id + "'>" + name + "</span>"
}

(window as any).$i = (name) => {
    return "<span class='m-icon'>" + name + "</span>"
}
(window as any).$e = (name, options) => {
    return $opt(options).skip ? ("<span id='" + options.id + "'>" + name + "</span>") : ("<span class='m-error' title='" + options.msg + "'>" + name + "</span>")
}
(window as any).$s = (name, options) => {
    return name == null ? "<span class='m-stmt m-stmt-empty' id=" + $opt(options).id + "></span>" : "<span class='m-stmt' id=" + $opt(options).id + ">" + name + "</span>"
}


let rules: Rule[] = [new AxiomRule(), new ExprBinaryRule(), new ExprBracketRule(), new StmtBracketRule(), new ExprIfRule(), new LetRule(), new InRule(), new FunDeclRule(), new AnonymeFunDeclRule(), new FunCallRule(), new RefRule(), new BangRule(), new AssignRule(), new SemicolonRule()]


//let rec f (x: Nat): Nat = if x = 0 then 0 else x + f (x - 1) in f 0
let statements = [
    //new Statement(new In(new RecFunDecl("f", new Param("x", new TypeNat()), new ExprIf(new Equals(new VarUse("x"), new NatConst(0)), new NatConst(0), new Plus(new VarUse("x"), new FunCall(new VarUse("f"), new Minus(new VarUse("x"), new NatConst(1))))), new TypeNat()), new FunCall(new VarUse("f"), new NatConst(0))), new Signature()),
    //new Statement(new GreaterOrEquals(new NatConst(1), new NatConst(2)),new Signature()),
    //new Statement(new ExprIf(new BoolConst(true), new Plus(new BoolConst(true), new NatConst(2)), new Plus(new NatConst(3), new NatConst(4))), new Signature()),
    //new Statement(new ExprIf(new Equals(new NatConst(0), new NatConst(0)), new Less(new NatConst(1), new NatConst(2)), new Greater(new NatConst(3), new NatConst(4))),new Signature()),
    new Statement(new In(new Let("x", new BoolConst(true)), new In(new Let("y", new NatConst(1)), new Plus(new VarUse("x"), new VarUse("y")))), new Signature()),
    //new Statement(new In(new FunDecl("f", new Param("x", new TypeNat()), new Times(new VarUse("x"), new VarUse("x")), new TypeNat()), new FunCall(new VarUse('f'), new NatConst(2))), new Signature()),
    //new Statement(new FunCall(new ExprBracket(new AnonymeFunDecl(new Param("x", new TypeNat()), new Times(new VarUse("x"), new VarUse("x")))), new NatConst(4)), new Signature()),
    //new Statement(new In(new RecFunDecl("factorial", new Param("n", new TypeNat()), new ExprIf(new Equals(new VarUse("n"), new NatConst(0)), new NatConst(1), new Times(new ExprBracket(new FunCall(new VarUse("factorial"), new ExprBracket(new Minus(new VarUse("n"), new NatConst(1))))), new VarUse("n"))), new TypeNat()), new FunCall(new VarUse('factorial'), new NatConst(2))), new Signature()),
    //new Statement(new In(new Let("x", new Ref(new Ref(new NatConst(1)))), new Semicolon(new Assign(new VarUse("x"), new Ref(new NatConst(2))), new Bang(new Bang(new VarUse("x"))))), new Signature()),
    //new Statement( new Ref(new Ref(new NatConst(1))), new Signature()),
]

function getRule(rules: Rule[], stmt: Statement) {
    return rules.find(r => r.match(stmt))
}

function derive(stmt: Statement) {
    let rule = getRule(rules, stmt)

    let upperStmts: (Statement | StatementVariable)[] = rule.apply(stmt)

    console.log(stmt, stmt.toString())

    const fraction = createExprElement(stmt.toString())

    const hr = document.createElement('hr')
    hr.style.width = '100%'


    const nummerator = document.createElement('div')
    nummerator.style.display = 'flex'
    nummerator.style.justifyContent = 'space-between'
    if (stmt.isStatic() ? stmt.isTypeCorrect() : true) {
        fraction.appendChild(hr)
        fraction.appendChild(nummerator)
        let _ = (async _ => {
            for (let i = 0; i < upperStmts.length; i++) {
                let s = upperStmts[i]

                const fraction = createExprElement(s.toString())

                nummerator.appendChild(fraction)

                await sleep((i + 1) * 3000)
                if (s instanceof Statement) {
                    setTimeout(_ => {
                        nummerator.replaceChild(derive(s as Statement), fraction)
                    }, 1000)
                }
                else {
                    s.listen(stmt => {
                        const newFraction = createExprElement(stmt.toString())

                        nummerator.replaceChild(newFraction, fraction)


                        setTimeout(_ => {
                            nummerator.replaceChild(derive(stmt), newFraction)
                        }, 1000)
                    })
                }
            }
            return null;
        })()

    }

    return rule instanceof ExprBracketRule || rule instanceof StmtBracketRule ? nummerator : fraction
}

function createExprElement(stmt) {
    const fraction = document.createElement('div')

    fraction.style.display = 'flex'
    fraction.style.flexDirection = 'column-reverse'
    fraction.style.alignItems = 'center'
    fraction.style.width = 'max-content'
    fraction.style.margin = '5px'


    const denominator = document.createElement('span')
    denominator.style.paddingLeft = '5px'
    denominator.style.paddingRight = '5px'
    denominator.innerHTML = stmt
    fraction.appendChild(denominator)
    return fraction
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(window as any).launcher = (REAL_RULES: RealRule[]) => {
    document.querySelector('#code').addEventListener('keypress', function (e) {
        if ((e as any).key === 'Enter') {
            e.preventDefault();
            console.log(this)
            this.value = this.value.trim();
            (document.querySelector('#confirm') as HTMLElement).click()
        }
    })

    document.querySelector('#confirm').addEventListener('click', () => {
        //console.log(REAL_RULES)confirm

        const run = (statement) => {

            TypeVariable.counter = 0
            ValVariable.counter = 0


            const content: HTMLDivElement = document.querySelector("#content")
            content.innerHTML = ''

            content.style.display = 'flex'
            // content.style.flexWrap = 'wrap'
            // content.style.justifyContent = 'center'
            content.style.fontSize = '17px'
            content.style.marginTop = '15px'
            content.style.overflowX = 'auto'

            let fraction = createExprElement(statement)
            fraction.style.border = '1px solid'
            fraction.style.padding = '5px'
            content.appendChild(fraction)
            bindEvent(statement, fraction, REAL_RULES)


            document.querySelector("#input-mode").addEventListener('change', function () {
                this.parentElement.parentElement.querySelector('h3').innerText = this.checked ? 'Dynamische Semantik' : 'Statische Semantik'
                content.innerHTML = ''
                run((new Statement(statement.getProg().clone(), (this.checked ? new Environment({}, new Memory()) : new Signature()))))
            })
        }
        const code = (document.querySelector('#code') as HTMLTextAreaElement).value.trim()
        const prog = parse(code)
        console.log(code, prog)
        run(new Statement(prog, (document.querySelector("#input-mode") as HTMLInputElement).checked ? new Environment({}, new Memory()) : new Signature()))

    })
    document.querySelector("#input-mode").addEventListener('change', function () {
        this.parentElement.parentElement.querySelector('h3').innerText = this.checked ? 'Dynamische Semantik' : 'Statische Semantik'
    })
}



function bindEvent(stmt: Statement, fraction: HTMLElement, REAL_RULES: RealRule[]) {
    fraction.setAttribute("id", stmt.getHash())
    // skip brackets
    while (stmt.getProg() instanceof ExprBracket || stmt.getProg() instanceof StmtBracket) {
        const prog = stmt.getProg() as (ExprBracket | StmtBracket)
        stmt = new Statement(prog instanceof ExprBracket ? prog.getExpr() : prog.getStmt(), stmt.getContext())
    }

    fraction.ondragover = (ev: DragEvent) => {
        ev.preventDefault();
    }
    fraction.ondrop = (ev: DragEvent) => {
        ev.preventDefault();
        var id = ev.dataTransfer.getData("id");
        const rule = findTypedRule(REAL_RULES.find(rr => rr.id == id).rule as Rule)
        if (rule instanceof AxiomRule || rule instanceof ExprBinaryRule)
            rule.setRuleType((REAL_RULES.find(rr => rr.id == id).rule as AxiomRule | ExprBinaryRule).getRuleType())
        if (rule.match(stmt)) {
            applyRule(stmt, fraction, rule, REAL_RULES)
            fraction.ondrop = null
            fraction.ondragover = null
        }

        //ev.target.appendChild(document.getElementById(data));
    }
}
function findTypedRule(rule: Rule) {
    return rules.find(r => r.constructor.name == rule.constructor.name)
}
function applyRule(stmt: Statement, fraction: HTMLElement, rule: Rule, REAL_RULES: RealRule[]) {
    let upperStmts: (Statement | StatementVariable)[] = rule.apply(stmt)

    //console.log(stmt, stmt.toString())

    const hr = document.createElement('hr')
    hr.style.width = '100%'


    const nummerator = document.createElement('div')
    nummerator.style.display = 'flex'
    nummerator.style.justifyContent = 'space-between'
    if (stmt.isStatic() ? stmt.isTypeCorrect() : true) {
        fraction.appendChild(hr)
        fraction.appendChild(nummerator)
        for (let i = 0; i < upperStmts.length; i++) {
            let s = upperStmts[i]

            const fraction = createExprElement(s.toString())

            nummerator.appendChild(fraction)

            if (s instanceof Statement) {
                bindEvent(s, fraction, REAL_RULES)
            }
            else {
                s.listen(stmt => {
                    const newFraction = createExprElement(stmt.toString())

                    nummerator.replaceChild(newFraction, fraction)

                    bindEvent(stmt, newFraction, REAL_RULES)
                })
            }
        }
    }

    return fraction
}
