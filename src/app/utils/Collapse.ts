
import { EventEmitter, Injectable, Output } from "@angular/core";

import { ICollapseScreenWidth } from "../domain/interfaces/ICollapseScreenWidth";

@Injectable({
    providedIn: 'root',
})
export class Collapse {

    @Output() enableCollapseElement: EventEmitter<ICollapseScreenWidth> = new EventEmitter();
    collapsed: boolean = false;
    screenWidth: number = window.innerWidth;

    toggleCollapseElement(): void { 
        this.collapsed = !this.collapsed;
        this.enableCollapseElement.emit({screenWidth: window.innerWidth, collapsed: this.collapsed});
    }

    closeCollapseElement(): void {
        this.collapsed = false;
        this.enableCollapseElement.emit({screenWidth: window.innerWidth, collapsed: this.collapsed});
    }

}