import{A as F,B as n,C as i,D as b,E as L,F as M,G as g,H as V,I as q,J as N,K as U,L as o,M as d,P as v,R as B,S as Q,T as $,W as P,Z as z,a as C,b as S,f as w,ga as A,i as I,l as m,m as h,n as E,o as k,p as D,q as f,r as T,s as R,t as c,u as y,v as u,w as x,y as j,z as O}from "./chunk-7W5ZSO7N.js";function _(e){e||(E(_),e=m(f));let t=new C(r=>e.onDestroy(r.next.bind(r)));return r=>r.pipe(I(t))}var J=["inputSearch"],Se=(()=>{let t=class t{constructor(){this.search=new T,this.initialValue="",this.bouncer=new S,this.destroyRef=m(f)}ngOnInit(){this.bouncer.pipe(w(500),_(this.destroyRef)).subscribe(s=>{this.search.emit(s)})}onInputSearch(s){this.bouncer.next(s)}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=h({type:t,selectors:[["app-search-box"]],viewQuery:function(a, l){if(a&1&&V(J,5),a&2){let p;q(p=N())&&(l.searchInput=p.first)}},inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{search:"search"},standalone:!0,features:[v],decls:3,vars:2,consts:[["inputSearch",""],[1,"input-group"],["type","text",1,"form-control",3,"keyup","placeholder","value"]],template:function(a, l){if(a&1){let p=L();n(0,"div",1)(1,"input",2,0),M("keyup",function(){k(p);let G=U(2);return D(l.onInputSearch(G.value))}),i()()}a&2&&(c(),u("placeholder",l.placeholder)("value",l.initialValue))}});let e=t;return e})();var K= e=>["/byCountry",e];function W(e, t){if(e&1&&(n(0,"tr",2)(1,"td"),o(2),i(),n(3,"td"),b(4,"img",3),i(),n(5,"td"),o(6),i(),n(7,"td"),o(8),i(),n(9,"td"),o(10),Q(11,"number"),i(),n(12,"td")(13,"a",4),o(14,"See more"),i()()()),e&2){let r=t.$implicit,s=t.$index;c(2),d(s+1),c(2),u("src",r.flags.svg,R)("alt",r.name.common),c(2),d(r.name.common),c(2),d(r.capital),c(2),d($(11,7,r.population)),c(3),u("routerLink",B(9,K,r.cca3))}}function X(e, t){if(e&1&&(n(0,"table",0)(1,"thead")(2,"tr")(3,"th",1),o(4,"#"),i(),n(5,"th",1),o(6,"Flag"),i(),n(7,"th",1),o(8,"Name"),i(),n(9,"th",1),o(10,"Capital"),i(),n(11,"th",1),o(12,"Population"),i(),n(13,"th",1),o(14,"Link"),i()()(),n(15,"tbody"),O(16,W,15,11,"tr",2,j),i()()),e&2){let r=g();c(16),F(r.data)}}function Y(e, t){e&1&&b(0,"img",8)}function Z(e, t){if(e&1&&(n(0,"div",5),y(1,Y,1,0,"img",7),b(2,"br"),o(3," Loading results... "),i()),e&2){let r=g(2);c(),u("ngIf",r.isLoading)}}function ee(e, t){e&1&&(n(0,"div",6),o(1," No results to show "),i())}function te(e, t){if(e&1&&y(0,Z,4,1,"div",5)(1,ee,2,0,"div",6),e&2){let r=g();x(r.isLoading?0:1)}}var ke=(()=>{let t=class t{constructor(){this.data=[],this.isLoading=!1}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=h({type:t,selectors:[["app-country-table"]],inputs:{data:"data",type:"type",isLoading:"isLoading"},standalone:!0,features:[v],decls:2,vars:1,consts:[[1,"table"],["scope","col"],[1,"animate__animated","animate__fadeIn"],[3,"src","alt"],[3,"routerLink"],[1,"text-center"],[1,"alert","alert-warning","text-center"],["src","assets/svg/loader.svg","alt","loading...","width","100","height","100",4,"ngIf"],["src","assets/svg/loader.svg","alt","loading...","width","100","height","100"]],template:function(a, l){a&1&&y(0,X,18,0,"table",0)(1,te,2,1),a&2&&x(l.data.length>0?0:1)},dependencies:[z,A,P],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let e=t;return e})();export{Se as a,ke as b};