import Vue from "vue";

const info = {
    template: "#slider-info",
    props: {
        work: Object
    }
};
const display = {
    template: "#slider-display",
    props: {
        work: Object
    }
};
const btns = {
    template: "#slider-btns",
    props: {
        works: Array,
        index: Number
    },
    data() {
        return {
            prevButtonWorks: [],
            nextButtonWorks: []
        };
    },
    created() {
        this.prevButtonWorks = this.trancformWorksArrForBtn('prev');
        this.nextButtonWorks = this.trancformWorksArrForBtn('next');
    },
    methods: {
        slide(direction) {
            this.$emit('slide', direction);
        },
        trancformWorksArrForBtn(btnDirection) {
            const worksArray = [...this.works];
            const lastItem = worksArray[worksArray.length - 1];

            switch (btnDirection) {
                case 'next':
                    worksArray.push(worksArray[0]);
                    worksArray.shift();
                    break;
                case 'prev':
                    worksArray.unshift(lastItem);
                    worksArray.pop();
                    break;
            }
            return worksArray;
        }
    }
};

new Vue({
    el: "#slider-component",
    components: {
        info,
        display,
        btns
    },
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex]
        }
    },
    watch: {
        currentIndex(value) {
            this.loopCurrentIndex(value);
        }
    },
    created() {
        this.works = require("../../../data/works.json");
    },

    methods: {
        handleSlide(direction) {
            switch (direction) {
                case "next":
                    this.currentIndex = this.currentIndex + 1;
                    break;

                case "prev":
                    this.currentIndex = this.currentIndex - 1;
                    break;
            }
        },
        loopCurrentIndex(currentValue) {
            const worksAmount = this.works.length - 1;
            if (currentValue > worksAmount) this.currentIndex = 0;
            if (currentValue < 0) this.currentIndex = worksAmount;
        }
    },
    template: "#slider-root",
});
