System.register(["@angular/core","@angular/platform-browser","./app.component/app.component","./404.component/404.component","./server.component/server.component","./dashboard.component/dashboard.component","@angular/forms","@angular/router","@angular/http"],function(o,t){"use strict";var e,n,r,a,p,c,u,d,i,s,f,l=this&&this.__decorate||function(o,t,e,n){var r,a=arguments.length,p=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(o,t,e,n);else for(var c=o.length-1;c>=0;c--)(r=o[c])&&(p=(a<3?r(p):a>3?r(t,e,p):r(t,e))||p);return a>3&&p&&Object.defineProperty(t,e,p),p};t&&t.id;return{setters:[function(o){e=o},function(o){n=o},function(o){r=o},function(o){a=o},function(o){p=o},function(o){c=o},function(o){u=o},function(o){d=o},function(o){i=o}],execute:function(){s=[{path:"",redirectTo:"/dashboard",pathMatch:"full"},{path:"server",component:p.ServerComponent,data:{title:"Server"}},{path:"404",component:a.NotFoundComponent,data:{title:"Not Found"}},{path:"dashboard",component:c.DashboardComponent,data:{title:"Dash"}},{path:"**",redirectTo:"/404"}],f=function(){function o(){}return o}(),f=l([e.NgModule({imports:[n.BrowserModule,u.FormsModule,i.HttpModule,i.JsonpModule,d.RouterModule.forRoot(s)],declarations:[r.AppComponent,a.NotFoundComponent,c.DashboardComponent,p.ServerComponent],bootstrap:[r.AppComponent]})],f),o("AppModule",f)}}});
//# sourceMappingURL=app.module.js.map