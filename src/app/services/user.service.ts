import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public createNewUser(dataObject: any) {
    return  new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/users', dataObject).subscribe(

        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      )

    });
  }

}
