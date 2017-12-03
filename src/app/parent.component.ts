import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { ChildComponent } from "./child.component";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";


@Component({
    selector: 'parent-component',
    template: `
        <child-component [messageToChild]="parentMessage"></child-component>

        <child-component (messageFromChild)="onReceivedMessageFromChild($event)"></child-component>

    `
})
export class ParentComponent {
    @ViewChild(ChildComponent) childComponent: ChildComponent;

    public messageThroughViewChild: any;
    public parentMessage: string = "This is a message from the parent";

    
    ngAfterViewInit() {
        this.messageThroughViewChild = this.childComponent.childMethod();    
    }

    /**
     * Handle received message from child
     * 
     * @param event 
     */
    public onReceivedMessageFromChild = (event) => {
        console.log(event);
    }

}