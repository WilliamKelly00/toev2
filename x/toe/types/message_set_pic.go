package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetPic = "set_pic"

var _ sdk.Msg = &MsgSetPic{}

func NewMsgSetPic(creator string, pic string, value string) *MsgSetPic {
	return &MsgSetPic{
		Creator: creator,
		Pic:     pic,
		Value:   value,
	}
}

func (msg *MsgSetPic) Route() string {
	return RouterKey
}

func (msg *MsgSetPic) Type() string {
	return TypeMsgSetPic
}

func (msg *MsgSetPic) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetPic) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetPic) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
