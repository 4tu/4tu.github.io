(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{149:function(t,n,e){"use strict";var c={name:"MainSection",data:function(){return{value:location.pathname.slice(1)}}},o=e(9),component=Object(o.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"main-section"},[n("div",{staticClass:"main-header"},[this._v("\n        https://4tu.github.io/"),n("span",{staticClass:"red"},[this._v(this._s(this.value))])]),this._v(" "),n("div",[this._t("subsections")],2)])}),[],!1,null,null,null);n.a=component.exports},150:function(t,n,e){"use strict";var c={name:"SubSection",props:{value:String}},o=e(9),component=Object(o.a)(c,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"sub-section"},[n("div",{staticClass:"sub-header"},[n("i",{staticClass:"fas fa-angle-right"}),this._v(" "+this._s(this.value)+"\n    ")]),this._v(" "),n("div",{staticClass:"contents"},[this._t("contents")],2)])}),[],!1,null,null,null);n.a=component.exports},152:function(t,n,e){"use strict";e.r(n);var c=e(149),o=e(150),l={name:"about",components:{MainSection:c.a,SubSection:o.a}},r=e(9),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("MainSection",{scopedSlots:t._u([{key:"subsections",fn:function(){return[e("SubSection",{attrs:{value:"Name"},scopedSlots:t._u([{key:"contents",fn:function(){return[e("p",[t._v("Fortune. (4tu)")])]},proxy:!0}])}),t._v(" "),e("SubSection",{attrs:{value:"Picture"},scopedSlots:t._u([{key:"contents",fn:function(){return[e("img",{attrs:{src:"/image/icon.png",width:"200px"}})]},proxy:!0}])}),t._v(" "),e("SubSection",{attrs:{value:"Description"},scopedSlots:t._u([{key:"contents",fn:function(){return[e("p",[t._v("社会人1年目でアイドルが好きな人です。最近太ってきました。")]),t._v(" "),e("ul",[e("li",[t._v("年齢: 20才")]),t._v(" "),e("li",[t._v("性別: 男")]),t._v(" "),e("li",[t._v("居住: 奈良")])])]},proxy:!0}])}),t._v(" "),e("SubSection",{attrs:{value:"History"},scopedSlots:t._u([{key:"contents",fn:function(){return[e("ul",[e("li",[t._v("2016-2020 / 奈良工業高等専門学校本科 情報工学科")]),t._v(" "),e("li",[t._v("2020-???? / ")])])]},proxy:!0}])})]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports}}]);