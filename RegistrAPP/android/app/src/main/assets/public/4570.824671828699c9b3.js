"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4570],{4570:(U,p,a)=>{a.r(p),a.d(p,{HomePageModule:()=>x});var h=a(6814),s=a(6728),m=a(6223),d=a(7742),u=a(2058),t=a(2029),f=a(9862);let v=(()=>{var n;class e{constructor(r){this.http=r,this.apiUrl="http://localhost:3000"}getEmail(){return this.http.get(`${this.apiUrl}/asistencia_duoc/usuario/correo`)}getUserById(r){return this.http.get(`${this.apiUrl}/asistencia_duoc/${r}`)}getPassword(r){return this.http.get(`${this.apiUrl}/asistencia_duoc/usuario/contrasena/${r}`)}getUsers(){return this.http.get(`${this.apiUrl}/asistencia_duoc/usuario`)}}return(n=e).\u0275fac=function(r){return new(r||n)(t.LFG(f.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),e})();var y=a(4793),P=a(9363);function M(n,e){if(1&n){const i=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){t.CHM(i);const c=t.oxw();return t.KtG(c.GenerarQR())}),t._uU(1,"Generar QR"),t.qZA()}}function S(n,e){1&n&&t._UZ(0,"qrcode",6),2&n&&t.Q6J("qrdata","Your data string")("width",256)("errorCorrectionLevel","M")}const C=[{path:"",component:(()=>{var n;class e{constructor(r,c,w,Q,R){this.activatedRoute=r,this.apiService=c,this.router=w,this.barcodeScanner=Q,this.asistenciaService=R,this.activatedRoute.queryParams.subscribe(A=>{var l,g;null!==(l=this.router.getCurrentNavigation())&&void 0!==l&&l.extras.state&&(this.state=null===(g=this.router.getCurrentNavigation())||void 0===g?void 0:g.extras.state,this.user=this.state.user,console.log(this.user),"alumno"==this.user.rol?this.scanCode():this.teacher=!0)})}GenerarQR(){this.showQr=!0}scanCode(){this.barcodeScanner.scan().then(r=>{console.log("C\xf3digo escaneado:",r)}).catch(r=>{console.error("Error al escanear el c\xf3digo de barras",r)})}ngOnInit(){this.apiService.getEmail().subscribe(r=>{this.datos=r})}}return(n=e).\u0275fac=function(r){return new(r||n)(t.Y36(u.gz),t.Y36(v),t.Y36(u.F0),t.Y36(y.m),t.Y36(P.l))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:13,vars:5,consts:[[3,"translucent"],[3,"fullscreen"],["src","https://upload.wikimedia.org/wikipedia/commons/a/aa/Logo_DuocUC.svg"],["mat-button","","color","warn",3,"click",4,"ngIf"],[3,"qrdata","width","errorCorrectionLevel",4,"ngIf"],["mat-button","","color","warn",3,"click"],[3,"qrdata","width","errorCorrectionLevel"]],template:function(r,c){1&r&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3," RegistrAPP "),t.qZA()()(),t.TgZ(4,"ion-content",1)(5,"ion-card"),t._UZ(6,"img",2),t.TgZ(7,"ion-card-header")(8,"ion-card-title"),t._uU(9),t.qZA(),t.TgZ(10,"ion-card-content"),t.YNc(11,M,2,0,"button",3),t.YNc(12,S,1,3,"qrcode",4),t.qZA()()()()),2&r&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(5),t.hij("Bienvenido ",c.user.username,""),t.xp6(2),t.Q6J("ngIf",c.teacher),t.xp6(1),t.Q6J("ngIf",c.showQr))},dependencies:[h.O5,s.PM,s.FN,s.Zi,s.Dq,s.W2,s.Gu,s.wd,s.sr,d.V],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()}];let b=(()=>{var n;class e{}return(n=e).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(C),u.Bz]}),e})();var D=a(7582),o=a(5291),H=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return(0,D.ZT)(e,n),e.prototype.prepare=function(){return(0,o.DM)(this,"prepare",{callbackStyle:"node"},arguments)},e.prototype.scan=function(){return(0,o.DM)(this,"scan",{callbackStyle:"node",observable:!0,clearFunction:"cancelScan"},arguments)},e.prototype.show=function(){return(0,o.DM)(this,"show",{},arguments)},e.prototype.hide=function(){return(0,o.DM)(this,"hide",{},arguments)},e.prototype.enableLight=function(){return(0,o.DM)(this,"enableLight",{callbackStyle:"node"},arguments)},e.prototype.destroy=function(){return(0,o.DM)(this,"destroy",{},arguments)},e.prototype.disableLight=function(){return(0,o.DM)(this,"disableLight",{callbackStyle:"node"},arguments)},e.prototype.useFrontCamera=function(){return(0,o.DM)(this,"useFrontCamera",{callbackStyle:"node"},arguments)},e.prototype.useBackCamera=function(){return(0,o.DM)(this,"useBackCamera",{callbackStyle:"node"},arguments)},e.prototype.useCamera=function(i){return(0,o.DM)(this,"useCamera",{callbackStyle:"node"},arguments)},e.prototype.pausePreview=function(){return(0,o.DM)(this,"pausePreview",{},arguments)},e.prototype.resumePreview=function(){return(0,o.DM)(this,"resumePreview",{},arguments)},e.prototype.getStatus=function(){return(0,o.DM)(this,"getStatus",{},arguments)},e.prototype.openSettings=function(){return(0,o.DM)(this,"openSettings",{sync:!0},arguments)},e.pluginName="QRScanner",e.plugin="cordova-plugin-qrscanner",e.pluginRef="QRScanner",e.repo="https://github.com/bitpay/cordova-plugin-qrscanner",e.platforms=["Android","Browser","iOS","Windows"],e.decorators=[{type:t.GSi}],e}(o.KY);let x=(()=>{var n;class e{}return(n=e).\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[H],imports:[h.ez,m.u5,s.Pc,d.N,b]}),e})()}}]);