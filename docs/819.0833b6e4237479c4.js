"use strict";(self.webpackChunkangular_aranyhal_horgaszegyesulet=self.webpackChunkangular_aranyhal_horgaszegyesulet||[]).push([[819],{3819:(F,p,i)=>{i.r(p),i.d(p,{UserModule:()=>d});var l=i(6895),o=i(433),s=i(9230),g=i(590),e=i(8256),_=i(5055);function h(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Vezet\xe9kn\xe9v sz\xfcks\xe9ges"),e.qZA())}function b(t,r){if(1&t&&(e.TgZ(0,"div",16),e.YNc(1,h,2,0,"div",10),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.f.firstName.errors.required)}}function x(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Keresztn\xe9v sz\xfcks\xe9ges"),e.qZA())}function Z(t,r){if(1&t&&(e.TgZ(0,"div",16),e.YNc(1,x,2,0,"div",10),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.f.lastName.errors.required)}}function C(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"Felhaszn\xe1l\xf3n\xe9v sz\xfcks\xe9ges"),e.qZA())}function E(t,r){if(1&t&&(e.TgZ(0,"div",16),e.YNc(1,C,2,0,"div",10),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.f.username.errors.required)}}function T(t,r){1&t&&e._UZ(0,"em")}function A(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1,"A jelsz\xf3nak legal\xe1bb 6 karakternek kell lennie!"),e.qZA())}function U(t,r){if(1&t&&(e.TgZ(0,"div",16),e.YNc(1,A,2,0,"div",10),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.f.password.errors.minlength)}}function N(t,r){1&t&&e._UZ(0,"span",17)}const c=function(t){return{"is-invalid":t}};function q(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"form",2),e.NdJ("ngSubmit",function(){e.CHM(n);const f=e.oxw();return e.KtG(f.onSubmit())}),e.TgZ(1,"div",3)(2,"div",4)(3,"label",5),e._uU(4,"Vezet\xe9kn\xe9v"),e.qZA(),e._UZ(5,"input",6),e.YNc(6,b,2,1,"div",7),e.qZA(),e.TgZ(7,"div",4)(8,"label",5),e._uU(9,"Keresztn\xe9v"),e.qZA(),e._UZ(10,"input",8),e.YNc(11,Z,2,1,"div",7),e.qZA()(),e.TgZ(12,"div",3)(13,"div",4)(14,"label",5),e._uU(15,"Felhaszn\xe1l\xf3n\xe9v"),e.qZA(),e._UZ(16,"input",9),e.YNc(17,E,2,1,"div",7),e.qZA(),e.TgZ(18,"div",4)(19,"label",5),e._uU(20," Jelsz\xf3 (Jelszavad megtart\xe1s\xe1hoz hagyd \xfcresen) "),e.YNc(21,T,1,0,"em",10),e.qZA(),e._UZ(22,"input",11),e.YNc(23,U,2,1,"div",7),e.qZA(),e.TgZ(24,"div",12)(25,"button",13),e.YNc(26,N,1,0,"span",14),e._uU(27," Ment\xe9s "),e.qZA(),e.TgZ(28,"a",15),e._uU(29,"M\xe9gse"),e.qZA()()()()}if(2&t){const n=e.oxw();e.Q6J("formGroup",n.form),e.xp6(5),e.Q6J("ngClass",e.VKq(12,c,n.submitted&&n.f.firstName.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.firstName.errors),e.xp6(4),e.Q6J("ngClass",e.VKq(14,c,n.submitted&&n.f.lastName.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.lastName.errors),e.xp6(5),e.Q6J("ngClass",e.VKq(16,c,n.submitted&&n.f.username.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.username.errors),e.xp6(4),e.Q6J("ngIf",n.id),e.xp6(1),e.Q6J("ngClass",e.VKq(18,c,n.submitted&&n.f.password.errors)),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.f.password.errors),e.xp6(2),e.Q6J("disabled",n.submitting),e.xp6(1),e.Q6J("ngIf",n.submitting)}}function z(t,r){1&t&&(e.TgZ(0,"div",18),e._UZ(1,"span",19),e.qZA())}class u{constructor(r,n,v,f,J){this.formBuilder=r,this.route=n,this.router=v,this.accountService=f,this.alertService=J,this.loading=!1,this.submitting=!1,this.submitted=!1,this.user=this.accountService.userValue}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({firstName:["",o.kI.required],lastName:["",o.kI.required],username:["",o.kI.required],password:["",[o.kI.minLength(6),...this.id?[]:[o.kI.required]]]}),this.id&&(this.loading=!0,this.accountService.getById(this.id).pipe((0,g.P)()).subscribe(r=>{this.form.patchValue(r),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.submitting=!0,this.accountService.update(this.id,this.form.value).pipe((0,g.P)()).subscribe({next:()=>{this.alertService.success("A felhaszn\xe1l\xf3neved megv\xe1ltozott",{keepAfterRouteChange:!0}),this.router.navigateByUrl("/user/dashboard")},error:r=>{this.alertService.error(r),this.submitting=!1}}))}}u.\u0275fac=function(r){return new(r||u)(e.Y36(o.qu),e.Y36(s.gz),e.Y36(s.F0),e.Y36(_.BR),e.Y36(_.c9))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-edit"]],decls:11,vars:5,consts:[["class","form",3,"formGroup","ngSubmit",4,"ngIf"],["class","test-center m-5",4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col","mb-3"],[1,"form-label"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],[4,"ngIf"],["type","password","formControlName","password","placeholder","******",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"save",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/dashboard",1,"cancel"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"test-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(r,n){1&r&&(e.TgZ(0,"h1"),e._uU(1),e.qZA(),e.TgZ(2,"p")(3,"b"),e._uU(4),e.qZA(),e._UZ(5,"br"),e._uU(6,"amennyiben szeretn\xe9d m\xf3dos\xedtani az adataid, itt megteheted."),e._UZ(7,"br"),e._uU(8," A jelsz\xf3 \xfajb\xf3li megad\xe1sa nem k\xf6telez\u0151, csak akkor t\xf6ldsd ki, ha m\xf3dos\xedtani szeretn\xe9d jelszavad.\n"),e.qZA(),e.YNc(9,q,30,20,"form",0),e.YNc(10,z,2,0,"div",1)),2&r&&(e.xp6(1),e.AsE("",n.user.firstName," ",n.user.lastName," adatai"),e.xp6(3),e.hij("Kedves ",n.user.lastName,","),e.xp6(5),e.Q6J("ngIf",!n.loading),e.xp6(1),e.Q6J("ngIf",n.loading))},dependencies:[l.mk,l.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,s.rH],styles:['h1[_ngcontent-%COMP%]:after{content:"";display:flex;background-color:#009459;width:100px;height:2px;margin:20px}.save[_ngcontent-%COMP%]{margin-right:15px;padding:8px;background:#009459;color:#fff;border:none;border-radius:5px}.save[_ngcontent-%COMP%]:hover{margin-right:15px;padding:8px;background:#00643c;color:#fff;border:none;border-radius:5px;transition:all .3s}.cancel[_ngcontent-%COMP%]{padding:10px;background:#fff;color:#009459;border-radius:5px;text-decoration:none}.cancel[_ngcontent-%COMP%]:hover{padding:9px 10px;background:#00643c;color:#fff;border:none;border-radius:5px;transition:all .3s}']});class m{}m.\u0275fac=function(r){return new(r||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-layout"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(r,n){1&r&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"router-outlet"),e.qZA()())},dependencies:[s.lC]});var k=i(4034);const y=[{path:"",component:m,children:[{path:"dashboard",component:k.M},{path:"edit/:id",component:u}]}];class a{}a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[s.Bz.forChild(y),s.Bz]});class d{}d.\u0275fac=function(r){return new(r||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[l.ez,o.UX,a]})}}]);