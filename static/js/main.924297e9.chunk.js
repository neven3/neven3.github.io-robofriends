(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var s=n(1),l=n(2),i=n(4),u=n(3),h=function(e){var t=e.name,n=e.email,a=e.id,o=e.username;return r.a.createElement("div",{className:"card tc bg-light-green dib pa3 ma2 grow bw2 shadow-5 br4"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?size=200x200"),alt:"robot"}),r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,t),r.a.createElement("p",null,r.a.createElement("i",null,o)),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,username:e.username,email:e.email})}));return r.a.createElement("main",null,t)},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"Find your robot",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},f=(n(14),function(e){return r.a.createElement("div",{style:{height:"500px",overflowY:"scroll"}},e.children)}),b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops, something went wrong..."):this.props.children}}]),n}(a.Component),p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return this.state.robots.length?r.a.createElement("div",{className:"tc"},r.a.createElement("header",null,r.a.createElement("h1",null,"RoboFriends")),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(m,{robots:t})))):r.a.createElement("h1",{className:"tc"},"Loading...")}}]),n}(a.Component);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.924297e9.chunk.js.map