/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ (() => {

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./app.ts":
    /*!****************!*\
      !*** ./app.ts ***!
      \****************/

    /***/
    function appTs(__unused_webpack_module, exports, __nested_webpack_require_283__) {
      var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var __generator = this && this.__generator || function (thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };

      exports.__esModule = true;

      var Expr_1 = __nested_webpack_require_283__(
      /*! ./models/values/Expr */
      "./models/values/Expr.ts");

      var Nat_1 = __nested_webpack_require_283__(
      /*! ./models/values/Nat */
      "./models/values/Nat.ts");

      var ExprRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/ExprRule */
      "./models/rules/ExprRule.ts");

      var AxiomRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/AxiomRule */
      "./models/rules/AxiomRule.ts");

      var Rule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/Rule */
      "./models/rules/Rule.ts");

      var Context_1 = __nested_webpack_require_283__(
      /*! ./models/context/Context */
      "./models/context/Context.ts");

      var Bool_1 = __nested_webpack_require_283__(
      /*! ./models/values/Bool */
      "./models/values/Bool.ts");

      var Let_1 = __nested_webpack_require_283__(
      /*! ./models/values/Let */
      "./models/values/Let.ts");

      var LetRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/LetRule */
      "./models/rules/LetRule.ts");

      var FunDeclRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/FunDeclRule */
      "./models/rules/FunDeclRule.ts");

      var FunCallRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/FunCallRule */
      "./models/rules/FunCallRule.ts");

      var Stmt_1 = __nested_webpack_require_283__(
      /*! ./models/values/Stmt */
      "./models/values/Stmt.ts");

      var StmtRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/StmtRule */
      "./models/rules/StmtRule.ts");

      var StateRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/StateRule */
      "./models/rules/StateRule.ts");

      var SemicolonRule_1 = __nested_webpack_require_283__(
      /*! ./models/rules/SemicolonRule */
      "./models/rules/SemicolonRule.ts");

      var parser_1 = __nested_webpack_require_283__(
      /*! ./parser/parser */
      "./parser/parser.ts");

      window.$opt = function (value) {
        return value || {};
      };

      window.$k = function (name) {
        return "<span class='m-keyword'>" + name + "</span>";
      };

      window.$t = function (name, options) {
        return "<span class='m-type " + $opt(options).id + "'>" + name + "</span>";
      };

      window.$v = function (name, options) {
        return "<span class='m-val " + $opt(options).id + "'>" + name + "</span>";
      };

      window.$m = function (name, options) {
        return "<span class='m-memory " + $opt(options).id + "'>" + name + "</span>";
      };

      window.$i = function (name) {
        return "<span class='m-icon'>" + name + "</span>";
      };

      window.$e = function (name, options) {
        return $opt(options).skip ? "<span id='" + options.id + "'>" + name + "</span>" : "<span class='m-error' title='" + options.msg + "'>" + name + "</span>";
      };

      window.$s = function (name, options) {
        return name == null ? "<span class='m-stmt m-stmt-empty' id=" + $opt(options).id + "></span>" : "<span class='m-stmt' id=" + $opt(options).id + ">" + name + "</span>";
      };

      var rules = [new AxiomRule_1.AxiomRule(), new ExprRule_1.ExprBinaryRule(), new ExprRule_1.ExprBracketRule(), new StmtRule_1.StmtBracketRule(), new ExprRule_1.ExprIfRule(), new LetRule_1.LetRule(), new LetRule_1.InRule(), new FunDeclRule_1.FunDeclRule(), new FunCallRule_1.AnonymeFunDeclRule(), new FunCallRule_1.FunCallRule(), new StateRule_1.RefRule(), new StateRule_1.BangRule(), new StateRule_1.AssignRule(), new SemicolonRule_1.SemicolonRule()]; //let rec f (x: Nat): Nat = if x = 0 then 0 else x + f (x - 1) in f 0

      var statements = [//new Statement(new In(new RecFunDecl("f", new Param("x", new TypeNat()), new ExprIf(new Equals(new VarUse("x"), new NatConst(0)), new NatConst(0), new Plus(new VarUse("x"), new FunCall(new VarUse("f"), new Minus(new VarUse("x"), new NatConst(1))))), new TypeNat()), new FunCall(new VarUse("f"), new NatConst(0))), new Signature()),
      //new Statement(new GreaterOrEquals(new NatConst(1), new NatConst(2)),new Signature()),
      //new Statement(new ExprIf(new BoolConst(true), new Plus(new BoolConst(true), new NatConst(2)), new Plus(new NatConst(3), new NatConst(4))), new Signature()),
      //new Statement(new ExprIf(new Equals(new NatConst(0), new NatConst(0)), new Less(new NatConst(1), new NatConst(2)), new Greater(new NatConst(3), new NatConst(4))),new Signature()),
      new Rule_1.Statement(new Let_1.In(new Let_1.Let("x", new Bool_1.BoolConst(true)), new Let_1.In(new Let_1.Let("y", new Nat_1.NatConst(1)), new Nat_1.Plus(new Let_1.VarUse("x"), new Let_1.VarUse("y")))), new Context_1.Signature()) //new Statement(new In(new FunDecl("f", new Param("x", new TypeNat()), new Times(new VarUse("x"), new VarUse("x")), new TypeNat()), new FunCall(new VarUse('f'), new NatConst(2))), new Signature()),
      //new Statement(new FunCall(new ExprBracket(new AnonymeFunDecl(new Param("x", new TypeNat()), new Times(new VarUse("x"), new VarUse("x")))), new NatConst(4)), new Signature()),
      //new Statement(new In(new RecFunDecl("factorial", new Param("n", new TypeNat()), new ExprIf(new Equals(new VarUse("n"), new NatConst(0)), new NatConst(1), new Times(new ExprBracket(new FunCall(new VarUse("factorial"), new ExprBracket(new Minus(new VarUse("n"), new NatConst(1))))), new VarUse("n"))), new TypeNat()), new FunCall(new VarUse('factorial'), new NatConst(2))), new Signature()),
      //new Statement(new In(new Let("x", new Ref(new Ref(new NatConst(1)))), new Semicolon(new Assign(new VarUse("x"), new Ref(new NatConst(2))), new Bang(new Bang(new VarUse("x"))))), new Signature()),
      //new Statement( new Ref(new Ref(new NatConst(1))), new Signature()),
      ];

      function getRule(rules, stmt) {
        return rules.find(function (r) {
          return r.match(stmt);
        });
      }

      function derive(stmt) {
        var _this = this;

        var rule = getRule(rules, stmt);
        var upperStmts = rule.apply(stmt);
        console.log(stmt, stmt.toString());
        var fraction = createExprElement(stmt.toString());
        var hr = document.createElement('hr');
        hr.style.width = '100%';
        var nummerator = document.createElement('div');
        nummerator.style.display = 'flex';
        nummerator.style.justifyContent = 'space-between';

        if (stmt.isStatic() ? stmt.isTypeCorrect() : true) {
          fraction.appendChild(hr);
          fraction.appendChild(nummerator);

          var _ = function (_) {
            return __awaiter(_this, void 0, void 0, function () {
              var _loop_1, i;

              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    _loop_1 = function _loop_1(i) {
                      var s, fraction_1;
                      return __generator(this, function (_b) {
                        switch (_b.label) {
                          case 0:
                            s = upperStmts[i];
                            fraction_1 = createExprElement(s.toString());
                            nummerator.appendChild(fraction_1);
                            return [4
                            /*yield*/
                            , sleep((i + 1) * 3000)];

                          case 1:
                            _b.sent();

                            if (s instanceof Rule_1.Statement) {
                              setTimeout(function (_) {
                                nummerator.replaceChild(derive(s), fraction_1);
                              }, 1000);
                            } else {
                              s.listen(function (stmt) {
                                var newFraction = createExprElement(stmt.toString());
                                nummerator.replaceChild(newFraction, fraction_1);
                                setTimeout(function (_) {
                                  nummerator.replaceChild(derive(stmt), newFraction);
                                }, 1000);
                              });
                            }

                            return [2
                            /*return*/
                            ];
                        }
                      });
                    };

                    i = 0;
                    _a.label = 1;

                  case 1:
                    if (!(i < upperStmts.length)) return [3
                    /*break*/
                    , 4];
                    return [5
                    /*yield**/
                    , _loop_1(i)];

                  case 2:
                    _a.sent();

                    _a.label = 3;

                  case 3:
                    i++;
                    return [3
                    /*break*/
                    , 1];

                  case 4:
                    return [2
                    /*return*/
                    , null];
                }
              });
            });
          }();
        }

        return rule instanceof ExprRule_1.ExprBracketRule || rule instanceof StmtRule_1.StmtBracketRule ? nummerator : fraction;
      }

      function createExprElement(stmt) {
        var fraction = document.createElement('div');
        fraction.style.display = 'flex';
        fraction.style.flexDirection = 'column-reverse';
        fraction.style.alignItems = 'center';
        fraction.style.width = 'max-content';
        fraction.style.margin = '5px';
        var denominator = document.createElement('span');
        denominator.style.paddingLeft = '5px';
        denominator.style.paddingRight = '5px';
        denominator.innerHTML = stmt;
        fraction.appendChild(denominator);
        return fraction;
      }

      function sleep(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      }

      window.launcher = function (REAL_RULES) {
        document.querySelector('#code').addEventListener('keypress', function (e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            console.log(this);
            this.value = this.value.trim();
            document.querySelector('#confirm').click();
          }
        });
        document.querySelector('#confirm').addEventListener('click', function () {
          //console.log(REAL_RULES)confirm
          var run = function run(statement) {
            Context_1.TypeVariable.counter = 0;
            Context_1.ValVariable.counter = 0;
            var content = document.querySelector("#content");
            content.innerHTML = '';
            content.style.display = 'flex'; // content.style.flexWrap = 'wrap'
            // content.style.justifyContent = 'center'

            content.style.fontSize = '17px';
            content.style.marginTop = '15px';
            content.style.overflowX = 'auto';
            var fraction = createExprElement(statement);
            fraction.style.border = '1px solid';
            fraction.style.padding = '5px';
            content.appendChild(fraction);
            bindEvent(statement, fraction, REAL_RULES);
            document.querySelector("#input-mode").addEventListener('change', function () {
              this.parentElement.parentElement.querySelector('h3').innerText = this.checked ? 'Dynamische Semantik' : 'Statische Semantik';
              content.innerHTML = '';
              run(new Rule_1.Statement(statement.getProg().clone(), this.checked ? new Context_1.Environment({}, new Context_1.Memory()) : new Context_1.Signature()));
            });
          };

          var code = document.querySelector('#code').value.trim();
          var prog = (0, parser_1.parse)(code);
          console.log(code, prog);
          run(new Rule_1.Statement(prog, document.querySelector("#input-mode").checked ? new Context_1.Environment({}, new Context_1.Memory()) : new Context_1.Signature()));
        });
        document.querySelector("#input-mode").addEventListener('change', function () {
          this.parentElement.parentElement.querySelector('h3').innerText = this.checked ? 'Dynamische Semantik' : 'Statische Semantik';
        });
      };

      function bindEvent(stmt, fraction, REAL_RULES) {
        fraction.setAttribute("id", stmt.getHash()); // skip brackets

        while (stmt.getProg() instanceof Expr_1.ExprBracket || stmt.getProg() instanceof Stmt_1.StmtBracket) {
          var prog = stmt.getProg();
          stmt = new Rule_1.Statement(prog instanceof Expr_1.ExprBracket ? prog.getExpr() : prog.getStmt(), stmt.getContext());
        }

        fraction.ondragover = function (ev) {
          ev.preventDefault();
        };

        fraction.ondrop = function (ev) {
          ev.preventDefault();
          var id = ev.dataTransfer.getData("id");
          var rule = findTypedRule(REAL_RULES.find(function (rr) {
            return rr.id == id;
          }).rule);
          if (rule instanceof AxiomRule_1.AxiomRule || rule instanceof ExprRule_1.ExprBinaryRule) rule.setRuleType(REAL_RULES.find(function (rr) {
            return rr.id == id;
          }).rule.getRuleType());

          if (rule.match(stmt)) {
            applyRule(stmt, fraction, rule, REAL_RULES);
            fraction.ondrop = null;
            fraction.ondragover = null;
          } //ev.target.appendChild(document.getElementById(data));

        };
      }

      function findTypedRule(rule) {
        return rules.find(function (r) {
          return r.constructor.name == rule.constructor.name;
        });
      }

      function applyRule(stmt, fraction, rule, REAL_RULES) {
        var upperStmts = rule.apply(stmt); //console.log(stmt, stmt.toString())

        var hr = document.createElement('hr');
        hr.style.width = '100%';
        var nummerator = document.createElement('div');
        nummerator.style.display = 'flex';
        nummerator.style.justifyContent = 'space-between';

        if (stmt.isStatic() ? stmt.isTypeCorrect() : true) {
          fraction.appendChild(hr);
          fraction.appendChild(nummerator);

          var _loop_2 = function _loop_2(i) {
            var s = upperStmts[i];
            var fraction_2 = createExprElement(s.toString());
            nummerator.appendChild(fraction_2);

            if (s instanceof Rule_1.Statement) {
              bindEvent(s, fraction_2, REAL_RULES);
            } else {
              s.listen(function (stmt) {
                var newFraction = createExprElement(stmt.toString());
                nummerator.replaceChild(newFraction, fraction_2);
                bindEvent(stmt, newFraction, REAL_RULES);
              });
            }
          };

          for (var i = 0; i < upperStmts.length; i++) {
            _loop_2(i);
          }
        }

        return fraction;
      }
      /***/

    },

    /***/
    "./models/context/Context.ts":
    /*!***********************************!*\
      !*** ./models/context/Context.ts ***!
      \***********************************/

    /***/
    function modelsContextContextTs(__unused_webpack_module, exports) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      var __assign = this && this.__assign || function () {
        __assign = Object.assign || function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return __assign.apply(this, arguments);
      };

      exports.__esModule = true;
      exports.ValVariable = exports.ValAddress = exports.ValUnit = exports.ValRecFun = exports.ValFun = exports.PVal = exports.Val = exports.TypeUnit = exports.TypeRef = exports.TypeFun = exports.TypeVariable = exports.TypeString = exports.TypeBool = exports.TypeNat = exports.Memory = exports.Environment = exports.SignatureVariable = exports.Signature = void 0;

      var Signature =
      /** @class */
      function () {
        function Signature(context) {
          if (context === void 0) {
            context = {};
          }

          this.context = context;
        }

        Signature.prototype.clone = function () {
          return new Signature(__assign({}, this.context));
        };

        Signature.prototype.get = function (ident) {
          return this.context[ident];
        };

        Signature.prototype.put = function (ident, type) {
          this.context[ident] = type;
          return this;
        };

        Signature.prototype.getContext = function () {
          return this.context;
        };

        Signature.prototype.merge = function (e) {
          this.context = __assign(__assign({}, this.context), e.getContext());
          return this;
        };

        Signature.prototype.getHash = function () {
          var _this = this;

          var tmp = Object.keys(this.context).reduce(function (acc, ident) {
            return acc + ", " + ident + " " + $i('&#x21A6;') + " " + _this.get(ident).toString();
          }, "");
          return "{ " + tmp.substr(2) + " }";
        };

        Signature.prototype.toString = function () {
          return this.getHash();
        };

        return Signature;
      }();

      exports.Signature = Signature;

      var SignatureVariable =
      /** @class */
      function () {
        function SignatureVariable(value) {
          SignatureVariable.counter++;
          this.name = "&Sigma;<sub>" + SignatureVariable.counter + "</sub>";
          this.id = btoa(this.name + Date.now());
          this.setSignature(value);
        }

        SignatureVariable.prototype.getName = function () {
          return this.name;
        };

        SignatureVariable.prototype.getSignature = function () {
          return this.signature;
        };

        SignatureVariable.prototype.setSignature = function (value) {
          if (this.signature == null) {
            var id = CSS.escape(this.id);
            if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
              return e.outerHTML = value.toString();
            });
            this.signature = value;
          }

          return this;
        };

        SignatureVariable.prototype.isAssigned = function () {
          return this.signature != null;
        };

        SignatureVariable.prototype.equals = function (value) {
          if (!(value instanceof SignatureVariable)) return false;
          return value.getHash() == this.getHash();
        };

        SignatureVariable.prototype.getHash = function () {
          return this.signature == null ? this.getName() : this.signature.getHash();
        };

        SignatureVariable.prototype.toString = function () {
          return this.signature != null ? this.signature.toString() : $t(this.name, {
            id: this.id
          });
        };

        SignatureVariable.prototype.clone = function () {
          return new SignatureVariable();
        };

        SignatureVariable.counter = 0;
        return SignatureVariable;
      }();

      exports.SignatureVariable = SignatureVariable;

      var Environment =
      /** @class */
      function () {
        function Environment(context, memory) {
          if (context === void 0) {
            context = {};
          }

          if (memory === void 0) {
            memory = null;
          }

          this.context = context;
          this.memory = memory;
        }

        Environment.prototype.clone = function (withMemory) {
          if (withMemory === void 0) {
            withMemory = false;
          }

          return new Environment(__assign({}, this.context), withMemory ? this.memory.clone() : this.memory);
        };

        Environment.prototype.get = function (ident) {
          return this.context[ident];
        };

        Environment.prototype.put = function (ident, val) {
          this.context[ident] = val;
          return this;
        };

        Environment.prototype.getContext = function () {
          return this.context;
        };

        Environment.prototype.merge = function (e) {
          this.context = __assign(__assign({}, this.context), e.getContext());
          return this;
        };

        Environment.prototype.getMemory = function () {
          return this.memory;
        };

        Environment.prototype.toString = function () {
          var _this = this;

          var tmp = Object.keys(this.context).reduce(function (acc, ident) {
            return acc + "," + ident + " " + $i('&#x21A6;') + " " + _this.get(ident).toString();
          }, "");
          return "{ " + tmp.substr(1) + " }"; //+ (Environment.memory == null ? "" : (" &boxV; " + Environment.memory.toString()))
        };

        return Environment;
      }();

      exports.Environment = Environment;

      var Memory =
      /** @class */
      function () {
        function Memory(context) {
          if (context === void 0) {
            context = {};
          }

          Memory.memoryCounter++;
          this.id = "memory-" + Memory.memoryCounter;
          this.context = context;
        }

        Memory.prototype.clone = function () {
          return new Memory(__assign({}, this.context));
        };

        Memory.prototype.get = function (ident) {
          return this.context[ident];
        };

        Memory.prototype.put = function (ident, val) {
          var _this = this; //if (!(Object.keys(this.context) as any).includes(ident))
          //throw Error("The address \"" + ident + "\" is unallocated")


          this.context[ident] = val;
          var id = CSS.escape(this.id);
          if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
            return e.outerHTML = _this.toString();
          });
          return this;
        };

        Memory.prototype.allocate = function () {
          Memory.counter++;
          var address = "a<sub memory=" + this.id + ">" + Memory.counter + "</sub>"; //this.context[address] = null

          return address;
        };

        Memory.prototype.getContext = function () {
          return this.context;
        };

        Memory.prototype.merge = function (e) {
          this.context = __assign(__assign({}, this.context), e.getContext());
          return this;
        };

        Memory.prototype.toString = function () {
          var _this = this;

          var tmp = Object.keys(this.context).reduce(function (acc, ident) {
            return _this.get(ident) == null ? acc : acc + "," + ident + " " + $i('&#x21A6;') + " " + _this.get(ident).toString();
          }, "");
          return $m("{" + tmp.substr(1) + "}", {
            id: this.id
          });
        };

        Memory.counter = 0;
        Memory.memoryCounter = 0;
        return Memory;
      }();

      exports.Memory = Memory;

      var TypeNat =
      /** @class */
      function () {
        function TypeNat() {}

        TypeNat.prototype.getHash = function () {
          return "Nat";
        };

        TypeNat.prototype.toString = function () {
          return $t(this.getHash());
        };

        TypeNat.prototype.equals = function (value) {
          return value.getHash() == this.getHash();
        };

        TypeNat.prototype.clone = function () {
          return new TypeNat();
        };

        return TypeNat;
      }();

      exports.TypeNat = TypeNat;

      var TypeBool =
      /** @class */
      function () {
        function TypeBool() {}

        TypeBool.prototype.getHash = function () {
          return "Bool";
        };

        TypeBool.prototype.toString = function () {
          return $t(this.getHash());
        };

        TypeBool.prototype.equals = function (value) {
          return value.getHash() == this.getHash();
        };

        TypeBool.prototype.clone = function () {
          return new TypeBool();
        };

        return TypeBool;
      }();

      exports.TypeBool = TypeBool;

      var TypeString =
      /** @class */
      function () {
        function TypeString() {}

        TypeString.prototype.getHash = function () {
          return "String";
        };

        TypeString.prototype.toString = function () {
          return $t(this.getHash());
        };

        TypeString.prototype.equals = function (value) {
          return value.getHash() == this.getHash();
        };

        TypeString.prototype.clone = function () {
          return new TypeString();
        };

        return TypeString;
      }();

      exports.TypeString = TypeString;

      var TypeVariable =
      /** @class */
      function () {
        function TypeVariable() {
          this.listeners = {};
          TypeVariable.counter++;
          this.name = "t<sub>" + TypeVariable.counter + "</sub>";
          this.id = btoa(this.name + Date.now());
        }

        TypeVariable.prototype.getName = function () {
          return this.name;
        };

        TypeVariable.prototype.getType = function () {
          return this.type;
        };

        TypeVariable.prototype.setType = function (value) {
          var _this = this;

          if (this.type == null && value != null) {
            var id = CSS.escape(this.id);
            if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
              return e.outerHTML = value.toString();
            });
            this.type = value;
            Object.keys(this.listeners).forEach(function (k) {
              return _this.listeners[k](_this.type);
            });
          }
        };

        TypeVariable.prototype.isAssigned = function () {
          return this.type != null;
        };

        TypeVariable.prototype.listen = function (key, listener) {
          if (this.type) listener(this.type);
          this.listeners[key] = listener;
          return this;
        };

        TypeVariable.prototype.equals = function (value) {
          if (value instanceof SignatureVariable) return false;
          if (this.type == null) return true;
          return value instanceof TypeVariable ? value.getType().equals(this.getType()) : value.equals(this.type);
        };

        TypeVariable.prototype.getHash = function () {
          return this.type == null ? $t(this.name, {
            id: this.id
          }) : this.type.getHash();
        };

        TypeVariable.prototype.toString = function () {
          return this.type != null ? this.type.toString() : $t(this.name, {
            id: this.id
          });
        };

        TypeVariable.prototype.clone = function () {
          return new TypeVariable();
        };

        TypeVariable.counter = 0;
        return TypeVariable;
      }();

      exports.TypeVariable = TypeVariable;

      var TypeFun =
      /** @class */
      function () {
        function TypeFun(paramType, bodyType) {
          this.paramType = paramType;
          this.bodyType = bodyType;
        }

        TypeFun.prototype.getParamType = function () {
          return this.paramType;
        };

        TypeFun.prototype.getBodyType = function () {
          return this.bodyType;
        };

        TypeFun.prototype.setBodyType = function (value) {
          this.bodyType = value;
        };

        TypeFun.prototype.equals = function (value) {
          if (value instanceof TypeFun) {
            var valueFun = value;
            if (this.getParamType() instanceof TypeVariable) return this.getBodyType().equals(valueFun.getBodyType());
            if (this.getBodyType() instanceof TypeVariable) return this.getParamType().equals(valueFun.getParamType());
            return true;
          }

          return value.getHash() == this.getHash();
        };

        TypeFun.prototype.getHash = function () {
          return this.getParamType().toString() + " " + $i('&#x21A6;') + " " + this.getBodyType().toString();
        };

        TypeFun.prototype.toString = function () {
          return $t(this.getHash());
        };

        TypeFun.prototype.clone = function () {
          return new TypeFun(this.getParamType().clone(), this.getBodyType().clone());
        };

        return TypeFun;
      }();

      exports.TypeFun = TypeFun;

      var TypeRef =
      /** @class */
      function () {
        function TypeRef(type) {
          this.type = type;
        }

        TypeRef.prototype.getType = function () {
          return this.type;
        };

        TypeRef.prototype.equals = function (value) {
          if (value instanceof TypeRef) return this.getType().equals(value.getType());
          return this.type instanceof TypeVariable ? this.type.equals(value) : value.getHash() == this.getHash();
        };

        TypeRef.prototype.getHash = function () {
          return "Ref &lt;" + this.type.getHash() + "&gt;";
        };

        TypeRef.prototype.toString = function () {
          return $t(this.getHash());
        };

        TypeRef.prototype.clone = function () {
          return new TypeRef(this.getType().clone());
        };

        return TypeRef;
      }();

      exports.TypeRef = TypeRef;

      var TypeUnit =
      /** @class */
      function () {
        function TypeUnit() {}

        TypeUnit.prototype.getHash = function () {
          return "Unit";
        };

        TypeUnit.prototype.toString = function () {
          return $t(this.getHash());
        };

        TypeUnit.prototype.equals = function (value) {
          return value.getHash() == this.getHash();
        };

        TypeUnit.prototype.clone = function () {
          return new TypeUnit();
        };

        return TypeUnit;
      }();

      exports.TypeUnit = TypeUnit;

      var Val =
      /** @class */
      function () {
        function Val() {
          this.memory = new Memory();
        }

        Val.prototype.setMemory = function (memory) {
          this.memory = memory;
        };

        Val.prototype.getMemory = function () {
          return this.memory;
        };

        return Val;
      }();

      exports.Val = Val;

      var PVal =
      /** @class */
      function (_super) {
        __extends(PVal, _super);

        function PVal(value) {
          var _this = _super.call(this) || this;

          _this.value = value;
          return _this;
        }

        PVal.prototype.getValue = function () {
          return this.value;
        };

        PVal.prototype.toString = function () {
          if (typeof this.getValue() === 'number') return "" + this.getValue();
          if (typeof this.getValue() === 'boolean') return this.getValue() ? "true" : "false";
          return '"' + this.getValue() + '"';
        };

        PVal.prototype.clone = function () {
          return new PVal(this.getValue());
        };

        return PVal;
      }(Val);

      exports.PVal = PVal;

      var ValFun =
      /** @class */
      function (_super) {
        __extends(ValFun, _super);

        function ValFun(env, param, body) {
          var _this = _super.call(this) || this;

          _this.env = env;
          _this.param = param;
          _this.body = body;
          return _this;
        }

        ValFun.prototype.getEnv = function (clone) {
          if (clone === void 0) {
            clone = false;
          }

          return clone ? this.env.clone() : this.env;
        };

        ValFun.prototype.getBody = function () {
          return this.body;
        };

        ValFun.prototype.getParam = function () {
          return this.param;
        };

        ValFun.prototype.toString = function () {
          return "<" + this.env.toString() + ", " + this.param.getName() + ", " + this.body.toString() + ">";
        };

        ValFun.prototype.clone = function () {
          return new ValFun(this.getEnv().clone(), this.getParam().clone(), this.getBody().clone());
        };

        return ValFun;
      }(Val);

      exports.ValFun = ValFun;

      var ValRecFun =
      /** @class */
      function (_super) {
        __extends(ValRecFun, _super);

        function ValRecFun(env, funName, param, body) {
          var _this = _super.call(this, env, param, body) || this;

          _this.funName = funName;
          return _this;
        }

        ValRecFun.prototype.getFunName = function () {
          return this.funName;
        };

        ValRecFun.prototype.toString = function () {
          return "<" + this.getEnv().toString() + ", " + this.getFunName() + ", " + this.getParam().getName() + ", " + this.getBody().toString() + ">";
        };

        ValRecFun.prototype.clone = function () {
          return new ValRecFun(this.getEnv().clone(), this.getFunName(), this.getParam().clone(), this.getBody().clone());
        };

        return ValRecFun;
      }(ValFun);

      exports.ValRecFun = ValRecFun;

      var ValUnit =
      /** @class */
      function (_super) {
        __extends(ValUnit, _super);

        function ValUnit() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        ValUnit.prototype.toString = function () {
          return "()";
        };

        ValUnit.prototype.clone = function () {
          return new ValUnit();
        };

        return ValUnit;
      }(Val);

      exports.ValUnit = ValUnit;

      var ValAddress =
      /** @class */
      function (_super) {
        __extends(ValAddress, _super);

        function ValAddress(address) {
          var _this = _super.call(this) || this;

          _this.address = address;
          return _this;
        }

        ValAddress.prototype.getAddress = function () {
          return this.address;
        };

        ValAddress.prototype.toString = function () {
          return this.address;
        };

        ValAddress.prototype.clone = function () {
          return new ValAddress(this.getAddress());
        };

        return ValAddress;
      }(Val);

      exports.ValAddress = ValAddress;

      var ValVariable =
      /** @class */
      function (_super) {
        __extends(ValVariable, _super);

        function ValVariable(val) {
          var _this = _super.call(this) || this;

          _this.listeners = {};
          _this.val = val;
          ValVariable.counter++;
          _this.name = "n<sub>" + ValVariable.counter + "</sub>";
          _this.id = btoa(_this.name + Date.now());
          return _this;
        }

        ValVariable.prototype.getVal = function () {
          return this.val;
        };

        ValVariable.prototype.setVal = function (val) {
          var _this = this;

          if (val == null || this.val != null) return;
          if (this.val == null) this.val = val;else {
            if (this.val instanceof Val) {
              if (!(val instanceof Val)) throw Error("val should be of type \"Val\"");
              this.val = val;
            }

            if (this.val instanceof Environment) {
              if (!(val instanceof Environment)) throw Error("val should be of type \"Environment\"");
              this.val.merge(val);
            }
          }
          var id = CSS.escape(this.id);
          if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
            return e.outerHTML = _this.val.toString();
          });
          Object.keys(this.listeners).forEach(function (k) {
            return _this.listeners[k](_this.val);
          });
          return this;
        };

        ValVariable.prototype.listen = function (key, listener) {
          if (this.val) listener(this.val);
          this.listeners[key] = listener;
          return this;
        };

        ValVariable.prototype.setToString = function (toString) {
          var id = CSS.escape(this.id);
          if (document.querySelector("." + id) && !this._toString) document.querySelectorAll("." + id).forEach(function (e) {
            return e.innerHTML = toString;
          });
          this._toString = toString;
        };

        ValVariable.prototype.toString = function () {
          return this.val == null ? $v(this._toString || this.name, {
            id: this.id
          }) : $v(this.val.toString(), {
            id: this.id
          });
        };

        ValVariable.prototype.clone = function () {
          return new ValVariable(this.getVal());
        };

        ValVariable.counter = 0;
        return ValVariable;
      }(Val);

      exports.ValVariable = ValVariable;
      /***/
    },

    /***/
    "./models/rules/AxiomRule.ts":
    /*!***********************************!*\
      !*** ./models/rules/AxiomRule.ts ***!
      \***********************************/

    /***/
    function modelsRulesAxiomRuleTs(__unused_webpack_module, exports, __nested_webpack_require_41610__) {
      exports.__esModule = true;
      exports.AxiomRule = void 0;

      var Nat_1 = __nested_webpack_require_41610__(
      /*! ../values/Nat */
      "./models/values/Nat.ts");

      var Bool_1 = __nested_webpack_require_41610__(
      /*! ../values/Bool */
      "./models/values/Bool.ts");

      var String_1 = __nested_webpack_require_41610__(
      /*! ../values/String */
      "./models/values/String.ts");

      var Let_1 = __nested_webpack_require_41610__(
      /*! ../values/Let */
      "./models/values/Let.ts");

      var Context_1 = __nested_webpack_require_41610__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var AxiomRule =
      /** @class */
      function () {
        function AxiomRule() {}

        AxiomRule.prototype.apply = function (stmt) {
          if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null || stmt.getExpectedS() instanceof Context_1.TypeVariable) stmt.setExpectedS(stmt.getProg().evaluateS(stmt.getContext(true)));else if (stmt.getExpectedS() instanceof Context_1.TypeFun) {
              var expectedFun = stmt.getExpectedS();
              if (expectedFun.getParamType() instanceof Context_1.TypeVariable || expectedFun.getBodyType() instanceof Context_1.TypeVariable) stmt.setExpectedS(stmt.getProg().evaluateS(stmt.getContext(true)));
            } else if (stmt.getExpectedS() instanceof Context_1.TypeRef) {
              var expectedRef = stmt.getExpectedS();
              if (expectedRef.getType() instanceof Context_1.TypeVariable) stmt.setExpectedS(stmt.getProg().evaluateS(stmt.getContext(true)));
            }
          } else {
            var prog = stmt.getProg();
            if (prog instanceof Nat_1.NatConst || prog instanceof Bool_1.BoolConst || prog instanceof String_1.StringConst || prog instanceof Let_1.VarUse) prog.compute(stmt.getContext());
          }

          return [];
        };

        AxiomRule.prototype.match = function (stmt) {
          var className = new Bool_1.BoolConst().constructor.name;
          return stmt.getProg() instanceof Bool_1.BoolConst && this.ruleType.constructor.name === className ? stmt.getProg().getValue() === this.ruleType.getValue() : stmt.getProg().constructor.name === this.ruleType.constructor.name;
        };

        AxiomRule.prototype.setRuleType = function (expr) {
          this.ruleType = expr;
          return this;
        };

        AxiomRule.prototype.getRuleType = function () {
          return this.ruleType;
        };

        return AxiomRule;
      }();

      exports.AxiomRule = AxiomRule;
      /***/
    },

    /***/
    "./models/rules/ExprRule.ts":
    /*!**********************************!*\
      !*** ./models/rules/ExprRule.ts ***!
      \**********************************/

    /***/
    function modelsRulesExprRuleTs(__unused_webpack_module, exports, __nested_webpack_require_44426__) {
      exports.__esModule = true;
      exports.ExprBracketRule = exports.ExprIfRule = exports.ExprBinaryRule = void 0;

      var Rule_1 = __nested_webpack_require_44426__(
      /*! ./Rule */
      "./models/rules/Rule.ts");

      var Expr_1 = __nested_webpack_require_44426__(
      /*! ../values/Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_44426__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Bool_1 = __nested_webpack_require_44426__(
      /*! ../values/Bool */
      "./models/values/Bool.ts");

      var ExprBinaryRule =
      /** @class */
      function () {
        function ExprBinaryRule() {}

        ExprBinaryRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();
          var leftType = prog.getLeft().getExpectedS();

          if (stmt.isStatic()) {
            stmt.setExpectedS(prog.getExpectedS());
            leftType = stmt.getProg() instanceof Bool_1.Equals || stmt.getProg() instanceof Bool_1.Unequals ? prog.getLeft().getExpectedS() : new Context_1.TypeNat();
          }

          return [new Rule_1.Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(leftType), new Rule_1.Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(leftType)];
        };

        ExprBinaryRule.prototype.match = function (stmt) {
          return stmt.getProg().constructor.name === this.ruleType.constructor.name; //stmt.getProg() instanceof ExprBinary 
        };

        ExprBinaryRule.prototype.setRuleType = function (expr) {
          this.ruleType = expr;
          return this;
        };

        ExprBinaryRule.prototype.getRuleType = function () {
          return this.ruleType;
        };

        return ExprBinaryRule;
      }();

      exports.ExprBinaryRule = ExprBinaryRule;

      var ExprIfRule =
      /** @class */
      function () {
        function ExprIfRule() {}

        ExprIfRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();

          if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());
          }

          if (stmt.isStatic()) return [new Rule_1.Statement(prog.getCond(), stmt.getContext(true)).setExpectedS(new Context_1.TypeBool()), new Rule_1.Statement(prog.getThen(), stmt.getContext(true)).setExpectedS(stmt.getExpectedS()), new Rule_1.Statement(prog.getElse(), stmt.getContext(true)).setExpectedS(stmt.getExpectedS())];else {
            var stmtVar_1 = new Rule_1.StatementVariable();
            prog.getCond().evaluateE(stmt.getContext(true)).listen(stmt.getHash(), function (val) {
              stmtVar_1.setStmt(val.getValue() ? new Rule_1.Statement(prog.getThen(), stmt.getContext(true)) : new Rule_1.Statement(prog.getElse(), stmt.getContext(true)));
            });
            return [new Rule_1.Statement(prog.getCond(), stmt.getContext(true)), stmtVar_1];
          }
        };

        ExprIfRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof Expr_1.ExprIf;
        };

        return ExprIfRule;
      }();

      exports.ExprIfRule = ExprIfRule;

      var ExprBracketRule =
      /** @class */
      function () {
        function ExprBracketRule() {}

        ExprBracketRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();
          return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true))];
        };

        ExprBracketRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof Expr_1.ExprBracket;
        };

        return ExprBracketRule;
      }();

      exports.ExprBracketRule = ExprBracketRule;
      /***/
    },

    /***/
    "./models/rules/FunCallRule.ts":
    /*!*************************************!*\
      !*** ./models/rules/FunCallRule.ts ***!
      \*************************************/

    /***/
    function modelsRulesFunCallRuleTs(__unused_webpack_module, exports, __nested_webpack_require_48371__) {
      exports.__esModule = true;
      exports.FunCallRule = exports.AnonymeFunDeclRule = void 0;

      var Rule_1 = __nested_webpack_require_48371__(
      /*! ./Rule */
      "./models/rules/Rule.ts");

      var Context_1 = __nested_webpack_require_48371__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var FunCall_1 = __nested_webpack_require_48371__(
      /*! ../values/FunCall */
      "./models/values/FunCall.ts");

      var Let_1 = __nested_webpack_require_48371__(
      /*! ../values/Let */
      "./models/values/Let.ts");

      var AnonymeFunDeclRule =
      /** @class */
      function () {
        function AnonymeFunDeclRule() {}

        AnonymeFunDeclRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();

          if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());
            var expectedFun = stmt.getExpectedS();
            return [new Rule_1.Statement(prog.getBody(), stmt.getContext(true).put(prog.getParam().getName(), prog.getParam().getType())).setExpectedS(expectedFun.getBodyType())];
          } else {
            return [];
          }
        };

        AnonymeFunDeclRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof FunCall_1.AnonymeFunDecl;
        };

        return AnonymeFunDeclRule;
      }();

      exports.AnonymeFunDeclRule = AnonymeFunDeclRule;

      var FunCallRule =
      /** @class */
      function () {
        function FunCallRule() {}

        FunCallRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();

          if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());

            if (prog.getFun() instanceof Let_1.VarUse) {
              var expectedFun = new Context_1.TypeFun(new Context_1.TypeVariable(), stmt.getExpectedS());
              return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)).setExpectedS(expectedFun), new Rule_1.Statement(prog.getArg(), stmt.getContext(true)).setExpectedS(expectedFun.getParamType())];
            } else {
              var expectedFun = prog.getFun().getExpectedS();
              expectedFun.setBodyType(stmt.getExpectedS());
              return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)).setExpectedS(expectedFun), new Rule_1.Statement(prog.getArg(), stmt.getContext(true)).setExpectedS(expectedFun.getParamType())];
            }
          } else {
            if (prog.getFun() instanceof Let_1.VarUse) {
              var fun = stmt.getContext().get(prog.getFun().getName());
              var arg = prog.getArg();
              return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)), new Rule_1.Statement(arg, stmt.getContext(true)), new Rule_1.Statement(fun.getBody(), (fun instanceof Context_1.ValRecFun ? fun.getEnv(true).put(fun.getFunName(), fun.clone()) : fun.getEnv(true)).put(fun.getParam().getName(), arg.evaluateE(stmt.getContext(true))))];
            } else {
              var fun = prog.getFun().evaluateE(stmt.getContext(true)).getVal();
              return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)), new Rule_1.Statement(prog.getArg(), stmt.getContext(true)), new Rule_1.Statement(fun.getBody(), fun.getEnv(true).put(fun.getParam().getName(), prog.getArg().evaluateE(stmt.getContext(true))))];
            }
          }
        };

        FunCallRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof FunCall_1.FunCall;
        };

        return FunCallRule;
      }();

      exports.FunCallRule = FunCallRule;
      /***/
    },

    /***/
    "./models/rules/FunDeclRule.ts":
    /*!*************************************!*\
      !*** ./models/rules/FunDeclRule.ts ***!
      \*************************************/

    /***/
    function modelsRulesFunDeclRuleTs(__unused_webpack_module, exports, __nested_webpack_require_52294__) {
      exports.__esModule = true;
      exports.FunDeclRule = void 0;

      var Rule_1 = __nested_webpack_require_52294__(
      /*! ./Rule */
      "./models/rules/Rule.ts");

      var FunDecl_1 = __nested_webpack_require_52294__(
      /*! ../values/FunDecl */
      "./models/values/FunDecl.ts");

      var Context_1 = __nested_webpack_require_52294__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var FunDeclRule =
      /** @class */
      function () {
        function FunDeclRule() {}

        FunDeclRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();
          var ctx = stmt.getContext(true);

          if (ctx instanceof Context_1.Signature) {
            ctx.merge(prog.evaluateS(stmt.getContext(true)));
            ctx.put(prog.getParam().getName(), prog.getParam().getType());
            return [new Rule_1.Statement(prog.getBody(), ctx).setExpectedS(prog.getReturnType())];
          } else {
            ctx.merge(prog.evaluateE(stmt.getContext(true)));
            return [];
          }
        };

        FunDeclRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof FunDecl_1.FunDecl;
        };

        return FunDeclRule;
      }();

      exports.FunDeclRule = FunDeclRule;
      /***/
    },

    /***/
    "./models/rules/LetRule.ts":
    /*!*********************************!*\
      !*** ./models/rules/LetRule.ts ***!
      \*********************************/

    /***/
    function modelsRulesLetRuleTs(__unused_webpack_module, exports, __nested_webpack_require_53840__) {
      exports.__esModule = true;
      exports.InRule = exports.LetRule = void 0;

      var Rule_1 = __nested_webpack_require_53840__(
      /*! ./Rule */
      "./models/rules/Rule.ts");

      var Let_1 = __nested_webpack_require_53840__(
      /*! ../values/Let */
      "./models/values/Let.ts");

      var Context_1 = __nested_webpack_require_53840__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var LetRule =
      /** @class */
      function () {
        function LetRule() {}

        LetRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();

          if (stmt.isStatic()) {
            var sv = stmt.getExpectedS() || new Context_1.SignatureVariable().setSignature(prog.evaluateS(stmt.getContext()));
            stmt.setExpectedS(sv);
            return [new Rule_1.Statement(prog.getValue(), stmt.getContext(true)).setExpectedS(sv.getSignature().get(prog.getName()))];
          }

          return [new Rule_1.Statement(prog.getValue(), stmt.getContext(true))];
        };

        LetRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof Let_1.Let;
        };

        return LetRule;
      }();

      exports.LetRule = LetRule;

      var InRule =
      /** @class */
      function () {
        function InRule() {}

        InRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();
          var left = new Rule_1.Statement(prog.getLeft(), stmt.getContext(true));

          if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());
            var sv = new Context_1.SignatureVariable().setSignature(prog.getLeft().evaluateS(stmt.getContext()));
            return [left.setExpectedS(sv), new Rule_1.Statement(prog.getRight(), stmt.getContext(true).merge(sv.getSignature())).setExpectedS(stmt.getExpectedS())];
          } else {
            return [left, new Rule_1.Statement(prog.getRight(), stmt.getContext(true).merge(left.evaluateE()))];
          }
        };

        InRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof Let_1.In;
        };

        return InRule;
      }();

      exports.InRule = InRule;
      /***/
    },

    /***/
    "./models/rules/Rule.ts":
    /*!******************************!*\
      !*** ./models/rules/Rule.ts ***!
      \******************************/

    /***/
    function modelsRulesRuleTs(__unused_webpack_module, exports, __nested_webpack_require_56309__) {
      exports.__esModule = true;
      exports.StatementVariable = exports.Statement = void 0;

      var Context_1 = __nested_webpack_require_56309__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Expr_1 = __nested_webpack_require_56309__(
      /*! ../values/Expr */
      "./models/values/Expr.ts");

      var Statement =
      /** @class */
      function () {
        function Statement(prog, context) {
          this.context = context;
          this.prog = prog;
        }

        Statement.prototype.getContext = function (clone) {
          if (clone === void 0) {
            clone = false;
          }

          return clone && this.context != null ? this.context.clone() : this.context;
        };

        Statement.prototype.getProg = function () {
          return this.prog;
        };

        Statement.prototype.evaluateS = function () {
          return this.prog.evaluateS(this.getContext(true));
        };

        Statement.prototype.evaluateE = function () {
          return this.prog.evaluateE(this.getContext(true));
        };

        Statement.prototype.isStatic = function () {
          return this.getContext() instanceof Context_1.Signature;
        };

        Statement.prototype.setExpectedS = function (value) {
          if (value instanceof Context_1.Signature) {
            if (this.expectedS instanceof Context_1.SignatureVariable) {
              this.expectedS.setSignature(value);
            }
          } else if (this.expectedS != null) {
            value = value instanceof Context_1.TypeVariable ? value.getType() : value;

            if (this.expectedS instanceof Context_1.TypeVariable) {
              this.expectedS.setType(value);
            } else if (this.expectedS instanceof Context_1.TypeFun && value instanceof Context_1.TypeFun) {
              var typeFun = this.expectedS;
              var valueFun = value;
              if (typeFun.getParamType() instanceof Context_1.TypeVariable) typeFun.getParamType().setType(valueFun.getParamType());
              if (typeFun.getBodyType() instanceof Context_1.TypeVariable) typeFun.getBodyType().setType(valueFun.getBodyType());
            }

            if (this.expectedS instanceof Context_1.TypeRef && value instanceof Context_1.TypeRef) {
              var typeRef = this.expectedS;
              var valueRef = value;
              if (typeRef.getType() instanceof Context_1.TypeVariable) typeRef.getType().setType(valueRef.getType());
            }
          }

          if (this.expectedS == null && !(value instanceof Context_1.Signature)) this.expectedS = value;
          return this;
        };

        Statement.prototype.getExpectedS = function () {
          return this.expectedS;
        };

        Statement.prototype.isTypeCorrect = function () {
          var _this = this;

          if (this.getExpectedS() == null || this.evaluateS() instanceof Context_1.Signature) return true;

          if (this.getExpectedS() instanceof Context_1.TypeVariable) {
            var expectedType = this.getExpectedS();
            if (expectedType.isAssigned()) return this.getExpectedS().equals(this.evaluateS());else expectedType.listen(this.getHash(), function (val) {
              if (_this.evaluateS() instanceof Context_1.TypeVariable) _this.evaluateS().listen("tc-" + _this.getHash(), function (type) {
                document.querySelector('#' + "tc-" + _this.getHash()).outerHTML = $e((_this.context != null ? _this.context.toString() : "") + " &boxvr; " + _this.prog.toString() + " : " + (val || "").toString(), {
                  skip: val.equals(type),
                  msg: 'Ungültiger Typ'
                });
              });else document.querySelector('#' + "tc-" + _this.getHash()).outerHTML = $e((_this.context != null ? _this.context.toString() : "") + " &boxvr; " + _this.prog.toString() + " : " + (val || "").toString(), {
                skip: val.equals(_this.evaluateS()),
                msg: 'Ungültiger Typ'
              });
            });
            return true;
          }

          if (this.evaluateS() instanceof Context_1.TypeVariable) {
            this.evaluateS().listen("tc-" + this.getHash(), function (type) {
              document.querySelector('#' + "tc-" + _this.getHash()).outerHTML = $e((_this.context != null ? _this.context.toString() : "") + " &boxvr; " + _this.prog.toString() + " : " + (_this.getExpectedS() || "").toString(), {
                skip: _this.getExpectedS().equals(type),
                msg: 'Ungültiger Typ'
              });
            });
            return this.evaluateS().equals(this.getExpectedS());
          }

          return this.getExpectedS().equals(this.evaluateS());
        };

        Statement.prototype.getHash = function () {
          return "s-" + this.getProg().getHash();
        };

        Statement.prototype.toString = function () {
          if (this.getContext(true) instanceof Context_1.Signature) {
            if (this.getExpectedS() == null) this.setExpectedS(new Context_1.TypeVariable());
            return $e((this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " : " + (this.getExpectedS() || (this.prog instanceof Expr_1.Expr ? this.prog : this.prog).getExpectedS() || "").toString(), {
              skip: this.isTypeCorrect(),
              msg: 'Ungültiger Typ',
              id: "tc-" + this.getHash()
            }); //this.prog.evaluateS(this.getContext(true) as Signature).toString()
          } else return (this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " " + $i('&dArr;') + " " + this.prog.evaluateE(this.getContext(true)).toString(); //+  ((this.getContext(true) as Environment).getMemory()==null ?"":(" &boxV; "+(this.getContext(true) as Environment).getMemory().toString()))

        };

        Statement.prototype.clone = function () {
          return new Statement(this.getProg().clone(), this.getContext().clone());
        };

        return Statement;
      }();

      exports.Statement = Statement;

      var StatementVariable =
      /** @class */
      function () {
        function StatementVariable(stmt) {
          this.stmt = stmt;
          StatementVariable.counter++;
          var name = "s<sub>" + StatementVariable.counter + "</sub>";
          this.id = btoa(name + Date.now());
        }

        StatementVariable.prototype.getStmt = function () {
          return this.stmt;
        };

        StatementVariable.prototype.setStmt = function (stmt) {
          var _this = this;

          this.stmt = stmt;
          var id = CSS.escape(this.id);
          if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
            return e.outerHTML = _this.stmt.toString();
          });
          if (this.listener) this.listener(this.stmt);
          return this;
        };

        StatementVariable.prototype.listen = function (listener) {
          if (this.stmt) listener(this.stmt);
          this.listener = listener;
          return this;
        };

        StatementVariable.prototype.toString = function () {
          return this.stmt == null ? $s(null, {
            id: this.id
          }) : $v(this.stmt.toString(), {
            id: this.id
          });
        };

        StatementVariable.prototype.clone = function () {
          return new StatementVariable(this.getStmt().clone());
        };

        StatementVariable.counter = 0;
        return StatementVariable;
      }();

      exports.StatementVariable = StatementVariable;
      /***/
    },

    /***/
    "./models/rules/SemicolonRule.ts":
    /*!***************************************!*\
      !*** ./models/rules/SemicolonRule.ts ***!
      \***************************************/

    /***/
    function modelsRulesSemicolonRuleTs(__unused_webpack_module, exports, __nested_webpack_require_64207__) {
      exports.__esModule = true;
      exports.SemicolonRule = void 0;

      var Rule_1 = __nested_webpack_require_64207__(
      /*! ./Rule */
      "./models/rules/Rule.ts");

      var Semicolon_1 = __nested_webpack_require_64207__(
      /*! ../values/Semicolon */
      "./models/values/Semicolon.ts");

      var SemicolonRule =
      /** @class */
      function () {
        function SemicolonRule() {}

        SemicolonRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();
          var left = new Rule_1.Statement(prog.getLeft(), stmt.getContext(true));

          if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());
            return [left, new Rule_1.Statement(prog.getRight(), left.getContext()).setExpectedS(stmt.getExpectedS())];
          } else return [left, new Rule_1.Statement(prog.getRight(), left.getContext())];
        };

        SemicolonRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof Semicolon_1.Semicolon;
        };

        return SemicolonRule;
      }();

      exports.SemicolonRule = SemicolonRule;
      /***/
    },

    /***/
    "./models/rules/StateRule.ts":
    /*!***********************************!*\
      !*** ./models/rules/StateRule.ts ***!
      \***********************************/

    /***/
    function modelsRulesStateRuleTs(__unused_webpack_module, exports, __nested_webpack_require_65637__) {
      exports.__esModule = true;
      exports.AssignRule = exports.BangRule = exports.RefRule = void 0;

      var Rule_1 = __nested_webpack_require_65637__(
      /*! ./Rule */
      "./models/rules/Rule.ts");

      var Context_1 = __nested_webpack_require_65637__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var State_1 = __nested_webpack_require_65637__(
      /*! ../values/State */
      "./models/values/State.ts");

      var RefRule =
      /** @class */
      function () {
        function RefRule() {}

        RefRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();

          if (stmt.isStatic()) {
            var tr = prog.evaluateS(stmt.getContext());
            stmt.setExpectedS(tr);
            return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true)).setExpectedS(tr.getType())];
          }

          var prevCtx = stmt.getContext(true);
          prog.evaluateE(prevCtx);
          prog.compute();
          return [new Rule_1.Statement(prog.getExpr(), prevCtx)];
        };

        RefRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof State_1.Ref;
        };

        return RefRule;
      }();

      exports.RefRule = RefRule;

      var BangRule =
      /** @class */
      function () {
        function BangRule() {}

        BangRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();

          if (stmt.isStatic()) {
            if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.evaluateS(stmt.getContext()));
            return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true)).setExpectedS(new Context_1.TypeRef(stmt.getExpectedS()))];
          }

          return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true))];
        };

        BangRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof State_1.Bang;
        };

        return BangRule;
      }();

      exports.BangRule = BangRule;

      var AssignRule =
      /** @class */
      function () {
        function AssignRule() {}

        AssignRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();

          if (stmt.isStatic()) {
            var type = prog.evaluateS(stmt.getContext());
            stmt.setExpectedS(type);
            var tr = prog.getLeft().evaluateS(stmt.getContext(true));
            var stmtVar_1 = new Rule_1.StatementVariable();
            if (tr instanceof Context_1.TypeVariable) tr.listen(stmt.getHash(), function (val) {
              stmtVar_1.setStmt(new Rule_1.Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(val instanceof Context_1.TypeRef ? val.getType() : val));
            });else stmtVar_1.setStmt(new Rule_1.Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(tr instanceof Context_1.TypeRef ? tr.getType() : tr));
            return [new Rule_1.Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(tr), stmtVar_1]; //return [new Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(tr), new Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(tr.getType())]
          }

          return [new Rule_1.Statement(prog.getLeft(), stmt.getContext(true)), new Rule_1.Statement(prog.getRight(), stmt.getContext(true))];
        };

        AssignRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof State_1.Assign;
        };

        return AssignRule;
      }();

      exports.AssignRule = AssignRule;
      /***/
    },

    /***/
    "./models/rules/StmtRule.ts":
    /*!**********************************!*\
      !*** ./models/rules/StmtRule.ts ***!
      \**********************************/

    /***/
    function modelsRulesStmtRuleTs(__unused_webpack_module, exports, __nested_webpack_require_69433__) {
      exports.__esModule = true;
      exports.StmtBracketRule = void 0;

      var Rule_1 = __nested_webpack_require_69433__(
      /*! ./Rule */
      "./models/rules/Rule.ts");

      var Stmt_1 = __nested_webpack_require_69433__(
      /*! ../values/Stmt */
      "./models/values/Stmt.ts");

      var StmtBracketRule =
      /** @class */
      function () {
        function StmtBracketRule() {}

        StmtBracketRule.prototype.apply = function (stmt) {
          var prog = stmt.getProg();
          return [new Rule_1.Statement(prog.getStmt(), stmt.getContext(true))];
        };

        StmtBracketRule.prototype.match = function (stmt) {
          return stmt.getProg() instanceof Stmt_1.StmtBracket;
        };

        return StmtBracketRule;
      }();

      exports.StmtBracketRule = StmtBracketRule;
      /***/
    },

    /***/
    "./models/values/Bool.ts":
    /*!*******************************!*\
      !*** ./models/values/Bool.ts ***!
      \*******************************/

    /***/
    function modelsValuesBoolTs(__unused_webpack_module, exports, __nested_webpack_require_70511__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.GreaterOrEquals = exports.Greater = exports.LessOrEquals = exports.Less = exports.Unequals = exports.Equals = exports.BoolConst = void 0;

      var Expr_1 = __nested_webpack_require_70511__(
      /*! ./Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_70511__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var BoolConst =
      /** @class */
      function (_super) {
        __extends(BoolConst, _super);

        function BoolConst(value) {
          var _this = _super.call(this) || this;

          _this.value = value;
          return _this;
        }

        BoolConst.prototype.getType = function () {
          return new Context_1.TypeBool();
        };

        BoolConst.prototype.getValue = function () {
          return this.value;
        };

        BoolConst.prototype.setValue = function (value) {
          this.value = value;
        };

        BoolConst.prototype.evaluateS = function (s) {
          return this.getType();
        };

        BoolConst.prototype.evaluateE = function (e) {
          return this.valVariable;
        };

        BoolConst.prototype.compute = function () {
          this.valVariable.setVal(new Context_1.PVal(this.getValue()));
        };

        BoolConst.prototype.toString = function () {
          return this.getValue() ? "true" : "false";
        };

        BoolConst.prototype.clone = function () {
          return new BoolConst(this.value);
        };

        return BoolConst;
      }(Expr_1.Expr);

      exports.BoolConst = BoolConst;

      var Equals =
      /** @class */
      function (_super) {
        __extends(Equals, _super);

        function Equals() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Equals.prototype.evaluateS = function (s) {
          return new Context_1.TypeBool();
        };

        Equals.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " = " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() == rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Equals.prototype.getExpectedS = function () {
          return new Context_1.TypeBool();
        };

        Equals.prototype.toString = function () {
          return this.getLeft().toString() + " = " + this.getRight().toString();
        };

        Equals.prototype.clone = function () {
          return new Equals(this.getLeft().clone(), this.getRight().clone());
        };

        return Equals;
      }(Expr_1.ExprBinary);

      exports.Equals = Equals;

      var Unequals =
      /** @class */
      function (_super) {
        __extends(Unequals, _super);

        function Unequals() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Unequals.prototype.evaluateS = function (s) {
          return new Context_1.TypeBool();
        };

        Unequals.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " <> " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() != rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Unequals.prototype.getExpectedS = function () {
          return new Context_1.TypeBool();
        };

        Unequals.prototype.toString = function () {
          return this.getLeft().toString() + " <> " + this.getRight().toString();
        };

        Unequals.prototype.clone = function () {
          return new Unequals(this.getLeft().clone(), this.getRight().clone());
        };

        return Unequals;
      }(Expr_1.ExprBinary);

      exports.Unequals = Unequals;

      var Less =
      /** @class */
      function (_super) {
        __extends(Less, _super);

        function Less() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Less.prototype.evaluateS = function (s) {
          return new Context_1.TypeBool();
        };

        Less.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " < " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() < rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Less.prototype.getExpectedS = function () {
          return new Context_1.TypeBool();
        };

        Less.prototype.toString = function () {
          return this.getLeft().toString() + " < " + this.getRight().toString();
        };

        Less.prototype.clone = function () {
          return new Less(this.getLeft().clone(), this.getRight().clone());
        };

        return Less;
      }(Expr_1.ExprBinary);

      exports.Less = Less;

      var LessOrEquals =
      /** @class */
      function (_super) {
        __extends(LessOrEquals, _super);

        function LessOrEquals() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        LessOrEquals.prototype.evaluateS = function (s) {
          return new Context_1.TypeBool();
        };

        LessOrEquals.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " <= " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() <= rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        LessOrEquals.prototype.getExpectedS = function () {
          return new Context_1.TypeBool();
        };

        LessOrEquals.prototype.toString = function () {
          return this.getLeft().toString() + " <= " + this.getRight().toString();
        };

        LessOrEquals.prototype.clone = function () {
          return new LessOrEquals(this.getLeft().clone(), this.getRight().clone());
        };

        return LessOrEquals;
      }(Expr_1.ExprBinary);

      exports.LessOrEquals = LessOrEquals;

      var Greater =
      /** @class */
      function (_super) {
        __extends(Greater, _super);

        function Greater() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Greater.prototype.evaluateS = function (s) {
          return new Context_1.TypeBool();
        };

        Greater.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " > " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() > rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Greater.prototype.getExpectedS = function () {
          return new Context_1.TypeBool();
        };

        Greater.prototype.toString = function () {
          return this.getLeft().toString() + " > " + this.getRight().toString();
        };

        Greater.prototype.clone = function () {
          return new Greater(this.getLeft().clone(), this.getRight().clone());
        };

        return Greater;
      }(Expr_1.ExprBinary);

      exports.Greater = Greater;

      var GreaterOrEquals =
      /** @class */
      function (_super) {
        __extends(GreaterOrEquals, _super);

        function GreaterOrEquals() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        GreaterOrEquals.prototype.evaluateS = function (s) {
          return new Context_1.TypeBool();
        };

        GreaterOrEquals.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " >= " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() >= rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        GreaterOrEquals.prototype.getExpectedS = function () {
          return new Context_1.TypeBool();
        };

        GreaterOrEquals.prototype.toString = function () {
          return this.getLeft().toString() + " >= " + this.getRight().toString();
        };

        GreaterOrEquals.prototype.clone = function () {
          return new GreaterOrEquals(this.getLeft().clone(), this.getRight().clone());
        };

        return GreaterOrEquals;
      }(Expr_1.ExprBinary);

      exports.GreaterOrEquals = GreaterOrEquals;
      /***/
    },

    /***/
    "./models/values/Expr.ts":
    /*!*******************************!*\
      !*** ./models/values/Expr.ts ***!
      \*******************************/

    /***/
    function modelsValuesExprTs(__unused_webpack_module, exports, __nested_webpack_require_81685__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.ExprBracket = exports.ExprIf = exports.ExprBinary = exports.Expr = void 0;

      var Context_1 = __nested_webpack_require_81685__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Program_1 = __nested_webpack_require_81685__(
      /*! ./Program */
      "./models/values/Program.ts");

      var Expr =
      /** @class */
      function (_super) {
        __extends(Expr, _super);

        function Expr() {
          var _this = _super !== null && _super.apply(this, arguments) || this;

          _this.valVariable = new Context_1.ValVariable();
          return _this;
        }

        Expr.prototype.evaluateS = function (s) {
          return null;
        };

        Expr.prototype.getExpectedS = function () {
          return null;
        };

        Expr.prototype.evaluateE = function (e) {
          return null;
        };

        Expr.prototype.clone = function () {
          return null;
        };

        return Expr;
      }(Program_1.Program);

      exports.Expr = Expr;

      var ExprBinary =
      /** @class */
      function (_super) {
        __extends(ExprBinary, _super);

        function ExprBinary(left, right) {
          var _this = _super.call(this) || this;

          _this.left = left;
          _this.right = right;
          return _this;
        }

        ExprBinary.prototype.getLeft = function () {
          return this.left;
        };

        ExprBinary.prototype.setLeft = function (left) {
          this.left = left;
        };

        ExprBinary.prototype.getRight = function () {
          return this.right;
        };

        ExprBinary.prototype.setRight = function (right) {
          this.right = right;
        };

        ExprBinary.prototype.clone = function () {
          return null;
        };

        return ExprBinary;
      }(Expr);

      exports.ExprBinary = ExprBinary;

      var ExprIf =
      /** @class */
      function (_super) {
        __extends(ExprIf, _super);

        function ExprIf(cond, then, else_) {
          var _this = _super.call(this) || this;

          _this.expectedS = new Context_1.TypeVariable();
          _this.cond = cond;
          _this.then = then;
          _this["else"] = else_;
          return _this;
        }

        ExprIf.prototype.getCond = function () {
          return this.cond;
        };

        ExprIf.prototype.setCond = function (cond) {
          this.cond = cond;
        };

        ExprIf.prototype.getThen = function () {
          return this.then;
        };

        ExprIf.prototype.setThen = function (then) {
          this.then = then;
        };

        ExprIf.prototype.getElse = function () {
          return this["else"];
        };

        ExprIf.prototype.setElse = function (else_) {
          this["else"] = else_;
        };

        ExprIf.prototype.evaluateS = function (s) {
          return this.getThen().evaluateS(s);
        };

        ExprIf.prototype.getExpectedS = function () {
          return this.expectedS;
        };

        ExprIf.prototype.evaluateE = function (e) {
          var _this = this;

          var cond = this.getCond().evaluateE(e);
          var then = this.getThen().evaluateE(e);
          var else_ = this.getElse().evaluateE(e);
          this.valVariable.setToString("?");
          cond.listen(this.getHash(), function (condVal) {
            if (condVal.getValue()) {
              _this.valVariable.setToString(then.toString());

              then.listen(_this.getHash(), function (thenVal) {
                _this.valVariable.setVal(thenVal);
              });
            } else {
              _this.valVariable.setToString(else_.toString());

              else_.listen(_this.getHash(), function (elseVal) {
                _this.valVariable.setVal(elseVal);
              });
            }
          });
          return this.valVariable;
        };

        ExprIf.prototype.toString = function () {
          return $k("if") + " " + this.getCond() + " " + $k("then") + " " + this.getThen().toString() + " " + $k("else") + " " + this.getElse().toString();
        };

        ExprIf.prototype.clone = function () {
          return new ExprIf(this.getCond().clone(), this.getThen().clone(), this.getElse().clone());
        };

        return ExprIf;
      }(Expr);

      exports.ExprIf = ExprIf;

      var ExprBracket =
      /** @class */
      function (_super) {
        __extends(ExprBracket, _super);

        function ExprBracket(expr) {
          var _this = _super.call(this) || this;

          _this.expr = expr;
          return _this;
        }

        ExprBracket.prototype.getExpr = function () {
          return this.expr;
        };

        ExprBracket.prototype.evaluateS = function (s) {
          return this.getExpr().evaluateS(s);
        };

        ExprBracket.prototype.evaluateE = function (e) {
          /*const expr = this.getExpr().evaluateE(e)
          this.valVariable.setToString(expr.toString())
            expr.listen(this.getHash(), (exprVal: Val) => {
              this.valVariable.setVal(exprVal)
          })*/
          return this.getExpr().evaluateE(e); //this.valVariable
        };

        ExprBracket.prototype.getExpectedS = function () {
          return this.getExpr().getExpectedS();
        };

        ExprBracket.prototype.toString = function () {
          return "(" + this.getExpr().toString() + ")";
        };

        ExprBracket.prototype.clone = function () {
          return new ExprBracket(this.getExpr().clone());
        };

        return ExprBracket;
      }(Expr);

      exports.ExprBracket = ExprBracket;
      /***/
    },

    /***/
    "./models/values/FunCall.ts":
    /*!**********************************!*\
      !*** ./models/values/FunCall.ts ***!
      \**********************************/

    /***/
    function modelsValuesFunCallTs(__unused_webpack_module, exports, __nested_webpack_require_88536__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.FunCall = exports.Param = exports.AnonymeFunDecl = void 0;

      var Expr_1 = __nested_webpack_require_88536__(
      /*! ./Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_88536__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var AnonymeFunDecl =
      /** @class */
      function (_super) {
        __extends(AnonymeFunDecl, _super);

        function AnonymeFunDecl(param, body) {
          var _this = _super.call(this) || this;

          _this.param = param;
          _this.body = body;
          _this.expectedS = new Context_1.TypeFun(_this.getParam().getType(), new Context_1.TypeVariable());
          return _this;
        }

        AnonymeFunDecl.prototype.getParam = function () {
          return this.param;
        };

        AnonymeFunDecl.prototype.setParam = function (param) {
          this.param = param;
        };

        AnonymeFunDecl.prototype.getBody = function () {
          return this.body;
        };

        AnonymeFunDecl.prototype.setBody = function (body) {
          this.body = body;
        };

        AnonymeFunDecl.prototype.evaluateS = function (s) {
          return new Context_1.TypeFun(this.getParam().getType(), this.getBody().evaluateS(s.clone().put(this.getParam().getName(), this.getParam().getType())));
        };

        AnonymeFunDecl.prototype.evaluateE = function (e) {
          this.valVariable.setVal(new Context_1.ValFun(e.clone(), this.getParam(), this.getBody()));
          return this.valVariable;
        };

        AnonymeFunDecl.prototype.getExpectedS = function () {
          return this.expectedS;
        };

        AnonymeFunDecl.prototype.toString = function () {
          return $k("fun") + " (" + this.getParam().toString() + ") -> " + this.getBody().toString();
        };

        AnonymeFunDecl.prototype.clone = function () {
          return new AnonymeFunDecl(this.getParam(), this.getBody());
        };

        return AnonymeFunDecl;
      }(Expr_1.Expr);

      exports.AnonymeFunDecl = AnonymeFunDecl;

      var Param =
      /** @class */
      function () {
        function Param(name, type) {
          this.name = name;
          this.type = type;
        }

        Param.prototype.getName = function () {
          return this.name;
        };

        Param.prototype.setName = function (name) {
          this.name = name;
        };

        Param.prototype.getType = function () {
          return this.type;
        };

        Param.prototype.setType = function (type) {
          this.type = type;
        };

        Param.prototype.toString = function () {
          return this.getName() + " : " + this.getType().toString();
        };

        Param.prototype.clone = function () {
          return new Param(this.getName(), this.getType().clone());
        };

        return Param;
      }();

      exports.Param = Param;

      var FunCall =
      /** @class */
      function (_super) {
        __extends(FunCall, _super);

        function FunCall(fun, arg) {
          var _this = _super.call(this) || this;

          _this.expectedS = new Context_1.TypeVariable();
          _this.fun = fun;
          _this.arg = arg;
          return _this;
        }

        FunCall.prototype.getFun = function () {
          return this.fun;
        };

        FunCall.prototype.setFun = function (fun) {
          this.fun = fun;
        };

        FunCall.prototype.getArg = function () {
          return this.arg;
        };

        FunCall.prototype.setArg = function (arg) {
          this.arg = arg;
        };

        FunCall.prototype.evaluateS = function (s) {
          var fun = this.getFun().evaluateS(s);
          return fun.getBodyType();
        };

        FunCall.prototype.evaluateE = function (e) {
          var _this = this;

          this.valVariable.setToString("?");
          this.setArg(this.getArg().clone());
          this.getArg().evaluateE(e).listen(this.getHash(), function (argVal) {
            _this.getFun().evaluateE(e).listen(_this.getHash(), function (funVal) {
              if (funVal instanceof Context_1.ValRecFun) {
                var ctx = funVal.getEnv().clone().put(funVal.getFunName(), funVal).put(funVal.getParam().getName(), argVal);
                funVal.getBody().evaluateE(ctx).listen(_this.getHash(), function (bodyVal) {
                  _this.valVariable.setVal(bodyVal);
                });
              } else if (funVal instanceof Context_1.ValFun) {
                var ctx = funVal.getEnv().clone().put(funVal.getParam().getName(), argVal);
                funVal.getBody().evaluateE(ctx).listen(_this.getHash(), function (bodyVal) {
                  _this.valVariable.setVal(bodyVal);
                });
              }
            });
          });
          return this.valVariable;
        };

        FunCall.prototype.getExpectedS = function () {
          return this.expectedS;
        };

        FunCall.prototype.toString = function () {
          return this.getFun().toString() + " " + this.getArg().toString();
        };

        FunCall.prototype.clone = function () {
          return new FunCall(this.getFun().clone(), this.getArg().clone());
        };

        return FunCall;
      }(Expr_1.Expr);

      exports.FunCall = FunCall;
      /***/
    },

    /***/
    "./models/values/FunDecl.ts":
    /*!**********************************!*\
      !*** ./models/values/FunDecl.ts ***!
      \**********************************/

    /***/
    function modelsValuesFunDeclTs(__unused_webpack_module, exports, __nested_webpack_require_95072__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.FunDecl = void 0;

      var Context_1 = __nested_webpack_require_95072__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Stmt_1 = __nested_webpack_require_95072__(
      /*! ./Stmt */
      "./models/values/Stmt.ts");

      var FunDecl =
      /** @class */
      function (_super) {
        __extends(FunDecl, _super);

        function FunDecl(name, param, body, returnType) {
          var _this = _super.call(this) || this;

          _this.name = name;
          _this.param = param;
          _this.body = body;
          _this.returnType = returnType;
          return _this;
        }

        FunDecl.prototype.getName = function () {
          return this.name;
        };

        FunDecl.prototype.setName = function (name) {
          this.name = name;
        };

        FunDecl.prototype.getReturnType = function () {
          return this.returnType;
        };

        FunDecl.prototype.setReturnType = function (returnType) {
          this.returnType = returnType;
        };

        FunDecl.prototype.getParam = function () {
          return this.param;
        };

        FunDecl.prototype.setParam = function (param) {
          this.param = param;
        };

        FunDecl.prototype.getBody = function () {
          return this.body;
        };

        FunDecl.prototype.setBody = function (body) {
          this.body = body;
        };

        FunDecl.prototype.evaluateS = function (s) {
          return new Context_1.Signature().put(this.getName(), new Context_1.TypeFun(this.getParam().getType(), this.getReturnType()));
        };

        FunDecl.prototype.evaluateE = function (e) {
          return new Context_1.Environment().put(this.getName(), new Context_1.ValFun(e.clone(), this.getParam(), this.getBody()));
        };

        FunDecl.prototype.toString = function () {
          return $k("let") + " " + this.getName() + " (" + this.getParam().toString() + ") : " + this.getReturnType().toString() + " = " + this.getBody().toString();
        };

        FunDecl.prototype.clone = function () {
          return new FunDecl(this.getName(), this.getParam().clone(), this.getBody().clone(), this.getReturnType().clone());
        };

        return FunDecl;
      }(Stmt_1.Stmt);

      exports.FunDecl = FunDecl;
      /***/
    },

    /***/
    "./models/values/Let.ts":
    /*!******************************!*\
      !*** ./models/values/Let.ts ***!
      \******************************/

    /***/
    function modelsValuesLetTs(__unused_webpack_module, exports, __nested_webpack_require_98573__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.VarUse = exports.In = exports.Let = void 0;

      var Stmt_1 = __nested_webpack_require_98573__(
      /*! ./Stmt */
      "./models/values/Stmt.ts");

      var Expr_1 = __nested_webpack_require_98573__(
      /*! ./Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_98573__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Let =
      /** @class */
      function (_super) {
        __extends(Let, _super);

        function Let(name, value) {
          var _this = _super.call(this) || this;

          _this.name = name;
          _this.value = value;
          return _this;
        }

        Let.prototype.getName = function () {
          return this.name;
        };

        Let.prototype.setName = function (name) {
          this.name = name;
        };

        Let.prototype.getValue = function () {
          return this.value;
        };

        Let.prototype.setValue = function (value) {
          this.value = value;
        };

        Let.prototype.evaluateS = function (s) {
          return new Context_1.Signature().put(this.getName(), new Context_1.TypeVariable()); //new Signature().put(this.getName(), this.getValue().evaluateS(s))
        };

        Let.prototype.evaluateE = function (e) {
          var value = this.getValue().evaluateE(e);
          return new Context_1.Environment().put(this.getName(), value);
        };

        Let.prototype.toString = function () {
          return $k("let") + " " + this.getName() + " = " + this.getValue().toString();
        };

        Let.prototype.clone = function () {
          return new Let(this.getName(), this.getValue().clone());
        };

        return Let;
      }(Stmt_1.Stmt);

      exports.Let = Let;

      var In =
      /** @class */
      function (_super) {
        __extends(In, _super);

        function In(left, right) {
          var _this = _super.call(this) || this;

          _this.left = left;
          _this.right = right;
          _this.expectedS = new Context_1.TypeVariable();
          return _this;
        }

        In.prototype.getLeft = function () {
          return this.left;
        };

        In.prototype.setLeft = function (left) {
          this.left = left;
        };

        In.prototype.getRight = function () {
          return this.right;
        };

        In.prototype.setRight = function (right) {
          this.right = right;
        };

        In.prototype.evaluateS = function (s) {
          var s2 = s.clone();
          s2.merge(this.getLeft().evaluateS(s2));
          return this.getRight().evaluateS(s2);
        };

        In.prototype.evaluateE = function (e) {
          var _this = this;

          var e2 = e.clone();
          e2.merge(this.getLeft().evaluateE(e2));
          var right = this.getRight().evaluateE(e2);
          this.valVariable.setToString("?");
          right.listen(this.getHash(), function (rightVal) {
            _this.valVariable.setVal(rightVal);
          });
          return this.valVariable;
        };

        In.prototype.getExpectedS = function () {
          return this.expectedS;
        };

        In.prototype.toString = function () {
          return this.getLeft().toString() + " " + $k("in") + " " + this.getRight().toString();
        };

        In.prototype.clone = function () {
          return new In(this.getLeft().clone(), this.getRight().clone());
        };

        return In;
      }(Expr_1.Expr);

      exports.In = In;

      var VarUse =
      /** @class */
      function (_super) {
        __extends(VarUse, _super);

        function VarUse(name) {
          var _this = _super.call(this) || this;

          _this.name = name;
          return _this;
        }

        VarUse.prototype.getName = function () {
          return this.name;
        };

        VarUse.prototype.setName = function (name) {
          this.name = name;
        };

        VarUse.prototype.evaluateS = function (s) {
          var tmp = s.get(this.getName());

          while (tmp instanceof Context_1.TypeVariable) {
            if (tmp.getType() == null) break;
            tmp = tmp.getType();
          }

          return tmp;
        };

        VarUse.prototype.evaluateE = function (e) {
          return this.valVariable;
        };

        VarUse.prototype.compute = function (e) {
          var _this = this;

          var tmp = e.get(this.getName());

          while (tmp instanceof Context_1.ValVariable && tmp.getVal() instanceof Context_1.ValVariable) {
            tmp = tmp.getVal();
          }

          if (tmp instanceof Context_1.ValVariable) tmp.listen(this.getHash(), function (val) {
            return _this.valVariable.setVal(val);
          });else this.valVariable.setVal(tmp);
        };

        VarUse.prototype.toString = function () {
          return this.getName();
        };

        VarUse.prototype.clone = function () {
          return new VarUse(this.getName());
        };

        return VarUse;
      }(Expr_1.Expr);

      exports.VarUse = VarUse;
      /***/
    },

    /***/
    "./models/values/Nat.ts":
    /*!******************************!*\
      !*** ./models/values/Nat.ts ***!
      \******************************/

    /***/
    function modelsValuesNatTs(__unused_webpack_module, exports, __nested_webpack_require_104837__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.Minus = exports.Plus = exports.Mod = exports.Div = exports.Times = exports.NatConst = void 0;

      var Expr_1 = __nested_webpack_require_104837__(
      /*! ./Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_104837__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var NatConst =
      /** @class */
      function (_super) {
        __extends(NatConst, _super);

        function NatConst(value) {
          var _this = _super.call(this) || this;

          _this.value = value;
          return _this;
        }

        NatConst.prototype.getType = function () {
          return new Context_1.TypeNat();
        };

        NatConst.prototype.getValue = function () {
          return this.value;
        };

        NatConst.prototype.setValue = function (value) {
          this.value = value;
        };

        NatConst.prototype.evaluateS = function (s) {
          return this.getType();
        };

        NatConst.prototype.evaluateE = function (e) {
          return this.valVariable;
        };

        NatConst.prototype.compute = function (e) {
          this.valVariable.setVal(new Context_1.PVal(this.getValue()));
        };

        NatConst.prototype.toString = function () {
          return "" + this.getValue();
        };

        NatConst.prototype.clone = function () {
          return new NatConst(this.getValue());
        };

        return NatConst;
      }(Expr_1.Expr);

      exports.NatConst = NatConst;

      var Times =
      /** @class */
      function (_super) {
        __extends(Times, _super);

        function Times() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Times.prototype.evaluateS = function (s) {
          return new Context_1.TypeNat();
        };

        Times.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " &times; " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() * rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Times.prototype.getExpectedS = function () {
          return new Context_1.TypeNat();
        };

        Times.prototype.toString = function () {
          return this.getLeft().toString() + " &times; " + this.getRight().toString();
        };

        Times.prototype.clone = function () {
          return new Times(this.getLeft().clone(), this.getRight().clone());
        };

        return Times;
      }(Expr_1.ExprBinary);

      exports.Times = Times;

      var Div =
      /** @class */
      function (_super) {
        __extends(Div, _super);

        function Div() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Div.prototype.evaluateS = function (s) {
          return new Context_1.TypeNat();
        };

        Div.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " / " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() / rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Div.prototype.getExpectedS = function () {
          return new Context_1.TypeNat();
        };

        Div.prototype.toString = function () {
          return this.getLeft().toString() + " / " + this.getRight().toString();
        };

        Div.prototype.clone = function () {
          return new Div(this.getLeft().clone(), this.getRight().clone());
        };

        return Div;
      }(Expr_1.ExprBinary);

      exports.Div = Div;

      var Mod =
      /** @class */
      function (_super) {
        __extends(Mod, _super);

        function Mod() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Mod.prototype.evaluateS = function (s) {
          return new Context_1.TypeNat();
        };

        Mod.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " % " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() % rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Mod.prototype.getExpectedS = function () {
          return new Context_1.TypeNat();
        };

        Mod.prototype.toString = function () {
          return this.getLeft().toString() + " % " + this.getRight().toString();
        };

        Mod.prototype.clone = function () {
          return new Mod(this.getLeft().clone(), this.getRight().clone());
        };

        return Mod;
      }(Expr_1.ExprBinary);

      exports.Mod = Mod;

      var Plus =
      /** @class */
      function (_super) {
        __extends(Plus, _super);

        function Plus() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Plus.prototype.evaluateS = function (s) {
          return new Context_1.TypeNat();
        };

        Plus.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e);
          this.valVariable.setToString(left.toString() + " + " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() + rightVal.getValue()));
            });
          });
          return this.valVariable;
        };

        Plus.prototype.getExpectedS = function () {
          return new Context_1.TypeNat();
        };

        Plus.prototype.toString = function () {
          return this.getLeft().toString() + " + " + this.getRight().toString();
        };

        Plus.prototype.clone = function () {
          return new Plus(this.getLeft().clone(), this.getRight().clone());
        };

        return Plus;
      }(Expr_1.ExprBinary);

      exports.Plus = Plus;

      var Minus =
      /** @class */
      function (_super) {
        __extends(Minus, _super);

        function Minus() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        Minus.prototype.evaluateS = function (s) {
          return new Context_1.TypeNat();
        };

        Minus.prototype.evaluateE = function (e) {
          var _this = this;

          var left = this.getLeft().evaluateE(e);
          var right = this.getRight().evaluateE(e); //console.log("----+++++++++---",this.valVariable.id,left.toString()+" - "+right.toString())

          this.valVariable.setToString(left.toString() + " - " + right.toString());
          left.listen(this.getHash(), function (leftVal) {
            right.listen(_this.getHash(), function (rightVal) {
              var val = leftVal.getValue() - rightVal.getValue();

              _this.valVariable.setVal(new Context_1.PVal(val < 0 ? 0 : val));
            });
          });
          return this.valVariable;
        };

        Minus.prototype.getExpectedS = function () {
          return new Context_1.TypeNat();
        };

        Minus.prototype.toString = function () {
          return this.getLeft().toString() + " - " + this.getRight().toString();
        };

        Minus.prototype.clone = function () {
          return new Minus(this.getLeft().clone(), this.getRight().clone());
        };

        return Minus;
      }(Expr_1.ExprBinary);

      exports.Minus = Minus;
      /***/
    },

    /***/
    "./models/values/Program.ts":
    /*!**********************************!*\
      !*** ./models/values/Program.ts ***!
      \**********************************/

    /***/
    function modelsValuesProgramTs(__unused_webpack_module, exports) {
      exports.__esModule = true;
      exports.Program = void 0;

      var Program =
      /** @class */
      function () {
        function Program() {
          this.hash = "node-" + Program.counter++;
        }

        Program.prototype.getHash = function () {
          return this.hash;
        };

        Program.prototype.evaluateS = function (s) {
          return null;
        };

        Program.prototype.evaluateE = function (e) {
          return null;
        };

        Program.prototype.clone = function () {
          return null;
        };

        Program.counter = 0;
        return Program;
      }();

      exports.Program = Program;
      /***/
    },

    /***/
    "./models/values/RecFunDecl.ts":
    /*!*************************************!*\
      !*** ./models/values/RecFunDecl.ts ***!
      \*************************************/

    /***/
    function modelsValuesRecFunDeclTs(__unused_webpack_module, exports, __nested_webpack_require_115368__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.RecFunDecl = void 0;

      var FunDecl_1 = __nested_webpack_require_115368__(
      /*! ./FunDecl */
      "./models/values/FunDecl.ts");

      var Context_1 = __nested_webpack_require_115368__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var RecFunDecl =
      /** @class */
      function (_super) {
        __extends(RecFunDecl, _super);

        function RecFunDecl() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        RecFunDecl.prototype.evaluateE = function (e) {
          var valFun = new Context_1.ValRecFun(e.clone(), this.getName(), this.getParam(), this.getBody()); //valFun.getEnv().put(this.getName(), valFun)

          return new Context_1.Environment().put(this.getName(), valFun);
        };

        RecFunDecl.prototype.toString = function () {
          return $k("let") + " " + $k("rec") + " " + this.getName() + " (" + this.getParam().toString() + ") : " + this.getReturnType().toString() + " = " + this.getBody().toString();
        };

        RecFunDecl.prototype.clone = function () {
          return new RecFunDecl(this.getName(), this.getParam().clone(), this.getBody().clone(), this.getReturnType().clone());
        };

        return RecFunDecl;
      }(FunDecl_1.FunDecl);

      exports.RecFunDecl = RecFunDecl;
      /***/
    },

    /***/
    "./models/values/Semicolon.ts":
    /*!************************************!*\
      !*** ./models/values/Semicolon.ts ***!
      \************************************/

    /***/
    function modelsValuesSemicolonTs(__unused_webpack_module, exports, __nested_webpack_require_117925__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.Semicolon = void 0;

      var Expr_1 = __nested_webpack_require_117925__(
      /*! ./Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_117925__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Semicolon =
      /** @class */
      function (_super) {
        __extends(Semicolon, _super);

        function Semicolon(left, right) {
          var _this = _super.call(this) || this;

          _this.left = left;
          _this.right = right;
          _this.expectedS = new Context_1.TypeVariable();
          return _this;
        }

        Semicolon.prototype.getLeft = function () {
          return this.left;
        };

        Semicolon.prototype.setLeft = function (left) {
          this.left = left;
        };

        Semicolon.prototype.getRight = function () {
          return this.right;
        };

        Semicolon.prototype.setRight = function (right) {
          this.right = right;
        };

        Semicolon.prototype.evaluateS = function (s) {
          this.getLeft().evaluateS(s);
          return this.getRight().evaluateS(s);
        };

        Semicolon.prototype.evaluateE = function (e) {
          var _this = this;

          this.getLeft().evaluateE(e).listen(this.getHash(), function (_) {
            _this.getRight().evaluateE(e).listen(_this.getHash(), function (rightVal) {
              _this.valVariable.setVal(rightVal);
            });
          });
          return this.valVariable;
        };

        Semicolon.prototype.getExpectedS = function () {
          return this.expectedS;
        };

        Semicolon.prototype.toString = function () {
          return this.getLeft().toString() + $k(";") + this.getRight().toString();
        };

        Semicolon.prototype.clone = function () {
          return new Semicolon(this.getLeft().clone(), this.getRight().clone());
        };

        return Semicolon;
      }(Expr_1.Expr);

      exports.Semicolon = Semicolon;
      /***/
    },

    /***/
    "./models/values/State.ts":
    /*!********************************!*\
      !*** ./models/values/State.ts ***!
      \********************************/

    /***/
    function modelsValuesStateTs(__unused_webpack_module, exports, __nested_webpack_require_121133__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.Assign = exports.Bang = exports.Ref = void 0;

      var Expr_1 = __nested_webpack_require_121133__(
      /*! ./Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_121133__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Ref =
      /** @class */
      function (_super) {
        __extends(Ref, _super);

        function Ref(expr) {
          var _this = _super.call(this) || this;

          _this.expectedS = new Context_1.TypeRef(new Context_1.TypeVariable());
          _this.memory = new Context_1.Memory();
          _this.expr = expr;
          return _this;
        }

        Ref.prototype.getExpr = function () {
          return this.expr;
        };

        Ref.prototype.setExpr = function (expr) {
          this.expr = expr;
        };

        Ref.prototype.evaluateS = function (s) {
          return this.expectedS;
        };

        Ref.prototype.evaluateE = function (e) {
          var _this = this;

          if (this.address == null) this.address = e.getMemory().allocate();
          var exprVal = this.getExpr().evaluateE(e); //valAddr.setMemory(m.put(this.address, exprVal))

          this.memory.put(this.address, exprVal);
          this.valVariable.setMemory(this.memory);
          exprVal.listen(this.getHash(), function (val) {
            //alert(4)
            //valAddr.setMemory(val.getMemory().merge(m))
            _this.valVariable.setMemory(val.getMemory().merge(_this.memory.put(_this.address, val))); //e.getMemory().put(this.address, val)

          });
          return this.valVariable;
        };

        Ref.prototype.compute = function () {
          this.valVariable.setVal(new Context_1.ValAddress(this.address));
        };

        Ref.prototype.toString = function () {
          return $k("ref") + " " + this.expr.toString();
        };

        Ref.prototype.clone = function () {
          return new Ref(this.getExpr().clone());
        };

        return Ref;
      }(Expr_1.Expr);

      exports.Ref = Ref;

      var Bang =
      /** @class */
      function (_super) {
        __extends(Bang, _super);

        function Bang(expr) {
          var _this = _super.call(this) || this;

          _this.expectedS = new Context_1.TypeVariable();
          _this.expr = expr;
          return _this;
        }

        Bang.prototype.getExpr = function () {
          return this.expr;
        };

        Bang.prototype.setExpr = function (expr) {
          this.expr = expr;
        };

        Bang.prototype.evaluateS = function (s) {
          return this.expectedS;
        };

        Bang.prototype.evaluateE = function (e) {
          var _this = this;

          var expr = this.getExpr().evaluateE(e);
          this.valVariable.setToString("?");
          expr.listen(this.getHash(), function (addressVal) {
            _this.valVariable.setVal(e.getMemory().get(addressVal.getAddress()));
          });
          return this.valVariable;
        };

        Bang.prototype.toString = function () {
          return $k("!") + this.expr.toString();
        };

        Bang.prototype.clone = function () {
          return new Bang(this.getExpr().clone());
        };

        return Bang;
      }(Expr_1.Expr);

      exports.Bang = Bang;

      var Assign =
      /** @class */
      function (_super) {
        __extends(Assign, _super);

        function Assign(left, right) {
          var _this = _super.call(this) || this;

          _this.expectedS = new Context_1.TypeUnit();
          _this.left = left;
          _this.right = right;
          return _this;
        }

        Assign.prototype.getLeft = function () {
          return this.left;
        };

        Assign.prototype.setLeft = function (expr) {
          this.left = expr;
        };

        Assign.prototype.getRight = function () {
          return this.right;
        };

        Assign.prototype.setRight = function (expr) {
          this.right = expr;
        };

        Assign.prototype.evaluateS = function (s) {
          return this.expectedS;
        };

        Assign.prototype.evaluateE = function (e) {
          var _this = this;

          this.getLeft().evaluateE(e).listen(this.getHash(), function (addressVal) {
            _this.getRight().evaluateE(e).listen(_this.getHash(), function (valueVal) {
              e.getMemory().put(addressVal.getAddress(), valueVal);
            });
          });
          this.valVariable.setVal(new Context_1.ValUnit());
          return this.valVariable;
        };

        Assign.prototype.toString = function () {
          return this.left.toString() + " " + $k(":=") + " " + this.right.toString();
        };

        Assign.prototype.clone = function () {
          return new Assign(this.getLeft().clone(), this.getRight().clone());
        };

        return Assign;
      }(Expr_1.Expr);

      exports.Assign = Assign;
      /***/
    },

    /***/
    "./models/values/Stmt.ts":
    /*!*******************************!*\
      !*** ./models/values/Stmt.ts ***!
      \*******************************/

    /***/
    function modelsValuesStmtTs(__unused_webpack_module, exports, __nested_webpack_require_127250__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.StmtBracket = exports.Stmt = void 0;

      var Program_1 = __nested_webpack_require_127250__(
      /*! ./Program */
      "./models/values/Program.ts");

      var Context_1 = __nested_webpack_require_127250__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var Stmt =
      /** @class */
      function (_super) {
        __extends(Stmt, _super);

        function Stmt() {
          var _this = _super !== null && _super.apply(this, arguments) || this;

          _this.valVariable = new Context_1.ValVariable();
          return _this;
        }

        Stmt.prototype.evaluateS = function (s) {
          return null;
        };

        Stmt.prototype.evaluateE = function (e) {
          return null;
        };

        Stmt.prototype.getExpectedS = function () {
          return null;
        };

        Stmt.prototype.toString = function () {
          return null;
        };

        Stmt.prototype.clone = function () {
          return null;
        };

        return Stmt;
      }(Program_1.Program);

      exports.Stmt = Stmt;

      var StmtBracket =
      /** @class */
      function (_super) {
        __extends(StmtBracket, _super);

        function StmtBracket(stmt) {
          var _this = _super.call(this) || this;

          _this.stmt = stmt;
          return _this;
        }

        StmtBracket.prototype.getStmt = function () {
          return this.stmt;
        };

        StmtBracket.prototype.evaluateS = function (s) {
          return this.getStmt().evaluateS(s);
        };

        StmtBracket.prototype.evaluateE = function (e) {
          return this.getStmt().evaluateE(e);
        };

        StmtBracket.prototype.toString = function () {
          return "(" + this.getStmt().toString() + ")";
        };

        StmtBracket.prototype.clone = function () {
          return new StmtBracket(this.getStmt().clone());
        };

        return StmtBracket;
      }(Stmt);

      exports.StmtBracket = StmtBracket;
      /***/
    },

    /***/
    "./models/values/String.ts":
    /*!*********************************!*\
      !*** ./models/values/String.ts ***!
      \*********************************/

    /***/
    function modelsValuesStringTs(__unused_webpack_module, exports, __nested_webpack_require_130460__) {
      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      exports.__esModule = true;
      exports.StringConst = void 0;

      var Expr_1 = __nested_webpack_require_130460__(
      /*! ./Expr */
      "./models/values/Expr.ts");

      var Context_1 = __nested_webpack_require_130460__(
      /*! ../context/Context */
      "./models/context/Context.ts");

      var StringConst =
      /** @class */
      function (_super) {
        __extends(StringConst, _super);

        function StringConst(value) {
          var _this = _super.call(this) || this;

          _this.value = value;
          return _this;
        }

        StringConst.prototype.getType = function () {
          return new Context_1.TypeString();
        };

        StringConst.prototype.getValue = function () {
          return this.value;
        };

        StringConst.prototype.setType = function (value) {
          this.value = value;
        };

        StringConst.prototype.compute = function (e) {
          this.valVariable.setVal(new Context_1.PVal(this.getValue()));
        };

        StringConst.prototype.clone = function () {
          return new StringConst(this.getValue());
        };

        return StringConst;
      }(Expr_1.Expr);

      exports.StringConst = StringConst;
      /***/
    },

    /***/
    "./parser/parser.ts":
    /*!**************************!*\
      !*** ./parser/parser.ts ***!
      \**************************/

    /***/
    function parserParserTs(__unused_webpack_module, exports, __nested_webpack_require_132819__) {
      exports.__esModule = true;
      exports.parse = void 0;

      __nested_webpack_require_132819__(
      /*! js-snackbar/snackbar.css */
      "./node_modules/js-snackbar/snackbar.css");

      var js_snackbar_1 = __nested_webpack_require_132819__(
      /*! js-snackbar */
      "./node_modules/js-snackbar/index.js");

      var typescript_parsec_1 = __nested_webpack_require_132819__(
      /*! typescript-parsec */
      "./node_modules/typescript-parsec/lib/index.js");

      var typescript_parsec_2 = __nested_webpack_require_132819__(
      /*! typescript-parsec */
      "./node_modules/typescript-parsec/lib/index.js");

      var typescript_parsec_3 = __nested_webpack_require_132819__(
      /*! typescript-parsec */
      "./node_modules/typescript-parsec/lib/index.js");

      var Nat_1 = __nested_webpack_require_132819__(
      /*! ../models/values/Nat */
      "./models/values/Nat.ts");

      var Expr_1 = __nested_webpack_require_132819__(
      /*! ../models/values/Expr */
      "./models/values/Expr.ts");

      var Nat_2 = __nested_webpack_require_132819__(
      /*! ../models/values/Nat */
      "./models/values/Nat.ts");

      var Bool_1 = __nested_webpack_require_132819__(
      /*! ../models/values/Bool */
      "./models/values/Bool.ts");

      var Bool_2 = __nested_webpack_require_132819__(
      /*! ../models/values/Bool */
      "./models/values/Bool.ts");

      var Bool_3 = __nested_webpack_require_132819__(
      /*! ../models/values/Bool */
      "./models/values/Bool.ts");

      var Expr_2 = __nested_webpack_require_132819__(
      /*! ../models/values/Expr */
      "./models/values/Expr.ts");

      var Let_1 = __nested_webpack_require_132819__(
      /*! ../models/values/Let */
      "./models/values/Let.ts");

      var Stmt_1 = __nested_webpack_require_132819__(
      /*! ../models/values/Stmt */
      "./models/values/Stmt.ts");

      var Let_2 = __nested_webpack_require_132819__(
      /*! ../models/values/Let */
      "./models/values/Let.ts");

      var FunDecl_1 = __nested_webpack_require_132819__(
      /*! ../models/values/FunDecl */
      "./models/values/FunDecl.ts");

      var FunCall_1 = __nested_webpack_require_132819__(
      /*! ../models/values/FunCall */
      "./models/values/FunCall.ts");

      var Context_1 = __nested_webpack_require_132819__(
      /*! ../models/context/Context */
      "./models/context/Context.ts");

      var Context_2 = __nested_webpack_require_132819__(
      /*! ../models/context/Context */
      "./models/context/Context.ts");

      var FunCall_2 = __nested_webpack_require_132819__(
      /*! ../models/values/FunCall */
      "./models/values/FunCall.ts");

      var RecFunDecl_1 = __nested_webpack_require_132819__(
      /*! ../models/values/RecFunDecl */
      "./models/values/RecFunDecl.ts");

      var State_1 = __nested_webpack_require_132819__(
      /*! ../models/values/State */
      "./models/values/State.ts");

      var State_2 = __nested_webpack_require_132819__(
      /*! ../models/values/State */
      "./models/values/State.ts");

      var TokenKind;

      (function (TokenKind) {
        TokenKind[TokenKind["Nat"] = 0] = "Nat";
        TokenKind[TokenKind["Plus"] = 1] = "Plus";
        TokenKind[TokenKind["Minus"] = 2] = "Minus";
        TokenKind[TokenKind["Times"] = 3] = "Times";
        TokenKind[TokenKind["Div"] = 4] = "Div";
        TokenKind[TokenKind["LParen"] = 5] = "LParen";
        TokenKind[TokenKind["RParen"] = 6] = "RParen";
        TokenKind[TokenKind["Space"] = 7] = "Space";
        TokenKind[TokenKind["Bool"] = 8] = "Bool";
        TokenKind[TokenKind["Equals"] = 9] = "Equals";
        TokenKind[TokenKind["Unequals"] = 10] = "Unequals";
        TokenKind[TokenKind["Less"] = 11] = "Less";
        TokenKind[TokenKind["LessOrEquals"] = 12] = "LessOrEquals";
        TokenKind[TokenKind["Greater"] = 13] = "Greater";
        TokenKind[TokenKind["GreaterOrEquals"] = 14] = "GreaterOrEquals";
        TokenKind[TokenKind["IF"] = 15] = "IF";
        TokenKind[TokenKind["THEN"] = 16] = "THEN";
        TokenKind[TokenKind["ELSE"] = 17] = "ELSE";
        TokenKind[TokenKind["IN"] = 18] = "IN";
        TokenKind[TokenKind["LET"] = 19] = "LET";
        TokenKind[TokenKind["ID"] = 20] = "ID";
        TokenKind[TokenKind["FUN"] = 21] = "FUN";
        TokenKind[TokenKind["REC"] = 22] = "REC";
        TokenKind[TokenKind["REF"] = 23] = "REF";
        TokenKind[TokenKind["BANG"] = 24] = "BANG";
        TokenKind[TokenKind["ASSIGN"] = 25] = "ASSIGN";
        TokenKind[TokenKind["ARROW"] = 26] = "ARROW";
        TokenKind[TokenKind["DOUBLE_POINTS"] = 27] = "DOUBLE_POINTS";
      })(TokenKind || (TokenKind = {}));

      var lexer = (0, typescript_parsec_2.buildLexer)([[true, /^\d+(\.\d+)?/g, TokenKind.Nat], [true, /^\+/g, TokenKind.Plus], [true, /^\-/g, TokenKind.Minus], [true, /^\*/g, TokenKind.Times], [true, /^\//g, TokenKind.Div], [true, /^\(/g, TokenKind.LParen], [true, /^\)/g, TokenKind.RParen], [true, /^true/g, TokenKind.Bool], [true, /^false/g, TokenKind.Bool], [true, /^=/g, TokenKind.Equals], [true, /^<>/g, TokenKind.Unequals], [true, /^</g, TokenKind.Less], [true, /^<=/g, TokenKind.LessOrEquals], [true, /^>/g, TokenKind.Greater], [true, /^>=/g, TokenKind.GreaterOrEquals], [true, /^if/g, TokenKind.IF], [true, /^then/g, TokenKind.THEN], [true, /^else/g, TokenKind.ELSE], [true, /^in/g, TokenKind.IN], [true, /^let/g, TokenKind.LET], [true, /^fun/g, TokenKind.FUN], [true, /^rec/g, TokenKind.REC], [true, /^ref/g, TokenKind.REF], [true, /^!/g, TokenKind.BANG], [true, /^:=/g, TokenKind.ASSIGN], [true, /^[a-zA-Z]+/g, TokenKind.ID], [true, /^->/g, TokenKind.ARROW], [true, /^:/g, TokenKind.DOUBLE_POINTS], [false, /^\s+/g, TokenKind.Space]]);

      function applyNat(value) {
        return new Nat_1.NatConst(parseInt(value.text));
      }

      function applyBool(value) {
        return new Bool_1.BoolConst(value.text === 'true');
      }

      function applyBinary(first, second) {
        switch (second[0].text) {
          case '+':
            return new Nat_2.Plus(first, second[1]);

          case '-':
            return new Nat_1.Minus(first, second[1]);

          case '*':
            return new Nat_1.Times(first, second[1]);

          case '/':
            return new Nat_1.Div(first, second[1]);

          case '=':
            return new Bool_1.Equals(first, second[1]);

          case '<>':
            return new Bool_2.Unequals(first, second[1]);

          case '<':
            return new Bool_1.Less(first, second[1]);

          case '<=':
            return new Bool_3.LessOrEquals(first, second[1]);

          case '>':
            return new Bool_1.Greater(first, second[1]);

          case '>=':
            return new Bool_1.GreaterOrEquals(first, second[1]);

          default:
            throw new Error("Unknown binary operator: " + second[0].text);
        }
      }

      function applyIf(_a) {
        var cond = _a[0],
            then = _a[1],
            else_ = _a[2];
        return new Expr_2.ExprIf(cond, then, else_);
      }

      function applyIn(_a) {
        var left = _a[0],
            right = _a[1];
        return new Let_1.In(left, right);
      }

      function applyLet(_a) {
        var name = _a[0],
            value = _a[1];
        return new Let_1.Let(name.text, value);
      }

      function applyVarUse(name) {
        return new Let_2.VarUse(name.text);
      }

      function applyExprBracket(value) {
        return new Expr_1.ExprBracket(value);
      }

      function applyStmtBracket(value) {
        return new Stmt_1.StmtBracket(value);
      }

      function applyStmt(value) {
        return value;
      }

      function applyExpr(value) {
        return value;
      }

      function applyFunDecl(_a) {
        var name = _a[0],
            paramName = _a[1],
            paramType = _a[2],
            returnType = _a[3],
            expr = _a[4];
        return new FunDecl_1.FunDecl(name.text, new FunCall_1.Param(paramName.text, paramType), expr, returnType);
      }

      function applyRecFunDecl(_a) {
        var name = _a[0],
            paramName = _a[1],
            paramType = _a[2],
            returnType = _a[3],
            expr = _a[4];
        return new RecFunDecl_1.RecFunDecl(name.text, new FunCall_1.Param(paramName.text, paramType), expr, returnType);
      }

      function applyAnonymeFunDecl(_a) {
        var paramName = _a[0],
            paramType = _a[1],
            expr = _a[2];
        return new FunCall_2.AnonymeFunDecl(new FunCall_1.Param(paramName.text, paramType), expr);
      }

      function applyPType(type) {
        switch (type.text) {
          case 'Nat':
            return new Context_1.TypeNat();

          case 'Bool':
            return new Context_2.TypeBool();

          default:
            throw new Error("Unknown type: " + type.text);
        }
      }

      function applyFunType(_a) {
        var left = _a[0],
            right = _a[1];
        return new Context_1.TypeFun(left, right);
      }

      function applyFunCall(name, arg) {
        return new FunCall_1.FunCall(name, arg);
      }

      function applyId(e) {
        return e;
      }

      function applyRef(value) {
        return new State_1.Ref(value);
      }

      function applyBang(value) {
        return new State_1.Bang(value);
      }

      function applyAssign(_a) {
        var left = _a[0],
            right = _a[1];
        return new State_2.Assign(left, right);
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


      var TERM = (0, typescript_parsec_2.rule)();
      var FACTOR = (0, typescript_parsec_2.rule)();
      var PFACTOR = (0, typescript_parsec_2.rule)();
      var EXPN = (0, typescript_parsec_2.rule)();
      var EXP = (0, typescript_parsec_2.rule)();
      var LEXP = (0, typescript_parsec_2.rule)();
      var STMT = (0, typescript_parsec_2.rule)();
      var PROG = (0, typescript_parsec_2.rule)();
      var TYPE = (0, typescript_parsec_2.rule)();
      var LTYPE = (0, typescript_parsec_2.rule)();
      LEXP.setPattern((0, typescript_parsec_3.alt)((0, typescript_parsec_3.apply)((0, typescript_parsec_3.tok)(TokenKind.ID), applyVarUse), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.FUN), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.str)('('), (0, typescript_parsec_3.tok)(TokenKind.ID))), (0, typescript_parsec_3.kmid)((0, typescript_parsec_3.str)(':'), TYPE, (0, typescript_parsec_3.str)(')')), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.ARROW), EXP)), applyAnonymeFunDecl), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.kmid)((0, typescript_parsec_3.str)('('), LEXP, (0, typescript_parsec_3.str)(')')), applyExprBracket)));
      /*
      TERM
        = Nat
        = ('+' | '-') TERM
        = '(' EXP ')'
      */

      TERM.setPattern((0, typescript_parsec_3.alt)((0, typescript_parsec_3.apply)((0, typescript_parsec_3.tok)(TokenKind.Nat), applyNat), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.tok)(TokenKind.Bool), applyBool), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.IF), EXP), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.THEN), EXP), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.ELSE), EXP)), applyIf), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kleft)(STMT, (0, typescript_parsec_3.tok)(TokenKind.IN)), EXP), applyIn), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.kmid)((0, typescript_parsec_3.str)('('), EXP, (0, typescript_parsec_3.str)(')')), applyExprBracket), (0, typescript_parsec_3.apply)((0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.REF), EXP), applyRef), (0, typescript_parsec_3.apply)((0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.BANG), EXP), applyBang), (0, typescript_parsec_3.lrec_sc)(LEXP, EXP, applyFunCall), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kleft)(LEXP, (0, typescript_parsec_3.tok)(TokenKind.ASSIGN)), EXP), applyAssign)));
      /*
      FACTOR
        = TERM
        = FACTOR ('*' | '/') TERM
      */

      FACTOR.setPattern((0, typescript_parsec_3.lrec_sc)(TERM, (0, typescript_parsec_3.seq)((0, typescript_parsec_3.alt)((0, typescript_parsec_3.str)('*'), (0, typescript_parsec_3.str)('/')), TERM), applyBinary));
      /*
      EXP
        = FACTOR
        = EXP ('+' | '-') FACTOR
      */

      EXPN.setPattern((0, typescript_parsec_3.lrec_sc)(FACTOR, (0, typescript_parsec_3.seq)((0, typescript_parsec_3.alt)((0, typescript_parsec_3.str)('+'), (0, typescript_parsec_3.str)('-')), FACTOR), applyBinary));
      EXP.setPattern((0, typescript_parsec_3.lrec_sc)(EXPN, (0, typescript_parsec_3.seq)((0, typescript_parsec_3.alt)((0, typescript_parsec_3.str)('='), (0, typescript_parsec_3.str)('<>'), (0, typescript_parsec_3.str)('<'), (0, typescript_parsec_3.str)('<='), (0, typescript_parsec_3.str)('>'), (0, typescript_parsec_3.str)('>=')), EXPN), applyBinary));
      STMT.setPattern((0, typescript_parsec_3.alt)((0, typescript_parsec_3.apply)((0, typescript_parsec_3.kmid)((0, typescript_parsec_3.str)('('), STMT, (0, typescript_parsec_3.str)(')')), applyStmtBracket), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.LET), (0, typescript_parsec_3.tok)(TokenKind.ID)), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.Equals), EXP)), applyLet), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.LET), (0, typescript_parsec_3.tok)(TokenKind.ID)), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.str)('('), (0, typescript_parsec_3.tok)(TokenKind.ID)), (0, typescript_parsec_3.kmid)((0, typescript_parsec_3.str)(':'), TYPE, (0, typescript_parsec_3.str)(')')), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.str)(':'), TYPE), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.Equals), EXP)), applyFunDecl), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.LET), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.REC), (0, typescript_parsec_3.tok)(TokenKind.ID))), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.str)('('), (0, typescript_parsec_3.tok)(TokenKind.ID)), (0, typescript_parsec_3.kmid)((0, typescript_parsec_3.str)(':'), TYPE, (0, typescript_parsec_3.str)(')')), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.str)(':'), TYPE), (0, typescript_parsec_1.kright)((0, typescript_parsec_3.tok)(TokenKind.Equals), EXP)), applyRecFunDecl)));
      LTYPE.setPattern((0, typescript_parsec_3.apply)((0, typescript_parsec_3.tok)(TokenKind.ID), applyPType));
      TYPE.setPattern((0, typescript_parsec_3.alt)((0, typescript_parsec_3.apply)(LTYPE, applyId), (0, typescript_parsec_3.apply)((0, typescript_parsec_3.seq)((0, typescript_parsec_1.kleft)(LTYPE, (0, typescript_parsec_3.tok)(TokenKind.ARROW)), TYPE), applyFunType)));
      PROG.setPattern((0, typescript_parsec_3.alt)((0, typescript_parsec_3.apply)(STMT, applyStmt), (0, typescript_parsec_3.apply)(EXP, applyExpr)));

      function parse(expr) {
        try {
          return (0, typescript_parsec_2.expectSingleResult)((0, typescript_parsec_2.expectEOF)(PROG.parse(lexer.parse(expr))));
        } catch (e) {
          (0, js_snackbar_1.show)({
            text: 'Ungültiges Syntax!',
            pos: 'top-center',
            backgroundColor: 'red',
            customClass: 'm-snackbar'
          });
          throw e;
        }
      }

      exports.parse = parse;
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/js-snackbar/snackbar.css":
    /*!*********************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/js-snackbar/snackbar.css ***!
      \*********************************************************************************************************************************************************************************************************/

    /***/
    function node_modulesCssLoaderDistCjsJsRuleSet1Rules6OneOf1Use1Node_modulesPostcssLoaderDistCjsJsRuleSet1Rules6OneOf1Use2Node_modulesJsSnackbarSnackbarCss(module, __webpack_exports__, __nested_webpack_require_149905__) {
      __nested_webpack_require_149905__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_149905__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_149905__(
      /*! ../css-loader/dist/runtime/api.js */
      "./node_modules/css-loader/dist/runtime/api.js");
      /* harmony import */


      var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_149905__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function (i) {
        return i[1];
      }); // Module


      ___CSS_LOADER_EXPORT___.push([module.id, ".snackbar-container {\n  transition: all 500ms ease;\n  transition-property: top, right, bottom, left, opacity;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  min-height: 14px;\n  background-color: #070b0e;\n  position: fixed;\n  display: block;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  line-height: 22px;\n  padding: 18px 24px;\n  bottom: 0;\n  top: 0;\n  opacity: 0;\n  z-index: 9999; }\n  .snackbar-container.has-snackbar-action {\n    cursor: pointer; }\n  .snackbar-container .action {\n    background: inherit;\n    display: inline-block;\n    border: none;\n    font-size: inherit;\n    text-transform: uppercase;\n    color: #4caf50;\n    margin: 0 0 0 24px;\n    padding: 0;\n    min-width: -webkit-min-content;\n    min-width: -moz-min-content;\n    min-width: min-content;\n    cursor: pointer; }\n\n@media (min-width: 640px) {\n  .snackbar-container {\n    min-width: 288px;\n    max-width: 568px;\n    display: inline-flex;\n    border-radius: 2px;\n    margin: 24px;\n    bottom: -100px; } }\n\n@media (max-width: 640px) {\n  .snackbar-container {\n    left: 0;\n    right: 0; } }\n\n.snackbar-pos.bottom-center {\n  top: auto !important;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.snackbar-pos.bottom-left {\n  top: auto !important;\n  bottom: 0;\n  left: 0; }\n\n.snackbar-pos.bottom-right {\n  top: auto !important;\n  bottom: 0;\n  right: 0; }\n\n.snackbar-pos.top-left {\n  bottom: auto !important;\n  top: 0;\n  left: 0; }\n\n.snackbar-pos.top-center {\n  bottom: auto !important;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.snackbar-pos.top-right {\n  bottom: auto !important;\n  top: 0;\n  right: 0; }\n\n.snackbar-icon {\n  font-size: 3em;\n  margin-right: 20px; }\n\n.snackbar-close-button {\n  margin-left: 20px; }\n", ""]); // Exports

      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      /***/
    },

    /***/
    "./node_modules/css-loader/dist/runtime/api.js":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /***/
    function node_modulesCssLoaderDistRuntimeApiJs(module) {
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names
      module.exports = function (cssWithMappingToString) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join("");
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === "string") {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, ""]];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };
      /***/

    },

    /***/
    "./node_modules/js-snackbar/index.js":
    /*!*******************************************!*\
      !*** ./node_modules/js-snackbar/index.js ***!
      \*******************************************/

    /***/
    function node_modulesJsSnackbarIndexJs(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_155420__) {
      __nested_webpack_require_155420__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_155420__.d(__webpack_exports__, {
        /* harmony export */
        "show": function show() {
          return (
            /* binding */
            _show
          );
        },

        /* harmony export */
        "hide": function hide() {
          return (
            /* binding */
            _hide
          );
        },

        /* harmony export */
        "ACTION_TYPE": function ACTION_TYPE() {
          return (
            /* binding */
            _ACTION_TYPE
          );
        }
        /* harmony export */

      }); // snackbar button action types


      var _ACTION_TYPE = {
        TEXT: 'TEXT',
        CLOSE: 'CLOSE',
        NONE: 'NONE'
      }; // snackbar inner element styles

      var INNER_ELEMENT = {
        margin: 0,
        padding: 0,
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '1em'
      };
      /**
       * Event handler for action button clicks
       * @param  {object} element - Snackbar HTML element
       * @return {void}
       */

      function actionClickHandler(element) {
        // eslint-disable-next-line no-param-reassign
        element.style.opacity = 0;
      } // snackbar default options


      var SNACKBAR = {
        text: 'Default Text',
        textColor: '#ffffff',
        width: 'auto',
        actionType: _ACTION_TYPE.NONE,
        actionText: 'Dismiss',
        actionTextColor: '#ffffff',
        backgroundColor: '#323232',
        pos: 'bottom-right',
        duration: 5000,
        customClass: '',
        notifyIcon: null,
        imgSrc: null,
        onActionClick: actionClickHandler
      }; // define Snackbar object

      var Snackbar = {
        current: null
      };
      /**
       * Hides the snackbar
       * @return {void}
       */

      function _hide() {
        if (Snackbar.current) {
          Snackbar.current.style.opacity = 0;
        }
      }
      /**
       * Removes the snackbar from the parent element
       * @return {void}
       */


      function removeCurrent() {
        if (this.parentElement) {
          this.parentElement.removeChild(this);
        }
      }
      /**
       * Add notify icon to the inner element, override defaults
       * @param  {object} options - Custom options
       * @return {void}
       */


      function addNotifyIcon(options) {
        if (options.notifyIcon && !options.imgSrc) {
          var icon = document.createElement('i');
          icon.className = 'material-icons snackbar-icon';
          icon.innerHTML = options.notifyIcon;
          Snackbar.snackbar.appendChild(icon);
        }
      }
      /**
       * Add notify image to inner element, override defaults
       * @param  {object} options - Custom options
       * @return {void}
       */


      function addNotifyImage(options) {
        if (options.imgSrc) {
          var image = document.createElement('img');
          image.src = options.imgSrc;
          image.className = 'snackbar-icon';
          Snackbar.snackbar.appendChild(image);
        }
      }
      /**
       * Builds the snackbar container element
       * @param  {object} options - Custom options
       * @return {void}
       */


      function buildContainerElement(options) {
        Snackbar.snackbar = document.createElement('div');
        Snackbar.snackbar.className = 'snackbar-container ' + options.customClass;
        Snackbar.snackbar.style.width = options.width; // snackbar click event handler

        function snackbarClickHandler(e) {
          e.stopPropagation();
          e.preventDefault();
          options.onSnackbarClick(e);
        } // timeout event handler


        function timeoutHandler() {
          options.onTimeout();
        }

        if (typeof options.onSnackbarClick === 'function') {
          Snackbar.snackbar.className += ' has-snackbar-action';
          Snackbar.snackbar.addEventListener('click', snackbarClickHandler);
        }

        if (typeof options.onTimeout === 'function') {
          Snackbar.snackbar.addEventListener('timeout', timeoutHandler);
        }
      }
      /**
       * Build snackbar inner element
       * @param  {object} options - Custom options
       * @return {void}
       */


      function buildInnerElement(options) {
        var p = document.createElement('p');
        p.style.margin = INNER_ELEMENT.margin;
        p.style.padding = INNER_ELEMENT.padding;
        p.style.color = options.textColor;
        p.style.fontSize = INNER_ELEMENT.fontSize;
        p.style.fontWeight = INNER_ELEMENT.fontWeight;
        p.style.lineHeight = INNER_ELEMENT.lineHeight;
        p.innerHTML = options.text; // potentially add notify icon

        addNotifyIcon(options); // potentially add image

        addNotifyImage(options);
        Snackbar.snackbar.appendChild(p);
        Snackbar.snackbar.style.background = options.backgroundColor;
      }
      /**
       * Add text action button
       * @param  {object} options - Custom options
       * @return {void}
       */


      function appendTextButton(options) {
        var actionButton = document.createElement('button');
        actionButton.className = 'action';
        actionButton.innerHTML = options.actionText;
        actionButton.style.color = options.actionTextColor; // action button click event handler

        function textButtonClickHandler(e) {
          e.stopPropagation();
          e.preventDefault();
          options.onActionClick(Snackbar.snackbar);
        }

        actionButton.addEventListener('click', textButtonClickHandler);
        Snackbar.snackbar.appendChild(actionButton);
      }
      /**
       * Add icon action button
       * @param  {object} options - Custom options
       * @return {void}
       */


      function appendCloseButton(options) {
        var closeButton = document.createElement('button');
        closeButton.className = 'mdl-button mdl-js-button mdl-button--icon snackbar-close-button';
        var icon = document.createElement('i');
        icon.className = 'material-icons';
        icon.innerHTML = 'close';
        closeButton.appendChild(icon); // icon button click event handler

        function iconButtonClickHandler(e) {
          e.stopPropagation();
          e.preventDefault();
          options.onActionClick(Snackbar.snackbar);
        }

        closeButton.addEventListener('click', iconButtonClickHandler);
        Snackbar.snackbar.appendChild(closeButton);
      }
      /**
       * Conditionally add an action button
       * @param  {object} options - Custom options
       * @return {void}
       */


      function addActionButton(options) {
        switch (options.actionType) {
          case _ACTION_TYPE.TEXT:
            return appendTextButton(options);

          case _ACTION_TYPE.CLOSE:
            return appendCloseButton(options);

          default:
            return null;
        }
      }
      /**
       * Run method at end of duration BUT allow mouseover to reset timeout
       * @param  {function} method  - Function to invoke on duration end
       * @param  {object} element   - Snackbar HTML element
       * @param  {object} options   - Custom options
       * @return {void}
       */


      function delayWithHoverPause(method, element, options) {
        var timeoutId; // eslint-disable-line no-var
        // start delayed function call

        timeoutId = setTimeout(method, options.duration); // mouse over event handler

        function mouseOverHandler() {
          clearTimeout(timeoutId);
          timeoutId = null;
        } // mouse out event handler


        function mouseOutEventHanlder() {
          timeoutId = setTimeout(method, options.duration);
        }

        if (options.pauseOnHover) {
          element.addEventListener('mouseover', mouseOverHandler);
          element.addEventListener('mouseout', mouseOutEventHanlder);
        }
      }
      /**
       * Appends the snackbar to the body, sets opacity to 1, sets class names
       * @param  {object} options - Custom options
       * @return {void}
       */


      function displaySnackbar(options) {
        document.body.appendChild(Snackbar.snackbar); // gives the values of all the CSS properties of an element after applying the active
        // stylesheets and resolving any basic computation those values may contain
        // eslint-disable-next-line no-unused-vars

        var $bottom = getComputedStyle(Snackbar.snackbar).bottom; // eslint-disable-next-line no-unused-vars

        var $top = getComputedStyle(Snackbar.snackbar).top;
        Snackbar.snackbar.style.opacity = 1;
        Snackbar.snackbar.className += ' snackbar-pos ' + options.pos;
      }
      /**
       * Hides the current snackbar, invoked after options.duration
       * @return {void}
       */


      function handleHideCurrent() {
        if (Snackbar.current === this) {
          Snackbar.current.style.opacity = 0;
          Snackbar.current.dispatchEvent(new Event('timeout'));
        }
      }
      /**
       * Handles transition events
       * @param  {object} event - Raised event
       * @return {void}
       */


      function handleTransitioned(event) {
        if (event.propertyName === 'opacity' && this.style.opacity === '0') {
          this.parentElement.removeChild(this);

          if (Snackbar.current === this) {
            Snackbar.current = null;
          }
        }
      }
      /**
       * Adjust styles prior to appending to body
       * @param  {object} options - Custom options
       * @return {void}
       */


      function preStyleAdjust(options) {
        if (options.pos.includes('top')) {
          Snackbar.snackbar.style.top = '-100px';
        }
      }
      /**
       * Adjust style after appending to body
       * @param  {object} options - Custom options
       * @return {void}
       */


      function postStyleAdjust(options) {
        switch (options.pos) {
          case 'top-left':
          case 'top-right':
            Snackbar.snackbar.style.top = 0;
            break;

          case 'top':
          case 'top-center':
            Snackbar.snackbar.style.top = '39px';
            break;

          case 'bottom':
          case 'bottom-center':
            Snackbar.snackbar.style.bottom = '-39px';
            break;

          default:
            break;
        }
      }
      /**
       * Shows the snackbar by appending to the DOM
       * @param  {object} customOptions - Options to apply to this snackbar
       * @return {void}
       */


      function _show(customOptions) {
        var options = Object.assign({}, SNACKBAR, customOptions); // remove current snackbar

        if (Snackbar.current) {
          Snackbar.current.style.opacity = 0;
          setTimeout(removeCurrent.bind(Snackbar.current), 500);
        } // build snackbar container


        buildContainerElement(options); // build inner snackbar element

        buildInnerElement(options); // conditionally add action button

        addActionButton(options); // hide current - delayed by options.duration

        delayWithHoverPause(handleHideCurrent.bind(Snackbar.snackbar), Snackbar.snackbar, options); // add transition end handler

        Snackbar.snackbar.addEventListener('transitionend', handleTransitioned.bind(Snackbar.snackbar)); // set current snackbar

        Snackbar.current = Snackbar.snackbar; // adjust style prior to appending to body

        preStyleAdjust(options); // append to body, set opacity and class

        displaySnackbar(options); // adjust style after appending to body

        postStyleAdjust(options);
      }
      /***/

    },

    /***/
    "./node_modules/js-snackbar/snackbar.css":
    /*!***********************************************!*\
      !*** ./node_modules/js-snackbar/snackbar.css ***!
      \***********************************************/

    /***/
    function node_modulesJsSnackbarSnackbarCss(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_167487__) {
      __nested_webpack_require_167487__.r(__webpack_exports__);
      /* harmony export */


      __nested_webpack_require_167487__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_167487__(
      /*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
      /* harmony import */


      var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_167487__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_snackbar_css__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_167487__(
      /*! !!../css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./snackbar.css */
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/js-snackbar/snackbar.css");

      var options = {};
      options.insert = "head";
      options.singleton = false;

      var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_snackbar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = _css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_snackbar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
      /***/

    },

    /***/
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /***/
    function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, __unused_webpack_exports, __nested_webpack_require_170061__) {
      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce =  true ? __nested_webpack_require_170061__.nc : 0;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && typeof btoa !== 'undefined') {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "./node_modules/typescript-parsec/lib/Lexer.js":
    /*!*****************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Lexer.js ***!
      \*****************************************************/

    /***/
    function node_modulesTypescriptParsecLibLexerJs(__unused_webpack_module, exports) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      var __extends = this && this.__extends || function () {
        var _extendStatics2 = function extendStatics(d, b) {
          _extendStatics2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics2(d, b);
        };

        return function (d, b) {
          _extendStatics2(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.buildLexer = exports.extractByTokenRange = exports.extractByPositionRange = exports.TokenRangeError = exports.TokenError = void 0;

      function posToString(pos) {
        return pos === undefined ? '<END-OF-FILE>' : JSON.stringify(pos);
      }

      var TokenError =
      /** @class */
      function (_super) {
        __extends(TokenError, _super);

        function TokenError(pos, errorMessage) {
          var _this = _super.call(this, posToString(pos) + ": " + errorMessage) || this;

          _this.pos = pos;
          _this.errorMessage = errorMessage;
          return _this;
        }

        return TokenError;
      }(Error);

      exports.TokenError = TokenError;

      var TokenRangeError =
      /** @class */
      function (_super) {
        __extends(TokenRangeError, _super);

        function TokenRangeError(first, next, errorMessage) {
          var _this = _super.call(this, posToString(first) + " - " + posToString(next) + ": " + errorMessage) || this;

          _this.first = first;
          _this.next = next;
          _this.errorMessage = errorMessage;
          return _this;
        }

        return TokenRangeError;
      }(Error);

      exports.TokenRangeError = TokenRangeError;

      function extractByPositionRange(input, first, next) {
        var firstIndex = first === undefined ? input.length : first.index;
        var nextIndex = next === undefined ? input.length : next.index;

        if (firstIndex >= nextIndex) {
          return '';
        }

        return input.substring(firstIndex, nextIndex);
      }

      exports.extractByPositionRange = extractByPositionRange;

      function extractByTokenRange(input, first, next) {
        return extractByPositionRange(input, first === undefined ? undefined : first.pos, next === undefined ? undefined : next.pos);
      }

      exports.extractByTokenRange = extractByTokenRange;

      var TokenImpl =
      /** @class */
      function () {
        function TokenImpl(lexer, input, kind, text, pos, keep) {
          this.lexer = lexer;
          this.input = input;
          this.kind = kind;
          this.text = text;
          this.pos = pos;
          this.keep = keep;
        }

        Object.defineProperty(TokenImpl.prototype, "next", {
          get: function get() {
            if (this.nextToken === undefined) {
              this.nextToken = this.lexer.parseNextAvailable(this.input, this.pos.index + this.text.length, this.pos.rowEnd, this.pos.columnEnd);

              if (this.nextToken === undefined) {
                this.nextToken = null;
              }
            }

            return this.nextToken === null ? undefined : this.nextToken;
          },
          enumerable: false,
          configurable: true
        });
        return TokenImpl;
      }();

      var LexerImpl =
      /** @class */
      function () {
        function LexerImpl(rules) {
          this.rules = rules;

          for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var rule = _a[_i];

            if (rule[1].source[0] !== '^') {
              throw new Error("Regular expression patterns for a tokenizer should start with \"^\": " + rule[1].source);
            }

            if (!rule[1].global) {
              throw new Error("Regular expression patterns for a tokenizer should be global: " + rule[1].source);
            }
          }
        }

        LexerImpl.prototype.parse = function (input) {
          return this.parseNextAvailable(input, 0, 1, 1);
        };

        LexerImpl.prototype.parseNext = function (input, indexStart, rowBegin, columnBegin) {
          if (indexStart === input.length) {
            return undefined;
          }

          var subString = input.substr(indexStart);
          var result;

          for (var _i = 0, _a = this.rules; _i < _a.length; _i++) {
            var _b = _a[_i],
                keep = _b[0],
                regexp = _b[1],
                kind = _b[2];
            regexp.lastIndex = 0;

            if (regexp.test(subString)) {
              var text = subString.substr(0, regexp.lastIndex);
              var rowEnd = rowBegin;
              var columnEnd = columnBegin;

              for (var _c = 0, text_1 = text; _c < text_1.length; _c++) {
                var c = text_1[_c];

                switch (c) {
                  case '\r':
                    break;

                  case '\n':
                    rowEnd++;
                    columnEnd = 1;
                    break;

                  default:
                    columnEnd++;
                }
              }

              var newResult = new TokenImpl(this, input, kind, text, {
                index: indexStart,
                rowBegin: rowBegin,
                columnBegin: columnBegin,
                rowEnd: rowEnd,
                columnEnd: columnEnd
              }, keep);

              if (result === undefined || result.text.length < newResult.text.length) {
                result = newResult;
              }
            }
          }

          if (result === undefined) {
            throw new TokenError({
              index: indexStart,
              rowBegin: rowBegin,
              columnBegin: columnBegin,
              rowEnd: rowBegin,
              columnEnd: columnBegin
            }, "Unable to tokenize the rest of the input: " + input.substr(indexStart));
          } else {
            return result;
          }
        };

        LexerImpl.prototype.parseNextAvailable = function (input, index, rowBegin, columnBegin) {
          var token;

          while (true) {
            token = this.parseNext(input, token === undefined ? index : token.pos.index + token.text.length, token === undefined ? rowBegin : token.pos.rowEnd, token === undefined ? columnBegin : token.pos.columnEnd);

            if (token === undefined) {
              return undefined;
            } else if (token.keep) {
              return token;
            }
          }
        };

        return LexerImpl;
      }();

      function buildLexer(rules) {
        return new LexerImpl(rules);
      }

      exports.buildLexer = buildLexer;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/AlternativeParser.js":
    /*!*************************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/AlternativeParser.js ***!
      \*************************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersAlternativeParserJs(__unused_webpack_module, exports, __nested_webpack_require_186051__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.alt = void 0;

      var ParserInterface_1 = __nested_webpack_require_186051__(
      /*! ./ParserInterface */
      "./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js"); // CodegenOverloadings:End


      function alt() {
        var ps = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          ps[_i] = arguments[_i];
        }

        return {
          parse: function parse(token) {
            var error;
            var result = [];
            var successful = false;

            for (var _i = 0, ps_1 = ps; _i < ps_1.length; _i++) {
              var p = ps_1[_i];
              var output = p.parse(token);
              error = ParserInterface_1.betterError(error, output.error);

              if (output.successful) {
                result = result.concat(output.candidates);
                successful = true;
              }
            }

            return ParserInterface_1.resultOrError(result, error, successful);
          }
        };
      }

      exports.alt = alt;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/AmbiguousParser.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/AmbiguousParser.js ***!
      \***********************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersAmbiguousParserJs(__unused_webpack_module, exports) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.amb = void 0;

      function amb(p) {
        return {
          parse: function parse(token) {
            var branches = p.parse(token);

            if (!branches.successful) {
              return branches;
            }

            var group = new Map();

            for (var _i = 0, _a = branches.candidates; _i < _a.length; _i++) {
              var r = _a[_i];
              var rs = group.get(r.nextToken);

              if (rs === undefined) {
                group.set(r.nextToken, [r]);
              } else {
                rs.push(r);
              }
            }

            return {
              candidates: Array.from(group.values()).map(function (rs) {
                return {
                  firstToken: rs[0].firstToken,
                  nextToken: rs[0].nextToken,
                  result: rs.map(function (r) {
                    return r.result;
                  })
                };
              }),
              successful: true,
              error: branches.error
            };
          }
        };
      }

      exports.amb = amb;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/ApplyParser.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/ApplyParser.js ***!
      \*******************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersApplyParserJs(__unused_webpack_module, exports, __nested_webpack_require_189428__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.kmid = exports.kright = exports.kleft = exports.apply = void 0;

      var SequencialParser_1 = __nested_webpack_require_189428__(
      /*! ./SequencialParser */
      "./node_modules/typescript-parsec/lib/Parsers/SequencialParser.js");

      function apply(p, callback) {
        return {
          parse: function parse(token) {
            var output = p.parse(token);

            if (output.successful) {
              return {
                candidates: output.candidates.map(function (value) {
                  return {
                    firstToken: token,
                    nextToken: value.nextToken,
                    result: callback(value.result, [token, value.nextToken])
                  };
                }),
                successful: true,
                error: output.error
              };
            } else {
              return output;
            }
          }
        };
      }

      exports.apply = apply;

      function kleft(p1, p2) {
        return apply(SequencialParser_1.seq(p1, p2), function (value) {
          return value[0];
        });
      }

      exports.kleft = kleft;

      function kright(p1, p2) {
        return apply(SequencialParser_1.seq(p1, p2), function (value) {
          return value[1];
        });
      }

      exports.kright = kright;

      function kmid(p1, p2, p3) {
        return apply(SequencialParser_1.seq(p1, p2, p3), function (value) {
          return value[1];
        });
      }

      exports.kmid = kmid;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/ErrorParser.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/ErrorParser.js ***!
      \*******************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersErrorParserJs(__unused_webpack_module, exports) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.errd = exports.err = void 0;

      function err(p, errorMessage) {
        return {
          parse: function parse(token) {
            var branches = p.parse(token);

            if (branches.successful) {
              return branches;
            }

            return {
              successful: false,
              error: {
                kind: 'Error',
                pos: branches.error.pos,
                message: errorMessage
              }
            };
          }
        };
      }

      exports.err = err;

      function errd(p, errorMessage, defaultValue) {
        return {
          parse: function parse(token) {
            var branches = p.parse(token);

            if (branches.successful) {
              return branches;
            }

            return {
              successful: true,
              candidates: [{
                firstToken: token,
                nextToken: token,
                result: defaultValue
              }],
              error: {
                kind: 'Error',
                pos: branches.error.pos,
                message: errorMessage
              }
            };
          }
        };
      }

      exports.errd = errd;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/OptionalParser.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/OptionalParser.js ***!
      \**********************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersOptionalParserJs(__unused_webpack_module, exports, __nested_webpack_require_193395__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.opt_sc = exports.opt = void 0;

      var AlternativeParser_1 = __nested_webpack_require_193395__(
      /*! ./AlternativeParser */
      "./node_modules/typescript-parsec/lib/Parsers/AlternativeParser.js");

      var TokenParser_1 = __nested_webpack_require_193395__(
      /*! ./TokenParser */
      "./node_modules/typescript-parsec/lib/Parsers/TokenParser.js");

      function opt(p) {
        return AlternativeParser_1.alt(p, TokenParser_1.nil());
      }

      exports.opt = opt;

      function opt_sc(p) {
        return {
          parse: function parse(token) {
            var output = p.parse(token);

            if (output.successful) {
              return output;
            } else {
              return {
                candidates: [{
                  firstToken: token,
                  nextToken: token,
                  result: undefined
                }],
                successful: true,
                error: output.error
              };
            }
          }
        };
      }

      exports.opt_sc = opt_sc;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js ***!
      \***********************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersParserInterfaceJs(__unused_webpack_module, exports) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.unableToConsumeToken = exports.resultOrError = exports.betterError = void 0;

      function betterError(e1, e2) {
        if (e1 === undefined) {
          return e2;
        }

        if (e2 === undefined) {
          return e1;
        }

        if (e1.pos === undefined) {
          return e1;
        }

        if (e2.pos === undefined) {
          return e2;
        }

        if (e1.pos.index < e2.pos.index) {
          return e2;
        } else if (e1.pos.index > e2.pos.index) {
          return e1;
        } else {
          return e1;
        }
      }

      exports.betterError = betterError;

      function resultOrError(result, error, successful) {
        if (successful) {
          return {
            candidates: result,
            successful: true,
            error: error
          };
        } else {
          return {
            successful: false,
            error: error
          };
        }
      }

      exports.resultOrError = resultOrError;

      function unableToConsumeToken(token) {
        return {
          kind: 'Error',
          pos: token === undefined ? undefined : token.pos,
          message: "Unable to consume token: " + (token === undefined ? '<END-OF-FILE>' : token.text)
        };
      }

      exports.unableToConsumeToken = unableToConsumeToken;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/RepeativeParser.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/RepeativeParser.js ***!
      \***********************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersRepeativeParserJs(__unused_webpack_module, exports, __nested_webpack_require_197040__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.lrec_sc = exports.lrec = exports.list_sc = exports.list = exports.repr = exports.rep_sc = exports.rep = void 0;

      var ApplyParser_1 = __nested_webpack_require_197040__(
      /*! ./ApplyParser */
      "./node_modules/typescript-parsec/lib/Parsers/ApplyParser.js");

      var ParserInterface_1 = __nested_webpack_require_197040__(
      /*! ./ParserInterface */
      "./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js");

      var SequencialParser_1 = __nested_webpack_require_197040__(
      /*! ./SequencialParser */
      "./node_modules/typescript-parsec/lib/Parsers/SequencialParser.js");

      function rep(p) {
        var reprParser = repr(p);
        return {
          parse: function parse(token) {
            var output = reprParser.parse(token);

            if (output.successful) {
              return {
                candidates: output.candidates.reverse(),
                successful: true,
                error: output.error
              };
            } else {
              return output;
            }
          }
        };
      }

      exports.rep = rep;

      function rep_sc(p) {
        return {
          parse: function parse(token) {
            var error;
            var result = [{
              firstToken: token,
              nextToken: token,
              result: []
            }];

            while (true) {
              var steps = result;
              result = [];

              for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
                var step = steps_1[_i];
                var output = p.parse(step.nextToken);
                error = ParserInterface_1.betterError(error, output.error);

                if (output.successful) {
                  for (var _a = 0, _b = output.candidates; _a < _b.length; _a++) {
                    var candidate = _b[_a];

                    if (candidate.nextToken !== step.nextToken) {
                      result.push({
                        firstToken: step.firstToken,
                        nextToken: candidate.nextToken,
                        result: step.result.concat([candidate.result])
                      });
                    }
                  }
                }
              }

              if (result.length === 0) {
                result = steps;
                break;
              }
            }

            return ParserInterface_1.resultOrError(result, error, true);
          }
        };
      }

      exports.rep_sc = rep_sc;

      function repr(p) {
        return {
          parse: function parse(token) {
            var error;
            var result = [{
              firstToken: token,
              nextToken: token,
              result: []
            }];

            for (var i = 0; i < result.length; i++) {
              var step = result[i];
              var output = p.parse(step.nextToken);
              error = ParserInterface_1.betterError(error, output.error);

              if (output.successful) {
                for (var _i = 0, _a = output.candidates; _i < _a.length; _i++) {
                  var candidate = _a[_i];

                  if (candidate.nextToken !== step.nextToken) {
                    result.push({
                      firstToken: step.firstToken,
                      nextToken: candidate.nextToken,
                      result: step.result.concat([candidate.result])
                    });
                  }
                }
              }
            }

            return ParserInterface_1.resultOrError(result, error, true);
          }
        };
      }

      exports.repr = repr;

      function applyList(value) {
        return [value[0]].concat(value[1].map(function (pair) {
          return pair[1];
        }));
      }

      function list(p, s) {
        return ApplyParser_1.apply(SequencialParser_1.seq(p, rep(SequencialParser_1.seq(s, p))), applyList);
      }

      exports.list = list;

      function list_sc(p, s) {
        return ApplyParser_1.apply(SequencialParser_1.seq(p, rep_sc(SequencialParser_1.seq(s, p))), applyList);
      }

      exports.list_sc = list_sc;

      function applyLrec(callback) {
        return function (value) {
          var result = value[0];

          for (var _i = 0, _a = value[1]; _i < _a.length; _i++) {
            var tail = _a[_i];
            result = callback(result, tail);
          }

          return result;
        };
      }

      function lrec(p, q, callback) {
        return ApplyParser_1.apply(SequencialParser_1.seq(p, rep(q)), applyLrec(callback));
      }

      exports.lrec = lrec;

      function lrec_sc(p, q, callback) {
        return ApplyParser_1.apply(SequencialParser_1.seq(p, rep_sc(q)), applyLrec(callback));
      }

      exports.lrec_sc = lrec_sc;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/Rule.js":
    /*!************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/Rule.js ***!
      \************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersRuleJs(__unused_webpack_module, exports, __nested_webpack_require_202390__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.expectSingleResult = exports.expectEOF = exports.rule = void 0;

      var Lexer_1 = __nested_webpack_require_202390__(
      /*! ../Lexer */
      "./node_modules/typescript-parsec/lib/Lexer.js");

      var ParserInterface_1 = __nested_webpack_require_202390__(
      /*! ./ParserInterface */
      "./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js");

      var RuleImpl =
      /** @class */
      function () {
        function RuleImpl() {// nothing
        }

        RuleImpl.prototype.setPattern = function (parser) {
          this.parser = parser;
        };

        RuleImpl.prototype.parse = function (token) {
          if (this.parser === undefined) {
            throw new Error("Rule has not been initialized. setPattern is required before calling parse.");
          }

          return this.parser.parse(token);
        };

        return RuleImpl;
      }();

      function rule() {
        return new RuleImpl();
      }

      exports.rule = rule;

      function expectEOF(output) {
        if (!output.successful) {
          return output;
        }

        if (output.candidates.length === 0) {
          return {
            successful: false,
            error: {
              kind: 'Error',
              pos: undefined,
              message: 'No result is returned.'
            }
          };
        }

        var filtered = [];
        var error = output.error;

        for (var _i = 0, _a = output.candidates; _i < _a.length; _i++) {
          var candidate = _a[_i];

          if (candidate.nextToken === undefined) {
            filtered.push(candidate);
          } else {
            error = ParserInterface_1.betterError(error, {
              kind: 'Error',
              pos: candidate.nextToken === undefined ? undefined : candidate.nextToken.pos,
              message: "The parser cannot reach the end of file, stops at \"" + candidate.nextToken.text + "\" at position " + JSON.stringify(candidate.nextToken.pos) + "."
            });
          }
        }

        return ParserInterface_1.resultOrError(filtered, error, filtered.length !== 0);
      }

      exports.expectEOF = expectEOF;

      function expectSingleResult(output) {
        if (!output.successful) {
          throw new Lexer_1.TokenError(output.error.pos, output.error.message);
        }

        if (output.candidates.length === 0) {
          throw new Lexer_1.TokenError(undefined, 'No result is returned.');
        }

        if (output.candidates.length !== 1) {
          throw new Lexer_1.TokenError(undefined, 'Multiple results are returned.');
        }

        return output.candidates[0].result;
      }

      exports.expectSingleResult = expectSingleResult;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/SequencialParser.js":
    /*!************************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/SequencialParser.js ***!
      \************************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersSequencialParserJs(__unused_webpack_module, exports, __nested_webpack_require_205744__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.seq = void 0;

      var ParserInterface_1 = __nested_webpack_require_205744__(
      /*! ./ParserInterface */
      "./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js"); // CodegenOverloadings:End


      function seq() {
        var ps = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          ps[_i] = arguments[_i];
        }

        return {
          parse: function parse(token) {
            var error;
            var result = [{
              firstToken: token,
              nextToken: token,
              result: []
            }];

            for (var _i = 0, ps_1 = ps; _i < ps_1.length; _i++) {
              var p = ps_1[_i];

              if (result.length === 0) {
                break;
              }

              var steps = result;
              result = [];

              for (var _a = 0, steps_1 = steps; _a < steps_1.length; _a++) {
                var step = steps_1[_a];
                var output = p.parse(step.nextToken);
                error = ParserInterface_1.betterError(error, output.error);

                if (output.successful) {
                  for (var _b = 0, _c = output.candidates; _b < _c.length; _b++) {
                    var candidate = _c[_b];
                    result.push({
                      firstToken: step.firstToken,
                      nextToken: candidate.nextToken,
                      result: step.result.concat([candidate.result])
                    });
                  }
                }
              }
            }

            return ParserInterface_1.resultOrError(result, error, result.length !== 0);
          }
        };
      }

      exports.seq = seq;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/Parsers/TokenParser.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/Parsers/TokenParser.js ***!
      \*******************************************************************/

    /***/
    function node_modulesTypescriptParsecLibParsersTokenParserJs(__unused_webpack_module, exports, __nested_webpack_require_208054__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.tok = exports.str = exports.nil = void 0;

      var ParserInterface_1 = __nested_webpack_require_208054__(
      /*! ./ParserInterface */
      "./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js");

      function nil() {
        return {
          parse: function parse(token) {
            return {
              candidates: [{
                firstToken: token,
                nextToken: token,
                result: undefined
              }],
              successful: true,
              error: undefined
            };
          }
        };
      }

      exports.nil = nil;

      function str(toMatch) {
        return {
          parse: function parse(token) {
            if (token === undefined || token.text !== toMatch) {
              return {
                successful: false,
                error: ParserInterface_1.unableToConsumeToken(token)
              };
            }

            return {
              candidates: [{
                firstToken: token,
                nextToken: token.next,
                result: token
              }],
              successful: true,
              error: undefined
            };
          }
        };
      }

      exports.str = str;

      function tok(toMatch) {
        return {
          parse: function parse(token) {
            if (token === undefined || token.kind !== toMatch) {
              return {
                successful: false,
                error: ParserInterface_1.unableToConsumeToken(token)
              };
            }

            return {
              candidates: [{
                firstToken: token,
                nextToken: token.next,
                result: token
              }],
              successful: true,
              error: undefined
            };
          }
        };
      }

      exports.tok = tok;
      /***/
    },

    /***/
    "./node_modules/typescript-parsec/lib/index.js":
    /*!*****************************************************!*\
      !*** ./node_modules/typescript-parsec/lib/index.js ***!
      \*****************************************************/

    /***/
    function node_modulesTypescriptParsecLibIndexJs(__unused_webpack_module, exports, __nested_webpack_require_210456__) {
      // Copyright (c) Microsoft Corporation.
      // Licensed under the MIT license.
      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
        }
      };

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Lexer */
      "./node_modules/typescript-parsec/lib/Lexer.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/ParserInterface */
      "./node_modules/typescript-parsec/lib/Parsers/ParserInterface.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/TokenParser */
      "./node_modules/typescript-parsec/lib/Parsers/TokenParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/SequencialParser */
      "./node_modules/typescript-parsec/lib/Parsers/SequencialParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/AlternativeParser */
      "./node_modules/typescript-parsec/lib/Parsers/AlternativeParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/OptionalParser */
      "./node_modules/typescript-parsec/lib/Parsers/OptionalParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/RepeativeParser */
      "./node_modules/typescript-parsec/lib/Parsers/RepeativeParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/ApplyParser */
      "./node_modules/typescript-parsec/lib/Parsers/ApplyParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/AmbiguousParser */
      "./node_modules/typescript-parsec/lib/Parsers/AmbiguousParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/ErrorParser */
      "./node_modules/typescript-parsec/lib/Parsers/ErrorParser.js"), exports);

      __exportStar(__nested_webpack_require_210456__(
      /*! ./Parsers/Rule */
      "./node_modules/typescript-parsec/lib/Parsers/Rule.js"), exports);
      /***/

    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __nested_webpack_require_213250__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      id: moduleId,

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_213250__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/compat get default export */

  /******/


  (function () {
    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/
    __nested_webpack_require_213250__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function () {
        return module['default'];
      } :
      /******/
      function () {
        return module;
      };
      /******/

      __nested_webpack_require_213250__.d(getter, {
        a: getter
      });
      /******/


      return getter;
      /******/
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __nested_webpack_require_213250__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__nested_webpack_require_213250__.o(definition, key) && !__nested_webpack_require_213250__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __nested_webpack_require_213250__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __nested_webpack_require_213250__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module is referenced by other modules so it can't be inlined

  /******/


  var __webpack_exports__ = __nested_webpack_require_213250__("./app.ts");
  /******/

  /******/

})();

