import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input('appBasicHighlight') highlightColor: string = 'rgb(22, 163, 74)'

  /* A propriedade acima está com o mesmo nome do selector da diretiva.
   * Portanto, ao inves de usar no HTML como sendo, ex:
   *
   * <p appBasicHighlight [defaultColor]="foo" [highlightColor]="bar" />
   *
   * A chamada para o input hightlightColor passa a ser a própria diretiva.
   *
   * <p [appBasicHightlight]="foo" [defaultColor]="bar" />
  */

  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor(private elRef: ElementRef<HTMLParagraphElement>, private renderer: Renderer2) { }

  ngOnInit() {
    /*  BAD PRACTICE:
     *
     * this.elRef.nativeElement.style.backgroundColor = green
    */

    /*  BETTER PRACTICE, BUT REPLACED BY HOSTLISTENER:
     *
     * this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
    */

    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*  No need to use anymore since HostBinding already target the style.backgroundColor:
     *
     * this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'green')
    */

    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*  No need to use anymore since HostBinding already target the style.backgroundColor:
     *
     * this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent')
    */

    this.backgroundColor = this.defaultColor
  }
}