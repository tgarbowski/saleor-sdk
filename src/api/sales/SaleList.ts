import BaseList, {
    GetPageInfo,
    GetTotalCount,
    MapQueryData,
  } from "../../helpers/BaseList";
  import {
    SaleList as SaleListQuery,
    SaleListVariables,
  } from "../../queries/gqlTypes/SaleList";
  import { BaseSale } from "../../fragments/gqlTypes/BaseSale";
  import { saleList } from "../../queries/sale";
  
  export class SaleList extends BaseList<
    SaleListQuery,
    BaseSale,
    SaleListVariables
  > {
    getPageInfo: GetPageInfo<SaleListQuery> = result =>
      result.data.categories?.pageInfo!;
  
    getTotalCount: GetTotalCount<SaleListQuery> = result =>
      result.data.categories?.totalCount!;
  
    mapQueryData: MapQueryData<SaleListQuery, BaseSale> = data =>
      data.categories?.edges.map(({ node }) => node);
  
    query = (variables: SaleListVariables) =>
      this.client!.query<SaleListQuery, SaleListVariables>({
        query: saleList,
        variables,
      });
  }
  