/***/ }),

/***/ "./models/context/Context.ts":
/*!***********************************!*\
  !*** ./models/context/Context.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.ValVariable = exports.ValAddress = exports.ValUnit = exports.ValRecFun = exports.ValFun = exports.PVal = exports.Val = exports.TypeUnit = exports.TypeRef = exports.TypeFun = exports.TypeVariable = exports.TypeString = exports.TypeBool = exports.TypeNat = exports.Memory = exports.Environment = exports.SignatureVariable = exports.Signature = void 0;

var Signature =
/** @class */
function () {
  function Signature(context) {
    if (context === void 0) {
      context = {};
    }

    this.context = context;
  }

  Signature.prototype.clone = function () {
    return new Signature(__assign({}, this.context));
  };

  Signature.prototype.get = function (ident) {
    return this.context[ident];
  };

  Signature.prototype.put = function (ident, type) {
    this.context[ident] = type;
    return this;
  };

  Signature.prototype.getContext = function () {
    return this.context;
  };

  Signature.prototype.merge = function (e) {
    this.context = __assign(__assign({}, this.context), e.getContext());
    return this;
  };

  Signature.prototype.getHash = function () {
    var _this = this;

    var tmp = Object.keys(this.context).reduce(function (acc, ident) {
      return acc + ", " + ident + " " + $i('&#x21A6;') + " " + _this.get(ident).toString();
    }, "");
    return "{ " + tmp.substr(2) + " }";
  };

  Signature.prototype.toString = function () {
    return this.getHash();
  };

  return Signature;
}();

