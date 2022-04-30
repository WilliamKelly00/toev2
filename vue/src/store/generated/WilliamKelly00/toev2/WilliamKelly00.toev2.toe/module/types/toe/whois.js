/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "WilliamKelly00.toev2.toe";
const baseWhois = {
    index: "",
    pic: "",
    value: "",
    price: "",
    owner: "",
};
export const Whois = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.pic !== "") {
            writer.uint32(18).string(message.pic);
        }
        if (message.value !== "") {
            writer.uint32(26).string(message.value);
        }
        if (message.price !== "") {
            writer.uint32(34).string(message.price);
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWhois };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.pic = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                case 4:
                    message.price = reader.string();
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWhois };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        if (object.pic !== undefined && object.pic !== null) {
            message.pic = String(object.pic);
        }
        else {
            message.pic = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.pic !== undefined && (obj.pic = message.pic);
        message.value !== undefined && (obj.value = message.value);
        message.price !== undefined && (obj.price = message.price);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWhois };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        if (object.pic !== undefined && object.pic !== null) {
            message.pic = object.pic;
        }
        else {
            message.pic = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        return message;
    },
};
