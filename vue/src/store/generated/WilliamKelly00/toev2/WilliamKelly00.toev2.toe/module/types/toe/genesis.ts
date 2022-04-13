/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../toe/params";
import { Qna } from "../toe/qna";
import { Topic } from "../toe/topic";

export const protobufPackage = "WilliamKelly00.toev2.toe";

/** GenesisState defines the toe module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  qnaList: Qna[];
  topicList: Topic[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  topicCount: number;
}

const baseGenesisState: object = { topicCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.qnaList) {
      Qna.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.topicList) {
      Topic.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.topicCount !== 0) {
      writer.uint32(32).uint64(message.topicCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.qnaList = [];
    message.topicList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.qnaList.push(Qna.decode(reader, reader.uint32()));
          break;
        case 3:
          message.topicList.push(Topic.decode(reader, reader.uint32()));
          break;
        case 4:
          message.topicCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.qnaList = [];
    message.topicList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.qnaList !== undefined && object.qnaList !== null) {
      for (const e of object.qnaList) {
        message.qnaList.push(Qna.fromJSON(e));
      }
    }
    if (object.topicList !== undefined && object.topicList !== null) {
      for (const e of object.topicList) {
        message.topicList.push(Topic.fromJSON(e));
      }
    }
    if (object.topicCount !== undefined && object.topicCount !== null) {
      message.topicCount = Number(object.topicCount);
    } else {
      message.topicCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.qnaList) {
      obj.qnaList = message.qnaList.map((e) => (e ? Qna.toJSON(e) : undefined));
    } else {
      obj.qnaList = [];
    }
    if (message.topicList) {
      obj.topicList = message.topicList.map((e) =>
        e ? Topic.toJSON(e) : undefined
      );
    } else {
      obj.topicList = [];
    }
    message.topicCount !== undefined && (obj.topicCount = message.topicCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.qnaList = [];
    message.topicList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.qnaList !== undefined && object.qnaList !== null) {
      for (const e of object.qnaList) {
        message.qnaList.push(Qna.fromPartial(e));
      }
    }
    if (object.topicList !== undefined && object.topicList !== null) {
      for (const e of object.topicList) {
        message.topicList.push(Topic.fromPartial(e));
      }
    }
    if (object.topicCount !== undefined && object.topicCount !== null) {
      message.topicCount = object.topicCount;
    } else {
      message.topicCount = 0;
    }
    return message;
  },
};

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