exports.Signature = Signature;

var SignatureVariable =
/** @class */
function () {
  function SignatureVariable(value) {
    SignatureVariable.counter++;
    this.name = "&Sigma;<sub>" + SignatureVariable.counter + "</sub>";
    this.id = btoa(this.name + Date.now());
    this.setSignature(value);
  }

  SignatureVariable.prototype.getName = function () {
    return this.name;
  };

  SignatureVariable.prototype.getSignature = function () {
    return this.signature;
  };

  SignatureVariable.prototype.setSignature = function (value) {
    if (this.signature == null) {
      var id = CSS.escape(this.id);
      if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
        return e.outerHTML = value.toString();
      });
      this.signature = value;
    }

    return this;
  };

  SignatureVariable.prototype.isAssigned = function () {
    return this.signature != null;
  };

  SignatureVariable.prototype.equals = function (value) {
    if (!(value instanceof SignatureVariable)) return false;
    return value.getHash() == this.getHash();
  };

  SignatureVariable.prototype.getHash = function () {
    return this.signature == null ? this.getName() : this.signature.getHash();
  };

  SignatureVariable.prototype.toString = function () {
    return this.signature != null ? this.signature.toString() : $t(this.name, {
      id: this.id
    });
  };

  SignatureVariable.prototype.clone = function () {
    return new SignatureVariable();
  };

  SignatureVariable.counter = 0;
  return SignatureVariable;
}();

