/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePrivateNipMetadata
// ====================================================

export interface UpdatePrivateNipMetadata_updatePrivateMetadata_item_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface UpdatePrivateNipMetadata_updatePrivateMetadata_item {
  __typename: "ProductVariant" | "Product" | "ProductType" | "Attribute" | "Category" | "Sale" | "Collection" | "DigitalContent" | "Warehouse" | "ShippingZone" | "ShippingMethodType" | "User" | "Checkout" | "ShippingMethod" | "GiftCard" | "App" | "Order" | "Fulfillment" | "Invoice" | "Payment" | "Voucher" | "Page" | "PageType" | "Sale" | "MenuItem" | "Menu";
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (UpdatePrivateNipMetadata_updatePrivateMetadata_item_metadata | null)[];
}

export interface UpdatePrivateNipMetadata_updatePrivateMetadata {
  __typename: "UpdatePrivateMetadata";
  item: UpdatePrivateNipMetadata_updatePrivateMetadata_item | null;
}

export interface UpdatePrivateNipMetadata {
  /**
   * Updates private metadata of an object.
   */
  updatePrivateMetadata: UpdatePrivateNipMetadata_updatePrivateMetadata | null;
}

export interface UpdatePrivateNipMetadataVariables {
  checkoutId: string;
  nip: string;
}
