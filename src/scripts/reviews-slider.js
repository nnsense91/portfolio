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
        flag: 0,
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
            this.$refs.prev.classList.remove("reviews__button--disabled")
            this.$refs.next.classList.remove("reviews__button--disabled")
            if (this.flag < this.reviews.length/2 - 1) {
                this.$refs.flickity.next();
                this.flag++;
                if (this.flag >= this.reviews.length/2 - 1) {
                    this.$refs.next.classList.add("reviews__button--disabled")
                }
            }
            console.log(this.flag);                        
        },
        previous() {
            this.$refs.prev.classList.remove("reviews__button--disabled")
            this.$refs.next.classList.remove("reviews__button--disabled")
            if (this.flag > 0) {
                this.$refs.flickity.previous();
                this.flag--;
                if (this.flag <= 0){
                    this.$refs.prev.classList.add("reviews__button--disabled")
                }
            }
                
            console.log(this.flag);
        }
    },
    created() {
        const data = require("../data/reviews.json")
        this.reviews = this.makeArrWithRequiredImages(data)
    },
    mounted() {
        console.log(this.flag)
        if (this.flag <= 0) {
            this.$refs.prev.classList.add("reviews__button--disabled")
        } else if (this.flag >= this.reviews.length/2 - 1) {
            this.$refs.next.classList.add("reviews__button--disabled")
        }
    }
})