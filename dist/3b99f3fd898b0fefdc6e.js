(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{414:function(e,t,i){},429:function(e,t,i){"use strict";var s=i(414);i.n(s).a},444:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reviews__form-wrap"},[i("div",{staticClass:"reviews__main-content"},[i("div",{staticClass:"reviews__list-wrap"},[i("ul",{staticClass:"reviews__list"},[i("button",{staticClass:"reviews__item reviews__item--new",attrs:{type:"button"},on:{click:e.addNewReview}},[i("button",{staticClass:"btn-addnew btn-addnew--reviews",attrs:{type:"button",title:"Добавить новый отзыв"}},[e._v("+")]),i("div",{staticClass:"reviews__addnew-desc"},[e._v("Добавить отзыв")])]),e._l(e.reviews,function(t){return i("reviewItem",{key:t.id,attrs:{review:t},on:{editCurrentReview:e.editCurrentReview}})})],2)])])])};s._withStripped=!0;var n={components:{reviewItem:function(){return i.e(11).then(i.bind(null,449))}},props:{reviews:Array},methods:{addNewReview:function(){this.$emit("addNewReview")},editCurrentReview:function(){this.$emit("editCurrentReview")}}},r=(i(429),i(95)),a=Object(r.a)(n,s,[],!1,null,"76e72905",null);a.options.__file="src/admin/components/reviews/reviewsList.vue";t.default=a.exports}}]);