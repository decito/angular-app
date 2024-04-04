import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs'
import { AuthResponsePayload, AuthService } from '~/services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = false
  isLoading = false
  error: string = null

  constructor(private authService: AuthService) {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form: NgForm) {
    this.error = null

    if (!form.valid) return

    const { email, password } = form.value

    this.isLoading = true

    let authObservable: Observable<AuthResponsePayload>

    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password)
    } else {
      authObservable = this.authService.signup(email, password)
    }

    authObservable.subscribe({
      next: () => {
        this.isLoading = false
      },
      error: err => {
        this.error = err
        this.isLoading = false
      }
    })

    form.reset
  }
}
