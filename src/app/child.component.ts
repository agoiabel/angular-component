import { Component, Input } from "@angular/core";

@Component({
    selector: 'child-component',
    template: `
        <p>This is child component</p>    
        {{ childMessage }}
    `
})
export class ChildComponent {
    @Input() childMessage: string;
}