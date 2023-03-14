import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostListener('click', ['$event']) toggleOpen(element) {
    let { target } = element
    let parentNode = target.parentNode

    while (!target.hasAttribute('toggleController')) {
      target = parentNode
      parentNode = parentNode.parentNode
    }

    for (let i = 0; i < target.childNodes.length; i++) {
      const childNode = target.childNodes[i]

      if (childNode.nodeType === Node.ELEMENT_NODE) {
        const element = childNode as HTMLElement

        if (element.hasAttribute('toggle') && element.hasAttribute('open'))
          element.removeAttribute('open')
        else if (element.hasAttribute('toggle'))
          element.setAttribute('open', '')
      }
    }
  }
}