exports.SignatureVariable = SignatureVariable;

var Environment =
/** @class */
function () {
  function Environment(context, memory) {
    if (context === void 0) {
      context = {};
    }

    if (memory === void 0) {
      memory = null;
    }

    this.context = context;
    this.memory = memory;
  }

  Environment.prototype.clone = function (withMemory) {
    if (withMemory === void 0) {
      withMemory = false;
    }

    return new Environment(__assign({}, this.context), withMemory ? this.memory.clone() : this.memory);
  };

  Environment.prototype.get = function (ident) {
    return this.context[ident];
  };

  Environment.prototype.put = function (ident, val) {
    this.context[ident] = val;
    return this;
  };

  Environment.prototype.getContext = function () {
    return this.context;
  };

  Environment.prototype.merge = function (e) {
    this.context = __assign(__assign({}, this.context), e.getContext());
    return this;
  };

  Environment.prototype.getMemory = function () {
    return this.memory;
  };

  Environment.prototype.toString = function () {
    var _this = this;

    var tmp = Object.keys(this.context).reduce(function (acc, ident) {
      return acc + "," + ident + " " + $i('&#x21A6;') + " " + _this.get(ident).toString();
    }, "");
    return "{ " + tmp.substr(1) + " }"; //+ (Environment.memory == null ? "" : (" &boxV; " + Environment.memory.toString()))
  };

  return Environment;
}();

