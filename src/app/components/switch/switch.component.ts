import { Component, EventEmitter, Input, Output, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "app-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input()
  set value(val: boolean) {
    this._value = val;
    this.onChange(val);
    this.valueChange.emit(this._value);
  }
  get value(): boolean {
    return this._value;
  }
  private _value: boolean = false;

  @Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: boolean): void {
    this._value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggle(): void {
    this.value = !this.value;
    this.onTouched();
  }
}
