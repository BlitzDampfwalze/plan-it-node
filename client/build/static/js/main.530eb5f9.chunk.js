(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t){t.API_ORIGIN=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_ORIGIN||"https://plan-it-react-capstone.herokuapp.com"},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){e.exports=a.p+"static/media/baseline-edit-24px.45b30f6a.svg"},function(e,t,a){e.exports=a.p+"static/media/iconfinder_cancel_326554.e2efc196.svg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACbSURBVEhL5ZLBCcMwFEM9UJfoKdmqQ3aD5NYl0v9uwohELvjSPHjY2JaMSdpteJVHJ2s/0ReNeokLjXgT3NMTY1w4McaFE2M09C6f5UfWmLPGnp6N0RBF8CgpRubAnp6N0ZAWMupcX4UxGkK9BFw5xvTBqRdoOaPO+0tiNDT9I0//TUeMceHEmL10BWduZcxaEnBFTs4u5d/R2hfdBdMTTzJM2AAAAABJRU5ErkJggg=="},,function(e,t,a){e.exports=a(66)},,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),s=a.n(c),o=a(2),i=a(16),l=a(37),u=a(9),d=function(e){return{type:"SET_AUTH_TOKEN",authToken:e}},h=function(e,t){t(d(e.token)),t({type:"AUTH_SUCCESS",currentUser:e}),function(e){try{localStorage.setItem("authToken",e)}catch(t){}}(e.token)},m=function(e){return function(t){return fetch("".concat(u.API_ORIGIN,"/api/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():(t({type:"SIGNUP_FAIL"}),Promise.reject("username/email taken"))}).then(function(e){h(e,t),t({type:"SIGNUP_SUCCESS"})}).catch(function(e){window.alert(e)})}},p=a(13),E={authToken:null,userObject:null,username:null,userID:"",error:null,signup_success:null,signup_fail:null},f=a(17),v={data:"",error:null,events:[]},g={loading:!1,eventID:"",event:{},error:null,schedules:[],tasks:[]},b=Object(i.d)(Object(i.c)({navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{text:"hello"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HEADER":return Object(p.a)({},e,{text:t.text});default:return e}},protected_data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":return Object(p.a)({},e,{events:[].concat(Object(f.a)(e.events),[t.data])});case"DELETE_EVENT":var a=e.events.filter(function(e){return e._id!==t.data});return Object(p.a)({},e,{events:a});case"FETCH_PROTECTED_DATA_SUCCESS":return Object.assign({},e,{events:t.data,error:null});case"FETCH_DATA_ERROR":return Object.assign({},e,{error:t.error});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_SUCCESS":return Object.assign({},e,{signup_success:!0});case"SIGNUP_FAIL":return Object.assign({},e,{signup_fail:!0});case"CLEAR_AUTH":return Object.assign({},e,{authToken:null,userObject:null,username:null,userID:""});case"SET_AUTH_TOKEN":return Object.assign({},e,{authToken:t.authToken,loading:!1});case"AUTH_SUCCESS":return Object.assign({},e,{loading:!1,userObject:t.currentUser,username:t.currentUser.username,userID:t.currentUser.id});case"AUTH_REQUEST":return Object.assign({},e,{loading:!0,error:null});case"AUTH_ERROR":return Object.assign({},e,{loading:!1,error:t.error});default:return e}},event_room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST":return Object.assign({},e,{loading:!0});case"SET_EVENT":return Object.assign({},e,{event:t.data,eventID:t.data._id,loading:!1});case"FETCH_SCHEDULES_SUCCESS":return Object.assign({},e,{schedules:t.data,error:null});case"ADD_TO_SCHEDULE":return Object(p.a)({},e,{schedules:[].concat(Object(f.a)(e.schedules),[t.data])});case"ADD_TO_TASKS":return Object(p.a)({},e,{tasks:[].concat(Object(f.a)(e.tasks),[t.data])});case"UPDATE_TASKS":var a=t.data._id,n=e.tasks.map(function(e){return e._id===a&&(e.completed=!e.completed),e});return Object(p.a)({},e,{tasks:n});case"DELETE_TASK":var r=e.tasks.filter(function(e){return e._id!==t.data});return Object(p.a)({},e,{tasks:r});case"UPDATE_SCHEDULE":var c=e.schedules.map(function(e){return e._id===t.data._id&&(e=t.data),e});return Object(p.a)({},e,{schedules:c});case"DELETE_SCHEDULE":var s=e.schedules.filter(function(e){return e._id!==t.data});return Object(p.a)({},e,{schedules:s});case"FETCH_TASKS_SUCCESS":return Object.assign({},e,{tasks:t.data,error:null});case"FETCH_DATA_ERROR":return Object.assign({},e,{error:t.error});default:return e}}}),Object(i.a)(l.a)),O=localStorage.getItem("authToken");if(O){var j=O;b.dispatch(d(j))}var k=b,S=(a(54),a(3)),T=a(4),N=a(6),y=a(5),A=a(7),_=a(70),C=(a(24),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"logOut",value:function(){this.props.dispatch({type:"CLEAR_AUTH"}),function(){try{localStorage.removeItem("authToken")}catch(e){}}()}},{key:"render",value:function(){var e,t=this;return this.props.loggedIn&&(e=r.a.createElement(_.a,{onClick:function(){return t.logOut()},to:"/"},"Log Out")),r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},e))}}]),t}(r.a.Component)),w=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}})(C),D=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}})(function(){return r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/signin"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(_.a,{to:"/signup"},"Sign-up")))}),I=a(71),U=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleLogoClick=function(){console.log("handleLogoClick"),a.props.history.push("/")},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props.loggedIn?r.a.createElement(w,null):r.a.createElement(D,null);return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{className:"nav-left nav-item",onClick:this.handleLogoClick},"Plan-it"),r.a.createElement("div",{className:"nav-right"},e))}}]),t}(r.a.Component),P=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}})(Object(I.a)(U)),R=(a(56),function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"signature"},"Designed and Developed",r.a.createElement("br",null),"by Paul Lime"))}),x=(a(57),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={more:!1},a.handleMore=function(){a.setState({more:!a.state.more})},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.state.more?null:r.a.createElement("span",null,"Read more..."),t=this.state.more?r.a.createElement("p",{onClick:this.handleMore},"Plan-it was created to assist in coordinating a group\u2019s effort to effectively plan together synchronously or asynchronously. Once a new trip is created, the user can join that room to begin creating a schedule for their group\u2019s trip. The task pane in the trip room allows users to assign and distribute tasks, such as research about particularly events, places, and things to do, so everyone\u2019s time is maximized and no double effort waste occurs. "):null;return r.a.createElement("div",{className:"landing-container"},r.a.createElement("div",{className:"landing-overlay"},r.a.createElement("h1",{className:"landing-h1"},"Plan-it"),r.a.createElement("div",{className:"landing-subhead"},r.a.createElement("h2",{className:"landing-h2"},"Bringing effectiveness to your group's travel planning"),r.a.createElement("div",{className:"landing-more-wrapper"},r.a.createElement("div",{className:"accordion",onClick:this.handleMore},e,t)))))}}]),t}(r.a.Component)),L=a(68),F=function(e){return e.ok?e:e.headers.has("content-type")&&e.headers.get("content-type").startsWith("application/json")?e.json().then(function(e){console.log("ERR1",e),Promise.reject(e)}):Promise.reject(console.log("res status:",e.status,e.statusText),{code:e.status,message:e.statusText})},H=function(e){return{type:"FETCH_DATA_ERROR",error:e}},G=function(e,t){return function(a){fetch("".concat(u.API_ORIGIN,"/api/events/").concat(e),{method:"GET",headers:{"content-type":"application/json","x-auth":t}}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){a(function(e){return{type:"SET_EVENT",data:e}}(e))}).catch(function(e){window.alert(e)})}},B=(a(31),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).onJoin=function(e){var t=a.props.events.find(function(t){return t._id===e});if(!t.password)return a.props.joinEventRoom(t._id),a.props.history.push("/events/".concat(e));var n=prompt("Please enter the password here:");return null===n||""===n?alert("must enter a value"):n===t.password?(a.props.joinEventRoom(t._id),a.props.history.push("/events/".concat(e))):alert("Incorrect Password!")},a.onDelete=function(e){console.log(e);var t=a.props.events.find(function(t){return t._id===e}),n=prompt("Please enter the password here:");return null===n||""===n?alert("must enter the value"):n!==t.password?alert("Incorrect Password!"):void a.props.deleteEvent(e,a.props.token)},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"event-card-container created-cards"},r.a.createElement("img",{className:"event-card-image card-item",alt:"not set by event creator for ".concat(this.props.title),src:this.props.imageUrl,height:"175",width:"275"}),r.a.createElement("div",{className:"event-card-title"},this.props.title),r.a.createElement("div",{className:"event-card-description card-item"},this.props.description),r.a.createElement("div",{className:"card-buttons-wrapper"},r.a.createElement("button",{"data-event-id":this.props._id,onClick:function(t){e.onJoin(t.currentTarget.getAttribute("data-event-id"))}},"Join"),r.a.createElement("button",{"data-event-id":this.props._id,onClick:function(t){e.onDelete(t.currentTarget.getAttribute("data-event-id"))}},"Delete")))}}]),t}(n.Component)),M=Object(o.b)(function(e){return{token:e.auth.authToken,events:e.protected_data.events}},function(e){return{deleteEvent:function(t,a){return e(function(e){return function(t,a){var n=a().auth.authToken;return t({type:"AUTH_REQUEST"}),fetch("".concat(u.API_ORIGIN,"/api/events/").concat(e),{method:"DELETE",headers:{"x-auth":n}}).then(function(e){return F(e)}).then(function(e){console.log("delete res.json",e)}).then(function(){console.log("delete data",e),t({type:"DELETE_EVENT",data:e})}).catch(function(e){console.log("delete event err",e),t(H(e))})}}(t))},joinEventRoom:function(t){return e(function(e){return function(t,a){var n=a().auth.authToken,r=a().auth.userID;fetch("".concat(u.API_ORIGIN,"/api/events/").concat(e,"/join/").concat(r),{method:"POST",headers:{"content-type":"application/json","x-auth":n}}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(a){t(G(e,n))}).catch(function(e){window.alert(e)})}}(t))}}})(Object(I.a)(B)),J=a(11),K=a(40),Q=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={imageUrl:"",title:"",description:"",password:""},a.handleChange=function(e){a.setState(Object(J.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("event create props",a.props.token),a.props.createEvent(a.state,a.props.token),a.setState({imageUrl:"",title:"",description:"",password:""})},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"create-new-event-wrapper"},r.a.createElement("div",{className:"event-create-container event-card-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"card-item create-card-heading"},"Create New Trip"),r.a.createElement("img",{className:"event-card-image card-item",alt:"not set by event creator for ".concat(this.props.title),src:"https://upload.wikimedia.org/wikipedia/commons/5/54/1_hallstatt_austria.jpg",height:"175",width:"275"}),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"title",id:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("input",{type:"description",id:"description",value:this.state.description,onChange:this.handleChange})),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("label",{htmlFor:"image"},"Image URL:"),r.a.createElement("input",{type:"description",id:"imageUrl",value:this.state.imageUrl,onChange:this.handleChange})),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("div",{className:"password-label"},r.a.createElement("label",{htmlFor:"password"},"Set Password:"),r.a.createElement("div",{className:"password-info-icon"},r.a.createElement("span",{className:"tooltiptext"},"Choose a password that others will use to join the room."),r.a.createElement(K.a,{icon:"info-circle",size:"1x",className:"info-icon"}))),r.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("div",{className:"card-item create-card-item create-card-button"},"Create"))))}}]),t}(n.Component),V=Object(o.b)(function(e){return{token:e.auth.authToken}},function(e){return{createEvent:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_REQUEST"}),fetch("".concat(u.API_ORIGIN,"/api/events"),{method:"POST",headers:{"content-type":"application/json","x-auth":t},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("DATA DATA",e),a(function(e){return{type:"ADD_EVENT",data:e}}(e))}).catch(function(e){window.alert("".concat(e,": Password, Title, Description Required!"))})}}(t,a))}}})(Q),Y=(a(61),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(function(e,t){var a=t().auth.authToken;return fetch("".concat(u.API_ORIGIN,"/api/events"),{method:"GET",headers:{"x-auth":a}}).then(function(e){return F(e)}).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"FETCH_PROTECTED_DATA_SUCCESS",data:e}}(t))}).catch(function(t){e(H(t))})})}},{key:"render",value:function(){if(this.props.loggedIn&&void 0!==this.props.events){var e=this.props.events.map(function(e,t){return r.a.createElement(M,Object.assign({index:t,key:t},e))});return r.a.createElement("div",{className:"dashboard-wrapper"},r.a.createElement("div",{className:"background-image-overlay"}),r.a.createElement(V,null),r.a.createElement("div",{className:"eventcards-wrapper"},e))}return r.a.createElement(L.a,{to:"/signin"})}}]),t}(r.a.Component)),W=Object(o.b)(function(e){return{events:e.protected_data.events,protectedData:e.protected_data.data,loggedIn:null!==e.auth.username}})(Object(I.a)(Y)),q=function(e){return{type:"FETCH_DATA_ERROR",error:e}},z=function(e){return function(t,a){var n=a().auth.authToken;return fetch("".concat(u.API_ORIGIN,"/api/events/").concat(e,"/tasks"),{method:"GET",headers:{"x-auth":n}}).then(function(e){return F(e)}).then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"FETCH_TASKS_SUCCESS",data:e}}(e))}).catch(function(e){t(q(e))})}},Z=function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;return fetch("".concat(u.API_ORIGIN,"/api/events/").concat(r,"/tasks/").concat(e),{method:"DELETE",headers:{"x-auth":n}}).then(function(e){return F(e)}).then(function(){t({type:"DELETE_TASK",data:e})}).catch(function(e){console.log("delete event err",e)})}},X=(a(25),function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(N.a)(this,Object(y.a)(t).call(this,e))).handleCheckBox=function(e){console.log("checkbox",a.state.checkBox),a.setState(Object(J.a)({},e.target.id,!a.props.completed),function(){a.props.updateTask(a.props._id,a.state.checkBox,a.props.taskDetails)})},a.state={checkBox:e.completed},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=r.a.createElement("input",{type:"checkbox",id:"checkBox",checked:this.props.completed,onChange:this.handleCheckBox});return r.a.createElement("div",{className:"individual-task-wrapper"},e,r.a.createElement("div",{className:"task-text"},this.props.taskDetails))}}]),t}(n.Component)),$=Object(o.b)(function(e){return{}},function(e){return{updateTask:function(t,a,n){return e(function(e,t,a){return function(n,r){var c=r().auth.authToken,s=r().event_room.eventID;console.log("inputs:",t,"taskID:",e,s),fetch("".concat(u.API_ORIGIN,"/api/events/").concat(s,"/tasks/").concat(e),{method:"PUT",headers:{"content-type":"application/json","x-auth":c},body:JSON.stringify({completed:t,taskDetails:a})}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("TASK PUT DATA",e),n(z(s))}).catch(function(e){window.alert(e)})}}(t,a,n))}}})(X),ee=(a(32),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handleClear=function(){a.props.tasks.map(function(e){if(!0===e.completed)return a.props.dispatch(Z(e._id))})},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){var e=this.props.tasks.map(function(e,t){return r.a.createElement($,Object.assign({index:t,key:t},e))});return r.a.createElement("div",{className:"user-tasks"},r.a.createElement("div",{className:"tasks-username"},this.props.tasks[0].user.username),e,r.a.createElement("button",{className:"clear-completed-button",onClick:this.handleClear},"Clear completed"))}}]),t}(n.Component)),te=Object(o.b)(function(e){return{eventRoom:e.event_room.event}})(ee),ae=a(41),ne=a.n(ae),re=a(42),ce=a.n(re),se=a(43),oe=a.n(se),ie=function(e,t){return function(a,n){var r=n().auth.authToken,c=n().event_room.eventID;fetch("".concat(u.API_ORIGIN,"/api/events/").concat(c,"/schedule/").concat(t),{method:"PUT",headers:{"content-type":"application/json","x-auth":r},body:JSON.stringify({date:e.dateEdit,details:e.detailsEdit,location:e.locationEdit})}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("Schedule PUT DATA",e),a({type:"UPDATE_SCHEDULE",data:e})}).catch(function(e){window.alert(e)})}},le=function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;return fetch("".concat(u.API_ORIGIN,"/api/events/").concat(r,"/schedule/").concat(e),{method:"DELETE",headers:{"x-auth":n}}).then(function(e){return F(e)}).then(function(){t({type:"DELETE_SCHEDULE",data:e})}).catch(function(e){console.log("delete event error",e)})}},ue=a(44),de=a.n(ue),he=(a(26),function(e){function t(e){var a;return Object(S.a)(this,t),(a=Object(N.a)(this,Object(y.a)(t).call(this,e))).handleScheduleChange=function(e){a.setState(Object(J.a)({},e.target.id,e.target.value)),console.log(a.state)},a.handleScheduleEdit=function(){a.setState({edit:!a.state.edit})},a.handleScheduleUpdate=function(){a.props.dispatch(ie(a.state,a.props._id)),a.setState({date:"",details:"",location:"",edit:!1})},a.handleScheduleDelete=function(){a.props.dispatch(le(a.props._id))},a.state={dateEdit:"",detailsEdit:"",locationEdit:"",edit:!1},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){this.props.submitSucceeded&&r.a.createElement("div",{className:"message message-success"},"Message submitted successfully"),this.props.error&&r.a.createElement("div",{className:"message message-error"},this.props.error);var e=this.state.edit?r.a.createElement("span",null,r.a.createElement("img",{src:ce.a,alt:"cancel"}),r.a.createElement("span",{className:"tooltiptext"},"Cancel")):r.a.createElement("span",null,r.a.createElement("img",{src:ne.a,alt:"edit"}),r.a.createElement("span",{className:"tooltiptext"},"Edit")),t=this.state.edit?r.a.createElement("form",{onSubmit:this.handleScheduleUpdate},r.a.createElement("ul",{className:"schedule-edit-inputs"},r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"locationEdit"},"Location"),r.a.createElement("input",{type:"text",id:"locationEdit",className:"schedule-inputs",onChange:this.handleScheduleChange,placeholder:"Location: e.g., place & city",value:this.state.location})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"dateEdit"},"Date"),r.a.createElement("input",{type:"datetime-local",id:"dateEdit",className:"schedule-inputs",value:this.state.date,onChange:this.handleScheduleChange})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"detailsEdit"},"Details"),r.a.createElement("input",{type:"text",id:"detailsEdit",className:"schedule-inputs",value:this.state.details,onChange:this.handleScheduleChange,placeholder:"details of activity, place, etc..."}))),r.a.createElement("button",null,"Save")):null;return r.a.createElement("div",{className:"schedule-wrapper"},r.a.createElement("ul",{className:"schedule-parent-date"},r.a.createElement("li",{className:"schedule-item schedule-date"},de.a.utc(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")),r.a.createElement("li",{className:"schedule-buttons-wrapper"},r.a.createElement("div",{className:"edit-schedule-button",onClick:this.handleScheduleEdit},e),r.a.createElement("div",{className:"delete-schedule-button",onClick:this.handleScheduleDelete},r.a.createElement("img",{src:oe.a,alt:"delete"}),r.a.createElement("span",{className:"tooltiptext"},"Delete")))),r.a.createElement("ul",{className:"schedule-parent-details"},r.a.createElement("li",{className:"schedule-item schedule-location"},this.props.location),r.a.createElement("li",{className:"schedule-item schedule-details"},this.props.details)),r.a.createElement("div",{className:"edit-schedule"},t))}}]),t}(n.Component)),me=Object(o.b)(function(e){return{schedules:e.event_room.schedules}})(he),pe=(a(63),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={date:"",details:"",location:""},a.handleScheduleChange=function(e){a.setState(Object(J.a)({},e.target.id,e.target.value))},a.handleScheduleSubmit=function(e){if(e.preventDefault(),""===a.state.date||""===a.state.description)return alert("Date, Time, and Description cannot be blank");a.props.createSchedule(a.state),a.setState({date:"",details:"",location:""})},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"schedule-create-container",onSubmit:this.handleScheduleSubmit},r.a.createElement("ul",{className:"schedule-create-inputs"},r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",{type:"text",id:"location",className:"schedule-inputs",onChange:this.handleScheduleChange,placeholder:"Location: e.g., place & city",value:this.state.location})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("input",{type:"datetime-local",id:"date",className:"schedule-inputs",value:this.state.date,onChange:this.handleScheduleChange})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"details"},"Details"),r.a.createElement("input",{type:"text",id:"details",className:"schedule-inputs",value:this.state.details,onChange:this.handleScheduleChange,placeholder:"details of activity, place, etc..."}))),r.a.createElement("button",null,"Add Item to the Schedule")))}}]),t}(n.Component)),Ee=Object(o.b)(function(e){return{}},function(e){return{createSchedule:function(t,a){return e(function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;fetch("".concat(u.API_ORIGIN,"/api/events/").concat(r,"/schedule"),{method:"POST",headers:{"content-type":"application/json","x-auth":n},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){t(function(e){return{type:"ADD_TO_SCHEDULE",data:e}}(e))}).catch(function(e){window.alert(e)})}}(t))}}})(pe),fe=(a(33),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={taskDetails:"",user:""},a.handleChange=function(e){""===a.state.user&&a.setState({user:a.props.users[0]._id}),a.setState(Object(J.a)({},e.target.id,e.target.value)),console.log("state",a.state)},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.taskDetails)return alert("Description cannot be blank");a.props.createTask(a.state),a.setState({taskDetails:""})},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){if(void 0!==this.props.users){var e=this.props.users.map(function(e,t){return r.a.createElement("option",{key:t,id:e,value:e._id},e.username)});return r.a.createElement("form",{className:"task-form",onSubmit:this.handleSubmit},r.a.createElement("div",null,"Assign task to user:"),r.a.createElement("div",{className:"select-user"},r.a.createElement("select",{id:"user",onChange:this.handleChange},e)),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"taskDetails"}),r.a.createElement("textarea",{className:"desc-input",value:this.state.taskDetails,placeholder:"e.g., research accomodations, restaurants, sites, museums, etc...",type:"text",id:"taskDetails",rows:"5",onChange:this.handleChange})),r.a.createElement("button",null,"Create New Task"))}return r.a.createElement("div",null,"Loading...")}}]),t}(n.Component)),ve=Object(o.b)(function(e){return{users:e.event_room.event.users,token:e.auth.authToken}},function(e){return{createTask:function(t,a){return e(function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;fetch("".concat(u.API_ORIGIN,"/api/events/").concat(r,"/tasks/user/").concat(e.user),{method:"POST",headers:{"content-type":"application/json","x-auth":n},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){t(function(e){return{type:"ADD_TO_TASKS",data:e}}(e))}).catch(function(e){window.alert(e)})}}(t))}}})(fe),ge=function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"componentDidMount",value:function(){var e,t=this.props.match.params.id;this.props.dispatch((e=t,function(t,a){var n=a().auth.authToken;return fetch("".concat(u.API_ORIGIN,"/api/events/").concat(e,"/schedule"),{method:"GET",headers:{"x-auth":n}}).then(function(e){return F(e)}).then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"FETCH_SCHEDULES_SUCCESS",data:e}}(e))}).catch(function(e){t(q(e))})})),this.props.dispatch(z(t))}},{key:"render",value:function(){var e=this;if(this.props.loggedIn&&void 0!==this.props.tasks){var t=this.props.schedules.map(function(e,t){return r.a.createElement(me,Object.assign({index:t,key:t},e))}),a=Object(f.a)(new Set(this.props.tasks.map(function(e){return e.user.username}))).map(function(t){return e.props.tasks.filter(function(e){return e.user.username===t})}).map(function(e,t){return r.a.createElement(te,{index:t,key:t,tasks:e})});return r.a.createElement("div",{className:"event-room-container"},r.a.createElement("div",{className:"background-image-overlay"}),r.a.createElement("h1",{className:"event-title"},this.props.event.title),r.a.createElement("div",{className:"event-room-wrapper"},r.a.createElement("div",{className:"tasks-container"},r.a.createElement("div",{className:"tasks-wrapper"},a),r.a.createElement("div",{className:"task-create-wrapper"},r.a.createElement(ve,null))),r.a.createElement("div",{className:"schedule-container"},t,r.a.createElement(Ee,null))))}return r.a.createElement(L.a,{to:"/signin"})}}]),t}(r.a.Component),be=Object(o.b)(function(e){return{loading:e.event_room.loading,eventID:e.event_room.eventID,event:e.event_room.event,schedules:e.event_room.schedules,tasks:e.event_room.tasks,protectedData:e.protected_data.data,loggedIn:null!==e.auth.username}})(Object(I.a)(ge)),Oe=(a(34),function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(J.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};a.props.signin(t),a.setState({email:"",password:""})},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return this.props.loggedIn?r.a.createElement(L.a,{to:"/dashboard"}):r.a.createElement("div",{className:"auth-container"},r.a.createElement("form",{className:"auth-form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"email"},"Email (demo@demo.com)"),r.a.createElement("input",{type:"email",id:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"password"},"Password (Password: testing)"),r.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{className:"auth-item auth-submit-button"},"Login")))}}]),t}(n.Component)),je=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}},function(e){return{signin:function(t){return e(function(e){return function(t){t({type:"AUTH_REQUEST"}),fetch("".concat(u.API_ORIGIN,"/api/users/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():(console.log(e,"CONSOLE.LOG custom message rejection"),Promise.reject(e.statusText))}).then(function(e){h(e,t)}).catch(function(e){console.log("error",e),window.alert("Incorrect Password or Email")})}}(t))}}})(Oe),ke=function(e){function t(){var e,a;Object(S.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",username:""},a.handleChange=function(e){a.setState(Object(J.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.dispatch(m(a.state))},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return null!==this.props.signup_success?r.a.createElement(L.a,{to:"/dashboard"}):r.a.createElement("div",{className:"auth-container"},r.a.createElement("form",{className:"auth-form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",pattern:".{5,10}",required:!0,title:"Password should be 5 to 10 characters",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{className:"auth-item auth-submit-button"},"Sign-up")))}}]),t}(n.Component),Se=Object(o.b)(function(e){return{signup_success:e.auth.signup_success}})(ke),Te=a(67),Ne=a(69),ye=a(38),Ae=(a(64),function(e){function t(){return Object(S.a)(this,t),Object(N.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement(Te.a,null,r.a.createElement("div",{className:"root-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement(P,null)),r.a.createElement("main",null,r.a.createElement(Ne.a,null,r.a.createElement(ye.a,{exact:!0,path:"/",component:x}),r.a.createElement(ye.a,{path:"/dashboard",component:W}),r.a.createElement(ye.a,{exact:!0,path:"/events/:id",component:be}),r.a.createElement(ye.a,{path:"/signin",component:je}),r.a.createElement(ye.a,{path:"/signup",component:Se}))),r.a.createElement("footer",null,r.a.createElement(R,null))))}}]),t}(n.Component)),_e=Object(o.b)(function(e){return{hasAuthToken:null!==e.auth.authToken,loggedIn:null!==e.auth.username}})(Ae),Ce=(a(65),a(20)),we=a(19);Ce.b.add(we.a,we.b,we.c,we.d);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,{store:k},r.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[45,1,2]]]);
//# sourceMappingURL=main.530eb5f9.chunk.js.map