import { Component } from "@angular/core";


@Component({
    selector: 'parent-component',
    template: `
        <p>This is from parent component</p>
        <child-component [childMessage]="parentMessage"></child-component>
    `
})
export class ParentComponent {
    public parentMessage: string = "This is a message from the parent";
}