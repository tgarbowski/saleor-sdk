import { SaleDetails } from "../../api/sales/SaleDetails";
import { SaleList } from "../../api/sales/SaleList";
import { makeDetails, makeList } from "./utils";

export const useSaleList = makeList(client => new SaleList(client));
export const useSaleDetails = makeDetails(
  client => new SaleDetails(client)
);
