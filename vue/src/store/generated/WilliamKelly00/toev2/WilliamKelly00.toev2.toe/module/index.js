// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAnswerQuestion } from "./types/toe/tx";
import { MsgUpdateTopic } from "./types/toe/tx";
import { MsgSubmitQna } from "./types/toe/tx";
import { MsgAnswerQna } from "./types/toe/tx";
import { MsgSetPic } from "./types/toe/tx";
import { MsgDeleteTopic } from "./types/toe/tx";
import { MsgBuyPic } from "./types/toe/tx";
import { MsgCreateTopic } from "./types/toe/tx";
const types = [
    ["/WilliamKelly00.toev2.toe.MsgAnswerQuestion", MsgAnswerQuestion],
    ["/WilliamKelly00.toev2.toe.MsgUpdateTopic", MsgUpdateTopic],
    ["/WilliamKelly00.toev2.toe.MsgSubmitQna", MsgSubmitQna],
    ["/WilliamKelly00.toev2.toe.MsgAnswerQna", MsgAnswerQna],
    ["/WilliamKelly00.toev2.toe.MsgSetPic", MsgSetPic],
    ["/WilliamKelly00.toev2.toe.MsgDeleteTopic", MsgDeleteTopic],
    ["/WilliamKelly00.toev2.toe.MsgBuyPic", MsgBuyPic],
    ["/WilliamKelly00.toev2.toe.MsgCreateTopic", MsgCreateTopic],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgAnswerQuestion: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgAnswerQuestion", value: MsgAnswerQuestion.fromPartial(data) }),
        msgUpdateTopic: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgUpdateTopic", value: MsgUpdateTopic.fromPartial(data) }),
        msgSubmitQna: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgSubmitQna", value: MsgSubmitQna.fromPartial(data) }),
        msgAnswerQna: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgAnswerQna", value: MsgAnswerQna.fromPartial(data) }),
        msgSetPic: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgSetPic", value: MsgSetPic.fromPartial(data) }),
        msgDeleteTopic: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgDeleteTopic", value: MsgDeleteTopic.fromPartial(data) }),
        msgBuyPic: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgBuyPic", value: MsgBuyPic.fromPartial(data) }),
        msgCreateTopic: (data) => ({ typeUrl: "/WilliamKelly00.toev2.toe.MsgCreateTopic", value: MsgCreateTopic.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
