import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: any) {
    if (condition) {
      this.vcRef.clear()
      return
    }

    this.vcRef.createEmbeddedView(this.templateRef)
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
