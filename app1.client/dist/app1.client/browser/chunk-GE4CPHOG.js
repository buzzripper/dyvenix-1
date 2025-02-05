import{a as pe,b as ue,c as fe,d as ve}from"./chunk-4NQDTH66.js";import{a as de,b as se}from"./chunk-WO7XMYCS.js";import{c as me}from"./chunk-ORUTPMOI.js";import"./chunk-YCUPTL4E.js";import"./chunk-EMSJVJHN.js";import"./chunk-7XX3TVDI.js";import"./chunk-SSJR24MO.js";import"./chunk-6UHTTYRU.js";import{a as B,c as ce,d as A,e as $}from"./chunk-22IZ7S6Q.js";import{b as O,c as V}from"./chunk-ZDVCYR6D.js";import"./chunk-25LMPTPI.js";import"./chunk-AUKJIIL4.js";import"./chunk-SVUIAZ5I.js";import{b as le,c as j,d as F,e as R}from"./chunk-IKG45PLY.js";import{c as ae}from"./chunk-OYH67EY7.js";import"./chunk-DBYYYE4O.js";import{$ as Z,Cb as f,Dc as L,E as U,Ec as M,J as N,Kb as m,Mb as w,Qb as k,Rb as d,Ub as E,Uc as T,Vb as D,Wb as o,Xb as n,Y,Yb as s,Z as h,ac as X,ca as ee,f as I,g as z,gc as W,ha as te,hb as i,ia as C,ib as _,ic as p,m as q,mc as ie,n as y,nc as ne,oc as oe,r as K,ta as P,tc as l,ua as Q,uc as v,vc as g,wb as b,wc as re}from"./chunk-Q34RPHHW.js";import"./chunk-WWX6BADO.js";var x=(()=>{class e{constructor(t){this._httpClient=t,this._item=new z(null),this._items=new z(null)}get items$(){return this._items.asObservable()}get item$(){return this._item.asObservable()}getItems(t=null){return this._httpClient.get("api/apps/file-manager",{params:{folderId:t}}).pipe(Z(r=>{this._items.next(r)}))}getItemById(t){return this._items.pipe(N(1),K(r=>{let a=[...r.folders,...r.files].find(u=>u.id===t)||null;return this._item.next(a),a}),Y(r=>r?q(r):y("Could not found the item with id of "+t+"!")))}static{this.\u0275fac=function(r){return new(r||e)(te(ae))}}static{this.\u0275prov=ee({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Fe=["matDrawer"],Se=()=>["/apps/file-manager"],ge=e=>["/apps/file-manager/folders/",e],xe=e=>["./details/",e];function Ie(e,c){if(e&1&&l(0),e&2){let t=p();re(" ",t.items.folders.length," folders, ",t.items.files.length," files ")}}function we(e,c){if(e&1&&(o(0,"a",16),l(1),n()),e&2){let t=p().$implicit;m("routerLink",M(2,ge,t.id)),i(),v(t.name)}}function ke(e,c){if(e&1&&(o(0,"div"),l(1),n()),e&2){let t=p().$implicit;i(),v(t.name)}}function Ee(e,c){e&1&&(o(0,"div",17),l(1,"/"),n())}function De(e,c){if(e&1&&f(0,we,2,4,"a",16)(1,ke,2,1,"div")(2,Ee,2,0,"div",17),e&2){let t=c.$index,r=c.$count;d(t!==r-1?0:-1),i(),d(t===r-1?1:-1),i(),d(t!==r-1?2:-1)}}function Le(e,c){if(e&1&&(o(0,"div",9)(1,"a",16),l(2,"Home "),n(),o(3,"div",17),l(4,"/"),n(),E(5,De,3,3,null,null,k().trackByFn,!0),n()),e&2){let t=p();i(),m("routerLink",L(1,Se)),i(4),D(t.items.path)}}function Te(e,c){if(e&1&&(o(0,"div",29),l(1),n()),e&2){let t=p().$implicit;i(),g(" ",t.contents," ")}}function je(e,c){if(e&1){let t=X();o(0,"div",20)(1,"a",21),W("click",function(a){return P(t),Q(a.preventDefault())}),s(2,"mat-icon",22),n(),o(3,"a",23)(4,"div",24)(5,"div",25),s(6,"mat-icon",26),n()(),o(7,"div",27)(8,"div",28),l(9),n(),f(10,Te,2,1,"div",29),n()()()}if(e&2){let t=c.$implicit;i(),m("routerLink",M(7,xe,t.id)),i(),m("svgIcon","heroicons_solid:information-circle"),i(),m("routerLink",M(9,ge,t.id)),i(3),m("svgIcon","heroicons_solid:folder"),i(2),m("matTooltip",t.name),i(),g(" ",t.name," "),i(),d(t.contents?10:-1)}}function Re(e,c){if(e&1&&(o(0,"div")(1,"div",18),l(2,"Folders"),n(),o(3,"div",19),E(4,je,11,11,"div",20,k().trackByFn,!0),n()()),e&2){let t=p(2);i(4),D(t.items.folders)}}function Be(e,c){if(e&1&&(o(0,"div",29),l(1),n()),e&2){let t=p().$implicit;i(),g(" ",t.contents," ")}}function Ae(e,c){if(e&1&&(o(0,"a",30)(1,"div",24)(2,"div",25)(3,"div",31),s(4,"mat-icon",26),o(5,"div",32),l(6),n()()()(),o(7,"div",27)(8,"div",28),l(9),n(),f(10,Be,2,1,"div",29),n()()),e&2){let t=c.$implicit;m("routerLink",M(16,xe,t.id)),i(4),m("svgIcon","heroicons_solid:document"),i(),w("bg-red-600",t.type==="PDF")("bg-blue-600",t.type==="DOC")("bg-green-600",t.type==="XLS")("bg-gray-600",t.type==="TXT")("bg-amber-600",t.type==="JPG"),i(),g(" ",t.type.toUpperCase()," "),i(2),m("matTooltip",t.name),i(),g(" ",t.name," "),i(),d(t.contents?10:-1)}}function $e(e,c){if(e&1&&(o(0,"div")(1,"div",18),l(2,"Files"),n(),o(3,"div",19),E(4,Ae,11,18,"a",30,k().trackByFn,!0),n()()),e&2){let t=p(2);i(4),D(t.items.files)}}function Oe(e,c){if(e&1&&(o(0,"div",14),f(1,Re,6,0,"div")(2,$e,6,0,"div"),n()),e&2){let t=p();i(),d(t.items.folders.length>0?1:-1),i(),d(t.items.files.length>0?2:-1)}}function Ve(e,c){e&1&&(o(0,"div",15),s(1,"mat-icon",33),o(2,"div",34),l(3," There are no items! "),n()()),e&2&&(i(),m("svgIcon","heroicons_outline:folder-open"))}var S=(()=>{class e{constructor(t,r,a,u,J){this._activatedRoute=t,this._changeDetectorRef=r,this._router=a,this._fileManagerService=u,this._fuseMediaWatcherService=J,this._unsubscribeAll=new I}ngOnInit(){this._fileManagerService.items$.pipe(h(this._unsubscribeAll)).subscribe(t=>{this.items=t,this._changeDetectorRef.markForCheck()}),this._fileManagerService.item$.pipe(h(this._unsubscribeAll)).subscribe(t=>{this.selectedItem=t,this._changeDetectorRef.markForCheck()}),this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe(h(this._unsubscribeAll)).subscribe(t=>{this.drawerMode=t.matches?"side":"over",this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}trackByFn(t,r){return r.id||t}static{this.\u0275fac=function(r){return new(r||e)(_(le),_(T),_(F),_(x),_(me))}}static{this.\u0275cmp=b({type:e,selectors:[["file-manager-list"]],viewQuery:function(r,a){if(r&1&&ie(Fe,7),r&2){let u;ne(u=oe())&&(a.matDrawer=u.first)}},decls:21,vars:9,consts:[["matDrawer",""],[1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-hidden"],[1,"bg-card","h-full","flex-auto","dark:bg-transparent",3,"backdropClick"],[1,"w-full","dark:bg-gray-900","sm:w-100",3,"mode","opened","position","disableClose"],[1,"flex","flex-col","bg-gray-100","dark:bg-transparent"],[1,"flex","flex-auto","flex-col"],[1,"bg-card","flex","flex-col","items-start","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:py-12","md:px-8"],[1,"text-4xl","font-extrabold","leading-none","tracking-tight"],[1,"text-secondary","mt-0.5","flex","items-center","font-medium"],[1,"flex","items-center","space-x-2"],[1,"mt-4","sm:mt-0"],["mat-flat-button","",3,"color"],[3,"svgIcon"],[1,"ml-2","mr-1"],[1,"space-y-8","p-6","md:p-8"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"cursor-pointer","text-primary",3,"routerLink"],[1,""],[1,"font-medium"],[1,"-m-2","mt-2","flex","flex-wrap"],[1,"bg-card","relative","m-2","h-40","w-40","rounded-2xl","p-4","shadow"],["mat-icon-button","",1,"absolute","right-1.5","top-1.5","z-20","h-8","min-h-8","w-8",3,"click","routerLink"],[1,"icon-size-5",3,"svgIcon"],[1,"absolute","inset-0","z-10","flex","cursor-pointer","flex-col","p-4",3,"routerLink"],[1,"aspect-[9/6]"],[1,"flex","h-full","items-center","justify-center"],[1,"text-hint","opacity-50","icon-size-14",3,"svgIcon"],[1,"flex","flex-auto","flex-col","justify-center","text-center","text-sm","font-medium"],[1,"truncate",3,"matTooltip"],[1,"text-secondary","truncate"],[1,"bg-card","m-2","flex","h-40","w-40","cursor-pointer","flex-col","rounded-2xl","p-4","shadow",3,"routerLink"],[1,"relative"],[1,"absolute","bottom-0","left-0","rounded","px-1.5","text-sm","font-semibold","leading-5","text-white"],[1,"icon-size-24",3,"svgIcon"],[1,"text-secondary","mt-4","text-2xl","font-semibold","tracking-tight"]],template:function(r,a){if(r&1){let u=X();o(0,"div",1)(1,"mat-drawer-container",2),W("backdropClick",function(){return P(u),Q(a.onBackdropClicked())}),o(2,"mat-drawer",3,0),s(4,"router-outlet"),n(),o(5,"mat-drawer-content",4)(6,"div",5)(7,"div",6)(8,"div")(9,"div",7),l(10," File Manager "),n(),o(11,"div",8),f(12,Ie,1,2)(13,Le,7,2,"div",9),n()(),o(14,"div",10)(15,"button",11),s(16,"mat-icon",12),o(17,"span",13),l(18,"Upload file"),n()()()(),f(19,Oe,3,2,"div",14)(20,Ve,4,1,"div",15),n()()()()}r&2&&(i(2),m("mode",a.drawerMode)("opened",!1)("position","end")("disableClose",!0),i(10),d(a.items.path.length?-1:12),i(),d(a.items.path.length?13:-1),i(2),m("color","primary"),i(),m("svgIcon","heroicons_outline:plus"),i(3),d(a.items&&(a.items.folders.length>0||a.items.files.length>0)?19:20))},dependencies:[ve,ue,fe,pe,j,R,$,B,A,V,O,se,de],encapsulation:2,changeDetection:0})}}return e})();var Ue=()=>["../../"];function Pe(e,c){e&1&&s(0,"mat-icon",6),e&2&&m("svgIcon","heroicons_outline:folder")}function Qe(e,c){e&1&&s(0,"mat-icon",6),e&2&&m("svgIcon","heroicons_outline:document")}function Xe(e,c){if(e&1&&(o(0,"div",12)(1,"div",13),l(2,"Contents"),n(),o(3,"div"),l(4),n()()),e&2){let t=p();i(4),v(t.item.contents)}}function We(e,c){if(e&1&&(o(0,"div"),l(1),n()),e&2){let t=p();i(),v(t.item.description)}}function Ge(e,c){e&1&&(o(0,"div",20),l(1," Click here to add a description "),n())}var H=(()=>{class e{constructor(t,r,a){this._changeDetectorRef=t,this._fileManagerListComponent=r,this._fileManagerService=a,this._unsubscribeAll=new I}ngOnInit(){this._fileManagerListComponent.matDrawer.open(),this._fileManagerService.item$.pipe(h(this._unsubscribeAll)).subscribe(t=>{this._fileManagerListComponent.matDrawer.open(),this.item=t,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}closeDrawer(){return this._fileManagerListComponent.matDrawer.close()}trackByFn(t,r){return r.id||t}static{this.\u0275fac=function(r){return new(r||e)(_(T),_(S),_(x))}}static{this.\u0275cmp=b({type:e,selectors:[["file-manager-details"]],decls:51,vars:28,consts:[[1,"flex","flex-auto","flex-col","p-6","md:p-8"],[1,"flex","items-center","justify-end"],["mat-icon-button","",3,"routerLink"],[3,"svgIcon"],[1,"mt-8","aspect-[9/6]"],[1,"flex","h-full","items-center","justify-center","rounded-lg","border","bg-gray-50","dark:bg-card"],[1,"text-hint","icon-size-24",3,"svgIcon"],[1,"mt-8","flex","flex-col","items-start"],[1,"text-xl","font-medium"],[1,"mt-1","rounded","px-1.5","text-sm","font-semibold","leading-5","text-white"],[1,"mt-8","text-lg","font-medium"],[1,"mt-4","flex","flex-col","divide-y","border-b","border-t","font-medium"],[1,"flex","items-center","justify-between","py-3"],[1,"text-secondary"],[1,"mt-8","flex","items-center","justify-between"],[1,"text-lg","font-medium"],["mat-icon-button",""],[1,"icon-size-5",3,"svgIcon"],[1,"mt-2","flex","border-t"],[1,"py-3"],[1,"text-secondary","italic"],[1,"mt-8","grid","w-full","grid-cols-2","gap-4"],["mat-flat-button","",1,"flex-auto",3,"color"],["mat-stroked-button","",1,"flex-auto"]],template:function(r,a){r&1&&(o(0,"div",0)(1,"div",1)(2,"a",2),s(3,"mat-icon",3),n()(),o(4,"div",4)(5,"div",5),f(6,Pe,1,1,"mat-icon",6)(7,Qe,1,1,"mat-icon",6),n()(),o(8,"div",7)(9,"div",8),l(10),n(),o(11,"div",9),l(12),n()(),o(13,"div",10),l(14,"Information"),n(),o(15,"div",11)(16,"div",12)(17,"div",13),l(18,"Created By"),n(),o(19,"div"),l(20),n()(),o(21,"div",12)(22,"div",13),l(23,"Created At"),n(),o(24,"div"),l(25),n()(),o(26,"div",12)(27,"div",13),l(28,"Modified At"),n(),o(29,"div"),l(30),n()(),o(31,"div",12)(32,"div",13),l(33,"Size"),n(),o(34,"div"),l(35),n()(),f(36,Xe,5,1,"div",12),n(),o(37,"div",14)(38,"div",15),l(39,"Description"),n(),o(40,"button",16),s(41,"mat-icon",17),n()(),o(42,"div",18)(43,"div",19),f(44,We,2,1,"div")(45,Ge,2,0,"div",20),n()(),o(46,"div",21)(47,"button",22),l(48," Download "),n(),o(49,"button",23),l(50,"Delete"),n()()()),r&2&&(i(2),m("routerLink",L(27,Ue)),i(),m("svgIcon","heroicons_outline:x-mark"),i(3),d(a.item.type==="folder"?6:-1),i(),d(a.item.type!=="folder"?7:-1),i(3),v(a.item.name),i(),w("bg-indigo-600",a.item.type==="folder")("bg-red-600",a.item.type==="PDF")("bg-blue-600",a.item.type==="DOC")("bg-green-600",a.item.type==="XLS")("bg-gray-600",a.item.type==="TXT")("bg-amber-600",a.item.type==="JPG"),i(),g(" ",a.item.type.toUpperCase()," "),i(8),v(a.item.createdBy),i(5),v(a.item.createdAt),i(5),v(a.item.modifiedAt),i(5),v(a.item.size),i(),d(a.item.contents?36:-1),i(5),m("svgIcon","heroicons_solid:pencil"),i(3),d(a.item.description?44:-1),i(),d(a.item.description?-1:45),i(2),m("color","primary"))},dependencies:[$,B,A,ce,R,V,O],encapsulation:2,changeDetection:0})}}return e})();var he=(()=>{class e{constructor(){}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275cmp=b({type:e,selectors:[["file-manager"]],decls:1,vars:0,template:function(r,a){r&1&&s(0,"router-outlet")},dependencies:[j],encapsulation:2,changeDetection:0})}}return e})();var He=(e,c)=>{let t=C(x),r=C(F);return t.getItems(e.paramMap.get("folderId")).pipe(U(a=>{console.error(a);let u=c.url.split("/").slice(0,-1).join("/");return r.navigateByUrl(u),y(a)}))},Ce=(e,c)=>{let t=C(x),r=C(F);return t.getItemById(e.paramMap.get("id")).pipe(U(a=>{console.error(a);let u=c.url.split("/").slice(0,-1).join("/");return r.navigateByUrl(u),y(a)}))},be=(e,c,t,r)=>{let a=r.root;for(;a.firstChild;)a=a.firstChild;return!r.url.includes("/file-manager")||r.url.includes("/details")?!0:e.closeDrawer().then(()=>!0)},Ct=[{path:"",component:he,children:[{path:"folders/:folderId",component:S,resolve:{item:He},children:[{path:"details/:id",component:H,resolve:{item:Ce},canDeactivate:[be]}]},{path:"",component:S,resolve:{items:()=>C(x).getItems()},children:[{path:"details/:id",component:H,resolve:{item:Ce},canDeactivate:[be]}]}]}];export{Ct as default};
