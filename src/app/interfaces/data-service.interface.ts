import { Observable } from "rxjs";
import { Option } from "../models/option.model";

export interface IDataService {
  getOptions(): Observable<Option[]>;
}
