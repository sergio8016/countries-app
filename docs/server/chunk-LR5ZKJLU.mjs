import './polyfills.server.mjs';
import{a as M}from"./chunk-JVFJIJZ7.mjs";import{Da as B,Ea as k,Fa as F,H as y,I as l,M as h,N as C,O as S,P as E,R as _,S as I,T as i,U as e,Ua as R,V as s,Xa as D,Y as P,ba as n,ca as b,d as v,da as u,ea as w,fa as T,g as f,h as g,ia as c,ja as d,o as m,q as x}from"./chunk-WE4AS5EL.mjs";import"./chunk-NDYDZJSS.mjs";function j(t,a){t&1&&(i(0,"div",0),s(1,"img",1),e())}function z(t,a){if(t&1&&(i(0,"span",11),n(1),c(2,"uppercase"),e()),t&2){let o=a.$implicit;l(),w("",d(2,2,o.key),": ",o.value.official,"")}}function A(t,a){if(t&1&&(i(0,"div",2)(1,"div",3)(2,"h2"),n(3,"Country: "),i(4,"strong"),n(5),e()()()(),i(6,"div",2)(7,"div",4)(8,"h3"),n(9,"Flag"),e(),s(10,"img",5),e(),i(11,"div",6)(12,"h3"),n(13,"Info"),e(),i(14,"ul",7)(15,"li",8)(16,"strong"),n(17,"Population:"),e(),n(18),c(19,"number"),e(),i(20,"li",8)(21,"strong"),n(22,"Code:"),e(),n(23),e()()()(),i(24,"div",9)(25,"div",6)(26,"h3"),n(27,"Translations"),e(),i(28,"div",10),_(29,z,3,4,"span",11,E),c(31,"keyvalue"),e()()()),t&2){let o=P();l(5),b(o.country.name.common),l(5),C("src",o.country.flags.svg,y)("alt",o.country.name.common),l(8),u(" ",d(19,5,o.country.population)," "),l(5),u(" ",o.country.cca3," "),l(6),I(d(31,7,o.country.translations))}}var J=(()=>{let a=class a{constructor(){this.activatedRoute=m(R),this.countriesService=m(M),this.router=m(D)}ngOnInit(){this.activatedRoute.params.pipe(f(1),g(r=>this.countriesService.search(r.id,"alpha")),v(r=>r.length>0?r[0]:null)).subscribe(r=>{if(!r)return this.router.navigateByUrl("");this.country=r})}};a.\u0275fac=function(p){return new(p||a)},a.\u0275cmp=x({type:a,selectors:[["app-country-page"]],standalone:!0,features:[T],decls:2,vars:1,consts:[[1,"d-flex","justify-content-center"],["src","assets/svg/loader.svg","alt","spinner","height","100","width","100",1,"img-fluid"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(p,U){p&1&&h(0,j,2,0,"div",0)(1,A,32,9),p&2&&S(U.country?1:0)},dependencies:[F,k,B]});let t=a;return t})();export{J as CountryPageComponent};
