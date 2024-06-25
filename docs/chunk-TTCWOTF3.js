import{a as y,b as v}from "./chunk-IUSGQMD6.js";import{a as f}from "./chunk-ZUZLRWR7.js";import{B as n,C as r,D as l,F as h,L as d,P as m,l as p,m as u,t as s,v as c}from "./chunk-7W5ZSO7N.js";var E=(()=>{let e=class e{constructor(){this.countriesService=p(f),this.placeholder="Search by country",this.countries=[],this.type="name",this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStorage.byCountry.countries,this.initialValue=this.countriesService.cacheStorage.byCountry.term}onCountrySearch(a){this.isLoading=!0,this.countriesService.search(a,this.type).subscribe(t=>{this.countries=t,this.isLoading=!1})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-by-country-page"]],standalone:!0,features:[m],decls:10,vars:5,consts:[[1,"row"],[1,"col"],[3,"search","placeholder","initialValue"],[3,"data","type","isLoading"]],template:function(t, i){t&1&&(n(0,"h2"),d(1,"By Country"),r(),l(2,"hr"),n(3,"div",0)(4,"div",1)(5,"app-search-box",2),h("search",function(S){return i.onCountrySearch(S)}),r()()(),n(6,"div",0)(7,"div",1),l(8,"hr")(9,"app-country-table",3),r()()),t&2&&(s(5),c("placeholder",i.placeholder)("initialValue",i.initialValue),s(4),c("data",i.countries)("type",i.type)("isLoading",i.isLoading))},dependencies:[y,v]});let o=e;return o})();export{E as ByCountryPageComponent};
