import 'js-snackbar/snackbar.css';
import { show, ACTION_TYPE } from 'js-snackbar';
 

import * as assert from 'assert';
import { Token, kright, kleft, TokenError } from 'typescript-parsec';
import { buildLexer, expectEOF, expectSingleResult, rule } from 'typescript-parsec';
import { alt, apply, kmid, lrec_sc, seq, str, tok } from 'typescript-parsec';
import { NatConst, Minus, Times, Div } from '../models/values/Nat';
import { Expr, ExprBracket } from '../models/values/Expr';
import { Plus } from '../models/values/Nat';
import { BoolConst, Equals, Less, Greater, GreaterOrEquals } from '../models/values/Bool';
import { Unequals } from '../models/values/Bool';
import { LessOrEquals } from '../models/values/Bool';
import { ExprIf } from '../models/values/Expr';
import { In, Let } from '../models/values/Let';
import { Stmt, StmtBracket } from '../models/values/Stmt';
import { VarUse } from '../models/values/Let';
import { FunDecl } from '../models/values/FunDecl';
import { Param, FunCall } from '../models/values/FunCall';
import { Type, TypeNat, TypeFun } from '../models/context/Context';
import { TypeBool } from '../models/context/Context';
import { AnonymeFunDecl } from '../models/values/FunCall';
import { RecFunDecl } from '../models/values/RecFunDecl';
import { Ref, Bang } from '../models/values/State';
import { Assign } from '../models/values/State';

enum TokenKind {
    Nat,
    Plus,
    Minus,
    Times,
    Div,
    LParen,
    RParen,
    Space,

    Bool,
    Equals,
    Unequals,
    Less,
    LessOrEquals,
    Greater,
    GreaterOrEquals,

    IF,
    THEN,
    ELSE,

    IN,
    LET,
    ID,
    FUN,
    REC,

    REF,
    BANG,
    ASSIGN,

    ARROW,
    DOUBLE_POINTS

}

