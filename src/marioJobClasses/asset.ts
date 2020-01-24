import { AssetType } from "./assetType";
import Metadata from "./metadata";

export default interface Asset {
  partnerAssetId: string;
  uri: string;
  assetType: AssetType;
  metadata: Metadata;
}
