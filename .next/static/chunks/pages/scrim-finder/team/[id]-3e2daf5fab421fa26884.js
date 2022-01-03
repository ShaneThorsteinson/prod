(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{5642:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var s=t(9993),i=t(7310),a=t(7322),r=t(4658),l=t(9650),c=t(7294),u=t(1363),o=t(325),d=t(9827),m=t(5861),f=t(7757),x=t.n(f),p=t(8767),h=t(2982),j=t(5893);function v(e){var n=e.teamId,t=e.onClose,s=void 0===t?function(e){return e}:t,i=(0,p.useQueryClient)(),a=(0,p.useMutation)((function(){return h.Z.joinTeam(n)})),l=a.mutateAsync,c=a.isLoading,u=(0,p.useMutation)((function(){return h.Z.leaveTeam(n)})),d=u.mutateAsync,f=u.isLoading,v=function(){var e=(0,m.Z)(x().mark((function e(){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.refetchQueries(["team",{id:n}]).then(s));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsx)(o.Z,{type:"warning",className:"mt-4",children:(0,j.jsxs)("div",{className:"flex justify-between flex-col lg:items-center lg:flex-row",children:[(0,j.jsx)("div",{children:"You were invited to join this team"}),(0,j.jsxs)("div",{className:"flex flex-col space-x-0 space-y-2 mt-2 items-start md:flex-row md:space-y-0 md:space-x-2 lg:mt-0",children:[(0,j.jsx)(r.Z,{onClick:function(){l().then(v)},className:"w-full md:w-auto",size:"small",loading:c,outlined:!0,children:"Join"}),(0,j.jsx)(r.Z,{onClick:function(){d().then(v)},className:"w-full md:w-auto",size:"small",loading:f,outlined:!0,children:"Leave"})]})]})})}var w=t(4888),y=t(1879),g=t(7068);function N(e){var n=e.team,t=(0,c.useState)(!1),s=t[0],a=t[1],l=(0,c.useState)(!1),m=l[0],f=l[1],x=(0,c.useState)(!1),p=x[0],h=x[1],N=(0,c.useState)(!1),Z=N[0],C=N[1],_=(0,g.a)().user;return(0,c.useEffect)((function(){null!==_&&void 0!==_&&_.id&&null!==n&&void 0!==n&&n.players&&n.players.find((function(e){return e.userId===_.id&&"waiting"===e.status}))?h(!0):h(!1)}),[_,n]),(0,c.useEffect)((function(){null!==_&&void 0!==_&&_.id&&null!==n&&void 0!==n&&n.players&&n.players.find((function(e){return e.userId===_.id&&!0===e.isCaptain}))?C(!0):C(!1)}),[_,n]),(0,j.jsxs)(j.Fragment,{children:[s&&(0,j.jsx)(y.Z,{onClose:function(){return a(!1)}}),m&&(0,j.jsx)(w.Z,{onClose:function(){return f(!1)}}),(0,j.jsx)(i.Z,{className:"pt-10",title:"Scrim Finder",descripiton:"First step is to create your team. Invite your teammates once they've made accounts, and begin competing in ranked scrims or tournaments!"}),p&&(0,j.jsx)(v,{teamId:n.id,onClose:function(){return h(!1)}}),Z&&(0,j.jsx)(o.Z,{type:"success",className:"mt-4",children:(0,j.jsxs)("div",{className:"flex justify-between flex-col lg:items-center lg:flex-row",children:[(0,j.jsx)("div",{children:"Here you can create new team or use one of your previous."}),(0,j.jsxs)("div",{className:"flex flex-col space-x-0 space-y-2 mt-2 items-start md:flex-row md:space-y-0 md:space-x-2 lg:mt-0",children:[(0,j.jsx)(r.Z,{onClick:function(){return a(!0)},className:"w-full md:w-auto",size:"small",outlined:!0,children:"Create a new team"}),(0,j.jsx)(r.Z,{onClick:function(){return f(!0)},className:"w-full md:w-auto",size:"small",outlined:!0,children:"Use one of my previuos teams"})]})]})}),(0,j.jsxs)("div",{className:"mt-4 grid gap-4 lg:grid-cols-12",children:[(0,j.jsx)(d.Z,{hasControl:Z,team:n,className:"p-4 md:pt-6 lg:p-8 lg:pt-6 lg:col-span-8"}),(0,j.jsx)(u.Z,{team:n,isCaptain:Z})]})]})}var Z=t(9066),C=t(7897),_=t(9008),k=t(1163);var b=(0,C.Z)((function(){var e=(0,k.useRouter)().query.id,n=(0,p.useQuery)(["team",{id:e}],(function(){return h.Z.getTeam(e)}),{retry:!1,enabled:!!e}),t=n.status,c=n.data;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_.default,{children:(0,j.jsxs)("title",{children:["Scrim Finder ",c?"- ".concat(c.name):""]})}),(0,j.jsx)(s.Z,{children:(0,j.jsxs)(l.Z,{className:"mt-20",children:[("idle"===t||"loading"===t)&&(0,j.jsx)(a.Z,{className:"h-80"}),"success"===t&&(0,j.jsx)(N,{team:c}),"error"===t&&(0,j.jsx)(i.Z,{title:"Not Found Team",className:"pb-10 pt-5 md:py-[20vh]",children:(0,j.jsx)(r.Z,{className:"mt-4",shined:!0,children:"Go To Scrim Finder"})}),(0,j.jsx)(Z.Z,{className:"mt-4"})]})})]})}))},2749:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scrim-finder/team/[id]",function(){return t(5642)}])},9008:function(e,n,t){e.exports=t(639)}},function(e){e.O(0,[3014,9133,7506,2283,4172,324,9471,5855,4807,331,9827,2037,9774,2888,179],(function(){return n=2749,e(e.s=n);var n}));var n=e.O();_N_E=n}]);