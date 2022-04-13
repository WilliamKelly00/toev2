/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "WilliamKelly00.toev2.toe";

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

const baseQna: object = {
  index: "",
  qsh: "",
  parentTopic: "",
  question: "",
  opA: "",
  opB: "",
  opC: "",
  opD: "",
  reward: "",
  owner: "",
};

export const Qna = {
  encode(message: Qna, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.qsh !== "") {
      writer.uint32(18).string(message.qsh);
    }
    if (message.parentTopic !== "") {
      writer.uint32(26).string(message.parentTopic);
    }
    if (message.question !== "") {
      writer.uint32(34).string(message.question);
    }
    if (message.opA !== "") {
      writer.uint32(42).string(message.opA);
    }
    if (message.opB !== "") {
      writer.uint32(50).string(message.opB);
    }
    if (message.opC !== "") {
      writer.uint32(58).string(message.opC);
    }
    if (message.opD !== "") {
      writer.uint32(66).string(message.opD);
    }
    if (message.reward !== "") {
      writer.uint32(74).string(message.reward);
    }
    if (message.owner !== "") {
      writer.uint32(82).string(message.owner);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Qna {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQna } as Qna;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.qsh = reader.string();
          break;
        case 3:
          message.parentTopic = reader.string();
          break;
        case 4:
          message.question = reader.string();
          break;
        case 5:
          message.opA = reader.string();
          break;
        case 6:
          message.opB = reader.string();
          break;
        case 7:
          message.opC = reader.string();
          break;
        case 8:
          message.opD = reader.string();
          break;
        case 9:
          message.reward = reader.string();
          break;
        case 10:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Qna {
    const message = { ...baseQna } as Qna;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.qsh !== undefined && object.qsh !== null) {
      message.qsh = String(object.qsh);
    } else {
      message.qsh = "";
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
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = String(object.reward);
    } else {
      message.reward = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: Qna): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.qsh !== undefined && (obj.qsh = message.qsh);
    message.parentTopic !== undefined &&
      (obj.parentTopic = message.parentTopic);
    message.question !== undefined && (obj.question = message.question);
    message.opA !== undefined && (obj.opA = message.opA);
    message.opB !== undefined && (obj.opB = message.opB);
    message.opC !== undefined && (obj.opC = message.opC);
    message.opD !== undefined && (obj.opD = message.opD);
    message.reward !== undefined && (obj.reward = message.reward);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(object: DeepPartial<Qna>): Qna {
    const message = { ...baseQna } as Qna;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.qsh !== undefined && object.qsh !== null) {
      message.qsh = object.qsh;
    } else {
      message.qsh = "";
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
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = object.reward;
    } else {
      message.reward = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

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
