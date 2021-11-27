require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note scrub essay inflict pet tail since'; 
let testAccounts = [
"0x1132e34143d4fc6d7bbb1ad3f97a9a37c6a68fb6799ae48b3f1353b726f1b799",
"0x8d5c34ac5f63d9256f14e575ac5489dd48f7e81329fa59c7f537eeae79abe3ec",
"0x1b8d729994be8333671ee1f8d1abd43f1db60b8571201e754a238082b07e105a",
"0x829b983aebd06ec059193960463c87e33d9e3e2aa5d82da035a4dab6593cf440",
"0x452fe9f145782412bf0b02870d767c2a124503966aeecdbd67db360f76db1166",
"0xabe17f95524af56c6c125c058028fe02c52feeda65986c6188c2f8fc4857f121",
"0x2a34e4202ef7f4b46a2117b69e8f24d6b0a31285dde75189734139d2273cbaac",
"0xf9d3bea3480a0a1e1bf4a2688ba6f71c6cf38887604913d2ad5f52289664d077",
"0x782201ed3c4efe1b6d5b19a00e186c5946b81feed1c424d757847e469b242152",
"0x9887efbf086b68a24f5a9011e01f8649724536fb1ef09735c3083c6d932799f5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

