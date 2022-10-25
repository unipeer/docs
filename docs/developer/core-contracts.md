---
sidebar_position: 0
---

# Overview

## Unipeer.sol

The main contract where sellers provide liquidity by depositing tokens and
buyers place buy orders.
In case of a dispute an arbitration request is raised by calling an external
arbitrator contract.

An order can default to an end state if either party fails to interact with the contract
within a time limit set by the governance.

### Lifecycle of an Order

![State Diagram of an order](./core-contracts/unipeer-order.svg)

> [**Unipeer Contract Source**](https://github.com/unipeer/unipeer/blob/master/src/Unipeer.sol)
<!-- > [**Unipeer Reference**](/developer/core-contracts/collateral) -->
