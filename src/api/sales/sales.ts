import ApolloClient from "apollo-client";
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
import { ConfigInput } from "../../types";
import { SaleList } from "./SaleList";
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

  // temporary solution, might change in future
  private config: ConfigInput;

  constructor(client: ApolloClient<any>, config: ConfigInput) {
    this.client = client;
    this.config = config;
  }

  /**
   * Method returning collection details
   * @param variables Details parameters
   */
  getDetails = async (variables: SaleDetailsVariables) => {
    const details = new SaleDetails(this.client);

    await details.init({ channel: this.config.channel, ...variables });

    return details;
  };

  /**
   * Method returning list of collections with ability to request next page
   * @param params List parameters
   */
  getList = async (variables: SaleListVariables) => {
    const list = new SaleList(this.client);

    await list.init({ channel: this.config.channel, ...variables });

    return list;
  };
}
