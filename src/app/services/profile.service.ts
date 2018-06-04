import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid = '2ddb51df13183ba55b6d';
  private clientsecret= '2462f0401923eb74b1d737bfbbcd24ea8454430f';

  constructor(private http:Http) {
      console.log("Service is now ready!");
      this.username= 'Michael-mbogo';
  }

    getProfileInfo() {
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    
  }

}
