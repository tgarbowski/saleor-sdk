import gql from "graphql-tag";
import { pageInfo } from "../fragments/pageInfo";
import {
  baseSaleFragment,
  saleFragment,
} from "../fragments/sales";

export const saleList = gql`
  ${baseSaleFragment}
  ${pageInfo}
  query SaleList($first: Int!, $after: String) {
    sales(first: $first, after: $after) {
      edges {
        node {
          ...BaseSale
        }
      }
      totalCount
      pageInfo {
        ...PageInfo
      }
    }
  }
`;

export const saleChildrenList = gql`
  ${baseSaleFragment}
  ${pageInfo}
  query SaleChildrenList($id: ID!, $first: Int!, $after: String) {
    sale(id: $id) {
      id
      children(first: $first, after: $after) {
        edges {
          node {
            ...BaseSale
          }
        }
        totalCount
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;

export const saleAncestorsList = gql`
  ${baseSaleFragment}
  ${pageInfo}
  query SaleAncestorsList($id: ID!, $first: Int!, $after: String) {
    sale(id: $id) {
      id
      ancestors(first: $first, after: $after) {
        edges {
          node {
            ...BaseSale
          }
        }
        totalCount
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;

export const saleDetails = gql`
  ${saleFragment}
  query SaleDetails($id: ID, $slug: String) {
    sale(id: $id, slug: $slug) {
      ...SaleDetails
    }
  }
`;
