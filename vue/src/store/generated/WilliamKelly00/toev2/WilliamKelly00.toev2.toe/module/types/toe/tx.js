/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "WilliamKelly00.toev2.toe";
const baseMsgSubmitQna = {
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
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSubmitQna };
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
    fromJSON(object) {
        const message = { ...baseMsgSubmitQna };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.parentTopic !== undefined && object.parentTopic !== null) {
            message.parentTopic = String(object.parentTopic);
        }
        else {
            message.parentTopic = "";
        }
        if (object.question !== undefined && object.question !== null) {
            message.question = String(object.question);
        }
        else {
            message.question = "";
        }
        if (object.opA !== undefined && object.opA !== null) {
            message.opA = String(object.opA);
        }
        else {
            message.opA = "";
        }
        if (object.opB !== undefined && object.opB !== null) {
            message.opB = String(object.opB);
        }
        else {
            message.opB = "";
        }
        if (object.opC !== undefined && object.opC !== null) {
            message.opC = String(object.opC);
        }
        else {
            message.opC = "";
        }
        if (object.opD !== undefined && object.opD !== null) {
            message.opD = String(object.opD);
        }
        else {
            message.opD = "";
        }
        if (object.qsh !== undefined && object.qsh !== null) {
            message.qsh = String(object.qsh);
        }
        else {
            message.qsh = "";
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = String(object.reward);
        }
        else {
            message.reward = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = { ...baseMsgSubmitQna };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.parentTopic !== undefined && object.parentTopic !== null) {
            message.parentTopic = object.parentTopic;
        }
        else {
            message.parentTopic = "";
        }
        if (object.question !== undefined && object.question !== null) {
            message.question = object.question;
        }
        else {
            message.question = "";
        }
        if (object.opA !== undefined && object.opA !== null) {
            message.opA = object.opA;
        }
        else {
            message.opA = "";
        }
        if (object.opB !== undefined && object.opB !== null) {
            message.opB = object.opB;
        }
        else {
            message.opB = "";
        }
        if (object.opC !== undefined && object.opC !== null) {
            message.opC = object.opC;
        }
        else {
            message.opC = "";
        }
        if (object.opD !== undefined && object.opD !== null) {
            message.opD = object.opD;
        }
        else {
            message.opD = "";
        }
        if (object.qsh !== undefined && object.qsh !== null) {
            message.qsh = object.qsh;
        }
        else {
            message.qsh = "";
        }
        if (object.reward !== undefined && object.reward !== null) {
            message.reward = object.reward;
        }
        else {
            message.reward = "";
        }
        return message;
    },
};
const baseMsgSubmitQnaResponse = {};
export const MsgSubmitQnaResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSubmitQnaResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgSubmitQnaResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSubmitQnaResponse };
        return message;
    },
};
const baseMsgAnswerQna = { creator: "", qsh: "" };
export const MsgAnswerQna = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.qsh !== "") {
            writer.uint32(18).string(message.qsh);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAnswerQna };
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
    fromJSON(object) {
        const message = { ...baseMsgAnswerQna };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.qsh !== undefined && object.qsh !== null) {
            message.qsh = String(object.qsh);
        }
        else {
            message.qsh = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.qsh !== undefined && (obj.qsh = message.qsh);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAnswerQna };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.qsh !== undefined && object.qsh !== null) {
            message.qsh = object.qsh;
        }
        else {
            message.qsh = "";
        }
        return message;
    },
};
const baseMsgAnswerQnaResponse = {};
export const MsgAnswerQnaResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAnswerQnaResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgAnswerQnaResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAnswerQnaResponse };
        return message;
    },
};
const baseMsgCreateTopic = { creator: "", name: "", parentTopic: "" };
export const MsgCreateTopic = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTopic };
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
    fromJSON(object) {
        const message = { ...baseMsgCreateTopic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.parentTopic !== undefined && object.parentTopic !== null) {
            message.parentTopic = String(object.parentTopic);
        }
        else {
            message.parentTopic = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.parentTopic !== undefined &&
            (obj.parentTopic = message.parentTopic);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTopic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.parentTopic !== undefined && object.parentTopic !== null) {
            message.parentTopic = object.parentTopic;
        }
        else {
            message.parentTopic = "";
        }
        return message;
    },
};
const baseMsgCreateTopicResponse = { id: 0 };
export const MsgCreateTopicResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTopicResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTopicResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTopicResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateTopic = {
    creator: "",
    id: 0,
    name: "",
    parentTopic: "",
};
export const MsgUpdateTopic = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTopic };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateTopic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.parentTopic !== undefined && object.parentTopic !== null) {
            message.parentTopic = String(object.parentTopic);
        }
        else {
            message.parentTopic = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.parentTopic !== undefined &&
            (obj.parentTopic = message.parentTopic);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTopic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.parentTopic !== undefined && object.parentTopic !== null) {
            message.parentTopic = object.parentTopic;
        }
        else {
            message.parentTopic = "";
        }
        return message;
    },
};
const baseMsgUpdateTopicResponse = {};
export const MsgUpdateTopicResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTopicResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdateTopicResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateTopicResponse };
        return message;
    },
};
const baseMsgDeleteTopic = { creator: "", id: 0 };
export const MsgDeleteTopic = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTopic };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteTopic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteTopic };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteTopicResponse = {};
export const MsgDeleteTopicResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTopicResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeleteTopicResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteTopicResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SubmitQna(request) {
        const data = MsgSubmitQna.encode(request).finish();
        const promise = this.rpc.request("WilliamKelly00.toev2.toe.Msg", "SubmitQna", data);
        return promise.then((data) => MsgSubmitQnaResponse.decode(new Reader(data)));
    }
    AnswerQna(request) {
        const data = MsgAnswerQna.encode(request).finish();
        const promise = this.rpc.request("WilliamKelly00.toev2.toe.Msg", "AnswerQna", data);
        return promise.then((data) => MsgAnswerQnaResponse.decode(new Reader(data)));
    }
    CreateTopic(request) {
        const data = MsgCreateTopic.encode(request).finish();
        const promise = this.rpc.request("WilliamKelly00.toev2.toe.Msg", "CreateTopic", data);
        return promise.then((data) => MsgCreateTopicResponse.decode(new Reader(data)));
    }
    UpdateTopic(request) {
        const data = MsgUpdateTopic.encode(request).finish();
        const promise = this.rpc.request("WilliamKelly00.toev2.toe.Msg", "UpdateTopic", data);
        return promise.then((data) => MsgUpdateTopicResponse.decode(new Reader(data)));
    }
    DeleteTopic(request) {
        const data = MsgDeleteTopic.encode(request).finish();
        const promise = this.rpc.request("WilliamKelly00.toev2.toe.Msg", "DeleteTopic", data);
        return promise.then((data) => MsgDeleteTopicResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
