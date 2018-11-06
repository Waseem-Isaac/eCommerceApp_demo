import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export interface LoginContext {
    username: string;
    password: string;
    remember?: boolean;
  }
const credentialsKey = 'credentials';

@Injectable({providedIn: 'root'})
export class AuthService {
    headers = new HttpHeaders({'X-Parse-Application-Id' : 'APPLICATION_ID'});
    private _credentials: any | null;

    constructor(private httpClient: HttpClient) { 
        const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
          this._credentials = JSON.parse(savedCredentials);
        }
    }

    signUp(user: any){
        return this.httpClient.post('/users',user, {headers: this.headers})
    }
    

    // signin
    signIn(context: LoginContext){
        let _username = context.username;
        let _password = context.password;

        return this.httpClient.get('/login?username='+_username+'&password='+_password, {headers: this.headers}).pipe(
            map((data : any) => {
                let _remember = context.remember;
                let _data = {sessionToken : data.sessionToken , user : data} 
            
                this.setCredentials(_data, _remember);
                return data
            })
        )
    }

    logout(): Observable<boolean> {
        // Customize credentials invalidation here
        this.setCredentials();
        return of(true);
      }
    
      isAuthenticated(): boolean {
        return !!this.credentials;
    }

    get credentials(): any | null {
        return this._credentials;
    }

    public setCredentials(credentials?: any, remember?: boolean) {
        this._credentials = credentials || null;
    
        if (credentials) {
          const storage = remember ? localStorage : sessionStorage;
          storage.setItem(credentialsKey, JSON.stringify(credentials));
        } else {
          sessionStorage.removeItem(credentialsKey);
          localStorage.removeItem(credentialsKey);
        }
      }

      //
      isAdmin(){
          if(this.isAuthenticated()){
            return this.credentials.user.role == 'admin'
          }
      }
}