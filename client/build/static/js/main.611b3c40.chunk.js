(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){},11:function(e,t){t.API_ORIGIN=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_ORIGIN||"http://localhost:3002"},110:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},148:function(e,t,a){e.exports=a.p+"static/media/baseline-edit-24px.45b30f6a.svg"},149:function(e,t,a){e.exports=a.p+"static/media/iconfinder_cancel_326554.e2efc196.svg"},150:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACbSURBVEhL5ZLBCcMwFEM9UJfoKdmqQ3aD5NYl0v9uwohELvjSPHjY2JaMSdpteJVHJ2s/0ReNeokLjXgT3NMTY1w4McaFE2M09C6f5UfWmLPGnp6N0RBF8CgpRubAnp6N0ZAWMupcX4UxGkK9BFw5xvTBqRdoOaPO+0tiNDT9I0//TUeMceHEmL10BWduZcxaEnBFTs4u5d/R2hfdBdMTTzJM2AAAAABJRU5ErkJggg=="},153:function(e,t,a){e.exports=a(319)},236:function(e,t,a){},241:function(e,t,a){},243:function(e,t,a){},246:function(e,t,a){},310:function(e,t,a){},314:function(e,t,a){},316:function(e,t,a){},319:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(143),s=a.n(c),o=a(2),i=a(29),l=a(145),u=a(320),d=function(){return localStorage.getItem("authToken")},h=a(11),m=function(e){return e.ok?e:e.headers.has("content-type")&&e.headers.get("content-type").startsWith("application/json")?e.json().then(function(e){return Promise.reject(e)}):Promise.reject({code:e.status,message:e.statusText})},p=function(e){return{type:"SET_AUTH_TOKEN",authToken:e}},f=function(e,t){t(p(e.token)),t({type:"AUTH_SUCCESS",currentUser:e}),function(e){try{localStorage.setItem("authToken",e)}catch(t){}}(e.token)},E=function(){return function(e,t){e({type:"AUTH_REQUEST"});var a=d();return fetch("".concat(h.API_ORIGIN,"/api/users/refresh"),{method:"POST",headers:{"x-auth":a}}).then(function(e){return m(e)}).then(function(e){return e.json()}).then(function(t){console.log("refresh token",t),f(t,e)}).catch(function(t){window.alert(t),e({type:"AUTH_ERROR",error:t})})}},v=a(21),g={authToken:null,userObject:null,username:null,userID:"",error:null},b=a(30),O={data:"",error:null,events:[]},j={loading:!1,eventID:"",event:{},error:null,schedules:[],tasks:[]},T=Object(i.d)(Object(i.c)({navbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{text:"hello"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HEADER":return Object(v.a)({},e,{text:t.text});default:return e}},protected_data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EVENT":return Object(v.a)({},e,{events:[].concat(Object(b.a)(e.events),[t.data])});case"DELETE_EVENT":var a=e.events.filter(function(e){return e._id!==t.data});return Object(v.a)({},e,{events:a});case"FETCH_PROTECTED_DATA_SUCCESS":return Object.assign({},e,{events:t.data,error:null});case"FETCH_DATA_ERROR":return Object.assign({},e,{error:t.error});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_AUTH":return Object.assign({},e,{authToken:null,userObject:null,username:null,userID:""});case"SET_AUTH_TOKEN":return Object.assign({},e,{authToken:t.authToken,loading:!1});case"AUTH_SUCCESS":return Object.assign({},e,{loading:!1,userObject:t.currentUser,username:t.currentUser.username,userID:t.currentUser.id});case"AUTH_REQUEST":return Object.assign({},e,{loading:!0,error:null});case"AUTH_ERROR":return Object.assign({},e,{loading:!1,error:t.error});default:return e}},event_room:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST":return Object.assign({},e,{loading:!0});case"SET_EVENT":return Object.assign({},e,{event:t.data,eventID:t.data._id,loading:!1});case"FETCH_SCHEDULES_SUCCESS":return Object.assign({},e,{schedules:t.data,error:null});case"ADD_TO_SCHEDULE":return Object(v.a)({},e,{schedules:[].concat(Object(b.a)(e.schedules),[t.data])});case"ADD_TO_TASKS":return Object(v.a)({},e,{tasks:[].concat(Object(b.a)(e.tasks),[t.data])});case"UPDATE_TASKS":var a=t.data._id,n=e.tasks.map(function(e){return e._id===a&&(e.completed=!e.completed),e});return Object(v.a)({},e,{tasks:n});case"DELETE_TASK":var r=e.tasks.filter(function(e){return e._id!==t.data});return Object(v.a)({},e,{tasks:r});case"FETCH_TASKS_SUCCESS":return Object.assign({},e,{tasks:t.data,error:null});case"UPDATE_SCHEDULE":var c=e.schedules.map(function(e){return e._id===t.data._id&&(e=t.data),e});return Object(v.a)({},e,{schedules:c});case"DELETE_SCHEDULE":var s=e.schedules.filter(function(e){return e._id!==t.data});return Object(v.a)({},e,{schedules:s});case"FETCH_TASKS_SUCCESS":return Object.assign({},e,{tasks:t.data,error:null});case"FETCH_DATA_ERROR":return Object.assign({},e,{error:t.error});default:return e}},form:u.a}),Object(i.a)(l.a)),k=d();if(k){var y=k;T.dispatch(p(y)),T.dispatch(E())}var S=T,A=(a(236),a(3)),N=a(4),_=a(6),C=a(5),D=a(7),w=a(325),I=(a(62),function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(N.a)(t,[{key:"logOut",value:function(){this.props.dispatch({type:"CLEAR_AUTH"}),function(){try{localStorage.removeItem("authToken")}catch(e){}}()}},{key:"render",value:function(){var e,t=this;return this.props.loggedIn&&(e=r.a.createElement(w.a,{onClick:function(){return t.logOut()},to:"/"},"Log Out")),r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/dashboard"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},e))}}]),t}(r.a.Component)),R=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}})(I),U=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}})(function(){return r.a.createElement("ul",null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/signin"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/signup"},"Sign-up")))}),P=a(324),x=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).handleLogoClick=function(){console.log("handleLogoClick"),a.props.history.push("/")},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.loggedIn?r.a.createElement(R,null):r.a.createElement(U,null);return r.a.createElement("nav",{className:"nav-wrapper"},r.a.createElement("div",{className:"nav-left nav-item",onClick:this.handleLogoClick},"Plan-it"),r.a.createElement("div",{className:"nav-right"},e))}}]),t}(r.a.Component),L=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}})(Object(P.a)(x)),H=(a(241),function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"signature"},"Designed and Developed",r.a.createElement("br",null),"by Paul Lime"))}),F=(a(243),function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={more:!1},a.handleMore=function(){a.setState({more:!a.state.more})},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.state.more?null:r.a.createElement("span",null,"Read more..."),t=this.state.more?r.a.createElement("p",{onClick:this.handleMore},"Plan-it was created to assist in coordinating a group\u2019s effort to effectively plan together synchronously or asynchronously. Once a new trip is created, the user can join that room to begin creating a schedule for their group\u2019s trip. The task pane in the trip room allows users to assign and distribute tasks, such as research about particularly events, places, and things to do, so everyone\u2019s time is maximized and no double effort waste occurs. "):null;return r.a.createElement("div",{className:"landing-container"},r.a.createElement("div",{className:"landing-overlay"},r.a.createElement("h1",{className:"landing-h1"},"Plan-it"),r.a.createElement("div",{className:"landing-subhead"},r.a.createElement("h2",{className:"landing-h2"},"Bringing effectiveness to your group's travel planning"),r.a.createElement("div",{className:"landing-more-wrapper"},r.a.createElement("div",{className:"accordion",onClick:this.handleMore},e,t)))))}}]),t}(r.a.Component)),G=a(321),B=function(e){return{type:"FETCH_DATA_ERROR",error:e}},M=function(e,t){return function(a){fetch("".concat(h.API_ORIGIN,"/api/events/").concat(e),{method:"GET",headers:{"content-type":"application/json","x-auth":t}}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){a(function(e){return{type:"SET_EVENT",data:e}}(e))}).catch(function(e){window.alert(e)})}},J=(a(109),function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).onJoin=function(e){var t=a.props.events.find(function(t){return t._id===e});if(!t.password)return a.props.joinEventRoom(t._id),a.props.history.push("/events/".concat(e));var n=prompt("Please enter the password here:");return null===n||""===n?alert("must enter a value"):n===t.password?(a.props.joinEventRoom(t._id),a.props.history.push("/events/".concat(e))):alert("Incorrect Password!")},a.onDelete=function(e){console.log(e);var t=a.props.events.find(function(t){return t._id===e}),n=prompt("Please enter the password here:");return null===n||""===n?alert("must enter the value"):n!==t.password?alert("Incorrect Password!"):void a.props.deleteEvent(e,a.props.token)},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"event-card-container created-cards"},r.a.createElement("img",{className:"event-card-image card-item",alt:"no image set by creator for ".concat(this.props.title),src:this.props.imageUrl,height:"175",width:"275"}),r.a.createElement("div",{className:"event-card-title card-item"},this.props.title),r.a.createElement("div",{className:"event-card-description card-item"},this.props.description),r.a.createElement("button",{className:"card-item","data-event-id":this.props._id,onClick:function(t){e.onJoin(t.currentTarget.getAttribute("data-event-id"))}},"JOIN"),r.a.createElement("button",{className:"card-item","data-event-id":this.props._id,onClick:function(t){e.onDelete(t.currentTarget.getAttribute("data-event-id"))}},"DELETE"))}}]),t}(n.Component)),K=Object(o.b)(function(e){return{token:e.auth.authToken,events:e.protected_data.events}},function(e){return{deleteEvent:function(t,a){return e(function(e){return function(t,a){var n=a().auth.authToken;return t({type:"AUTH_REQUEST"}),fetch("".concat(h.API_ORIGIN,"/api/events/").concat(e),{method:"DELETE",headers:{"x-auth":n}}).then(function(e){return m(e)}).then(function(e){console.log("delete res.json",e)}).then(function(){console.log("delete data",e),t({type:"DELETE_EVENT",data:e})}).catch(function(e){console.log("delete event err",e),t(B(e))})}}(t))},joinEventRoom:function(t){return e(function(e){return function(t,a){var n=a().auth.authToken,r=a().auth.userID;fetch("".concat(h.API_ORIGIN,"/api/events/").concat(e,"/join/").concat(r),{method:"POST",headers:{"content-type":"application/json","x-auth":n}}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(a){t(M(e,n))}).catch(function(e){window.alert(e)})}}(t))}}})(Object(P.a)(J)),Q=a(14),V=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={imageUrl:"",title:"",description:"",password:""},a.handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log("event create props",a.props.token),a.props.createEvent(a.state,a.props.token),a.setState({imageUrl:"",title:"",description:"",password:""})},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"event-create-container event-card-container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"card-item create-card-heading"},"Create New Trip"),r.a.createElement("img",{className:"event-card-image card-item",alt:"no image set by creator for ".concat(this.props.title),src:"https://upload.wikimedia.org/wikipedia/commons/5/54/1_hallstatt_austria.jpg",height:"175",width:"275"}),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("label",{htmlFor:"title"},"Title:"),r.a.createElement("input",{type:"title",id:"title",value:this.state.title,onChange:this.handleChange})),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("label",{htmlFor:"description"},"Description:"),r.a.createElement("input",{type:"description",id:"description",value:this.state.description,onChange:this.handleChange})),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("label",{htmlFor:"image"},"Image URL:"),r.a.createElement("input",{type:"description",id:"imageUrl",value:this.state.imageUrl,onChange:this.handleChange})),r.a.createElement("div",{className:"card-item create-card-item"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{className:"card-item create-card-item"},"Create")))}}]),t}(n.Component),Y=Object(o.b)(function(e){return{token:e.auth.authToken}},function(e){return{createEvent:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_REQUEST"}),fetch("".concat(h.API_ORIGIN,"/api/events"),{method:"POST",headers:{"content-type":"application/json","x-auth":t},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("DATA DATA",e),a(function(e){return{type:"ADD_EVENT",data:e}}(e))}).catch(function(e){window.alert("".concat(e,": Password, Title, Description Required!"))})}}(t,a))}}})(V),W=(a(246),function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(function(e,t){var a=t().auth.authToken;return fetch("".concat(h.API_ORIGIN,"/api/events"),{method:"GET",headers:{"x-auth":a}}).then(function(e){return m(e)}).then(function(e){return e.json()}).then(function(t){return e(function(e){return{type:"FETCH_PROTECTED_DATA_SUCCESS",data:e}}(t))}).catch(function(t){e(B(t))})})}},{key:"render",value:function(){if(this.props.loggedIn&&void 0!==this.props.events){var e=this.props.events.map(function(e,t){return r.a.createElement(K,Object.assign({index:t,key:t},e))});return r.a.createElement("div",{className:"dashboard-wrapper"},r.a.createElement("div",{className:"background-image-overlay"}),r.a.createElement(Y,null),r.a.createElement("div",{className:"eventcards-wrapper"},e))}return r.a.createElement(G.a,{to:"/signin"})}}]),t}(r.a.Component)),q=Object(o.b)(function(e){return{events:e.protected_data.events,protectedData:e.protected_data.data,loggedIn:null!==e.auth.username}})(Object(P.a)(W)),Z=function(e){return{type:"FETCH_DATA_ERROR",error:e}},z=function(e){return function(t,a){var n=a().auth.authToken;return fetch("".concat(h.API_ORIGIN,"/api/events/").concat(e,"/tasks"),{method:"GET",headers:{"x-auth":n}}).then(function(e){return m(e)}).then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"FETCH_TASKS_SUCCESS",data:e}}(e))}).catch(function(e){t(Z(e))})}},X=function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;return fetch("".concat(h.API_ORIGIN,"/api/events/").concat(r,"/tasks/").concat(e),{method:"DELETE",headers:{"x-auth":n}}).then(function(e){return m(e)}).then(function(){t({type:"DELETE_TASK",data:e})}).catch(function(e){console.log("delete event err",e)})}},$=(a(63),function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).handleCheckBox=function(e){console.log("checkbox",a.state.checkBox),a.setState(Object(Q.a)({},e.target.id,!a.props.completed),function(){a.props.updateTask(a.props._id,a.state.checkBox,a.props.taskDetails)})},a.state={checkBox:e.completed},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=r.a.createElement("input",{type:"checkbox",id:"checkBox",checked:this.props.completed,onChange:this.handleCheckBox});return r.a.createElement("div",{className:"individual-task-wrapper"},e,r.a.createElement("div",{className:"task-text"},this.props.taskDetails))}}]),t}(n.Component)),ee=Object(o.b)(function(e){return{}},function(e){return{updateTask:function(t,a,n){return e(function(e,t,a){return function(n,r){var c=r().auth.authToken,s=r().event_room.eventID;console.log("inputs:",t,"taskID:",e,s),fetch("".concat(h.API_ORIGIN,"/api/events/").concat(s,"/tasks/").concat(e),{method:"PUT",headers:{"content-type":"application/json","x-auth":c},body:JSON.stringify({completed:t,taskDetails:a})}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("TASK PUT DATA",e),n(z(s))}).catch(function(e){window.alert(e)})}}(t,a,n))}}})($),te=(a(110),function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).handleClear=function(){a.props.tasks.map(function(e){!0===e.completed&&a.props.dispatch(X(e._id))})},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.tasks.map(function(e,t){return r.a.createElement(ee,Object.assign({index:t,key:t},e))});return r.a.createElement("div",{className:"user-tasks"},r.a.createElement("div",{className:"tasks-username"},this.props.tasks[0].user.username),e,r.a.createElement("button",{className:"clear-completed-button",onClick:this.handleClear},"Clear completed"))}}]),t}(n.Component)),ae=Object(o.b)(function(e){return{eventRoom:e.event_room.event}})(te),ne=a(148),re=a.n(ne),ce=a(149),se=a.n(ce),oe=a(150),ie=a.n(oe),le=function(e,t){return function(a,n){var r=n().auth.authToken,c=n().event_room.eventID;console.log("inputs:",e,"taskID:",e.dateEdit,e.detailsEdit,e.locationEdit),fetch("".concat(h.API_ORIGIN,"/api/events/").concat(c,"/schedule/").concat(t),{method:"PUT",headers:{"content-type":"application/json","x-auth":r},body:JSON.stringify({date:e.dateEdit,details:e.detailsEdit,location:e.locationEdit})}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("Schedule PUT DATA",e),a({type:"UPDATE_SCHEDULE",data:e})}).catch(function(e){window.alert(e)})}},ue=function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;return fetch("".concat(h.API_ORIGIN,"/api/events/").concat(r,"/schedule/").concat(e),{method:"DELETE",headers:{"x-auth":n}}).then(function(e){return m(e)}).then(function(e){console.log("delete res.json",e)}).then(function(){t({type:"DELETE_SCHEDULE",data:e})}).catch(function(e){console.log("delete event err",e)})}},de=a(151),he=a.n(de),me=(a(64),a(251),function(e){function t(e){var a;return Object(A.a)(this,t),(a=Object(_.a)(this,Object(C.a)(t).call(this,e))).handleScheduleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value)),console.log(a.state)},a.handleScheduleEdit=function(){a.setState({edit:!a.state.edit})},a.handleScheduleUpdate=function(){a.props.dispatch(le(a.state,a.props._id)),a.setState({date:"",details:"",location:"",edit:!1})},a.handleScheduleDelete=function(){a.props.dispatch(ue(a.props._id))},a.state={dateEdit:"",detailsEdit:"",locationEdit:"",edit:!1},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){this.props.submitSucceeded&&r.a.createElement("div",{className:"message message-success"},"Message submitted successfully"),this.props.error&&r.a.createElement("div",{className:"message message-error"},this.props.error);var e=this.state.edit?r.a.createElement("span",null,r.a.createElement("img",{src:se.a,alt:"cancel"}),r.a.createElement("span",{className:"tooltiptext"},"Cancel")):r.a.createElement("span",null,r.a.createElement("img",{src:re.a,alt:"edit"}),r.a.createElement("span",{className:"tooltiptext"},"Edit")),t=this.state.edit?r.a.createElement("form",{onSubmit:this.handleScheduleUpdate},r.a.createElement("ul",{className:"schedule-edit-inputs"},r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"locationEdit"},"Location"),r.a.createElement("input",{type:"text",id:"locationEdit",className:"schedule-inputs",onChange:this.handleScheduleChange,placeholder:"Location: e.g., place & city",value:this.state.location})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"dateEdit"},"Date"),r.a.createElement("input",{type:"datetime-local",id:"dateEdit",className:"schedule-inputs",value:this.state.date,onChange:this.handleScheduleChange})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"detailsEdit"},"Details"),r.a.createElement("input",{type:"text",id:"detailsEdit",className:"schedule-inputs",value:this.state.details,onChange:this.handleScheduleChange,placeholder:"details of activity, place, etc..."}))),r.a.createElement("button",null,"Save")):null;return r.a.createElement("div",{className:"schedule-wrapper"},r.a.createElement("ul",{className:"schedule-parent-date"},r.a.createElement("li",{className:"schedule-item schedule-date"},he()(this.props.date).format("dddd, MMMM Do YYYY, h:mm:ss a")),r.a.createElement("li",{className:"schedule-buttons-wrapper"},r.a.createElement("div",{className:"edit-schedule-button",onClick:this.handleScheduleEdit},e),r.a.createElement("div",{className:"delete-schedule-button",onClick:this.handleScheduleDelete},r.a.createElement("img",{src:ie.a,alt:"delete"}),r.a.createElement("span",{className:"tooltiptext"},"Delete")))),r.a.createElement("ul",{className:"schedule-parent-details"},r.a.createElement("li",{className:"schedule-item schedule-location"},this.props.location),r.a.createElement("li",{className:"schedule-item schedule-details"},this.props.details)),r.a.createElement("div",{className:"edit-schedule"},t))}}]),t}(n.Component)),pe=Object(o.b)(function(e){return{schedules:e.event_room.schedules}})(me),fe=(a(310),function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={date:"",details:"",location:""},a.handleScheduleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleScheduleSubmit=function(e){if(e.preventDefault(),""===a.state.date||""===a.state.description)return alert("Date, Time, and Description cannot be blank");a.props.createSchedule(a.state),a.setState({date:"",details:"",location:""})},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"schedule-create-container",onSubmit:this.handleScheduleSubmit},r.a.createElement("ul",{className:"schedule-create-inputs"},r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"location"},"Location"),r.a.createElement("input",{type:"text",id:"location",className:"schedule-inputs",onChange:this.handleScheduleChange,placeholder:"Location: e.g., place & city",value:this.state.location})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"date"},"Date"),r.a.createElement("input",{type:"datetime-local",id:"date",className:"schedule-inputs",value:this.state.date,onChange:this.handleScheduleChange})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"details"},"Details"),r.a.createElement("input",{type:"text",id:"details",className:"schedule-inputs",value:this.state.details,onChange:this.handleScheduleChange,placeholder:"details of activity, place, etc..."}))),r.a.createElement("button",null,"Add Item to the Schedule")))}}]),t}(n.Component)),Ee=Object(o.b)(function(e){return{}},function(e){return{createSchedule:function(t,a){return e(function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;fetch("".concat(h.API_ORIGIN,"/api/events/").concat(r,"/schedule"),{method:"POST",headers:{"content-type":"application/json","x-auth":n},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){t(function(e){return{type:"ADD_TO_SCHEDULE",data:e}}(e))}).catch(function(e){window.alert(e)})}}(t))}}})(fe),ve=(a(141),function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={taskDetails:"",user:""},a.handleChange=function(e){""===a.state.user&&a.setState({user:a.props.users[0]._id}),a.setState(Object(Q.a)({},e.target.id,e.target.value)),console.log("state",a.state)},a.handleSubmit=function(e){if(e.preventDefault(),""===a.state.taskDetails)return alert("Description cannot be blank");a.props.createTask(a.state),a.setState({taskDetails:""})},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){if(void 0!==this.props.users){var e=this.props.users.map(function(e,t){return r.a.createElement("option",{key:t,id:e,value:e._id},e.username)});return r.a.createElement("form",{className:"task-form",onSubmit:this.handleSubmit},r.a.createElement("div",null,"Assign task to user:"),r.a.createElement("div",{className:"select-user"},r.a.createElement("select",{id:"user",onChange:this.handleChange},e)),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"taskDetails"}),r.a.createElement("textarea",{className:"desc-input",value:this.state.taskDetails,placeholder:"e.g., research accomodations, restaurants, sites, museums, etc...",type:"text",id:"taskDetails",rows:"5",onChange:this.handleChange})),r.a.createElement("button",null,"Create New Task"))}return r.a.createElement("div",null,"Loading...")}}]),t}(n.Component)),ge=Object(o.b)(function(e){return{users:e.event_room.event.users,token:e.auth.authToken}},function(e){return{createTask:function(t,a){return e(function(e){return function(t,a){var n=a().auth.authToken,r=a().event_room.eventID;console.log("inputs:",e),fetch("".concat(h.API_ORIGIN,"/api/events/").concat(r,"/tasks/user/").concat(e.user),{method:"POST",headers:{"content-type":"application/json","x-auth":n},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("Task DATA dispatching to store:",e),t(function(e){return{type:"ADD_TO_TASKS",data:e}}(e))}).catch(function(e){window.alert(e)})}}(t))}}})(ve),be=function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e,t=this.props.match.params.id;this.props.dispatch((e=t,function(t,a){var n=a().auth.authToken;return fetch("".concat(h.API_ORIGIN,"/api/events/").concat(e,"/schedule"),{method:"GET",headers:{"x-auth":n}}).then(function(e){return m(e)}).then(function(e){return e.json()}).then(function(e){t(function(e){return{type:"FETCH_SCHEDULES_SUCCESS",data:e}}(e))}).catch(function(e){t(Z(e))})})),this.props.dispatch(z(t))}},{key:"render",value:function(){var e=this;if(this.props.loggedIn&&void 0!==this.props.tasks){var t=this.props.schedules.map(function(e,t){return r.a.createElement(pe,Object.assign({index:t,key:t},e))}),a=Object(b.a)(new Set(this.props.tasks.map(function(e){return e.user.username}))).map(function(t){return e.props.tasks.filter(function(e){return e.user.username===t})}).map(function(e,t){return r.a.createElement(ae,{index:t,key:t,tasks:e})});return r.a.createElement("div",{className:"event-room-container"},r.a.createElement("h1",{className:"event-title"},this.props.event.title),r.a.createElement("div",{className:"event-room-wrapper"},r.a.createElement("div",{className:"tasks-container"},r.a.createElement("div",{className:"tasks-wrapper"},a),r.a.createElement("div",{className:"task-create-wrapper"},r.a.createElement(ge,null))),r.a.createElement("div",{className:"schedule-container"},t,r.a.createElement(Ee,null))))}return r.a.createElement(G.a,{to:"/signin"})}}]),t}(r.a.Component),Oe=Object(o.b)(function(e){return{loading:e.event_room.loading,eventID:e.event_room.eventID,event:e.event_room.event,schedules:e.event_room.schedules,tasks:e.event_room.tasks,protectedData:e.protected_data.data,loggedIn:null!==e.auth.username}})(Object(P.a)(be)),je=(a(142),function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault();a.state.email,a.state.password;a.props.signin(a.state),a.setState({email:"",password:""})},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return this.props.loggedIn?r.a.createElement(G.a,{to:"/dashboard"}):r.a.createElement("div",{className:"auth-container"},r.a.createElement("form",{className:"auth-form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{className:"auth-item auth-submit-button"},"Login")))}}]),t}(n.Component)),Te=Object(o.b)(function(e){return{loggedIn:null!==e.auth.username}},function(e){return{signin:function(t){return e(function(e){return function(t){t({type:"AUTH_REQUEST"}),fetch("".concat(h.API_ORIGIN,"/api/users/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():Promise.reject(e.statusText)}).then(function(e){console.log("user signin res",e),f(e,t)}).catch(function(e){window.alert(e)})}}(t))}}})(je),ke=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(_.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",username:""},a.handleChange=function(e){a.setState(Object(Q.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){return e.preventDefault(),a.props.signup(a.state),a.setState({email:"",password:"",username:""}),a.props.history.push("/dashboard")},a}return Object(D.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"auth-container"},r.a.createElement("form",{className:"auth-form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement("input",{type:"username",id:"username",value:this.state.username,onChange:this.handleChange})),r.a.createElement("div",{className:"auth-item"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("button",{className:"auth-item auth-submit-button"},"Sign-up")))}}]),t}(n.Component),ye=Object(o.b)(function(e){return{}},function(e){return{signup:function(t){return e(function(e){return function(t){return fetch("".concat(h.API_ORIGIN,"/api/users"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return m(e)}).then(function(e){return e.json()}).catch(function(e){window.alert(e)})}}(t))}}})(ke),Se=a(322),Ae=a(323),Ne=a(239),_e=(a(314),function(e){function t(){return Object(A.a)(this,t),Object(_.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(N.a)(t,[{key:"componentDidUpdate",value:function(e){!e.loggedIn&&this.props.loggedIn?this.startPeriodicRefresh():e.loggedIn&&!this.props.loggedIn&&this.stopPeriodicRefresh()}},{key:"componentWillUnmount",value:function(){this.stopPeriodicRefresh()}},{key:"startPeriodicRefresh",value:function(){var e=this;this.refreshInterval=setInterval(function(){return e.props.dispatch(E())},36e5)}},{key:"stopPeriodicRefresh",value:function(){this.refreshInterval&&clearInterval(this.refreshInterval)}},{key:"render",value:function(){return r.a.createElement(Se.a,null,r.a.createElement("div",{className:"root-container"},r.a.createElement("header",{className:"App-header"},r.a.createElement(L,null)),r.a.createElement("main",null,r.a.createElement(Ae.a,null,r.a.createElement(Ne.a,{exact:!0,path:"/",component:F}),r.a.createElement(Ne.a,{path:"/dashboard",component:q}),r.a.createElement(Ne.a,{exact:!0,path:"/events/:id",component:Oe}),r.a.createElement(Ne.a,{path:"/signin",component:Te}),r.a.createElement(Ne.a,{path:"/signup",component:ye}))),r.a.createElement("footer",null,r.a.createElement(H,null))))}}]),t}(n.Component)),Ce=Object(o.b)(function(e){return{hasAuthToken:null!==e.auth.authToken,loggedIn:null!==e.auth.username}})(_e);a(316),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(o.a,{store:S},r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){}},[[153,2,1]]]);
//# sourceMappingURL=main.611b3c40.chunk.js.map