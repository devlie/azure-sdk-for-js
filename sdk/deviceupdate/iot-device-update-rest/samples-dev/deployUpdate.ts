// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how import a device update to Device Update for IoT Hub.
 *
 * @summary Demonstrates the use of a Update Deployment.
 * @azsdk-weight 40
 */

import DeviceUpdate, { getLongRunningPoller, isUnexpected } from "@azure-rest/iot-device-update";

import { DefaultAzureCredential } from "@azure/identity";
import dotenv from "dotenv";
import { v4 } from "uuid";

dotenv.config();

const endpoint = process.env["ENDPOINT"] || "";
const instanceId = process.env["INSTANCE_ID"] || "";

async function main() {
  console.log("== Deploy update ==");
  const updateProvider = process.env["DEVICEUPDATE_UPDATE_PROVIDER"] || "";
  const updateName = process.env["DEVICEUPDATE_UPDATE_NAME"] || "";
  const updateVersion = process.env["DEVICEUPDATE_UPDATE_VERSION"] || "";
  const groupId = process.env["DEVICEUPDATE_DEVICE_GROUP"] || "";

  const credentials = new DefaultAzureCredential();

  const client = DeviceUpdate(endpoint, instanceId, credentials);
  const deploymentId = v4();
  const startAt = new Date().toISOString();

  const initialResponse = await client
    .path(
      "/management/groups/{groupId}/deployments/{deploymentId}",

      groupId,
      deploymentId
    )
    .put({
      body: {
        deploymentId: deploymentId,
        startDateTime: startAt,
        update: {
          updateId: {
            provider: updateProvider,
            name: updateName,
            version: updateVersion,
          },
        },
        groupId: groupId,
      },
    });

  const poller = getLongRunningPoller(client, initialResponse);
  const result = await poller.pollUntilDone();

  if (isUnexpected(result)) {
    throw result.body.error;
  }

  console.log(`Deployment created`);

  const statusResponse = await client
    .path(
      "/management/groups/{groupId}/deployments/{deploymentId}/status",

      groupId,
      deploymentId
    )
    .get();

  if (isUnexpected(statusResponse)) {
    throw statusResponse.body;
  }

  console.log("Deployment state: " + statusResponse.body.deploymentState);
}

main().catch(console.error);
