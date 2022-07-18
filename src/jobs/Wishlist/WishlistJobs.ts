import {
  DataErrorCheckoutTypes,
  FunctionErrorCheckoutTypes,
} from "../../api/Checkout/types";
import { LocalStorageHandler } from "../../helpers/LocalStorageHandler";
import { JobRunResponse } from "../types";
import { JobsHandler } from "../JobsHandler";

export type PromiseCheckoutJobRunResponse = Promise<
  JobRunResponse<DataErrorCheckoutTypes, FunctionErrorCheckoutTypes>
>;

class CheckoutJobs extends JobsHandler<{}> {
  private localStorageHandler: LocalStorageHandler;

  constructor(localStorageHandler: LocalStorageHandler) {
    super();
    this.localStorageHandler = localStorageHandler;
  }

  provideWishlist = () => {
    const wishlist = LocalStorageHandler.getWishlist();
    this.localStorageHandler.setWishlist(wishlist);
  };
}

export default CheckoutJobs;
