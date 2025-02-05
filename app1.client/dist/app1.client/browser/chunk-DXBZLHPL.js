import{a as v}from"./chunk-3CHAGWBA.js";import{a as q}from"./chunk-LWWIWE6H.js";import{a as j,b as N,c as Q,d as U}from"./chunk-4NQDTH66.js";import{d as A}from"./chunk-2MPSVVLD.js";import"./chunk-WO7XMYCS.js";import"./chunk-TKBKLS4N.js";import{c as T}from"./chunk-ORUTPMOI.js";import"./chunk-YCUPTL4E.js";import"./chunk-EMSJVJHN.js";import"./chunk-7XX3TVDI.js";import"./chunk-SSJR24MO.js";import"./chunk-6UHTTYRU.js";import{b as F}from"./chunk-USBB2VVN.js";import"./chunk-3LBPL7IG.js";import{c as x,e as u}from"./chunk-22IZ7S6Q.js";import{b as f,c as g}from"./chunk-ZDVCYR6D.js";import"./chunk-25LMPTPI.js";import"./chunk-AUKJIIL4.js";import"./chunk-7DEZWTYC.js";import"./chunk-SVUIAZ5I.js";import{c as O}from"./chunk-IKG45PLY.js";import"./chunk-OYH67EY7.js";import"./chunk-DBYYYE4O.js";import{Kb as a,Uc as D,Wb as e,Xb as n,Yb as l,Z as M,f as C,gc as h,hb as m,ib as d,mc as I,nc as _,oc as k,tc as t,wb as c}from"./chunk-Q34RPHHW.js";import"./chunk-WWX6BADO.js";var V=["matDrawer"],p=(()=>{class o{constructor(r,i){this._changeDetectorRef=r,this._fuseMediaWatcherService=i,this._unsubscribeAll=new C,this.menuData=[{id:"other-components.common",title:"Common",subtitle:"Custom made high-level components",type:"group",children:[{id:"other-components.common.overview",title:"Overview",type:"basic",link:"/ui/other-components/common/overview"},{id:"other-components.common.languages",title:"Languages",type:"basic",link:"/ui/other-components/common/languages"},{id:"other-components.common.messages",title:"Messages",type:"basic",link:"/ui/other-components/common/messages"},{id:"other-components.common.notifications",title:"Notifications",type:"basic",link:"/ui/other-components/common/notifications"},{id:"other-components.common.quick-chat",title:"Quick chat",type:"basic",link:"/ui/other-components/common/quick-chat"},{id:"other-components.common.search",title:"Search",type:"basic",link:"/ui/other-components/common/search"},{id:"other-components.common.shortcuts",title:"Shortcuts",type:"basic",link:"/ui/other-components/common/shortcuts"},{id:"other-components.common.user",title:"User",type:"basic",link:"/ui/other-components/common/user"}]},{id:"other-components.divider-1",type:"divider"},{id:"other-components.third-party",title:"Third party",subtitle:"Supported components",type:"group",children:[{id:"other-components.third-party.apex-charts",title:"ApexCharts",type:"basic",link:"/ui/other-components/third-party/apex-charts"},{id:"other-components.third-party.quill-editor",title:"Quill editor",type:"basic",link:"/ui/other-components/third-party/quill-editor"}]}]}ngOnInit(){this._fuseMediaWatcherService.onMediaChange$.pipe(M(this._unsubscribeAll)).subscribe(({matchingAliases:r})=>{r.includes("md")?(this.drawerMode="side",this.drawerOpened=!0):(this.drawerMode="over",this.drawerOpened=!1),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}static{this.\u0275fac=function(i){return new(i||o)(d(D),d(T))}}static{this.\u0275cmp=c({type:o,selectors:[["other-components"]],viewQuery:function(i,s){if(i&1&&I(V,7),i&2){let S;_(S=k())&&(s.matDrawer=S.first)}},decls:8,vars:8,consts:[["matDrawer",""],[1,"absolute","inset-0","flex","min-w-0","flex-col","overflow-hidden"],[1,"h-full","flex-auto"],[1,"flex","w-60","min-w-60","dark:bg-gray-900",3,"autoFocus","mode","opened"],[3,"navigation","inner","mode","name","opened"],["fuseScrollReset","",1,"flex","flex-col"],[1,"flex-auto"]],template:function(i,s){i&1&&(e(0,"div",1)(1,"mat-drawer-container",2)(2,"mat-drawer",3,0),l(4,"fuse-vertical-navigation",4),n(),e(5,"mat-drawer-content",5)(6,"div",6),l(7,"router-outlet"),n()()()()),i&2&&(m(2),a("autoFocus",!1)("mode",s.drawerMode)("opened",s.drawerOpened),m(2),a("navigation",s.menuData)("inner",!0)("mode","side")("name","docs-common-components-navigation")("opened",!0))},dependencies:[U,N,Q,j,A,q,O],styles:[`other-components fuse-vertical-navigation .fuse-vertical-navigation-wrapper{box-shadow:none!important}
`],encapsulation:2,changeDetection:0})}}return o})();var B=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["languages"]],decls:29,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["fuse-highlight","","lang","html"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Languages "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," This component can be used for changing the language and managing the side effects of changing the active language such as updating the navigation. "),n(),e(23,"h2"),t(24,"Usage"),n(),e(25,"p"),t(26,"Here's the basic usage of the component:"),n(),e(27,"textarea",14),t(28,`            <language></language>
        `),n()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x,v],encapsulation:2})}}return o})();var R=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["messages"]],decls:150,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["fuse-highlight","","lang","html"],["fuse-highlight","","lang","typescript"],[1,"bg-card","mt-2","rounded","px-6","py-3","shadow"],[1,"text-secondary","font-mono","text-md"],[1,"bg-card","mt-4","rounded","shadow"],[1,"text-secondary","border-b","px-6","py-3","font-mono"],[1,"p-6"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Messages "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," This component can be used to show latest messages in a custom made panel. These messages can be either system wide messages or messages that sent to the currently logged in user from other users. "),n(),e(23,"p"),t(24,"It has some basic features including"),n(),e(25,"ul")(26,"li"),t(27,"marking all messages as read"),n(),e(28,"li"),t(29,"marking individual messages as read"),n(),e(30,"li"),t(31,"removing individual messages from the list"),n()(),e(32,"h2"),t(33,"Usage"),n(),e(34,"textarea",14),t(35,`            <messages></messages>
        `),n(),e(36,"h2"),t(37,"Message"),n(),e(38,"textarea",15),t(39,`            export interface Message
            {
                id: string;
                icon?: string;
                image?: string;
                title?: string;
                description?: string;
                time: string;
                link?: string;
                useRouter?: boolean;
                read: boolean;
            }
        `),n(),e(40,"div",16)(41,"table")(42,"thead")(43,"tr")(44,"th"),t(45,"Name"),n(),e(46,"th"),t(47,"Description"),n()()(),e(48,"tbody")(49,"tr")(50,"td",17)(51,"div"),t(52,"id"),n()(),e(53,"td"),t(54,"Unique id of the message."),n()(),e(55,"tr")(56,"td",17)(57,"div"),t(58,"icon"),n()(),e(59,"td"),t(60,"Icon name for the message."),n()(),e(61,"tr")(62,"td",17)(63,"div"),t(64,"image"),n()(),e(65,"td"),t(66,"Image for the message."),n()(),e(67,"tr")(68,"td",17)(69,"div"),t(70,"title"),n()(),e(71,"td"),t(72,"Title of the message."),n()(),e(73,"tr")(74,"td",17)(75,"div"),t(76,"description"),n()(),e(77,"td"),t(78,"Description of the message."),n()(),e(79,"tr")(80,"td",17)(81,"div"),t(82,"time"),n()(),e(83,"td"),t(84," String representation of the time of the message (like ISO string). "),n()(),e(85,"tr")(86,"td",17)(87,"div"),t(88,"link"),n()(),e(89,"td"),t(90,"Link of the message."),n()(),e(91,"tr")(92,"td",17)(93,"div"),t(94,"useRouter"),n()(),e(95,"td"),t(96,"Whether to use the Router to parse the link."),n()(),e(97,"tr")(98,"td",17)(99,"div"),t(100,"read"),n()(),e(101,"td"),t(102,"Whether the message marked as read."),n()()()()(),e(103,"h2"),t(104,"Messages Service"),n(),e(105,"p"),t(106," The "),e(107,"code"),t(108,"MessagesService"),n(),t(109," can be used to control the messages outside of the "),e(110,"strong"),t(111,"Messages"),n(),t(112," component. This is particularly useful to control the messages from other components for actions like creating, updating or deleting them. "),n(),e(113,"h3"),t(114,"Methods"),n(),e(115,"p"),t(116," Here's the list of all available methods from "),e(117,"code"),t(118,"MessagesService"),n(),t(119,": "),n(),e(120,"div",18)(121,"div",19),t(122," messages$: Observable<Message[]> "),n(),e(123,"div",20),t(124,"Getter for messages."),n()(),e(125,"div",18)(126,"div",19),t(127," getAll(): Observable<Message[]> "),n(),e(128,"div",20),t(129,"Get all messages from the server."),n()(),e(130,"div",18)(131,"div",19),t(132," create(message: Message): Observable<Message> "),n(),e(133,"div",20),t(134,"Create a new message on the server."),n()(),e(135,"div",18)(136,"div",19),t(137," update(id: string, message: Message): Observable<Message> "),n(),e(138,"div",20),t(139,"Update the message on the server."),n()(),e(140,"div",18)(141,"div",19),t(142," delete(id: string): Observable<boolean> "),n(),e(143,"div",20),t(144,"Delete the message on the server."),n()(),e(145,"div",18)(146,"div",19),t(147," markAllAsRead(): Observable<boolean> "),n(),e(148,"div",20),t(149,"Mark all messages as read."),n()()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x,v],encapsulation:2})}}return o})();var H=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["notifications"]],decls:150,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["fuse-highlight","","lang","html"],["fuse-highlight","","lang","typescript"],[1,"bg-card","mt-2","rounded","px-6","py-3","shadow"],[1,"text-secondary","font-mono","text-md"],[1,"bg-card","mt-4","rounded","shadow"],[1,"text-secondary","border-b","px-6","py-3","font-mono"],[1,"p-6"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Notifications "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," This component can be used to show latest notifications in a custom made panel. These notifications can be either system wide or applications that sent to the currently logged in user from other users. "),n(),e(23,"p"),t(24,"It has some basic features including"),n(),e(25,"ul")(26,"li"),t(27,"marking all notification as read"),n(),e(28,"li"),t(29,"marking individual notifications as read"),n(),e(30,"li"),t(31,"removing individual notifications from the list"),n()(),e(32,"h2"),t(33,"Usage"),n(),e(34,"textarea",14),t(35,`            <notifications></notifications>
        `),n(),e(36,"h2"),t(37,"Notification"),n(),e(38,"textarea",15),t(39,`            export interface Notification
            {
                id: string;
                icon?: string;
                image?: string;
                title?: string;
                description?: string;
                time: string;
                link?: string;
                useRouter?: boolean;
                read: boolean;
            }
        `),n(),e(40,"div",16)(41,"table")(42,"thead")(43,"tr")(44,"th"),t(45,"Name"),n(),e(46,"th"),t(47,"Description"),n()()(),e(48,"tbody")(49,"tr")(50,"td",17)(51,"div"),t(52,"id"),n()(),e(53,"td"),t(54,"Unique id of the notification."),n()(),e(55,"tr")(56,"td",17)(57,"div"),t(58,"icon"),n()(),e(59,"td"),t(60,"Icon name for the notification."),n()(),e(61,"tr")(62,"td",17)(63,"div"),t(64,"image"),n()(),e(65,"td"),t(66,"Image for the notification."),n()(),e(67,"tr")(68,"td",17)(69,"div"),t(70,"title"),n()(),e(71,"td"),t(72,"Title of the notification."),n()(),e(73,"tr")(74,"td",17)(75,"div"),t(76,"description"),n()(),e(77,"td"),t(78,"Description of the notification."),n()(),e(79,"tr")(80,"td",17)(81,"div"),t(82,"time"),n()(),e(83,"td"),t(84," String representation of the time of the notification (like ISO string). "),n()(),e(85,"tr")(86,"td",17)(87,"div"),t(88,"link"),n()(),e(89,"td"),t(90,"Link of the notification."),n()(),e(91,"tr")(92,"td",17)(93,"div"),t(94,"useRouter"),n()(),e(95,"td"),t(96,"Whether to use the Router to parse the link."),n()(),e(97,"tr")(98,"td",17)(99,"div"),t(100,"read"),n()(),e(101,"td"),t(102,"Whether the notification marked as read."),n()()()()(),e(103,"h2"),t(104,"Notifications Service"),n(),e(105,"p"),t(106," The "),e(107,"code"),t(108,"NotificationsService"),n(),t(109," can be used to control the notifications outside of the "),e(110,"strong"),t(111,"Notifications"),n(),t(112," component. This is particularly useful to control the notifications from other components for actions like creating, updating or deleting them. "),n(),e(113,"h3"),t(114,"Methods"),n(),e(115,"p"),t(116," Here's the list of all available methods from "),e(117,"code"),t(118,"NotificationsService"),n(),t(119,": "),n(),e(120,"div",18)(121,"div",19),t(122," notifications$: Observable<Notification[]> "),n(),e(123,"div",20),t(124,"Getter for notifications."),n()(),e(125,"div",18)(126,"div",19),t(127," getAll(): Observable<Notification[]> "),n(),e(128,"div",20),t(129,"Get all notifications from the server."),n()(),e(130,"div",18)(131,"div",19),t(132," create(notification: Notification): Observable<Notification> "),n(),e(133,"div",20),t(134,"Create a new notification on the server."),n()(),e(135,"div",18)(136,"div",19),t(137," update(id: string, notification: Notification): Observable<Notification> "),n(),e(138,"div",20),t(139,"Update the notification on the server."),n()(),e(140,"div",18)(141,"div",19),t(142," delete(id: string): Observable<boolean> "),n(),e(143,"div",20),t(144,"Delete the notification on the server."),n()(),e(145,"div",18)(146,"div",19),t(147," markAllAsRead(): Observable<boolean> "),n(),e(148,"div",20),t(149,"Mark all notifications as read."),n()()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x,v],encapsulation:2})}}return o})();var z=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["overview"]],decls:69,vars:7,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],[3,"appearance","type"],[1,"mt-4",3,"appearance","type"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Overview "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," Common components are custom made components that could require heavy modifications depending on the project. These components are mostly related with the layout therefore they are located in the "),e(23,"code"),t(24,"src/app/layout/common/"),n(),t(25," directory. You can modify them without touching the "),e(26,"code"),t(27,"@fuse"),n(),t(28," directory. "),n(),e(29,"fuse-alert",14),t(30," These components are not very complex and they only provide some basic features. If you wish them to do more, you have to customize them, and that's exactly why they are not located in the "),e(31,"code"),t(32,"@fuse"),n(),t(33," directory like other components. "),n(),e(34,"fuse-alert",15),t(35," We may add more features and more custom components in the future if they will be beneficial for everyone. Components that are too specific to a project won't be included as custom components into Fuse! "),n(),e(36,"p"),t(37,"Currently, there are five common components;"),n(),e(38,"ul")(39,"li")(40,"p")(41,"strong"),t(42,"Messages"),n()(),e(43,"p"),t(44,"A panel to show latest messages."),n()(),e(45,"li")(46,"p")(47,"strong"),t(48,"Notifications"),n()(),e(49,"p"),t(50,"A panel to show latest notifications."),n()(),e(51,"li")(52,"p")(53,"strong"),t(54,"Search"),n()(),e(55,"p"),t(56," An autocomplete search box with proper API endpoint setup. "),n()(),e(57,"li")(58,"p")(59,"strong"),t(60,"Shortcuts"),n()(),e(61,"p"),t(62," A user customizable panel to show shortcuts to internal/external pages. "),n()(),e(63,"li")(64,"p")(65,"strong"),t(66,"User"),n()(),e(67,"p"),t(68," A user avatar and menu component to show user related information and actions. "),n()()()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"),m(10),a("appearance","border")("type","info"),m(5),a("appearance","border")("type","info"))},dependencies:[g,f,u,x,F],encapsulation:2})}}return o})();var W=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["quick-chat"]],decls:29,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["fuse-highlight","","lang","html"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Quick Chat "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," Quick Chat is a simple component to show a Chat sidebar across the entire layout. You can remove the component from the template file of your preferred layout to remove the Quick Chat completely. "),n(),e(23,"h2"),t(24,"Usage"),n(),e(25,"p"),t(26,"Here's the basic usage of the component:"),n(),e(27,"textarea",14),t(28,`            <quick-chat></quick-chat>
        `),n()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x,v],encapsulation:2})}}return o})();var L=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["search"]],decls:94,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["fuse-highlight","","lang","html"],[1,"bg-card","rounded","px-6","py-3","shadow"],[1,"text-secondary","font-mono","text-md"],[1,"whitespace-nowrap"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Search "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," This component can be used for searching. It will make API calls as you start typing the search query into the search field and show the results in the "),e(23,"em"),t(24,"Autocomplete"),n(),t(25," panel. "),n(),e(26,"h2"),t(27,"Usage"),n(),e(28,"p"),t(29,"Here's the basic usage of the component:"),n(),e(30,"textarea",14),t(31,`            <search [appearance]="'bar'"></search>
        `),n(),e(32,"h2"),t(33,"Properties"),n(),e(34,"div",15)(35,"table")(36,"thead")(37,"tr")(38,"th"),t(39,"Name"),n(),e(40,"th"),t(41,"Description"),n(),e(42,"th"),t(43,"Default"),n()()(),e(44,"tbody")(45,"tr")(46,"td",16)(47,"div"),t(48,"@Input()"),n(),e(49,"div"),t(50,"appearance: 'basic' | 'bar'"),n()(),e(51,"td"),t(52," Appearance of the search. "),e(53,"strong"),t(54,"basic"),n(),t(55," will show a simple search field. "),e(56,"strong"),t(57,"bar"),n(),t(58," will show a dropdown bar that covers the header. "),n(),e(59,"td")(60,"code",17),t(61,"bar"),n()()(),e(62,"tr")(63,"td",16)(64,"div"),t(65,"@Input()"),n(),e(66,"div"),t(67,"debounce: number"),n()(),e(68,"td"),t(69," Number of milliseconds to debounce the API calls. "),n(),e(70,"td")(71,"code",17),t(72,"300"),n()()(),e(73,"tr")(74,"td",16)(75,"div"),t(76,"@Input()"),n(),e(77,"div"),t(78,"minLength: number"),n()(),e(79,"td"),t(80," Minimum length of the search value required before making API calls. "),n(),e(81,"td")(82,"code",17),t(83,"2"),n()()(),e(84,"tr")(85,"td",16)(86,"div"),t(87,"@Output()"),n(),e(88,"div"),t(89,"search: EventEmitter"),n()(),e(90,"td"),t(91,"An event emitted after search happened."),n(),e(92,"td"),t(93,"-"),n()()()()()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x,v],encapsulation:2})}}return o})();var P=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["shortcuts"]],decls:118,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["fuse-highlight","","lang","html"],["fuse-highlight","","lang","typescript"],[1,"bg-card","mt-2","rounded","px-6","py-3","shadow"],[1,"text-secondary","font-mono","text-md"],[1,"bg-card","mt-4","rounded","shadow"],[1,"text-secondary","border-b","px-6","py-3","font-mono"],[1,"p-6"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Shortcuts "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," This component can be used to show shortcuts to applications, pages or external sources. It can be controlled by the user and any changes will be persisted to the backend if setup correctly. "),n(),e(23,"h2"),t(24,"Usage"),n(),e(25,"textarea",14),t(26,`            <shortcuts></shortcuts>
        `),n(),e(27,"h2"),t(28,"Message"),n(),e(29,"textarea",15),t(30,`            export interface Shortcut
            {
                id: string;
                label: string;
                description?: string;
                icon: string;
                link: string;
                useRouter: boolean;
            }
        `),n(),e(31,"div",16)(32,"table")(33,"thead")(34,"tr")(35,"th"),t(36,"Name"),n(),e(37,"th"),t(38,"Description"),n()()(),e(39,"tbody")(40,"tr")(41,"td",17)(42,"div"),t(43,"id"),n()(),e(44,"td"),t(45,"Unique id of the shortcut."),n()(),e(46,"tr")(47,"td",17)(48,"div"),t(49,"label"),n()(),e(50,"td"),t(51,"Label of the shortcut."),n()(),e(52,"tr")(53,"td",17)(54,"div"),t(55,"description"),n()(),e(56,"td"),t(57,"Description of the shortcut."),n()(),e(58,"tr")(59,"td",17)(60,"div"),t(61,"icon"),n()(),e(62,"td"),t(63,"Icon name for the shortcut."),n()(),e(64,"tr")(65,"td",17)(66,"div"),t(67,"link"),n()(),e(68,"td"),t(69,"Link of the shortcut."),n()(),e(70,"tr")(71,"td",17)(72,"div"),t(73,"useRouter"),n()(),e(74,"td"),t(75,"Whether to use the Router to parse the link."),n()()()()(),e(76,"h2"),t(77,"Shortcuts Service"),n(),e(78,"p"),t(79," The "),e(80,"code"),t(81,"ShortcutsService"),n(),t(82," can be used to control the shortcuts outside of the "),e(83,"strong"),t(84,"Shortcuts"),n(),t(85," component. This is particularly useful to control the shortcuts from other components for actions like creating, updating or deleting them. "),n(),e(86,"h3"),t(87,"Methods"),n(),e(88,"p"),t(89," Here's the list of all available methods from "),e(90,"code"),t(91,"ShortcutsService"),n(),t(92,": "),n(),e(93,"div",18)(94,"div",19),t(95," shortcuts$: Observable<Shortcut[]> "),n(),e(96,"div",20),t(97,"Getter for shortcuts."),n()(),e(98,"div",18)(99,"div",19),t(100," getAll(): Observable<Shortcut[]> "),n(),e(101,"div",20),t(102,"Get all shortcuts from the server."),n()(),e(103,"div",18)(104,"div",19),t(105," create(shortcut: Shortcut): Observable<Shortcut> "),n(),e(106,"div",20),t(107,"Create a new shortcut on the server."),n()(),e(108,"div",18)(109,"div",19),t(110," update(id: string, shortcut: Shortcut): Observable<Shortcut> "),n(),e(111,"div",20),t(112,"Update the shortcut on the server."),n()(),e(113,"div",18)(114,"div",19),t(115," delete(id: string): Observable<boolean> "),n(),e(116,"div",20),t(117,"Delete the shortcut on the server."),n()()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x,v],encapsulation:2})}}return o})();var G=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["user"]],decls:56,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["fuse-highlight","","lang","html"],[1,"bg-card","rounded","px-6","py-3","shadow"],[1,"text-secondary","font-mono","text-md"],[1,"whitespace-nowrap"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Common"),n()()(),e(15,"div",9)(16,"h2",10),t(17," User "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p"),t(22," This component can be used for showing information and actions related to the currently logged in user. "),n(),e(23,"h2"),t(24,"Usage"),n(),e(25,"p"),t(26,"Here's the basic usage of the component:"),n(),e(27,"textarea",14),t(28,`            <user></user>
        `),n(),e(29,"h2"),t(30,"Properties"),n(),e(31,"div",15)(32,"table")(33,"thead")(34,"tr")(35,"th"),t(36,"Name"),n(),e(37,"th"),t(38,"Description"),n(),e(39,"th"),t(40,"Default"),n()()(),e(41,"tbody")(42,"tr")(43,"td",16)(44,"div"),t(45,"@Input()"),n(),e(46,"div"),t(47,"showAvatar: boolean"),n()(),e(48,"td"),t(49," Whether to show avatar of the user. If set to "),e(50,"code"),t(51,"false"),n(),t(52,", a generic icon will be shown. "),n(),e(53,"td")(54,"code",17),t(55,"true"),n()()()()()()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x,v],encapsulation:2})}}return o})();var Y=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["apex-charts"]],decls:33,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["href","https://apexcharts.com/","rel","noreferrer","target","_blank"],["href","https://github.com/apexcharts/ng-apexcharts","rel","noreferrer","target","_blank"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Third Party"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Apex Charts "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p")(22,"a",14),t(23,"ApexCharts "),n(),t(24," is a modern and interactive open-source charts library. Fuse supports ApexCharts through official "),e(25,"a",15),t(26,"ng-apexcharts "),n(),t(27," component. "),n(),e(28,"p"),t(29,"All charts in the Demo app built using "),e(30,"em"),t(31,"ApexCharts"),n(),t(32,"."),n()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x],encapsulation:2})}}return o})();var $=(()=>{class o{constructor(r){this._otherComponentsComponent=r}toggleDrawer(){this._otherComponentsComponent.matDrawer.toggle()}static{this.\u0275fac=function(i){return new(i||o)(d(p))}}static{this.\u0275cmp=c({type:o,selectors:[["quill-editor"]],decls:39,vars:3,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"bg-card","flex","flex-0","flex-col","border-b","p-6","dark:bg-transparent","sm:flex-row","sm:items-center","sm:justify-between","sm:px-10","sm:py-8"],[1,"min-w-0","flex-1"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"ml-1","flex","items-center","whitespace-nowrap"],[1,"text-secondary","icon-size-5",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"text-secondary","ml-1"],[1,"mt-2"],[1,"truncate","text-3xl","font-extrabold","leading-7","tracking-tight","sm:leading-10","md:text-4xl"],["mat-icon-button","",1,"order-first","-ml-3","mb-2","sm:order-last","sm:mb-0","sm:ml-0",3,"click"],[3,"svgIcon"],[1,"prose","prose-sm","max-w-3xl","flex-auto","p-6","sm:p-10"],["href","https://quilljs.com/","rel","noreferrer","target","_blank"],["href","https://github.com/KillerCodeMonkey/ngx-quill","rel","noreferrer","target","_blank"]],template:function(i,s){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),t(6,"Documentation"),n()(),e(7,"div",5),l(8,"mat-icon",6),e(9,"a",7),t(10,"Other Components"),n()(),e(11,"div",5),l(12,"mat-icon",6),e(13,"span",8),t(14,"Third Party"),n()()(),e(15,"div",9)(16,"h2",10),t(17," Quill Editor "),n()()(),e(18,"button",11),h("click",function(){return s.toggleDrawer()}),l(19,"mat-icon",12),n()(),e(20,"div",13)(21,"p")(22,"a",14),t(23,"Quill "),n(),t(24," is a free, open source WYSIWYG editor built for the modern web. Fuse supports Quill editor through "),e(25,"a",15),t(26,"ngx-quill "),n(),t(27," component. "),n(),e(28,"p"),t(29," The "),e(30,"strong"),t(31,"Compose"),n(),t(32," dialog from "),e(33,"strong"),t(34,"Mail"),n(),t(35," app includes the "),e(36,"em"),t(37,"Quill"),n(),t(38," editor. "),n()()()),i&2&&(m(8),a("svgIcon","heroicons_mini:chevron-right"),m(4),a("svgIcon","heroicons_mini:chevron-right"),m(7),a("svgIcon","heroicons_outline:bars-3"))},dependencies:[g,f,u,x],encapsulation:2})}}return o})();var Xe=[{path:"",component:p,children:[{path:"",pathMatch:"full",redirectTo:"common/overview"},{path:"common",children:[{path:"",pathMatch:"full",redirectTo:"overview"},{path:"overview",component:z},{path:"languages",component:B},{path:"messages",component:R},{path:"notifications",component:H},{path:"search",component:L},{path:"quick-chat",component:W},{path:"shortcuts",component:P},{path:"user",component:G}]},{path:"third-party",children:[{path:"",pathMatch:"full",redirectTo:"apex-charts"},{path:"apex-charts",component:Y},{path:"quill-editor",component:$}]}]}];export{Xe as default};
