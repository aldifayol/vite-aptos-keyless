// Copyright © Aptos
// SPDX-License-Identifier: Apache-2.0

import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const LocalStorageKeys = {
  keylessAccounts: "@aptos-connect/keyless-accounts",
};

export const devnetClient = new Aptos(new AptosConfig({ network: Network.DEVNET }));

/// FIXME: Put your client id here
export const GOOGLE_CLIENT_ID =
  "374353509347-9vhbdjk71ikpl4csvsb9kehclmb8tti5.apps.googleusercontent.com";
