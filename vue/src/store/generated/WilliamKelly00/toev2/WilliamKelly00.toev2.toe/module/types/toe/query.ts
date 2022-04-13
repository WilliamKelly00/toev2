/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../toe/params";
import { Qna } from "../toe/qna";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "WilliamKelly00.toev2.toe";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

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

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetQnaRequest: object = { index: "" };

export const QueryGetQnaRequest = {
  encode(
    message: QueryGetQnaRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetQnaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetQnaRequest } as QueryGetQnaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetQnaRequest {
    const message = { ...baseQueryGetQnaRequest } as QueryGetQnaRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetQnaRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetQnaRequest>): QueryGetQnaRequest {
    const message = { ...baseQueryGetQnaRequest } as QueryGetQnaRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetQnaResponse: object = {};

export const QueryGetQnaResponse = {
  encode(
    message: QueryGetQnaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.qna !== undefined) {
      Qna.encode(message.qna, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetQnaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetQnaResponse } as QueryGetQnaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.qna = Qna.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetQnaResponse {
    const message = { ...baseQueryGetQnaResponse } as QueryGetQnaResponse;
    if (object.qna !== undefined && object.qna !== null) {
      message.qna = Qna.fromJSON(object.qna);
    } else {
      message.qna = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetQnaResponse): unknown {
    const obj: any = {};
    message.qna !== undefined &&
      (obj.qna = message.qna ? Qna.toJSON(message.qna) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetQnaResponse>): QueryGetQnaResponse {
    const message = { ...baseQueryGetQnaResponse } as QueryGetQnaResponse;
    if (object.qna !== undefined && object.qna !== null) {
      message.qna = Qna.fromPartial(object.qna);
    } else {
      message.qna = undefined;
    }
    return message;
  },
};

const baseQueryAllQnaRequest: object = {};

export const QueryAllQnaRequest = {
  encode(
    message: QueryAllQnaRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllQnaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllQnaRequest } as QueryAllQnaRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllQnaRequest {
    const message = { ...baseQueryAllQnaRequest } as QueryAllQnaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllQnaRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllQnaRequest>): QueryAllQnaRequest {
    const message = { ...baseQueryAllQnaRequest } as QueryAllQnaRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllQnaResponse: object = {};

export const QueryAllQnaResponse = {
  encode(
    message: QueryAllQnaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.qna) {
      Qna.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllQnaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllQnaResponse } as QueryAllQnaResponse;
    message.qna = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.qna.push(Qna.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllQnaResponse {
    const message = { ...baseQueryAllQnaResponse } as QueryAllQnaResponse;
    message.qna = [];
    if (object.qna !== undefined && object.qna !== null) {
      for (const e of object.qna) {
        message.qna.push(Qna.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllQnaResponse): unknown {
    const obj: any = {};
    if (message.qna) {
      obj.qna = message.qna.map((e) => (e ? Qna.toJSON(e) : undefined));
    } else {
      obj.qna = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllQnaResponse>): QueryAllQnaResponse {
    const message = { ...baseQueryAllQnaResponse } as QueryAllQnaResponse;
    message.qna = [];
    if (object.qna !== undefined && object.qna !== null) {
      for (const e of object.qna) {
        message.qna.push(Qna.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
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

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Qna(request: QueryGetQnaRequest): Promise<QueryGetQnaResponse> {
    const data = QueryGetQnaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Query",
      "Qna",
      data
    );
    return promise.then((data) => QueryGetQnaResponse.decode(new Reader(data)));
  }

  QnaAll(request: QueryAllQnaRequest): Promise<QueryAllQnaResponse> {
    const data = QueryAllQnaRequest.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Query",
      "QnaAll",
      data
    );
    return promise.then((data) => QueryAllQnaResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
