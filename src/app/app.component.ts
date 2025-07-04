import { Component } from "@angular/core";
import { DataSevice } from "./service/data.service";
import { Option } from "./models/option.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: [
    "./app.component.css",
    "../../node_modules/@po-ui/style/css/po-theme-default.min.css",
  ],
  providers: [DataSevice],
})
export class AppComponent {
  options: Option[] = this.getOptions();
  habilitaComponenteSelect = false;
  selectedOptionsGroup: string;
  optionsGroup: string;
  placeholder = "Selecione uma opção"

  constructor(private service: DataSevice) {}

  getOptions() {
    let response = [];
    this.service.getOptions().subscribe((res) => {
      response = res;
    });
    return response;
  }

}
