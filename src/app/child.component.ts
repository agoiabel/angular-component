import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'child-component',
    template: `    
        {{ childToMessage }}

        <button (click)="sendMessageToParent()">Send Message To Parent</button>
    `
})
export class ChildComponent {
    @Input() messageToChild: string;
    @Output() messageFromChild = new EventEmitter();


    /** Emit a message from child component to parent */
    public sendMessageToParent = () => {
        this.messageFromChild.emit("Sent a message from child using Output Event Emitter");
    } 

    public childMethod = () => {
        console.log("I was access through @ViewChild");
    }
}