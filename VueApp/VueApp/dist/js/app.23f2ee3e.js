(function(e){function u(u){for(var n,o,r=u[0],V=u[1],s=u[2],c=0,d=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&d.push(t[o][0]),t[o]=0;for(n in V)Object.prototype.hasOwnProperty.call(V,n)&&(e[n]=V[n]);l&&l(u);while(d.length)d.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var e,u=0;u<i.length;u++){for(var a=i[u],n=!0,r=1;r<a.length;r++){var V=a[r];0!==t[V]&&(n=!1)}n&&(i.splice(u--,1),e=o(o.s=a[0]))}return e}var n={},t={app:0},i=[];function o(u){if(n[u])return n[u].exports;var a=n[u]={i:u,l:!1,exports:{}};return e[u].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,u,a){o.o(e,u)||Object.defineProperty(e,u,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,u){if(1&u&&(e=o(e)),8&u)return e;if(4&u&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&u&&"string"!=typeof e)for(var n in e)o.d(a,n,function(u){return e[u]}.bind(null,n));return a},o.n=function(e){var u=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(u,"a",u),u},o.o=function(e,u){return Object.prototype.hasOwnProperty.call(e,u)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],V=r.push.bind(r);r.push=u,r=r.slice();for(var s=0;s<r.length;s++)u(r[s]);var l=V;i.push([0,"chunk-vendors"]),a()})({0:function(e,u,a){e.exports=a("56d7")},"56d7":function(e,u,a){"use strict";a.r(u);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n,t=a("2b0e"),i=function(){var e=this,u=e.$createElement,a=e._self._c||u;return a("div",{attrs:{id:"app"}},[a("Home",{attrs:{msg:"Vue App"}})],1)},o=[],r=function(){var e=this,u=e.$createElement,a=e._self._c||u;return a("div",{staticClass:"home"},[a("h1",[e._v(e._s(e.msg))]),a("p",[e._v("This Vue app with includs an auto-complete text input web component.")]),a("p",[e._v("Student: se21m024 @Technikum Wien")]),a("div",[a("my-auto-complete-text-input",{attrs:{id:"auto-complete-ti",title:e.title,suggestions:e.suggestedCountries}})],1)])},V=[],s=(a("e9c4"),a("7459")),l=a("8785"),c=a("d4ec"),d=a("bee2"),p=a("262e"),g=a("2caf"),h=(a("7db0"),a("d3b7"),a("2ca0"),a("c905")),m=function(e){Object(p["a"])(a,e);var u=Object(g["a"])(a);function a(){var e;return Object(c["a"])(this,a),e=u.call(this),e.title="Default title",e.suggestions="[]",e.addEventListener("focusout",e.onFocusout),e}return Object(d["a"])(a,[{key:"render",value:function(){var e=this;return Object(h["b"])(n||(n=Object(l["a"])(["\n        <div>\n            <label>",'</label><br>\n            <input type="text" \n                id="auto-complete-text-input"\n                name="auto-complete-text-input" \n                placeholder="Type your country here..."\n                @keyup=','>\n            <br/>\n            <button\n                id="auto-complete-suggestion"\n                name="auto-complete-suggestion"\n                @click=','\n                style="visibility:hidden;width:fit-content;height:fit-content">\n        </div>\n    '])),this.title,(function(u){return e.onInputTextChanged(u.target.value)}),(function(u){return e.onSuggestionClick(u.target.innerHTML)}))}},{key:"onFocusout",value:function(){var e=this.shadowRoot.getElementById("auto-complete-text-input").value;console.log("Emit current input text value: "+e);var u=new CustomEvent("current-input-value",{detail:{message:e}});this.dispatchEvent(u)}},{key:"onInputTextChanged",value:function(e){if(console.log("Text changed to: "+e),e.length<1)this.shadowRoot.getElementById("auto-complete-suggestion").style.visibility="hidden";else{var u=JSON.parse(this.suggestions).find((function(u){return u.toLowerCase().startsWith(e.toLowerCase())}));console.log("New suggestion: "+u),void 0==u||u.length<1?this.shadowRoot.getElementById("auto-complete-suggestion").style.visibility="hidden":(this.shadowRoot.getElementById("auto-complete-suggestion").innerHTML=u,this.shadowRoot.getElementById("auto-complete-suggestion").style.visibility="visible")}}},{key:"onSuggestionClick",value:function(e){console.log("Suggestion box was clicked."),this.shadowRoot.getElementById("auto-complete-text-input").value=e}}],[{key:"properties",get:function(){return{title:{type:String},suggestions:{type:String}}}}]),a}(h["a"]);customElements.define("my-auto-complete-text-input",m);var b={name:"Home",props:{msg:String},data:function(){return{title:"Country Search",suggestedCountries:JSON.stringify(s)}}},f=b,y=a("2877"),v=Object(y["a"])(f,r,V,!1,null,"3903d261",null),S=v.exports,I={name:"app",components:{Home:S}},w=I,C=Object(y["a"])(w,i,o,!1,null,null,null),M=C.exports;t["a"].config.productionTip=!0,new t["a"]({render:function(e){return e(M)}}).$mount("#app")},7459:function(e){e.exports=JSON.parse('["Afghanistan (Vue)","land Islands (Vue)","Albania (Vue)","Algeria (Vue)","American Samoa (Vue)","AndorrA (Vue)","Angola (Vue)","Anguilla (Vue)","Antarctica (Vue)","Antigua and Barbuda (Vue)","Argentina (Vue)","Armenia (Vue)","Aruba (Vue)","Australia (Vue)","Austria (Vue)","Azerbaijan (Vue)","Bahamas (Vue)","Bahrain (Vue)","Bangladesh (Vue)","Barbados (Vue)","Belarus (Vue)","Belgium (Vue)","Belize (Vue)","Benin (Vue)","Bermuda (Vue)","Bhutan (Vue)","Bolivia (Vue)","Bosnia and Herzegovina (Vue)","Botswana (Vue)","Bouvet Island (Vue)","Brazil (Vue)","British Indian Ocean Territory (Vue)","Brunei Darussalam (Vue)","Bulgaria (Vue)","Burkina Faso (Vue)","Burundi (Vue)","Cambodia (Vue)","Cameroon (Vue)","Canada (Vue)","Cape Verde (Vue)","Cayman Islands (Vue)","Central African Republic (Vue)","Chad (Vue)","Chile (Vue)","China (Vue)","Christmas Island (Vue)","Cocos (Keeling) Islands (Vue)","Colombia (Vue)","Comoros (Vue)","Congo (Vue)","Congo, The Democratic Republic of the (Vue)","Cook Islands (Vue)","Costa Rica (Vue)","Cote D Ivoire (Vue)","Croatia (Vue)","Cuba (Vue)","Cyprus (Vue)","Czech Republic (Vue)","Denmark (Vue)","Djibouti (Vue)","Dominica (Vue)","Dominican Republic (Vue)","Ecuador (Vue)","Egypt (Vue)","El Salvador (Vue)","Equatorial Guinea (Vue)","Eritrea (Vue)","Estonia (Vue)","Ethiopia (Vue)","Falkland Islands (Malvinas) (Vue)","Faroe Islands (Vue)","Fiji (Vue)","Finland (Vue)","France (Vue)","French Guiana (Vue)","French Polynesia (Vue)","French Southern Territories (Vue)","Gabon (Vue)","Gambia (Vue)","Georgia (Vue)","Germany (Vue)","Ghana (Vue)","Gibraltar (Vue)","Greece (Vue)","Greenland (Vue)","Grenada (Vue)","Guadeloupe (Vue)","Guam (Vue)","Guatemala (Vue)","Guernsey (Vue)","Guinea (Vue)","Guinea-Bissau (Vue)","Guyana (Vue)","Haiti (Vue)","Heard Island and Mcdonald Islands (Vue)","Holy See (Vatican City State) (Vue)","Honduras (Vue)","Hong Kong (Vue)","Hungary (Vue)","Iceland (Vue)","India (Vue)","Indonesia (Vue)","Iran, Islamic Republic Of (Vue)","Iraq (Vue)","Ireland (Vue)","Isle of Man (Vue)","Israel (Vue)","Italy (Vue)","Jamaica (Vue)","Japan (Vue)","Jersey (Vue)","Jordan (Vue)","Kazakhstan (Vue)","Kenya (Vue)","Kiribati (Vue)","Korea, Democratic Peoples Republic of (Vue)","Korea, Republic of (Vue)","Kuwait (Vue)","Kyrgyzstan (Vue)","Lao Peoples Democratic Republic (Vue)","Latvia (Vue)","Lebanon (Vue)","Lesotho (Vue)","Liberia (Vue)","Libyan Arab Jamahiriya (Vue)","Liechtenstein (Vue)","Lithuania (Vue)","Luxembourg (Vue)","Macao (Vue)","Macedonia, The Former Yugoslav Republic of (Vue)","Madagascar (Vue)","Malawi (Vue)","Malaysia (Vue)","Maldives (Vue)","Mali (Vue)","Malta (Vue)","Marshall Islands (Vue)","Martinique (Vue)","Mauritania (Vue)","Mauritius (Vue)","Mayotte (Vue)","Mexico (Vue)","Micronesia, Federated States of (Vue)","Moldova, Republic of (Vue)","Monaco (Vue)","Mongolia (Vue)","Montenegro (Vue)","Montserrat (Vue)","Morocco (Vue)","Mozambique (Vue)","Myanmar (Vue)","Namibia (Vue)","Nauru (Vue)","Nepal (Vue)","Netherlands (Vue)","Netherlands Antilles (Vue)","New Caledonia (Vue)","New Zealand (Vue)","Nicaragua (Vue)","Niger (Vue)","Nigeria (Vue)","Niue (Vue)","Norfolk Island (Vue)","Northern Mariana Islands (Vue)","Norway (Vue)","Oman (Vue)","Pakistan (Vue)","Palau (Vue)","Palestinian Territory, Occupied (Vue)","Panama (Vue)","Papua New Guinea (Vue)","Paraguay (Vue)","Peru (Vue)","Philippines (Vue)","Pitcairn (Vue)","Poland (Vue)","Portugal (Vue)","Puerto Rico (Vue)","Qatar (Vue)","Reunion (Vue)","Romania (Vue)","Russian Federation (Vue)","RWANDA (Vue)","Saint Helena (Vue)","Saint Kitts and Nevis (Vue)","Saint Lucia (Vue)","Saint Pierre and Miquelon (Vue)","Saint Vincent and the Grenadines (Vue)","Samoa (Vue)","San Marino (Vue)","Sao Tome and Principe (Vue)","Saudi Arabia (Vue)","Senegal (Vue)","Serbia (Vue)","Seychelles (Vue)","Sierra Leone (Vue)","Singapore (Vue)","Slovakia (Vue)","Slovenia (Vue)","Solomon Islands (Vue)","Somalia (Vue)","South Africa (Vue)","South Georgia and the South Sandwich Islands (Vue)","Spain (Vue)","Sri Lanka (Vue)","Sudan (Vue)","Suriname (Vue)","Svalbard and Jan Mayen (Vue)","Swaziland (Vue)","Sweden (Vue)","Switzerland (Vue)","Syrian Arab Republic (Vue)","Taiwan, Province of China (Vue)","Tajikistan (Vue)","Tanzania, United Republic of (Vue)","Thailand (Vue)","Timor-Leste (Vue)","Togo (Vue)","Tokelau (Vue)","Tonga (Vue)","Trinidad and Tobago (Vue)","Tunisia (Vue)","Turkey (Vue)","Turkmenistan (Vue)","Turks and Caicos Islands (Vue)","Tuvalu (Vue)","Uganda (Vue)","Ukraine (Vue)","United Arab Emirates (Vue)","United Kingdom (Vue)","United States (Vue)","United States Minor Outlying Islands (Vue)","Uruguay (Vue)","Uzbekistan (Vue)","Vanuatu (Vue)","Venezuela (Vue)","Viet Nam (Vue)","Virgin Islands, British (Vue)","Virgin Islands, U.S. (Vue)","Wallis and Futuna (Vue)","Western Sahara (Vue)","Yemen (Vue)","Zambia (Vue)","Zimbabwe (Vue)"]')}});
//# sourceMappingURL=app.23f2ee3e.js.map