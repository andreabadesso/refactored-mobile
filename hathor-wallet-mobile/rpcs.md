{
  "method": "htr_sendNanoContractTx",
  "params": {
    "network": "testnet",
    "method": "bet",
    "address": "WZGoUZ5WXGmopzhjuiEugHP9riBebJHn91",
    "actions": [
        {
            "type": "deposit",
            "token": "00000e680adce446edd6898914d75f5e196d21e0cfa72e64f636e3b5fa4330ff",
            "amount": "1"
        }
    ],
    "push_tx": true,
    "blueprint_id": "000001291ad6218140ef41eef71f3c2fbeb000f6ddd592bc42c6cde9fa07a964",
    "nc_id": "000011abd355cd9212d8ab55c15dd6effcc824e2fe641d3aa619f6f589a4ae98",
    "args": ["WZGoUZ5WXGmopzhjuiEugHP9riBebJHn91", "1x0"]
  }
}

{
  "method": "htr_sendNanoContractTx",
  "params": {
    "network": "testnet",
    "blueprint_id": "000001291ad6218140ef41eef71f3c2fbeb000f6ddd592bc42c6cde9fa07a964",
    "method": "initialize",
    "actions": [],
    "args": [
      "76a914a3d942f602ea11b74c3b58d15531a35a80cab00388ac",
      "00000e680adce446edd6898914d75f5e196d21e0cfa72e64f636e3b5fa4330ff",
      1955997478
    ]
  }
}

{
  "method": "htr_sendNanoContractTx",
  "params": {
    "network": "testnet",
    "method": "bet",
    "address": "WZGoUZ5WXGmopzhjuiEugHP9riBebJHn91",
    "actions": [
        {
            "type": "deposit",
            "token": "00000e680adce446edd6898914d75f5e196d21e0cfa72e64f636e3b5fa4330ff",
            "amount": "1"
        },
        {
            "type": "deposit",
            "token": "00",
            "amount": "1"
        }
    ],
    "push_tx": true,
    "blueprint_id": "000041532c45c7134b2a6355cc2a1a953c0719529d71bb95faacaea64e217e36",
    "nc_id": "00004c556ec1dacabe55297be5459202477a3c7577cd1acb7e8a08b7bf94113a",
    "args": ["WXyE8kiMM3ePzsMPQyZiYwRU4LLRvTZ9xi", "1x0"]
  }
}

{
    "method": "htr_sendTransaction",
    "params": {
        "network": "testnet",
        "outputs": [
            {
                "address": "WZGoUZ5WXGmopzhjuiEugHP9riBebJHn91",
                "value": "1",
                "token": "00"
            },
            {
                "address": "WZGoUZ5WXGmopzhjuiEugHP9riBebJHn91",
                "value": "1",
                "token": "00000e680adce446edd6898914d75f5e196d21e0cfa72e64f636e3b5fa4330ff"
            }
        ]
    }
}
