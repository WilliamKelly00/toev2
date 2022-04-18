import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTopic } from "./types/toe/tx";
import { MsgDeleteTopic } from "./types/toe/tx";
import { MsgAnswerQuestion } from "./types/toe/tx";
import { MsgAnswerQna } from "./types/toe/tx";
import { MsgSubmitQna } from "./types/toe/tx";
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
    msgUpdateTopic: (data: MsgUpdateTopic) => EncodeObject;
    msgDeleteTopic: (data: MsgDeleteTopic) => EncodeObject;
    msgAnswerQuestion: (data: MsgAnswerQuestion) => EncodeObject;
    msgAnswerQna: (data: MsgAnswerQna) => EncodeObject;
    msgSubmitQna: (data: MsgSubmitQna) => EncodeObject;
    msgCreateTopic: (data: MsgCreateTopic) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
