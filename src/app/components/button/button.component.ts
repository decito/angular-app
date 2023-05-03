import { Component, Input, OnInit } from '@angular/core'

import { Colors } from '~/types/colors'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() variant?: Colors = 'primary'
  @Input() size?: 'sm' | 'lg' | 'full' | 'default' = 'default'
  @Input() type?: 'button' | 'submit' | 'reset' = 'button'

  @Input() outlined? = false
  @Input() disabled? = false

  @Input() icon? = ''

  classes: string

  ngOnInit(): void {
    this.classes = `${this.size} ${this.variant}`

    if (this.outlined) this.classes += ` outlined`

    if (this.disabled) this.classes += ` disabled`
  }
}
