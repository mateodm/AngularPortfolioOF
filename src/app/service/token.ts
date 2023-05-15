
const name_KEY = "AuthUsername";
const TOKEN_KEY = "AuthToken";
const AUTHORITIES_KEY = "AuthAuthorities";
import { Injectable } from "@angular/core"

@Injectable({providedIn: "root"})

export class Token {
    rol: Array<string> = [];
        public closeSession() {
            window.sessionStorage.clear();
        }
        public setName(name: string): void {
            window.sessionStorage.removeItem(name_KEY)
            window.sessionStorage.setItem(name_KEY, name)
        }
        public getName():string{
            return sessionStorage.getItem(name_KEY)!;
        }
        public setToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY)
        window.sessionStorage.setItem(TOKEN_KEY, token)
        }
        public getToken():string{
        return sessionStorage.getItem(TOKEN_KEY)!;
        }

        public setAuthorities(authorities: string[]): void {
            window.sessionStorage.removeItem(AUTHORITIES_KEY);
            window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
        }
        public getAuthorities():string[] {
            this.rol = [];
            if(sessionStorage.getItem(AUTHORITIES_KEY)!){JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
                this.rol.push(authority.authority)
            })
            }
            return this.rol;
        }

}
