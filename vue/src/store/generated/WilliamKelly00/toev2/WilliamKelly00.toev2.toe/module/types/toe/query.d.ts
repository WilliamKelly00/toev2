import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../toe/params";
import { Qna } from "../toe/qna";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "WilliamKelly00.toev2.toe";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetQnaRequest {
    index: string;
}
export interface QueryGetQnaResponse {
    qna: Qna | undefined;
}
export interface QueryAllQnaRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllQnaResponse {
    qna: Qna[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetQnaRequest: {
    encode(message: QueryGetQnaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetQnaRequest;
    fromJSON(object: any): QueryGetQnaRequest;
    toJSON(message: QueryGetQnaRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetQnaRequest>): QueryGetQnaRequest;
};
export declare const QueryGetQnaResponse: {
    encode(message: QueryGetQnaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetQnaResponse;
    fromJSON(object: any): QueryGetQnaResponse;
    toJSON(message: QueryGetQnaResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetQnaResponse>): QueryGetQnaResponse;
};
export declare const QueryAllQnaRequest: {
    encode(message: QueryAllQnaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllQnaRequest;
    fromJSON(object: any): QueryAllQnaRequest;
    toJSON(message: QueryAllQnaRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllQnaRequest>): QueryAllQnaRequest;
};
export declare const QueryAllQnaResponse: {
    encode(message: QueryAllQnaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllQnaResponse;
    fromJSON(object: any): QueryAllQnaResponse;
    toJSON(message: QueryAllQnaResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllQnaResponse>): QueryAllQnaResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Qna by index. */
    Qna(request: QueryGetQnaRequest): Promise<QueryGetQnaResponse>;
    /** Queries a list of Qna items. */
    QnaAll(request: QueryAllQnaRequest): Promise<QueryAllQnaResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Qna(request: QueryGetQnaRequest): Promise<QueryGetQnaResponse>;
    QnaAll(request: QueryAllQnaRequest): Promise<QueryAllQnaResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
