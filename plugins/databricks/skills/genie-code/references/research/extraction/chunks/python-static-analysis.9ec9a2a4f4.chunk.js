(()=>{"use strict";let e,t,r,n,i;var o,a,s,l,u,d,c,m={830012:(e,t,r)=>{var n,i,o,a=r(129227),s=r(383437);function l(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}let u=null;function d(){if(u)return u;return(u=s.iX.init().then(()=>{let e=new URL(r(250130),r.b).toString();return s.TM.load(e).catch(()=>{var t;return(t=function*(){let t=yield fetch(e);if(!t.ok)throw Error(`Failed to fetch python-tree-sitter WASM file: ${t.statusText}`);let r=yield t.arrayBuffer();return s.TM.load(new Uint8Array(r))},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(e){l(o,n,i,a,s,"next",e)}function s(e){l(o,n,i,a,s,"throw",e)}a(void 0)})})()})}).then(e=>{let t=new s.iX;return t.setLanguage(e),{parser:t,language:e}})).catch(()=>{u=null}),u}function c(e,t){t>=0&&t<e.length&&(e[t]="# "+e[t])}function m(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function f(e){if(!e)return null;switch(e.type){case"integer":case"float":case"identifier":case"unary_operator":return e.text;case"string":if(/^f('{3}|"{3}|'|")/.test(e.text))return null;return e.text.replace(/^['"]|['"]$/g,"").replace(/^['"]{3}|['"]{3}$/g,"");case"true":return"True";case"false":return"False";case"none":return"None";default:return e.text.length<=20?e.text:null}}function p(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){p(o,n,i,a,s,"next",e)}function s(e){p(o,n,i,a,s,"throw",e)}a(void 0)})}}function g(e,t,r,n,i){let o=new s.XK(e,n).captures(r),a=[];for(let e of o)if(i.includes(e.name)){let{startIndex:r,endIndex:n,startPosition:i,endPosition:o}=e.node;a.push({code:t.slice(r,n),range:{startLineNumber:i.row+1,endLineNumber:o.row+1,startColumn:i.column+1,endColumn:o.column+1}})}return a}var y=((n={}).Error="error",n.Complete="complete",n.CompleteColumn="completeColumn",n.CompleteExistingColumn="completeExistingColumn",n.CompleteDataframe="completeDataframe",n.CompleteHow="completeHow",n);class w{dataframeToColumnsMap;constructor(e){this.dataframeToColumnsMap=e}complete(e,t){throw Error("Method not implemented.")}getDataframeToColumnsMap(){return this.dataframeToColumnsMap}getColumnsToDataframeMap(){let e={};for(let[t,r]of Object.entries(this.getDataframeToColumnsMap()))for(let n of r)(e[n]??=[]).push(t);return e}findMostSpecificMatch(e){return e?.sort((e,t)=>t.captures.length-e.captures.length)[0]}}let T={matches:[],text:""};var C=((i={}).AGG="agg",i.APPROX_QUANTILE="approxQuantile",i.CORR="corr",i.COV="cov",i.CROSS_JOIN="crossJoin",i.CROSSTAB="crosstab",i.CUBE="cube",i.DESCRIBE="describe",i.DROP="drop",i.DROP_DUPLICATES="dropDuplicates",i.DROP_DUPLICATES_UNDERSCORE="drop_duplicates",i.DROP_DUPLICATES_WITHIN_WATERMARK="dropDuplicatesWithinWatermark",i.DROPNA="dropna",i.EXCEPT_ALL="exceptAll",i.FILLNA="fillna",i.FILTER="filter",i.FREQUENCY_ITEMS="freqItems",i.GROUP_BY="groupBy",i.GROUP_BY_ALIAS="groupby",i.GROUPING_SETS="groupingSets",i.INTERSECT="intersect",i.INTERSECT_ALL="intersectAll",i.JOIN="join",i.LATERAL_JOIN="lateralJoin",i.MERGE_INTO="mergeInto",i.ORDER_BY="orderBy",i.PIVOT="pivot",i.REPARTITION="repartition",i.REPARTITION_BY_RANGE="repartitionByRange",i.REPLACE="replace",i.ROLLUP="rollup",i.SAME_SEMANTICS="sameSemantics",i.SAMPLE_BY="sampleBy",i.SELECT="select",i.SORT="sort",i.SORT_WITHIN_PARTITION="sortWithinPartitions",i.SUBTRACT="subtract",i.UNION="union",i.UNION_ALL="unionAll",i.UNION_BY_NAME="unionByName",i.WHERE="where",i.WITH_COLUMN="withColumn",i.WITH_COLUMN_RENAMED="withColumnRenamed",i.WITH_COLUMNS="withColumns",i.WITH_COLUMNS_RENAMED="withColumnsRenamed",i),_=((o={}).FILL="fill",o.DROP="drop",o);function k(e,t){return`param_df_${e}_${t}`}function R(e,t){return void 0!==e&&e.endIndex===t.length}function b(e){return e.toString().padStart(5,"0")}function N(e,t,r,n){let i=e.filter(e=>e.startsWith(t));return n??=!t,i.sort().map((e,t)=>({text:n?`"${e}"`:e,displayText:e,start:-1,end:-1,type:k(r,"column"),sortText:b(t)}))}let x=["sum","count","max","min","avg","mean","first","last","stddev","stddev_pop","stddev_samp","variance","var_pop","var_samp","collect_list","collect_set","approx_count_distinct","countDistinct","skewness","kurtosis"];class E extends w{complete({dataframeName:e,lastMethodCode:t},r){let n=this.parse(t,r);if(n.state!==y.Complete)return T;let i=n.tokenToComplete||"";if(n.isInsideAggFunction)return{matches:N(this.getDataframeToColumnsMap()[e]||[],i,"agg",!i&&n.quoteText),text:i};if(n.isInsideDictionary&&n.isDictValue)return{matches:x.filter(e=>e.startsWith(i)).map((e,t)=>({text:i||!n.quoteText?e:`"${e}"`,displayText:e,start:-1,end:-1,type:k("agg","function"),sortText:b(t)})),text:i};if(n.isInsideDictionary)return{matches:N(this.getDataframeToColumnsMap()[e]||[],i,"agg",!i&&n.quoteText),text:i};return T}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,`
      ; Sub-query (1) - Inside aggregation function. Examples:
      ; 1. agg(sum("col|
      ; 2. agg(sum("col"), max(|
      (ERROR
        . (identifier) @methodName
        [
          (identifier) @aggFunction
          ; F.namespace syntax, e.g. agg(F.sum(|
          (attribute
            attribute: (identifier) @aggFunction
          )
        ]
        .
        "(" @lastToken .
        (string_start)? @lastToken .
        (identifier)? @lastToken .
      )
      ; Sub-query (2) - Dictionary syntax - detect column names (dict keys).
      ; Sub-query (2.1) - First key.
      ; Sub-query (2.1.1) e.g. agg({|
      (ERROR
        . (identifier) @methodName .
        "(" .
        "{" @dictMarker @lastToken .
      )
      ; Sub-query (2.1.2) e.g. agg({"|
      (ERROR
        . (identifier) @methodName .
        "(" .
        "{" @dictMarker .
        (string_start) @lastToken .
      )
      ; Sub-query (2.1.3) e.g. agg({"a|
      (ERROR
        . (identifier) @methodName .
        "(" .
        "{" @dictMarker .
        (string_start) .
        (identifier) @lastToken .
      )
      ; Sub-query (2.2) Any other key.
      ; Sub-query (2.2.1) e.g. agg({"a": "sum", |
      (ERROR
        . (identifier) @methodName .
        "(" .
        "{" @dictMarker .
        (pair)*
        "," @lastToken .
      )
      ; Sub-query (2.2.2) e.g. agg({"a": "sum", "|
      (ERROR
        . (identifier) @methodName .
        "(" .
        "{" @dictMarker .
        ((pair) . ",")* .
        (string_start) @lastToken .
      )
      ; Sub-query (2.2.3) e.g. agg({"a": "sum", "b|
      (ERROR
        . (identifier) @methodName .
        "(" .
        "{" @dictMarker .
        ((pair) . ",")* .
        (string_start) .
        (identifier) @lastToken .
      )
      ; Sub-query (3) - Dictionary snytax - detect aggregation function names (dict values).
      ; Sub-query (3.1) - First value.
      ; Sub-query (3.1.1) e.g. agg({"a": |
      (ERROR
        . (identifier) @methodName
        "(" .
        "{" @dictMarker .
        (string) .
        ":" @dictValue @lastToken .
      )
      ; Sub-query (3.1.2) e.g. agg({"a": "|
      (ERROR
        . (identifier) @methodName
        "(" .
        "{" @dictMarker .
        (string) .
        ":" @dictValue .
        (string_start) @lastToken .
      )
      ; Sub-query (3.1.3) e.g. agg({"a": "s|
      (ERROR
        . (identifier) @methodName
        "(" .
        "{" @dictMarker .
        (string) @columnName .
        ":" @dictValue .
        (string_start) .
        (identifier) @lastToken .
      )
      ; Sub-query (3.2) Any other value.
      ; Sub-query (3.2.1) e.g. agg({"a": "sum", "b": |
      (ERROR
        . (identifier) @methodName
        "(" .
        "{" @dictMarker .
        ((pair) . ",")* .
        (string) @columnName .
        ":" @dictValue @lastToken .
      )
      ; Sub-query (3.2.2) e.g. agg({"a": "sum", "b": "|
      (ERROR
        . (identifier) @methodName
        "(" .
        "{" @dictMarker .
        ((pair) . ",")* .
        (string) @columnName .
        ":" @dictValue .
        (string_start) @lastToken .
      )
      ; Sub-query (3.2.3) e.g. agg({"a": "sum", "b": "m|
      (ERROR
        . (identifier) @methodName
        "(" .
        "{" @dictMarker .
        ((pair) . ",")* .
        (string) @columnName .
        ":" @dictValue .
        (string_start) .
        (identifier) @lastToken .
      )
      `),a=o.matches(i)?.[0];if(!a)return{state:y.Error};let l=a.captures.findLast(e=>"lastToken"===e.name)?.node;if(!l||l.nextSibling)return{state:y.Error};let u=a.captures.find(e=>"aggFunction"===e.name)?.node,d=a.captures.find(e=>"dictMarker"===e.name)?.node,c=a.captures.find(e=>"dictValue"===e.name)?.node;return{state:y.Complete,tokenToComplete:"identifier"===l.type?l.text:"",quoteText:"string_start"!==l.type&&"identifier"!==l.type,isInsideAggFunction:void 0!==u&&x.includes(u.text),aggFunctionName:u?.text,isInsideDictionary:!!d,isDictValue:!!c}}}class M extends w{cursor;complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state===y.Error)return T;let{state:o,tokenToComplete:a="",quoteText:s=!1}=i,l=this.getDataframeToColumnsMap()[e]||[];if(o===y.CompleteColumn){let e=N(l,a,t,s);return{matches:e,text:e.length>0?a:""}}return T}parse(e,t){let{parser:r}=t,n=r.parse(e);if(!n||(this.cursor=n.walk(),!this.cursor.gotoFirstChild()||!this.cursor.gotoFirstChild()||"identifier"!==this.cursor.nodeType))return{state:y.Error};let i=this.#e();if(0===i.length)return{state:y.Error};let o=i.join(""),a=o.match(/^\((?:\$subset=)?\[(?:\$string,)*$/);if(a)return{state:y.CompleteColumn,tokenToComplete:"",quoteText:!0};if(a=o.match(/^\((?:\$subset=)?\[(?:\$string,)*"(\w*)$/))return{state:y.CompleteColumn,tokenToComplete:a[1],quoteText:!1};return{state:y.Error}}#e(){let e=[];for(;this.cursor.gotoNextSibling();)switch(this.cursor.nodeType){case"(":case"[":case"]":case"=":case",":e.push(this.cursor.nodeText);break;case"identifier":"subset"===this.cursor.nodeText?e.push("$subset"):e.push(this.cursor.nodeText);break;case"string":e.push("$string");break;case"list":e.push("$list");break;case"keyword_argument":e.push("$kwarg");break;case"string_start":e.push('"');break;default:e.push("$arg")}return e}}class S extends w{complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state!==y.Complete)return null;let o=i.tokenToComplete||"",a="__COL_FUNCTION__"===i.dfName?e:i.dfName;if(!a)return null;let s=N(this.getDataframeToColumnsMap()[a]||[],o,t,i.quoteText??!1);return{matches:s,text:s.length>0?o:""}}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,`
      ; Sub-query 1: Dot column access
      ; Sub-query 1.1: Start of column access, e.g. df.where(df.|
      (ERROR
        . (identifier) @methodName
        (identifier) @dfName .
        "." @lastToken .
      )
      ; Sub-query 1.2: Column access, e.g. df.where(df.co|
      (ERROR
        . (identifier) @methodName
        (attribute
          object: (identifier) @dfName
          attribute: (identifier) @columnName @lastToken
        ) .
      )
      ; Sub-query 1.3: Nested column access, e.g. df.where(18 > df.ag|
      (ERROR
        . (identifier) @methodName
        (_
          (attribute
            object: (identifier) @dfName
            attribute: (identifier) @columnName @lastToken
          )
        ) .
      )
      ; Sub-query 2: col() function access patterns
      ; Sub-query 2.1: E.g. foo(col(|
      (ERROR
        . (identifier) @methodName
        (identifier) @colFunc 
        . "(" @lastToken
        (#eq? @colFunc "col")
      )
      ; Sub-query 2.2: E.g. foo(col("|
      (ERROR
        . (identifier) @methodName
        (identifier) @colFunc 
        . "("
        . (string_start) @stringStart @lastToken
        (#eq? @colFunc "col")
      )
      ; Sub-query 2.3: E.g. foo(col("a|
      (ERROR
        . (identifier) @methodName
        (identifier) @colFunc 
        . "("
        . (string_start) @stringStart
        . (identifier) @columnName @lastToken
        (#eq? @colFunc "col")
      )
      ; Sub-query 3: namespace.col() access, e.g. F.col(
      ; Sub-query 3.1: E.g. foo(F.col(|
      (ERROR
        . (identifier) @methodName
        (attribute
          object: (identifier) @namespace
          attribute: (identifier) @colFunc 
          (#eq? @colFunc "col")
        ) 
        . "(" @lastToken
      )
      ; Sub-query 3.2: E.g. foo(F.col("|
      (ERROR
        . (identifier) @methodName
        (attribute
          object: (identifier) @namespace
          attribute: (identifier) @colFunc 
          (#eq? @colFunc "col")
        ) 
        . "("
        . (string_start) @stringStart @lastToken
      )
      ; Sub-query 3.3: E.g. foo(F.col("a|
      (ERROR
        . (identifier) @methodName
        (attribute
          object: (identifier) @namespace
          attribute: (identifier) @colFunc 
          (#eq? @colFunc "col")
        ) 
        . "("
        . (string_start) @stringStart
        . (identifier) @columnName @lastToken
      )
      `).matches(i).findLast(e=>e.captures.length>0);if(!o)return{state:y.Error};let a=o.captures.findLast(e=>"dfName"===e.name)?.node.text,l=o.captures.findLast(e=>"columnName"===e.name)?.node.text||"",u=o.captures.findLast(e=>"colFunc"===e.name)?.node.text,d=o.captures.findLast(e=>"lastToken"===e.name)?.node,c=o.captures.findLast(e=>"stringStart"===e.name)?.node;if("col"===u){if(!R(d,e))return{state:y.Error};return{state:y.Complete,tokenToComplete:l,dfName:"__COL_FUNCTION__",quoteText:void 0===c}}if(!a||!R(d,e))return{state:y.Error};return{state:y.Complete,tokenToComplete:l,dfName:a}}}class O extends w{columnAccessCompleter;constructor(e){super(e),this.columnAccessCompleter=new S(e)}complete(e,t){return this.columnAccessCompleter.complete(e,t)??T}}let v=["asc","asc_nulls_first","asc_nulls_last","desc","desc_nulls_first","desc_nulls_last","col","explode"];class I extends w{columnAccessCompleter=new S(this.dataframeToColumnsMap);complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.columnAccessCompleter.complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n);if(null!==i)return i;let o=this.parse(r,n);if("complete"!==o.state)return T;let a=o.tokenToComplete;return{matches:N(this.getDataframeToColumnsMap()[e]||[],a||"",t,!a&&o.quoteText),text:a||""}}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:"error"};let o=new s.XK(n,`
      ; Sub-query (1)
      ; Explicitly captures usage of inner functions, e.g. \`select(...col(|\`, \`select(...col("|\`, and \`select(...col("nam|\`
      (ERROR
        . (identifier) @methodName
        (identifier) @inner 
        .
        "(" 
        @lastToken
        .
        (string_start)? 
        @lastToken
        .
        (identifier)?
        @lastToken
        .
        (string)?
        @lastToken
      )
      ; Sub-query (2)
      ; Matches calls like \`select(|\`, \`select("name", |\`, or \`select(col(|\`, i.e. where we need to suggest all columns.
      (ERROR
        . (identifier) @methodName
        ([(string_start)(",")("(")]) @lastToken .
      )
      ; Sub-query (3)
      ; Matches calls like \`select("na|\`, i.e. were we need to complete a column name.
      (ERROR
        . (identifier) @methodName
        (string_start)
        (identifier) @lastToken .
      )`).matches(i),a=this.findMostSpecificMatch(o??[]),l=a?.captures.find(e=>"inner"===e.name)?.node;if(l){let e=l.text;if(!v.includes(e))return{state:"error"}}let u=a?.captures.findLast(e=>"lastToken"===e.name)?.node;if(!u||"string"===u.type)return{state:"error"};let d="string_start"!==u.type&&"identifier"!==u.type;return{state:"complete",tokenToComplete:"identifier"===u.type?u.text:"",quoteText:d}}}class A extends w{complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if("complete"!==i.state)return T;let o=i.tokenToComplete,a=this.getDataframeToColumnsMap(),s=a[e];if(!s)return T;let l=s.length;return{matches:Object.keys(a).filter(t=>t!==e).filter(e=>a[e]?.length===l).filter(e=>e.startsWith(o||"")).sort().map((e,r)=>({text:e,displayText:e,start:-1,end:-1,type:k(t,"df"),sortText:b(r)})),text:o||""}}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:"error"};let o=new s.XK(n,`
      ; Sub-query (1)
      ; Matches calls like \`intersectAll(|\`, i.e. where we need to suggest all dataframes.
      (ERROR
        . (identifier) @methodName
        "(" @lastToken .
      )
      ; Sub-query (2)
      ; Matches calls like \`intersectAll(df|\`, i.e. where we need to complete a dataframe name.
      (ERROR
        . (identifier) @methodName
        "("
        (identifier) @lastToken .
      )`).matches(i),a=this.findMostSpecificMatch(o??[]),l=a?.captures.findLast(e=>"lastToken"===e.name)?.node;if(!l)return{state:"error"};return{state:"complete",tokenToComplete:"identifier"===l.type?l.text:""}}}class L extends w{cursor;supportsString;supportsList;supportsTuple;constructor(e,t=!0,r=!1,n=!1){super(e),this.supportsString=t,this.supportsList=r,this.supportsTuple=n}complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state!==y.CompleteColumn)return T;let o=i.tokenToComplete||"",a=this.getDataframeToColumnsMap()[e];if(!a)return T;let s=N(a,o,t,i.quoteText);return{matches:s,text:s.length>0?o:""}}parse(e,t){let{parser:r}=t,n=r.parse(e)?.rootNode;if(!n||(this.cursor=n.walk(),!this.cursor.gotoFirstChild()||"ERROR"!==this.cursor.nodeType&&!this.cursor.gotoFirstChild()||!this.cursor.gotoFirstChild()))return{state:y.Error};let i=this.#e().join("");if(this.supportsString){if("("===i)return{state:y.CompleteColumn,tokenToComplete:"",quoteText:!0};if('("'===i)return{state:y.CompleteColumn,tokenToComplete:"",quoteText:!1};if(/^\("\w+$/.test(i)){let e=i.match(/^\("(\w+)$/);return{state:y.CompleteColumn,tokenToComplete:e?.[1]||"",quoteText:!1}}}if(this.supportsList&&/^\(\[/.test(i)){if("(["===i||/,$/.test(i))return{state:y.CompleteColumn,tokenToComplete:"",quoteText:!0};if(/"$/.test(i))return{state:y.CompleteColumn,tokenToComplete:"",quoteText:!1};if(/"(\w+)$/.test(i)){let e=i.match(/"(\w+)$/);return{state:y.CompleteColumn,tokenToComplete:e?.[1]||"",quoteText:!1}}}if(this.supportsTuple&&/^\(\(/.test(i)){if("(("===i||/,$/.test(i))return{state:y.CompleteColumn,tokenToComplete:"",quoteText:!0};if(/"$/.test(i))return{state:y.CompleteColumn,tokenToComplete:"",quoteText:!1};if(/"(\w+)$/.test(i)){let e=i.match(/"(\w+)$/);return{state:y.CompleteColumn,tokenToComplete:e?.[1]||"",quoteText:!1}}}return{state:y.Error}}#e(){let e=[];for(;this.cursor.gotoNextSibling();)switch(this.cursor.nodeType){case"(":case"[":case",":case"identifier":e.push(this.cursor.nodeText);break;case"string":e.push("$string");break;case"string_start":e.push('"');break;default:e.push("$arg")}return e}}class P extends w{position;supportTuple;constructor(e,t,r=!1){super(e),this.position=t,this.supportTuple=r}complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state===y.Error)return null;let o=this.dataframeToColumnsMap[e]||[],a=i.tokenToComplete||"";if(o.length>0&&i.state===y.CompleteColumn)return{matches:N(o,a,t,i.quoteText),text:a};return T}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,function(e,t=!1){let r=t?"[(list)(tuple)(parenthesized_expression)]":"(list)",n=Array(e-1).fill("[(none)(true)(false)(integer)(float)(string)(list)(tuple)(dictionary)] .").join(' "," . ');return`
  ; Sub-query (1): Subset - keyword argument completion
  ; Sub-query (1.1): Keyword argument completion: dropna(subset=|
  (ERROR
    . (identifier) @query1_1
    "("
    (identifier) @kwargName
    "=" @subsetMarker .
    (#eq? @kwargName "subset")
  )
  ; Sub-query (1.2): Keyword argument with string start: dropna(subset="col|
  (ERROR
    . (identifier) @query1_2
    "("
    (identifier) @kwargName
    "=" @equalSign
    (string_start) @subsetMarker
    (identifier)? @subsetArg .
    (#eq? @kwargName "subset")
  )
  
  ; Sub-query (2): Subset - positional argument completion
  ; Sub-query (2.1): *string* argument (3rd position) - matches dropna("value", |
  (ERROR
    . (identifier) @query2_1 .
    "(" .
    ${n}
    "," @lastToken .
    (string_start)? @stringStartMarker @lastToken .
    (identifier)? @lastToken .
    (string)? @lastToken . 
    ${r}? @lastToken
  )
  ; Sub-query (2.2): *list* argument (3rd position) - matches dropna("any", None, ["|, dropna("any", None, ["col0", |
  ; Sub-query (2.2.1): First list element, e.g. [|, ["|, ["col|
  (ERROR
    . (identifier) @query2_2_1
    "("
    ${n}
    "," .
    ["[" "("] @listMarker .
    (string)? @lastToken
    "," @lastToken @listCommaMarker .
    (string_start)? @stringStartMarker @lastToken .
    (identifier)? @lastToken .
    ","? @lastToken .
  )
  ; Sub-query (2.2.2): Any other list element
  (ERROR
    . (identifier) @query2_2_2
    "("
    ${n}
    "," .
    ["[" "("] @listMarker . 
    ((string) @listElement . "," @listCommaMarker @lastToken)* .
    (string_start)? @stringStartMarker @lastToken .
    (identifier)? @lastToken .
    (string)? @lastToken .
  )
  ; Sub-query (2.2.3): Complete list - suggest nothing
  (ERROR
    . (identifier) @query2_2_3
    "("
    ${n}
    "," .
    ${r} @lastToken .
  )
  `}(this.position,this.supportTuple)).matches(i),a=this.findMostSpecificMatch(o??[]);if(!a)return{state:y.Error};let l=a.captures,u=l.find(e=>"subsetMarker"===e.name)?.node,d=l.find(e=>"subsetArg"===e.name)?.node,c=l.find(e=>"stringStartMarker"===e.name)?.node,m=l.findLast(e=>"lastToken"===e.name)?.node;if(u){let e=d?.text||"";return{state:y.CompleteColumn,tokenToComplete:e,quoteText:"string_start"!==u.type}}if(m){if(["string","list","parenthesized_expression","tuple"].includes(m.type))return{state:y.Error};if("identifier"===m.type){if(!c)return{state:y.Error};return{state:y.CompleteColumn,tokenToComplete:m.text,quoteText:!1}}return{state:y.CompleteColumn,tokenToComplete:"",quoteText:"string_start"!==m.type}}return{state:y.Error}}}class q extends w{complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state!==y.CompleteColumn)return T;let o=i.tokenToComplete||"",a=this.getDataframeToColumnsMap()[e];if(!a)return T;let s=N(a,o,t,i.quoteText);return{matches:s,text:s.length>0?o:""}}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,`
      ; Pattern 1: Empty argument or first column being typed
      ; Matches: corr(|, corr("|, corr("a|
      (ERROR
        . (identifier) @methodName
        "("
        @lastToken
        .
        (string_start)?
        @lastToken
        .
        (identifier)?
        @lastToken
        .
        (string)?
        @lastToken
      )

      ; Pattern 2: Second column being typed  
      ; Matches: corr("age", |, corr("age", "|, corr("age", "n|
      (ERROR
        . (identifier) @methodName
        "(" @parenStart
        (string) @firstArg
        ","
        @lastToken
        .
        (string_start)?
        @lastToken
        .
        (identifier)?
        @lastToken
        .
        (string)?
        @lastToken
      )

      ; Pattern 3: Invalid third argument
      ; Matches: corr("age", "name", ...
      (ERROR
        . (identifier) @methodName
        "("
        (string) @firstArg
        ","
        (string) @secondArg
        "," @thirdArg . 
      )
      `).matches(i),a=this.findMostSpecificMatch(o??[]);if(!a||a.captures.find(e=>"thirdArg"===e.name)?.node)return{state:y.Error};let l=a.captures.findLast(e=>"lastToken"===e.name)?.node;if(!l||"string"===l.type)return{state:y.Error};if("identifier"===l.type){if(!a.captures.filter(e=>"lastToken"===e.name).some(e=>"string_start"===e.node.type))return{state:y.Error};return{state:y.CompleteColumn,tokenToComplete:l.text,quoteText:!1}}let u="string_start"!==l.type;return{state:y.CompleteColumn,tokenToComplete:"",quoteText:u}}}let F=["inner","cross","outer","full","fullouter","full_outer","left","leftouter","left_outer","right","rightouter","right_outer","semi","leftsemi","left_semi","anti","leftanti","left_anti"],D=["inner","cross","left","leftouter","left_outer"];class $ extends w{cursor;joinTypes;constructor(e,t=F){super(e),this.joinTypes=t}complete({dataframeName:e,lastMethodCode:t},r){let n=this.parse(t,r);if(n.state===y.Error)return T;let{state:i,tokenToComplete:o="",otherDfName:a="",quoteText:s=!1}=n,l=this.getDataframeToColumnsMap();if(i===y.CompleteDataframe){let t=Object.entries(l)?.filter(([t])=>t.startsWith(o)&&t!==e)?.map(([t])=>{let r=l[e]||[],n=l[t]||[],i=r.filter(e=>n.includes(e));return{text:t,displayText:t,start:-1,end:-1,type:k("join","df"),matchingColumns:i.length}})?.sort((e,t)=>{let r=t.matchingColumns-e.matchingColumns;if(0!==r)return r;return e.text.localeCompare(t.text)})?.map(({text:e,displayText:t,start:r,end:n,type:i},o)=>({text:e,displayText:t,start:r,end:n,type:i,sortText:b(o)}))??[];return{matches:t,text:t.length>0?o:""}}if(i===y.CompleteHow){let e=this.joinTypes.filter(e=>e.startsWith(o)).map(e=>({text:s?`"${e}"`:e,displayText:e,start:-1,end:-1,type:k("join","how")}));return{matches:e,text:e.length>0?o:""}}if(i===y.CompleteColumn){let t=N((l[a]||[]).filter(t=>l[e]?.includes(t)),o,"join",s);return{matches:t,text:t.length>0?o:""}}return T}parse(e,t){let{parser:r}=t,n=r.parse(e);if(!n||(this.cursor=n.walk(),!this.cursor.gotoFirstChild()||!this.cursor.gotoFirstChild()||"identifier"!==this.cursor.nodeType))return{state:y.Error};let i=this.#e();if(0===i.length)return{state:y.Error};let o=i.join(""),a=o.match(/^\((\w+),(?:(?:\$arg,|\$string,|\$list,)*((?:\$kwarg,|\$onKwarg,)*)?(\$how=)(")?(\w+)?|(?:\$string|\$list|\$arg),(")?(\w+)?)$/);if(a)if(a[3])return{state:y.CompleteHow,tokenToComplete:a[5]??"",otherDfName:a[1],quoteText:'"'!==a[4]};else return{state:y.CompleteHow,tokenToComplete:a[7]??"",otherDfName:a[1],quoteText:'"'!==a[6]};if(a=o.match(/^\((\w+),(\$arg,)*((?:\$howKwarg,|\$kwarg,)*)?(\$on=)?(?:\[(?:\$string,)*)?(")?(\w+)?$/)){if(a[2]||a[3]&&!a[4])return{state:y.Error};return{state:y.CompleteColumn,tokenToComplete:a[6]??"",otherDfName:a[1],quoteText:'"'!==a[5]}}if(a=o.match(/^\((\w*)$/))return{state:y.CompleteDataframe,tokenToComplete:a[1],otherDfName:a[1],quoteText:!1};return{state:y.Error}}#e(){let e=[];for(;this.cursor.gotoNextSibling();)switch(this.cursor.nodeType){case"(":case"[":case"=":case",":e.push(this.cursor.nodeText);break;case"identifier":"on"===this.cursor.nodeText?e.push("$on"):"how"===this.cursor.nodeText?e.push("$how"):e.push(this.cursor.nodeText);break;case"string":e.push("$string");break;case"list":e.push("$list");break;case"keyword_argument":e.push(this.#t(this.cursor));break;case"string_start":e.push('"');break;default:e.push("$arg")}return e}#t(e){let t=e.gotoFirstChild()?e.nodeText:"",r="$kwarg";return"on"===t?r="$onKwarg":"how"===t&&(r="$howKwarg"),e.gotoParent(),r}}class W extends w{complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state===y.Error)return null;if(i.state===y.Complete)return T;let o=this.getDataframeToColumnsMap()[e];if(!o)return T;if(i.state===y.CompleteColumn){let e=i.tokenToComplete||"";return{matches:N(o,e,t,i.quoteText),text:e}}return T}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,`
      ; Sub-query (1): First argument (table name) - empty
      ; Matches: mergeInto(|
      (ERROR
        . (identifier) @methodName
        "(" @firstArgMarker .
      )

      ; Sub-query (2): First argument (table name) - partial string or identifier
      ; Matches: mergeInto("tab|  or  mergeInto(tab|
      (ERROR
        . (identifier) @methodName
        "("
        (string) @firstArgMarker .
      )

      ; Sub-query (3): After first comma - second argument empty (condition)
      ; Matches: mergeInto("table", |
      (ERROR
        . (identifier) @methodName
        "("
        (string) @firstArgMarker
        "," @secondArgMarker .
      )

      ; Sub-query (4): Second argument with partial string or identifier value
      ; Matches: mergeInto("table", "cond|  or  mergeInto("table", cond|
      (ERROR
        . (identifier) @methodName
        "("
        (string) @firstArgMarker
        ","
        (string_start) @secondArgMarker .
      )
      (ERROR
        . (identifier) @methodName
        "("
        (string) @firstArgMarker
        ","
        (string_start) @secondArgMarker .
        (identifier) @secondArg .
      )

      ; Sub-query (6): Too many arguments - detect when secondArg is followed by comma
      ; Matches: mergeInto("table", "condition", |
      (ERROR
        . (identifier) @methodName
        "("
        (string) @firstArgMarker
        "," @secondArgMarker .
        [(string) (identifier)] @secondArg
        "," @tooManyArgs
      )`).matches(i),a=this.findMostSpecificMatch(o??[]);if(!a||a.captures.find(e=>"tooManyArgs"===e.name)?.node)return{state:y.Error};let l=a.captures.find(e=>"secondArg"===e.name)?.node,u=a.captures.find(e=>"secondArgMarker"===e.name)?.node;if(l||u){let e=l?.text||"";return{state:y.CompleteColumn,tokenToComplete:e,quoteText:""===e&&u?.type!=="string_start"}}return{state:y.Complete,tokenToComplete:""}}}class j extends w{complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state!==y.CompleteDataframe)return T;let o=i.tokenToComplete||"",a=this.getDataframeToColumnsMap();if(!a[e])return T;return{matches:Object.keys(a).filter(t=>t!==e).filter(e=>e.startsWith(o)).sort().map((e,r)=>({text:e,displayText:e,start:-1,end:-1,type:k(t,"df"),sortText:b(r)})),text:o}}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i||e.includes(","))return{state:y.Error};let o=new s.XK(n,`
      ; Sub-query (1)
      ; Matches calls like \`sameSemantics(|\`, i.e. where we need to suggest all dataframes.
      (ERROR
        . (identifier) @methodName
        "(" @lastToken .
      )
      ; Sub-query (2)
      ; Matches calls like \`sameSemantics(df|\`, i.e. where we need to complete a dataframe name.
      (ERROR
        . (identifier) @methodName
        "("
        (identifier) @lastToken .
      )`).matches(i),a=this.findMostSpecificMatch(o??[]),l=a?.captures.findLast(e=>"lastToken"===e.name)?.node;if(!l)return{state:y.Error};return{state:y.CompleteDataframe,tokenToComplete:"identifier"===l.type?l.text:""}}}let U=["True","False"];class B extends w{complete({dataframeName:e,lastMethodName:t,lastMethodCode:r},n){let i=this.parse(r,n);if(i.state===y.Error)return T;let o=i.tokenToComplete||"",a=this.getDataframeToColumnsMap();if(!a[e])return T;if(i.state===y.Complete)return{matches:U.filter(e=>e.startsWith(o)).map((e,r)=>({text:e,displayText:e,start:-1,end:-1,type:k(t,"boolean"),sortText:b(r)})),text:o};if(i.state===y.CompleteDataframe)return{matches:Object.keys(a).filter(t=>t!==e).filter(e=>e.startsWith(o)).sort().map((e,r)=>({text:e,displayText:e,start:-1,end:-1,type:k(t,"df"),sortText:b(r)})),text:o};return T}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};if(e.match(/^\w+\(\w+,\s*$/))return{state:y.Complete,tokenToComplete:""};let o=e.match(/^\w+\(\w+,\s*allowMissingColumns=(\w+)$/);if(o)return{state:y.Complete,tokenToComplete:o[1]};let a=new s.XK(n,`
      ; Sub-query (1): DataFrame argument completion
      ; Matches: unionByName(|  - suggest all dataframes
      (ERROR
        . (identifier) @methodName
        "(" @lastToken .
      )

      ; Sub-query (2): DataFrame argument completion with partial name
      ; Matches: unionByName(df|  - complete dataframe name
      (ERROR
        . (identifier) @methodName
        "("
        (identifier) @lastToken .
      )

      ; Sub-query (3): Boolean completion - keyword form with empty value
      ; Matches: unionByName(df_cities, allowMissingColumns=|
      (ERROR
        . (identifier) @methodName
        "("
        (identifier) @dfArg
        ","
        (identifier) @kwargName
        "=" @lastToken .
      )

      ; Sub-query (4): Boolean completion - keyword form with partial value
      ; Matches: unionByName(df_cities, allowMissingColumns=T|
      (ERROR
        . (identifier) @methodName
        "("
        (identifier) @dfArg
        ","
        (identifier) @kwargName
        "="
        (identifier) @lastToken .
      )

      ; Sub-query (5): Boolean completion - positional form with any identifier
      ; Matches: unionByName(df_cities, Fa|  or  unionByName(df_cities, allowMissingColumns|
      (ERROR
        . (identifier) @methodName
        "("
        (identifier) @dfArg
        ","
        (identifier) @secondArg .
      )

      ; Sub-query (6): Boolean completion - keyword form with complete value
      ; Matches: unionByName(df_cities, allowMissingColumns=True|
      ; This catches any keyword_argument node anywhere in the tree
      (keyword_argument
        name: (identifier) @kwargName
        value: (identifier) @completeValue
      )`).matches(i),l=this.findMostSpecificMatch(a??[]);if(!l)return{state:y.Error};let u=l.captures.find(e=>"completeValue"===e.name)?.node;if(u){let e=l.captures.find(e=>"kwargName"===e.name)?.node;if(e&&"allowMissingColumns"===e.text)return{state:y.Complete,tokenToComplete:u.text}}let d=l.captures.find(e=>"kwargName"===e.name)?.node;if(d&&"allowMissingColumns"===d.text){let e=l.captures.findLast(e=>"lastToken"===e.name)?.node;if(!e)return{state:y.Error};return{state:y.Complete,tokenToComplete:"identifier"===e.type?e.text:""}}let c=l.captures.find(e=>"secondArg"===e.name)?.node;if(c){if("allowMissingColumns"===c.text)return{state:y.Error};return{state:y.Complete,tokenToComplete:c.text}}let m=l.captures.findLast(e=>"lastToken"===e.name)?.node;if(!m)return{state:y.Error};return{state:y.CompleteDataframe,tokenToComplete:"identifier"===m.type?m.text:""}}}class K extends w{columnAccessCompleter;constructor(e){super(e),this.columnAccessCompleter=new S(e)}complete(e,t){return this.columnAccessCompleter.complete(e,t)??T}}class z extends w{complete({dataframeName:e,lastMethodCode:t},r){let n=this.parse(t,r);if(n.state!==y.CompleteExistingColumn)return T;let i=n.tokenToComplete||"";return{matches:N(this.getDataframeToColumnsMap()[e]||[],i,"withColumnRenamed",!i&&n.quoteText),text:i}}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,`
      ; Case 1: e.g. df.withColumnRenamed(|
      (ERROR
        . (identifier) @methodName .
        "(" @lastToken .
      )
      ; Case 2: e.g. df.withColumnRenamed("|
      (ERROR
        . (identifier) @methodName .
        "(" @openParen .
        (string_start) @lastToken .
      )
      ; Case 3: e.g. df.withColumnRenamed("co|
      (ERROR
        . (identifier) @methodName .
        "(" @openParen .
        (string_start) @string_start .
        (identifier) @lastToken .
      )
      `),a=this.#r(o.matches(i)??[]),l=a?.captures?.findLast(e=>"lastToken"===e.name)?.node;if(!l||l.nextSibling)return{state:y.Error};return{state:y.CompleteExistingColumn,tokenToComplete:"identifier"===l.type?l.text:"",quoteText:"string_start"!==l.type&&"identifier"!==l.type}}#r(e){if(!e?.length)return;return e.sort((e,t)=>t.captures.length-e.captures.length)[0]}}class X extends w{columnAccessCompleter;constructor(e){super(e),this.columnAccessCompleter=new S(e)}complete(e,t){let r=this.columnAccessCompleter.complete(e,t);if(null!==r)return r;let n=this.parse(e.lastMethodCode,t);if(n.state!==y.Complete)return T;let i=n.tokenToComplete||"";return{matches:this.getDataframeToColumnsMap()[e.dataframeName]?.filter(e=>e.startsWith(i))?.map((e,t)=>({text:e,displayText:e,start:-1,end:-1,sortText:b(t),type:k("withColumns","column")}))||[],text:i}}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,`
      ; There is a special case the column access completer doesn't handle:
      ; The start of column access in a dictionary value with an expression, e.g. df.withColumns({"test": 18 > df.col|
      (ERROR
        . (identifier)
        (pair
          (_
            (attribute
              object: (identifier) @dfName
              attribute: (identifier) @lastToken
            )
          )
        ) .
      )`),a=o.matches(i)?.[0];if(!a)return{state:y.Error};let l=a.captures.find(e=>"dfName"===e.name)?.node.text,u=a.captures.find(e=>"lastToken"===e.name)?.node;if(!l||!R(u,e))return{state:y.Error};return{state:y.Complete,tokenToComplete:u?.text||"",dfName:l}}}class G extends w{complete({dataframeName:e,lastMethodCode:t},r){let n=this.parse(t,r);if(n.state!==y.CompleteExistingColumn)return T;let i=n.tokenToComplete||"";if(n.isInsideDictionary)return{matches:N(this.getDataframeToColumnsMap()[e]||[],i,"withColumnsRenamed",!i&&n.quoteText),text:i};return T}parse(e,t){let{parser:r,language:n}=t,i=r.parse(e)?.rootNode;if(!i)return{state:y.Error};let o=new s.XK(n,`
      ; Case 1: e.g. df.withColumnsRenamed({|
      (ERROR
        . (identifier) @methodName
        "{" @dictMarker @lastToken .
      )
      ; Case 2: e.g. df.withColumnsRenamed({"|
      (ERROR
        . (identifier) @methodName
        "{" @dictMarker .
        (string_start) @lastToken .
      )
      ; Case 3: e.g. df.withColumnsRenamed({"co|
      (ERROR
        . (identifier) @methodName
        "{" @dictMarker .
        (string_start) @string_start .
        (identifier) @lastToken .
      )
      ; Case 4: e.g. df.withColumnsRenamed({"col1": "foo", |
      (ERROR
        . (identifier) @methodName
        "{" @dictMarker .
        (","?(pair))* @pair .
        "," @lastToken .
      )
      ; Case 5: e.g. df.withColumnsRenamed({"col1": "foo", "|
      (ERROR
        . (identifier) @methodName
        "{" @dictMarker .
        (","?(pair))* @pair .
        "," @comma .
        (string_start) @lastToken .
      )
      ; Case 6: e.g. df.withColumnsRenamed({"col1": "foo", "co|
      (ERROR
        . (identifier) @methodName
        "{" @dictMarker .
        (","?(pair))* @pair .
        "," @comma .
        (string_start) @string_start .
        (identifier) @lastToken .
      )
      `),a=this.#r(o.matches(i)??[]);if(!a)return{state:y.Error};let l=a.captures.findLast(e=>"lastToken"===e.name)?.node;if(!l||l.nextSibling)return{state:y.Error};return{state:y.CompleteExistingColumn,tokenToComplete:"identifier"===l.type?l.text:"",quoteText:"string_start"!==l.type&&"identifier"!==l.type,isInsideDictionary:!!a.captures.find(e=>"dictMarker"===e.name)?.node}}#r(e){if(!e?.length)return;return e.sort((e,t)=>t.captures.length-e.captures.length)[0]}}let H=[...Object.values(C),...Object.values(_)].join("|");class V{dataframeToColumnsMap;completers;constructor(e){this.dataframeToColumnsMap=e,this.completers={[C.AGG]:new E(e),[C.APPROX_QUANTILE]:new L(e,!0,!0,!0),[C.CORR]:new q(e),[C.COV]:new q(e),[C.CROSS_JOIN]:new A(e),[C.CROSSTAB]:new q(e),[C.CUBE]:new I(e),[C.DESCRIBE]:new I(e),[C.DROP]:new I(e),[C.DROP_DUPLICATES]:new M(e),[C.DROP_DUPLICATES_UNDERSCORE]:new M(e),[C.DROP_DUPLICATES_WITHIN_WATERMARK]:new M(e),[C.DROPNA]:new P(e,3,!0),[C.EXCEPT_ALL]:new A(e),[C.FILLNA]:new P(e,2,!0),[C.FILTER]:new O(e),[C.FREQUENCY_ITEMS]:new L(e,!1,!0,!1),[C.GROUP_BY]:new I(e),[C.GROUP_BY_ALIAS]:new I(e),[C.GROUPING_SETS]:new I(e),[C.INTERSECT]:new A(e),[C.INTERSECT_ALL]:new A(e),[C.JOIN]:new $(e),[C.LATERAL_JOIN]:new $(e,D),[C.MERGE_INTO]:new W(e),[C.ORDER_BY]:new I(e),[C.PIVOT]:new L(e),[C.REPARTITION]:new I(e),[C.REPARTITION_BY_RANGE]:new I(e),[C.REPLACE]:new P(e,3,!1),[C.ROLLUP]:new I(e),[C.SAME_SEMANTICS]:new j(e),[C.SAMPLE_BY]:new L(e),[C.SELECT]:new I(e),[C.SORT]:new I(e),[C.SORT_WITHIN_PARTITION]:new I(e),[C.SUBTRACT]:new A(e),[C.UNION]:new A(e),[C.UNION_ALL]:new A(e),[C.UNION_BY_NAME]:new B(e),[C.WHERE]:new O(e),[C.WITH_COLUMN]:new K(e),[C.WITH_COLUMN_RENAMED]:new z(e),[C.WITH_COLUMNS]:new X(e),[C.WITH_COLUMNS_RENAMED]:new G(e)}}complete(e,t){let r=this.parse(e,t);if(!r)return null;let n=this.completers[r.lastMethodName];if(!n)return T;return n.complete(r,t)}parse(e,t){let r,{parser:n,language:i}=t,o=n.parse(e);if(!o)return null;let a=new s.XK(i,`
      (ERROR 
        (attribute
          attribute: (identifier) @method
          (#match? @method "^(${H})$")
        ) @attribute
        .
        "(")
      `).matches(o.rootNode);if(0===a.length)return null;let l=a[a.length-1],u=l.captures.find(e=>"attribute"===e.name)?.node,d=u?.text.split(".");if(!d||d.length<2)return null;let c=d[d.length-1].trim();if(d.length>=3&&"spark"===d[0].trim()&&d[1].trim().startsWith("table")){let e=this.extractTableName(u?.text??"",t);if(!e)return null;r=e}else r=d[0].replace(/\\/,"").trimEnd();let m="na"===d[d.length-2].trim(),f=c;if(m)switch(c){case _.FILL:f=C.FILLNA;break;case _.DROP:f=C.DROPNA}return{dataframeName:r,lastMethodName:f,lastMethodCode:e.substring(e.lastIndexOf(c))}}extractTableName(e,t){let{parser:r,language:n}=t,i=r.parse(e);if(!i)return null;let o=new s.XK(n,`
      (call
        function: (attribute
          attribute: (identifier) @method
          (#eq? @method "table"))
        arguments: (argument_list
          (string) @table_name))
      `).matches(i.rootNode);if(1!==o.length)return null;let a=o[0].captures.find(e=>"table_name"===e.name);if(!a)return null;return a.node.text.slice(1,-1)}}function Y(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}var J=r(452137),Q=r.n(J),Z=r(993533);function ee(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function et(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var o=e.apply(t,r);function a(e){ee(o,n,i,a,s,"next",e)}function s(e){ee(o,n,i,a,s,"throw",e)}a(void 0)})}}function er(e){return et(function*({code:e,sdpSymbols:t,visitor:r}){let{parser:n}=yield d(),i=n.parse(e),o=new Map(t.map(e=>[`dlt.${e}`,e]));if(!i)return o;return function e(n){var i,a;for(let s of("import_from_statement"===n.type?(i=n,t.forEach(e=>{let t=en({importFromNode:i,moduleName:"dlt",symbolName:e});t&&o.set(t,e);let r=en({importFromNode:i,moduleName:"pyspark",symbolName:"pipelines"});r&&o.set(`${r}.${e}`,e);let n=en({importFromNode:i,moduleName:"pyspark.pipelines",symbolName:e});n&&o.set(n,e),ea({importFromNode:i,moduleName:"dlt"})&&o.set(e,e),ea({importFromNode:i,moduleName:"pyspark.pipelines"})&&o.set(e,e)})):"import_statement"===n.type&&(a=n,t.forEach(e=>{let t=ei({importNode:a,moduleName:"dlt"});t&&o.set(`${t}.${e}`,e);let r=ei({importNode:a,moduleName:"pyspark"});r&&o.set(`${r}.pipelines.${e}`,e);let n=ei({importNode:a,moduleName:"pyspark.pipelines"});n&&o.set(`${n}.${e}`,e)})),r?.({node:n,sdpImportedSymbols:o}),n.children))s&&e(s)}(i.rootNode),o}).apply(this,arguments)}function en({importFromNode:e,moduleName:t,symbolName:r}){Q()("import_from_statement"===e.type,"importFromNode must be of type import_from_statement");let[n,...i]=e.namedChildren;if(n?.type!=="dotted_name"||n.text!==t)return null;if(i.some(e=>e&&"dotted_name"===e.type&&e.text===r))return r;return eo({namedChildren:e.namedChildren,importName:r})}function ei({importNode:e,moduleName:t}){if(Q()("import_statement"===e.type,"importNode must be of type import_statement"),e.namedChildren.some(e=>e?.type==="dotted_name"&&e.text===t))return t;return eo({namedChildren:e.namedChildren,importName:t})}function eo({namedChildren:e,importName:t}){let r=e.find(e=>e?.type==="aliased_import"&&e.firstNamedChild?.text===t);if(!r)return null;let n=r.namedChildren.find(e=>e&&"identifier"===e.type);return n?.text??null}function ea({importFromNode:e,moduleName:t}){Q()("import_from_statement"===e.type,"importFromNode must be of type import_from_statement");let[r,...n]=e.namedChildren;if(r?.type!=="dotted_name"||r.text!==t)return!1;return n.some(e=>e&&"wildcard_import"===e.type)}function es(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}let el=["table","materialized_view","temporary_view","view"],eu=["create_streaming_table"],ed={materialized_view:Z.oLM.MATERIALIZED_VIEW,table:Z.oLM.STREAMING_TABLE,create_streaming_table:Z.oLM.STREAMING_TABLE,temporary_view:Z.oLM.VIEW,view:Z.oLM.VIEW};function ec(e){let t=e?.namedChildren.find(e=>e?.type==="string");if(!t||3!==t.namedChildren.length)return null;let[r,n,i]=t.namedChildren;if(r?.type!=="string_start"||n?.type!=="string_content"||i?.type!=="string_end")return null;return n.text}function em(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function ef(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function ep(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){r(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}(0,a.s)({extractDatasetsFromPython:({code:e,datasetDecoratorsToTrack:t=el,functionNamesToTrack:r=eu})=>{var n;return(n=function*(){let n=[];return yield er({code:e,sdpSymbols:[...t,...r],visitor:({node:e,sdpImportedSymbols:i})=>{if("decorated_definition"===e.type){let r=function({decoratedFunctionNode:e,decoratedWith:t,datasetDecoratorsToTrack:r}){Q()("decorated_definition"===e.type,"decoratedFunctionNode must be of type decorated_definition");let n=function({decoratorNodes:e,decoratedWith:t}){for(let r of e){let e=r?.firstNamedChild,n=e?.type==="call"?e.firstNamedChild?.text:e?.text;if(!n)continue;let i=t.get(n);if(i)return{decoratorNode:r,originalDecoratorName:i}}return null}({decoratorNodes:e.namedChildren.filter(e=>!!(e&&"decorator"===e.type)),decoratedWith:t});if(!n||!r?.includes(n.originalDecoratorName))return null;let i=e.namedChildren.find(e=>e&&"function_definition"===e.type);if(!i)return null;let{decoratorNode:o,originalDecoratorName:a}=n,s=function({functionNode:e,decoratorNode:t}){Q()("function_definition"===e.type,"functionNode must be of type function_definition"),Q()("decorator"===t.type,"decoratorNode must be of type decorator");let r=t.firstNamedChild?.namedChildren.find(e=>e?.type==="argument_list"),n=r?.namedChildren.find(e=>e?.type==="keyword_argument"&&e?.firstNamedChild?.type==="identifier"&&e?.firstNamedChild?.text==="name");if(n){let e=ec(n);if(e)return{type:"static",name:e};return{type:"dynamic",expression:n.lastNamedChild?.text??""}}{let t=e.childForFieldName("name");if(t)return{type:"static",name:t.text};return null}}({functionNode:i,decoratorNode:o});if(!s)return null;{let e=ed[a]??Z.oLM.DATASET_TYPE_UNKNOWN;return{datasetName:"static"===s.type?s.name:s.expression,datasetType:e,startLineNumber:o.startPosition.row+1,endLineNumber:i.endPosition.row+1,obtainedBy:"analyzing-code",datasetNameType:s.type,definition:{schema:null,isPrivate:null}}}}({decoratedFunctionNode:e,decoratedWith:i,datasetDecoratorsToTrack:t});r&&n.push(r)}if("call"===e.type){let t=function({callExpressionNode:e,functionNamesToTrack:t,sdpImportedSymbols:r}){if(Q()("call"===e.type,"callExpressionNode must be of type call"),e.parent?.type==="decorator")return null;let n=e.childForFieldName("function");if(!n||!r.has(n.text))return null;let i=r.get(n.text);if(!t?.includes(i))return null;for(let t of e.descendantsOfType("keyword_argument")){if(t?.childForFieldName("name")?.text!=="name")continue;let r=ec(t);if(r)return{datasetName:r,datasetType:ed[i]??Z.oLM.DATASET_TYPE_UNKNOWN,startLineNumber:e.startPosition.row+1,endLineNumber:e.endPosition.row+1,obtainedBy:"analyzing-code",datasetNameType:"static",definition:{schema:null,isPrivate:null}}}return null}({callExpressionNode:e,functionNamesToTrack:r,sdpImportedSymbols:i});t&&n.push(t)}}}),{datasets:n}},function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function a(e){es(o,r,i,a,s,"next",e)}function s(e){es(o,r,i,a,s,"throw",e)}a(void 0)})})()},extractPipelinesImportedSymbolsFromPython:function(e){return et(function*({code:e,sdpSymbols:t,visitor:r}){return new Set((yield er({code:e,sdpSymbols:t,visitor:r})).keys())}).apply(this,arguments)},extractTestsFromPython:({code:e,filePath:t})=>{var r;return(r=function*(){let{parser:r}=yield d(),n=function(e,t){let r=t.split("\n"),n=new Set,i=t,o=e.parse(i);if(!o)return null;let a=0;for(;o.rootNode.hasError&&a<2;){let t=function e(t){if(t.isError)return t;for(let r of t.children){if(!r)continue;let t=e(r);if(null!==t)return t}return null}(o.rootNode);if(null===t)break;let s=function(e,t){let r=e.startPosition.row,n=e.text;if(0===e.startPosition.column){let e=n.startsWith("def "),i=n.startsWith("class ");if(e||i){let e=function(e,t){for(let r=t-1;r>=0;r--){let t=e[r].trim();if(t.length>0&&!t.startsWith("#"))return r}return null}(t,r);if(null!==e&&function(e){let t=e.trim();if(!t.startsWith("def ")&&!t.startsWith("class "))return!1;return!t.endsWith(":"),!0}(t[e]))return e}}return r}(t,r);if(n.has(s)){let e=t.startPosition.row;if(n.has(e))break;n.add(e),c(r,e)}else n.add(s),c(r,s);if(i=r.join("\n"),!(o=e.parse(i)))return null;a++}return{tree:o,modifiedCode:i,commentedLines:n}}(r,e);if(!n)return[];let{tree:i}=n,o=function(e){let t=new Map;for(let r of e.namedChildren){if(!r)continue;let e="assignment"===r.type?r:"expression_statement"===r.type?r.namedChildren.find(e=>e?.type==="assignment")??null:null;if(!e)continue;let n=e.namedChildren.filter(e=>null!==e);if(2!==n.length)continue;let[i,o]=n;"identifier"===i.type&&("list"===o.type||"tuple"===o.type)&&t.set(i.text,o)}return t}(i.rootNode),a=t?`/Workspace${t}`:"";return function e(t,r){let n=[];for(let i of t){let t=""!==r?[r,i.name].join("::"):i.name;"class"===i.type&&n.push(...e(i.children,t));let o={target:t,type:i.type,startLineNumber:i.startRow,endLineNumber:i.endRow};"function"===i.type&&i.isParameterized&&i.parameterizedCases&&(o.isParameterized=!0,o.parameterizedCases=i.parameterizedCases),n.push(o)}return n}(i.rootNode.namedChildren.filter(e=>null!==e).map(e=>(function e(t,r){if("decorated_definition"===t.type)return function(t,r){let n=t.childForFieldName("definition");if(!n||function(e){for(let t of e.namedChildren.filter(e=>e?.type==="decorator")){if(!t)continue;let e=t.text;if(/^@(pytest|pytest_asyncio)\.fixture(\b|$|\()/.test(e))return!0}return!1}(t))return null;let i=e(n,r);if(!i)return null;let o=function(e,t){let r=e.namedChildren.filter(e=>e?.type==="decorator"),n=[];for(let e of r){if(!e||!e.text.includes("parametrize"))continue;let r=e.namedChildren.find(e=>e?.type==="call");if(!r)continue;let i=r.childForFieldName("arguments");if(!i)continue;let o=i.namedChildren.filter(e=>null!==e),a=o.filter(e=>"keyword_argument"!==e.type),s=o.filter(e=>"keyword_argument"===e.type);if(a.length<2)continue;let l=a[1],u=function(e){if(!e)return[];if("list"===e.type||"tuple"===e.type)return e.namedChildren.filter(e=>null!==e).map(e=>(function e(t){if(!t)return null;if("call"===t.type)return function(t){let r=t.childForFieldName("function")?.text??"";if(!/(^|\.)param$/.test(r))return null;let n=t.childForFieldName("arguments"),i=n?function(e){for(let t of e.namedChildren){if(t?.type!=="keyword_argument")continue;let e=t.childForFieldName("name");if(e?.text!=="id")continue;let r=t.childForFieldName("value");if(!r)break;return f(r)}return null}(n):null;if(null!==i)return{id:i,hasExplicitId:!0};let o=n?.namedChildren[0];if(!o)return null;let a=e(o);return a?{id:a.id,hasExplicitId:!1}:null}(t);if("tuple"===t.type){let e=t.namedChildren.filter(e=>null!==e).map(e=>f(e)).filter(e=>null!==e);return e.length>0?{id:e.join("-"),hasExplicitId:!1}:null}let r=f(t);return null!==r?{id:r,hasExplicitId:!1}:null})(e)).filter(e=>null!==e);return[]}("identifier"===l.type?t?.get(l.text)??l:l);if(0===u.length)continue;let d=function(e){for(let t of e){if("keyword_argument"!==t.type)continue;let e=t.childForFieldName("name");if(e?.text==="ids")return t.childForFieldName("value")??null}return null}(s),c=u.some(e=>e.hasExplicitId);if(d){let e=function(e){if(!e||"list"!==e.type&&"tuple"!==e.type)return[];let t=[];for(let r of e.namedChildren){if(!r)continue;let e=f(r);if(null===e)return[];t.push(e)}return t}("identifier"===d.type?t?.get(d.text)??d:d);if(e.length>0&&e.length===u.length){n.push(u.map((t,r)=>t.hasExplicitId?t.id:e[r]));continue}c&&u.every(e=>e.hasExplicitId)&&n.push(u.map(e=>e.id));continue}n.push(u.map(e=>e.id))}if(0===n.length)return[];if(1===n.length)return n[0];var i=n;if(0===i.length)return[];if(1===i.length)return i[0];return i.reduce((e,t)=>{let r=[];for(let n of e)for(let e of t)r.push(`${n}-${e}`);return r})}(t,r),a=o.length>0,s={...i,startRow:t.startPosition.row+1,endRow:t.endPosition.row+1};if("function"===s.type&&a)return{...s,type:"function",isParameterized:a,parameterizedCases:o};return s}(t,r);if("class_definition"!==t.type&&"function_definition"!==t.type)return null;if("function_definition"===t.type){let e=t.childForFieldName("name")?.text;if(!e||!e.startsWith("test"))return null;return{type:"function",name:e,startRow:t.startPosition.row+1,endRow:t.endPosition.row+1}}if("class_definition"===t.type){let n=t.childForFieldName("name")?.text;if(!n)return null;let i=function(e){let t=e.childForFieldName("superclasses");if(!t||"argument_list"!==t.type)return!1;for(let e of t.namedChildren){if(!e)continue;let t="";return"attribute"===e.type?t=e.childForFieldName("attribute")?.text??"":"identifier"===e.type&&(t=e.text),t.startsWith("Test")||t.endsWith("TestCase")||t.endsWith("Suite")}return!1}(t);if(!n.startsWith("Test")&&!n.endsWith("Suite")&&!i)return null;let o=t.namedChildren.filter(e=>null!==e&&"block"===e.type).flatMap(e=>e.namedChildren).filter(e=>null!==e&&("function_definition"===e.type||"class_definition"===e.type||"decorated_definition"===e.type));if(o.some(e=>{if("function_definition"===e.type)return e.childForFieldName("name")?.text==="__init__";if("decorated_definition"===e.type){let t=e.childForFieldName("definition");return t?.childForFieldName("name")?.text==="__init__"}return!1}))return null;let a=(i?o.filter(e=>"function_definition"===e.type||"decorated_definition"===e.type):o).map(t=>e(t,r)).filter(e=>null!==e);if(a.length>0)return{type:"class",name:n,startRow:t.startPosition.row+1,endRow:t.endPosition.row+1,children:a}}return null})(e,o)).filter(e=>null!==e),a)},function(){var e=this,t=arguments;return new Promise(function(n,i){var o=r.apply(e,t);function a(e){m(o,n,i,a,s,"next",e)}function s(e){m(o,n,i,a,s,"throw",e)}a(void 0)})})()},matchPythonAstQuery:({code:e,query:t})=>{var r;return(r=function*(){let{parser:r,language:n}=yield d(),i=r.parse(e);if(!i)return!1;return new s.XK(n,t).captures(i.rootNode).length>0},function(){var e=this,t=arguments;return new Promise(function(n,i){var o=r.apply(e,t);function a(e){ep(o,n,i,a,s,"next",e)}function s(e){ep(o,n,i,a,s,"throw",e)}a(void 0)})})()},completePysparkCode:({code:e,dataframeToColumnsMap:t})=>{var r;return(r=function*(){let r=yield d();return new V(t).complete(e,r)},function(){var e=this,t=arguments;return new Promise(function(n,i){var o=r.apply(e,t);function a(e){Y(o,n,i,a,s,"next",e)}function s(e){Y(o,n,i,a,s,"throw",e)}a(void 0)})})()},lastPythonImportLine:({code:e})=>{var t;return(t=function*(){let{parser:t,language:r}=yield d(),n=t.parse(e);if(!n)return 0;let i=new s.XK(r,"(module [(import_statement)(import_from_statement)] @import)").captures(n.rootNode);return i.length>0?i[i.length-1].node.startPosition.row+1:0},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(e){ef(o,n,i,a,s,"next",e)}function s(e){ef(o,n,i,a,s,"throw",e)}a(void 0)})})()},captureCodeBlocksFromPythonAst:({code:e,query:t,captureNames:r})=>h(function*(){let{parser:n,language:i}=yield d(),o=n.parse(e);if(!o)return[];let a=new s.XK(i,t).captures(o.rootNode),l=[];for(let t of a)if(r.includes(t.name)){let{startIndex:r,endIndex:n,startPosition:i,endPosition:o}=t.node,a=e.slice(r,n);l.push({code:a,range:{startLineNumber:i.row+1,endLineNumber:o.row+1,startColumn:i.column+1,endColumn:o.column+1}})}return l})(),captureCodeBlocksFromPythonAstBatch:({code:e,queries:t,instrumented:r=!1})=>h(function*(){let{parser:n,language:i}=yield d(),o=r?performance.now():0,a=n.parse(e),l=r?performance.now()-o:0,u={},c=[];if(!a){var m="Failed to parse Python code";for(let e of t)if(e.subQueries)for(let t of e.subQueries)u[t.key]={error:m};else u[e.key]={error:m};return{results:u,...r?{timing:{parseDurationMs:l,perRuleTimings:c}}:{}}}for(let{key:n,query:o,captureNames:l,subQueries:d}of t)if(d&&d.length>0)!function(e){let{language:t,code:r,treeRoot:n,parentKey:i,query:o,captureNames:a,subQueries:l,results:u,perRuleTimings:d}=e;try{let e=function(e,t,r,n){let i=new s.XK(e,r).captures(t),o=new Set;for(let e of i)if(n.includes(e.name)){let t=e.node;for(;t.parent&&"module"!==t.parent.type&&"block"!==t.parent.type;)t=t.parent;o.add(t)}return Array.from(o)}(t,n,o,a);for(let n of l){let i=d?performance.now():0;u[n.key]=0===e.length?{captures:[]}:function(e,t,r,n){try{let i=[];for(let o of n)i.push(...g(e,t,o,r.query,r.captureNames));return{captures:i}}catch(e){return{error:String(e)}}}(t,r,n,e),d&&d.push({ruleCode:n.key,durationMs:performance.now()-i})}}catch(e){for(let t of l)u[t.key]={error:`Parent query '${i}' failed: ${String(e)}`},d&&d.push({ruleCode:t.key,durationMs:0})}}({language:i,code:e,treeRoot:a.rootNode,parentKey:n,query:o,captureNames:l,subQueries:d,results:u,perRuleTimings:r?c:void 0});else{let t=r?performance.now():0;try{u[n]={captures:g(i,e,a.rootNode,o,l)}}catch(e){u[n]={error:String(e)}}r&&c.push({ruleCode:n,durationMs:performance.now()-t})}return{results:u,...r?{timing:{parseDurationMs:l,perRuleTimings:c}}:{}}})(),isUnclosedTripleQuotePresent:({code:e})=>{var t;return(t=function*(){let{parser:t,language:r}=yield d(),n=t.parse(e);if(!n)return!1;for(let e of new s.XK(r,`
    (ERROR
      (string_start) @string_start
    )
  `).captures(n.rootNode))if("string_start"===e.name&&("'''"===e.node.text||'"""'===e.node.text))return!0;return!1},function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(e){em(o,n,i,a,s,"next",e)}function s(e){em(o,n,i,a,s,"throw",e)}a(void 0)})})()}})}},f={};function p(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}},n={id:e,module:r,factory:m[e],require:p};return p.i.forEach(function(e){e(n)}),r=n.module,n.factory.call(r.exports,r,r.exports,n.require),r.exports}p.m=m,p.i=[],p.x=()=>{var e=p.O(void 0,[55076,17847,39963],()=>p(830012));return p.O(e)},o=[],p.O=(e,t,r,n)=>{if(t){n=n||0;for(var i=o.length;i>0&&o[i-1][2]>n;i--)o[i]=o[i-1];o[i]=[t,r,n];return}for(var a=1/0,i=0;i<o.length;i++){for(var t=o[i][0],r=o[i][1],n=o[i][2],s=!0,l=0;l<t.length;l++)(!1&n||a>=n)&&Object.keys(p.O).every(e=>p.O[e](t[l]))?t.splice(l--,1):(s=!1,n<a&&(a=n));if(s){o.splice(i--,1);var u=r();void 0!==u&&(e=u)}}return e},p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,p.t=function(e,t){if(1&t&&(e=this(e)),8&t||"object"==typeof e&&e&&(4&t&&e.__esModule||16&t&&"function"==typeof e.then))return e;var r=Object.create(null);p.r(r);var n={};a=a||[null,s({}),s([]),s(s)];for(var i=2&t&&e;"object"==typeof i&&!~a.indexOf(i);i=s(i))Object.getOwnPropertyNames(i).forEach(t=>n[t]=()=>e[t]);return n.default=()=>e,p.d(r,n),r},p.d=(e,t)=>{for(var r in t)p.o(t,r)&&!p.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce((t,r)=>(p.f[r](e,t),t),[])),p.u=e=>"static/js/"+e+"."+({17847:"e43a2cb78d",39963:"cf51645ee9",42981:"9307409b56",55076:"78c4a2f07d"})[e]+".chunk.js",p.miniCssF=e=>{},p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),p.r=e=>{"u">typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=(()=>{if("u"<typeof window)return!1;try{let e=new URLSearchParams(window.location.search);if(e.has("enableLazyModule"))return"false"!==e.get("enableLazyModule");if(window.localStorage){let e=window.localStorage.getItem("enableWebpackLazyModuleLoading");if(null!==e)return"true"===e}}catch{}if(window.__DATABRICKS_SAFE_FLAGS__?.["databricks.fe.infra.enableWebpackLazyModuleLoading"])return!0;return!1})(),t=(()=>{try{if("u"<typeof window||!window.localStorage)return null;let e=localStorage.getItem("eagerModulesPatterns");return null!==e?JSON.parse(e):null}catch{return null}})(),r=new Set([692738,793337,46378,592876,893389,320419,518878,187530,894603,878117,827266,951008,667105,691238,650277,406640,757780,477499,906779,565414,47102,839012,324106,489841,119439,70092,101056,58216,631771,26499,731942,684651,24350,62398,763859,98859,739205,213152,116278,615093,841377,885117,214021,508138,82974,23420,183042,202736,737219,371540,542437,892541,257902,480470,9916,780120,952217,535506,616585,158872,967148,286468,433965,549418,383506,149500,78070,990315,634430,763386,826473,754040,861509,804213,173140,138351,235732,835413,324707,255905,830989,257890,166100,521067,910452,188162,159353,344890,30452,787292,427686,857613,847199,254958,592973,758057,795343,258701,975625,723377,33806,972475,802750,308088,297916,746632,19637,753311,63454,485307,818754,783825,128251,218134,582120,787453,592024,141747,814214,7621,906702,930438,945462,117879,223911,879150,28588,700918,39976,948149,900646,378508,48843,472063,132571,534201,654350,461823,418449,126505,679097,877817,500213,286462,672301,487453,97266,657335,378618,17443,713683,120492,32751,706435,699712,425787,251394,961522,930713,773484,330635,359770,419945,302387,850579,796366,27897,492965,668947,657797,853169,110528,850810,782420,75983,987222,549342,135325,908627,674005,670640,453491,791909,349526,294162,169507,364093,136538,596511,386920,790784,416018,21503,944919,103983,856601,326061]),n=new Set([92545,258494]),i=new Map,p.i.push(o=>{let a=o.factory;function s(e){window.__databricksLazyModulesInit++;try{return e()}finally{window.__databricksLazyModulesInit--}}function l(e,t,r){var n;let i;if(void 0!==window.__dbCurrentRootModuleFactoryId)return void r();let o=window.performance.now();window.__dbCurrentRootModuleFactoryId=e;try{r()}finally{window.__dbCurrentRootModuleFactoryId=void 0}n=window.performance.now(),void 0!==(i=(window.__dbModuleImportTracking=window.__dbModuleImportTracking||{})[e])&&"lazy"!==t?i.initTime={start:o,end:n}:(window.__dbModuleInitTracking=window.__dbModuleInitTracking||[],window.__dbModuleInitTracking.push({id:e,start:o,end:n,initType:t}))}"u">typeof window&&(window.__databricksLazyModulesStats??={total:0,lazy:0,eager:0,init:0}),o.factory=function(u,d,c){if(!e){if("u">typeof window&&"object"==typeof performance&&void 0===window.__dbCurrentRootModuleFactoryId){let e=(window.__dbModuleImportTracking=window.__dbModuleImportTracking||{})[o.id],t=void 0!==e,r=window.performance.now();window.__dbCurrentRootModuleFactoryId=o.id,a.apply(this,[u,d,c]),window.__dbCurrentRootModuleFactoryId=void 0;let n=window.performance.now();t&&(e.initTime={start:r,end:n}),t||(window.__dbModuleInitTracking=window.__dbModuleInitTracking||[],window.__dbModuleInitTracking.push({id:o.id,start:r,end:n,initType:"eagerInit"}))}else a.apply(this,[u,d,c]);return}if(!("u">typeof window)||"object"!=typeof performance)return a.apply(this,[u,d,c]);{let e;if(window.__databricksLazyModulesStats.total++,window.__databricksLazyModulesInit=window.__databricksLazyModulesInit||0,window.__databricksEagerModulesInit=window.__databricksEagerModulesInit||0,window.__databricksEagerModulesInit>0){window.__databricksLazyModulesStats.eager++,l(u.id,"eager",()=>{a.apply(this,[u,d,c])});return}if(function(e){if(r.has(e))return!0;if("string"==typeof e&&null!==t)return t.some(t=>e.includes(t));return!1}(u.id)){window.__databricksLazyModulesStats.eager++,l(u.id,"eager",()=>{!function(e){window.__databricksEagerModulesInit++;try{return e()}finally{window.__databricksEagerModulesInit--}}(()=>a.apply(this,[u,d,c]))});return}if(!(window.__databricksLazyModulesInit>0)){window.__databricksLazyModulesStats.eager++,l(u.id,"eager",()=>{n.has(u.id)?s(()=>a.apply(this,[u,d,c])):a.apply(this,[u,d,c])});return}window.__databricksLazyModulesStats.lazy++,void 0!==window.__dbCurrentRootModuleFactoryId&&i.set(u.id,window.__dbCurrentRootModuleFactoryId);let o=0,m=()=>{0===o&&(o=1,Object.defineProperty(u,"exports",{value:d,writable:!0,configurable:!0}),window.__databricksLazyModulesStats&&window.__databricksLazyModulesStats.init++,l(i.get(u.id)||u.id,"lazy",()=>{s(()=>a.apply(this,[u,d,c]))}),o=2)};e=new Proxy(function(){},{get(e,t,r){m();let n=u.exports;if(t===Symbol.toPrimitive)return e=>{let t=u.exports;if("number"===e)return"number"==typeof t?t:Number(t);if("string"===e)return String(t);return"string"==typeof t||"number"==typeof t||"boolean"==typeof t?t:String(t)};if("toString"===t)return(null!=n&&"function"==typeof n.toString?n.toString:String.prototype.toString).bind(n);if("valueOf"===t)return(null!=n&&"function"==typeof n.valueOf?n.valueOf:Object.prototype.valueOf).bind(n);return n[t]},construct:(e,t,r)=>(m(),Reflect.construct(u.exports,t,r)),apply:(e,t,r)=>(m(),u.exports.apply(t,r))}),Object.defineProperty(u,"exports",{value:e,writable:!0,configurable:!0})}}}),p.p="/";var h=p.u,g=p.e,y={},w={};p.u=function(e){return h(e)+(y.hasOwnProperty(e)?"?"+y[e]:"")},p.e=function(e){return g(e).catch(function(t){var r=w.hasOwnProperty(e)?w[e]:3;if(r<1){var n=h(e);throw t.message="Loading chunk "+e+" failed after 3 retries.\n("+n+")",t.request=n,void 0!==window.recordInitialLoadSpanSuccess&&window.recordInitialLoadSpanSuccess("chunkLoadFailure"),void 0!==window.recordChunkLoadFailureWithDetails&&window.recordChunkLoadFailureWithDetails(e,n),t}return new Promise(function(t){var n=3-r+1;setTimeout(function(){y[e]="cache-bust=true&retry-attempt="+n,w[e]=r-1,t(p.e(e))},(void 0!==window.recordInitialLoadSpanSuccess&&window.recordInitialLoadSpanSuccess("chunkLoadRetry"),1e3*Math.pow(2,n-1)))})})},p.b=self.location+"/../../../",l={8015:1},p.f.i=(e,t)=>{l[e]||importScripts(p.p+p.u(e))},d=(u=self.webpackChunkdatabricks_monolith=self.webpackChunkdatabricks_monolith||[]).push.bind(u),u.push=e=>{var t=e[0],r=e[1],n=e[2];for(var i in r)p.o(r,i)&&(p.m[i]=r[i]);for(n&&n(p);t.length;)l[t.pop()]=1;d(e)},c=p.x,p.x=()=>Promise.all([55076,17847,39963].map(p.e,p)).then(c),p.x()})();
//# sourceMappingURL=https://sourcemaps.dev.databricks.com/monolith/static/js/python-static-analysis.9ec9a2a4f4.chunk.js.map