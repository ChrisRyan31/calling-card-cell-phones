

class CellPhone {
    constructor(card) {
        this.CallingCard = card;
        this.onCall = false;
        this.callHistory = [];
        this.currentCallLength = 0;
        this.currentPhoneNumCalled = null;
    }

    isTalking() {
        return console.log(this.onCall);
    }

    call(phoneNumber) {
        this.onCall = true;
        this.currentPhoneNumCalled = phoneNumber;
        return;
    }

    tick() {
        this.CallingCard.useMinutes(1);
        this.currentCallLength++;
        if (this.CallingCard.timeRemaining <= 0) {
            this.onCall = false;
            if (this.currentCallLength === 1) {
                this.callHistory.push(`${this.currentPhoneNumCalled} (cut off at ${this.currentCallLength} minute)`);
            } else {
                this.callHistory.push(`${this.currentPhoneNumCalled} (cut off at ${this.currentCallLength} minutes)`);
            }
            this.currentPhoneNumCalled = null;
            this.currentCallLength = 0;
            return;
        }
        return
    }

    endCall() {
        this.onCall = false;

        if (this.currentCallLength === 1) {
            this.callHistory.push(`${this.currentPhoneNumCalled} (${this.currentCallLength} minute)`);
        } else {
            this.callHistory.push(`${this.currentPhoneNumCalled} (${this.currentCallLength} minutes)`);
        }
        this.currentPhoneNumCalled = null;
        this.currentCallLength = 0;
        return;
    }

    getHistory() {
        return console.log(this.callHistory);
    }
}

module.exports = CellPhone