exports.Environment = Environment;

var Memory =
/** @class */
function () {
  function Memory(context) {
    if (context === void 0) {
      context = {};
    }

    Memory.memoryCounter++;
    this.id = "memory-" + Memory.memoryCounter;
    this.context = context;
  }

  Memory.prototype.clone = function () {
    return new Memory(__assign({}, this.context));
  };

  Memory.prototype.get = function (ident) {
    return this.context[ident];
  };

  Memory.prototype.put = function (ident, val) {
    var _this = this; //if (!(Object.keys(this.context) as any).includes(ident))
    //throw Error("The address \"" + ident + "\" is unallocated")


    this.context[ident] = val;
    var id = CSS.escape(this.id);
    if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
      return e.outerHTML = _this.toString();
    });
    return this;
  };

  Memory.prototype.allocate = function () {
    Memory.counter++;
    var address = "a<sub memory=" + this.id + ">" + Memory.counter + "</sub>"; //this.context[address] = null

    return address;
  };

  Memory.prototype.getContext = function () {
    return this.context;
  };

  Memory.prototype.merge = function (e) {
    this.context = __assign(__assign({}, this.context), e.getContext());
    return this;
  };

  Memory.prototype.toString = function () {
    var _this = this;

    var tmp = Object.keys(this.context).reduce(function (acc, ident) {
      return _this.get(ident) == null ? acc : acc + "," + ident + " " + $i('&#x21A6;') + " " + _this.get(ident).toString();
    }, "");
    return $m("{" + tmp.substr(1) + "}", {
      id: this.id
    });
  };

  Memory.counter = 0;
  Memory.memoryCounter = 0;
  return Memory;
}();

