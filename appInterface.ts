import "./app";
import { AxiomRule } from "./models/rules/AxiomRule";
import { ExprBinaryRule, ExprIfRule } from "./models/rules/ExprRule";
import { AnonymeFunDeclRule, FunCallRule } from "./models/rules/FunCallRule";
import { FunDeclRule } from "./models/rules/FunDeclRule";
import { InRule, LetRule } from "./models/rules/LetRule";
import { Rule } from "./models/rules/Rule";
import { AssignRule, BangRule, RefRule } from "./models/rules/StateRule";
import { Div, Mod, NatConst, Times, Plus, Minus } from "./models/values/Nat";
import { BoolConst, LessOrEquals, Equals, GreaterOrEquals, Less, Unequals, Greater } from './models/values/Bool';
import { Expr, ExprIf } from "./models/values/Expr";
import {VarUse} from "./models/values/Let"


export interface RealRule {
    id: string;
    name: string;
    latex: string;
    rule: Rule | number;
}

//Modeling the Rules, in Latex Form.
//HERE STRARTS THE STATISCH RULES, Look At the Latex Version to see what Rule are these Exactly.
const Nat_Typ_1 = {
    name: "Nat Type 1",
    id: "R1",
    latex: "\\[  \\frac{}{n:{\\color{blue}{Nat}}} \\]",
    rule: new AxiomRule().setRuleType(new NatConst())
};
const Nat_Typ_2 = {
    name: "Nat Type 2 (Multiplikation)",
    id: "R2",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 * e_2 : {\\color{blue}{Nat}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Times())
};
const Nat_Typ_3 = {
    name: "Nat Type 3 (Addition)",
    id: "R3",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 + e_2 : {\\color{blue}{Nat}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Plus())
};
const Bool_Typ_False = {
    name: "Bool Typ False",
    id: "R4",
    latex: "\\[  \\frac{}{false:{\\color{blue}{Bool}}} \\]",
    rule: new AxiomRule().setRuleType(new BoolConst(false))
};
const Bool_Typ_True = {
    name: "Bool Typ True",
    id: "R5",
    latex: "\\[  \\frac{}{true:{\\color{blue}{Bool}}} \\]",
    rule: new AxiomRule().setRuleType(new BoolConst(true))
};
const If_Then_Else_1 = {
    name: "If Then Else",
    id: "R6",
    latex: "\\[  \\frac{e_1:{\\color{blue}{Bool}} \\quad e_2:{\\color{blue}{t}} \\quad e_3:{\\color{blue}{t}} }{{\\color{blue}{if}} \\ e_1 \\ {\\color{blue}{then}} \\ e_2 \\ {\\color{blue}{else}} \\ e_3: {\\color{blue}{t}}} \\]",
    rule: new ExprIfRule()
};
const If_Then_Else_2 = {
    name: "Kleiner",
    id: "R7",
    latex: "\\[ \\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 < e_2 : {\\color{blue}{Bool}}}\\]",
    rule: new ExprIfRule()
};

const Signatur_1 = {
    name: "Signatur 1",
    id: "R8",
    latex: "\\[ {\\color{blue}{\\Sigma}}  \\vdash e :{\\color{blue}{t}} 	\\]",
    rule: 0
};

