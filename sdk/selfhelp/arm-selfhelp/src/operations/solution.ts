/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Solution } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HelpRP } from "../helpRP";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  SolutionCreateOptionalParams,
  SolutionCreateResponse,
  SolutionGetOptionalParams,
  SolutionGetResponse,
  SolutionUpdateOptionalParams,
  SolutionUpdateResponse
} from "../models";

/** Class containing Solution operations. */
export class SolutionImpl implements Solution {
  private readonly client: HelpRP;

  /**
   * Initialize a new instance of the class Solution class.
   * @param client Reference to the service client
   */
  constructor(client: HelpRP) {
    this.client = client;
  }

  /**
   * Creates a solution for the specific Azure resource or subscription using the triggering criteria
   * ‘solutionId and requiredInputs’ from discovery solutions.<br/> Solutions are a rich, insightful and
   * a centralized self help experience that brings all the relevant content to troubleshoot an Azure
   * issue into a unified experience. Solutions include the following components : Text, Diagnostics ,
   * Troubleshooters, Images , Video tutorials, Tables , custom charts, images , AzureKB, etc, with
   * capabilities to support new solutions types in the future. Each solution type may require one or
   * more ‘requiredParameters’ that are required to execute the individual solution component. In the
   * absence of the ‘requiredParameters’ it is likely that some of the solutions might fail execution,
   * and you might see an empty response. <br/><br/> <b>Note:</b>  <br/>1. ‘requiredInputs’ from
   * Discovery solutions response must be passed via ‘parameters’ in the request body of Solutions API.
   * <br/>2. ‘requiredParameters’ from the Solutions response is the same as ‘ additionalParameters’ in
   * the request for diagnostics <br/>3. ‘requiredParameters’ from the Solutions response is the same as
   * ‘properties.parameters’ in the request for Troubleshooters
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param solutionResourceName Solution resource Name.
   * @param options The options parameters.
   */
  async beginCreate(
    scope: string,
    solutionResourceName: string,
    options?: SolutionCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SolutionCreateResponse>,
      SolutionCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SolutionCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { scope, solutionResourceName, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      SolutionCreateResponse,
      OperationState<SolutionCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a solution for the specific Azure resource or subscription using the triggering criteria
   * ‘solutionId and requiredInputs’ from discovery solutions.<br/> Solutions are a rich, insightful and
   * a centralized self help experience that brings all the relevant content to troubleshoot an Azure
   * issue into a unified experience. Solutions include the following components : Text, Diagnostics ,
   * Troubleshooters, Images , Video tutorials, Tables , custom charts, images , AzureKB, etc, with
   * capabilities to support new solutions types in the future. Each solution type may require one or
   * more ‘requiredParameters’ that are required to execute the individual solution component. In the
   * absence of the ‘requiredParameters’ it is likely that some of the solutions might fail execution,
   * and you might see an empty response. <br/><br/> <b>Note:</b>  <br/>1. ‘requiredInputs’ from
   * Discovery solutions response must be passed via ‘parameters’ in the request body of Solutions API.
   * <br/>2. ‘requiredParameters’ from the Solutions response is the same as ‘ additionalParameters’ in
   * the request for diagnostics <br/>3. ‘requiredParameters’ from the Solutions response is the same as
   * ‘properties.parameters’ in the request for Troubleshooters
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param solutionResourceName Solution resource Name.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    scope: string,
    solutionResourceName: string,
    options?: SolutionCreateOptionalParams
  ): Promise<SolutionCreateResponse> {
    const poller = await this.beginCreate(scope, solutionResourceName, options);
    return poller.pollUntilDone();
  }

  /**
   * Get the solution using the applicable solutionResourceName while creating the solution.
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param solutionResourceName Solution resource Name.
   * @param options The options parameters.
   */
  get(
    scope: string,
    solutionResourceName: string,
    options?: SolutionGetOptionalParams
  ): Promise<SolutionGetResponse> {
    return this.client.sendOperationRequest(
      { scope, solutionResourceName, options },
      getOperationSpec
    );
  }

  /**
   * Update the requiredInputs or additional information needed to execute the solution
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param solutionResourceName Solution resource Name.
   * @param options The options parameters.
   */
  async beginUpdate(
    scope: string,
    solutionResourceName: string,
    options?: SolutionUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SolutionUpdateResponse>,
      SolutionUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SolutionUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { scope, solutionResourceName, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      SolutionUpdateResponse,
      OperationState<SolutionUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the requiredInputs or additional information needed to execute the solution
   * @param scope This is an extension resource provider and only resource level extension is supported
   *              at the moment.
   * @param solutionResourceName Solution resource Name.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    scope: string,
    solutionResourceName: string,
    options?: SolutionUpdateOptionalParams
  ): Promise<SolutionUpdateResponse> {
    const poller = await this.beginUpdate(scope, solutionResourceName, options);
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Help/solutions/{solutionResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SolutionResource
    },
    201: {
      bodyMapper: Mappers.SolutionResource
    },
    202: {
      bodyMapper: Mappers.SolutionResource
    },
    204: {
      bodyMapper: Mappers.SolutionResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.solutionRequestBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.solutionResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Help/solutions/{solutionResourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SolutionResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.solutionResourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Help/solutions/{solutionResourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SolutionResource,
      headersMapper: Mappers.SolutionUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.SolutionResource,
      headersMapper: Mappers.SolutionUpdateHeaders
    },
    202: {
      bodyMapper: Mappers.SolutionResource,
      headersMapper: Mappers.SolutionUpdateHeaders
    },
    204: {
      bodyMapper: Mappers.SolutionResource,
      headersMapper: Mappers.SolutionUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.solutionPatchRequestBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.solutionResourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
