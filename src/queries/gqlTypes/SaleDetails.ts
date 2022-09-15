/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SaleDetails
// ====================================================

export interface SaleDetails_sale_backgroundImage {
  __typename: "Image";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface SaleDetails_sale {
  __typename: "Sale";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  backgroundImage: SaleDetails_sale_backgroundImage | null;
  description: any | null;
}

export interface SaleDetails {
  /**
   * Look up a collection by ID.
   */
  sale: SaleDetails_sale | null;
}

export interface SaleDetailsVariables {
  id?: string | null;
  slug?: string | null;
  channel?: string | null;
}
