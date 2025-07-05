import { Component, Input, forwardRef } from "@angular/core";
import { Option } from "src/app/models/option.model";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() options: Option[] = [];
  @Input() placeholder: string;
  selectedOption: string = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: string): void {
    this.selectedOption = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectionChange(): void {
    this.onChange(this.selectedOption);
    this.onTouched();
  }
}