exports.Memory = Memory;

var TypeNat =
/** @class */
function () {
  function TypeNat() {}

  TypeNat.prototype.getHash = function () {
    return "Nat";
  };

  TypeNat.prototype.toString = function () {
    return $t(this.getHash());
  };

  TypeNat.prototype.equals = function (value) {
    return value.getHash() == this.getHash();
  };

  TypeNat.prototype.clone = function () {
    return new TypeNat();
  };

  return TypeNat;
}();

exports.TypeNat = TypeNat;

var TypeBool =
/** @class */
function () {
  function TypeBool() {}

  TypeBool.prototype.getHash = function () {
    return "Bool";
  };

  TypeBool.prototype.toString = function () {
    return $t(this.getHash());
  };

  TypeBool.prototype.equals = function (value) {
    return value.getHash() == this.getHash();
  };

  TypeBool.prototype.clone = function () {
    return new TypeBool();
  };

  return TypeBool;
}();

exports.TypeBool = TypeBool;

var TypeString =
/** @class */
function () {
  function TypeString() {}

  TypeString.prototype.getHash = function () {
    return "String";
  };

  TypeString.prototype.toString = function () {
    return $t(this.getHash());
  };

  TypeString.prototype.equals = function (value) {
    return value.getHash() == this.getHash();
  };

  TypeString.prototype.clone = function () {
    return new TypeString();
  };

  return TypeString;
}();

exports.TypeString = TypeString;

var TypeVariable =
/** @class */
function () {
  function TypeVariable() {
    this.listeners = {};
    TypeVariable.counter++;
    this.name = "t<sub>" + TypeVariable.counter + "</sub>";
    this.id = btoa(this.name + Date.now());
  }

  TypeVariable.prototype.getName = function () {
    return this.name;
  };

  TypeVariable.prototype.getType = function () {
    return this.type;
  };

  TypeVariable.prototype.setType = function (value) {
    var _this = this;

    if (this.type == null && value != null) {
      var id = CSS.escape(this.id);
      if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
        return e.outerHTML = value.toString();
      });
      this.type = value;
      Object.keys(this.listeners).forEach(function (k) {
        return _this.listeners[k](_this.type);
      });
    }
  };

  TypeVariable.prototype.isAssigned = function () {
    return this.type != null;
  };

  TypeVariable.prototype.listen = function (key, listener) {
    if (this.type) listener(this.type);
    this.listeners[key] = listener;
    return this;
  };

  TypeVariable.prototype.equals = function (value) {
    if (value instanceof SignatureVariable) return false;
    if (this.type == null) return true;
    return value instanceof TypeVariable ? value.getType().equals(this.getType()) : value.equals(this.type);
  };

  TypeVariable.prototype.getHash = function () {
    return this.type == null ? $t(this.name, {
      id: this.id
    }) : this.type.getHash();
  };

  TypeVariable.prototype.toString = function () {
    return this.type != null ? this.type.toString() : $t(this.name, {
      id: this.id
    });
  };

  TypeVariable.prototype.clone = function () {
    return new TypeVariable();
  };

  TypeVariable.counter = 0;
  return TypeVariable;
}();

exports.TypeVariable = TypeVariable;

var TypeFun =
/** @class */
function () {
  function TypeFun(paramType, bodyType) {
    this.paramType = paramType;
    this.bodyType = bodyType;
  }

  TypeFun.prototype.getParamType = function () {
    return this.paramType;
  };

  TypeFun.prototype.getBodyType = function () {
    return this.bodyType;
  };

  TypeFun.prototype.setBodyType = function (value) {
    this.bodyType = value;
  };

  TypeFun.prototype.equals = function (value) {
    if (value instanceof TypeFun) {
      var valueFun = value;
      if (this.getParamType() instanceof TypeVariable) return this.getBodyType().equals(valueFun.getBodyType());
      if (this.getBodyType() instanceof TypeVariable) return this.getParamType().equals(valueFun.getParamType());
      return true;
    }

    return value.getHash() == this.getHash();
  };

  TypeFun.prototype.getHash = function () {
    return this.getParamType().toString() + " " + $i('&#x21A6;') + " " + this.getBodyType().toString();
  };

  TypeFun.prototype.toString = function () {
    return $t(this.getHash());
  };

  TypeFun.prototype.clone = function () {
    return new TypeFun(this.getParamType().clone(), this.getBodyType().clone());
  };

  return TypeFun;
}();

exports.TypeFun = TypeFun;

var TypeRef =
/** @class */
function () {
  function TypeRef(type) {
    this.type = type;
  }

  TypeRef.prototype.getType = function () {
    return this.type;
  };

  TypeRef.prototype.equals = function (value) {
    if (value instanceof TypeRef) return this.getType().equals(value.getType());
    return this.type instanceof TypeVariable ? this.type.equals(value) : value.getHash() == this.getHash();
  };

  TypeRef.prototype.getHash = function () {
    return "Ref &lt;" + this.type.getHash() + "&gt;";
  };

  TypeRef.prototype.toString = function () {
    return $t(this.getHash());
  };

  TypeRef.prototype.clone = function () {
    return new TypeRef(this.getType().clone());
  };

  return TypeRef;
}();

exports.TypeRef = TypeRef;

var TypeUnit =
/** @class */
function () {
  function TypeUnit() {}

  TypeUnit.prototype.getHash = function () {
    return "Unit";
  };

  TypeUnit.prototype.toString = function () {
    return $t(this.getHash());
  };

  TypeUnit.prototype.equals = function (value) {
    return value.getHash() == this.getHash();
  };

  TypeUnit.prototype.clone = function () {
    return new TypeUnit();
  };

  return TypeUnit;
}();

exports.TypeUnit = TypeUnit;

var Val =
/** @class */
function () {
  function Val() {
    this.memory = new Memory();
  }

  Val.prototype.setMemory = function (memory) {
    this.memory = memory;
  };

  Val.prototype.getMemory = function () {
    return this.memory;
  };

  return Val;
}();

exports.Val = Val;

var PVal =
/** @class */
function (_super) {
  __extends(PVal, _super);

  function PVal(value) {
    var _this = _super.call(this) || this;

    _this.value = value;
    return _this;
  }

  PVal.prototype.getValue = function () {
    return this.value;
  };

  PVal.prototype.toString = function () {
    if (typeof this.getValue() === 'number') return "" + this.getValue();
    if (typeof this.getValue() === 'boolean') return this.getValue() ? "true" : "false";
    return '"' + this.getValue() + '"';
  };

  PVal.prototype.clone = function () {
    return new PVal(this.getValue());
  };

  return PVal;
}(Val);

exports.PVal = PVal;

var ValFun =
/** @class */
function (_super) {
  __extends(ValFun, _super);

  function ValFun(env, param, body) {
    var _this = _super.call(this) || this;

    _this.env = env;
    _this.param = param;
    _this.body = body;
    return _this;
  }

  ValFun.prototype.getEnv = function (clone) {
    if (clone === void 0) {
      clone = false;
    }

    return clone ? this.env.clone() : this.env;
  };

  ValFun.prototype.getBody = function () {
    return this.body;
  };

  ValFun.prototype.getParam = function () {
    return this.param;
  };

  ValFun.prototype.toString = function () {
    return "<" + this.env.toString() + ", " + this.param.getName() + ", " + this.body.toString() + ">";
  };

  ValFun.prototype.clone = function () {
    return new ValFun(this.getEnv().clone(), this.getParam().clone(), this.getBody().clone());
  };

  return ValFun;
}(Val);

exports.ValFun = ValFun;

var ValRecFun =
/** @class */
function (_super) {
  __extends(ValRecFun, _super);

  function ValRecFun(env, funName, param, body) {
    var _this = _super.call(this, env, param, body) || this;

    _this.funName = funName;
    return _this;
  }

  ValRecFun.prototype.getFunName = function () {
    return this.funName;
  };

  ValRecFun.prototype.toString = function () {
    return "<" + this.getEnv().toString() + ", " + this.getFunName() + ", " + this.getParam().getName() + ", " + this.getBody().toString() + ">";
  };

  ValRecFun.prototype.clone = function () {
    return new ValRecFun(this.getEnv().clone(), this.getFunName(), this.getParam().clone(), this.getBody().clone());
  };

  return ValRecFun;
}(ValFun);

exports.ValRecFun = ValRecFun;

var ValUnit =
/** @class */
function (_super) {
  __extends(ValUnit, _super);

  function ValUnit() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ValUnit.prototype.toString = function () {
    return "()";
  };

  ValUnit.prototype.clone = function () {
    return new ValUnit();
  };

  return ValUnit;
}(Val);

exports.ValUnit = ValUnit;

var ValAddress =
/** @class */
function (_super) {
  __extends(ValAddress, _super);

  function ValAddress(address) {
    var _this = _super.call(this) || this;

    _this.address = address;
    return _this;
  }

  ValAddress.prototype.getAddress = function () {
    return this.address;
  };

  ValAddress.prototype.toString = function () {
    return this.address;
  };

  ValAddress.prototype.clone = function () {
    return new ValAddress(this.getAddress());
  };

  return ValAddress;
}(Val);

exports.ValAddress = ValAddress;

var ValVariable =
/** @class */
function (_super) {
  __extends(ValVariable, _super);

  function ValVariable(val) {
    var _this = _super.call(this) || this;

    _this.listeners = {};
    _this.val = val;
    ValVariable.counter++;
    _this.name = "n<sub>" + ValVariable.counter + "</sub>";
    _this.id = btoa(_this.name + Date.now());
    return _this;
  }

  ValVariable.prototype.getVal = function () {
    return this.val;
  };

  ValVariable.prototype.setVal = function (val) {
    var _this = this;

    if (val == null || this.val != null) return;
    if (this.val == null) this.val = val;else {
      if (this.val instanceof Val) {
        if (!(val instanceof Val)) throw Error("val should be of type \"Val\"");
        this.val = val;
      }

      if (this.val instanceof Environment) {
        if (!(val instanceof Environment)) throw Error("val should be of type \"Environment\"");
        this.val.merge(val);
      }
    }
    var id = CSS.escape(this.id);
    if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
      return e.outerHTML = _this.val.toString();
    });
    Object.keys(this.listeners).forEach(function (k) {
      return _this.listeners[k](_this.val);
    });
    return this;
  };

  ValVariable.prototype.listen = function (key, listener) {
    if (this.val) listener(this.val);
    this.listeners[key] = listener;
    return this;
  };

  ValVariable.prototype.setToString = function (toString) {
    var id = CSS.escape(this.id);
    if (document.querySelector("." + id) && !this._toString) document.querySelectorAll("." + id).forEach(function (e) {
      return e.innerHTML = toString;
    });
    this._toString = toString;
  };

  ValVariable.prototype.toString = function () {
    return this.val == null ? $v(this._toString || this.name, {
      id: this.id
    }) : $v(this.val.toString(), {
      id: this.id
    });
  };

  ValVariable.prototype.clone = function () {
    return new ValVariable(this.getVal());
  };

  ValVariable.counter = 0;
  return ValVariable;
}(Val);

exports.ValVariable = ValVariable;

/***/ }),

/***/ "./models/rules/AxiomRule.ts":
/*!***********************************!*\
  !*** ./models/rules/AxiomRule.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.AxiomRule = void 0;

var Nat_1 = __webpack_require__(/*! ../values/Nat */ "./models/values/Nat.ts");

var Bool_1 = __webpack_require__(/*! ../values/Bool */ "./models/values/Bool.ts");

var String_1 = __webpack_require__(/*! ../values/String */ "./models/values/String.ts");

var Let_1 = __webpack_require__(/*! ../values/Let */ "./models/values/Let.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var AxiomRule =
/** @class */
function () {
  function AxiomRule() {}

  AxiomRule.prototype.apply = function (stmt) {
    if (stmt.isStatic()) {
      if (stmt.getExpectedS() == null || stmt.getExpectedS() instanceof Context_1.TypeVariable) stmt.setExpectedS(stmt.getProg().evaluateS(stmt.getContext(true)));else if (stmt.getExpectedS() instanceof Context_1.TypeFun) {
        var expectedFun = stmt.getExpectedS();
        if (expectedFun.getParamType() instanceof Context_1.TypeVariable || expectedFun.getBodyType() instanceof Context_1.TypeVariable) stmt.setExpectedS(stmt.getProg().evaluateS(stmt.getContext(true)));
      } else if (stmt.getExpectedS() instanceof Context_1.TypeRef) {
        var expectedRef = stmt.getExpectedS();
        if (expectedRef.getType() instanceof Context_1.TypeVariable) stmt.setExpectedS(stmt.getProg().evaluateS(stmt.getContext(true)));
      }
    } else {
      var prog = stmt.getProg();
      if (prog instanceof Nat_1.NatConst || prog instanceof Bool_1.BoolConst || prog instanceof String_1.StringConst || prog instanceof Let_1.VarUse) prog.compute(stmt.getContext());
    }

    return [];
  };

  AxiomRule.prototype.match = function (stmt) {
    var className = new Bool_1.BoolConst().constructor.name;
    return stmt.getProg() instanceof Bool_1.BoolConst && this.ruleType.constructor.name === className ? stmt.getProg().getValue() === this.ruleType.getValue() : stmt.getProg().constructor.name === this.ruleType.constructor.name;
  };

  AxiomRule.prototype.setRuleType = function (expr) {
    this.ruleType = expr;
    return this;
  };

  AxiomRule.prototype.getRuleType = function () {
    return this.ruleType;
  };

  return AxiomRule;
}();

exports.AxiomRule = AxiomRule;

/***/ }),

/***/ "./models/rules/ExprRule.ts":
/*!**********************************!*\
  !*** ./models/rules/ExprRule.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.ExprBracketRule = exports.ExprIfRule = exports.ExprBinaryRule = void 0;

var Rule_1 = __webpack_require__(/*! ./Rule */ "./models/rules/Rule.ts");

var Expr_1 = __webpack_require__(/*! ../values/Expr */ "./models/values/Expr.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var Bool_1 = __webpack_require__(/*! ../values/Bool */ "./models/values/Bool.ts");

var ExprBinaryRule =
/** @class */
function () {
  function ExprBinaryRule() {}

  ExprBinaryRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();
    var leftType = prog.getLeft().getExpectedS();

    if (stmt.isStatic()) {
      stmt.setExpectedS(prog.getExpectedS());
      leftType = stmt.getProg() instanceof Bool_1.Equals || stmt.getProg() instanceof Bool_1.Unequals ? prog.getLeft().getExpectedS() : new Context_1.TypeNat();
    }

    return [new Rule_1.Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(leftType), new Rule_1.Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(leftType)];
  };

  ExprBinaryRule.prototype.match = function (stmt) {
    return stmt.getProg().constructor.name === this.ruleType.constructor.name; //stmt.getProg() instanceof ExprBinary 
  };

  ExprBinaryRule.prototype.setRuleType = function (expr) {
    this.ruleType = expr;
    return this;
  };

  ExprBinaryRule.prototype.getRuleType = function () {
    return this.ruleType;
  };

  return ExprBinaryRule;
}();

exports.ExprBinaryRule = ExprBinaryRule;

var ExprIfRule =
/** @class */
function () {
  function ExprIfRule() {}

  ExprIfRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();

    if (stmt.isStatic()) {
      if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());
    }

    if (stmt.isStatic()) return [new Rule_1.Statement(prog.getCond(), stmt.getContext(true)).setExpectedS(new Context_1.TypeBool()), new Rule_1.Statement(prog.getThen(), stmt.getContext(true)).setExpectedS(stmt.getExpectedS()), new Rule_1.Statement(prog.getElse(), stmt.getContext(true)).setExpectedS(stmt.getExpectedS())];else {
      var stmtVar_1 = new Rule_1.StatementVariable();
      prog.getCond().evaluateE(stmt.getContext(true)).listen(stmt.getHash(), function (val) {
        stmtVar_1.setStmt(val.getValue() ? new Rule_1.Statement(prog.getThen(), stmt.getContext(true)) : new Rule_1.Statement(prog.getElse(), stmt.getContext(true)));
      });
      return [new Rule_1.Statement(prog.getCond(), stmt.getContext(true)), stmtVar_1];
    }
  };

  ExprIfRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof Expr_1.ExprIf;
  };

  return ExprIfRule;
}();

exports.ExprIfRule = ExprIfRule;

var ExprBracketRule =
/** @class */
function () {
  function ExprBracketRule() {}

  ExprBracketRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();
    return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true))];
  };

  ExprBracketRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof Expr_1.ExprBracket;
  };

  return ExprBracketRule;
}();

exports.ExprBracketRule = ExprBracketRule;

/***/ }),

/***/ "./models/rules/FunCallRule.ts":
/*!*************************************!*\
  !*** ./models/rules/FunCallRule.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.FunCallRule = exports.AnonymeFunDeclRule = void 0;

var Rule_1 = __webpack_require__(/*! ./Rule */ "./models/rules/Rule.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var FunCall_1 = __webpack_require__(/*! ../values/FunCall */ "./models/values/FunCall.ts");

var Let_1 = __webpack_require__(/*! ../values/Let */ "./models/values/Let.ts");

var AnonymeFunDeclRule =
/** @class */
function () {
  function AnonymeFunDeclRule() {}

  AnonymeFunDeclRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();

    if (stmt.isStatic()) {
      if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());
      var expectedFun = stmt.getExpectedS();
      return [new Rule_1.Statement(prog.getBody(), stmt.getContext(true).put(prog.getParam().getName(), prog.getParam().getType())).setExpectedS(expectedFun.getBodyType())];
    } else {
      return [];
    }
  };

  AnonymeFunDeclRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof FunCall_1.AnonymeFunDecl;
  };

  return AnonymeFunDeclRule;
}();

exports.AnonymeFunDeclRule = AnonymeFunDeclRule;

var FunCallRule =
/** @class */
function () {
  function FunCallRule() {}

  FunCallRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();

    if (stmt.isStatic()) {
      if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());

      if (prog.getFun() instanceof Let_1.VarUse) {
        var expectedFun = new Context_1.TypeFun(new Context_1.TypeVariable(), stmt.getExpectedS());
        return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)).setExpectedS(expectedFun), new Rule_1.Statement(prog.getArg(), stmt.getContext(true)).setExpectedS(expectedFun.getParamType())];
      } else {
        var expectedFun = prog.getFun().getExpectedS();
        expectedFun.setBodyType(stmt.getExpectedS());
        return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)).setExpectedS(expectedFun), new Rule_1.Statement(prog.getArg(), stmt.getContext(true)).setExpectedS(expectedFun.getParamType())];
      }
    } else {
      if (prog.getFun() instanceof Let_1.VarUse) {
        var fun = stmt.getContext().get(prog.getFun().getName());
        var arg = prog.getArg();
        return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)), new Rule_1.Statement(arg, stmt.getContext(true)), new Rule_1.Statement(fun.getBody(), (fun instanceof Context_1.ValRecFun ? fun.getEnv(true).put(fun.getFunName(), fun.clone()) : fun.getEnv(true)).put(fun.getParam().getName(), arg.evaluateE(stmt.getContext(true))))];
      } else {
        var fun = prog.getFun().evaluateE(stmt.getContext(true)).getVal();
        return [new Rule_1.Statement(prog.getFun(), stmt.getContext(true)), new Rule_1.Statement(prog.getArg(), stmt.getContext(true)), new Rule_1.Statement(fun.getBody(), fun.getEnv(true).put(fun.getParam().getName(), prog.getArg().evaluateE(stmt.getContext(true))))];
      }
    }
  };

  FunCallRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof FunCall_1.FunCall;
  };

  return FunCallRule;
}();

exports.FunCallRule = FunCallRule;

/***/ }),

/***/ "./models/rules/FunDeclRule.ts":
/*!*************************************!*\
  !*** ./models/rules/FunDeclRule.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.FunDeclRule = void 0;

var Rule_1 = __webpack_require__(/*! ./Rule */ "./models/rules/Rule.ts");

var FunDecl_1 = __webpack_require__(/*! ../values/FunDecl */ "./models/values/FunDecl.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var FunDeclRule =
/** @class */
function () {
  function FunDeclRule() {}

  FunDeclRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();
    var ctx = stmt.getContext(true);

    if (ctx instanceof Context_1.Signature) {
      ctx.merge(prog.evaluateS(stmt.getContext(true)));
      ctx.put(prog.getParam().getName(), prog.getParam().getType());
      return [new Rule_1.Statement(prog.getBody(), ctx).setExpectedS(prog.getReturnType())];
    } else {
      ctx.merge(prog.evaluateE(stmt.getContext(true)));
      return [];
    }
  };

  FunDeclRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof FunDecl_1.FunDecl;
  };

  return FunDeclRule;
}();

exports.FunDeclRule = FunDeclRule;

/***/ }),

/***/ "./models/rules/LetRule.ts":
/*!*********************************!*\
  !*** ./models/rules/LetRule.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.InRule = exports.LetRule = void 0;

var Rule_1 = __webpack_require__(/*! ./Rule */ "./models/rules/Rule.ts");

var Let_1 = __webpack_require__(/*! ../values/Let */ "./models/values/Let.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var LetRule =
/** @class */
function () {
  function LetRule() {}

  LetRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();

    if (stmt.isStatic()) {
      var sv = stmt.getExpectedS() || new Context_1.SignatureVariable().setSignature(prog.evaluateS(stmt.getContext()));
      stmt.setExpectedS(sv);
      return [new Rule_1.Statement(prog.getValue(), stmt.getContext(true)).setExpectedS(sv.getSignature().get(prog.getName()))];
    }

    return [new Rule_1.Statement(prog.getValue(), stmt.getContext(true))];
  };

  LetRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof Let_1.Let;
  };

  return LetRule;
}();

exports.LetRule = LetRule;

var InRule =
/** @class */
function () {
  function InRule() {}

  InRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();
    var left = new Rule_1.Statement(prog.getLeft(), stmt.getContext(true));

    if (stmt.isStatic()) {
      if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.getExpectedS());
      var sv = new Context_1.SignatureVariable().setSignature(prog.getLeft().evaluateS(stmt.getContext()));
      return [left.setExpectedS(sv), new Rule_1.Statement(prog.getRight(), stmt.getContext(true).merge(sv.getSignature())).setExpectedS(stmt.getExpectedS())];
    } else {
      return [left, new Rule_1.Statement(prog.getRight(), stmt.getContext(true).merge(left.evaluateE()))];
    }
  };

  InRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof Let_1.In;
  };

  return InRule;
}();

exports.InRule = InRule;

/***/ }),

/***/ "./models/rules/Rule.ts":
/*!******************************!*\
  !*** ./models/rules/Rule.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.StatementVariable = exports.Statement = void 0;

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var Expr_1 = __webpack_require__(/*! ../values/Expr */ "./models/values/Expr.ts");

var Statement =
/** @class */
function () {
  function Statement(prog, context) {
    this.context = context;
    this.prog = prog;
  }

  Statement.prototype.getContext = function (clone) {
    if (clone === void 0) {
      clone = false;
    }

    return clone && this.context != null ? this.context.clone() : this.context;
  };

  Statement.prototype.getProg = function () {
    return this.prog;
  };

  Statement.prototype.evaluateS = function () {
    return this.prog.evaluateS(this.getContext(true));
  };

  Statement.prototype.evaluateE = function () {
    return this.prog.evaluateE(this.getContext(true));
  };

  Statement.prototype.isStatic = function () {
    return this.getContext() instanceof Context_1.Signature;
  };

  Statement.prototype.setExpectedS = function (value) {
    if (value instanceof Context_1.Signature) {
      if (this.expectedS instanceof Context_1.SignatureVariable) {
        this.expectedS.setSignature(value);
      }
    } else if (this.expectedS != null) {
      value = value instanceof Context_1.TypeVariable ? value.getType() : value;

      if (this.expectedS instanceof Context_1.TypeVariable) {
        this.expectedS.setType(value);
      } else if (this.expectedS instanceof Context_1.TypeFun && value instanceof Context_1.TypeFun) {
        var typeFun = this.expectedS;
        var valueFun = value;
        if (typeFun.getParamType() instanceof Context_1.TypeVariable) typeFun.getParamType().setType(valueFun.getParamType());
        if (typeFun.getBodyType() instanceof Context_1.TypeVariable) typeFun.getBodyType().setType(valueFun.getBodyType());
      }

      if (this.expectedS instanceof Context_1.TypeRef && value instanceof Context_1.TypeRef) {
        var typeRef = this.expectedS;
        var valueRef = value;
        if (typeRef.getType() instanceof Context_1.TypeVariable) typeRef.getType().setType(valueRef.getType());
      }
    }

    if (this.expectedS == null && !(value instanceof Context_1.Signature)) this.expectedS = value;
    return this;
  };

  Statement.prototype.getExpectedS = function () {
    return this.expectedS;
  };

  Statement.prototype.isTypeCorrect = function () {
    var _this = this;

    if (this.getExpectedS() == null || this.evaluateS() instanceof Context_1.Signature) return true;

    if (this.getExpectedS() instanceof Context_1.TypeVariable) {
      var expectedType = this.getExpectedS();
      if (expectedType.isAssigned()) return this.getExpectedS().equals(this.evaluateS());else expectedType.listen(this.getHash(), function (val) {
        if (_this.evaluateS() instanceof Context_1.TypeVariable) _this.evaluateS().listen("tc-" + _this.getHash(), function (type) {
          document.querySelector('#' + "tc-" + _this.getHash()).outerHTML = $e((_this.context != null ? _this.context.toString() : "") + " &boxvr; " + _this.prog.toString() + " : " + (val || "").toString(), {
            skip: val.equals(type),
            msg: 'Ungültiger Typ'
          });
        });else document.querySelector('#' + "tc-" + _this.getHash()).outerHTML = $e((_this.context != null ? _this.context.toString() : "") + " &boxvr; " + _this.prog.toString() + " : " + (val || "").toString(), {
          skip: val.equals(_this.evaluateS()),
          msg: 'Ungültiger Typ'
        });
      });
      return true;
    }

    if (this.evaluateS() instanceof Context_1.TypeVariable) {
      this.evaluateS().listen("tc-" + this.getHash(), function (type) {
        document.querySelector('#' + "tc-" + _this.getHash()).outerHTML = $e((_this.context != null ? _this.context.toString() : "") + " &boxvr; " + _this.prog.toString() + " : " + (_this.getExpectedS() || "").toString(), {
          skip: _this.getExpectedS().equals(type),
          msg: 'Ungültiger Typ'
        });
      });
      return this.evaluateS().equals(this.getExpectedS());
    }

    return this.getExpectedS().equals(this.evaluateS());
  };

  Statement.prototype.getHash = function () {
    return "s-" + this.getProg().getHash();
  };

  Statement.prototype.toString = function () {
    if (this.getContext(true) instanceof Context_1.Signature) {
      if (this.getExpectedS() == null) this.setExpectedS(new Context_1.TypeVariable());
      return $e((this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " : " + (this.getExpectedS() || (this.prog instanceof Expr_1.Expr ? this.prog : this.prog).getExpectedS() || "").toString(), {
        skip: this.isTypeCorrect(),
        msg: 'Ungültiger Typ',
        id: "tc-" + this.getHash()
      }); //this.prog.evaluateS(this.getContext(true) as Signature).toString()
    } else return (this.context != null ? this.context.toString() : "") + " &boxvr; " + this.prog.toString() + " " + $i('&dArr;') + " " + this.prog.evaluateE(this.getContext(true)).toString(); //+  ((this.getContext(true) as Environment).getMemory()==null ?"":(" &boxV; "+(this.getContext(true) as Environment).getMemory().toString()))

  };

  Statement.prototype.clone = function () {
    return new Statement(this.getProg().clone(), this.getContext().clone());
  };

  return Statement;
}();

exports.Statement = Statement;

var StatementVariable =
/** @class */
function () {
  function StatementVariable(stmt) {
    this.stmt = stmt;
    StatementVariable.counter++;
    var name = "s<sub>" + StatementVariable.counter + "</sub>";
    this.id = btoa(name + Date.now());
  }

  StatementVariable.prototype.getStmt = function () {
    return this.stmt;
  };

  StatementVariable.prototype.setStmt = function (stmt) {
    var _this = this;

    this.stmt = stmt;
    var id = CSS.escape(this.id);
    if (document.querySelector("." + id)) document.querySelectorAll("." + id).forEach(function (e) {
      return e.outerHTML = _this.stmt.toString();
    });
    if (this.listener) this.listener(this.stmt);
    return this;
  };

  StatementVariable.prototype.listen = function (listener) {
    if (this.stmt) listener(this.stmt);
    this.listener = listener;
    return this;
  };

  StatementVariable.prototype.toString = function () {
    return this.stmt == null ? $s(null, {
      id: this.id
    }) : $v(this.stmt.toString(), {
      id: this.id
    });
  };

  StatementVariable.prototype.clone = function () {
    return new StatementVariable(this.getStmt().clone());
  };

  StatementVariable.counter = 0;
  return StatementVariable;
}();

exports.StatementVariable = StatementVariable;

/***/ }),

/***/ "./models/rules/StateRule.ts":
/*!***********************************!*\
  !*** ./models/rules/StateRule.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.AssignRule = exports.BangRule = exports.RefRule = void 0;

var Rule_1 = __webpack_require__(/*! ./Rule */ "./models/rules/Rule.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var State_1 = __webpack_require__(/*! ../values/State */ "./models/values/State.ts");

