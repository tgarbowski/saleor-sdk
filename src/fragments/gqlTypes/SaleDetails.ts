/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SaleDetails
// ====================================================

export interface SaleDetails_backgroundImage {
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

export interface SaleDetails {
  __typename: "Sale";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  backgroundImage: SaleDetails_backgroundImage | null;
  description: any | null;
}
