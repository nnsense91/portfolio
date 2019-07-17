import Vue from "vue"
import Flickity from 'vue-flickity'

const review = {
    template: "#review-template",
    props: {
        review: Object
    }
}

new Vue({
    el: "#reviews-slider",
    template: "#reviews-template",
    components: {
        Flickity,
        review
    },
    data: {
        reviews: [],
        flickityOptions: {
            initialIndex: 3,
            prevNextButtons: false,
            pageDots: false,
            wrapAround: false,
            groupCells: true
            // any options from Flickity can be used
        }
    },
    methods: {
        makeArrWithRequiredImages(data) {
            return data.map(item => {
                const requirePic = require(`../images/content/${item.avatar}`);
                item.avatar = requirePic;
                return item
            })
        },
        next() {
            this.$refs.flickity.next();
        },

        previous() {
            this.$refs.flickity.previous();
        }
    },
    created() {
        const data = require("../data/reviews.json")
        this.reviews = this.makeArrWithRequiredImages(data)
    }
})