const lexer = buildLexer([
    [true, /^\d+(\.\d+)?/g, TokenKind.Nat],
    [true, /^\+/g, TokenKind.Plus],
    [true, /^\-/g, TokenKind.Minus],
    [true, /^\*/g, TokenKind.Times],
    [true, /^\//g, TokenKind.Div],
    [true, /^\(/g, TokenKind.LParen],
    [true, /^\)/g, TokenKind.RParen],

    [true, /^true/g, TokenKind.Bool],
    [true, /^false/g, TokenKind.Bool],
    [true, /^=/g, TokenKind.Equals],
    [true, /^<>/g, TokenKind.Unequals],
    [true, /^</g, TokenKind.Less],
    [true, /^<=/g, TokenKind.LessOrEquals],
    [true, /^>/g, TokenKind.Greater],
    [true, /^>=/g, TokenKind.GreaterOrEquals],

    [true, /^if/g, TokenKind.IF],
    [true, /^then/g, TokenKind.THEN],
    [true, /^else/g, TokenKind.ELSE],

    [true, /^in/g, TokenKind.IN],
    [true, /^let/g, TokenKind.LET],
    [true, /^fun/g, TokenKind.FUN],
    [true, /^rec/g, TokenKind.REC],

    [true, /^ref/g, TokenKind.REF],
    [true, /^!/g, TokenKind.BANG],
    [true, /^:=/g, TokenKind.ASSIGN],


    [true, /^[a-zA-Z]+/g, TokenKind.ID],

    [true, /^->/g, TokenKind.ARROW],
    [true, /^:/g, TokenKind.DOUBLE_POINTS],

    [false, /^\s+/g, TokenKind.Space]
]);

function applyNat(value: Token<TokenKind.Nat>): Expr {
    return new NatConst(parseInt(value.text));
}

function applyBool(value: Token<TokenKind.Bool>): Expr {
    return new BoolConst(value.text === 'true');
}

function applyBinary(first: Expr, second: [Token<TokenKind>, Expr]): Expr {
    switch (second[0].text) {
        case '+': return new Plus(first, second[1]);
        case '-': return new Minus(first, second[1]);
        case '*': return new Times(first, second[1]);
        case '/': return new Div(first, second[1]);
        case '=': return new Equals(first, second[1]);
        case '<>': return new Unequals(first, second[1]);
        case '<': return new Less(first, second[1]);
        case '<=': return new LessOrEquals(first, second[1]);
        case '>': return new Greater(first, second[1]);
        case '>=': return new GreaterOrEquals(first, second[1]);

        default: throw new Error(`Unknown binary operator: ${second[0].text}`);
    }
}

function applyIf([cond, then, else_]: Expr[]): Expr {
    return new ExprIf(cond, then, else_)
}

function applyIn([left, right]: [Stmt, Expr]): Expr {
    return new In(left, right)
}

function applyLet([name, value]: [Token<TokenKind.ID>, Expr]): Stmt {
    return new Let(name.text, value)
}

function applyVarUse(name: Token<TokenKind.ID>): Expr {
    return new VarUse(name.text)
}


function applyExprBracket(value: Expr): Expr {
    return new ExprBracket(value);
}

function applyStmtBracket(value: Stmt): Stmt {
    return new StmtBracket(value);
}

function applyStmt(value: Stmt): Stmt {
    return value;
}

function applyExpr(value: Expr): Expr {
    return value;
}

function applyFunDecl([name, paramName, paramType, returnType, expr]: [Token<TokenKind.ID>, Token<TokenKind.ID>, Type, Type, Expr]): Stmt {
    return new FunDecl(name.text, new Param(paramName.text, paramType), expr, returnType)
}

function applyRecFunDecl([name, paramName, paramType, returnType, expr]: [Token<TokenKind.ID>, Token<TokenKind.ID>, Type, Type, Expr]): Stmt {
    return new RecFunDecl(name.text, new Param(paramName.text, paramType), expr, returnType)
}

function applyAnonymeFunDecl([paramName, paramType, expr]: [Token<TokenKind.ID>, Type, Expr]): Expr {
    return new AnonymeFunDecl(new Param(paramName.text, paramType), expr)
}

function applyPType(type: Token<TokenKind.ID>): Type {
    switch (type.text) {
        case 'Nat': return new TypeNat();
        case 'Bool': return new TypeBool();

        default: throw new Error(`Unknown type: ${type.text}`);
    }
}

function applyFunType([left, right]: [Type, Type]): Type {
    return new TypeFun(left, right);
}

function applyFunCall(name:Expr, arg: Expr) {
    return new FunCall(name, arg)
}
function applyId(e) {
    return e
}


function applyRef(value: Expr): Expr {
    return new Ref(value)
}

function applyBang(value: Expr): Expr {
    return new Bang(value)
}

function applyAssign([left, right]: [Expr, Expr]): Expr {
    return new Assign(left, right)
}

/*
function applyType(type: Token<TokenKind.ID>): Type{
    switch (type.text) {
        case 'Nat': return new TypeNat();
        case 'Bool': return new TypeBool();
        case '': return new TypeFun(first, second[1]);
        case '/': return new Div(first, second[1]);

        default: throw new Error(`Unknown type: ${type.text}`);
    }
}*/

const TERM = rule<TokenKind, Expr>();
const FACTOR = rule<TokenKind, Expr>();
const PFACTOR = rule<TokenKind, Expr>();
const EXPN = rule<TokenKind, Expr>();
const EXP = rule<TokenKind, Expr>();
const LEXP = rule<TokenKind, Expr>();
const STMT = rule<TokenKind, Stmt>();
const PROG = rule<TokenKind, Stmt | Expr>();

const TYPE = rule<TokenKind, Type>();
const LTYPE = rule<TokenKind, Type>();



LEXP.setPattern(
    alt(
        apply(tok(TokenKind.ID), applyVarUse),
        apply(seq(kright(tok(TokenKind.FUN), kright(str('('), tok(TokenKind.ID))), kmid(str(':'), TYPE, str(')')), kright(tok(TokenKind.ARROW), EXP)), applyAnonymeFunDecl),
        apply(kmid(str('('), LEXP, str(')')), applyExprBracket),
        )
);

/*
TERM
  = Nat
  = ('+' | '-') TERM
  = '(' EXP ')'
*/
TERM.setPattern(
    alt(
        apply(tok(TokenKind.Nat), applyNat),
        apply(tok(TokenKind.Bool), applyBool),

        apply(seq(kright(tok(TokenKind.IF), EXP), kright(tok(TokenKind.THEN), EXP), kright(tok(TokenKind.ELSE), EXP)), applyIf),
        apply(seq(kleft(STMT, tok(TokenKind.IN)), EXP), applyIn),
        apply(kmid(str('('), EXP, str(')')), applyExprBracket),
        apply(kright(tok(TokenKind.REF), EXP), applyRef),
        apply(kright(tok(TokenKind.BANG), EXP), applyBang),
        lrec_sc(LEXP, EXP, applyFunCall),


        apply(seq(kleft(LEXP, tok(TokenKind.ASSIGN)), EXP), applyAssign),

    )
);

/*
FACTOR
  = TERM
  = FACTOR ('*' | '/') TERM
*/
FACTOR.setPattern(
    lrec_sc(TERM, seq(alt(str('*'), str('/')), TERM), applyBinary)
);

/*
EXP
  = FACTOR
  = EXP ('+' | '-') FACTOR
*/
EXPN.setPattern(
    lrec_sc(FACTOR, seq(alt(str('+'), str('-')), FACTOR), applyBinary)
);

EXP.setPattern(
    lrec_sc(EXPN, seq(alt(str('='), str('<>'), str('<'), str('<='), str('>'), str('>=')), EXPN), applyBinary)
);

STMT.setPattern(
    alt(
        apply(kmid(str('('), STMT, str(')')), applyStmtBracket),
        apply(seq(kright(tok(TokenKind.LET), tok(TokenKind.ID)), kright(tok(TokenKind.Equals), EXP)), applyLet),
        apply(seq(kright(tok(TokenKind.LET), tok(TokenKind.ID)), kright(str('('), tok(TokenKind.ID)), kmid(str(':'), TYPE, str(')')), kright(str(':'), TYPE), kright(tok(TokenKind.Equals), EXP)), applyFunDecl),
        apply(seq(kright(tok(TokenKind.LET), kright(tok(TokenKind.REC), tok(TokenKind.ID))), kright(str('('), tok(TokenKind.ID)), kmid(str(':'), TYPE, str(')')), kright(str(':'), TYPE), kright(tok(TokenKind.Equals), EXP)), applyRecFunDecl)
    )
);

LTYPE.setPattern(
    apply(tok(TokenKind.ID), applyPType),
);

TYPE.setPattern(
    alt(
        apply(LTYPE, applyId),
        apply(seq(kleft(LTYPE, tok(TokenKind.ARROW)), TYPE), applyFunType),
    )
);


PROG.setPattern(
    alt(
        apply(STMT, applyStmt),
        apply(EXP, applyExpr),
    )
);


export function parse(expr: string): Expr | Stmt {
    try{
     return expectSingleResult(expectEOF(PROG.parse(lexer.parse(expr))))
    }catch( e){
        show({
            text: 'Ungültiges Syntax!',
            pos: 'top-center',
            backgroundColor: 'red',
            customClass: 'm-snackbar',
          });
        throw e
    }
}
