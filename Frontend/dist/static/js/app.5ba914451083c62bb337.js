webpackJsonp([1],{"1/oy":function(e,t){},"5AqT":function(e,t){},"6aFB":function(e,t){},"7aQ8":function(e,t){},"9M+g":function(e,t){},AUWB:function(e,t){},D4uH:function(e,t,a){"use strict";var s={},o={name:"icon",props:{name:{type:String,validator:function(e){return e?e in s||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,a=e.height;return Math.max(t,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,a,s){var o="fa-"+(n++).toString(16);return t[s]=o,' id="'+o+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,a,s,o){var n=a||o;return n&&t[n]?"#"+t[n]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,a=0;this.$children.forEach(function(e){t=Math.max(t,e.width),a=Math.max(a,e.height)}),this.childrenWidth=t,this.childrenHeight=a,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(a-e.height)/2})}},register:function(e){for(var t in e){var a=e[t];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),s[t]=a}},icons:s},n=870711;var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,s){return a("path",e._b({key:"path-"+s},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,s){return a("polygon",e._b({key:"polygon-"+s},"polygon",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[a("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var r=a("VU/8")(o,i,!1,function(e){a("5AqT")},null,null);t.a=r.exports},EYzp:function(e,t){},Id91:function(e,t){},Ioq6:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("b-container",[t("t-nav"),this._v(" "),t("div",{staticClass:"content"},[t("router-view",{key:this.$route.fullPath})],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},o,!1,function(e){a("XIow")},null,null).exports,i=a("NYxO"),r=a("sUu7"),l=a("/ocq"),c=a("Dd8w"),d=a.n(c),u=a("mtWM"),m=a.n(u);s.a.use(i.a);var h={isLogged:!!localStorage.getItem("token")},v=new i.a.Store({strict:!1,state:h,mutations:{login:function(e){e.isLogged=!0},logout:function(e){e.isLogged=!1}}}),f=a("vdhV"),p=a.n(f),g=a("j82m"),_=a.n(g),b=(m.a.create({baseURL:"http://localhost:56761/api/data/",timeout:1e3,headers:{Authorization:localStorage.getItem("token")}}),m.a.create({baseURL:"http://localhost:56761/api/data/"})),x={name:"login",data:function(){return{user:"",pass:"",show:!1,form:{Name:"",LastName:"",Login:"",Password:"",Age:"",Gender:null,Location:"",Occupation:"",About:"",Interests:[],LookFor:null},genders:[{value:null,text:"Select your gender"},{value:"Male",text:"Male"},{value:"Female",text:"Female"}],tag:"",autocompleteItems:_.a}},beforeCreate:function(){v.state.isLogged&&B.push("Profile")},created:function(){},computed:{filteredItems:function(){var e=this;return this.autocompleteItems.filter(function(t){return new RegExp(e.tag,"i").test(t.text)})}},methods:{update:function(e){this.autocompleteItems=[],this.tags=e},mapInterests:function(e){return e.map(function(e){return e.text})},login:function(){var e="username="+this.user+"&password="+this.pass+"&grant_type=password";m.a.post("http://localhost:56761/token",e,{timeout:3e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){var t=e.data.token_type+" "+e.data.access_token;localStorage.setItem("token",t),v.commit("login"),m.a.get("http://localhost:56761/api/data/authenticate",{headers:{Authorization:t}}).then(function(e){localStorage.setItem("id",e.data.m_value),alert("Successfully logged in"),B.push("Profile"),location.reload()})}).catch(function(e){console.log(e),alert("Incorrect username or password")})},register:function(){var e=d()({},this.form);e.Interests=this.mapInterests(e.Interests),b.post("register",e).then(function(e){1==e.data&&(alert("Successfully registered"),location.reload())})},validate:function(e){var t=this;console.log("OK");var a=e;this.$validator.validateAll(e).then(function(e){e&&("loginform"==a?t.login():"registerform"==a&&t.register())})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"index",staticStyle:{margin:"0 auto",display:"table",height:"100vh"}},[a("div",{staticClass:"d-flex justify-content-center",staticStyle:{display:"table-cell!important","text-align":"center","vertical-align":"middle",height:"300px"}},[a("div",{staticClass:"card card-block d-table-cell align-middle"},[a("b-card-body",[a("b-form",{attrs:{"data-vv-scope":"loginform"},on:{submit:function(t){t.preventDefault(),e.validate("loginform")}}},[a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:4|max:12",expression:"'required|min:4|max:12'"}],class:{input:!0,"is-danger":e.errors.has("loginform.user")},attrs:{name:"user",type:"text",placeholder:"Username",id:"username"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:4|max:12",expression:"'required|min:4|max:12'"}],class:{input:!0,"is-danger":e.errors.has("loginform.pass")},attrs:{name:"pass",type:"password",placeholder:"Password",id:"password"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}})],1),e._v(" "),a("b-dd-divider"),e._v(" "),a("b-button",{staticClass:"btn btn-primary btn-sm btn-block",attrs:{variant:"success"},on:{click:function(t){t.preventDefault(),e.validate("loginform")}}},[e._v(" Login ")])],1),e._v(" "),a("small",{staticClass:"text-muted"},[e._v("or if you are a new user")]),e._v(" "),a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-center",modifiers:{"modal-center":!0}}],staticClass:"btn btn-primary btn-sm btn-block",attrs:{variant:"info"},on:{click:function(t){e.show=!0}}},[e._v(" Register ")]),e._v(" "),a("b-modal",{attrs:{id:"modal-center",centered:"",title:"Registration form","cancel-disabled":"","ok-disabled":"","hide-footer":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("b-form",{attrs:{"data-vv-scope":"registerform"},on:{submit:function(t){t.preventDefault(),e.validateForm("registerform")}}},[a("b-col",[a("label",[e._v("First name")]),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha|min:2|max:12",expression:"'required|alpha|min:2|max:12'"}],class:{input:!0,"is-danger":e.errors.has("loginform.name")},attrs:{name:"name",type:"text",placeholder:"First name",id:"name"},model:{value:e.form.Name,callback:function(t){e.$set(e.form,"Name",t)},expression:"form.Name"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerfrom.name"),expression:"errors.has('registerfrom.name')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerfrom.name")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v("Last name")]),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha|min:2|max:12",expression:"'required|alpha|min:2|max:12'"}],class:{input:!0,"is-danger":e.errors.has("loginform.lastname")},attrs:{name:"lastname",type:"text",placeholder:"Your last name",id:"lastname"},model:{value:e.form.LastName,callback:function(t){e.$set(e.form,"LastName",t)},expression:"form.LastName"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.lastname"),expression:"errors.has('registerform.lastname')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.lastname")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" Username ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:4|max:12",expression:"'required|min:4|max:12'"}],class:{input:!0,"is-danger":e.errors.has("registerform.username")},attrs:{name:"username",type:"text",placeholder:"Username"},model:{value:e.form.Login,callback:function(t){e.$set(e.form,"Login",t)},expression:"form.Login"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.username"),expression:"errors.has('registerform.username')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.username")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" Password ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:4|max:12",expression:"'required|alpha_dash|min:4|max:12'"}],class:{input:!0,"is-danger":e.errors.has("registerform.password")},attrs:{name:"password",type:"password",placeholder:"Password"},model:{value:e.form.Password,callback:function(t){e.$set(e.form,"Password",t)},expression:"form.Password"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.password"),expression:"errors.has('registerform.password')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.password")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" Age ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min_value:18|max_value:99|numeric",expression:"'required|min_value:18|max_value:99|numeric'"}],class:{input:!0,"is-danger":e.errors.has("registerform.age")},attrs:{name:"age",type:"number",placeholder:"Your age"},model:{value:e.form.Age,callback:function(t){e.$set(e.form,"Age",t)},expression:"form.Age"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.age"),expression:"errors.has('registerform.age')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.age")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" Gender ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required|in:Male,Female",expression:"'required|in:Male,Female'"}],class:{input:!0,"is-danger":e.errors.has("registerform.gender")},attrs:{name:"gender",type:"text",options:e.genders},model:{value:e.form.Gender,callback:function(t){e.$set(e.form,"Gender",t)},expression:"form.Gender"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.gender"),expression:"errors.has('registerform.gender')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.gender")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" Location ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{input:!0,"is-danger":e.errors.has("registerform.location")},attrs:{name:"location",type:"text",placeholder:"Location"},model:{value:e.form.Location,callback:function(t){e.$set(e.form,"Location",t)},expression:"form.Location"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.location"),expression:"errors.has('registerform.location')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.location")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" Occupation ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{input:!0,"is-danger":e.errors.has("registerform.occupation")},attrs:{name:"occupation",type:"text",placeholder:"Occupation"},model:{value:e.form.Occupation,callback:function(t){e.$set(e.form,"Occupation",t)},expression:"form.Occupation"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.occupation"),expression:"errors.has('registerform.occupation')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.occupation")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" About ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{input:!0,"is-danger":e.errors.has("registerform.about")},attrs:{name:"about",placeholder:"A few sentences about yourself","no-resize":"",type:"text"},model:{value:e.form.About,callback:function(t){e.$set(e.form,"About",t)},expression:"form.About"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.about"),expression:"errors.has('registerform.about')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.about")))])],1)]),e._v(" "),a("b-dd-divider"),e._v(" "),a("small",[e._v("Search preferences")]),e._v(" "),a("b-col",[a("label",[e._v(" Seeking for ")]),e._v(" "),a("p",{class:{control:!0}},[a("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required|in:Male,Female",expression:"'required|in:Male,Female'"}],class:{input:!0,"is-danger":e.errors.has("registerform.lookfor")},attrs:{name:"lookfor",type:"text",options:e.genders},model:{value:e.form.LookFor,callback:function(t){e.$set(e.form,"LookFor",t)},expression:"form.LookFor"}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("registerform.lookfor"),expression:"errors.has('registerform.lookfor')"}],staticClass:"help is-danger text-danger"},[e._v(e._s(e.errors.first("registerform.lookfor")))])],1)]),e._v(" "),a("b-col",[a("label",[e._v(" Interests ")]),e._v(" "),a("vue-tags-input",{attrs:{tags:e.form.Interests,"add-only-from-autocomplete":!0,"autocomplete-items":e.filteredItems},on:{"tags-changed":function(t){return e.form.Interests=t}},model:{value:e.tag,callback:function(t){e.tag=t},expression:"tag"}})],1),e._v(" "),a("b-dd-divider"),e._v(" "),a("b-btn",{staticClass:"float-right",attrs:{size:"md",variant:"success"},on:{click:function(t){t.preventDefault(),e.validate("registerform")}}},[e._v("\n              Register\n            ")]),e._v(" "),a("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("b-btn",{staticClass:"float-right",attrs:{size:"md",variant:"warning"},on:{click:function(t){e.show=!1}}},[e._v("\n                Cancel\n              ")])],1),e._v(" "),a("div",{attrs:{slot:"modal-ok"},on:{click:function(t){t.preventDefault(),e.validate("registerform")}},slot:"modal-ok"})],1)],1)],1)],1)])])},staticRenderFns:[]};var C=a("VU/8")(x,w,!1,function(e){a("VRQM")},null,null).exports,k={name:"logout",mounted:function(){localStorage.removeItem("token"),localStorage.removeItem("id"),v.commit("logout"),B.push("Login"),location.reload()}},y={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"logout"})},staticRenderFns:[]},I=a("VU/8")(k,y,!1,null,null,null).exports,S=m.a.create({baseURL:"http://localhost:56761/api/data/",headers:{Authorization:localStorage.getItem("token")}}),L={name:"Profile",beforeCreate:function(){v.state.isLogged?void 0!==localStorage.getItem("id")&&null!==localStorage.getItem("id")||S.get("authenticate").then(function(e){console.log(e),localStorage.setItem("id",e.data.m_value)}).catch(function(e){B.push("Logout"),location.reload()}):B.push("Login")},methods:{logoff:function(){B.push("Logout")},upload:function(){console.log(this.file);var e=new FormData;e.append("file",this.file),S.post("http://localhost:56761/api/data/upload",e).then(function(e){console.log(e),location.reload()})}},data:function(){return{info:{},show:!0,file:null,id:localStorage.getItem("id")}},created:function(){var e=this;S.post("user",{Id:this.id}).then(function(t){e.show=!1,e.info=t.data})}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"userprofile"},[a("div",{staticClass:"container"},[a("div",{staticClass:"profile"},[a("div",{staticClass:"profile_image",style:{backgroundImage:"url("+e.info.Photo+")"}},[a("label",{attrs:{for:"upload"}},[a("icon",{attrs:{name:"image"}}),e._v(" "),a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"upload","v-model":e.file}})],1),e._v(" "),a("div",{staticClass:"profile_image_buttons"},[a("button",{staticClass:"profile_button btn btn-primary like_button",attrs:{type:"button"}},[e._v("Settings")]),e._v(" "),a("button",{staticClass:"profile_button btn btn-secondary dislike_button",attrs:{type:"button"},on:{click:e.logoff}},[e._v("Log out")])])]),e._v(" "),a("b-card",{staticClass:"profile_info"},[a("div",{staticClass:"card-block"},[a("h4",{staticClass:"card-title"},[e._v(e._s(e.info.Name)+", "+e._s(e.info.Age))]),e._v(" "),a("div",{staticClass:"card-text"},[a("h5",{staticClass:"profile_info_item"},[a("icon",{attrs:{name:"home"}}),e._v(" Location: "+e._s(e.info.Location))],1),e._v(" "),a("h5",{staticClass:"profile_info_item"},[e._v("Occupation: "+e._s(e.info.Occupation))]),e._v(" "),a("h5",{staticClass:"profile_info_item"},[a("icon",{attrs:{name:"info"}}),e._v(" About: "+e._s(e.info.About)+"\n            ")],1),e._v(" "),a("h5",{staticClass:"profile_info_item"},[a("icon",{attrs:{name:"tasks"}}),e._v("Interests:\n            ")],1),e._v(" "),e._l(e.info.Interests,function(t){return a("div",[a("h6",{staticClass:"profile_info_item"},[e._v(e._s(t))])])})],2)]),e._v(" "),a("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Upload a new photo"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),e._v(" "),a("b-button",{staticClass:"profile_button",on:{click:function(t){e.upload()}}},[e._v("Change photo")])],1)],1),e._v(" "),a("b-modal",{staticClass:"loading-Modal",attrs:{id:"modal-center",centered:"","cancel-disabled":"","ok-disabled":"","hide-header":"","hide-footer":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("icon",{attrs:{name:"refresh",scale:"3",spin:""}})],1)],1)])},staticRenderFns:[]};var A=a("VU/8")(L,N,!1,function(e){a("7aQ8")},null,null).exports,F=m.a.create({baseURL:"http://localhost:56761/api/data/",headers:{Authorization:localStorage.getItem("token")}}),M={name:"search",data:function(){return{info:null,show:!0,id:localStorage.getItem("id")}},created:function(){this.getSuggestion()},methods:{getSuggestion:function(){var e=this;F.post("suggestion",{Id:e.id}).then(function(t){e.show=!1,e.info=t.data})},like:function(){var e=this;this.show=!0,F.post("like",{Id:this.id,Partnerid:this.info.Id}).then(function(t){"OK"==t.statusText&&(e.info=null,e.getSuggestion())})},dislike:function(){var e=this;this.show=!0,F.post("dislike",{Id:this.id,Partnerid:this.info.Id}).then(function(t){console.log(t),t&&e.getSuggestion()})}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchprofile"},[null!==e.info?a("div",{staticClass:"d-flex justify-content-center"},[a("div",{staticClass:"container"},[a("div",{staticClass:"search"},[a("div",{staticClass:"search_image",style:{backgroundImage:"url("+e.info.Photo+")"}},[a("div",{staticClass:"search_image_buttons"},[a("button",{staticClass:"btn btn-primary search_button",attrs:{type:"button"},on:{click:e.like}},[a("icon",{attrs:{name:"thumbs-up"}})],1),e._v(" "),a("button",{staticClass:"btn btn-secondary search_button",attrs:{type:"button"},on:{click:e.dislike}},[a("icon",{attrs:{name:"thumbs-down"}})],1)])]),e._v(" "),a("b-card",{staticClass:"search_info"},[a("div",{staticClass:"card-block"},[a("h4",{staticClass:"card-title"},[e._v(e._s(e.info.Name)+", "+e._s(e.info.Age))]),e._v(" "),a("div",{staticClass:"card-text"},[a("h5",{staticClass:"search_info_item"},[a("icon",{attrs:{name:"home"}}),e._v("Location: "+e._s(e.info.Location))],1),e._v(" "),a("h5",{staticClass:"search_info_item"},[a("icon",{attrs:{name:"briefcase"}}),e._v(" Occupation: "+e._s(e.info.Occupation))],1),e._v(" "),a("h5",{staticClass:"search_info_item"},[a("icon",{attrs:{name:"info"}}),e._v(" About: "+e._s(e.info.About)+"\n              ")],1),e._v(" "),a("h5",{staticClass:"search_info_item"},[a("icon",{attrs:{name:"tasks"}}),e._v("Interests:\n              ")],1),e._v(" "),e._l(e.info.Interests,function(t){return a("div",[a("h6",{staticClass:"search_info_item"},[e._v(e._s(t))])])})],2)])])],1)])]):a("div",[a("b-dd-divider"),e._v(" "),e.show?e._e():a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("No suggestions found. Please try again later.")])],1),e._v(" "),a("b-modal",{staticClass:"loading-Modal",attrs:{id:"modal-center",centered:"","cancel-disabled":"","ok-disabled":"","hide-header":"","hide-footer":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("icon",{attrs:{name:"refresh",scale:"3",spin:""}})],1)],1)},staticRenderFns:[]};var P=a("VU/8")(M,q,!1,function(e){a("Ioq6")},null,null).exports,T=(a("Ulgg"),a("7t+N")),U=a.n(T),z=m.a.create({baseURL:"http://localhost:56761/api/data/",headers:{Authorization:localStorage.getItem("token")}}),R={name:"chat",data:function(){return{conversations:null,selectedConversation:null,messageToAdd:"",messages:[],partners:[],connection:null,proxy:null,chatId:null,id:localStorage.getItem("id"),show:!0,userid:null,username:null}},methods:{connectchat:function(){var e=this;this.proxy.invoke("Connect",this.id,this.chatId).done(function(){console.log("Connect to chat -"+e.chatId)}).fail(function(){location.reload(),console.log("something went wrong")})},sendMessage:function(){var e=this;if(""===this.messageToAdd)return!0;this.proxy.invoke("Send",this.messageToAdd,this.chatId,this.conversations[this.selectedConversation].UserNames[this.userid]).done(function(){e.animateScroll(),e.messageToAdd=""}).fail(function(e){console.log(e)})},retrieveMessages:function(){var e=this;this.animateScroll(),z.post("conversation",{id:this.chatId}).then(function(t){e.show=!1,t.data.Messages.forEach(function(t){e.messages.push({From:t.From,Text:t.Text,Time:t.Time})}),e.animateScroll()})},selectChat:function(e,t){this.show=!0,this.selectedConversation=t,this.chatId=e,this.userid=this.conversations[t].Users[0]===this.id?0:1,this.username=this.conversations[this.selectedConversation].UserNames[this.userid],this.connectchat(),this.retrieveMessages()},animateScroll:function(){var e=U.a;e("html, body").animate({scrollTop:e(document).height()},1e3)}},updated:function(){},beforeMount:function(){var e=this;this.connection=$.hubConnection("http://localhost:56761/signalr"),this.proxy=this.connection.createHubProxy("ChatHub"),this.proxy.on("sendMessage",function(t,a){var s=new Date(Date.now()),o=s.getHours()+":"+s.getMinutes()+":"+s.getSeconds();e.messages.push({From:t,Text:a,Time:o})}),this.connection.start({jsonp:!0}).done(function(){console.log("Now connected, connection ID="+e.connection.id)}).fail(function(){location.reload(),console.log("Could not connect")})},beforeCreate:function(){void 0!==localStorage.getItem("id")&&null!==localStorage.getItem("id")||z.get("authenticate").then(function(e){console.log(e),localStorage.setItem("id",e.data.m_value)})},created:function(){console.log(this.$parent.$refs);var e=this;z.post("conversations",{Id:this.id}).then(function(t){e.show=!1,e.conversations=t.data,null!==t.data&&e.conversations.forEach(function(t){var a=t.Users[0]===e.id?1:0;e.partners.push(a)})})}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chat"},[null===e.chatId?a("div",{staticClass:"ui huge animated divided selection list"},e._l(e.conversations,function(t,s){return a("div",{key:s,staticClass:"item",attrs:{id:t.Id},on:{click:function(a){e.selectChat(t.Id,s)}}},[a("img",{staticClass:"ui avatar image",attrs:{src:t.Photos[e.partners[s]]}}),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[e._v(e._s(t.UserNames[e.partners[s]]))]),e._v("\n        "+e._s(t.Messages[0].From)+": "+e._s(t.Messages[0].Text.substring(0,10).trim())+"..\n      ")])])})):e._e(),e._v(" "),null!==e.conversations?a("div",{attrs:{id:"scroll"}},[null===e.chatId?a("div",{staticClass:"conversations"}):e._e(),e._v(" "),null!==e.chatId?a("div",{ref:"chatwindow",staticClass:"chatwindow",attrs:{id:"chatWindow"}},[e.show?e._e():a("div",{staticClass:"ui comments"},[e._l(e.messages,function(t,s){return a("div",{key:s,staticClass:"comment"},[a("a",{staticClass:"avatar"},[t.From==e.username?a("img",{attrs:{src:e.conversations[e.selectedConversation].Photos[e.userid]}}):a("img",{attrs:{src:e.conversations[e.selectedConversation].Photos[(e.userid+1)%2]}})]),e._v(" "),a("div",{staticClass:"content"},[a("a",{staticClass:"author"},[e._v(e._s(t.From))]),e._v(" "),a("div",{staticClass:"metadata"},[a("span",{staticClass:"date"},[e._v(e._s(t.Time))])]),e._v(" "),a("div",{staticClass:"text"},[e._v("\n              "+e._s(t.Text)+"\n            ")])])])}),e._v(" "),a("b-form-input",{attrs:{type:"text",id:"messageArea",placeholder:"Your message"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.sendMessage(t):null}},model:{value:e.messageToAdd,callback:function(t){e.messageToAdd=t},expression:"messageToAdd"}})],2)]):e._e()]):a("div",[a("b-dd-divider"),e._v(" "),e.show?e._e():a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v('No conversations were found. Use "Search" function to find some friends.')])],1),e._v(" "),a("b-modal",{staticClass:"loading-Modal",attrs:{id:"modal-center",centered:"","cancel-disabled":"","ok-disabled":"","hide-header":"","hide-footer":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("icon",{attrs:{name:"refresh",scale:"3",spin:""}})],1)],1)},staticRenderFns:[]};var O=a("VU/8")(R,E,!1,function(e){a("EYzp")},null,null).exports;s.a.use(l.a);var D=[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:C},{path:"/logout",name:"Logout",component:I},{path:"/profile",name:"Profile",component:A},{path:"/search",name:"Search",component:P},{path:"/chat",name:"Chat",component:O},{path:"*",redirect:"/login"}],B=new l.a({mode:"history",base:"/",routes:D}),H={name:"t-nav",data:function(){return{loggedIn:v.state.isLogged}},created:function(){},methods:{goto:function(e){"Chat"==e&&"/Chat"==this.$route.path&&location.reload(),$("#nav_text_collapse > ul > li").find("a").removeClass("active"),$(event.target).addClass("active"),this.loggedIn=v.state.isLogged,v.state.isLogged?B.push(e):B.push("Login")}}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loggedIn?a("b-navbar",{staticClass:"fixed-top",attrs:{toggleable:"",type:"dark",variant:"dark"}},[a("b-navbar-brand",[e._v("Dating App")]),e._v(" "),a("b-navbar-toggle",{attrs:{target:"nav_text_collapse"}}),e._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_text_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{ref:"search",on:{click:function(t){e.goto("Search")}}},[e._v("Search")]),e._v(" "),a("b-nav-item",{ref:"chat",on:{click:function(t){e.goto("Chat")}}},[e._v("Chat")]),e._v(" "),a("b-nav-item",{ref:"profile",on:{click:function(t){e.goto("Profile")}}},[e._v("Profile")]),e._v(" "),a("b-nav-item",{attrs:{right:""},on:{click:function(t){e.goto("Logout")}}},[e._v("Log Out")])],1)],1)],1):e._e()},staticRenderFns:[]},W=a("VU/8")(H,V,!1,null,null,null).exports,j=a("e6fC"),G=(a("Jmt5"),a("9M+g"),a("AUWB"),a("6aFB"),a("hp6k"),a("r85i"),a("cOEn")),Y=(a("D/PP"),a("D4uH"));s.a.use(j.a),s.a.use(r.a),s.a.use(i.a),s.a.use(G.Image),s.a.use(G.Card),s.a.use(G.Form),s.a.use(G.Button),s.a.use(G.Nav),s.a.component("icon",Y.a),s.a.component(p.a.name,p.a),s.a.component(W.name,W),s.a.config.productionTip=!1,new s.a({el:"#app",router:B,store:v,components:{App:n},template:"<App/>"})},VRQM:function(e,t){},XIow:function(e,t){},hp6k:function(e,t){},j82m:function(e,t){e.exports=[{text:"Reading"},{text:"Watching TV"},{text:"Movies​"},{text:"Fishing​"},{text:"Computer​"},{text:"Gardening​"},{text:"Walking​"},{text:"Exercise​"},{text:"Hunting​"},{text:"Shopping​"},{text:"Traveling​"},{text:"Socializing​"},{text:"Golf​"},{text:"Music​"},{text:"Crafts​"},{text:"Bicycling​"},{text:"Hiking​"},{text:"Cooking​"},{text:"Swimming​"},{text:"Camping​"},{text:"Skiing​"},{text:"Cars​"},{text:"Writing​"},{text:"Boating​"},{text:"Motorcycling​"},{text:"Bowling​"},{text:"Painting​"},{text:"Running​"},{text:"Dancing​"},{text:"Tennis​"},{text:"Theater​"},{text:"Billiards​"}]},r85i:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5ba914451083c62bb337.js.map