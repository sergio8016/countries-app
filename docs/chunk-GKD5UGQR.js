import{a as y,b as v}from "./chunk-IUSGQMD6.js";import{a as f}from "./chunk-ZUZLRWR7.js";import{B as a,C as n,D as p,F as d,L as m,P as u,l as c,m as h,t as s,v as l}from "./chunk-7W5ZSO7N.js";var E=(()=>{let e=class e{constructor(){this.countriesService=c(f),this.type="capital",this.placeholder="Search by capital",this.capitals=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.capitals=this.countriesService.cacheStorage.byCapital.countries,this.initialValue=this.countriesService.cacheStorage.byCapital.term}onSearchByCapital(o){this.isLoading=!0,this.countriesService.search(o,this.type).subscribe(t=>{this.capitals=t,this.isLoading=!1})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=h({type:e,selectors:[["app-by-capital-page"]],standalone:!0,features:[u],decls:10,vars:5,consts:[[1,"row"],[1,"col"],[3,"search","placeholder","initialValue"],[1,"col","text-center"],[3,"data","type","isLoading"]],template:function(t, i){t&1&&(a(0,"h2"),m(1,"By Capital"),n(),p(2,"hr"),a(3,"div",0)(4,"div",1)(5,"app-search-box",2),d("search",function(S){return i.onSearchByCapital(S)}),n()()(),a(6,"div",0)(7,"div",3),p(8,"hr")(9,"app-country-table",4),n()()),t&2&&(s(5),l("placeholder",i.placeholder)("initialValue",i.initialValue),s(4),l("data",i.capitals)("type",i.type)("isLoading",i.isLoading))},dependencies:[y,v]});let r=e;return r})();export{E as ByCapitalPageComponent};