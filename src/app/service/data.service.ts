import { Injectable } from "@angular/core";
import { IDataService } from "../interfaces/data-service.interface";
import { Observable, of } from "rxjs";
import { Option } from "../models/option.model";

@Injectable()
export class DataSevice implements IDataService {
  getOptions(): Observable<Option[]> {
    return of([
      { value: 1, label: "Option 1" },
      { value: 2, label: "Option 2" },
      { value: 3, label: "Option 3" },
      { value: 4, label: "Option 4" },
    ]);
  }
}
