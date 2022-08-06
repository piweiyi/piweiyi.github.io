<template>
    <div class="container">
        <!-- <div class="balloon white">
            <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
            </div>
            <div class="triangle"></div>
            <div class="string"></div>
        </div>

        <div class="balloon red">
            <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
            </div>
            <div class="triangle"></div>
            <div class="string"></div>
        </div>

        <div class="balloon blue">
            <div class="face">
                <div class="eye"></div>
                <div class="mouth happy"></div>
            </div>
            <div class="triangle"></div>
            <div class="string"></div>
        </div> -->
        <div id="timer">
            <div class="days">
                <div class="numbers">{{days}}</div>days
            </div>
            <div class="hours">
                <div class="numbers">{{hours}}</div>hours
            </div>
            <div class="minutes">
                <div class="numbers">{{minutes}}</div>minutes
            </div>
            <div class="seconds">
                <div class="numbers">{{seconds}}</div>seconds
            </div>
        </div>
        <!-- <h1>31号 8月 周年纪念日</h1> -->
    </div>
</template>
<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            days: '0',
            hours: '0',
            minutes: '0',
            seconds: '0',
            timer: '',
        };
    },
    watch: {},
    mounted() {
        const year = new Date().getFullYear();
        const fourthOfJuly = new Date(year, 7, 31).getTime(); // 8月31号
        const fourthOfJulyNextYear = new Date(year + 1, 7, 31).getTime();
        const month = new Date().getMonth();

        // countdown
        let self = this;
        this.timer = setInterval(function () {
            // get today's date
            const today = new Date().getTime();

            // get the difference
            let diff;
            if (month > 6) {
                diff = fourthOfJulyNextYear - today;
            } else {
                diff = fourthOfJuly - today;
            }

            // math
            self.days = Math.floor(diff / (1000 * 60 * 60 * 24));
            self.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            self.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            self.seconds = Math.floor((diff % (1000 * 60)) / 1000);
        }, 1000);
    },
    destroyed() {
        clearInterval(this.timer);
        this.timer = null;
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Montserrat:900');

$font: 'Lato', sans-serif;
$big: 'Montserrat', sans-serif;

$red: #ef2f3c;
$white: #e7e7e7;
$blue: #276fbf;
$dark: #183059;
$yellow: #f0a202;

$star: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);

html {
    display: grid;
    min-height: 100%;
}

body {
    display: grid;
    background: $dark;
}

.container {
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 65rem;
    height: 48rem;
}

h1 {
    font-family: $font;
    text-align: center;
    margin-top: 2em;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: $dark;
}

#timer {
    color: $white;
    text-align: center;
    text-transform: uppercase;
    font-family: $font;
    font-size: 0.7em;
    letter-spacing: 5px;
    margin-top: 25%;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.days,
.hours,
.minutes,
.seconds {
    display: inline-block;
    padding: 2rem;
    width: 12.5rem;
    border-radius: 5px;
}

.days {
    background: $red;
}

.hours {
    background: $white;
    color: $dark;
}

.minutes {
    background: $blue;
}

.seconds {
    background: $yellow;
}

.numbers {
    font-family: $big;
    color: #fff;
    font-size: 4em;
}

.white {
    position: absolute;
    background: $white;
    height: 85px;
    width: 75px;
    left: 30%;
    top: 2%;
    .triangle {
        border-bottom: 14px solid $white;
    }
    .string {
        background: $white;
        border: 1px solid $white;
    }
}

.red {
    position: absolute;
    background: $red;
    left: 18%;
    top: 9%;
    height: 65px;
    width: 70px;
    .triangle {
        border-bottom: 14px solid $red;
    }
    .string {
        background: $red;
        border: 1px solid $red;
    }
}

.blue {
    position: absolute;
    background: $blue;
    height: 80px;
    width: 80px;
    left: 60%;
    top: 5%;
    .triangle {
        border-bottom: 14px solid $blue;
    }
    .string {
        background: $blue;
        border: 1px solid $blue;
    }
}

.balloon {
    border: 1px solid #000;
    border-radius: 50% 50% 50% 50%/ 40% 40% 60% 60%;
    z-index: 2;
}

.eye {
    position: absolute;
    width: 7px;
    height: 7px;
    top: 40%;
    left: 22%;
    background: #000;
    border-radius: 50%;
    &:after {
        content: '';
        left: 35px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #000;
        position: absolute;
    }
}

.mouth {
    position: absolute;
    top: 45%;
    left: 43%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
}

.happy {
    border: 2px solid;
    border-color: transparent #000 #000 transparent;
    transform: rotate(45deg);
}

.triangle {
    position: absolute;
    left: 40%;
    bottom: -10%;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
}

.string {
    position: absolute;
    height: 70px;
    width: 1px;
    left: 48%;
    top: 100%;
    z-index: -1;
}
</style>