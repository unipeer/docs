# Getting Started 🚀

## Buyer

:::tip
Get some initial funds for paying gas fees from the [Gnosis Faucet][1].
You can get up to 0.1 xDai on the mainnet by following the instructions of
the faucet.
:::

As a buyer you can get started in the following way, go
to the [Unipeer App][2] page, and place a buy order by: 

1. Choose the asset you want to buy.
1. Enter the amount of tokens to buy.
1. The UI will automatically select a seller for you based on the inputs
    (not implemented yet) or you can manually specify a seller.
1. Click on "Place Buy Order" to make a blockchain transaction locking the
    seller funds for your order. 
1. You now have limited time span to make the off-chain fiat payment to
    the seller.
1. To make the off-chain payment, note the sellers address and
    the corresponding fiat currency shown on the UI. Navigate to the 
    payment processors webpage or app (paypal.com for example) and make the
    payment to the seller.
1. Once you've made the payment to the seller, come back to the Unipeer
    app and switch to the "My Orders" Tab
1. You should see your order list there, once you're sure the off-chain
    payment has gone through, confirm the payment via the "Confirm Paid"
    button.
1. You're done! Sit back and relax for the seller to confirm. Once the
    seller has confirmed, the tokens will be transferred to your
    wallet.
1. If your order is disputed by the seller, collect any evidence that supports
   your claim that you have indeed made the off-chain payment, and present it
   to the Kleros court jurors.

<br/>

:::info
To place a buy order successfully, you need to provide a deposit needed to
cover the arbitration costs in case of a dispute. It will be refunded to you
unless your order is disputed and you lose the case.
:::

:::caution
The seller can only dispute your order after you've confirmed making the
payment. Do so only if you have made the off-chain payment, if not your order
will automatically time out after a while.
:::

## Seller

If you're looking to sell some of your crypto assets for fiat you can do so with
Unipeer by:

1. Navigate to "Sell" Tab on the Unipeer app page.
2. You can see a list of whitelisted payment methods and tokens.
3. Select the token you wish to sell and a corresponding payment method you
   are willing to accept fiat payment with.
4. Accept a payment method for new orders to be matched to you by your payment
   address (yourname@paypal.me for example) and you desired fee rate on every
   order (Keep this low to get maximum orders). 
5. Click on the "Accept Payment Method" button to make an on-chain transaction
   with the details.
6. Finally, deposit the amount of tokens you'd want to sell to the
   smart contract via the "Deposit" button.
7. Buy orders should now start being matched to you. You'll be alerted when a
   new order is created against you via email and/or telegram bot.
8. Once a buyer creates and confirms an order, you have limited time period to
   complete the order, transferring the funds to the buyer or dispute the
   order if you haven't received the corresponding off-chain payment by the
   buyer.
1. Depending on your decision you can either "Complete Order" or "Dispute
   Order"
9. If you take no action, after a set time the order will automatically be
   marked complete and funds transferred to the buyer.

<br/>

:::caution
Make sure the payment address is correct. Buyers will make the payment to this
address once matched to you. You can update the address anytime however it
will *not* be updated for any order already created so far.
:::

:::info
Eventually bots, with the feature to connect to fiat payment processors to
automatically monitor and complete/dispute orders on your behalf, will be made
available that'll greatly reduce and automate a seller's operational overhead.
:::

[1]: https://gnosisfaucet.com/
[2]: https://app.unipeer.exchange
