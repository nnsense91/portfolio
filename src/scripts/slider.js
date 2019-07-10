import Vue from "vue";
import { create } from "domain";

const btns = {
    template: "#slider-btns"
}

const thumbs = {
    template: "#slider-thumbs"
}

const display = {
    template: "#slider-display",
    components : {
        btns, thumbs
    }
}

const tags = {
    template: "#slider-tags"
}

const info = {
    template: "#slider-info",
    components: {
        tags
    }
}

new Vue({
    el: "#slider-component",
    template: "#slider-container",
    components: {
        display, info
    },
    data() {
        return {
            woks:[]
        }
    },
    created() {
        const data = require("../data/slider-data.json");
        this.works = data;
    }
})