(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e){e.exports={name:"AIzaSyDu83zIs6jrdnI8xI_GtnhFvFWAEbdxZ6E"}},184:function(e,t,a){e.exports=a(648)},189:function(e,t,a){},212:function(e,t,a){},218:function(e,t,a){},613:function(e,t,a){},645:function(e,t,a){},646:function(e,t,a){},647:function(e,t,a){},648:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),s=(a(189),a(28)),c=a(29),l=a(32),u=a(31),m=a(680),d=a(38),p=a(679),h=function(e){var t=e.component,a=e.props,n=Object(d.a)(e,["component","props"]);return r.a.createElement(p.a,Object.assign({},n,{render:function(e){return r.a.createElement(t,Object.assign({},e,a))}}))},v=a(676);var f=function(e){var t=e.component,a=e.props,n=Object(d.a)(e,["component","props"]);return r.a.createElement(p.a,Object.assign({},n,{render:function(e){return a.isAuthenticated?r.a.createElement(v.a,{to:"/"}):r.a.createElement(t,Object.assign({},e,a))}}))},g=a(99),b=a(160),E=a(674),y=a(166),w=a.n(y),S=a(667),k=a(668),x=a(669),C=a(161),O=a.n(C),j=(a(212),function(e){var t=e.text,a=e.size,n=e.current,o=e.bind;return n?r.a.createElement("div",{className:"circle currentlocation",style:{width:a+"px",height:a+"px"}},a<50?"":t):r.a.createElement("div",{className:"circle",style:{width:a+"px",height:a+"px"},onClick:o},a<50?"":t)}),L=function(e){var t=e.venue,a=e.date,n=e.bind;return r.a.createElement(S.a,null,r.a.createElement(k.a,{className:"info"},r.a.createElement("div",{className:"align-row space-between"},r.a.createElement(x.a,{gutterBottom:!0,variant:"h6",component:"h6"},t.name),t.address?r.a.createElement(E.a,{"aria-label":"close",onClick:n},r.a.createElement(w.a,{fontSize:"small"})):null),t.address?r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Address: ",t.address):null,r.a.createElement("div",{className:"align-row space-around"},t.current_popularity?r.a.createElement("div",{className:"detail align-column"},r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Real time"),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},t.current_popularity," %")):null,t.populartimes?r.a.createElement("div",{className:"detail align-column"},r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},"Typical level"),r.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},t.populartimes[a[0]].data[a[1]]," %")):null)))},D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={venueData:[],venueDetail:{name:"Click on a Venue for detail"},date:n.props.currentime},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"clickVenue",value:function(e){this.setState({venueDetail:e}),this.props.clickVenue(e)}},{key:"closeMenu",value:function(){this.setState({venueDetail:{name:"Click on a Venue for detail"}}),this.props.closeVenue()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"map-container"},r.a.createElement("div",{style:{height:"67vh",width:"100%"}},r.a.createElement(O.a,{bootstrapURLKeys:{key:b.name},center:{lat:this.props.centre[0],lng:this.props.centre[1]},defaultZoom:15},this.props.venue.map(function(t){return r.a.createElement(j,{key:t.id,lat:t.coordinates.lat,lng:t.coordinates.lng,text:t.name,size:t.populartimes[e.state.date[0]].data[e.state.date[1]],bind:e.clickVenue.bind(e,t)})}),this.props.centre[2]?r.a.createElement(j,{lat:this.props.centre[0],lng:this.props.centre[1],size:20,current:!0}):null),r.a.createElement(L,{venue:this.state.venueDetail,date:this.state.date,bind:this.closeMenu.bind(this)})))}}]),a}(n.Component),I=a(167),N=[{name:"Shops",URL:"/api/stores",description:"Store, Grocery, Shops"}],P=function(e){var t=function(e){var t,a=Object(I.a)(N);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.name===e)return n}}catch(r){a.e(r)}finally{a.f()}}(e);return fetch(t.URL,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return e})},_=a(62),A=a.n(_),F=(a(218),function(e){var t=e.data;return r.a.createElement("tr",null,r.a.createElement("th",null),t.map(function(e){return r.a.createElement("th",{key:e},e)}))}),z=function(e){return e.data.rows.map(function(e,t){return r.a.createElement("tr",{key:e.label},r.a.createElement("td",null,e.label),(a=e.cells).colors.map(function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("div",{style:{background:(n=e,"rgb(".concat(100*n.red,"%, ").concat(100*n.green,"%, ").concat(100*n.blue,"%)")),width:"3vw"}},r.a.createElement("span",{style:{fontSize:"0.3em"}},a.scales[t].toFixed(1))));var n}));var a})},T=function(e){var t=e.populartimes.map(function(e){return[e.name,Object(g.a)(e.data)]}),a=new A.a(["1a","2a","3a","4a","5a","6a","7a","8a","9a","10a","11a","12a","1p","2p","3p","4p","5p","6p","7p","8p","9p","10p","11p","12p"],t);console.log(a);var n=a.getData({style:_.Style.SIMPLE});return r.a.createElement("table",{className:"heat-map"},r.a.createElement("tbody",null,r.a.createElement(F,{data:n.headings}),r.a.createElement(z,{data:n})))},V=function(e){var t=e.venue;e.date;return r.a.createElement("div",{className:"heat-map-container"},r.a.createElement(T,{className:"heat-map",populartimes:t.populartimes}))},U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showDetail:!1,venueDetail:{populartimes:[{name:"",data:[]}]}},n.state={showingInfoWindow:!1,currentLocation:n.props.currentLocation,currentime:[0,0,0],activeMarker:{},selectedPlace:{},venueData:[],events:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;P("Shops").then(function(t){e.setState({venueData:t},function(){e.check_for_date(),e.forceUpdate()})})}},{key:"check_for_date",value:function(){var e=new Date,t=e.getDay()-1<0?6:e.getDay()-1;this.setState({currentime:[t,e.getHours(),e.toLocaleString("en-US",{hour:"numeric",hour12:!0})]})}},{key:"clickVenue",value:function(e){console.log(e),this.setState({showDetail:!0,venueDetail:e})}},{key:"closeVenue",value:function(){this.setState({showDetail:!1}),this.forceUpdate()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{style:{backgroundColor:"white",width:"100vw",position:"relative",borderRadius:"10px",boxShadow:"0 4px 4px 0 rgba(0,0,0,0.1)"}},r.a.createElement(D,{google:this.props.google,centre:this.props.currentLocation,onClick:this.onMapClicked,venue:this.state.venueData,zoom:10,currentime:this.state.currentime,clickVenue:this.clickVenue.bind(this),closeVenue:this.closeVenue.bind(this)})),r.a.createElement("div",{className:"Searchsection",style:{backgroundColor:"white",marginBottom:"20px",padding:"20px",borderRadius:"10px",boxShadow:"0 4px 4px 0 rgba(0,0,0,0.1)"}},this.state.showDetail?r.a.createElement(V,{venue:this.state.venueDetail}):null))}}]),a}(r.a.Component),R=a(41),M=a.n(R),H=a(60),B=a(75),W=a(39),G=a(681),J=a(670),Y=a(678),Z=a(675),K=a(177),$=(a(613),function(e){var t=e.isLoading,a=e.text,n=e.loadingText,o=e.className,i=void 0===o?"":o,s=e.disabled,c=void 0!==s&&s,l=Object(d.a)(e,["isLoading","text","loadingText","className","disabled"]);return r.a.createElement(Z.a,Object.assign({className:"LoaderButton ".concat(i),disabled:c||t},l),t&&r.a.createElement(K.a,{glyph:"refresh",className:"spinning"}),t?n:a)}),q=(a(645),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(B.a)({},e.target.id,e.target.value))},n.handleSubmit=function(){var e=Object(H.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({isLoading:!0}),e.prev=2,e.next=5,W.a.signIn(n.state.email,n.state.password);case 5:n.props.userHasAuthenticated(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0.message),n.setState({isLoading:!1});case 12:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),n.state={isLoading:!1,email:"",password:""},n}return Object(c.a)(a,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(G.a,{controlId:"email",bsSize:"large"},r.a.createElement(J.a,null,"Email"),r.a.createElement(Y.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(G.a,{controlId:"password",bsSize:"large"},r.a.createElement(J.a,null,"Password"),r.a.createElement(Y.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement($,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Login",loadingText:"Logging in..."},"Login")))}}]),a}(n.Component)),Q=a(671),X=(a(646),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(B.a)({},e.target.id,e.target.value))},n.handleSubmit=function(){var e=Object(H.a)(M.a.mark(function e(t){var a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({isLoading:!0}),e.prev=2,e.next=5,W.a.signUp({username:n.state.email,password:n.state.password});case 5:a=e.sent,n.setState({newUser:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0.message);case 12:n.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),n.handleConfirmationSubmit=function(){var e=Object(H.a)(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({isLoading:!0}),e.prev=2,e.next=5,W.a.confirmSignUp(n.state.email,n.state.confirmationCode);case 5:return e.next=7,W.a.signIn(n.state.email,n.state.password);case 7:n.props.userHasAuthenticated(!0),n.props.history.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),alert(e.t0.message),n.setState({isLoading:!1});case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),n.state={isLoading:!1,email:"",password:"",confirmPassword:"",confirmationCode:"",newUser:null},n}return Object(c.a)(a,[{key:"validateForm",value:function(){return this.state.email.length>0&&this.state.password.length>0&&this.state.password===this.state.confirmPassword}},{key:"validateConfirmationForm",value:function(){return this.state.confirmationCode.length>0}},{key:"renderConfirmationForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleConfirmationSubmit},r.a.createElement(G.a,{controlId:"confirmationCode",bsSize:"large"},r.a.createElement(J.a,null,"Confirmation Code"),r.a.createElement(Y.a,{autoFocus:!0,type:"tel",value:this.state.confirmationCode,onChange:this.handleChange}),r.a.createElement(Q.a,null,"Please check your email for the code.")),r.a.createElement($,{block:!0,bsSize:"large",disabled:!this.validateConfirmationForm(),type:"submit",isLoading:this.state.isLoading,text:"Verify",loadingText:"Verifying\u2026"}))}},{key:"renderForm",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(G.a,{controlId:"email",bsSize:"large"},r.a.createElement(J.a,null,"Email"),r.a.createElement(Y.a,{autoFocus:!0,type:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(G.a,{controlId:"password",bsSize:"large"},r.a.createElement(J.a,null,"Password"),r.a.createElement(Y.a,{value:this.state.password,onChange:this.handleChange,type:"password"})),r.a.createElement(G.a,{controlId:"confirmPassword",bsSize:"large"},r.a.createElement(J.a,null,"Confirm Password"),r.a.createElement(Y.a,{value:this.state.confirmPassword,onChange:this.handleChange,type:"password"})),r.a.createElement($,{block:!0,bsSize:"large",disabled:!this.validateForm(),type:"submit",isLoading:this.state.isLoading,text:"Signup",loadingText:"Signing up\u2026"}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Signup"},null===this.state.newUser?this.renderForm():this.renderConfirmationForm())}}]),a}(n.Component)),ee=function(e){var t=e.childProps;return r.a.createElement(m.a,null,r.a.createElement(h,{path:"/",exact:!0,component:U,props:t}),r.a.createElement(f,{path:"/login",exact:!0,component:q,props:t}),r.a.createElement(f,{path:"/signup",exact:!0,component:X,props:t}))},te=a(672),ae=a(673),ne=(a(647),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).userHasAuthenticated=function(e){n.setState({isAuthenticated:e})},n.handleLogout=function(e){n.userHasAuthenticated(!1)},n.state={currentLocation:[45.9634545,-66.6452886,!1],isAuthenticated:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){e.setState({currentLocation:[t.coords.latitude,t.coords.longitude,!0],error:null})},function(t){return e.setState({error:t.message})})}},{key:"render",value:function(){var e={currentLocation:this.state.currentLocation,isAuthenticated:this.state.isAuthenticated,userHasAuthenticated:this.userHasAuthenticated};return r.a.createElement("div",{className:"App container"},r.a.createElement(te.a,{position:"static"},r.a.createElement(ae.a,{className:"app-bar"},r.a.createElement(x.a,{variant:"h6",className:"app-title"},"Overcrowded"))),r.a.createElement(ee,{childProps:e}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=a(677),oe={REGION:"us-east-1",USER_POOL_ID:"us-east-1_mFTSiMF9S",APP_CLIENT_ID:"290ho63m3108jj73fsve46sdpb",IDENTITY_POOL_ID:"us-east-1:c92355d8-9623-43a4-8ab3-fa5103e034aa"};W.b.configure({Auth:{mandatorySignIn:!0,region:oe.REGION,userPoolId:oe.USER_POOL_ID,identityPoolId:oe.IDENTITY_POOL_ID,userPoolWebClientId:oe.APP_CLIENT_ID}}),i.a.render(r.a.createElement(re.a,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},84:function(e,t){}},[[184,1,2]]]);
//# sourceMappingURL=main.3cadd0dc.chunk.js.map