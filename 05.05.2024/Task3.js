class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }
 
    Display() {
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
 
    addSeconds(seconds) {
        this.seconds += seconds;
        this.minutes += (this.seconds / 60) | 0;
        this.seconds %= 60;
        this.hours += (this.minutes / 60) | 0;
        this.minutes %= 60;
    }
 
    addMinutes(minutes) {
        this.minutes += minutes;
        this.hours += (this.minutes / 60) | 0;
        this.minutes %= 60;
    }
 
    addHours(hours) {
        this.hours += hours;
    }
}
 
let time = new Time(16, 30, 45);
time.Display();
time.addSeconds(30);
time.Display();
time.addMinutes(20);
time.Display();
time.addHours(5);
time.Display();
