import BaseList, {
    GetPageInfo,
    GetTotalCount,
    MapQueryData,
  } from "../../helpers/BaseList";
  import {
    SaleAncestorsList as SaleAncestorsListQuery,
    SaleAncestorsListVariables,
  } from "../../queries/gqlTypes/SaleAncestorsList";
  import { BaseSale } from "../../fragments/gqlTypes/BaseSale";
  import { saleAncestorsList } from "../../queries/sale";
  
  export class SaleAncestorsList extends BaseList<
    SaleAncestorsListQuery,
    BaseSale,
    SaleAncestorsListVariables
  > {
    getPageInfo: GetPageInfo<SaleAncestorsListQuery> = result =>
      result.data.sale?.ancestors?.pageInfo!;
  
    getTotalCount: GetTotalCount<SaleAncestorsListQuery> = result =>
      result.data.sale?.ancestors?.totalCount!;
  
    mapQueryData: MapQueryData<SaleAncestorsListQuery, BaseSale> = data =>
      data.sale?.ancestors?.edges.map(({ node }) => node);
  
    query = (variables: SaleAncestorsListVariables) =>
      this.client!.query<
        SaleAncestorsListQuery,
        SaleAncestorsListVariables
      >({
        query: saleAncestorsList,
        variables,
      });
  }
  