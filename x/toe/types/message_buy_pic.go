package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyPic = "buy_pic"

var _ sdk.Msg = &MsgBuyPic{}

func NewMsgBuyPic(creator string, pic string, bid string) *MsgBuyPic {
	return &MsgBuyPic{
		Creator: creator,
		Pic:     pic,
		Bid:     bid,
	}
}

func (msg *MsgBuyPic) Route() string {
	return RouterKey
}

func (msg *MsgBuyPic) Type() string {
	return TypeMsgBuyPic
}

func (msg *MsgBuyPic) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyPic) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyPic) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