var RefRule =
/** @class */
function () {
  function RefRule() {}

  RefRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();

    if (stmt.isStatic()) {
      var tr = prog.evaluateS(stmt.getContext());
      stmt.setExpectedS(tr);
      return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true)).setExpectedS(tr.getType())];
    }

    var prevCtx = stmt.getContext(true);
    prog.evaluateE(prevCtx);
    prog.compute();
    return [new Rule_1.Statement(prog.getExpr(), prevCtx)];
  };

  RefRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof State_1.Ref;
  };

  return RefRule;
}();

exports.RefRule = RefRule;

var BangRule =
/** @class */
function () {
  function BangRule() {}

  BangRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();

    if (stmt.isStatic()) {
      if (stmt.getExpectedS() == null) stmt.setExpectedS(prog.evaluateS(stmt.getContext()));
      return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true)).setExpectedS(new Context_1.TypeRef(stmt.getExpectedS()))];
    }

    return [new Rule_1.Statement(prog.getExpr(), stmt.getContext(true))];
  };

  BangRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof State_1.Bang;
  };

  return BangRule;
}();

exports.BangRule = BangRule;

var AssignRule =
/** @class */
function () {
  function AssignRule() {}

  AssignRule.prototype.apply = function (stmt) {
    var prog = stmt.getProg();

    if (stmt.isStatic()) {
      var type = prog.evaluateS(stmt.getContext());
      stmt.setExpectedS(type);
      var tr = prog.getLeft().evaluateS(stmt.getContext(true));
      var stmtVar_1 = new Rule_1.StatementVariable();
      if (tr instanceof Context_1.TypeVariable) tr.listen(stmt.getHash(), function (val) {
        stmtVar_1.setStmt(new Rule_1.Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(val instanceof Context_1.TypeRef ? val.getType() : val));
      });else stmtVar_1.setStmt(new Rule_1.Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(tr instanceof Context_1.TypeRef ? tr.getType() : tr));
      return [new Rule_1.Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(tr), stmtVar_1]; //return [new Statement(prog.getLeft(), stmt.getContext(true)).setExpectedS(tr), new Statement(prog.getRight(), stmt.getContext(true)).setExpectedS(tr.getType())]
    }

    return [new Rule_1.Statement(prog.getLeft(), stmt.getContext(true)), new Rule_1.Statement(prog.getRight(), stmt.getContext(true))];
  };

  AssignRule.prototype.match = function (stmt) {
    return stmt.getProg() instanceof State_1.Assign;
  };

  return AssignRule;
}();

exports.AssignRule = AssignRule;

/***/ }),

/***/ "./models/values/Bool.ts":
/*!*******************************!*\
  !*** ./models/values/Bool.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.GreaterOrEquals = exports.Greater = exports.LessOrEquals = exports.Less = exports.Unequals = exports.Equals = exports.BoolConst = void 0;

var Expr_1 = __webpack_require__(/*! ./Expr */ "./models/values/Expr.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var BoolConst =
/** @class */
function (_super) {
  __extends(BoolConst, _super);

  function BoolConst(value) {
    var _this = _super.call(this) || this;

    _this.value = value;
    return _this;
  }

  BoolConst.prototype.getType = function () {
    return new Context_1.TypeBool();
  };

  BoolConst.prototype.getValue = function () {
    return this.value;
  };

  BoolConst.prototype.setValue = function (value) {
    this.value = value;
  };

  BoolConst.prototype.evaluateS = function (s) {
    return this.getType();
  };

  BoolConst.prototype.evaluateE = function (e) {
    return this.valVariable;
  };

  BoolConst.prototype.compute = function () {
    this.valVariable.setVal(new Context_1.PVal(this.getValue()));
  };

  BoolConst.prototype.toString = function () {
    return this.getValue() ? "true" : "false";
  };

  BoolConst.prototype.clone = function () {
    return new BoolConst(this.value);
  };

  return BoolConst;
}(Expr_1.Expr);

exports.BoolConst = BoolConst;

var Equals =
/** @class */
function (_super) {
  __extends(Equals, _super);

  function Equals() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Equals.prototype.evaluateS = function (s) {
    return new Context_1.TypeBool();
  };

  Equals.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " = " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() == rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Equals.prototype.getExpectedS = function () {
    return new Context_1.TypeBool();
  };

  Equals.prototype.toString = function () {
    return this.getLeft().toString() + " = " + this.getRight().toString();
  };

  Equals.prototype.clone = function () {
    return new Equals(this.getLeft().clone(), this.getRight().clone());
  };

  return Equals;
}(Expr_1.ExprBinary);

exports.Equals = Equals;

var Unequals =
/** @class */
function (_super) {
  __extends(Unequals, _super);

  function Unequals() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Unequals.prototype.evaluateS = function (s) {
    return new Context_1.TypeBool();
  };

  Unequals.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " <> " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() != rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Unequals.prototype.getExpectedS = function () {
    return new Context_1.TypeBool();
  };

  Unequals.prototype.toString = function () {
    return this.getLeft().toString() + " <> " + this.getRight().toString();
  };

  Unequals.prototype.clone = function () {
    return new Unequals(this.getLeft().clone(), this.getRight().clone());
  };

  return Unequals;
}(Expr_1.ExprBinary);

exports.Unequals = Unequals;

var Less =
/** @class */
function (_super) {
  __extends(Less, _super);

  function Less() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Less.prototype.evaluateS = function (s) {
    return new Context_1.TypeBool();
  };

  Less.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " < " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() < rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Less.prototype.getExpectedS = function () {
    return new Context_1.TypeBool();
  };

  Less.prototype.toString = function () {
    return this.getLeft().toString() + " < " + this.getRight().toString();
  };

  Less.prototype.clone = function () {
    return new Less(this.getLeft().clone(), this.getRight().clone());
  };

  return Less;
}(Expr_1.ExprBinary);

exports.Less = Less;

var LessOrEquals =
/** @class */
function (_super) {
  __extends(LessOrEquals, _super);

  function LessOrEquals() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  LessOrEquals.prototype.evaluateS = function (s) {
    return new Context_1.TypeBool();
  };

  LessOrEquals.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " <= " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() <= rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  LessOrEquals.prototype.getExpectedS = function () {
    return new Context_1.TypeBool();
  };

  LessOrEquals.prototype.toString = function () {
    return this.getLeft().toString() + " <= " + this.getRight().toString();
  };

  LessOrEquals.prototype.clone = function () {
    return new LessOrEquals(this.getLeft().clone(), this.getRight().clone());
  };

  return LessOrEquals;
}(Expr_1.ExprBinary);

exports.LessOrEquals = LessOrEquals;

var Greater =
/** @class */
function (_super) {
  __extends(Greater, _super);

  function Greater() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Greater.prototype.evaluateS = function (s) {
    return new Context_1.TypeBool();
  };

  Greater.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " > " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() > rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Greater.prototype.getExpectedS = function () {
    return new Context_1.TypeBool();
  };

  Greater.prototype.toString = function () {
    return this.getLeft().toString() + " > " + this.getRight().toString();
  };

  Greater.prototype.clone = function () {
    return new Greater(this.getLeft().clone(), this.getRight().clone());
  };

  return Greater;
}(Expr_1.ExprBinary);

exports.Greater = Greater;

var GreaterOrEquals =
/** @class */
function (_super) {
  __extends(GreaterOrEquals, _super);

  function GreaterOrEquals() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  GreaterOrEquals.prototype.evaluateS = function (s) {
    return new Context_1.TypeBool();
  };

  GreaterOrEquals.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " >= " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() >= rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  GreaterOrEquals.prototype.getExpectedS = function () {
    return new Context_1.TypeBool();
  };

  GreaterOrEquals.prototype.toString = function () {
    return this.getLeft().toString() + " >= " + this.getRight().toString();
  };

  GreaterOrEquals.prototype.clone = function () {
    return new GreaterOrEquals(this.getLeft().clone(), this.getRight().clone());
  };

  return GreaterOrEquals;
}(Expr_1.ExprBinary);

exports.GreaterOrEquals = GreaterOrEquals;

/***/ }),

/***/ "./models/values/Expr.ts":
/*!*******************************!*\
  !*** ./models/values/Expr.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.ExprBracket = exports.ExprIf = exports.ExprBinary = exports.Expr = void 0;

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var Program_1 = __webpack_require__(/*! ./Program */ "./models/values/Program.ts");

var Expr =
/** @class */
function (_super) {
  __extends(Expr, _super);

  function Expr() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.valVariable = new Context_1.ValVariable();
    return _this;
  }

  Expr.prototype.evaluateS = function (s) {
    return null;
  };

  Expr.prototype.getExpectedS = function () {
    return null;
  };

  Expr.prototype.evaluateE = function (e) {
    return null;
  };

  Expr.prototype.clone = function () {
    return null;
  };

  return Expr;
}(Program_1.Program);

exports.Expr = Expr;

var ExprBinary =
/** @class */
function (_super) {
  __extends(ExprBinary, _super);

  function ExprBinary(left, right) {
    var _this = _super.call(this) || this;

    _this.left = left;
    _this.right = right;
    return _this;
  }

  ExprBinary.prototype.getLeft = function () {
    return this.left;
  };

  ExprBinary.prototype.setLeft = function (left) {
    this.left = left;
  };

  ExprBinary.prototype.getRight = function () {
    return this.right;
  };

  ExprBinary.prototype.setRight = function (right) {
    this.right = right;
  };

  ExprBinary.prototype.clone = function () {
    return null;
  };

  return ExprBinary;
}(Expr);

exports.ExprBinary = ExprBinary;

var ExprIf =
/** @class */
function (_super) {
  __extends(ExprIf, _super);

  function ExprIf(cond, then, else_) {
    var _this = _super.call(this) || this;

    _this.expectedS = new Context_1.TypeVariable();
    _this.cond = cond;
    _this.then = then;
    _this["else"] = else_;
    return _this;
  }

  ExprIf.prototype.getCond = function () {
    return this.cond;
  };

  ExprIf.prototype.setCond = function (cond) {
    this.cond = cond;
  };

  ExprIf.prototype.getThen = function () {
    return this.then;
  };

  ExprIf.prototype.setThen = function (then) {
    this.then = then;
  };

  ExprIf.prototype.getElse = function () {
    return this["else"];
  };

  ExprIf.prototype.setElse = function (else_) {
    this["else"] = else_;
  };

  ExprIf.prototype.evaluateS = function (s) {
    return this.getThen().evaluateS(s);
  };

  ExprIf.prototype.getExpectedS = function () {
    return this.expectedS;
  };

  ExprIf.prototype.evaluateE = function (e) {
    var _this = this;

    var cond = this.getCond().evaluateE(e);
    var then = this.getThen().evaluateE(e);
    var else_ = this.getElse().evaluateE(e);
    this.valVariable.setToString("?");
    cond.listen(this.getHash(), function (condVal) {
      if (condVal.getValue()) {
        _this.valVariable.setToString(then.toString());

        then.listen(_this.getHash(), function (thenVal) {
          _this.valVariable.setVal(thenVal);
        });
      } else {
        _this.valVariable.setToString(else_.toString());

        else_.listen(_this.getHash(), function (elseVal) {
          _this.valVariable.setVal(elseVal);
        });
      }
    });
    return this.valVariable;
  };

  ExprIf.prototype.toString = function () {
    return $k("if") + " " + this.getCond() + " " + $k("then") + " " + this.getThen().toString() + " " + $k("else") + " " + this.getElse().toString();
  };

  ExprIf.prototype.clone = function () {
    return new ExprIf(this.getCond().clone(), this.getThen().clone(), this.getElse().clone());
  };

  return ExprIf;
}(Expr);

exports.ExprIf = ExprIf;

var ExprBracket =
/** @class */
function (_super) {
  __extends(ExprBracket, _super);

  function ExprBracket(expr) {
    var _this = _super.call(this) || this;

    _this.expr = expr;
    return _this;
  }

  ExprBracket.prototype.getExpr = function () {
    return this.expr;
  };

  ExprBracket.prototype.evaluateS = function (s) {
    return this.getExpr().evaluateS(s);
  };

  ExprBracket.prototype.evaluateE = function (e) {
    /*const expr = this.getExpr().evaluateE(e)
    this.valVariable.setToString(expr.toString())
      expr.listen(this.getHash(), (exprVal: Val) => {
        this.valVariable.setVal(exprVal)
    })*/
    return this.getExpr().evaluateE(e); //this.valVariable
  };

  ExprBracket.prototype.getExpectedS = function () {
    return this.getExpr().getExpectedS();
  };

  ExprBracket.prototype.toString = function () {
    return "(" + this.getExpr().toString() + ")";
  };

  ExprBracket.prototype.clone = function () {
    return new ExprBracket(this.getExpr().clone());
  };

  return ExprBracket;
}(Expr);

exports.ExprBracket = ExprBracket;

/***/ }),

/***/ "./models/values/FunCall.ts":
/*!**********************************!*\
  !*** ./models/values/FunCall.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.FunCall = exports.Param = exports.AnonymeFunDecl = void 0;

var Expr_1 = __webpack_require__(/*! ./Expr */ "./models/values/Expr.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var AnonymeFunDecl =
/** @class */
function (_super) {
  __extends(AnonymeFunDecl, _super);

  function AnonymeFunDecl(param, body) {
    var _this = _super.call(this) || this;

    _this.param = param;
    _this.body = body;
    _this.expectedS = new Context_1.TypeFun(_this.getParam().getType(), new Context_1.TypeVariable());
    return _this;
  }

  AnonymeFunDecl.prototype.getParam = function () {
    return this.param;
  };

  AnonymeFunDecl.prototype.setParam = function (param) {
    this.param = param;
  };

  AnonymeFunDecl.prototype.getBody = function () {
    return this.body;
  };

  AnonymeFunDecl.prototype.setBody = function (body) {
    this.body = body;
  };

  AnonymeFunDecl.prototype.evaluateS = function (s) {
    return new Context_1.TypeFun(this.getParam().getType(), this.getBody().evaluateS(s.clone().put(this.getParam().getName(), this.getParam().getType())));
  };

  AnonymeFunDecl.prototype.evaluateE = function (e) {
    this.valVariable.setVal(new Context_1.ValFun(e.clone(), this.getParam(), this.getBody()));
    return this.valVariable;
  };

  AnonymeFunDecl.prototype.getExpectedS = function () {
    return this.expectedS;
  };

  AnonymeFunDecl.prototype.toString = function () {
    return $k("fun") + " (" + this.getParam().toString() + ") -> " + this.getBody().toString();
  };

  AnonymeFunDecl.prototype.clone = function () {
    return new AnonymeFunDecl(this.getParam(), this.getBody());
  };

  return AnonymeFunDecl;
}(Expr_1.Expr);

exports.AnonymeFunDecl = AnonymeFunDecl;

var Param =
/** @class */
function () {
  function Param(name, type) {
    this.name = name;
    this.type = type;
  }

  Param.prototype.getName = function () {
    return this.name;
  };

  Param.prototype.setName = function (name) {
    this.name = name;
  };

  Param.prototype.getType = function () {
    return this.type;
  };

  Param.prototype.setType = function (type) {
    this.type = type;
  };

  Param.prototype.toString = function () {
    return this.getName() + " : " + this.getType().toString();
  };

  Param.prototype.clone = function () {
    return new Param(this.getName(), this.getType().clone());
  };

  return Param;
}();

exports.Param = Param;

var FunCall =
/** @class */
function (_super) {
  __extends(FunCall, _super);

  function FunCall(fun, arg) {
    var _this = _super.call(this) || this;

    _this.expectedS = new Context_1.TypeVariable();
    _this.fun = fun;
    _this.arg = arg;
    return _this;
  }

  FunCall.prototype.getFun = function () {
    return this.fun;
  };

  FunCall.prototype.setFun = function (fun) {
    this.fun = fun;
  };

  FunCall.prototype.getArg = function () {
    return this.arg;
  };

  FunCall.prototype.setArg = function (arg) {
    this.arg = arg;
  };

  FunCall.prototype.evaluateS = function (s) {
    var fun = this.getFun().evaluateS(s);
    return fun.getBodyType();
  };

  FunCall.prototype.evaluateE = function (e) {
    var _this = this;

    this.valVariable.setToString("?");
    this.setArg(this.getArg().clone());
    this.getArg().evaluateE(e).listen(this.getHash(), function (argVal) {
      _this.getFun().evaluateE(e).listen(_this.getHash(), function (funVal) {
        if (funVal instanceof Context_1.ValRecFun) {
          var ctx = funVal.getEnv().clone().put(funVal.getFunName(), funVal).put(funVal.getParam().getName(), argVal);
          funVal.getBody().evaluateE(ctx).listen(_this.getHash(), function (bodyVal) {
            _this.valVariable.setVal(bodyVal);
          });
        } else if (funVal instanceof Context_1.ValFun) {
          var ctx = funVal.getEnv().clone().put(funVal.getParam().getName(), argVal);
          funVal.getBody().evaluateE(ctx).listen(_this.getHash(), function (bodyVal) {
            _this.valVariable.setVal(bodyVal);
          });
        }
      });
    });
    return this.valVariable;
  };

  FunCall.prototype.getExpectedS = function () {
    return this.expectedS;
  };

  FunCall.prototype.toString = function () {
    return this.getFun().toString() + " " + this.getArg().toString();
  };

  FunCall.prototype.clone = function () {
    return new FunCall(this.getFun().clone(), this.getArg().clone());
  };

  return FunCall;
}(Expr_1.Expr);

exports.FunCall = FunCall;

/***/ }),

/***/ "./models/values/FunDecl.ts":
/*!**********************************!*\
  !*** ./models/values/FunDecl.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.FunDecl = void 0;

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var Stmt_1 = __webpack_require__(/*! ./Stmt */ "./models/values/Stmt.ts");

var FunDecl =
/** @class */
function (_super) {
  __extends(FunDecl, _super);

  function FunDecl(name, param, body, returnType) {
    var _this = _super.call(this) || this;

    _this.name = name;
    _this.param = param;
    _this.body = body;
    _this.returnType = returnType;
    return _this;
  }

  FunDecl.prototype.getName = function () {
    return this.name;
  };

  FunDecl.prototype.setName = function (name) {
    this.name = name;
  };

  FunDecl.prototype.getReturnType = function () {
    return this.returnType;
  };

  FunDecl.prototype.setReturnType = function (returnType) {
    this.returnType = returnType;
  };

  FunDecl.prototype.getParam = function () {
    return this.param;
  };

  FunDecl.prototype.setParam = function (param) {
    this.param = param;
  };

  FunDecl.prototype.getBody = function () {
    return this.body;
  };

  FunDecl.prototype.setBody = function (body) {
    this.body = body;
  };

  FunDecl.prototype.evaluateS = function (s) {
    return new Context_1.Signature().put(this.getName(), new Context_1.TypeFun(this.getParam().getType(), this.getReturnType()));
  };

  FunDecl.prototype.evaluateE = function (e) {
    return new Context_1.Environment().put(this.getName(), new Context_1.ValFun(e.clone(), this.getParam(), this.getBody()));
  };

  FunDecl.prototype.toString = function () {
    return $k("let") + " " + this.getName() + " (" + this.getParam().toString() + ") : " + this.getReturnType().toString() + " = " + this.getBody().toString();
  };

  FunDecl.prototype.clone = function () {
    return new FunDecl(this.getName(), this.getParam().clone(), this.getBody().clone(), this.getReturnType().clone());
  };

  return FunDecl;
}(Stmt_1.Stmt);

exports.FunDecl = FunDecl;

/***/ }),

/***/ "./models/values/Let.ts":
/*!******************************!*\
  !*** ./models/values/Let.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.VarUse = exports.In = exports.Let = void 0;

var Stmt_1 = __webpack_require__(/*! ./Stmt */ "./models/values/Stmt.ts");

var Expr_1 = __webpack_require__(/*! ./Expr */ "./models/values/Expr.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var Let =
/** @class */
function (_super) {
  __extends(Let, _super);

  function Let(name, value) {
    var _this = _super.call(this) || this;

    _this.name = name;
    _this.value = value;
    return _this;
  }

  Let.prototype.getName = function () {
    return this.name;
  };

  Let.prototype.setName = function (name) {
    this.name = name;
  };

  Let.prototype.getValue = function () {
    return this.value;
  };

  Let.prototype.setValue = function (value) {
    this.value = value;
  };

  Let.prototype.evaluateS = function (s) {
    return new Context_1.Signature().put(this.getName(), new Context_1.TypeVariable()); //new Signature().put(this.getName(), this.getValue().evaluateS(s))
  };

  Let.prototype.evaluateE = function (e) {
    var value = this.getValue().evaluateE(e);
    return new Context_1.Environment().put(this.getName(), value);
  };

  Let.prototype.toString = function () {
    return $k("let") + " " + this.getName() + " = " + this.getValue().toString();
  };

  Let.prototype.clone = function () {
    return new Let(this.getName(), this.getValue().clone());
  };

  return Let;
}(Stmt_1.Stmt);

exports.Let = Let;

var In =
/** @class */
function (_super) {
  __extends(In, _super);

  function In(left, right) {
    var _this = _super.call(this) || this;

    _this.left = left;
    _this.right = right;
    _this.expectedS = new Context_1.TypeVariable();
    return _this;
  }

  In.prototype.getLeft = function () {
    return this.left;
  };

  In.prototype.setLeft = function (left) {
    this.left = left;
  };

  In.prototype.getRight = function () {
    return this.right;
  };

  In.prototype.setRight = function (right) {
    this.right = right;
  };

  In.prototype.evaluateS = function (s) {
    var s2 = s.clone();
    s2.merge(this.getLeft().evaluateS(s2));
    return this.getRight().evaluateS(s2);
  };

  In.prototype.evaluateE = function (e) {
    var _this = this;

    var e2 = e.clone();
    e2.merge(this.getLeft().evaluateE(e2));
    var right = this.getRight().evaluateE(e2);
    this.valVariable.setToString("?");
    right.listen(this.getHash(), function (rightVal) {
      _this.valVariable.setVal(rightVal);
    });
    return this.valVariable;
  };

  In.prototype.getExpectedS = function () {
    return this.expectedS;
  };

  In.prototype.toString = function () {
    return this.getLeft().toString() + " " + $k("in") + " " + this.getRight().toString();
  };

  In.prototype.clone = function () {
    return new In(this.getLeft().clone(), this.getRight().clone());
  };

  return In;
}(Expr_1.Expr);

exports.In = In;

var VarUse =
/** @class */
function (_super) {
  __extends(VarUse, _super);

  function VarUse(name) {
    var _this = _super.call(this) || this;

    _this.name = name;
    return _this;
  }

  VarUse.prototype.getName = function () {
    return this.name;
  };

  VarUse.prototype.setName = function (name) {
    this.name = name;
  };

  VarUse.prototype.evaluateS = function (s) {
    var tmp = s.get(this.getName());

    while (tmp instanceof Context_1.TypeVariable) {
      if (tmp.getType() == null) break;
      tmp = tmp.getType();
    }

    return tmp;
  };

  VarUse.prototype.evaluateE = function (e) {
    return this.valVariable;
  };

  VarUse.prototype.compute = function (e) {
    var _this = this;

    var tmp = e.get(this.getName());

    while (tmp instanceof Context_1.ValVariable && tmp.getVal() instanceof Context_1.ValVariable) {
      tmp = tmp.getVal();
    }

    if (tmp instanceof Context_1.ValVariable) tmp.listen(this.getHash(), function (val) {
      return _this.valVariable.setVal(val);
    });else this.valVariable.setVal(tmp);
  };

  VarUse.prototype.toString = function () {
    return this.getName();
  };

  VarUse.prototype.clone = function () {
    return new VarUse(this.getName());
  };

  return VarUse;
}(Expr_1.Expr);

exports.VarUse = VarUse;

/***/ }),

/***/ "./models/values/Nat.ts":
/*!******************************!*\
  !*** ./models/values/Nat.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.Minus = exports.Plus = exports.Mod = exports.Div = exports.Times = exports.NatConst = void 0;

var Expr_1 = __webpack_require__(/*! ./Expr */ "./models/values/Expr.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var NatConst =
/** @class */
function (_super) {
  __extends(NatConst, _super);

  function NatConst(value) {
    var _this = _super.call(this) || this;

    _this.value = value;
    return _this;
  }

  NatConst.prototype.getType = function () {
    return new Context_1.TypeNat();
  };

  NatConst.prototype.getValue = function () {
    return this.value;
  };

  NatConst.prototype.setValue = function (value) {
    this.value = value;
  };

  NatConst.prototype.evaluateS = function (s) {
    return this.getType();
  };

  NatConst.prototype.evaluateE = function (e) {
    return this.valVariable;
  };

  NatConst.prototype.compute = function (e) {
    this.valVariable.setVal(new Context_1.PVal(this.getValue()));
  };

  NatConst.prototype.toString = function () {
    return "" + this.getValue();
  };

  NatConst.prototype.clone = function () {
    return new NatConst(this.getValue());
  };

  return NatConst;
}(Expr_1.Expr);

exports.NatConst = NatConst;

var Times =
/** @class */
function (_super) {
  __extends(Times, _super);

  function Times() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Times.prototype.evaluateS = function (s) {
    return new Context_1.TypeNat();
  };

  Times.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " &times; " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() * rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Times.prototype.getExpectedS = function () {
    return new Context_1.TypeNat();
  };

  Times.prototype.toString = function () {
    return this.getLeft().toString() + " &times; " + this.getRight().toString();
  };

  Times.prototype.clone = function () {
    return new Times(this.getLeft().clone(), this.getRight().clone());
  };

  return Times;
}(Expr_1.ExprBinary);

exports.Times = Times;

var Div =
/** @class */
function (_super) {
  __extends(Div, _super);

  function Div() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Div.prototype.evaluateS = function (s) {
    return new Context_1.TypeNat();
  };

  Div.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " / " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() / rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Div.prototype.getExpectedS = function () {
    return new Context_1.TypeNat();
  };

  Div.prototype.toString = function () {
    return this.getLeft().toString() + " / " + this.getRight().toString();
  };

  Div.prototype.clone = function () {
    return new Div(this.getLeft().clone(), this.getRight().clone());
  };

  return Div;
}(Expr_1.ExprBinary);

exports.Div = Div;

var Mod =
/** @class */
function (_super) {
  __extends(Mod, _super);

  function Mod() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Mod.prototype.evaluateS = function (s) {
    return new Context_1.TypeNat();
  };

  Mod.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " % " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() % rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Mod.prototype.getExpectedS = function () {
    return new Context_1.TypeNat();
  };

  Mod.prototype.toString = function () {
    return this.getLeft().toString() + " % " + this.getRight().toString();
  };

  Mod.prototype.clone = function () {
    return new Mod(this.getLeft().clone(), this.getRight().clone());
  };

  return Mod;
}(Expr_1.ExprBinary);

exports.Mod = Mod;

var Plus =
/** @class */
function (_super) {
  __extends(Plus, _super);

  function Plus() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Plus.prototype.evaluateS = function (s) {
    return new Context_1.TypeNat();
  };

  Plus.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e);
    this.valVariable.setToString(left.toString() + " + " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        _this.valVariable.setVal(new Context_1.PVal(leftVal.getValue() + rightVal.getValue()));
      });
    });
    return this.valVariable;
  };

  Plus.prototype.getExpectedS = function () {
    return new Context_1.TypeNat();
  };

  Plus.prototype.toString = function () {
    return this.getLeft().toString() + " + " + this.getRight().toString();
  };

  Plus.prototype.clone = function () {
    return new Plus(this.getLeft().clone(), this.getRight().clone());
  };

  return Plus;
}(Expr_1.ExprBinary);

exports.Plus = Plus;

var Minus =
/** @class */
function (_super) {
  __extends(Minus, _super);

  function Minus() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Minus.prototype.evaluateS = function (s) {
    return new Context_1.TypeNat();
  };

  Minus.prototype.evaluateE = function (e) {
    var _this = this;

    var left = this.getLeft().evaluateE(e);
    var right = this.getRight().evaluateE(e); //console.log("----+++++++++---",this.valVariable.id,left.toString()+" - "+right.toString())

    this.valVariable.setToString(left.toString() + " - " + right.toString());
    left.listen(this.getHash(), function (leftVal) {
      right.listen(_this.getHash(), function (rightVal) {
        var val = leftVal.getValue() - rightVal.getValue();

        _this.valVariable.setVal(new Context_1.PVal(val < 0 ? 0 : val));
      });
    });
    return this.valVariable;
  };

  Minus.prototype.getExpectedS = function () {
    return new Context_1.TypeNat();
  };

  Minus.prototype.toString = function () {
    return this.getLeft().toString() + " - " + this.getRight().toString();
  };

  Minus.prototype.clone = function () {
    return new Minus(this.getLeft().clone(), this.getRight().clone());
  };

  return Minus;
}(Expr_1.ExprBinary);

exports.Minus = Minus;

/***/ }),

/***/ "./models/values/Program.ts":
/*!**********************************!*\
  !*** ./models/values/Program.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.Program = void 0;

var Program =
/** @class */
function () {
  function Program() {
    this.hash = "node-" + Program.counter++;
  }

  Program.prototype.getHash = function () {
    return this.hash;
  };

  Program.prototype.evaluateS = function (s) {
    return null;
  };

  Program.prototype.evaluateE = function (e) {
    return null;
  };

  Program.prototype.clone = function () {
    return null;
  };

  Program.counter = 0;
  return Program;
}();

exports.Program = Program;

/***/ }),

/***/ "./models/values/State.ts":
/*!********************************!*\
  !*** ./models/values/State.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.Assign = exports.Bang = exports.Ref = void 0;

var Expr_1 = __webpack_require__(/*! ./Expr */ "./models/values/Expr.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var Ref =
/** @class */
function (_super) {
  __extends(Ref, _super);

  function Ref(expr) {
    var _this = _super.call(this) || this;

    _this.expectedS = new Context_1.TypeRef(new Context_1.TypeVariable());
    _this.memory = new Context_1.Memory();
    _this.expr = expr;
    return _this;
  }

  Ref.prototype.getExpr = function () {
    return this.expr;
  };

  Ref.prototype.setExpr = function (expr) {
    this.expr = expr;
  };

  Ref.prototype.evaluateS = function (s) {
    return this.expectedS;
  };

  Ref.prototype.evaluateE = function (e) {
    var _this = this;

    if (this.address == null) this.address = e.getMemory().allocate();
    var exprVal = this.getExpr().evaluateE(e); //valAddr.setMemory(m.put(this.address, exprVal))

    this.memory.put(this.address, exprVal);
    this.valVariable.setMemory(this.memory);
    exprVal.listen(this.getHash(), function (val) {
      //alert(4)
      //valAddr.setMemory(val.getMemory().merge(m))
      _this.valVariable.setMemory(val.getMemory().merge(_this.memory.put(_this.address, val))); //e.getMemory().put(this.address, val)

    });
    return this.valVariable;
  };

  Ref.prototype.compute = function () {
    this.valVariable.setVal(new Context_1.ValAddress(this.address));
  };

  Ref.prototype.toString = function () {
    return $k("ref") + " " + this.expr.toString();
  };

  Ref.prototype.clone = function () {
    return new Ref(this.getExpr().clone());
  };

  return Ref;
}(Expr_1.Expr);

