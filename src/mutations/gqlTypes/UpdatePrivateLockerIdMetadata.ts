/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePrivateLockerIdMetadata
// ====================================================

export interface UpdatePrivateLockerIdMetadata_updatePrivateMetadata_item_metadata {
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

export interface UpdatePrivateLockerIdMetadata_updatePrivateMetadata_item {
  __typename: "ProductVariant" | "Product" | "ProductType" | "Attribute" | "Category" | "Collection" | "DigitalContent" | "Warehouse" | "ShippingZone" | "ShippingMethodType" | "User" | "Checkout" | "ShippingMethod" | "GiftCard" | "App" | "Order" | "Fulfillment" | "Invoice" | "Payment" | "Voucher" | "Page" | "PageType" | "Sale" | "MenuItem" | "Menu";
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (UpdatePrivateLockerIdMetadata_updatePrivateMetadata_item_metadata | null)[];
}

export interface UpdatePrivateLockerIdMetadata_updatePrivateMetadata {
  __typename: "UpdatePrivateMetadata";
  item: UpdatePrivateLockerIdMetadata_updatePrivateMetadata_item | null;
}

export interface UpdatePrivateLockerIdMetadata {
  /**
   * Updates private metadata of an object.
   */
  updatePrivateMetadata: UpdatePrivateLockerIdMetadata_updatePrivateMetadata | null;
}

export interface UpdatePrivateLockerIdMetadataVariables {
  checkoutId: string;
  lockerId: string;
}
