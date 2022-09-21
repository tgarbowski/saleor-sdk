import gql from "graphql-tag";
import {
  baseSaleFragment,
  saleFragment,
} from "../fragments/sales";
import { pageInfo } from "../fragments/pageInfo";
import { baseProductFragment, productPricingFragment } from "src/fragments/products";

export const sales = gql`
  ${baseSaleFragment}
  ${pageInfo}
  query SaleList(
    $first: Int!
    $after: String
    $sortBy: SaleSortingInput
    $filter: SaleFilterInput
    $channel: String
  ) {
    sales(
      first: $first
      after: $after
      sortBy: $sortBy
      filter: $filter
      channel: $channel
    ) {
      edges {
        node {
          ...BaseSale
        }
      }
      pageInfo {
        ...PageInfo
      }
      totalCount
    }
  }
`;

export const saleDetails = gql`
  ${saleFragment}
  ${baseProductFragment}
  ${productPricingFragment}
  ${pageInfo}
  query SaleDetails($id: ID!, $channel: String) {
    sale(id: $id, channel: $channel) {
      ...SaleDetails
      products(
        after: $after
        first: $first
        sortBy: $sortBy
        filter: $filter
        channel: $channel
      ) {
        edges {
          node {
            ...BaseProduct
            ...ProductPricingField
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
`;
