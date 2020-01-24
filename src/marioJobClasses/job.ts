import { Action } from "./action";
import Asset from "./asset";

export default interface Job {
  action: Action;
  assets: Asset[];
  version: string;
}
