import { Writer, Reader } from "protobufjs/minimal";
import { Params } from "../toe/params";
import { Qna } from "../toe/qna";
import { Topic } from "../toe/topic";
export declare const protobufPackage = "WilliamKelly00.toev2.toe";
/** GenesisState defines the toe module's genesis state. */
export interface GenesisState {
    params: Params | undefined;
    qnaList: Qna[];
    topicList: Topic[];
    /** this line is used by starport scaffolding # genesis/proto/state */
    topicCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
