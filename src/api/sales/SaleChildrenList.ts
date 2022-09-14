import BaseList, {
    GetPageInfo,
    GetTotalCount,
    MapQueryData,
  } from "../../helpers/BaseList";
  import {
    SaleChildrenList as SaleChildrenListQuery,
    SaleChildrenListVariables,
  } from "../../queries/gqlTypes/SaleChildrenList";
  import { BaseSale } from "../../fragments/gqlTypes/BaseSale";
  import { saleChildrenList } from "../../queries/sale";
  
  export class SaleChildrenList extends BaseList<
    SaleChildrenListQuery,
    BaseSale,
    SaleChildrenListVariables
  > {
    getPageInfo: GetPageInfo<SaleChildrenListQuery> = result =>
      result.data.sale?.children?.pageInfo!;
  
    getTotalCount: GetTotalCount<SaleChildrenListQuery> = result =>
      result.data.sale?.children?.totalCount!;
  
    mapQueryData: MapQueryData<SaleChildrenListQuery, BaseSale> = data =>
      data.sale?.children?.edges.map(({ node }) => node);
  
    query = (variables: SaleChildrenListVariables) =>
      this.client!.query<
        SaleChildrenListQuery,
        SaleChildrenListVariables
      >({
        query: saleChildrenList,
        variables,
      });
  }
  