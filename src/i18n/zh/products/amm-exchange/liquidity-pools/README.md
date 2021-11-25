# Liquidity Pools

<https://tangoswap.cash/pool>

---

## What Are Liquidity Pools?

Liquidity pools are place to pool tokens (which we sometimes call liquidity) so that users can use them to make trades in a decentralized way. These pools are created by users and decentralized apps (or Dapps, for short) who want to profit from their usage. To pool liquidity, the amounts a user supplies must be equally divided between two coins: the primary token (sometimes called the quote token) and the base token (usually BCH or a stable coin). TangoSwap's liquidity pools allow anyone to provide liquidity at the following link: <https://tangoswap.cash/pool>. When they do so, they will receive SLP tokens (TangoSwap Liquidity Provider tokens). If a user deposited $TANGO and $BCH into a pool, they would receive TANGO-BCH SLP tokens. These tokens represent a proportional share of the pooled assets, allowing a user to reclaim their funds at any point. Every time another user uses the pool to trade between $TANGO and $BCH, a 0.3% fee is taken on the trade. 0.25% of that trade goes back to the LP pool.

The value of the SLP tokens, which represent the shares of the total liquidity each pool, is updated with each trade to add their value relative to the tokens the pool uses to trade. If previously there were 100 SLP tokens representing 100 BCH and 100 TANGO, each token would be worth 1 BCH & 1 TANGO (note in this example, BCH and TANGO are the same relative value). If a user were then to trade 10 BCH for 10 TANGO in that pool, and another user were to trade 10 TANGO for 10 BCH, then there would now be 100.025 BCH and 100.025 TANGO. This means each LP token would be worth 1.0025 BCH and 1.00025 TANGO now when it is withdrawn.

## Instructions for Adding Liquidity

### Using <https://tangoswap.cash/pool>

Adding liquidity is really straightforward. First, you must choose which tokens to input. Click "Select Token".

If you have never used TangoSwap before, this will trigger a popup asking you to choose a list of tokens. Click on "Choose a list".

There are different lists to choose from, but in this example we will be using the default list of TangoSwap.

After choosing a list, you will be shown the tokens represented in that list along with your balance of them (if any). In this case, we only have two to choose from, flexUSD and BCH.

After selecting our desired input tokens, we're ready to click "Supply"! If this is your first time interacting with TangoSwap's smart contracts for either or both of the tokens in question, you will be prompted to "Approve" that our smart contracts are allowed to handle them for you.

When the liquidity add is done, you receive Tango Liquidity Provider (TLP) tokens in return. These represent your share in the liquidity pool, and your earned fees that are received upon withdrawal of the liquidity.

### Adding Liquidity to a New Pool

If the pool you wish to provide liquidity to does not exist, you can create it of course! Just provide the tokens, and off you go. As the first liquidity provider, you set the initial exchange ratio (price) if one of the tokens in the pair does not exist yet on TangoSwap. This often quickly corrects itself through arbitrage and by more liquidity providers adding to the pool.
