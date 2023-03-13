import { Component, EventEmitter, Output } from "@angular/core"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() curRoute = new EventEmitter<string>()
  intRoute: string = 'recipes'

  changeRoute(route: string) {
    this.intRoute = route

    this.curRoute.emit(route)
  }

  isRecipeCurRoute() {
    return this.intRoute === 'recipes'
  }

  isShoppingCurRoute() {
    return this.intRoute === 'shopping'
  }
}