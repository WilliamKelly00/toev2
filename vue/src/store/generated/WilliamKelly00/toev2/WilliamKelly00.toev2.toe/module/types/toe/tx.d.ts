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
export interface MsgCreateTopic {
    creator: string;
    name: string;
    parentTopic: string;
}
export interface MsgCreateTopicResponse {
    id: number;
}
export interface MsgUpdateTopic {
    creator: string;
    id: number;
    name: string;
    parentTopic: string;
}
export interface MsgUpdateTopicResponse {
}
export interface MsgDeleteTopic {
    creator: string;
    id: number;
}
export interface MsgDeleteTopicResponse {
}
export interface MsgAnswerQuestion {
    creator: string;
    qsh: string;
    backup: string;
}
export interface MsgAnswerQuestionResponse {
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
export declare const MsgCreateTopic: {
    encode(message: MsgCreateTopic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTopic;
    fromJSON(object: any): MsgCreateTopic;
    toJSON(message: MsgCreateTopic): unknown;
    fromPartial(object: DeepPartial<MsgCreateTopic>): MsgCreateTopic;
};
export declare const MsgCreateTopicResponse: {
    encode(message: MsgCreateTopicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTopicResponse;
    fromJSON(object: any): MsgCreateTopicResponse;
    toJSON(message: MsgCreateTopicResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTopicResponse>): MsgCreateTopicResponse;
};
export declare const MsgUpdateTopic: {
    encode(message: MsgUpdateTopic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTopic;
    fromJSON(object: any): MsgUpdateTopic;
    toJSON(message: MsgUpdateTopic): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTopic>): MsgUpdateTopic;
};
export declare const MsgUpdateTopicResponse: {
    encode(_: MsgUpdateTopicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTopicResponse;
    fromJSON(_: any): MsgUpdateTopicResponse;
    toJSON(_: MsgUpdateTopicResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTopicResponse>): MsgUpdateTopicResponse;
};
export declare const MsgDeleteTopic: {
    encode(message: MsgDeleteTopic, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTopic;
    fromJSON(object: any): MsgDeleteTopic;
    toJSON(message: MsgDeleteTopic): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTopic>): MsgDeleteTopic;
};
export declare const MsgDeleteTopicResponse: {
    encode(_: MsgDeleteTopicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTopicResponse;
    fromJSON(_: any): MsgDeleteTopicResponse;
    toJSON(_: MsgDeleteTopicResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTopicResponse>): MsgDeleteTopicResponse;
};
export declare const MsgAnswerQuestion: {
    encode(message: MsgAnswerQuestion, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAnswerQuestion;
    fromJSON(object: any): MsgAnswerQuestion;
    toJSON(message: MsgAnswerQuestion): unknown;
    fromPartial(object: DeepPartial<MsgAnswerQuestion>): MsgAnswerQuestion;
};
export declare const MsgAnswerQuestionResponse: {
    encode(_: MsgAnswerQuestionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAnswerQuestionResponse;
    fromJSON(_: any): MsgAnswerQuestionResponse;
    toJSON(_: MsgAnswerQuestionResponse): unknown;
    fromPartial(_: DeepPartial<MsgAnswerQuestionResponse>): MsgAnswerQuestionResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    SubmitQna(request: MsgSubmitQna): Promise<MsgSubmitQnaResponse>;
    AnswerQna(request: MsgAnswerQna): Promise<MsgAnswerQnaResponse>;
    CreateTopic(request: MsgCreateTopic): Promise<MsgCreateTopicResponse>;
    UpdateTopic(request: MsgUpdateTopic): Promise<MsgUpdateTopicResponse>;
    DeleteTopic(request: MsgDeleteTopic): Promise<MsgDeleteTopicResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    AnswerQuestion(request: MsgAnswerQuestion): Promise<MsgAnswerQuestionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SubmitQna(request: MsgSubmitQna): Promise<MsgSubmitQnaResponse>;
    AnswerQna(request: MsgAnswerQna): Promise<MsgAnswerQnaResponse>;
    CreateTopic(request: MsgCreateTopic): Promise<MsgCreateTopicResponse>;
    UpdateTopic(request: MsgUpdateTopic): Promise<MsgUpdateTopicResponse>;
    DeleteTopic(request: MsgDeleteTopic): Promise<MsgDeleteTopicResponse>;
    AnswerQuestion(request: MsgAnswerQuestion): Promise<MsgAnswerQuestionResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
