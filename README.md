# MOON-GENESIS-NFT

`ERC1155`

## start

```
npm install
```

## 更换NFT资产

- Genesis.sol

```
constructor( address _devAddr, string memory _baseMetadataURI)
    CRCN("any NFT", "xxNFT")
```

## 编译合约

```
truffle compile
```

## 脚本说明

`testnet 表示测试网  tethys表示主网 注意env的配置`

- 部署合约

```
node scripts/testnet/gs.deploy.js

```

- 空投NFT

```
node script/testnet/gs.create.js
```


## 发布Mainnet

`按testnet的脚本复制下`


## NFT MetaInfo

开发者需要支持该NFT的uri, 提供以下的META格式的信息

```
{
    "token_id": "1006",
    "image": "https://cdn.image.htlm8.top/genesis/1006-1_2_0.png",
    "description": "创世NFT是为了纪念MoonSwap登月成功而发行的NFT，将面向参与创世登月的领航员们每人空投一个创世NFT，共1024个，永不增发。",
    "name": "创世NFT"
}

```

生态内的NFT交易市场、钱包显示NFT会读取META信息

uri格式：
baseURI + tokenId + 每个NFT uri

例如创世NFT：
baseURI： https://nft.moonswap.fi/genesis/meta/
tokenId: 1006
创建uri: /1006-1_2_0.json

新的NFT的URI格式如下：
https://nft.moonswap.fi/genesis/meta/1006/1006-1_2_0.json
