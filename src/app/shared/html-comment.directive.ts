import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: 'appTemplateComment'
})
export class HtmlCommentDirective {
  constructor(private vcRef: ViewContainerRef) {
    this.vcRef.clear()
  }
}
