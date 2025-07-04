import { Component, Input } from "@angular/core";
import { Option } from "src/app/models/option.model";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
})
export class SelectComponent {
  @Input() disabled: boolean;
  @Input() options: Option[] = [];
  @Input() placeholder: string;
  selectedOption: string = '';

   onSelectionChange(): void {
    console.log("Selected option:", this.selectedOption);
   }
}
