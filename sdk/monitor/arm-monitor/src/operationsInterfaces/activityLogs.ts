/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EventData, ActivityLogsListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ActivityLogs. */
export interface ActivityLogs {
  /**
   * Provides the list of records from the activity logs.
   * @param filter Reduces the set of data collected.<br>This argument is required and it also requires
   *               at least the start date/time.<br>The **$filter** argument is very restricted and allows only the
   *               following patterns.<br>- *List events for a resource group*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and
   *               resourceGroupName eq 'resourceGroupName'.<br>- *List events for resource*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceUri
   *               eq 'resourceURI'.<br>- *List events for a subscription in a time range*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z'.<br>- *List
   *               events for a resource provider*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and
   *               eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceProvider eq
   *               'resourceProviderName'.<br>- *List events for a correlation Id*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and
   *               correlationId eq 'correlationID'.<br><br>**NOTE**: No other syntax is allowed.
   * @param options The options parameters.
   */
  list(
    filter: string,
    options?: ActivityLogsListOptionalParams
  ): PagedAsyncIterableIterator<EventData>;
}