"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5117],{5117:(v,g,r)=>{r.r(g),r.d(g,{RecuperarPageModule:()=>M});var d=r(6814),o=r(6728),s=r(6223),l=r(2058),h=r(5861),e=r(2029),m=r(5984);const P=[{path:"",component:(()=>{var n;class a{checkFieldLength(){this.errorMessage=this.inputValue4.length<1?"Debe ingresar al menos 1 dato":""}constructor(t,c){this.router=t,this.emailComposer=c,this.inputValue4="",this.errorMessage=""}recuperarContrasena(){this.router.navigate(["login"])}ngOnInit(){this.sendEmail("test@gmail.com","este es un correo de recuperaci\xf3n de contrase\xf1a","recuperaci\xf3n de contrase\xf1a")}sendEmail(t,c,u){var p=this;return(0,h.Z)(function*(){const C={to:t,subject:u,body:c};yield p.emailComposer.open(C).then(()=>{console.log("Correo abierto correctamente")}).catch(R=>{console.error("Error al abrir el correo",R)})})()}}return(n=a).\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(m.w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-recuperar"]],decls:9,vars:1,consts:[["label","usuario","labelPlacement","stacked","placeholder","Ingrese usuario","minlength","1",3,"ngModel","ngModelChange","input"],["expand","full",3,"click"]],template:function(t,c){1&t&&(e.TgZ(0,"ion-content")(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),e._uU(4," Recuperar Contrase\xf1a "),e.qZA()()(),e.TgZ(5,"ion-item")(6,"ion-input",0),e.NdJ("ngModelChange",function(p){return c.inputValue4=p})("input",function(){return c.checkFieldLength()}),e.qZA()(),e.TgZ(7,"ion-button",1),e.NdJ("click",function(){return c.recuperarContrasena()}),e._uU(8,"Recuperar Contrase\xf1a"),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("ngModel",c.inputValue4))},dependencies:[s.JJ,s.wO,s.On,o.YG,o.W2,o.Gu,o.pK,o.Ie,o.wd,o.sr,o.j9],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),a})()}];let f=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(P),l.Bz]}),a})(),M=(()=>{var n;class a{}return(n=a).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,s.u5,o.Pc,f]}),a})()}}]);