import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() curRoute = new EventEmitter<string>()

  changeRoute(route: string) {
    this.curRoute.emit(route)
  }
}