const Signatur_2 = {
    name: "Signatur 1",
    id: "R9",
    latex: "\\[ {{\\color{blue}{\\Sigma}} \\vdash e :{\\color{blue}{t}}} \\over {{\\color{blue}{\\Sigma}} \\vdash ({\\color{blue}{let}} \\, x = e):\\{x\\mapsto {\\color{blue}{t}} \\}} \\]",
    rule: new LetRule()
};
const Signatur_3 = {
    name: "Signatur 2",
    id: "R10",
    latex: "\\[ \\over {\\color{blue}{\\Sigma}}  \\vdash x :{\\color{blue}{\\Sigma}}(x) \\]",
    rule: new AxiomRule().setRuleType(new VarUse())
};
const Signatur_4 = {
    name: "Signatur 3",
    id: "R11",
    latex: "\\[ {\\color{blue}{\\Sigma}}  \\vdash d:{\\color{blue}{\\Sigma'}} \\qquad {\\color{blue}{\\Sigma}},{\\color{blue}{\\Sigma'}}  \\vdash e:{\\color{blue}{t}}  \\over {\\color{blue}{\\Sigma}}  \\vdash (d \\; {\\color{blue}{in}} \\; e) :{\\color{blue}{t}} \\]",
    rule: new InRule()
};
const FunktionsTypen_1 = {
    name: "FunktionsTypen 1",
    id: "R12",
    latex: "\\[ {\\color{blue}{\\Sigma}},\\{x_1 \\mapsto {\\color{blue}{t_1}} \\} \\vdash e_2 : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash ( {\\color{blue}{let}} \\; f \\; (x_1 : {\\color{blue}{t_1}}): {\\color{blue}{t_2}} = e_2 ) : \\{f \\mapsto {\\color{blue}{t_1 \\rightarrow t_2}} \\} \\]",
    rule: new FunDeclRule()
};
const FunktionsTypen_2 = {
    name: "FunktionsTypen 2",
    id: "R13",
    latex: "\\[ {\\color{blue}{\\Sigma}}(f)= {\\color{blue}{t_1 \\rightarrow t_2}} \\qquad {\\color{blue}{\\Sigma}}  \\vdash e_1 : {\\color{blue}{t_1}} \\over {\\color{blue}{\\Sigma}}  \\vdash f(e_1) :{\\color{blue}{t_2}} \\] ",
    rule: new FunCallRule()
};
const Funktionsausdrucke_1 = {
    name: "Funktionsausdrucke 1",
    id: "R14",
    latex: "\\[ {\\color{blue}{\\Sigma}},\\{x_1 \\mapsto {\\color{blue}{t_1}} \\} \\vdash e : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash ( {\\color{blue}{fun}} \\; (x_1 : {\\color{blue}{t_1}})\\rightarrow  e ) : {\\color{blue}{t_1 \\rightarrow t_2}} \\} \\]",
    rule: new AnonymeFunDeclRule()
};
const Funktionsausdrucke_2 = {
    name: "Funktionsausdrucke 2",
    id: "R15",
    latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t_1 \\rightarrow t_2}} \\qquad {\\color{blue}{\\Sigma}}  \\vdash e_1 : {\\color{blue}{t_1}}\\over {\\color{blue}{\\Sigma}}  \\vdash e \\, e_1 :{\\color{blue}{t_2}} \\]",
    rule: new FunCallRule()
};
const Rekursive_Funktionsdefinition = {
    name: "Rekursive Funktionsdefinition",
    id: "R16",
    latex: "\\[ {\\color{blue}{\\Sigma}},\\{f \\mapsto {\\color{blue}{t_1 \\rightarrow t_2}} ,x_1 \\mapsto {\\color{blue}{t_1}} \\} \\vdash e_2 : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash ( {\\color{blue}{let\\; \\, rec}} \\; f \\; (x_1 : {\\color{blue}{t_1}}): {\\color{blue}{t_2}} = e_2 ) : \\{f \\mapsto {\\color{blue}{t_1 \\rightarrow t_2}} \\} \\]",
    rule: new FunDeclRule()
};
const Paartyp_1 = {
    name: "Paartyp 1",
    id: "R17",
    latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e_1: {\\color{blue}{t_1}} \\qquad {\\color{blue}{\\Sigma}}  \\vdash e_2 : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}}  \\vdash(e_1,e_2) :{\\color{blue}{t_1*t_2}} \\]",
    rule: 0
};
const Paartyp_2 = {
    name: "Paartyp 2",
    id: "R18",
    latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t_1*t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash fst \\; e :{\\color{blue}{t_1}} \\]",
    rule: 0
};
const Paartyp_3 = {
    name: "Paartyp 3",
    id: "R19",
    latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t_1*t_2} \\over {\\color{blue}{\\Sigma}} \\vdash snd \\; e :{\\color{blue}{t_2}} \\]",
    rule: 0
};
const ReferenzTyp_1 = {
    name: "ReferenzTyp 1",
    id: "R20",
    latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t}} \\over {\\color{blue}{\\Sigma}} \\vdash {\\color{blue}{ref}} \\; e :{\\color{blue}{Ref \\langle t \\rangle}} \\]",
    rule: new RefRule()
};
const ReferenzTyp_2 = {
    name: "ReferenzTyp 2",
    id: "R21",
    latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{Ref\\langle t \\rangle}} \\over {\\color{blue}{\\Sigma}} \\vdash \\; !e :{\\color{blue}t} \\]",
    rule: new BangRule()
};
const ReferenzTyp_3 = {
    name: "ReferenzTyp 3",
    id: "R22",
    latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e_1: {\\color{blue}{Ref\\langle t \\rangle}} \\qquad \\qquad{} {\\color{blue}{\\Sigma}} \\vdash e_2:{\\color{blue}t} \\over {\\color{blue}{\\Sigma}} \\vdash  e_1:=e_2:{\\color{blue}{Unit}} \\]",
    rule: new AssignRule()
};
const Nat_Typ_4 = {
    name: "Nat Type 4 (Natürliche Subtraktion)",
    id: "R45",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\dot{-} e_2 : {\\color{blue}{Nat}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Minus())
};


