(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{565:function(t,e,n){},566:function(t,e,n){},648:function(t,e,n){"use strict";n(565)},649:function(t,e,n){"use strict";n(566)},709:function(t,e,n){"use strict";n.r(e);var r={name:"DetailTable",components:{},props:{data:{type:Array,default:function(){return[]}}},data:function(){return{defaultOpenedDetails:[1]}},computed:{},watch:{},mounted:function(){},created:function(){},methods:{}},d=(n(648),n(649),n(22)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-table-wrapper"},[n("section",[n("b-table",{attrs:{data:t.data,"show-header":!1,bordered:!1,narrowed:!0,paginated:!1,detailed:!!t.data[0].children&&!!t.data[0].children.length,"detail-key":"id"},scopedSlots:t._u([{key:"detail",fn:function(e){return[e.row.children&&e.row.children.length?n("detail-table",{attrs:{data:e.row.children,showDetailIcon:!!e.row.children&&e.row.children.length}}):t._e()]}}])},[n("b-table-column",{attrs:{field:"sistema",centered:!1,width:"50%"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sistema))]}}])}),n("b-table-column",{attrs:{field:"nota",centered:!1,width:"50%"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.nota))]}}])})],1)],1)])}),[],!1,null,"28198f75",null);e.default=component.exports;installComponents(component,{DetailTable:n(709).default})}}]);