---
title: Client State interface
sidebar_label: Client State interface
sidebar_position: 2
slug: /ibc/light-clients/client-state
---


# Implementing the `ClientState` interface

Learn how to implement the [`ClientState`](https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L36) interface. This list of methods described here does not include all methods of the interface. Some methods are explained in detail in the relevant sections of the guide.

## `ClientType` method

`ClientType` should return a unique string identifier of the light client. This will be used when generating a client identifier.
The format is created as follows: `ClientType-{N}` where `{N}` is the unique global nonce associated with a specific client.

## `GetLatestHeight` method

`GetLatestHeight` should return the latest block height that the client state represents.

## `Validate` method

`Validate` should validate every client state field and should return an error if any value is invalid. The light client
implementer is in charge of determining which checks are required. See the [Tendermint light client implementation](https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/light-clients/07-tendermint/client_state.go#L111) as a reference.

## `Status` method

`Status` must return the status of the client.

- An `Active` status indicates that clients are allowed to process packets.
- A `Frozen` status indicates that misbehaviour was detected in the counterparty chain and the client is not allowed to be used.
- An `Expired` status indicates that a client is not allowed to be used because it was not updated for longer than the trusting period.
- An `Unknown` status indicates that there was an error in determining the status of a client.

All possible `Status` types can be found [here](https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/exported/client.go#L22-L32).

This field is returned in the response of the gRPC [`ibc.core.client.v1.Query/ClientStatus`](https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/types/query.pb.go#L665) endpoint.

## `GetTimestampAtHeight` method

`GetTimestampAtHeight` must return the timestamp for the consensus state associated with the provided height.
This value is used to facilitate timeouts by checking the packet timeout timestamp against the returned value.

## `Initialize` method

Clients must validate the initial consensus state, and set the initial client state and consensus state in the provided client store.
Clients may also store any necessary client-specific metadata.

`Initialize` is called when a [client is created](https://github.com/cosmos/ibc-go/blob/v7.0.0/modules/core/02-client/keeper/client.go#L30).

## `VerifyMembership` method

`VerifyMembership` must verify the existence of a value at a given commitment path at the specified height. For more information about membership proofs
see the [Existence and non-existence proofs section](06-proofs.md).

## `VerifyNonMembership` method

`VerifyNonMembership` must verify the absence of a value at a given commitment path at a specified height. For more information about non-membership proofs
see the [Existence and non-existence proofs section](06-proofs.md).

## `VerifyClientMessage` method

`VerifyClientMessage` must verify a `ClientMessage`. A `ClientMessage` could be a `Header`, `Misbehaviour`, or batch update.
It must handle each type of `ClientMessage` appropriately. Calls to `CheckForMisbehaviour`, `UpdateState`, and `UpdateStateOnMisbehaviour`
will assume that the content of the `ClientMessage` has been verified and can be trusted. An error should be returned
if the ClientMessage fails to verify.

## `CheckForMisbehaviour` method

Checks for evidence of a misbehaviour in `Header` or `Misbehaviour` type. It assumes the `ClientMessage`
has already been verified.
