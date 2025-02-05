import{b as y,c as D,d as h,e as w}from"./chunk-S2KWTDMG.js";import{f as k}from"./chunk-YCUPTL4E.js";import{a as M,c as F,e as T}from"./chunk-22IZ7S6Q.js";import{b as I,c as E}from"./chunk-ZDVCYR6D.js";import{h as v}from"./chunk-DBYYYE4O.js";import{Cb as d,Jc as _,Kb as a,Rb as r,Wb as l,Xb as c,Yb as f,ca as C,db as u,hb as i,ia as p,ic as s,tc as g,vc as x,wb as b}from"./chunk-Q34RPHHW.js";var B=(t,n,e,o,m,j,H,A)=>({"bg-primary-100 text-primary-600 dark:bg-primary-600 dark:text-primary-50":t,"bg-accent-100 text-accent-600 dark:bg-accent-600 dark:text-accent-50":n,"bg-warn-100 text-warn-600 dark:bg-warn-600 dark:text-warn-50":e,"bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-50":o,"bg-blue-100 text-blue-600 dark:bg-blue-600 dark:text-blue-50":m,"bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-50":j,"bg-amber-100 text-amber-500 dark:bg-amber-500 dark:text-amber-50":H,"bg-red-100 text-red-600 dark:bg-red-600 dark:text-red-50":A});function z(t,n){t&1&&(l(0,"div",1)(1,"button",6),f(2,"mat-icon",7),c()()),t&2&&(i(),a("matDialogClose",void 0),i(),a("svgIcon","heroicons_outline:x-mark"))}function G(t,n){if(t&1&&(l(0,"div",3),f(1,"mat-icon",8),c()),t&2){let e=s();a("ngClass",_(2,B,e.data.icon.color==="primary",e.data.icon.color==="accent",e.data.icon.color==="warn",e.data.icon.color==="basic",e.data.icon.color==="info",e.data.icon.color==="success",e.data.icon.color==="warning",e.data.icon.color==="error")),i(),a("svgIcon",e.data.icon.name)}}function N(t,n){if(t&1&&f(0,"div",9),t&2){let e=s(2);a("innerHTML",e.data.title,u)}}function O(t,n){if(t&1&&f(0,"div",10),t&2){let e=s(2);a("innerHTML",e.data.message,u)}}function V(t,n){if(t&1&&(l(0,"div",4),d(1,N,1,1,"div",9)(2,O,1,1,"div",10),c()),t&2){let e=s();i(),r(e.data.title?1:-1),i(),r(e.data.message?2:-1)}}function q(t,n){if(t&1&&(l(0,"button",11),g(1),c()),t&2){let e=s(2);a("matDialogClose","cancelled"),i(),x(" ",e.data.actions.cancel.label," ")}}function J(t,n){if(t&1&&(l(0,"button",12),g(1),c()),t&2){let e=s(2);a("color",e.data.actions.confirm.color)("matDialogClose","confirmed"),i(),x(" ",e.data.actions.confirm.label," ")}}function K(t,n){if(t&1&&(l(0,"div",5),d(1,q,2,2,"button",11)(2,J,2,3,"button",12),c()),t&2){let e=s();i(),r(e.data.actions.cancel.show?1:-1),i(),r(e.data.actions.confirm.show?2:-1)}}var S=(()=>{class t{constructor(){this.data=p(y)}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=b({type:t,selectors:[["fuse-confirmation-dialog"]],decls:6,vars:4,consts:[[1,"relative","flex","h-full","w-full","flex-col"],[1,"absolute","right-0","top-0","pr-4","pt-4"],[1,"flex","flex-auto","flex-col","items-center","p-8","pb-6","sm:flex-row","sm:items-start","sm:pb-8"],[1,"flex","h-10","w-10","flex-0","items-center","justify-center","rounded-full","sm:mr-4",3,"ngClass"],[1,"mt-4","flex","flex-col","items-center","space-y-1","text-center","sm:mt-0","sm:items-start","sm:pr-8","sm:text-left"],[1,"flex","items-center","justify-center","space-x-3","bg-gray-50","px-6","py-4","dark:bg-black","dark:bg-opacity-10","sm:justify-end"],["mat-icon-button","",3,"matDialogClose"],[1,"text-secondary",3,"svgIcon"],[1,"text-current",3,"svgIcon"],[1,"text-xl","font-medium","leading-6",3,"innerHTML"],[1,"text-secondary",3,"innerHTML"],["mat-stroked-button","",3,"matDialogClose"],["mat-flat-button","",3,"color","matDialogClose"]],template:function(o,m){o&1&&(l(0,"div",0),d(1,z,3,2,"div",1),l(2,"div",2),d(3,G,2,11,"div",3)(4,V,3,2,"div",4),c(),d(5,K,3,2,"div",5),c()),o&2&&(i(),r(m.data.dismissible?1:-1),i(2),r(m.data.icon.show?3:-1),i(),r(m.data.title||m.data.message?4:-1),i(),r(m.data.actions.confirm.show||m.data.actions.cancel.show?5:-1))},dependencies:[T,M,F,w,h,E,I,v],styles:[`@media (min-width: 960px){.fuse-confirmation-dialog-panel{width:32rem}}.fuse-confirmation-dialog-panel .mat-mdc-dialog-container .mat-mdc-dialog-surface{padding:0!important}
`],encapsulation:2})}}return t})();var lt=(()=>{class t{constructor(){this._matDialog=p(D),this._defaultConfig={title:"Confirm action",message:"Are you sure you want to confirm this action?",icon:{show:!0,name:"heroicons_outline:exclamation-triangle",color:"warn"},actions:{confirm:{show:!0,label:"Confirm",color:"warn"},cancel:{show:!0,label:"Cancel"}},dismissible:!1}}open(e={}){let o=k({},this._defaultConfig,e);return this._matDialog.open(S,{autoFocus:!1,disableClose:!o.dismissible,data:o,panelClass:"fuse-confirmation-dialog-panel"})}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275prov=C({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{lt as a};
