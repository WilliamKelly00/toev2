import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "WilliamKelly00.toev2.toe";
export interface Qna {
    index: string;
    qsh: string;
    parentTopic: string;
    question: string;
    opA: string;
    opB: string;
    opC: string;
    opD: string;
    reward: string;
    owner: string;
}
export declare const Qna: {
    encode(message: Qna, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Qna;
    fromJSON(object: any): Qna;
    toJSON(message: Qna): unknown;
    fromPartial(object: DeepPartial<Qna>): Qna;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
