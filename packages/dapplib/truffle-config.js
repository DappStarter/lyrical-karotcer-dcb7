require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth pulse comic hunt perfect sun topic'; 
let testAccounts = [
"0xb648aeb36dd830266f6443951f77dde261441364f6c0244e5b276cc1aefeb6d0",
"0x1e03f3af50edd1a4193878237c6d00ad67025d048104168dbd7496bd787d0da4",
"0x2d4a2291bef15ba8ce2e6690fae6b320c20c547b6e06bd11fc328832fbfdc5be",
"0x1e1474cb2747ca938a0c47b3884e2174bc5b972a2fd75ea03572b66f996d1e28",
"0xf4d2737855db9d62328084f22f78430302a3dd7493f276434a908853b328989c",
"0x14c192417342b2c74acb7eb7505bf61094b5795b102c31a2efb18cfe1cb5653b",
"0xbad4b6220e3a64659f0e941e2e009d98c2b212d467a6f6b5da93116f1304c884",
"0x1dc3d06a934cb148a4199c14c9f708a9f1cfd3c0d42c96890c556e6ab53db6fe",
"0x80dbe58058a0e6a9dbc605023b84bcf3d8fda0a59c1374c32e7a2b3c413c5f26",
"0x160fe5104647cda9294221178f16c343820e245d2235a79b2ee7d1384ab28ebd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