exports.Ref = Ref;

var Bang =
/** @class */
function (_super) {
  __extends(Bang, _super);

  function Bang(expr) {
    var _this = _super.call(this) || this;

    _this.expectedS = new Context_1.TypeVariable();
    _this.expr = expr;
    return _this;
  }

  Bang.prototype.getExpr = function () {
    return this.expr;
  };

  Bang.prototype.setExpr = function (expr) {
    this.expr = expr;
  };

  Bang.prototype.evaluateS = function (s) {
    return this.expectedS;
  };

  Bang.prototype.evaluateE = function (e) {
    var _this = this;

    var expr = this.getExpr().evaluateE(e);
    this.valVariable.setToString("?");
    expr.listen(this.getHash(), function (addressVal) {
      _this.valVariable.setVal(e.getMemory().get(addressVal.getAddress()));
    });
    return this.valVariable;
  };

  Bang.prototype.toString = function () {
    return $k("!") + this.expr.toString();
  };

  Bang.prototype.clone = function () {
    return new Bang(this.getExpr().clone());
  };

  return Bang;
}(Expr_1.Expr);

exports.Bang = Bang;

var Assign =
/** @class */
function (_super) {
  __extends(Assign, _super);

  function Assign(left, right) {
    var _this = _super.call(this) || this;

    _this.expectedS = new Context_1.TypeUnit();
    _this.left = left;
    _this.right = right;
    return _this;
  }

  Assign.prototype.getLeft = function () {
    return this.left;
  };

  Assign.prototype.setLeft = function (expr) {
    this.left = expr;
  };

  Assign.prototype.getRight = function () {
    return this.right;
  };

  Assign.prototype.setRight = function (expr) {
    this.right = expr;
  };

  Assign.prototype.evaluateS = function (s) {
    return this.expectedS;
  };

  Assign.prototype.evaluateE = function (e) {
    var _this = this;

    this.getLeft().evaluateE(e).listen(this.getHash(), function (addressVal) {
      _this.getRight().evaluateE(e).listen(_this.getHash(), function (valueVal) {
        e.getMemory().put(addressVal.getAddress(), valueVal);
      });
    });
    this.valVariable.setVal(new Context_1.ValUnit());
    return this.valVariable;
  };

  Assign.prototype.toString = function () {
    return this.left.toString() + " " + $k(":=") + " " + this.right.toString();
  };

  Assign.prototype.clone = function () {
    return new Assign(this.getLeft().clone(), this.getRight().clone());
  };

  return Assign;
}(Expr_1.Expr);

exports.Assign = Assign;

/***/ }),

/***/ "./models/values/Stmt.ts":
/*!*******************************!*\
  !*** ./models/values/Stmt.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.StmtBracket = exports.Stmt = void 0;

var Program_1 = __webpack_require__(/*! ./Program */ "./models/values/Program.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var Stmt =
/** @class */
function (_super) {
  __extends(Stmt, _super);

  function Stmt() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.valVariable = new Context_1.ValVariable();
    return _this;
  }

  Stmt.prototype.evaluateS = function (s) {
    return null;
  };

  Stmt.prototype.evaluateE = function (e) {
    return null;
  };

  Stmt.prototype.getExpectedS = function () {
    return null;
  };

  Stmt.prototype.toString = function () {
    return null;
  };

  Stmt.prototype.clone = function () {
    return null;
  };

  return Stmt;
}(Program_1.Program);

exports.Stmt = Stmt;

var StmtBracket =
/** @class */
function (_super) {
  __extends(StmtBracket, _super);

  function StmtBracket(stmt) {
    var _this = _super.call(this) || this;

    _this.stmt = stmt;
    return _this;
  }

  StmtBracket.prototype.getStmt = function () {
    return this.stmt;
  };

  StmtBracket.prototype.evaluateS = function (s) {
    return this.getStmt().evaluateS(s);
  };

  StmtBracket.prototype.evaluateE = function (e) {
    return this.getStmt().evaluateE(e);
  };

  StmtBracket.prototype.toString = function () {
    return "(" + this.getStmt().toString() + ")";
  };

  StmtBracket.prototype.clone = function () {
    return new StmtBracket(this.getStmt().clone());
  };

  return StmtBracket;
}(Stmt);

exports.StmtBracket = StmtBracket;

/***/ }),

/***/ "./models/values/String.ts":
/*!*********************************!*\
  !*** ./models/values/String.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

exports.__esModule = true;
exports.StringConst = void 0;

var Expr_1 = __webpack_require__(/*! ./Expr */ "./models/values/Expr.ts");

var Context_1 = __webpack_require__(/*! ../context/Context */ "./models/context/Context.ts");

var StringConst =
/** @class */
function (_super) {
  __extends(StringConst, _super);

  function StringConst(value) {
    var _this = _super.call(this) || this;

    _this.value = value;
    return _this;
  }

  StringConst.prototype.getType = function () {
    return new Context_1.TypeString();
  };

  StringConst.prototype.getValue = function () {
    return this.value;
  };

  StringConst.prototype.setType = function (value) {
    this.value = value;
  };

  StringConst.prototype.compute = function (e) {
    this.valVariable.setVal(new Context_1.PVal(this.getValue()));
  };

  StringConst.prototype.clone = function () {
    return new StringConst(this.getValue());
  };

  return StringConst;
}(Expr_1.Expr);

exports.StringConst = StringConst;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./appInterface.ts ***!
  \*************************/


exports.__esModule = true;

__webpack_require__(/*! ./app */ "./app.js");

var AxiomRule_1 = __webpack_require__(/*! ./models/rules/AxiomRule */ "./models/rules/AxiomRule.ts");

var ExprRule_1 = __webpack_require__(/*! ./models/rules/ExprRule */ "./models/rules/ExprRule.ts");

var FunCallRule_1 = __webpack_require__(/*! ./models/rules/FunCallRule */ "./models/rules/FunCallRule.ts");

var FunDeclRule_1 = __webpack_require__(/*! ./models/rules/FunDeclRule */ "./models/rules/FunDeclRule.ts");

var LetRule_1 = __webpack_require__(/*! ./models/rules/LetRule */ "./models/rules/LetRule.ts");

var StateRule_1 = __webpack_require__(/*! ./models/rules/StateRule */ "./models/rules/StateRule.ts");

var Nat_1 = __webpack_require__(/*! ./models/values/Nat */ "./models/values/Nat.ts");

var Bool_1 = __webpack_require__(/*! ./models/values/Bool */ "./models/values/Bool.ts");

var Let_1 = __webpack_require__(/*! ./models/values/Let */ "./models/values/Let.ts"); //Modeling the Rules, in Latex Form.
//HERE STRARTS THE STATISCH RULES, Look At the Latex Version to see what Rule are these Exactly.


var Nat_Typ_1 = {
  name: "Nat Type 1",
  id: "R1",
  latex: "\\[  \\frac{}{n:{\\color{blue}{Nat}}} \\]",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Nat_1.NatConst())
};
var Nat_Typ_2 = {
  name: "Nat Type 2 (Multiplikation)",
  id: "R2",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 * e_2 : {\\color{blue}{Nat}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Times())
};
var Nat_Typ_3 = {
  name: "Nat Type 3 (Addition)",
  id: "R3",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 + e_2 : {\\color{blue}{Nat}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Plus())
};
var Bool_Typ_False = {
  name: "Bool Typ False",
  id: "R4",
  latex: "\\[  \\frac{}{false:{\\color{blue}{Bool}}} \\]",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Bool_1.BoolConst(false))
};
var Bool_Typ_True = {
  name: "Bool Typ True",
  id: "R5",
  latex: "\\[  \\frac{}{true:{\\color{blue}{Bool}}} \\]",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Bool_1.BoolConst(true))
};
var If_Then_Else_1 = {
  name: "If Then Else",
  id: "R6",
  latex: "\\[  \\frac{e_1:{\\color{blue}{Bool}} \\quad e_2:{\\color{blue}{t}} \\quad e_3:{\\color{blue}{t}} }{{\\color{blue}{if}} \\ e_1 \\ {\\color{blue}{then}} \\ e_2 \\ {\\color{blue}{else}} \\ e_3: {\\color{blue}{t}}} \\]",
  rule: new ExprRule_1.ExprIfRule()
};
var If_Then_Else_2 = {
  name: "Kleiner",
  id: "R7",
  latex: "\\[ \\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 < e_2 : {\\color{blue}{Bool}}}\\]",
  rule: new ExprRule_1.ExprIfRule()
};
var Signatur_1 = {
  name: "Signatur 1",
  id: "R8",
  latex: "\\[ {\\color{blue}{\\Sigma}}  \\vdash e :{\\color{blue}{t}} 	\\]",
  rule: 0
};
var Signatur_2 = {
  name: "Signatur 1",
  id: "R9",
  latex: "\\[ {{\\color{blue}{\\Sigma}} \\vdash e :{\\color{blue}{t}}} \\over {{\\color{blue}{\\Sigma}} \\vdash ({\\color{blue}{let}} \\, x = e):\\{x\\mapsto {\\color{blue}{t}} \\}} \\]",
  rule: new LetRule_1.LetRule()
};
var Signatur_3 = {
  name: "Signatur 2",
  id: "R10",
  latex: "\\[ \\over {\\color{blue}{\\Sigma}}  \\vdash x :{\\color{blue}{\\Sigma}}(x) \\]",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Let_1.VarUse())
};
var Signatur_4 = {
  name: "Signatur 3",
  id: "R11",
  latex: "\\[ {\\color{blue}{\\Sigma}}  \\vdash d:{\\color{blue}{\\Sigma'}} \\qquad {\\color{blue}{\\Sigma}},{\\color{blue}{\\Sigma'}}  \\vdash e:{\\color{blue}{t}}  \\over {\\color{blue}{\\Sigma}}  \\vdash (d \\; {\\color{blue}{in}} \\; e) :{\\color{blue}{t}} \\]",
  rule: new LetRule_1.InRule()
};
var FunktionsTypen_1 = {
  name: "FunktionsTypen 1",
  id: "R12",
  latex: "\\[ {\\color{blue}{\\Sigma}},\\{x_1 \\mapsto {\\color{blue}{t_1}} \\} \\vdash e_2 : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash ( {\\color{blue}{let}} \\; f \\; (x_1 : {\\color{blue}{t_1}}): {\\color{blue}{t_2}} = e_2 ) : \\{f \\mapsto {\\color{blue}{t_1 \\rightarrow t_2}} \\} \\]",
  rule: new FunDeclRule_1.FunDeclRule()
};
var FunktionsTypen_2 = {
  name: "FunktionsTypen 2",
  id: "R13",
  latex: "\\[ {\\color{blue}{\\Sigma}}(f)= {\\color{blue}{t_1 \\rightarrow t_2}} \\qquad {\\color{blue}{\\Sigma}}  \\vdash e_1 : {\\color{blue}{t_1}} \\over {\\color{blue}{\\Sigma}}  \\vdash f(e_1) :{\\color{blue}{t_2}} \\] ",
  rule: new FunCallRule_1.FunCallRule()
};
var Funktionsausdrucke_1 = {
  name: "Funktionsausdrucke 1",
  id: "R14",
  latex: "\\[ {\\color{blue}{\\Sigma}},\\{x_1 \\mapsto {\\color{blue}{t_1}} \\} \\vdash e : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash ( {\\color{blue}{fun}} \\; (x_1 : {\\color{blue}{t_1}})\\rightarrow  e ) : {\\color{blue}{t_1 \\rightarrow t_2}} \\} \\]",
  rule: new FunCallRule_1.AnonymeFunDeclRule()
};
var Funktionsausdrucke_2 = {
  name: "Funktionsausdrucke 2",
  id: "R15",
  latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t_1 \\rightarrow t_2}} \\qquad {\\color{blue}{\\Sigma}}  \\vdash e_1 : {\\color{blue}{t_1}}\\over {\\color{blue}{\\Sigma}}  \\vdash e \\, e_1 :{\\color{blue}{t_2}} \\]",
  rule: new FunCallRule_1.FunCallRule()
};
var Rekursive_Funktionsdefinition = {
  name: "Rekursive Funktionsdefinition",
  id: "R16",
  latex: "\\[ {\\color{blue}{\\Sigma}},\\{f \\mapsto {\\color{blue}{t_1 \\rightarrow t_2}} ,x_1 \\mapsto {\\color{blue}{t_1}} \\} \\vdash e_2 : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash ( {\\color{blue}{let\\; \\, rec}} \\; f \\; (x_1 : {\\color{blue}{t_1}}): {\\color{blue}{t_2}} = e_2 ) : \\{f \\mapsto {\\color{blue}{t_1 \\rightarrow t_2}} \\} \\]",
  rule: new FunDeclRule_1.FunDeclRule()
};
var Paartyp_1 = {
  name: "Paartyp 1",
  id: "R17",
  latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e_1: {\\color{blue}{t_1}} \\qquad {\\color{blue}{\\Sigma}}  \\vdash e_2 : {\\color{blue}{t_2}} \\over {\\color{blue}{\\Sigma}}  \\vdash(e_1,e_2) :{\\color{blue}{t_1*t_2}} \\]",
  rule: 0
};
var Paartyp_2 = {
  name: "Paartyp 2",
  id: "R18",
  latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t_1*t_2}} \\over {\\color{blue}{\\Sigma}} \\vdash fst \\; e :{\\color{blue}{t_1}} \\]",
  rule: 0
};
var Paartyp_3 = {
  name: "Paartyp 3",
  id: "R19",
  latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t_1*t_2} \\over {\\color{blue}{\\Sigma}} \\vdash snd \\; e :{\\color{blue}{t_2}} \\]",
  rule: 0
};
var ReferenzTyp_1 = {
  name: "ReferenzTyp 1",
  id: "R20",
  latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{t}} \\over {\\color{blue}{\\Sigma}} \\vdash {\\color{blue}{ref}} \\; e :{\\color{blue}{Ref \\langle t \\rangle}} \\]",
  rule: new StateRule_1.RefRule()
};
var ReferenzTyp_2 = {
  name: "ReferenzTyp 2",
  id: "R21",
  latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e: {\\color{blue}{Ref\\langle t \\rangle}} \\over {\\color{blue}{\\Sigma}} \\vdash \\; !e :{\\color{blue}t} \\]",
  rule: new StateRule_1.BangRule()
};
var ReferenzTyp_3 = {
  name: "ReferenzTyp 3",
  id: "R22",
  latex: "\\[ {\\color{blue}{\\Sigma}} \\vdash e_1: {\\color{blue}{Ref\\langle t \\rangle}} \\qquad \\qquad{} {\\color{blue}{\\Sigma}} \\vdash e_2:{\\color{blue}t} \\over {\\color{blue}{\\Sigma}} \\vdash  e_1:=e_2:{\\color{blue}{Unit}} \\]",
  rule: new StateRule_1.AssignRule()
};
var Nat_Typ_4 = {
  name: "Nat Type 4 (Natürliche Subtraktion)",
  id: "R45",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\dot{-} e_2 : {\\color{blue}{Nat}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Minus())
};
var Nat_Typ_5 = {
  name: "Nat Type 5 (Natürliche Division)",
  id: "R46",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\div e_2 : {\\color{blue}{Nat}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Div())
};
var Nat_Typ_6 = {
  name: "Nat Type 6 (Divisionsrest)",
  id: "R47",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\mathbin{\\%} e_2 : {\\color{blue}{Nat}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Mod())
};
var kleiner_gleich = {
  name: "Kleiner Gleich",
  id: "R48",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\leq e_2 : {\\color{blue}{Bool}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.LessOrEquals())
};
var gleich = {
  name: "Gleich",
  id: "R49",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 = e_2 : {\\color{blue}{Bool}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.Equals())
};
var ungleich = {
  name: "Ungleich",
  id: "R50",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 <> e_2 : {\\color{blue}{Bool}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.Unequals())
};
var grosser_gleich = {
  name: "Größer Gleich",
  id: "R51",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 \\geq e_2 : {\\color{blue}{Bool}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.GreaterOrEquals())
};
var grosser = {
  name: "Größer",
  id: "R52",
  latex: "\\[\\frac{e_1 : {\\color{blue}{Nat}} \\qquad e_2 : {\\color{blue}{Nat}}}{e_1 > e_2 : {\\color{blue}{Bool}}}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.Greater())
}; //HERE STARTS THE DYNAMISCH RULES.

var Nat_Typ_D1 = {
  name: "Nat Typ 1 Dynamisch",
  id: "R23",
  latex: "\\[ \\over n \\Downarrow n\\]",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Nat_1.NatConst())
};
var Nat_Typ_D2 = {
  name: "Nat Typ 2 Dynamisch (Addition)",
  id: "R24",
  latex: "\\[ e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 \\over e_1 + e_2 \\Downarrow n_1 + n_2 \\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Plus())
};
var Nat_Typ_D3 = {
  name: "Nat Typ 3 Dynamisch (Multiplikation)",
  id: "R25",
  latex: "\\[ e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 \\over e_1 * e_2 \\Downarrow n_1 . n_2 \\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Times())
};
var Bool_Typ_FalseD = {
  name: "Bool Type False Dynamisch",
  id: "R26",
  latex: "\\[  \\frac{}{false \\Downarrow {{false}}} \\]",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Bool_1.BoolConst(false))
};
var Bool_Typ_TrueD = {
  name: "Bool Type True Dynamisch",
  id: "R27",
  latex: "\\[  \\frac{}{true \\Downarrow {{true}}} \\]",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Bool_1.BoolConst(true))
};
var If_Then_Else_1D = {
  name: "If Then Else Dynamisch",
  id: "R28",
  latex: "\\[ \\frac{e_1 \\Downarrow {true} \\qquad\\qquad e_2 \\Downarrow {{v}} }{{\\color{blue}{if}} \\ e_1 \\ {\\color{blue}{then}} \\ e_2 \\ {\\color{blue}{else}} \\ e_3\\Downarrow {v}} \\]",
  rule: new ExprRule_1.ExprIfRule()
};
var If_Then_Else_2D = {
  name: "Kleiner Dynamisch",
  id: "R29",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 < e_2 \\Downarrow n_1 < n_2}\\]",
  rule: new ExprRule_1.ExprIfRule()
};
var Umgebung_1 = {
  name: "Umgebung 1",
  id: "R30",
  latex: "\\[ \\frac{}{\\delta  \\vdash x \\ \\Downarrow \\ \\delta (x)} \\qquad x \\in  dom \\ \\delta \\] ",
  rule: new AxiomRule_1.AxiomRule().setRuleType(new Let_1.VarUse())
};
var Umgebung_2 = {
  name: "Umgebung 2",
  id: "R31",
  latex: "\\[ {{\\delta} \\vdash e \\Downarrow {v}} \\over {{\\delta} \\vdash ({\\color{blue}{let}} \\, x = e) \\Downarrow \\{x\\mapsto {v} \\}} \\]",
  rule: new LetRule_1.LetRule()
};
var Umgebung_3 = {
  name: "Umgebung 3",
  id: "R32",
  latex: "\\[ {{\\delta}}  \\vdash d\\ \\Downarrow\\ {\\delta'} \\qquad {\\delta},{\\delta'} \\ \\vdash e\\ \\Downarrow\\ {v} \\over {\\delta}  \\vdash  (d \\; {\\color{blue}{in}} \\; e)  \\Downarrow{v} \\]",
  rule: new LetRule_1.InRule()
};
var FunktionsTypen_1D = {
  name: "FunktionsTypen 1 Dynamisch",
  id: "R33",
  latex: "\\[ \\over{\\delta \\vdash ({\\color{blue}{let}} f\\ (x)=e) \\ \\Downarrow \\ \\{ f \\mapsto{\\langle \\delta,x,e \\rangle}\\}} \\]",
  rule: new FunDeclRule_1.FunDeclRule()
};
var FunktionsTypen_2D = {
  name: "FunktionsTypen 2 Dynamisch",
  id: "R34",
  latex: "\\[ \\delta(f)=\\langle \\delta',x_1,e \\rangle \\qquad \\delta\\vdash e_1 \\ \\Downarrow \\ v_1 \\qquad \\delta',\\{ x_1 \\mapsto{v_1}\\} \\vdash e \\ \\Downarrow \\ v\\over{\\delta \\vdash f(e_1) \\ \\Downarrow \\ v} \\]",
  rule: new FunCallRule_1.FunCallRule()
};
var Funktionsausdrucke_1D = {
  name: "Funktionsausdrucke 1 Dynamisch",
  id: "R35",
  latex: "\\[ \\frac{}{\\delta  \\vdash({\\color{blue}{fun}}\\ x\\mapsto{e} \\ \\Downarrow \\ \\langle \\delta, x,e \\rangle } \\] ",
  rule: new FunCallRule_1.AnonymeFunDeclRule()
};
var Funktionsausdrucke_2D = {
  name: "Funktionsausdrucke 2 Dynamisch",
  id: "R36",
  latex: "\\[ {\\delta} \\vdash e  \\ \\Downarrow \\ \\langle \\delta', x_1,e' \\rangle \\qquad \\delta \\vdash e_1 \\ \\Downarrow \\ v_1 \\qquad {\\delta'},\\{ x_1 \\mapsto{v_1} \\}  \\vdash e' \\ \\Downarrow \\ {v'} \\over {\\delta}  \\vdash e \\, e_1 \\ \\Downarrow \\ v' \\]",
  rule: new FunCallRule_1.FunCallRule()
};
var Rekursive_definition_1D = {
  name: "Rekursive definition 1 Dynamisch",
  id: "R37",
  latex: "\\[ \\frac{}{\\delta  \\vdash({\\color{blue}{let} \\ rec} \\ f\\ (x=e) \\ \\Downarrow \\ \\{f\\mapsto{\\langle \\delta,f,x,e \\rangle\\}} } \\]",
  rule: new FunDeclRule_1.FunDeclRule()
};
var Rekursive_definition_2D = {
  name: "Rekursive definition 2 Dynamisch",
  id: "R38",
  latex: "\\[ \\delta \\vdash e \\ \\Downarrow \\ v  \\qquad \\delta \\vdash e_1 \\ \\Downarrow \\ v_1 \\qquad {\\delta'},\\{f \\mapsto {v} ,x_1 \\mapsto {v_1} \\} \\vdash e' \\ \\Downarrow \\ v' \\over {\\delta} \\vdash ee_1 \\ \\Downarrow \\ v' \\]",
  rule: new FunCallRule_1.FunCallRule()
};
var Referenz_1D = {
  name: "Referenz (Effekte) 1 Dynamisch",
  id: "R39",
  latex: "\\[ \\sigma \\ \\Vert \\ e \\ \\Downarrow \\ v \\ \\Vert \\ \\sigma' \\over \\sigma \\ \\Vert \\ {\\color{blue}{ref}}\\  e \\ \\Downarrow \\ a \\ \\Vert \\ \\sigma',\\{ a \\mapsto{v} \\} \\]",
  rule: new StateRule_1.RefRule()
};
var Referenz_2D = {
  name: "Referenz (Effekte) 2 Dynamisch",
  id: "R40",
  latex: "\\[ \\sigma \\ \\Vert \\ e \\ \\Downarrow \\ a \\ \\Vert \\ \\sigma' \\over \\sigma \\ \\Vert \\  !e \\ \\Downarrow \\ \\sigma'(a) \\ \\Vert \\ \\sigma '\\]",
  rule: new StateRule_1.BangRule()
};
var Referenz_3D = {
  name: "Referenz (Effekte) 3 Dynamisch",
  id: "R41",
  latex: "\\[ \\sigma \\ \\Vert \\ e_1 \\ \\Downarrow \\ a \\ \\Vert \\ \\sigma_1 \\qquad \\sigma_1 \\ \\Vert \\  e_2 \\Downarrow \\ v \\ \\Vert \\ \\sigma_2  \\over \\sigma \\ \\Vert \\  e_1:=e_2 \\ \\Downarrow \\ () \\ \\Vert \\ \\sigma_2,\\{ a \\mapsto{v} \\} \\]",
  rule: new StateRule_1.AssignRule()
};
var Nat_Typ_D4 = {
  name: "Nat Typ 4 Dynamisch (Natürliche Subtraktion)",
  id: "R53",
  latex: "\\[e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 \\over e_1 \\dot{-} e_2 \\Downarrow n_1 \\dot{-} n_2\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Minus())
};
var Nat_Typ_D5 = {
  name: "Nat Typ 5 Dynamisch (Natürliche Division)",
  id: "R54",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\div e_2 \\Downarrow q} \\qquad n_1 = q \\cdot n_2 + r \\hspace{0.5em} und \\hspace{0.5em} r < n_2 \\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Div())
};
var Nat_Typ_D6 = {
  name: "Nat Typ 6 Dynamisch (Divisionsrest)",
  id: "R55",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\mathbin{\\%} e_2 \\Downarrow r} \\qquad n_1 = q \\cdot n_2 + r \\hspace{0.5em} und \\hspace{0.5em} r < n_2 \\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Nat_1.Mod())
};
var kleiner_gleichD = {
  name: "Kleiner Gleich Dynamisch",
  id: "R56",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\leq e_2 \\Downarrow n_1 \\leq n_2}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.LessOrEquals())
};
var gleichD = {
  name: "Gleich Dynamisch",
  id: "R57",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 = e_2 \\Downarrow n_1 = n_2}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.Equals())
};
var ungleichD = {
  name: "Ungleich Dynamisch",
  id: "R58",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 <> e_2 \\Downarrow n_1 <> n_2}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.Unequals())
};
var grosser_gleichD = {
  name: "Größer Gleich Dynamisch",
  id: "R59",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 \\geq e_2 \\Downarrow n_1 \\geq n_2}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.GreaterOrEquals())
};
var grosserD = {
  name: "Gleich Dynamisch",
  id: "R61",
  latex: "\\[\\frac{e_1 \\Downarrow n_1 \\qquad e_2 \\Downarrow n_2 }{ e_1 > e_2 \\Downarrow n_1 > n_2}\\]",
  rule: new ExprRule_1.ExprBinaryRule().setRuleType(new Bool_1.Greater())
}; //Ordered Them somehow in Arrays ,Change if Needed :D

var naturalNumbers_Sta = [Nat_Typ_1, Nat_Typ_2, Nat_Typ_3, Nat_Typ_4, Nat_Typ_5, Nat_Typ_6];
var naturalNumbers_Dyn = [Nat_Typ_D1, Nat_Typ_D2, Nat_Typ_D3, Nat_Typ_D4, Nat_Typ_D5, Nat_Typ_D6];
var booleanValues_Sta = [Bool_Typ_True, Bool_Typ_False, If_Then_Else_1, If_Then_Else_2, grosser, grosser_gleich, kleiner_gleich, ungleich, gleich];
var booleanValues_Dyn = [Bool_Typ_TrueD, Bool_Typ_FalseD, If_Then_Else_1D, If_Then_Else_2D, grosserD, grosser_gleichD, kleiner_gleichD, ungleichD, gleichD];
var Signatur_Array_Sta = [Signatur_2, Signatur_3, Signatur_4];
var Umgebung_Array_Dyn = [Umgebung_1, Umgebung_2, Umgebung_3];
var Rekursive_Sta = [Rekursive_Funktionsdefinition];
var Rekursive_Dyn = [Rekursive_definition_1D, Rekursive_definition_2D];
var Paar_Sta = [Paartyp_1, Paartyp_2, Paartyp_3];
var Referenz_Sta = [ReferenzTyp_1, ReferenzTyp_2, ReferenzTyp_3];
var Referenz_Dyn = [Referenz_1D, Referenz_2D, Referenz_3D];
var funktionArray_Sta = [FunktionsTypen_1, FunktionsTypen_2, Funktionsausdrucke_1, Funktionsausdrucke_2];
var funktionArray_Dyn = [FunktionsTypen_1D, FunktionsTypen_2D, Funktionsausdrucke_1D, Funktionsausdrucke_2D];

function addElements(x, z) {
  x.forEach(function (elem) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    var span = document.createElement('span');
    var latx1 = document.createElement('p');
    latx1.textContent = elem.latex;
    span.textContent = elem.name;
    a.href = '#';
    a.setAttribute("id", elem.id);
    a.setAttribute("draggable", "true");

    a.ondragstart = function (ev) {
      ev.dataTransfer.setData("id", elem.id);
    };

    li.appendChild(a);
    a.appendChild(span);
    a.appendChild(latx1); //console.log(document.getElementById(z), z);

    document.getElementById(z).appendChild(li);
  });
} //Statische hinzufügen


addElements(naturalNumbers_Sta, 'axiomDivElements');
addElements(booleanValues_Sta, 'booleanValuesDivElements');
addElements(Signatur_Array_Sta, 'signaturDivElements');
addElements(Rekursive_Sta, 'rekursiveDivElements'); //addElements(Paar_Sta, 'paareDivElements');

addElements(Referenz_Sta, 'referenzDivElements');
addElements(funktionArray_Sta, 'funktionDivElements'); //Dynamische hinzufügen

addElements(naturalNumbers_Dyn, 'axiomDivElements2');
addElements(booleanValues_Dyn, 'booleanValuesDivElements_dyn');
addElements(Umgebung_Array_Dyn, 'umgebungDivElements');
addElements(Rekursive_Dyn, 'rekursiveDiv_dynDivElements');
addElements(Referenz_Dyn, 'referenzDivElements_dyn');
addElements(funktionArray_Dyn, 'funktionDivElements_dyn');
document.querySelector("#dynamic_rules").style.display = "none";
document.body.querySelector("#input-mode").addEventListener('change', function () {
  if (this.checked) {
    document.querySelector("#static_rules").style.display = "none";
    document.querySelector("#dynamic_rules").style.display = "block";
    document.querySelector("#toggleStatisch").style.display = "none";
    document.querySelector("#toggleDynamisch").style.display = "block";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
  } else {
    document.querySelector("#dynamic_rules").style.display = "none";
    document.querySelector("#static_rules").style.display = "block";
    document.querySelector("#toggleDynamisch").style.display = "none";
    document.querySelector("#toggleStatisch").style.display = "block";
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("container").style.marginLeft = "0";
  }
});
var REAL_RULES = naturalNumbers_Sta.concat(booleanValues_Sta, Signatur_Array_Sta, Rekursive_Sta, Referenz_Sta, funktionArray_Sta, naturalNumbers_Dyn, booleanValues_Dyn, Umgebung_Array_Dyn, Rekursive_Dyn, Referenz_Dyn, funktionArray_Dyn);
launcher(REAL_RULES);
})();

/******/ })()
;