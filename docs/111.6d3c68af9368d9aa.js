"use strict";(self.webpackChunkangular_aranyhal_horgaszegyesulet=self.webpackChunkangular_aranyhal_horgaszegyesulet||[]).push([[111],{8111:(S,x,i)=>{i.r(x),i.d(x,{CatchesModule:()=>l});var g=i(6895),r=i(433),s=i(9230),t=i(8256);class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-layout"]],decls:2,vars:0,consts:[[1,"container","col-md-6","offset-md-3","mt-5"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"router-outlet"),t.qZA())},dependencies:[s.lC]});var f=i(590),m=i(5055);function Z(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"\xc9v kit\xf6lt\xe9se k\xf6telez\u0151"),t.qZA())}function v(o,n){if(1&o&&(t.TgZ(0,"div",26),t.YNc(1,Z,2,0,"div",27),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.ev.errors.required)}}function C(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Ponty kit\xf6lt\xe9se k\xf6telez\u0151"),t.qZA())}function A(o,n){if(1&o&&(t.TgZ(0,"div",26),t.YNc(1,C,2,0,"div",27),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.ponty.errors.required)}}function T(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"S\xfcll\u0151 kit\xf6lt\xe9se k\xf6telez\u0151"),t.qZA())}function k(o,n){if(1&o&&(t.TgZ(0,"div",26),t.YNc(1,T,2,0,"div",27),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.sullo.errors.required)}}function q(o,n){1&o&&(t.TgZ(0,"div"),t._uU(1,"Harcsa kit\xf6lt\xe9se k\xf6telez\u0151"),t.qZA())}function y(o,n){if(1&o&&(t.TgZ(0,"div",26),t.YNc(1,q,2,0,"div",27),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.f.harcsa.errors.required)}}function w(o,n){1&o&&t._UZ(0,"span",28)}const h=function(o){return{"is-invalid":o}};function U(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"form",14),t.NdJ("ngSubmit",function(){t.CHM(e);const _=t.oxw();return t.KtG(_.onSubmit())}),t.TgZ(1,"div",4)(2,"div",15)(3,"label",16),t._uU(4,"\xc9v"),t.qZA(),t._UZ(5,"input",17),t.YNc(6,v,2,1,"div",18),t.qZA(),t.TgZ(7,"div",15)(8,"label",16),t._uU(9,"Ponty (db)"),t.qZA(),t._UZ(10,"input",19),t.YNc(11,A,2,1,"div",18),t.qZA()(),t.TgZ(12,"div",4)(13,"div",15)(14,"label",16),t._uU(15,"S\xfcll\u0151 (db)"),t.qZA(),t._UZ(16,"input",20),t.YNc(17,k,2,1,"div",18),t.qZA(),t.TgZ(18,"div",15)(19,"label",16),t._uU(20,"Harcsa (db)"),t.qZA(),t._UZ(21,"input",21),t.YNc(22,y,2,1,"div",18),t.qZA(),t.TgZ(23,"div",22)(24,"button",23),t.YNc(25,w,1,0,"span",24),t._uU(26," Ment\xe9s "),t.qZA(),t.TgZ(27,"a",25),t._uU(28,"Vissza"),t.qZA()()()()}if(2&o){const e=t.oxw();t.Q6J("formGroup",e.form),t.xp6(5),t.Q6J("ngClass",t.VKq(11,h,e.submitted&&e.f.ev.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.ev.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(13,h,e.submitted&&e.f.ponty.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.ponty.errors),t.xp6(5),t.Q6J("ngClass",t.VKq(15,h,e.submitted&&e.f.sullo.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.sullo.errors),t.xp6(4),t.Q6J("ngClass",t.VKq(17,h,e.submitted&&e.f.harcsa.errors)),t.xp6(1),t.Q6J("ngIf",e.submitted&&e.f.harcsa.errors),t.xp6(2),t.Q6J("disabled",e.submitting),t.xp6(1),t.Q6J("ngIf",e.submitting)}}function E(o,n){1&o&&(t.TgZ(0,"div",29),t._UZ(1,"span",30),t.qZA())}class c{constructor(n,e,a,_,b){this.formBuilder=n,this.route=e,this.router=a,this.catchesService=_,this.alertService=b,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({ev:["",r.kI.required],ponty:["",r.kI.required],sullo:["",r.kI.required],harcsa:["",r.kI.required]}),this.title="Fog\xe1si napl\xf3 hozz\xe1ad\xe1sa",this.id&&(this.title="Fog\xe1si napl\xf3 szerkeszt\xe9se",this.loading=!0,this.catchesService.getById(this.id).pipe((0,f.P)()).subscribe(n=>{this.form.patchValue(n),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.saveCatch().pipe((0,f.P)()).subscribe({next:()=>{this.alertService.success("Fog\xe1si napl\xf3 r\xf6gz\xedtve",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/catches")},error:n=>{this.alertService.error(n),this.submitting=!1}}))}saveCatch(){return this.id?this.catchesService.update(this.id,this.form.value):this.catchesService.add(this.form.value)}}function M(o,n){1&o&&t._UZ(0,"span",21)}function F(o,n){1&o&&(t.TgZ(0,"span"),t._uU(1,"T\xf6rl\xe9s"),t.qZA())}function O(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",17)(10,"a",18),t._uU(11,"M\xf3dos\xedt\xe1s"),t.qZA(),t.TgZ(12,"button",19),t.NdJ("click",function(){const b=t.CHM(e).$implicit,P=t.oxw();return t.KtG(P.deleteCatch(b.id))}),t.YNc(13,M,1,0,"span",20),t.YNc(14,F,2,0,"span",4),t.qZA()()()}if(2&o){const e=n.$implicit;t.xp6(2),t.Oqu(e.ev),t.xp6(2),t.Oqu(e.ponty),t.xp6(2),t.Oqu(e.sullo),t.xp6(2),t.Oqu(e.harcsa),t.xp6(2),t.MGl("routerLink","edit/",e.id,""),t.xp6(2),t.Q6J("disabled",e.isDeleting),t.xp6(1),t.Q6J("ngIf",e.isDeleting),t.xp6(1),t.Q6J("ngIf",!e.isDeleting)}}function J(o,n){1&o&&(t.TgZ(0,"tr")(1,"td",22),t._UZ(2,"span",23),t.qZA()())}c.\u0275fac=function(n){return new(n||c)(t.Y36(r.qu),t.Y36(s.gz),t.Y36(s.F0),t.Y36(m.ah),t.Y36(m.c9))},c.\u0275cmp=t.Xpm({type:c,selectors:[["ng-component"]],decls:18,vars:3,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],["id","footer"],[1,"container"],[1,"row"],[1,"col"],[1,"footer-heading"],["href","https://www.facebook.com/","title","facebook","target","_blank","data-bs-toggle","tooltip","data-bs-title","facebook"],["src","./assets/img/logo-facebook.png","alt","facebook",1,"footer-img"],["href","https://www.instagram.com/","title","twitter","target","_blank"],["src","./assets/img/logo-instagram.png","alt","instagram",1,"footer-img"],["href","https://www.twitter.com/","title","twitter","target","_blank"],["src","./assets/img/logo-twitter.png","alt","twitter",1,"footer-img"],[1,"footer-text"],[3,"formGroup","ngSubmit"],[1,"col","mb-3"],[1,"form-label"],["type","text","formControlName","ev",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","ponty",1,"form-control",3,"ngClass"],["type","text","formControlName","sullo",1,"form-control",3,"ngClass"],["type","text","formControlName","harcsa",1,"form-control",3,"ngClass"],[1,"mb-3"],["id","save",1,"btn",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/catches","id","back",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(n,e){1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA(),t.YNc(2,U,29,19,"form",0),t.YNc(3,E,2,0,"div",1),t.TgZ(4,"footer",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"h4",6),t._uU(9,"Social Media el\xe9rhet\u0151s\xe9geink:"),t.qZA(),t.TgZ(10,"a",7),t._UZ(11,"img",8),t.qZA(),t.TgZ(12,"a",9),t._UZ(13,"img",10),t.qZA(),t.TgZ(14,"a",11),t._UZ(15,"img",12),t.qZA(),t.TgZ(16,"p",13),t._uU(17,"\xa9 Aranyhal Horg\xe1szegyes\xfclet 2023 minden jog fentartva!"),t.qZA()()()()()),2&n&&(t.xp6(1),t.Oqu(e.title),t.xp6(1),t.Q6J("ngIf",!e.loading),t.xp6(1),t.Q6J("ngIf",e.loading))},dependencies:[g.mk,g.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,s.rH],styles:['h1[_ngcontent-%COMP%]:after{content:"";display:flex;background-color:#009459;width:100px;height:2px;margin:20px}#save[_ngcontent-%COMP%]{margin-right:15px;padding:8px;background:#009459;color:#fff;border:none;border-radius:5px}#save[_ngcontent-%COMP%]:hover{margin-right:15px;padding:8px;background:#00643c;color:#fff;border:none;border-radius:5px;transition:all .3s}#back[_ngcontent-%COMP%]{padding:8px;background:#fff;color:#009459;border-radius:5px;text-decoration:none}#back[_ngcontent-%COMP%]:hover{padding:8px;background:#00643c;color:#fff;border:none;border-radius:5px;transition:all .3s}footer[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;display:flex;justify-content:center;text-align:center;margin-top:30px;background:#009459;color:#fff}.footer-heading[_ngcontent-%COMP%]{margin-top:20px}.footer-img[_ngcontent-%COMP%]{margin:15px 10px;max-width:35px;color:#fff;cursor:pointer}.footer-text[_ngcontent-%COMP%]{margin-bottom:20px}']});class p{constructor(n,e){this.catchesService=n,this.accountService=e,this.user=this.accountService.userValue}ngOnInit(){this.catchesService.getAll().pipe((0,f.P)()).subscribe(n=>this.catches=n)}deleteCatch(n){const e=this.catches.find(a=>a.id===n);confirm("Biztosan t\xf6r\xf6lni szeretn\xe9d a fog\xe1sod?")&&(e.isDeleting=this.catchesService.delete(n).pipe((0,f.P)()).subscribe(()=>this.catches=this.catches.filter(a=>a.id!==n)))}}p.\u0275fac=function(n){return new(n||p)(t.Y36(m.ah),t.Y36(m.BR))},p.\u0275cmp=t.Xpm({type:p,selectors:[["ng-component"]],decls:33,vars:4,consts:[["routerLink","add","id","admin",1,"btn","btn-sm","mb-2"],[1,"table","table-striped"],[2,"width","20%"],[4,"ngFor","ngForOf"],[4,"ngIf"],["id","footer"],[1,"container"],[1,"row"],[1,"col"],[1,"footer-heading"],["href","https://www.facebook.com/","title","facebook","target","_blank","data-bs-toggle","tooltip","data-bs-title","facebook"],["src","./assets/img/logo-facebook.png","alt","facebook",1,"footer-img"],["href","https://www.instagram.com/","title","twitter","target","_blank"],["src","./assets/img/logo-instagram.png","alt","instagram",1,"footer-img"],["href","https://www.twitter.com/","title","twitter","target","_blank"],["src","./assets/img/logo-twitter.png","alt","twitter",1,"footer-img"],[1,"footer-text"],[2,"white-space","nowrap"],["id","modify",1,"btn","btn-sm","me-1",3,"routerLink"],["id","delete",1,"btn","btn-sm","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(n,e){1&n&&(t.TgZ(0,"h1"),t._uU(1),t.qZA(),t.TgZ(2,"a",0),t._uU(3,"Fog\xe1sok bevitele"),t.qZA(),t.TgZ(4,"table",1)(5,"thead")(6,"tr")(7,"th",2),t._uU(8,"\xc9v"),t.qZA(),t.TgZ(9,"th",2),t._uU(10,"Ponty"),t.qZA(),t.TgZ(11,"th",2),t._uU(12,"S\xfcll\u0151"),t.qZA(),t.TgZ(13,"th",2),t._uU(14,"Harcsa"),t.qZA(),t._UZ(15,"th",2),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,O,15,8,"tr",3),t.YNc(18,J,3,0,"tr",4),t.qZA()(),t.TgZ(19,"footer",5)(20,"div",6)(21,"div",7)(22,"div",8)(23,"h4",9),t._uU(24,"Social Media el\xe9rhet\u0151s\xe9geink:"),t.qZA(),t.TgZ(25,"a",10),t._UZ(26,"img",11),t.qZA(),t.TgZ(27,"a",12),t._UZ(28,"img",13),t.qZA(),t.TgZ(29,"a",14),t._UZ(30,"img",15),t.qZA(),t.TgZ(31,"p",16),t._uU(32,"\xa9 Aranyhal Horg\xe1szegyes\xfclet 2023 minden jog fentartva!"),t.qZA()()()()()),2&n&&(t.xp6(1),t.AsE("",e.user.firstName," ",e.user.lastName," fog\xe1si napl\xf3ja"),t.xp6(16),t.Q6J("ngForOf",e.catches),t.xp6(1),t.Q6J("ngIf",!e.catches))},dependencies:[g.sg,g.O5,s.rH],styles:['h1[_ngcontent-%COMP%]:after{content:"";display:flex;background-color:#009459;width:100px;height:2px;margin:20px}tr[_ngcontent-%COMP%]{border-color:#009459}#admin[_ngcontent-%COMP%]{margin-bottom:20px;padding:8px;background:#009459;color:#fff;border:none;border-radius:5px}#admin[_ngcontent-%COMP%]:hover{background:#00643c;color:#fff;border:none;transition:all .3s}#modify[_ngcontent-%COMP%]{margin-right:20px;padding:8px;background:#009459;color:#fff;border:none;border-radius:5px}#modify[_ngcontent-%COMP%]:hover{margin-right:20px;padding:8px;background:#00643c;color:#fff;border:none;border-radius:5px;transition:all .3s}#delete[_ngcontent-%COMP%]{margin-left:10px;padding:7px;background:none;color:#009459;border-radius:5px;text-decoration:none}#delete[_ngcontent-%COMP%]:hover{padding:7px;background:#00643c;color:#fff;border:none;border-radius:5px;transition:all .3s}footer[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;display:flex;justify-content:center;text-align:center;margin-top:30px;background:#009459;color:#fff}.footer-heading[_ngcontent-%COMP%]{margin-top:20px}.footer-img[_ngcontent-%COMP%]{margin:15px 10px;max-width:35px;color:#fff;cursor:pointer}.footer-text[_ngcontent-%COMP%]{margin-bottom:20px}']});const I=[{path:"",component:u,children:[{path:"",component:p},{path:"add",component:c},{path:"edit/:id",component:c}]}];class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[s.Bz.forChild(I),s.Bz]});class l{}l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.ez,r.UX,d]})}}]);