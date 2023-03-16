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

  // cleanAttr(el: HTMLElement) {
  //   const allElements = document.getElementsByTagName('*')

  //   for (let i = 0; i < allElements.length; i++) {
  //     const element = allElements[i]

  //     if (element !== el && el.contains(element)) {
  //       element.removeAttribute('open')
  //     }
  //   }
  // }

  // @HostListener('document:click', ['$event']) onClick(event: MouseEvent) {
  //   let el = event.target as HTMLElement

  //   while (!el.hasAttribute('toggleController')) {
  //     if (el.tagName === maxNode) {
  //       this.cleanAttr(el)
  //       return
  //     }

  //     el = el.parentNode as HTMLElement
  //   }


  //   el.childNodes.forEach(childNode => {
  //     if (childNode.nodeType === Node.ELEMENT_NODE) {
  //       const element = childNode as HTMLElement

  //       if (element.hasAttribute('toggle') && element.hasAttribute('open'))
  //         element.removeAttribute('open')

  //       else if (element.hasAttribute('toggle'))
  //         element.setAttribute('open', '')

  //       el = element
  //     }
  //   })
  // }
}