/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "WilliamKelly00.toev2.toe";

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

export interface MsgSubmitQnaResponse {}

export interface MsgAnswerQna {
  creator: string;
  qsh: string;
}

export interface MsgAnswerQnaResponse {}

const baseMsgSubmitQna: object = {
  creator: "",
  parentTopic: "",
  question: "",
  opA: "",
  opB: "",
  opC: "",
  opD: "",
  qsh: "",
  reward: "",
};

export const MsgSubmitQna = {
  encode(message: MsgSubmitQna, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.parentTopic !== "") {
      writer.uint32(18).string(message.parentTopic);
    }
    if (message.question !== "") {
      writer.uint32(26).string(message.question);
    }
    if (message.opA !== "") {
      writer.uint32(34).string(message.opA);
    }
    if (message.opB !== "") {
      writer.uint32(42).string(message.opB);
    }
    if (message.opC !== "") {
      writer.uint32(50).string(message.opC);
    }
    if (message.opD !== "") {
      writer.uint32(58).string(message.opD);
    }
    if (message.qsh !== "") {
      writer.uint32(66).string(message.qsh);
    }
    if (message.reward !== "") {
      writer.uint32(74).string(message.reward);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitQna {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitQna } as MsgSubmitQna;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.parentTopic = reader.string();
          break;
        case 3:
          message.question = reader.string();
          break;
        case 4:
          message.opA = reader.string();
          break;
        case 5:
          message.opB = reader.string();
          break;
        case 6:
          message.opC = reader.string();
          break;
        case 7:
          message.opD = reader.string();
          break;
        case 8:
          message.qsh = reader.string();
          break;
        case 9:
          message.reward = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitQna {
    const message = { ...baseMsgSubmitQna } as MsgSubmitQna;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.parentTopic !== undefined && object.parentTopic !== null) {
      message.parentTopic = String(object.parentTopic);
    } else {
      message.parentTopic = "";
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = String(object.question);
    } else {
      message.question = "";
    }
    if (object.opA !== undefined && object.opA !== null) {
      message.opA = String(object.opA);
    } else {
      message.opA = "";
    }
    if (object.opB !== undefined && object.opB !== null) {
      message.opB = String(object.opB);
    } else {
      message.opB = "";
    }
    if (object.opC !== undefined && object.opC !== null) {
      message.opC = String(object.opC);
    } else {
      message.opC = "";
    }
    if (object.opD !== undefined && object.opD !== null) {
      message.opD = String(object.opD);
    } else {
      message.opD = "";
    }
    if (object.qsh !== undefined && object.qsh !== null) {
      message.qsh = String(object.qsh);
    } else {
      message.qsh = "";
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = String(object.reward);
    } else {
      message.reward = "";
    }
    return message;
  },

  toJSON(message: MsgSubmitQna): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.parentTopic !== undefined &&
      (obj.parentTopic = message.parentTopic);
    message.question !== undefined && (obj.question = message.question);
    message.opA !== undefined && (obj.opA = message.opA);
    message.opB !== undefined && (obj.opB = message.opB);
    message.opC !== undefined && (obj.opC = message.opC);
    message.opD !== undefined && (obj.opD = message.opD);
    message.qsh !== undefined && (obj.qsh = message.qsh);
    message.reward !== undefined && (obj.reward = message.reward);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitQna>): MsgSubmitQna {
    const message = { ...baseMsgSubmitQna } as MsgSubmitQna;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.parentTopic !== undefined && object.parentTopic !== null) {
      message.parentTopic = object.parentTopic;
    } else {
      message.parentTopic = "";
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question;
    } else {
      message.question = "";
    }
    if (object.opA !== undefined && object.opA !== null) {
      message.opA = object.opA;
    } else {
      message.opA = "";
    }
    if (object.opB !== undefined && object.opB !== null) {
      message.opB = object.opB;
    } else {
      message.opB = "";
    }
    if (object.opC !== undefined && object.opC !== null) {
      message.opC = object.opC;
    } else {
      message.opC = "";
    }
    if (object.opD !== undefined && object.opD !== null) {
      message.opD = object.opD;
    } else {
      message.opD = "";
    }
    if (object.qsh !== undefined && object.qsh !== null) {
      message.qsh = object.qsh;
    } else {
      message.qsh = "";
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = object.reward;
    } else {
      message.reward = "";
    }
    return message;
  },
};

const baseMsgSubmitQnaResponse: object = {};

export const MsgSubmitQnaResponse = {
  encode(_: MsgSubmitQnaResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitQnaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSubmitQnaResponse } as MsgSubmitQnaResponse;
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

  fromJSON(_: any): MsgSubmitQnaResponse {
    const message = { ...baseMsgSubmitQnaResponse } as MsgSubmitQnaResponse;
    return message;
  },

  toJSON(_: MsgSubmitQnaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSubmitQnaResponse>): MsgSubmitQnaResponse {
    const message = { ...baseMsgSubmitQnaResponse } as MsgSubmitQnaResponse;
    return message;
  },
};

const baseMsgAnswerQna: object = { creator: "", qsh: "" };

export const MsgAnswerQna = {
  encode(message: MsgAnswerQna, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.qsh !== "") {
      writer.uint32(18).string(message.qsh);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAnswerQna {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAnswerQna } as MsgAnswerQna;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.qsh = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnswerQna {
    const message = { ...baseMsgAnswerQna } as MsgAnswerQna;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.qsh !== undefined && object.qsh !== null) {
      message.qsh = String(object.qsh);
    } else {
      message.qsh = "";
    }
    return message;
  },

  toJSON(message: MsgAnswerQna): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.qsh !== undefined && (obj.qsh = message.qsh);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAnswerQna>): MsgAnswerQna {
    const message = { ...baseMsgAnswerQna } as MsgAnswerQna;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.qsh !== undefined && object.qsh !== null) {
      message.qsh = object.qsh;
    } else {
      message.qsh = "";
    }
    return message;
  },
};

const baseMsgAnswerQnaResponse: object = {};

export const MsgAnswerQnaResponse = {
  encode(_: MsgAnswerQnaResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAnswerQnaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAnswerQnaResponse } as MsgAnswerQnaResponse;
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

  fromJSON(_: any): MsgAnswerQnaResponse {
    const message = { ...baseMsgAnswerQnaResponse } as MsgAnswerQnaResponse;
    return message;
  },

  toJSON(_: MsgAnswerQnaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAnswerQnaResponse>): MsgAnswerQnaResponse {
    const message = { ...baseMsgAnswerQnaResponse } as MsgAnswerQnaResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SubmitQna(request: MsgSubmitQna): Promise<MsgSubmitQnaResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AnswerQna(request: MsgAnswerQna): Promise<MsgAnswerQnaResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SubmitQna(request: MsgSubmitQna): Promise<MsgSubmitQnaResponse> {
    const data = MsgSubmitQna.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Msg",
      "SubmitQna",
      data
    );
    return promise.then((data) =>
      MsgSubmitQnaResponse.decode(new Reader(data))
    );
  }

  AnswerQna(request: MsgAnswerQna): Promise<MsgAnswerQnaResponse> {
    const data = MsgAnswerQna.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Msg",
      "AnswerQna",
      data
    );
    return promise.then((data) =>
      MsgAnswerQnaResponse.decode(new Reader(data))
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
