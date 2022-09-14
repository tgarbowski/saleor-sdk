import ApolloClient from "apollo-client";
import { SaleAncestorsListVariables } from "../../queries/gqlTypes/SaleAncestorsList";
import { SaleChildrenListVariables } from "../../queries/gqlTypes/SaleChildrenList";
import {
  SaleDetails as SaleDetailsQuery,
  SaleDetailsVariables,
} from "../../queries/gqlTypes/SaleDetails";
import { SaleDetails as SaleDetailsFragment } from "../../fragments/gqlTypes/SaleDetails";
import {
  SaleList as SaleListQuery,
  SaleListVariables,
} from "../../queries/gqlTypes/SaleList";
import { BaseSale } from "../../fragments/gqlTypes/BaseSale";
import { WithDetails, WithList } from "../types";
import { SaleList } from "./SaleList";
import { SaleAncestorsList } from "./SaleAncestorsList";
import { SaleChildrenList } from "./SaleChildrenList";
import { SaleDetails } from "./SaleDetails";

export class SalesAPI
  implements
    WithDetails<
      SaleDetailsQuery,
      SaleDetailsFragment,
      SaleDetailsVariables
    >,
    WithList<SaleListQuery, BaseSale, SaleListVariables> {
  private client: ApolloClient<any>;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  /**
   * Method returning category details
   * @param variables Details parameters
   */
  getDetails = async (variables: SaleDetailsVariables) => {
    const details = new SaleDetails(this.client);

    await details.init(variables);

    return details;
  };

  /**
   * Method returning list of categories with ability to request next page
   * @param params List parameters
   */
  getList = async (variables: SaleListVariables) => {
    const list = new SaleList(this.client);

    await list.init(variables);

    return list;
  };

  getAncestors = async (variables: SaleAncestorsListVariables) => {
    const list = new SaleAncestorsList(this.client);

    await list.init(variables);

    return list;
  };

  getChildren = async (variables: SaleChildrenListVariables) => {
    const list = new SaleChildrenList(this.client);

    await list.init(variables);

    return list;
  };
}
