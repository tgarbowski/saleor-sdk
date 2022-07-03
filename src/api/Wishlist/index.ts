import { SaleorState, SaleorStateLoaded } from "../../state";
import { LocalStorageManager } from "../../data";
import { ErrorListener, IWishlistModel } from "../../helpers";
import { StateItems } from "../../state/types";

export class SaleorWishlistAPI extends ErrorListener {
  loaded: boolean;

  wishlist?: IWishlistModel;

  private localStorageManager: LocalStorageManager;

  private saleorState: SaleorState;

  constructor(
    localStorageManager: LocalStorageManager,
    saleorState: SaleorState
  ) {
    super();
    this.saleorState = saleorState;
    this.localStorageManager = localStorageManager;
    this.loaded = false;

    this.saleorState.subscribeToChange(
      StateItems.WISHLIST,
      (wishlist: IWishlistModel) => {
        this.wishlist = wishlist;
      }
    );
    this.saleorState.subscribeToChange(
      StateItems.LOADED,
      (loaded: SaleorStateLoaded) => {
        this.loaded = loaded.wishlist;
      }
    );
  }

  addItem = (variantId: string) => {
    this.localStorageManager.addItemToWishlist(variantId);
  };

  removeItem = (variantId: string) => {
    this.localStorageManager.removeItemFromWishlist(variantId);
  };
}
