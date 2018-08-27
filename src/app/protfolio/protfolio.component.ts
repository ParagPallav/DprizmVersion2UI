import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-protfolio",
  templateUrl: "./protfolio.component.html",
  styleUrls: ["./protfolio.component.css"]
})
export class ProtfolioComponent implements OnInit {
  constructor() {}
  selectedFile: any;
  ngOnInit() {}

  onFileSelected(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.selectedFile = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
