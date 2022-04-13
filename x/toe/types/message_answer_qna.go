package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAnswerQna = "answer_qna"

var _ sdk.Msg = &MsgAnswerQna{}

func NewMsgAnswerQna(creator string, qsh string) *MsgAnswerQna {
	return &MsgAnswerQna{
		Creator: creator,
		Qsh:     qsh,
	}
}

func (msg *MsgAnswerQna) Route() string {
	return RouterKey
}

func (msg *MsgAnswerQna) Type() string {
	return TypeMsgAnswerQna
}

func (msg *MsgAnswerQna) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAnswerQna) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAnswerQna) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