const Nat_Typ_5 = {
    name: "Nat Type 5 (Natürliche Division)",
    id: "R46",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\div e_2 : {\\color{blue}{Nat}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Div())
};


const Nat_Typ_6 = {
    name: "Nat Type 6 (Divisionsrest)",
    id: "R47",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\mathbin{\\%} e_2 : {\\color{blue}{Nat}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Mod())
};

const kleiner_gleich = {
    name: "Kleiner Gleich",
    id: "R48",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\leq e_2 : {\\color{blue}{Bool}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new LessOrEquals())
};
const gleich = {
    name: "Gleich",
    id: "R49",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 = e_2 : {\\color{blue}{Bool}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Equals())
};
const ungleich = {
    name: "Ungleich",
    id: "R50",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 <> e_2 : {\\color{blue}{Bool}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Unequals())
};

const grosser_gleich = {
    name: "Größer Gleich",
    id: "R51",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\geq e_2 : {\\color{blue}{Bool}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new GreaterOrEquals)
};

const grosser = {
    name: "Größer",
    id: "R52",
    latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 > e_2 : {\\color{blue}{Bool}}}\\]",
    rule: new ExprBinaryRule().setRuleType(new Greater())
};
//HERE STARTS THE DYNAMISCH RULES.
const Nat_Typ_D1 = {
    name: "Nat Typ 1 Dynamisch",
    id: "R23",
    latex: "\\[ \\over n \\Downarrow n\\]",
    rule: new AxiomRule().setRuleType(new NatConst())
};
const Nat_Typ_D2 = {
    name: "Nat Typ 2 Dynamisch (Addition)",
    id: "R24",
    latex: "\\[ e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 \\over e_1 + e_2 \\Downarrow n_1 + n_2 \\]",
    rule: new ExprBinaryRule().setRuleType(new Plus())
};
const Nat_Typ_D3 = {
    name: "Nat Typ 3 Dynamisch (Multiplikation)",
    id: "R25",
    latex: "\\[ e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 \\over e_1 * e_2 \\Downarrow n_1 . n_2 \\]",
    rule: new ExprBinaryRule().setRuleType(new Times())
};
const Bool_Typ_FalseD = {
    name: "Bool Type False Dynamisch",
    id: "R26",
    latex: "\\[  \\frac{}{false \\Downarrow {{false}}} \\]",
    rule: new AxiomRule().setRuleType(new BoolConst(false))
};
const Bool_Typ_TrueD = {
    name: "Bool Type True Dynamisch",
    id: "R27",
    latex: "\\[  \\frac{}{true \\Downarrow {{true}}} \\]",
    rule: new AxiomRule().setRuleType(new BoolConst(true))
};

