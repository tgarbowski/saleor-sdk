import BaseDetails, { MapQueryData } from "../../helpers/BaseDetails";
import {
  SaleDetails as SaleDetailsQuery,
  SaleDetailsVariables,
} from "../../queries/gqlTypes/SaleDetails";
import { SaleDetails as Sale } from "../../fragments/gqlTypes/SaleDetails";
import { saleDetails } from "../../queries/sale";

export class SaleDetails extends BaseDetails<
  SaleDetailsQuery,
  Sale,
  SaleDetailsVariables
> {
  mapQueryData: MapQueryData<SaleDetailsQuery, Sale> = data =>
    data.sale || undefined;

  query = (variables: SaleDetailsVariables) =>
    this.client!.query<SaleDetailsQuery, SaleDetailsVariables>({
      query: saleDetails,
      variables,
    });
}
