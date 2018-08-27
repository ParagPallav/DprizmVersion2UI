import { Component, OnInit } from "@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  // age: any;
  // name: any;
  // department: any;
  // response: any;
  // show = false;
  // constructor(private http: HttpClient) {}
  ngOnInit() {}
  // getUser() {
  //   const headers = new Headers();
  //   headers.append("Access-Control-Allow-Headers", "Content-Type");
  //   headers.append("Access-Control-Allow-Methods", "GET");
  //   headers.append("Access-Control-Allow-Origin", "*");
  //   let obs = this.http
  //     .get("http://localhost:8080/api/userDetails")
  //     .subscribe(response => {
  //       this.show = true;
  //       this.response = response;
  //     });
  // }
  // insertUser() {
  //   let obs = this.http
  //     .post("http://localhost:8080/api/userDetails", {
  //       name: this.name,
  //       department: this.department,
  //       age: this.age
  //     })
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //       },
  //       err => {
  //         console.log("Error Happened");
  //       }
  //     );
  // }
}
