/* eslint-disable */
import { Params } from "../toe/params";
import { Qna } from "../toe/qna";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "WilliamKelly00.toev2.toe";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.qnaList) {
            Qna.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.qnaList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.qnaList.push(Qna.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.qnaList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.qnaList !== undefined && object.qnaList !== null) {
            for (const e of object.qnaList) {
                message.qnaList.push(Qna.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.qnaList) {
            obj.qnaList = message.qnaList.map((e) => (e ? Qna.toJSON(e) : undefined));
        }
        else {
            obj.qnaList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.qnaList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.qnaList !== undefined && object.qnaList !== null) {
            for (const e of object.qnaList) {
                message.qnaList.push(Qna.fromPartial(e));
            }
        }
        return message;
    },
};
