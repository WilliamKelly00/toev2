/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

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

export interface MsgUpdateTopicResponse {}

export interface MsgDeleteTopic {
  creator: string;
  id: number;
}

export interface MsgDeleteTopicResponse {}

export interface MsgAnswerQuestion {
  creator: string;
  qsh: string;
  backup: string;
}

export interface MsgAnswerQuestionResponse {}

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

const baseMsgCreateTopic: object = { creator: "", name: "", parentTopic: "" };

export const MsgCreateTopic = {
  encode(message: MsgCreateTopic, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.parentTopic !== "") {
      writer.uint32(26).string(message.parentTopic);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTopic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTopic } as MsgCreateTopic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.parentTopic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTopic {
    const message = { ...baseMsgCreateTopic } as MsgCreateTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parentTopic !== undefined && object.parentTopic !== null) {
      message.parentTopic = String(object.parentTopic);
    } else {
      message.parentTopic = "";
    }
    return message;
  },

  toJSON(message: MsgCreateTopic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.parentTopic !== undefined &&
      (obj.parentTopic = message.parentTopic);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTopic>): MsgCreateTopic {
    const message = { ...baseMsgCreateTopic } as MsgCreateTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parentTopic !== undefined && object.parentTopic !== null) {
      message.parentTopic = object.parentTopic;
    } else {
      message.parentTopic = "";
    }
    return message;
  },
};

const baseMsgCreateTopicResponse: object = { id: 0 };

