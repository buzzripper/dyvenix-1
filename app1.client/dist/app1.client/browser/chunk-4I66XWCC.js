import{a as Y}from"./chunk-3CHAGWBA.js";import{a as H,c as J}from"./chunk-6XLXOEL2.js";import{a as I}from"./chunk-KSO6IQS5.js";import"./chunk-S2KWTDMG.js";import"./chunk-YCUPTL4E.js";import"./chunk-EMSJVJHN.js";import"./chunk-7XX3TVDI.js";import"./chunk-SSJR24MO.js";import"./chunk-6UHTTYRU.js";import{a as $,b as q}from"./chunk-A3WCOMYE.js";import{d as V,e as U}from"./chunk-2ZTHJEDW.js";import{a as F,i as M,j as _}from"./chunk-FEENJMQR.js";import"./chunk-EDL6DMK5.js";import{b as B,g as z,h as G,m as T,p as j,q as R,s as O,w as A,x as L,y as P}from"./chunk-WRLPWSZF.js";import{a as k,e as D}from"./chunk-22IZ7S6Q.js";import"./chunk-ZDVCYR6D.js";import{R as E,U as N}from"./chunk-25LMPTPI.js";import"./chunk-AUKJIIL4.js";import"./chunk-SVUIAZ5I.js";import{e as w}from"./chunk-IKG45PLY.js";import"./chunk-OYH67EY7.js";import{n as C,r as S}from"./chunk-DBYYYE4O.js";import{Dc as y,Kb as i,Kc as c,Lc as p,Tb as u,Ub as v,Vb as g,Wb as o,Xb as e,Yb as m,gc as b,hb as t,ib as s,tc as n,uc as x,wb as h}from"./chunk-Q34RPHHW.js";import"./chunk-WWX6BADO.js";var Q=()=>["primary","accent","warn","basic","info","success","warning","error"],W=()=>["primary","accent","warn"];function X(r,d){if(r&1&&(o(0,"mat-option",25),n(1),c(2,"titlecase"),e()),r&2){let a=d.$implicit;i("value",a),t(),x(p(2,2,a))}}function Z(r,d){if(r&1&&(o(0,"mat-option",25),n(1),c(2,"titlecase"),e()),r&2){let a=d.$implicit;i("value",a),t(),x(p(2,2,a))}}var K=(()=>{class r{constructor(a,l){this._formBuilder=a,this._fuseConfirmationService=l}ngOnInit(){this.configForm=this._formBuilder.group({title:"Remove contact",message:'Are you sure you want to remove this contact permanently? <span class="font-medium">This action cannot be undone!</span>',icon:this._formBuilder.group({show:!0,name:"heroicons_outline:exclamation-triangle",color:"warn"}),actions:this._formBuilder.group({confirm:this._formBuilder.group({show:!0,label:"Remove",color:"warn"}),cancel:this._formBuilder.group({show:!0,label:"Cancel"})}),dismissible:!0})}openConfirmationDialog(){this._fuseConfirmationService.open(this.configForm.value).afterClosed().subscribe(l=>{console.log(l)})}static{this.\u0275fac=function(l){return new(l||r)(s(A),s(I))}}static{this.\u0275cmp=h({type:r,selectors:[["confirmation"]],decls:90,vars:35,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],[1,"flex-auto","p-6","sm:p-10"],[1,"max-w-3xl"],[1,"prose","prose-sm","max-w-3xl"],[3,"routerLink"],[1,"example-viewer"],[1,"title"],[1,"flex","flex-col","p-8","pt-0"],[1,"flex","flex-col","items-start",3,"formGroup"],[1,"w-full",3,"subscriptSizing"],["matInput","",3,"formControlName"],[1,"mt-6","w-full",3,"subscriptSizing"],[1,"mb-7","mt-8","w-full","border-b"],[1,"flex","w-full","flex-col",3,"formGroupName"],[3,"color","formControlName"],[1,"mt-6","flex","w-full","items-center"],[1,"w-1/2","pr-2",3,"subscriptSizing"],[1,"w-1/2","pl-2",3,"subscriptSizing"],[3,"formControlName"],[3,"value"],[1,"w-full",3,"formGroupName"],[1,"mt-2",3,"color","formControlName"],[1,"mt-4","flex","w-full","items-center"],[1,"mt-6","flex","w-full","flex-col",3,"formGroupName"],[1,"mt-12"],["mat-flat-button","",3,"click","color"],[1,"dark","mt-8","w-full","overflow-hidden","rounded-2xl","p-4"],["fuse-highlight","",3,"code","lang"]],template:function(l,f){l&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),n(6,"User Interface"),e()()(),o(7,"div",5)(8,"h2",6),n(9," Confirmation Dialog "),e()()()(),o(10,"div",7)(11,"div",8)(12,"div",9)(13,"p"),n(14," One of the repetitive and tedious jobs in Angular is to create confirmation dialogs. Since dialogs require their own components you have to either create a separate component every time you need a confirmation dialog or you have to create your own confirmation dialog system that can be configured. "),e(),o(15,"p"),n(16," In order for you to save time while developing with Fuse, we have created a simple yet powerful "),o(17,"code"),n(18,"FuseConfirmationService"),e(),n(19," to create customized confirmation dialogs on-the-fly. "),e(),o(20,"p"),n(21," Below you can configure and preview the confirmation dialog. You can use the generated configuration object within your code to have the exact same dialog. "),e(),o(22,"p"),n(23," For more detailed information and API documentation, check the "),o(24,"a",10),n(25,"documentation"),e(),n(26," page. "),e()(),o(27,"div",11)(28,"div",12)(29,"h6"),n(30,"Configure the dialog and preview it"),e()(),o(31,"div",13)(32,"form",14)(33,"mat-form-field",15)(34,"mat-label"),n(35,"Title"),e(),m(36,"input",16),e(),o(37,"mat-form-field",17)(38,"mat-label"),n(39,"Message"),e(),o(40,"textarea",16),n(41,"                            "),e()(),m(42,"div",18),o(43,"div",19)(44,"mat-checkbox",20),n(45," Show Icon "),e(),o(46,"div",21)(47,"mat-form-field",22)(48,"mat-label"),n(49,"Icon name"),e(),m(50,"input",16),e(),o(51,"mat-form-field",23)(52,"mat-label"),n(53,"Icon color"),e(),o(54,"mat-select",24),v(55,X,3,4,"mat-option",25,u),e()()()(),m(57,"div",18),o(58,"div",26)(59,"div",19)(60,"mat-checkbox",27),n(61," Show Confirm button "),e(),o(62,"div",28)(63,"mat-form-field",22)(64,"mat-label"),n(65,"Confirm button label"),e(),m(66,"input",16),e(),o(67,"mat-form-field",23)(68,"mat-label"),n(69,"Confirm button color"),e(),o(70,"mat-select",24),v(71,Z,3,4,"mat-option",25,u),e()()()(),o(73,"div",29)(74,"mat-checkbox",27),n(75," Show Cancel button "),e(),o(76,"div",28)(77,"mat-form-field",22)(78,"mat-label"),n(79,"Cancel button label"),e(),m(80,"input",16),e()()()(),m(81,"div",18),o(82,"mat-checkbox",20),n(83," Dismissible "),e()(),o(84,"div",30)(85,"button",31),b("click",function(){return f.openConfirmationDialog()}),n(86," Open Confirmation Dialog "),e()()()(),o(87,"div",32),m(88,"textarea",33),c(89,"json"),e()()()()),l&2&&(t(24),i("routerLink","/ui/fuse-components/services/confirmation"),t(8),i("formGroup",f.configForm),t(),i("subscriptSizing","dynamic"),t(3),i("formControlName","title"),t(),i("subscriptSizing","dynamic"),t(3),i("formControlName","message"),t(3),i("formGroupName","icon"),t(),i("color","primary")("formControlName","show"),t(3),i("subscriptSizing","dynamic"),t(3),i("formControlName","name"),t(),i("subscriptSizing","dynamic"),t(3),i("formControlName","color"),t(),g(y(33,Q)),t(3),i("formGroupName","actions"),t(),i("formGroupName","confirm"),t(),i("color","primary")("formControlName","show"),t(3),i("subscriptSizing","dynamic"),t(3),i("formControlName","label"),t(),i("subscriptSizing","dynamic"),t(3),i("formControlName","color"),t(),g(y(34,W)),t(2),i("formGroupName","cancel"),t(),i("color","primary")("formControlName","show"),t(3),i("subscriptSizing","dynamic"),t(3),i("formControlName","label"),t(2),i("color","primary")("formControlName","dismissible"),t(3),i("color","primary"),t(3),i("code",p(89,31,f.configForm.value))("lang","json"))},dependencies:[w,L,T,B,z,G,P,j,O,R,_,M,F,U,V,q,$,J,H,E,N,D,k,Y,S,C],encapsulation:2,changeDetection:0})}}return r})();var Se=[{path:"",component:K}];export{Se as default};
