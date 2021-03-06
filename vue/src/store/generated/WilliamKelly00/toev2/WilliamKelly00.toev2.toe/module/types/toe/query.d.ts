import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../toe/params";
import { Qna } from "../toe/qna";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Topic } from "../toe/topic";
import { Whois } from "../toe/whois";
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
export interface QueryGetTopicRequest {
    id: number;
}
export interface QueryGetTopicResponse {
    Topic: Topic | undefined;
}
export interface QueryAllTopicRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTopicResponse {
    Topic: Topic[];
    pagination: PageResponse | undefined;
}
export interface QueryGetWhoisRequest {
    index: string;
}
export interface QueryGetWhoisResponse {
    whois: Whois | undefined;
}
export interface QueryAllWhoisRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllWhoisResponse {
    whois: Whois[];
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
export declare const QueryGetTopicRequest: {
    encode(message: QueryGetTopicRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTopicRequest;
    fromJSON(object: any): QueryGetTopicRequest;
    toJSON(message: QueryGetTopicRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTopicRequest>): QueryGetTopicRequest;
};
export declare const QueryGetTopicResponse: {
    encode(message: QueryGetTopicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTopicResponse;
    fromJSON(object: any): QueryGetTopicResponse;
    toJSON(message: QueryGetTopicResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTopicResponse>): QueryGetTopicResponse;
};
export declare const QueryAllTopicRequest: {
    encode(message: QueryAllTopicRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTopicRequest;
    fromJSON(object: any): QueryAllTopicRequest;
    toJSON(message: QueryAllTopicRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTopicRequest>): QueryAllTopicRequest;
};
export declare const QueryAllTopicResponse: {
    encode(message: QueryAllTopicResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTopicResponse;
    fromJSON(object: any): QueryAllTopicResponse;
    toJSON(message: QueryAllTopicResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTopicResponse>): QueryAllTopicResponse;
};
export declare const QueryGetWhoisRequest: {
    encode(message: QueryGetWhoisRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetWhoisRequest;
    fromJSON(object: any): QueryGetWhoisRequest;
    toJSON(message: QueryGetWhoisRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetWhoisRequest>): QueryGetWhoisRequest;
};
export declare const QueryGetWhoisResponse: {
    encode(message: QueryGetWhoisResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetWhoisResponse;
    fromJSON(object: any): QueryGetWhoisResponse;
    toJSON(message: QueryGetWhoisResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetWhoisResponse>): QueryGetWhoisResponse;
};
export declare const QueryAllWhoisRequest: {
    encode(message: QueryAllWhoisRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWhoisRequest;
    fromJSON(object: any): QueryAllWhoisRequest;
    toJSON(message: QueryAllWhoisRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllWhoisRequest>): QueryAllWhoisRequest;
};
export declare const QueryAllWhoisResponse: {
    encode(message: QueryAllWhoisResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWhoisResponse;
    fromJSON(object: any): QueryAllWhoisResponse;
    toJSON(message: QueryAllWhoisResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllWhoisResponse>): QueryAllWhoisResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Qna by index. */
    Qna(request: QueryGetQnaRequest): Promise<QueryGetQnaResponse>;
    /** Queries a list of Qna items. */
    QnaAll(request: QueryAllQnaRequest): Promise<QueryAllQnaResponse>;
    /** Queries a Topic by id. */
    Topic(request: QueryGetTopicRequest): Promise<QueryGetTopicResponse>;
    /** Queries a list of Topic items. */
    TopicAll(request: QueryAllTopicRequest): Promise<QueryAllTopicResponse>;
    /** Queries a Whois by index. */
    Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
    /** Queries a list of Whois items. */
    WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Qna(request: QueryGetQnaRequest): Promise<QueryGetQnaResponse>;
    QnaAll(request: QueryAllQnaRequest): Promise<QueryAllQnaResponse>;
    Topic(request: QueryGetTopicRequest): Promise<QueryGetTopicResponse>;
    TopicAll(request: QueryAllTopicRequest): Promise<QueryAllTopicResponse>;
    Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
    WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
