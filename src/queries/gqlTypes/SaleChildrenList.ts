/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SaleChildrenList
// ====================================================

export interface SaleChildrenList_sale_children_edges_node {
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
  
  export interface SaleChildrenList_sale_children_edges {
    __typename: "SaleCountableEdge";
    /**
     * The item at the end of the edge.
     */
    node: SaleChildrenList_sale_children_edges_node;
  }
  
  export interface SaleChildrenList_sale_children_pageInfo {
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
  
  export interface SaleChildrenList_sale_children {
    __typename: "SaleCountableConnection";
    edges: SaleChildrenList_sale_children_edges[];
    /**
     * A total count of items in the collection.
     */
    totalCount: number | null;
    /**
     * Pagination data for this connection.
     */
    pageInfo: SaleChildrenList_sale_children_pageInfo;
  }
  
  export interface SaleChildrenList_sale {
    __typename: "Sale";
    /**
     * The ID of the object.
     */
    id: string;
    /**
     * List of children of the sale..
     */
    children: SaleChildrenList_sale_children | null;
  }
  
  export interface SaleChildrenList {
    /**
     * Look up a Sale by ID or slug.
     */
    sale: SaleChildrenList_sale | null;
  }
  
  export interface SaleChildrenListVariables {
    id: string;
    first: number;
    after?: string | null;
  }
  