const If_Then_Else_1D = {
    name: "If Then Else Dynamisch",
    id: "R28",
    latex: "\\[ \\frac{e_1 \\Downarrow {true} \\qquad\\qquad e_2 \\Downarrow {{v}} }{{\\color{blue}{if}} \\ e_1 \\ {\\color{blue}{then}} \\ e_2 \\ {\\color{blue}{else}} \\ e_3\\Downarrow {v}} \\]",
    rule: new ExprIfRule()
};
const If_Then_Else_2D = {
    name: "Kleiner Dynamisch",
    id: "R29",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 < e_2 \\Downarrow n_1 < n_2}\\]",
    rule: new ExprIfRule()
};
const Umgebung_1 = {
    name: "Umgebung 1",
    id: "R30",
    latex: "\\[ \\frac{}{\\delta  \\vdash x \\ \\Downarrow \\ \\delta (x)} \\qquad x \\in  dom \\ \\delta \\] ",
    rule: new AxiomRule().setRuleType(new VarUse())
};
const Umgebung_2 = {
    name: "Umgebung 2",
    id: "R31",
    latex: "\\[ {{\\delta} \\vdash e \\Downarrow {v}} \\over {{\\delta} \\vdash ({\\color{blue}{let}} \\, x = e) \\Downarrow \\{x\\mapsto {v} \\}} \\]",
    rule: new LetRule()
};
const Umgebung_3 = {
    name: "Umgebung 3",
    id: "R32",
    latex: "\\[ {{\\delta}}  \\vdash d\\ \\Downarrow\\ {\\delta'} \\qquad {\\delta},{\\delta'} \\ \\vdash e\\ \\Downarrow\\ {v} \\over {\\delta}  \\vdash  (d \\; {\\color{blue}{in}} \\; e)  \\Downarrow{v} \\]",
    rule: new InRule()
};
const FunktionsTypen_1D = {
    name: "FunktionsTypen 1 Dynamisch",
    id: "R33",
    latex: "\\[ \\over{\\delta \\vdash ({\\color{blue}{let}} f\\ (x)=e) \\ \\Downarrow \\ \\{ f \\mapsto{\\langle \\delta,x,e \\rangle}\\}} \\]",
    rule: new FunDeclRule()
};
const FunktionsTypen_2D = {
    name: "FunktionsTypen 2 Dynamisch",
    id: "R34",
    latex: "\\[ \\delta(f)=\\langle \\delta',x_1,e \\rangle \\qquad \\delta\\vdash e_1 \\ \\Downarrow \\ v_1 \\qquad \\delta',\\{ x_1 \\mapsto{v_1}\\} \\vdash e \\ \\Downarrow \\ v\\over{\\delta \\vdash f(e_1) \\ \\Downarrow \\ v} \\]",
    rule: new FunCallRule()
};
const Funktionsausdrucke_1D = {
    name: "Funktionsausdrucke 1 Dynamisch",
    id: "R35",
    latex: "\\[ \\frac{}{\\delta  \\vdash({\\color{blue}{fun}}\\ x\\mapsto{e} \\ \\Downarrow \\ \\langle \\delta, x,e \\rangle } \\] ",
    rule: new AnonymeFunDeclRule()
};
const Funktionsausdrucke_2D = {
    name: "Funktionsausdrucke 2 Dynamisch",
    id: "R36",
    latex: "\\[ {\\delta} \\vdash e  \\ \\Downarrow \\ \\langle \\delta', x_1,e' \\rangle \\qquad \\delta \\vdash e_1 \\ \\Downarrow \\ v_1 \\qquad {\\delta'},\\{ x_1 \\mapsto{v_1} \\}  \\vdash e' \\ \\Downarrow \\ {v'} \\over {\\delta}  \\vdash e \\, e_1 \\ \\Downarrow \\ v' \\]",
    rule: new FunCallRule()
};
const Rekursive_definition_1D = {
    name: "Rekursive definition 1 Dynamisch",
    id: "R37",
    latex: "\\[ \\frac{}{\\delta  \\vdash({\\color{blue}{let} \\ rec} \\ f\\ (x=e) \\ \\Downarrow \\ \\{f\\mapsto{\\langle \\delta,f,x,e \\rangle\\}} } \\]",
    rule: new FunDeclRule()
};
const Rekursive_definition_2D = {
    name: "Rekursive definition 2 Dynamisch",
    id: "R38",
    latex: "\\[ \\delta \\vdash e \\ \\Downarrow \\ v  \\qquad \\delta \\vdash e_1 \\ \\Downarrow \\ v_1 \\qquad {\\delta'},\\{f \\mapsto {v} ,x_1 \\mapsto {v_1} \\} \\vdash e' \\ \\Downarrow \\ v' \\over {\\delta} \\vdash ee_1 \\ \\Downarrow \\ v' \\]",
    rule: new FunCallRule()
};
const Referenz_1D = {
    name: "Referenz (Effekte) 1 Dynamisch",
    id: "R39",
    latex: "\\[ \\sigma \\ \\Vert \\ e \\ \\Downarrow \\ v \\ \\Vert \\ \\sigma' \\over \\sigma \\ \\Vert \\ {\\color{blue}{ref}}\\  e \\ \\Downarrow \\ a \\ \\Vert \\ \\sigma',\\{ a \\mapsto{v} \\} \\]",
    rule: new RefRule()
};
const Referenz_2D = {
    name: "Referenz (Effekte) 2 Dynamisch",
    id: "R40",
    latex: "\\[ \\sigma \\ \\Vert \\ e \\ \\Downarrow \\ a \\ \\Vert \\ \\sigma' \\over \\sigma \\ \\Vert \\  !e \\ \\Downarrow \\ \\sigma'(a) \\ \\Vert \\ \\sigma '\\]",
    rule: new BangRule()
};
const Referenz_3D = {
    name: "Referenz (Effekte) 3 Dynamisch",
    id: "R41",
    latex: "\\[ \\sigma \\ \\Vert \\ e_1 \\ \\Downarrow \\ a \\ \\Vert \\ \\sigma_1 \\qquad \\sigma_1 \\ \\Vert \\  e_2 \\Downarrow \\ v \\ \\Vert \\ \\sigma_2  \\over \\sigma \\ \\Vert \\  e_1:=e_2 \\ \\Downarrow \\ () \\ \\Vert \\ \\sigma_2,\\{ a \\mapsto{v} \\} \\]",
    rule: new AssignRule()
};
const Nat_Typ_D4 = {
    name: "Nat Typ 4 Dynamisch (Natürliche Subtraktion)",
    id: "R53",
    latex: "\\[e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 \\over e_1 \\dot{-} e_2 \\Downarrow n_1 \\dot{-} n_2\\]",
    rule: new ExprBinaryRule().setRuleType(new Minus())
};
const Nat_Typ_D5 = {
    name: "Nat Typ 5 Dynamisch (Natürliche Division)",
    id: "R54",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\div e_2 \\Downarrow q} \\qquad n_1 = q \\cdot n_2 + r \\hspace{0.5em} und \\hspace{0.5em} r < n_2 \\]",
    rule: new ExprBinaryRule().setRuleType(new Div())
};
const Nat_Typ_D6 = {
    name: "Nat Typ 6 Dynamisch (Divisionsrest)",
    id: "R55",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\mathbin{\\%} e_2 \\Downarrow r} \\qquad n_1 = q \\cdot n_2 + r \\hspace{0.5em} und \\hspace{0.5em} r < n_2 \\]",
    rule: new ExprBinaryRule().setRuleType(new Mod())
};

