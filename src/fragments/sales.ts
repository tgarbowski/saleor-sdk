import gql from "graphql-tag";

export const baseSaleFragment = gql`
  fragment BaseSale on Sale {
    id
    name
  }
`;

export const saleFragment = gql`
  ${baseSaleFragment}
  fragment SaleDetails on Sale {
    ...BaseSale
  }
`;
