import { Component } from "@angular/core";


@Component({
    selector: 'parent-component',
    template: `
        <child-component [messageToChild]="parentMessage"></child-component>

        <child-component (messageFromChild)="onReceivedMessageFromChild($event)"></child-component>
    `
})
export class ParentComponent {
    public parentMessage: string = "This is a message from the parent";

    /**
     * Handle received message from child
     * 
     * @param event 
     */
    onReceivedMessageFromChild (event) {
        console.log(event);
    }
}