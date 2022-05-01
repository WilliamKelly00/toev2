import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAnswerQuestion } from "./types/toe/tx";
import { MsgUpdateTopic } from "./types/toe/tx";
import { MsgSubmitQna } from "./types/toe/tx";
import { MsgAnswerQna } from "./types/toe/tx";
import { MsgSetPic } from "./types/toe/tx";
import { MsgDeleteTopic } from "./types/toe/tx";
import { MsgBuyPic } from "./types/toe/tx";
import { MsgCreateTopic } from "./types/toe/tx";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgAnswerQuestion: (data: MsgAnswerQuestion) => EncodeObject;
    msgUpdateTopic: (data: MsgUpdateTopic) => EncodeObject;
    msgSubmitQna: (data: MsgSubmitQna) => EncodeObject;
    msgAnswerQna: (data: MsgAnswerQna) => EncodeObject;
    msgSetPic: (data: MsgSetPic) => EncodeObject;
    msgDeleteTopic: (data: MsgDeleteTopic) => EncodeObject;
    msgBuyPic: (data: MsgBuyPic) => EncodeObject;
    msgCreateTopic: (data: MsgCreateTopic) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
