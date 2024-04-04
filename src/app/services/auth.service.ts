import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponsePayload {
	idToken: string;
	email: string;
	refreshToken: string;
	expiresIn: string;
	localId: string;
	registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
	constructor(private http: HttpClient) {}

	private handleError(errMessage: string) {
		console.log(errMessage);
		const errorMessagesType = {
			EMAIL_EXISTS:
				'The email address is already in use by another account.',
			OPERATION_NOT_ALLOWED:
				'Password sign-in is disabled for this project.',
			TOO_MANY_ATTEMPTS_TRY_LATER:
				'We have blocked all requests from this device due to unusual activity. Try again later.',
			INVALID_EMAIL: 'The email is invalid.',
			INVALID_PASSWORD: 'Your credentials are wrong.',
			EMAIL_NOT_FOUND: 'Your credentials are wrong.'
		};
		const defaultErrorMessage = 'Something went wrong.';

		const checker = errorMessagesType[errMessage];
		const errorMessage = checker ? checker : defaultErrorMessage;

		return throwError(() => errorMessage);
	}

	private request(url: string, body: object) {
		return this.http
			.post<AuthResponsePayload>(url, body)
			.pipe(catchError(err => this.handleError(err.error.error.message)));
	}

	signup(email: string, password: string) {
		return this.request(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`,
			{
				email,
				password,
				returnSecureToken: true
			}
		);
	}

	login(email: string, password: string) {
		return this.request(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`,
			{
				email,
				password,
				returnSecureToken: true
			}
		);
	}
}
