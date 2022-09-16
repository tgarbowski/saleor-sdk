import gql from "graphql-tag";
import {
  baseSaleFragment,
  saleFragment,
} from "../fragments/sales";
import { pageInfo } from "../fragments/pageInfo";

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
  query SaleDetails($id: ID, $name: String, $channel: String) {
    sale(id: $id, name: $name, channel: $channel) {
      ...SaleDetails
    }
  }
`;
