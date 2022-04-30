/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../toe/params";
import { Qna } from "../toe/qna";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Topic } from "../toe/topic";
import { Whois } from "../toe/whois";

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

const baseQueryGetTopicRequest: object = { id: 0 };

export const QueryGetTopicRequest = {
  encode(
    message: QueryGetTopicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTopicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTopicRequest } as QueryGetTopicRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTopicRequest {
    const message = { ...baseQueryGetTopicRequest } as QueryGetTopicRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTopicRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetTopicRequest>): QueryGetTopicRequest {
    const message = { ...baseQueryGetTopicRequest } as QueryGetTopicRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTopicResponse: object = {};

export const QueryGetTopicResponse = {
  encode(
    message: QueryGetTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Topic !== undefined) {
      Topic.encode(message.Topic, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetTopicResponse } as QueryGetTopicResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Topic = Topic.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTopicResponse {
    const message = { ...baseQueryGetTopicResponse } as QueryGetTopicResponse;
    if (object.Topic !== undefined && object.Topic !== null) {
      message.Topic = Topic.fromJSON(object.Topic);
    } else {
      message.Topic = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTopicResponse): unknown {
    const obj: any = {};
    message.Topic !== undefined &&
      (obj.Topic = message.Topic ? Topic.toJSON(message.Topic) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTopicResponse>
  ): QueryGetTopicResponse {
    const message = { ...baseQueryGetTopicResponse } as QueryGetTopicResponse;
    if (object.Topic !== undefined && object.Topic !== null) {
      message.Topic = Topic.fromPartial(object.Topic);
    } else {
      message.Topic = undefined;
    }
    return message;
  },
};

const baseQueryAllTopicRequest: object = {};

export const QueryAllTopicRequest = {
  encode(
    message: QueryAllTopicRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTopicRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTopicRequest } as QueryAllTopicRequest;
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

  fromJSON(object: any): QueryAllTopicRequest {
    const message = { ...baseQueryAllTopicRequest } as QueryAllTopicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTopicRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllTopicRequest>): QueryAllTopicRequest {
    const message = { ...baseQueryAllTopicRequest } as QueryAllTopicRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTopicResponse: object = {};

export const QueryAllTopicResponse = {
  encode(
    message: QueryAllTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Topic) {
      Topic.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllTopicResponse } as QueryAllTopicResponse;
    message.Topic = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Topic.push(Topic.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllTopicResponse {
    const message = { ...baseQueryAllTopicResponse } as QueryAllTopicResponse;
    message.Topic = [];
    if (object.Topic !== undefined && object.Topic !== null) {
      for (const e of object.Topic) {
        message.Topic.push(Topic.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTopicResponse): unknown {
    const obj: any = {};
    if (message.Topic) {
      obj.Topic = message.Topic.map((e) => (e ? Topic.toJSON(e) : undefined));
    } else {
      obj.Topic = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTopicResponse>
  ): QueryAllTopicResponse {
    const message = { ...baseQueryAllTopicResponse } as QueryAllTopicResponse;
    message.Topic = [];
    if (object.Topic !== undefined && object.Topic !== null) {
      for (const e of object.Topic) {
        message.Topic.push(Topic.fromPartial(e));
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

const baseQueryGetWhoisRequest: object = { index: "" };

export const QueryGetWhoisRequest = {
  encode(
    message: QueryGetWhoisRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhoisRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhoisRequest } as QueryGetWhoisRequest;
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

  fromJSON(object: any): QueryGetWhoisRequest {
    const message = { ...baseQueryGetWhoisRequest } as QueryGetWhoisRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetWhoisRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetWhoisRequest>): QueryGetWhoisRequest {
    const message = { ...baseQueryGetWhoisRequest } as QueryGetWhoisRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetWhoisResponse: object = {};

export const QueryGetWhoisResponse = {
  encode(
    message: QueryGetWhoisResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.whois !== undefined) {
      Whois.encode(message.whois, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWhoisResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWhoisResponse } as QueryGetWhoisResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois = Whois.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWhoisResponse {
    const message = { ...baseQueryGetWhoisResponse } as QueryGetWhoisResponse;
    if (object.whois !== undefined && object.whois !== null) {
      message.whois = Whois.fromJSON(object.whois);
    } else {
      message.whois = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWhoisResponse): unknown {
    const obj: any = {};
    message.whois !== undefined &&
      (obj.whois = message.whois ? Whois.toJSON(message.whois) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWhoisResponse>
  ): QueryGetWhoisResponse {
    const message = { ...baseQueryGetWhoisResponse } as QueryGetWhoisResponse;
    if (object.whois !== undefined && object.whois !== null) {
      message.whois = Whois.fromPartial(object.whois);
    } else {
      message.whois = undefined;
    }
    return message;
  },
};

const baseQueryAllWhoisRequest: object = {};

export const QueryAllWhoisRequest = {
  encode(
    message: QueryAllWhoisRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhoisRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhoisRequest } as QueryAllWhoisRequest;
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

  fromJSON(object: any): QueryAllWhoisRequest {
    const message = { ...baseQueryAllWhoisRequest } as QueryAllWhoisRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhoisRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllWhoisRequest>): QueryAllWhoisRequest {
    const message = { ...baseQueryAllWhoisRequest } as QueryAllWhoisRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWhoisResponse: object = {};

export const QueryAllWhoisResponse = {
  encode(
    message: QueryAllWhoisResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.whois) {
      Whois.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWhoisResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWhoisResponse } as QueryAllWhoisResponse;
    message.whois = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whois.push(Whois.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllWhoisResponse {
    const message = { ...baseQueryAllWhoisResponse } as QueryAllWhoisResponse;
    message.whois = [];
    if (object.whois !== undefined && object.whois !== null) {
      for (const e of object.whois) {
        message.whois.push(Whois.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWhoisResponse): unknown {
    const obj: any = {};
    if (message.whois) {
      obj.whois = message.whois.map((e) => (e ? Whois.toJSON(e) : undefined));
    } else {
      obj.whois = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWhoisResponse>
  ): QueryAllWhoisResponse {
    const message = { ...baseQueryAllWhoisResponse } as QueryAllWhoisResponse;
    message.whois = [];
    if (object.whois !== undefined && object.whois !== null) {
      for (const e of object.whois) {
        message.whois.push(Whois.fromPartial(e));
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
  /** Queries a Topic by id. */
  Topic(request: QueryGetTopicRequest): Promise<QueryGetTopicResponse>;
  /** Queries a list of Topic items. */
  TopicAll(request: QueryAllTopicRequest): Promise<QueryAllTopicResponse>;
  /** Queries a Whois by index. */
  Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
  /** Queries a list of Whois items. */
  WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
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

  Topic(request: QueryGetTopicRequest): Promise<QueryGetTopicResponse> {
    const data = QueryGetTopicRequest.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Query",
      "Topic",
      data
    );
    return promise.then((data) =>
      QueryGetTopicResponse.decode(new Reader(data))
    );
  }

  TopicAll(request: QueryAllTopicRequest): Promise<QueryAllTopicResponse> {
    const data = QueryAllTopicRequest.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Query",
      "TopicAll",
      data
    );
    return promise.then((data) =>
      QueryAllTopicResponse.decode(new Reader(data))
    );
  }

  Whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse> {
    const data = QueryGetWhoisRequest.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Query",
      "Whois",
      data
    );
    return promise.then((data) =>
      QueryGetWhoisResponse.decode(new Reader(data))
    );
  }

  WhoisAll(request: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse> {
    const data = QueryAllWhoisRequest.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Query",
      "WhoisAll",
      data
    );
    return promise.then((data) =>
      QueryAllWhoisResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
