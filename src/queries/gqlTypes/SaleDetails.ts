/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SaleDetails
// ====================================================

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
    description: any | null;
  }
  
  export interface SaleDetails {
    /**
     * Look up a Sale by ID or slug.
     */
    sale: SaleDetails_sale | null;
  }
  
  export interface SaleDetailsVariables {
    id?: string | null;
    slug?: string | null;
  }
  