const kleiner_gleichD = {
    name: "Kleiner Gleich Dynamisch",
    id: "R56",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\leq e_2 \\Downarrow n_1 \\leq n_2}\\]",
    rule: new ExprBinaryRule().setRuleType(new LessOrEquals())
};

const gleichD = {
    name: "Gleich Dynamisch",
    id: "R57",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 = e_2 \\Downarrow n_1 = n_2}\\]",
    rule: new ExprBinaryRule().setRuleType(new Equals())
};

const ungleichD = {
    name: "Ungleich Dynamisch",
    id: "R58",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 <> e_2 \\Downarrow n_1 <> n_2}\\]",
    rule: new ExprBinaryRule().setRuleType(new Unequals())
};

const grosser_gleichD = {
    name: "Größer Gleich Dynamisch",
    id: "R59",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\geq e_2 \\Downarrow n_1 \\geq n_2}\\]",
    rule: new ExprBinaryRule().setRuleType(new GreaterOrEquals())
};

const grosserD = {
    name: "Gleich Dynamisch",
    id: "R61",
    latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 > e_2 \\Downarrow n_1 > n_2}\\]",
    rule: new ExprBinaryRule().setRuleType(new Greater())
};



//Ordered Them somehow in Arrays ,Change if Needed :D
const naturalNumbers_Sta: RealRule[] = [Nat_Typ_1,Nat_Typ_2, Nat_Typ_3, Nat_Typ_4, Nat_Typ_5, Nat_Typ_6];
const naturalNumbers_Dyn: RealRule[] = [Nat_Typ_D1,Nat_Typ_D2,Nat_Typ_D3, Nat_Typ_D4, Nat_Typ_D5, Nat_Typ_D6];

const booleanValues_Sta: RealRule[] = [Bool_Typ_True, Bool_Typ_False,If_Then_Else_1, If_Then_Else_2, grosser, grosser_gleich, kleiner_gleich, ungleich, gleich];
const booleanValues_Dyn: RealRule[] = [Bool_Typ_TrueD, Bool_Typ_FalseD,If_Then_Else_1D, If_Then_Else_2D, grosserD, grosser_gleichD, kleiner_gleichD, ungleichD, gleichD];

