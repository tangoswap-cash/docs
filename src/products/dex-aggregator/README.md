# SmartSwap - DEX Aggregator 

![icon](https://raw.githubusercontent.com/tangoswap-cash/art/master/smartswap/smartswap.png)

## Overview:

The protocol sources liquidity from all DEXes and is capable of splitting a single trade transaction across multiple DEXes to ensure the best rates.


## What is SmartSwap?
SmartSwap is a DEX Aggregator platform powered by TangoSwap.Cash. 
We are a decentralized exchange, or DEX, meaning that users swap their tokens peer-to-peer through the SmartBCH smart contract infrastructure. You retain complete custody of your tokens throughout the entire trading process.


## How does SmartSwap offer the best prices?
Unlike other exchanges that only use a single liquidity source, Smartswap aggregates liquidity from a growing number of sources (All SmartBCH DEXes). 
SmartSwap pulls pricing data from all liquidity sources at the time of your trade. SmartSwap then uses an automated process called "smart order routing" to split your trade across all liquidity sources to provide you with the best price/lowest slippage possible. Smart order routing is especially helpful for larger trades where a single source is unlikely to offer you the best pricing. As we continue to add additional liquidity sources to SmartSwap, the pricing that you’ll receive will only get better and better!


## How SmartSwap help TANGO?
All the fees that the SmartSwap (DEX Aggregator) earns are used to buy and burn TANGO.
- Burn address: 0x0000000000000000000000626c61636b686f6c65  


----

## SmartSwap efficiency examples
SmartSwap always allows the user to exchange with the best rate.

In the following examples you will see how SmartSwap becomes more efficient as volumes grow. 
Compared to DEXes where high volume swaps have a greater impact on the price, this causes the user to get a worse exchange rate.


## Example 1: BCH to FlexUSD
#### 1 BCH to FlexUSD:        
TangoSwap: 369.256 FlexUSD  
MistSwap: 369.162 FlexUSD       
BenSwap: 368.083 FlexUSD    
MuesliSwap: 370.144 FlexUSD     
TropicalSwap: 370.015 FlexUSD 

**SmartSwap: 370.263 FlexUSD**     
(Router: MuesliSwap: 40% - Tropical: 60%)   
0.0321393172 % better then MuesliSwap.

--

#### 10 BCH to FlexUSD       
TangoSwap: 3677.69 FlexUSD     
MistSwap: 3685.62 FlexUSD        
BenSwap: 3595.5 FlexUSD     
MuesliSwap: 3638.82 FlexUSD     
TropicalSwap: 3635.7 FlexUSD        

**SmartSwap: 3691.043 FlexUSD**    
(Router: MistSwap: 50% - MuesliSwap: 10% - TangoSwap: 30% - Tropical: 10%)  
0.1469232409 % better then MistSwap.

--

#### 100 BCH to FlexUSD      
TangoSwap: 35353.6 FlexUSD            
MistSwap: 36267 FlexUSD     
BenSwap: 29203.2 FlexUSD        
MuesliSwap: 31122.6 FlexUSD     
TropicalSwap: 30963.3 FlexUSD       

**SmartSwap: 36509.55 FlexUSD**   
(Router: MistSwap: 60% - MuesliSwap: 10% - TangoSwap: 20% - Tropical: 10%)   
0.6643467257 % better then MistSwap.

--

#### 1000 BCH to FlexUSD     
TangoSwap: 254889 FlexUSD    
MistSwap: 312685 FlexUSD        
BenSwap: 101311 FlexUSD     
MuesliSwap: 127183 FlexUSD      
TropicalSwap: 124675 FlexUSD      

**SmartSwap: 329705.22 FlexUSD**          
(Router: MistSwap: 60% - MuesliSwap: 10% - TangoSwap: 20% - Tropical: 10%)  
5.1622537247 % better then MistSwap.


---
## Example 2: BCH to GoC (GoCrypto)
#### 1 BCH to GoC:        
TangoSwap: 5911.83 GoC  
MistSwap: 5818.88 GoC       
BenSwap: 5832.89 GoC    

**SmartSwap: 5913.52 GoC**     
(Router: BenSwap: 10% - MistSwap: 10% - TangoSwap: 80%)   
0.0285785793 % better then TangoSwap.

--

#### 10 BCH to GoC       
TangoSwap:  57141.9 GoC     
MistSwap: 51289.2 GoC        
BenSwap:  51675.8 GoC     

**SmartSwap: 57764.68 GoC**    
(Router: BenSwap: 20% - MistSwap: 10% - TangoSwap: 70%)  
1.078132866 % better then TangoSwap.

--

#### 100 BCH to GoC      
TangoSwap: 428252 GoC            
MistSwap: 234654 GoC     
BenSwap: 241406 GoC        
     
**SmartSwap: 471478.01 GoC**   
(Router: BenSwap: 20% - MistSwap: 20% - TangoSwap: 60%)   
9.1681921708 % better then TangoSwap.

--

#### 1000 BCH to GoC     
TangoSwap: 1221670 GoC    
MistSwap: 365228 GoC        
BenSwap: 381463 GoC     
    
**SmartSwap: 1670288.24 GoC**          
(Router: BenSwap: 20% - MistSwap: 20% - TangoSwap: 60%)  
 26.8587318797 % better then TangoSwap.



---
### Contract Address (Mainnet):
"0xEd2E356C00A555DDdd7663BDA822C6acB34Ce614"    


## Integrate with the ABI: 
Integrate SmartSwap in your wallet or website, by using our ABI you get smart order routing splits up your transaction across decentralized exchange networks to be filled with the lowest slippage possible. With the SmartSwap ABI you can facilitate the experience of your customers and users by providing them with easy way to exchange all SmartBCH SEP20 tokens.

--

### ABI:
[{"inputs":[{"internalType":"contract ISmartSwapRewarder","name":"impl","type":"address"},{"internalType":"address","name":"referral","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newImpl","type":"address"}],"name":"ImplementationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newReferral","type":"address"}],"name":"ReferralUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20","name":"fromToken","type":"address"},{"indexed":true,"internalType":"contract IERC20","name":"destToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"fromTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"destTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"minReturn","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"distribution","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"flags","type":"uint256[]"},{"indexed":false,"internalType":"address","name":"referral","type":"address"},{"indexed":false,"internalType":"uint256","name":"feePercent","type":"uint256"}],"name":"Swapped","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"claimAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"destToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"parts","type":"uint256"},{"internalType":"uint256","name":"flags","type":"uint256"}],"name":"getExpectedReturn","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"destToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"parts","type":"uint256"},{"internalType":"uint256","name":"flags","type":"uint256"},{"internalType":"uint256","name":"destTokenEthPriceTimesGasPrice","type":"uint256"}],"name":"getExpectedReturnWithGas","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"},{"internalType":"uint256","name":"estimateGasAmount","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"contract IERC20[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256[]","name":"parts","type":"uint256[]"},{"internalType":"uint256[]","name":"flags","type":"uint256[]"},{"internalType":"uint256[]","name":"destTokenEthPriceTimesGasPrices","type":"uint256[]"}],"name":"getExpectedReturnWithGasMulti","outputs":[{"internalType":"uint256[]","name":"returnAmounts","type":"uint256[]"},{"internalType":"uint256","name":"estimateGasAmount","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract ISmartSwapRewarder","name":"impl","type":"address"}],"name":"setNewImpl","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"referral","type":"address"}],"name":"setNewReferral","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"smartSwapReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"smartSwapRewarder","outputs":[{"internalType":"contract ISmartSwapRewarder","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20","name":"fromToken","type":"address"},{"internalType":"contract IERC20","name":"destToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"},{"internalType":"uint256","name":"flags","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"feePercent","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract IERC20[]","name":"tokens","type":"address[]"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"minReturn","type":"uint256"},{"internalType":"uint256[]","name":"distribution","type":"uint256[]"},{"internalType":"uint256[]","name":"flags","type":"uint256[]"},{"internalType":"uint256","name":"feePercent","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapMulti","outputs":[{"internalType":"uint256","name":"returnAmount","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]