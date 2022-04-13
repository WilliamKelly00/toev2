package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateTopic = "create_topic"
	TypeMsgUpdateTopic = "update_topic"
	TypeMsgDeleteTopic = "delete_topic"
)

var _ sdk.Msg = &MsgCreateTopic{}

func NewMsgCreateTopic(creator string, name string, parentTopic string) *MsgCreateTopic {
	return &MsgCreateTopic{
		Creator:     creator,
		Name:        name,
		ParentTopic: parentTopic,
	}
}

func (msg *MsgCreateTopic) Route() string {
	return RouterKey
}

func (msg *MsgCreateTopic) Type() string {
	return TypeMsgCreateTopic
}

func (msg *MsgCreateTopic) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTopic) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTopic) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTopic{}

func NewMsgUpdateTopic(creator string, id uint64, name string, parentTopic string) *MsgUpdateTopic {
	return &MsgUpdateTopic{
		Id:          id,
		Creator:     creator,
		Name:        name,
		ParentTopic: parentTopic,
	}
}

func (msg *MsgUpdateTopic) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTopic) Type() string {
	return TypeMsgUpdateTopic
}

func (msg *MsgUpdateTopic) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTopic) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTopic) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteTopic{}

func NewMsgDeleteTopic(creator string, id uint64) *MsgDeleteTopic {
	return &MsgDeleteTopic{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTopic) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTopic) Type() string {
	return TypeMsgDeleteTopic
}

func (msg *MsgDeleteTopic) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTopic) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTopic) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
