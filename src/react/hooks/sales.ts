import { SaleDetails } from "../../api/sales/SaleDetails";
import { SaleAncestorsList } from "../../api/sales/SaleAncestorsList";
import { SaleChildrenList } from "../../api/sales/SaleChildrenList";
import { SaleList } from "../../api/sales/SaleList";
import { makeDetails, makeList } from "./utils";

export const useSaleList = makeList(client => new SaleList(client));
export const useSaleAncestorsList = makeList(
  client => new SaleAncestorsList(client)
);
export const useSaleChildrenList = makeList(
  client => new SaleChildrenList(client)
);
export const useSaleDetails = makeDetails(
  client => new SaleDetails(client)
);
