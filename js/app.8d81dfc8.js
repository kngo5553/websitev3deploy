(function(e){function t(t){for(var n,i,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",dense:""}},[a("v-btn",{attrs:{href:"https://www.linkedin.com/in/kevinthachngo/",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Linkedin")]),a("v-icon",[e._v("mdi-linkedin")])],1),a("v-btn",{attrs:{href:"https://github.com/kngo5553",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Github")]),a("v-icon",[e._v("mdi-github")])],1),a("v-btn",{attrs:{href:"/static/resume-aug-2020v2.pdf",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[e._v("Resume")]),a("v-icon",[e._v("mdi-file-account")])],1),a("v-spacer"),a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vue Logo",contain:"",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",transition:"scale-transition",width:"40"}})],1),a("v-main",[a("Home")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},[a("v-card",{attrs:{shaped:"","max-width":"450"}},[a("v-card-title",[a("v-row",{attrs:{justify:"center"}},[a("h1",[e._v("Kevin Thach Ngo")])])],1),a("v-card-subtitle",[e._v("Software Engineer")]),a("v-card-text",{staticClass:"subtitle-1"},[a("p",[e._v("Hey, welcome to my simple website. Important links are at the top, contact information is here, and my work timeline is right below.")]),a("p",[a("strong",[e._v("Mobile number:")]),e._v(" 0423031873 ")]),a("p",[a("strong",[e._v("Email:")]),e._v(" kevin.thach.ngo@gmail.com ")])])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-timeline",{attrs:{dense:""}},[a("v-timeline-item",{attrs:{icon:"mdi-clipboard-account",color:"blue darken-4 mb-3"}},[a("v-card",{attrs:{ripple:{center:!0}}},[a("v-card-title",{staticClass:"blue darken-4 mb-3",staticStyle:{"word-break":"normal"}},[e._v(" Employment Status "),a("v-spacer"),e._v(" "+e._s(e.monthYear)+" ")],1),a("v-card-text",[a("h3",[e._v("Contract ending. Looking for new employment opportunities!")])])],1)],1),e._l(e.items,(function(t){return a("v-timeline-item",{key:t.id,attrs:{icon:t.icon,color:t.colourClass}},[a("v-lazy",{staticClass:"fill-height",attrs:{options:{threshold:.5},transition:"fade-transition"},model:{value:t.isActive,callback:function(a){e.$set(t,"isActive",a)},expression:"item.isActive"}},[a("v-card",{staticClass:"fill-height"},[a("v-card-title",{class:t.colourClass,staticStyle:{"word-break":"normal"}},[a("span",{staticClass:"pr-0"},[e._v(e._s(t.title)+" | "+e._s(t.subtitle))]),t.subtitleLink?a("v-btn",{attrs:{href:t.subtitleLink,target:"_blank",text:"",small:""}},[a("v-icon",[e._v("mdi-open-in-new")])],1):e._e(),a("v-spacer"),a("span",{staticClass:"text-right"},[e._v(e._s(t.date))])],1),a("v-carousel",{attrs:{cycle:"",interval:"15000","hide-delimiter-background":"","show-arrows-on-hover":""}},e._l(t.images,(function(n){return a("v-carousel-item",{key:n.id,attrs:{src:n.src,"lazy-src":"/static/placeholder.svg"},on:{click:function(a){return a.stopPropagation(),e.$set(e.dialog,n.src+t.title,!0)}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[a("v-dialog",{attrs:{"max-width":"1600"},model:{value:e.dialog[n.src+t.title],callback:function(a){e.$set(e.dialog,n.src+t.title,a)},expression:"dialog[img.src + item.title]"}},[a("v-img",{attrs:{src:n.src}})],1)],1)})),1),a("v-card-text",{staticClass:"pt-5"},[a("p",{staticClass:"subtitle-1",domProps:{innerHTML:e._s(t.body)}})])],1)],1)],1)}))],2)],1)],1)],1)},s=[],l=["January","February","March","April","May","June","July","August","September","October","November","December"],c=new Date,d=c.getDate()+" "+l[c.getMonth()]+" "+c.getFullYear(),u={name:"Home",data:function(){return{dialog:{},monthYear:d,items:[{isActive:!1,images:[{src:"/static/fullstackdeveloper-1.png"},{src:"/static/fullstackdeveloper-2.png"},{src:"/static/fullstackdeveloper-3.png"}],colourClass:"deep-orange darken-4",title:"FULL STACK DEVELOPER",subtitle:"Star Maths Online",subtitleLink:"https://starmathsonline.com.au/",icon:"mdi-star-circle",date:"August 2019 - August 2020",body:'<strong>Technologies used: </strong> AngularJS, Entity Framework 6, ASP.NET Web API 2, SQL Server 2017.\n        <br /><br />\n        <div class="text-left">\n        Star Maths Online is a startup product comprised of four major platforms: Student, Parent, Teacher, and School. In this role, I mostly worked on the Parent platform with a small team. \n        <br /><br />\n        The Parent platform consist of a web and mobile app. The goal of the platform to provide an accessible portal for Parent users where they are able to\n        manage child (Student) users and view data analytics regarding their child\'s performance and growth. Example features include managing subscriptions and dynamic \n        "smart" charts with selectable datapoints. Please note that more advanced management features and data analytics are present in the Teacher and School platforms.\n        <br /><br />\n        I worked on cleaning and updating the existing codebase while creating new features. My major achievement during this role was the creation of a new registration \n        and payment flow. The previous code had intertwined registration and payment flow; the codebase was a clear case of "spaghetti code" as well. As a result, I rebuilt/refactored most of the relevant code so that registration and \n        payment were decoupled, built a new frontend flow with new backend APIs, added in new feature requirements (like a survey and notification reminders for payment), \n        and created a trial and subscription management system with Stripe and PayPal.\n        <br /><br />\n        It is also worth noting that I learnt the MERN stack and Vue in preparation of a technology shift that was ultimately postponed.\n        </div>'},{isActive:!1,images:[{src:"/static/gamedev-1.png"},{src:"/static/gamedev-2.png"},{src:"/static/gamedev-3.png"},{src:"/static/gamedev-4.png"}],colourClass:"purple darken-4",title:"GAME DEVELOPER",subtitle:"Star Maths Online",subtitleLink:"https://starmathsonline.com.au/",icon:"mdi-gamepad-square",body:'<strong>Technologies used: </strong> Phaser.io, Node.js, Express, Cocos2d, SQL Server 2017.\n        <br /><br />\n        <div class="text-left">\n        Star Maths Online is startup product comprised of four major platforms: Student, Parent, Teacher, and School. In this role, I mostly worked on the Student platform with a small team. \n        <br /><br />\n        The Student platform consist of a video game available on web and mobile devices. The game\'s main feature is gamified educational content know as <i>Questions</i>. The other features all serve\n        to promote engaging in Questions. Examples include leaderboards, purchaseable cosmetic content, room customisation, and educational mini-games (to prevent burnout). All of these Questions\n        are tracked using various metrics, the data analysed, and then displayed as information analytics in the Parent, Teacher, and School platforms.\n        <br /><br />\n        My role was to add in new engagement features, fix existing bugs, and update the quality of life. The engagement features were my most important contributions in this role. They were:\n        <li>A smart one-step "Play Now" button for Questions that skipped several click and automatically chose a substrand topic based on history.</li>\n        <li>A new "event" system to engage users on a daily, weekly, and monthly basis.</li>\n        <li>An updated character creation and pet selection process with more interactivity and involvement.</li>\n        <li>An onboarding process that was the game\'s first tutorial/guide system.</li>\n        <li>An in-game communications system in the form of a mailbox.</li>\n        <li>And more minor work such as updating leaderboards.</li>\n        <br />\n        It is also worth noting that the game\'s engine technology was shifted to Cocos2d. I played a key role in supporting this technology shift but did not \n        continue to work on the game after it was finished.\n        </div>',date:"July 2018 - August 2019"},{isActive:!1,images:[{src:"/static/matchm-1.png"},{src:"/static/matchm-2.png"},{src:"/static/matchm-3.png"}],colourClass:"green darken-4",title:"FOUNDER",subtitle:"NCCorp Pty Ltd",subtitleLink:"",icon:"mdi-account-voice",body:'<strong>Technologies used: </strong> Unity, GameSpark, HTML/CSS/JS, Bootstrap\n        <br /><br />\n        <div class="text-left">\n        NCCorp Pty Ltd was my own personal startup company comprised of another founder and one project. The project was tentatively titled "MatchM" and worked on by the\n        founders and two other developers.\n        <br /><br />\n        MatchM was envisioned to a social gaming platform containing a diverse range of small social mini-games where communication and other social elements were key. The ultimate goal of this product\n        was to create deeper online non-romantic relationships and thus leading to new friendships. MatchM was set to be released on mobile and would be all ages with an initial\n        target audience of young adults due to market research and familiarity of the age group.\n        <br /><br />\n        Everyone on the team was inexperienced with Unity but I had the most developer experience. Along with my role as founder, I played both a leadership and mentor role to the \n        team while professionally developing myself. The noteworthy aspect of this role wasn\'t my technical improvements of the product; it was all the project management experience and\n        business skills I obtained. A reoccurring example is spliting personal and project time management. I had to constantly juggle between personal learning of Unity, teaching said learning \n        to the rest of the team, helping out with the business aspects of the company, and actually developing the product. This experience has helped my immensely and the skills have transferred to\n        all of my future work. \n        <br /><br />\n        Note: The product never got out of Alpha stage but both me and the founder have agreed that we may pursue this startup again in the future when more experience and funding is achieved.\n        </div>',date:"August 2018 – August 2019"},{isActive:!1,images:[{src:"/static/intern-1.png"},{src:"/static/intern-2.png"},{src:"/static/intern-3.png"}],colourClass:"light-blue darken-4",title:"DEVELOPER INTERN",subtitle:"Star Maths Online",subtitleLink:"https://starmathsonline.com.au/",icon:"mdi-gamepad-variant",body:'<strong>Technologies used: </strong> HTML, CSS, JavaScript, Internal content authoring tool\n        <br /><br />\n        <div class="text-left">\n        Star Maths Online is startup product comprised of four major platforms: Student, Parent, Teacher, and School. In this role, I mostly worked on content creation for the Student platform within a small team. \n        <br /><br />\n        I worked on creation and quality control of <i>Questions</i> in the Student game. Questions were gamified educational content that Students would answer, allowing the game\n        to collect data and provide analytics to Parents, Teachers, and Schools. These Questions were produced using an internal content authoring tool. However, this tool was\n        often restrictive and regular JavaScript was often used on top.\n        <br /><br />\n        My most noteworthy achievement was my ability to meet KPIs and deliver beyond expectations. I consistently finished more Questions than my internship counterparts and in\n        the latter half of my internship, I was delegated to quality control. One of the biggest issues regarding quality control was the content delivered by the Vietnam team. It was \n        often subpar in quality containing many errors, not covering corner cases, and bad "shortcuts" in code. Combined with the language barrier, this experience really served to \n        improve my communication skills between both the Australian and Vietnamese team.\n        <br /><br />\n        The quality control component of my role was also commended. It trained me to have a more critical eye and write cleaner, more efficient code.\n        </div>',date:"January 2018 - July 2018"},{isActive:!1,images:[{src:"/static/warwick-1.png"},{src:"/static/warwick-2.png"}],colourClass:"red darken-4",title:"FOOD & BEVERAGE ATTENDANT",subtitle:"The Warwick Tavern",subtitleLink:"https://thewarwick.com.au/",icon:"mdi-food-fork-drink",body:'<strong>Technologies used: </strong> My body\n        <br /><br />\n        <div class="text-left">\n        This was a casual job with near full-time hours. The Warwick was capable of holding up to 400 customers. It contained several bars, a dining area, and an open kitchen.\n        <br /><br />\n        I worked in a large and diverse team of over two dozen. I mostly served on the floor but I am certified to serve alcohol and work in gaming areas (RSA and RCG). As a consequence,\n        I worked occasionally as a bartender whenever needed.\n        <br /><br />\n        The biggest take from this job was the ability to work effectively as a large team in a fast paced environment. The sense of camaraderie I felt when working here is something\n        that I still remember. I still say that I worked here more for the people than the company.\n        </div>',date:"January 2018 - July 2018"},{isActive:!1,images:[{src:"/static/physio-1.png"},{src:"/static/physio-2.png"},{src:"/static/physio-3.png"}],colourClass:"cyan darken-4",title:"DATA ENTRY PROJECT",subtitle:"Private Freelancer Contract",subtitleLink:"",icon:"mdi-database-edit",body:'<strong>Technologies used: </strong> Electron, HTML, CSS, JavaScript\n        <br /><br />\n        <div class="text-left">\n        I was contacted by a friend\'s Aunt who owned a physiotherapy practice. One of their many issues was data entry. The existing employees would struggle to timely record the\n        full dataset and if abbreviated, they would spend too long typing into an outdated system. This data would often contain crucial and sensitive patient data as well.\n        <br /><br />\n        So, I developed a fat client using Electron. This fit the requirements of being offline, portable in a USB stick, useable on all devices that support chrome, and had password\n        protection. The data consisted of mostly technical jargon and there were many attempts at organisation. The data entry was also focused mostly on mouse selection or autofill\n        fields as typing speeds were slow. A live preview of the potential end product was also displayed to help maintain correctness. At the end, the user could output the entire\n        data in full or abbreivation. Sensitive patient data was also able to be inputted. Afterwards, a simple copy and paste was the final step in their workflow.\n        <br /><br />\n        Please note that in the screenshots above, sensitive data inputs have not been shown. Also, the codebase is not available publicly.\n        </div>',date:"July 2016 - August 2016"},{isActive:!1,images:[{src:"/static/tutor-1.png"},{src:"/static/tutor-2.png"}],colourClass:"brown darken-4",title:"PRIVATE TUTORING FOR HSC",subtitle:"Private",subtitleLink:"",icon:"mdi-teach",body:'<strong>Technologies used: </strong> Skype, Google Docs\n        <br /><br />\n        <div class="text-left">\n        A simple tutoring job that was done mostly in my spare time. I tutored several kids that were gained through close connections. Tutoring was done mostly in-person at home,\n        external communications through skype, and note sharing through images and Google Docs. I mostly taught 3 unit Mathematics and IPT based on the NSW curriculum at the time.\n        </div>',date:"2016 - 2017"}]}}},h=u,m=a("2877"),p=a("6544"),g=a.n(p),b=a("8336"),f=a("b0af"),v=a("99d9"),y=a("5e66"),w=a("3e35"),k=a("62ad"),T=a("a523"),S=a("169a"),A=a("132d"),I=a("adda"),x=a("b687"),C=a("490a"),_=a("0fd9"),P=a("2fa4"),V=a("8414"),E=a("1e06"),M=Object(m["a"])(h,i,s,!1,null,null,null),O=M.exports;g()(M,{VBtn:b["a"],VCard:f["a"],VCardSubtitle:v["a"],VCardText:v["b"],VCardTitle:v["c"],VCarousel:y["a"],VCarouselItem:w["a"],VCol:k["a"],VContainer:T["a"],VDialog:S["a"],VIcon:A["a"],VImg:I["a"],VLazy:x["a"],VProgressCircular:C["a"],VRow:_["a"],VSpacer:P["a"],VTimeline:V["a"],VTimelineItem:E["a"]});var j={name:"App",components:{Home:O},data:function(){return{}}},L=j,J=a("7496"),N=a("40dc"),R=a("f6c4"),D=Object(m["a"])(L,o,r,!1,null,null,null),q=D.exports;g()(D,{VApp:J["a"],VAppBar:N["a"],VBtn:b["a"],VIcon:A["a"],VImg:I["a"],VMain:R["a"],VSpacer:P["a"]});var H=a("f309");n["a"].use(H["a"]);var Q=new H["a"]({theme:{dark:!0}});n["a"].config.productionTip=!1,new n["a"]({vuetify:Q,render:function(e){return e(q)}}).$mount("#app")}});
//# sourceMappingURL=app.8d81dfc8.js.map