export const MsgCreateTopicResponse = {
  encode(
    message: MsgCreateTopicResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTopicResponse } as MsgCreateTopicResponse;
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

  fromJSON(object: any): MsgCreateTopicResponse {
    const message = { ...baseMsgCreateTopicResponse } as MsgCreateTopicResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTopicResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTopicResponse>
  ): MsgCreateTopicResponse {
    const message = { ...baseMsgCreateTopicResponse } as MsgCreateTopicResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTopic: object = {
  creator: "",
  id: 0,
  name: "",
  parentTopic: "",
};

export const MsgUpdateTopic = {
  encode(message: MsgUpdateTopic, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.parentTopic !== "") {
      writer.uint32(34).string(message.parentTopic);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTopic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTopic } as MsgUpdateTopic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.parentTopic = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTopic {
    const message = { ...baseMsgUpdateTopic } as MsgUpdateTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.parentTopic !== undefined && object.parentTopic !== null) {
      message.parentTopic = String(object.parentTopic);
    } else {
      message.parentTopic = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTopic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.parentTopic !== undefined &&
      (obj.parentTopic = message.parentTopic);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTopic>): MsgUpdateTopic {
    const message = { ...baseMsgUpdateTopic } as MsgUpdateTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.parentTopic !== undefined && object.parentTopic !== null) {
      message.parentTopic = object.parentTopic;
    } else {
      message.parentTopic = "";
    }
    return message;
  },
};

const baseMsgUpdateTopicResponse: object = {};

export const MsgUpdateTopicResponse = {
  encode(_: MsgUpdateTopicResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTopicResponse } as MsgUpdateTopicResponse;
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

  fromJSON(_: any): MsgUpdateTopicResponse {
    const message = { ...baseMsgUpdateTopicResponse } as MsgUpdateTopicResponse;
    return message;
  },

  toJSON(_: MsgUpdateTopicResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateTopicResponse>): MsgUpdateTopicResponse {
    const message = { ...baseMsgUpdateTopicResponse } as MsgUpdateTopicResponse;
    return message;
  },
};

const baseMsgDeleteTopic: object = { creator: "", id: 0 };

export const MsgDeleteTopic = {
  encode(message: MsgDeleteTopic, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTopic {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTopic } as MsgDeleteTopic;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTopic {
    const message = { ...baseMsgDeleteTopic } as MsgDeleteTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteTopic): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteTopic>): MsgDeleteTopic {
    const message = { ...baseMsgDeleteTopic } as MsgDeleteTopic;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteTopicResponse: object = {};

export const MsgDeleteTopicResponse = {
  encode(_: MsgDeleteTopicResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTopicResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTopicResponse } as MsgDeleteTopicResponse;
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

  fromJSON(_: any): MsgDeleteTopicResponse {
    const message = { ...baseMsgDeleteTopicResponse } as MsgDeleteTopicResponse;
    return message;
  },

  toJSON(_: MsgDeleteTopicResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteTopicResponse>): MsgDeleteTopicResponse {
    const message = { ...baseMsgDeleteTopicResponse } as MsgDeleteTopicResponse;
    return message;
  },
};

const baseMsgAnswerQuestion: object = { creator: "", qsh: "", backup: "" };

export const MsgAnswerQuestion = {
  encode(message: MsgAnswerQuestion, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.qsh !== "") {
      writer.uint32(18).string(message.qsh);
    }
    if (message.backup !== "") {
      writer.uint32(26).string(message.backup);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAnswerQuestion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAnswerQuestion } as MsgAnswerQuestion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.qsh = reader.string();
          break;
        case 3:
          message.backup = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnswerQuestion {
    const message = { ...baseMsgAnswerQuestion } as MsgAnswerQuestion;
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
    if (object.backup !== undefined && object.backup !== null) {
      message.backup = String(object.backup);
    } else {
      message.backup = "";
    }
    return message;
  },

  toJSON(message: MsgAnswerQuestion): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.qsh !== undefined && (obj.qsh = message.qsh);
    message.backup !== undefined && (obj.backup = message.backup);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAnswerQuestion>): MsgAnswerQuestion {
    const message = { ...baseMsgAnswerQuestion } as MsgAnswerQuestion;
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
    if (object.backup !== undefined && object.backup !== null) {
      message.backup = object.backup;
    } else {
      message.backup = "";
    }
    return message;
  },
};

const baseMsgAnswerQuestionResponse: object = {};

export const MsgAnswerQuestionResponse = {
  encode(
    _: MsgAnswerQuestionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAnswerQuestionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAnswerQuestionResponse,
    } as MsgAnswerQuestionResponse;
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

  fromJSON(_: any): MsgAnswerQuestionResponse {
    const message = {
      ...baseMsgAnswerQuestionResponse,
    } as MsgAnswerQuestionResponse;
    return message;
  },

  toJSON(_: MsgAnswerQuestionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAnswerQuestionResponse>
  ): MsgAnswerQuestionResponse {
    const message = {
      ...baseMsgAnswerQuestionResponse,
    } as MsgAnswerQuestionResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SubmitQna(request: MsgSubmitQna): Promise<MsgSubmitQnaResponse>;
  AnswerQna(request: MsgAnswerQna): Promise<MsgAnswerQnaResponse>;
  CreateTopic(request: MsgCreateTopic): Promise<MsgCreateTopicResponse>;
  UpdateTopic(request: MsgUpdateTopic): Promise<MsgUpdateTopicResponse>;
  DeleteTopic(request: MsgDeleteTopic): Promise<MsgDeleteTopicResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AnswerQuestion(
    request: MsgAnswerQuestion
  ): Promise<MsgAnswerQuestionResponse>;
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

  CreateTopic(request: MsgCreateTopic): Promise<MsgCreateTopicResponse> {
    const data = MsgCreateTopic.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Msg",
      "CreateTopic",
      data
    );
    return promise.then((data) =>
      MsgCreateTopicResponse.decode(new Reader(data))
    );
  }

  UpdateTopic(request: MsgUpdateTopic): Promise<MsgUpdateTopicResponse> {
    const data = MsgUpdateTopic.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Msg",
      "UpdateTopic",
      data
    );
    return promise.then((data) =>
      MsgUpdateTopicResponse.decode(new Reader(data))
    );
  }

  DeleteTopic(request: MsgDeleteTopic): Promise<MsgDeleteTopicResponse> {
    const data = MsgDeleteTopic.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Msg",
      "DeleteTopic",
      data
    );
    return promise.then((data) =>
      MsgDeleteTopicResponse.decode(new Reader(data))
    );
  }

  AnswerQuestion(
    request: MsgAnswerQuestion
  ): Promise<MsgAnswerQuestionResponse> {
    const data = MsgAnswerQuestion.encode(request).finish();
    const promise = this.rpc.request(
      "WilliamKelly00.toev2.toe.Msg",
      "AnswerQuestion",
      data
    );
    return promise.then((data) =>
      MsgAnswerQuestionResponse.decode(new Reader(data))
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
