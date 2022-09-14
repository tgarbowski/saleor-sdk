import gql from "graphql-tag";

export const baseSaleFragment = gql`
  fragment BaseSale on Sale {
    id
    name
    slug
    seoDescription
    seoTitle
  }
`;

export const saleFragment = gql`
  ${baseSaleFragment}
  fragment SaleDetails on Sale {
    ...BaseSale
    backgroundImage {
      alt
      url
    }
    description
  }
`;