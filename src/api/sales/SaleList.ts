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
import { sales } from "../../queries/sales";

export class SaleList extends BaseList<
  SaleListQuery,
  BaseSale,
  SaleListVariables
> {
  getPageInfo: GetPageInfo<SaleListQuery> = result =>
    result.data.sales?.pageInfo!;

  getTotalCount: GetTotalCount<SaleListQuery> = result =>
    result.data.sales?.totalCount!;

  mapQueryData: MapQueryData<SaleListQuery, BaseSale> = data =>
    data.sales?.edges.map(({ node }) => node);

  query = (variables: SaleListVariables) =>
    this.client!.query<SaleListQuery, SaleListVariables>({
      query: sales,
      variables,
    });
}
