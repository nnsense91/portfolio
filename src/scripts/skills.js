// mocked because backend has been broken

import Vue from "vue";
import axios from 'axios';

// const skill = {
//     template: "#skill",
//     props: {
// 			skill : Object
// 		},
//     methods: {
//         drawCircle() {
// 					const circle = this.$refs["circle"];
// 					const windowHeight = window.innerHeight;
// 					let findBlcTop = this.$root.findCircle();
// 					const dashArray = parseInt(
// 							getComputedStyle(circle).getPropertyValue("stroke-dasharray")
// 					);
// 					const percent = (dashArray / 100) * (100 - this.skill.percent);
// 					let exactTop = getTop(findBlcTop)
//
// 					if (
// 							windowHeight >= exactTop
// 					) {
// 							circle.style.strokeDashoffset = percent;
// 					}
//
// 					window.addEventListener("scroll", function () {
// 							exactTop = getTop(findBlcTop);
// 							if (
// 									exactTop > windowHeight / 2 &&
// 									exactTop < (windowHeight / 2 + 100)
// 							) {
// 									circle.style.strokeDashoffset = percent;
// 							}
// 					});
// 					function getTop(findBlcTop) {
// 							const posTop = findBlcTop.findTop.getBoundingClientRect().top;
// 							return posTop.toFixed();
// 					}
//         }
//     },
//     mounted() {
//         this.drawCircle();
//     }
// }
//
// const row = {
//     template: "#skills-row",
//     props: {
// 			skills : Array,
// 			category: Object
// 		},
//     components: {
//         skill
//     }
// }
//
// new Vue({
//     el: "#skills-container",
//     template: "#skills-list",
//     components: {
//         row
//     },
// 		data() {
// 			return {
// 				skills : [],
// 				categories: [],
// 				baseURL: "https://webdev-api.loftschool.com",
// 				userID: 170
// 			}
// 		},
//     created() {
// 			// const data = require("../data/skills-data.json");
// 			// this.skills = data;
// 			this.getCategories();
//     	this.getSkills();
//     },
//     methods: {
// 			async getCategories() {
// 				await axios.get(`${this.baseURL}/categories/${this.userID}`)
// 					.then(response => this.categories = response.data);
// 				},
// 				async getSkills() {
// 					await axios.get(`${this.baseURL}/skills/${this.userID}`)
// 						.then(response => this.skills = response.data);
// 				},
// 				filterSkillsByCategoryId(categoryId) {
// 					return this.skills.filter(skill => skill.category === categoryId)
// 				},
//         findCircle() {
// 					let circleBlock = this.$refs["skills-block"];
//
// 					return {
// 							findTop: circleBlock
// 					};
//         }
//     }
// })

const skill = {
	template: "#skill",
	props: {
		skillName: String,
		skillPercent: Number
	},
	methods: {
		drawCircle() {
			const circle = this.$refs["circle"];
			const windowHeight = window.innerHeight;
			let findBlcTop = this.$root.findCircle();
			const dashArray = parseInt(
				getComputedStyle(circle).getPropertyValue("stroke-dasharray")
			);
			const percent = (dashArray / 100) * (100 - this.skillPercent);
			let exactTop = getTop(findBlcTop)

			if (
				windowHeight >= exactTop
			) {
				circle.style.strokeDashoffset = percent;
			}

			window.addEventListener("scroll", function () {
				exactTop = getTop(findBlcTop);
				if (
					exactTop > windowHeight / 2 &&
					exactTop < (windowHeight / 2 + 100)
				) {
					circle.style.strokeDashoffset = percent;
				}
			});
			function getTop(findBlcTop) {
				const posTop = findBlcTop.findTop.getBoundingClientRect().top;
				return posTop.toFixed();
			}
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
			let circleBlock = this.$refs["skills-block"];

			return {
				findTop: circleBlock
			};
		}
	}
})