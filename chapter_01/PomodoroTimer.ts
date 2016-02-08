import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'pomodoro-timer',
    template: `
        <div class="text-center">
            <img src="data:image/png;base64,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" alt="Pomodoro">
            <h1> {{ minutes }}:{{ seconds  | number: '2.0' }} </h1>
            <p><button (click)="togglePause()" class="btn btn-danger"> {{ buttonLabel }} </button></p>
        </div>
    `
})
class PomodoroTimerComponent {
    minutes: number;
    seconds: number;
    isPaused: boolean;
    buttonLabel: string;

    constructor() {
        this.resetPomodoro();
        setInterval(() => this.countDown(), 1000);
    }

    resetPomodoro(): void {
        this.isPaused = true;
        this.minutes = 24;
        this.seconds = 59;
        this.buttonLabel = 'Start';
    }

    countDown(): void {
        if (!this.isPaused) {
            this.buttonLabel = 'Pause';

            if (--this.seconds < 0) {
                this.seconds = 59;
                if (--this.minutes < 0) {
                    this.resetPomodoro();
                }
            }
        }
    }

    togglePause(): void {
        this.isPaused = !this.isPaused;
        if (this.minutes < 24 || this.seconds < 59) {
            this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
        }
    }
}

bootstrap(PomodoroTimerComponent);
