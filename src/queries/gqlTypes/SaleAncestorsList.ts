/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SaleAncestorsList
// ====================================================

export interface SaleAncestorsList_sale_ancestors_edges_node {
    __typename: "Sale";
    /**
     * The ID of the object.
     */
    id: string;
    name: string;
    slug: string;
    seoDescription: string | null;
    seoTitle: string | null;
  }
  
  export interface SaleAncestorsList_sale_ancestors_edges {
    __typename: "SaleCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: SaleAncestorsList_sale_ancestors_edges_node;
  }
  
  export interface SaleAncestorsList_sale_ancestors_pageInfo {
    __typename: "PageInfo";
    /**
     * When paginating forwards, the cursor to continue.
     */
    endCursor: string | null;
    /**
     * When paginating forwards, are there more items?
     */
    hasNextPage: boolean;
  }
  
  export interface SaleAncestorsList_sale_ancestors {
    __typename: "SaleCountableConnection";
    edges: SaleAncestorsList_sale_ancestors_edges[];
    /**
     * A total count of items in the collection.
     */
    totalCount: number | null;
    /**
     * Pagination data for this connection.
     */
    pageInfo: SaleAncestorsList_sale_ancestors_pageInfo;
  }
  
  export interface SaleAncestorsList_sale {
    __typename: "Sale";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * List of ancestors of the sale.
     */
    ancestors: SaleAncestorsList_sale_ancestors | null;
  }
  
  export interface SaleAncestorsList {
    /**
     * Look up a sale by ID or slug.
     */
    sale: SaleAncestorsList_sale | null;
  }
  
  export interface SaleAncestorsListVariables {
    id: string;
    first: number;
    after?: string | null;
  }
  