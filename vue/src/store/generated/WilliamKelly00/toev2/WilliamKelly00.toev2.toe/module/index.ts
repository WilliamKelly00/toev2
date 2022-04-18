// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTopic } from "./types/toe/tx";
import { MsgDeleteTopic } from "./types/toe/tx";
import { MsgAnswerQuestion } from "./types/toe/tx";
import { MsgAnswerQna } from "./types/toe/tx";
import { MsgSubmitQna } from "./types/toe/tx";
import { MsgCreateTopic } from "./types/toe/tx";


const types = [
  ["/WilliamKelly00.toev2.toe.MsgUpdateTopic", MsgUpdateTopic],
  ["/WilliamKelly00.toev2.toe.MsgDeleteTopic", MsgDeleteTopic],
  ["/WilliamKelly00.toev2.toe.MsgAnswerQuestion", MsgAnswerQuestion],
  ["/WilliamKelly00.toev2.toe.MsgAnswerQna", MsgAnswerQna],
  ["/WilliamKelly00.toev2.toe.MsgSubmitQna", MsgSubmitQna],
  ["/WilliamKelly00.toev2.toe.MsgCreateTopic", MsgCreateTopic],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateTopic: (data: MsgUpdateTopic): EncodeObject => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgUpdateTopic", value: MsgUpdateTopic.fromPartial( data ) }),
    msgDeleteTopic: (data: MsgDeleteTopic): EncodeObject => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgDeleteTopic", value: MsgDeleteTopic.fromPartial( data ) }),
    msgAnswerQuestion: (data: MsgAnswerQuestion): EncodeObject => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgAnswerQuestion", value: MsgAnswerQuestion.fromPartial( data ) }),
    msgAnswerQna: (data: MsgAnswerQna): EncodeObject => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgAnswerQna", value: MsgAnswerQna.fromPartial( data ) }),
    msgSubmitQna: (data: MsgSubmitQna): EncodeObject => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgSubmitQna", value: MsgSubmitQna.fromPartial( data ) }),
    msgCreateTopic: (data: MsgCreateTopic): EncodeObject => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgCreateTopic", value: MsgCreateTopic.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
