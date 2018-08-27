import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { ToastrService } from "ngx-toastr";
import {
  IMultiSelectOption,
  IMultiSelectTexts,
  IMultiSelectSettings
} from "angular-2-dropdown-multiselect";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // @Input()
  // settings: IMultiSelectSettings;
  // @Input()
  // texts: IMultiSelectTexts;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  age: any;
  name: any;
  department: any;
  response: any;
  show = false;
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    //Data for Multiselect DropDown
    this.myOptions = [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
      { id: 3, name: "Option 3" },
      { id: 4, name: "Option 4" },
      { id: 5, name: "Option 5" }
    ];
  }
  // myTexts: IMultiSelectTexts = {
  //   checkAll: "Select all",
  //   uncheckAll: "Unselect all",
  //   checked: "item selected",
  //   checkedPlural: "items selected",
  //   searchPlaceholder: "Find",
  //   searchEmptyResult: "Nothing found...",
  //   searchNoRenderText: "Type in search box to see results...",
  //   defaultTitle: "Select",
  //   allSelected: "All selected"
  // };
  getUser() {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "Content-Type");
    headers.append("Access-Control-Allow-Methods", "GET");
    headers.append("Access-Control-Allow-Origin", "*");
    let obs = this.http
      .get("http://localhost:8080/api/userDetails")
      .subscribe(response => {
        this.show = true;
        this.response = response;
      });
  }
  insertUser() {
    let obs = this.http
      .post("http://localhost:8080/api/userDetails", {
        name: this.name,
        department: this.department,
        age: this.age
      })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error Happened");
          this.toastr.success("Hello world!", "Toastr fun!");
          this.toastr.error("everything is broken", "Major Error", {
            timeOut: 1000
          });
        }
      );
  }
  //Multiselect Logic

  onChange(event) {
    console.log("Clicked Item" + event);
    console.log(event);
  }
  // optionsModel: number[] = [1, 2];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: "checkboxes",
    buttonClasses: "btn btn-primary btn-block",
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true,
    showCheckAll: true,
    showUncheckAll: true
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: "Select all",
    uncheckAll: "Unselect all",
    checked: "item selected",
    checkedPlural: "items selected",
    searchPlaceholder: "Search",
    searchEmptyResult: "Nothing found...",
    searchNoRenderText: "Type in search box to see results...",
    defaultTitle: "Select",
    allSelected: "All selected"
  };

  // Labels / Parents
  // myOptions: IMultiSelectOption[] = [
  //   { id: 1, name: "Car brands", isLabel: true },
  //   { id: 2, name: "Volvo", parentId: 1 },
  //   { id: 3, name: "Honda", parentId: 1 },
  //   { id: 4, name: "BMW", parentId: 1 },
  //   { id: 5, name: "Colors", isLabel: true },
  //   { id: 6, name: "Blue", parentId: 5 },
  //   { id: 7, name: "Red", parentId: 5 },
  //   { id: 8, name: "White", parentId: 5 }
  // ];
}
