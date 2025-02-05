import{a as oe,b as ae}from"./chunk-A3WCOMYE.js";import{a as ie,b as ne}from"./chunk-FIVEWMSY.js";import{b as re}from"./chunk-USBB2VVN.js";import"./chunk-3LBPL7IG.js";import{d as ee,e as te}from"./chunk-2ZTHJEDW.js";import{a as j,b as T,e as q,i as V,j as B}from"./chunk-FEENJMQR.js";import"./chunk-EDL6DMK5.js";import{b as O,d as f,g as H,h as J,m as W,p as Y,s as K,w as X,x as Z,y as $}from"./chunk-WRLPWSZF.js";import{a as L,c as P,e as G}from"./chunk-22IZ7S6Q.js";import{b as R,c as D}from"./chunk-ZDVCYR6D.js";import"./chunk-25LMPTPI.js";import"./chunk-AUKJIIL4.js";import{a as z}from"./chunk-7DEZWTYC.js";import"./chunk-SVUIAZ5I.js";import{c as Q}from"./chunk-KYU33SIA.js";import{d as I,e as N}from"./chunk-IKG45PLY.js";import"./chunk-OYH67EY7.js";import"./chunk-DBYYYE4O.js";import{Cb as u,Dc as h,Kb as o,Rb as d,Wb as t,Xb as e,Yb as m,ac as E,gc as w,hb as r,ib as g,ic as F,mc as U,nc as M,oc as A,sc as S,ta as x,tc as n,ua as y,va as _,vc as k,wa as C,wb as b}from"./chunk-Q34RPHHW.js";import"./chunk-WWX6BADO.js";var de=["signUpNgForm"],pe=()=>["/sign-in"],me=()=>["./"];function ce(i,c){if(i&1&&(t(0,"fuse-alert",10),n(1),e()),i&2){let l=F();o("appearance","outline")("showIcon",!1)("type",l.alert.type)("@shake",l.alert.type==="error"),r(),k(" ",l.alert.message," ")}}function ue(i,c){i&1&&(t(0,"mat-error"),n(1," Full name is required "),e())}function fe(i,c){i&1&&(t(0,"mat-error"),n(1," Email address is required "),e())}function ge(i,c){i&1&&(t(0,"mat-error"),n(1," Please enter a valid email address "),e())}function he(i,c){i&1&&m(0,"mat-icon",17),i&2&&o("svgIcon","heroicons_solid:eye")}function ve(i,c){i&1&&m(0,"mat-icon",17),i&2&&o("svgIcon","heroicons_solid:eye-slash")}function xe(i,c){i&1&&(t(0,"span"),n(1," Create your free account "),e())}function ye(i,c){i&1&&m(0,"mat-progress-spinner",22),i&2&&o("diameter",24)("mode","indeterminate")}var le=(()=>{class i{constructor(l,s,a){this._authService=l,this._formBuilder=s,this._router=a,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",f.required],email:["",[f.required,f.email]],password:["",f.required],company:[""],agreements:["",f.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(l=>{this._router.navigateByUrl("/confirmation-required")},l=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}static{this.\u0275fac=function(s){return new(s||i)(g(Q),g(X),g(I))}}static{this.\u0275cmp=b({type:i,selectors:[["auth-sign-up"]],viewQuery:function(s,a){if(s&1&&U(de,5),s&2){let p;M(p=A())&&(a.signUpNgForm=p.first)}},decls:79,vars:23,consts:[["signUpNgForm","ngForm"],["passwordField",""],[1,"flex","min-w-0","flex-auto","flex-col","items-center","sm:flex-row","sm:justify-center","md:items-start","md:justify-start"],[1,"w-full","px-4","py-8","sm:bg-card","sm:w-auto","sm:rounded-2xl","sm:p-12","sm:shadow","md:flex","md:h-full","md:w-1/2","md:items-center","md:justify-end","md:rounded-none","md:p-16","md:shadow-none"],[1,"mx-auto","w-full","max-w-80","sm:mx-0","sm:w-80"],[1,"w-12"],["src","images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","leading-tight","tracking-tight"],[1,"mt-0.5","flex","items-baseline","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["mat-icon-button","","type","button","matSuffix","",3,"click"],[1,"icon-size-5",3,"svgIcon"],["id","company-confirm","matInput","",3,"formControlName"],[1,"mt-1.5","inline-flex","w-full","items-end"],[1,"-ml-2",3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","mt-6","w-full",3,"click","color","disabled"],[3,"diameter","mode"],[1,"relative","hidden","h-full","w-1/2","flex-auto","items-center","justify-center","overflow-hidden","bg-gray-800","p-16","dark:border-l","md:flex","lg:px-28"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"relative","z-10","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","leading-6","tracking-tight","text-gray-400"],[1,"mt-8","flex","items-center"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","images/avatars/female-18.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/female-11.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-09.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],["src","images/avatars/male-16.jpg",1,"h-10","w-10","flex-0","rounded-full","object-cover","ring-4","ring-gray-800","ring-offset-1","ring-offset-gray-800"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"]],template:function(s,a){if(s&1){let p=E();t(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5),m(4,"img",6),e(),t(5,"div",7),n(6," Sign up "),e(),t(7,"div",8)(8,"div"),n(9,"Already have an account?"),e(),t(10,"a",9),n(11,"Sign in "),e()(),u(12,ce,2,5,"fuse-alert",10),t(13,"form",11,0)(15,"mat-form-field",12)(16,"mat-label"),n(17,"Full name"),e(),m(18,"input",13),u(19,ue,2,0,"mat-error"),e(),t(20,"mat-form-field",12)(21,"mat-label"),n(22,"Email address"),e(),m(23,"input",14),u(24,fe,2,0,"mat-error")(25,ge,2,0,"mat-error"),e(),t(26,"mat-form-field",12)(27,"mat-label"),n(28,"Password"),e(),m(29,"input",15,1),t(31,"button",16),w("click",function(){x(p);let v=S(30);return y(v.type==="password"?v.type="text":v.type="password")}),u(32,he,1,1,"mat-icon",17)(33,ve,1,1,"mat-icon",17),e(),t(34,"mat-error"),n(35," Password is required "),e()(),t(36,"mat-form-field",12)(37,"mat-label"),n(38,"Company"),e(),m(39,"input",18),e(),t(40,"div",19)(41,"mat-checkbox",20)(42,"span"),n(43,"I agree with"),e(),t(44,"a",9),n(45,"Terms "),e(),t(46,"span"),n(47,"and"),e(),t(48,"a",9),n(49,"Privacy Policy "),e()()(),t(50,"button",21),w("click",function(){return x(p),y(a.signUp())}),u(51,xe,2,0,"span")(52,ye,1,2,"mat-progress-spinner",22),e()()()(),t(53,"div",23),_(),t(54,"svg",24)(55,"g",25),m(56,"circle",26)(57,"circle",27),e()(),t(58,"svg",28)(59,"defs")(60,"pattern",29),m(61,"rect",30),e()(),m(62,"rect",31),e(),C(),t(63,"div",32)(64,"div",33)(65,"div"),n(66,"Welcome to"),e(),t(67,"div"),n(68,"our community"),e()(),t(69,"div",34),n(70," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e(),t(71,"div",35)(72,"div",36),m(73,"img",37)(74,"img",38)(75,"img",39)(76,"img",40),e(),t(77,"div",41),n(78," More than 17k people joined us, it's your turn "),e()()()()()}if(s&2){let p=S(30);r(10),o("routerLink",h(20,pe)),r(2),d(a.showAlert?12:-1),r(),o("formGroup",a.signUpForm),r(5),o("formControlName","name"),r(),d(a.signUpForm.get("name").hasError("required")?19:-1),r(4),o("formControlName","email"),r(),d(a.signUpForm.get("email").hasError("required")?24:-1),r(),d(a.signUpForm.get("email").hasError("email")?25:-1),r(4),o("formControlName","password"),r(3),d(p.type==="password"?32:-1),r(),d(p.type==="text"?33:-1),r(6),o("formControlName","company"),r(2),o("color","primary")("formControlName","agreements"),r(3),o("routerLink",h(21,me)),r(4),o("routerLink",h(22,me)),r(2),o("color","primary")("disabled",a.signUpForm.disabled),r(),d(a.signUpForm.disabled?-1:51),r(),d(a.signUpForm.disabled?52:-1)}},dependencies:[N,re,Z,W,O,H,J,$,Y,K,B,V,j,T,q,te,ee,G,L,P,D,R,ae,oe,ne,ie],encapsulation:2,data:{animation:z}})}}return i})();var De=[{path:"",component:le}];export{De as default};
