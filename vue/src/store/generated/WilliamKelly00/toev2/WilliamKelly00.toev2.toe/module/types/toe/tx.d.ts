import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "WilliamKelly00.toev2.toe";
export interface MsgSubmitQna {
    creator: string;
    parentTopic: string;
    question: string;
    opA: string;
    opB: string;
    opC: string;
    opD: string;
    qsh: string;
    reward: string;
}
export interface MsgSubmitQnaResponse {
}
export interface MsgAnswerQna {
    creator: string;
    qsh: string;
}
export interface MsgAnswerQnaResponse {
}
export declare const MsgSubmitQna: {
    encode(message: MsgSubmitQna, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitQna;
    fromJSON(object: any): MsgSubmitQna;
    toJSON(message: MsgSubmitQna): unknown;
    fromPartial(object: DeepPartial<MsgSubmitQna>): MsgSubmitQna;
};
export declare const MsgSubmitQnaResponse: {
    encode(_: MsgSubmitQnaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSubmitQnaResponse;
    fromJSON(_: any): MsgSubmitQnaResponse;
    toJSON(_: MsgSubmitQnaResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitQnaResponse>): MsgSubmitQnaResponse;
};
export declare const MsgAnswerQna: {
    encode(message: MsgAnswerQna, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAnswerQna;
    fromJSON(object: any): MsgAnswerQna;
    toJSON(message: MsgAnswerQna): unknown;
    fromPartial(object: DeepPartial<MsgAnswerQna>): MsgAnswerQna;
};
export declare const MsgAnswerQnaResponse: {
    encode(_: MsgAnswerQnaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAnswerQnaResponse;
    fromJSON(_: any): MsgAnswerQnaResponse;
    toJSON(_: MsgAnswerQnaResponse): unknown;
    fromPartial(_: DeepPartial<MsgAnswerQnaResponse>): MsgAnswerQnaResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    SubmitQna(request: MsgSubmitQna): Promise<MsgSubmitQnaResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    AnswerQna(request: MsgAnswerQna): Promise<MsgAnswerQnaResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SubmitQna(request: MsgSubmitQna): Promise<MsgSubmitQnaResponse>;
    AnswerQna(request: MsgAnswerQna): Promise<MsgAnswerQnaResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
