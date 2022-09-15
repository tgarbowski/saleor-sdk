/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SaleList
// ====================================================

export interface SaleList_sales_edges_node {
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

export interface SaleList_sales_edges {
  __typename: "SaleCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: SaleList_sales_edges_node;
}

export interface SaleList_sales_pageInfo {
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

export interface SaleList_sales {
  __typename: "SaleCountableConnection";
  edges: SaleList_sales_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: SaleList_sales_pageInfo;
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
}

export interface SaleList {
  /**
   * List of the shop's collections.
   */
  sales: SaleList_sales | null;
}

export interface SaleListVariables {
  first: number;
  after?: string | null;
  channel?: string | null;
}