const Signatur_Array_Sta: RealRule[] = [Signatur_2, Signatur_3, Signatur_4];
const Umgebung_Array_Dyn: RealRule[] = [Umgebung_1, Umgebung_2, Umgebung_3];


const Rekursive_Sta: RealRule[] = [Rekursive_Funktionsdefinition];
const Rekursive_Dyn: RealRule[] = [Rekursive_definition_1D, Rekursive_definition_2D];

const Paar_Sta: RealRule[] = [Paartyp_1, Paartyp_2, Paartyp_3];

const Referenz_Sta: RealRule[] = [ReferenzTyp_1, ReferenzTyp_2, ReferenzTyp_3];
const Referenz_Dyn: RealRule[] = [Referenz_1D, Referenz_2D, Referenz_3D];

const funktionArray_Sta: RealRule[] = [FunktionsTypen_1, FunktionsTypen_2, Funktionsausdrucke_1, Funktionsausdrucke_2];
const funktionArray_Dyn: RealRule[] = [FunktionsTypen_1D, FunktionsTypen_2D, Funktionsausdrucke_1D, Funktionsausdrucke_2D];

function addElements(x, z) {
    x.forEach(function (elem) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const span = document.createElement('span');
        const latx1 = document.createElement('p');



        latx1.textContent = elem.latex;
        span.textContent = elem.name;
        a.href = '#';

        a.setAttribute("id", elem.id)
        a.setAttribute("draggable", "true")
        a.ondragstart = (ev: DragEvent) => {
            ev.dataTransfer.setData("id", elem.id);
        }


        li.appendChild(a);
        a.appendChild(span);
        a.appendChild(latx1);
        



        //console.log(document.getElementById(z), z);
        document.getElementById(z).appendChild(li);
    });
}

//Statische hinzufügen
addElements(naturalNumbers_Sta, 'axiomDivElements');
addElements(booleanValues_Sta, 'booleanValuesDivElements');
addElements(Signatur_Array_Sta, 'signaturDivElements');
addElements(Rekursive_Sta, 'rekursiveDivElements');
//addElements(Paar_Sta, 'paareDivElements');
addElements(Referenz_Sta, 'referenzDivElements');
addElements(funktionArray_Sta, 'funktionDivElements');


//Dynamische hinzufügen
addElements(naturalNumbers_Dyn, 'axiomDivElements2');
addElements(booleanValues_Dyn, 'booleanValuesDivElements_dyn');
addElements(Umgebung_Array_Dyn, 'umgebungDivElements');
addElements(Rekursive_Dyn, 'rekursiveDiv_dynDivElements');
addElements(Referenz_Dyn, 'referenzDivElements_dyn');
addElements(funktionArray_Dyn, 'funktionDivElements_dyn');
(document.querySelector("#dynamic_rules") as HTMLElement).style.display = "none"

document.body.querySelector("#input-mode").addEventListener('change', function () {
    if (this.checked) {
        (document.querySelector("#static_rules") as HTMLElement).style.display = "none";
        (document.querySelector("#dynamic_rules") as HTMLElement).style.display = "block";
        (document.querySelector("#toggleStatisch") as HTMLElement).style.display = "none";
        (document.querySelector("#toggleDynamisch") as HTMLElement).style.display = "block";
        (document.getElementById("mySidenav") as HTMLElement).style.width = "0";
        (document.getElementById("container") as HTMLElement).style.marginLeft= "0";
        
    } else {
        (document.querySelector("#dynamic_rules") as HTMLElement).style.display = "none";
        (document.querySelector("#static_rules") as HTMLElement).style.display = "block";
        (document.querySelector("#toggleDynamisch") as HTMLElement).style.display = "none";
        (document.querySelector("#toggleStatisch") as HTMLElement).style.display = "block";
        (document.getElementById("mySidenav2") as HTMLElement).style.width="0";
        (document.getElementById("container") as HTMLElement).style.marginLeft= "0";
    }
})

const REAL_RULES = naturalNumbers_Sta.concat(booleanValues_Sta, Signatur_Array_Sta, Rekursive_Sta, Referenz_Sta, funktionArray_Sta, naturalNumbers_Dyn, booleanValues_Dyn, Umgebung_Array_Dyn, Rekursive_Dyn, Referenz_Dyn, funktionArray_Dyn)
launcher(REAL_RULES)