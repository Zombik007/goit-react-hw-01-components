(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),i=a.n(n),r=(a(12),a(5)),d=a(6),l=a(3),b=a(7),o=a.p+"static/media/default.ff788981.png",j=a(0),u=function(e){var t=e.isOnline,a=e.avatar,c=e.name,s=e.id;return Object(j.jsxs)("li",{class:"item",children:[Object(j.jsx)("span",{class:"status",children:t}),Object(j.jsx)("img",{class:"avatar",src:a,alt:c,width:"48"}),Object(j.jsx)("p",{class:"name",children:c})]},s)};u.defaultProps={avatar:o};var p=u,f=function(e){var t=e.friends;return Object(j.jsx)("ul",{class:"friend-list",children:t.map((function(e){var t=e.id,a=e.avatar,c=e.name,s=e.isOnline;return Object(j.jsx)(p,{avatar:a,name:c,isOnline:s},t)}))})},m=function(e){var t=e.name,a=e.tag,c=e.location,s=e.avatar,n=e.stats;return Object(j.jsxs)("div",{class:"profile",children:[Object(j.jsxs)("div",{class:"description",children:[Object(j.jsx)("img",{src:s,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",class:"avatar"}),Object(j.jsx)("p",{class:"name",children:t}),Object(j.jsxs)("p",{class:"tag",children:["@",a]}),Object(j.jsx)("p",{class:"location",children:c})]}),Object(j.jsxs)("ul",{class:"stats",children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{class:"label",children:"Followers"}),Object(j.jsx)("span",{class:"quantity",children:n.followers})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{class:"label",children:"Views"}),Object(j.jsx)("span",{class:"quantity",children:n.views})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{class:"label",children:"Likes"}),Object(j.jsx)("span",{class:"quantity",children:n.likes})]})]})]})};m.defaultProps={avatar:o};var O=m,h=function(e){var t=e.user;return Object(j.jsx)(O,{name:t.name,tag:t.tag,location:t.location,avatar:t.avatar,stats:t.stats})},y=function(e){var t=e.label,a=e.percentage,c=e.id;return Object(j.jsxs)("li",{class:"item",children:[Object(j.jsx)("span",{class:"label",children:t}),Object(j.jsx)("span",{class:"percentage",children:a})]},c)},v=function(e){var t=e.title,a=e.stats;return Object(j.jsxs)("section",{class:"statistics",children:[{title:t}&&Object(j.jsx)("h2",{class:"title",children:t}),Object(j.jsx)("ul",{class:"stat-list",children:a.map((function(e){var t=e.label,a=e.percentage,c=e.id;return Object(j.jsx)(y,{label:t,percentage:a},c)}))})]})},x=function(e){var t=e.type,a=e.amount,c=e.currency,s=e.id;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:c})]},s)},w=function(e){var t=e.items;return Object(j.jsxs)("table",{class:"transaction-history",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{children:"Amount"}),Object(j.jsx)("th",{children:"Currency"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=e.type,a=e.amount,c=e.currency,s=e.id;return Object(j.jsx)(x,{type:t,amount:a,currency:c},s)}))})]})};var g=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{friends:r}),Object(j.jsx)(h,{user:d}),Object(j.jsx)(v,{title:"Upload stats",stats:l}),Object(j.jsx)(v,{stats:l}),Object(j.jsx)(w,{items:b})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.17a91654.chunk.js.map