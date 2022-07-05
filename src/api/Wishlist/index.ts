import { SaleorState, SaleorStateLoaded } from "../../state";
import { LocalStorageManager } from "../../data";
import { ErrorListener, IPricingModel, IWishlistModel } from "../../helpers";
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

  addItem = (
    variantId: string,
    slug: string | undefined,
    thumbnail: string | undefined,
    thumbnail2x: string | undefined,
    pricing: IPricingModel | undefined
  ) => {
    this.localStorageManager.addItemToWishlist(
      variantId,
      slug,
      thumbnail,
      thumbnail2x,
      pricing
    );
  };

  removeItem = (variantId: string) => {
    this.localStorageManager.removeItemFromWishlist(variantId);
  };
}
