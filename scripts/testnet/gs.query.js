const { Conflux, util } = require('js-conflux-sdk');

let env = require('../../env.json');
let contracts = require('./contracts.json');
let json_rpc_url = env.json_rpc;
let PRIVATE_KEY = env.adminPrivateKey;
let chainId = env.chainId;

const cfx = new Conflux({
  url: json_rpc_url,
  networkId:env['chainId']
});

const sourceContract = require('../../build/contracts/Genesis.json');

let contract_address = contracts.genesis_addr;
const contract = cfx.Contract({
  abi: sourceContract.abi,
  address: contract_address,
});

async function main() {
  let _tokenId = 1
  await ownersOf(_tokenId);

  // return nft meta info  baseUri + create nft uri
  // string join (baseUri, tokenId, 1006-1_2_0.json)
  // eg: https://nft.moonswap.fi/genesis/meta/1006/1006-1_2_0.json
  // NFT MetaInfo {token_id: 1, image: 'url', description: '', name: ''}
  let _uri = await uri(_tokenId);
  console.log('_uri meta =>', _uri);
}

async function ownersOf(_id)
{
  let addreses = await contract.ownerOf(_id).call();

  console.log("token_id" + _id, " ownerAddress =>" +addreses);
}

main().catch(e => console.error(e));
