(window.webpackJsonp=window.webpackJsonp||[]).push([[9,47],{512:function(t,e,r){},513:function(t,e,r){},514:function(t,e,r){"use strict";e.a={methods:{setPartial:function(t){window.scrollTo(0,0),this.$store.commit("setCurrentPartial",t),this.closeNavbar()},closeNavbar:function(){var t=document.querySelector(".navbar-burger.burger"),e=new MouseEvent("click");t.dispatchEvent(e)}}}},515:function(t,e,r){"use strict";r(512)},516:function(t,e,r){"use strict";r(513)},517:function(t,e,r){"use strict";r.r(e);var n={name:"StandardTable",components:{},props:{data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},watch:{},mounted:function(){},created:function(){},methods:{}},o=(r(515),r(516),r(22)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"standard-table-wrapper"},[r("b-table",{attrs:{data:t.data,columns:t.columns,bordered:!0,narrowed:!0,hoverable:!0,striped:!0}},[t._t("default")],2)],1)}),[],!1,null,"2b95310b",null);e.default=component.exports},612:function(t,e,r){},695:function(t,e,r){"use strict";r(612)},755:function(t,e,r){"use strict";r.r(e);r(15);var n=r(16),o=r(82);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ManagerPanel",components:{StandardTable:function(){return Promise.resolve().then(r.bind(null,517))}},mixins:[r(514).a],props:{},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.e)({requests:function(t){return t.requests}})),watch:{},mounted:function(){this.$store.dispatch("getRequests")},created:function(){},methods:{attribute:function(t,e){this.$store.commit("setSearchCollaboratorName",t),this.$store.commit("setSelectedCollaboratorTerm",{key:"userId",value:e}),this.setPartial("AssignmentOfProfile")}}},d=(r(695),r(22)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"manager-panel-wrapper tw-mt-8 tw-px-8"},[r("standard-table",{attrs:{data:t.requests,bordered:!0,narrowed:!0,striped:!0}},[r("b-table-column",{attrs:{field:"date",label:t.$t("date")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"tw-text-xs"},[t._v(t._s(e.row.date))])]}}])}),r("b-table-column",{attrs:{field:"action",label:t.$t("action")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"tw-text-xs"},[t._v(t._s(e.row.action))])]}}])}),r("b-table-column",{attrs:{field:"user",label:t.$t("user")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"tw-text-xs"},[t._v(t._s(e.row.userId))])]}}])}),r("b-table-column",{attrs:{field:"colaborator",label:t.$t("collaborator")},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{staticClass:"tw-text-xs"},[t._v(t._s(e.row.userName))])]}}])}),r("b-table-column",{attrs:{label:t.$t("assign"),centered:!0},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b-button",{staticClass:"tw-w-24",attrs:{type:"is-primary",size:"is-small"},on:{click:function(r){return t.attribute(e.row.userName,e.row.userId)}}},[t._v(t._s(t.$t("assignProfile")))])]}}])})],1)],1)}),[],!1,null,"1ba2a69c",null);e.default=component.exports;installComponents(component,{StandardTable:r(517).default})}}]);