import Vue from "vue";

const skill = {
    template: "#skill",
    props: {
        skillName: String,
        skillPercent: Number
    },
    methods: {
        drawCircle() {
            const circle = this.$refs["circle"];
            let findBlcTop = this.$root.findCircle();
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue("stroke-dasharray")
            );
            const percent = (dashArray / 100) * (100 - this.skillPercent);

            window.addEventListener("scroll", function() {
                const posTop = findBlcTop.findTop.getBoundingClientRect().top;
                const exactTop = posTop.toFixed();

                if (exactTop > 300 && exactTop < 350) {                    
                    circle.style.strokeDashoffset = percent;
                }
            });
        }
    },
    mounted() {
        this.drawCircle();
        
    }
}

const row = {
    template: "#skills-row",
    props: {
        skill: Object
    },
    components: {
        skill
    }
}

new Vue({
    el: "#skills-container",
    template: "#skills-list",
    components: {
        row
    },
    data() {
        return {
            skills: []
        }
    },
    created() {
        const data = require("../data/skills-data.json");
        this.skills = data;
    },
    methods: {
        findCircle() {
            let circleBlock = this.$refs[this.skills];
            return {
                findTop: circleBlock
            };
        }
    },
    mounted() {
        console.log(this.skills);        
    }
})