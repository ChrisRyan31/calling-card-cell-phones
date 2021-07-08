class CallingCard {
    constructor (centsPerMinute) {
        this.centsPerMinute = centsPerMinute;
    };

    addDollars(dollars) {
        let centsToAdd = dollars * 100;
        let timeToAdd = (centsToAdd / this.centsPerMinute);
        this.timeRemaining = timeToAdd;
        this.timeRemaining = Math.trunc(this.timeRemaining);
        return this.timeRemaining
    }

    getRemainingMinutes () {
        return console.log(`${this.timeRemaining} minutes left`);
    }

    useMinutes(minutes) {
        this.timeRemaining -= minutes;
        if (this.timeRemaining < 0) {
            this.timeRemaining = 0;
        }
        return this.timeRemaining;
    }

};


module.exports = CallingCard;