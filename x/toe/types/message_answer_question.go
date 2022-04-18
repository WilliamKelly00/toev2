package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAnswerQuestion = "answer_question"

var _ sdk.Msg = &MsgAnswerQuestion{}

func NewMsgAnswerQuestion(creator string, qsh string, backup string) *MsgAnswerQuestion {
	return &MsgAnswerQuestion{
		Creator: creator,
		Qsh:     qsh,
		Backup:  backup,
	}
}

func (msg *MsgAnswerQuestion) Route() string {
	return RouterKey
}

func (msg *MsgAnswerQuestion) Type() string {
	return TypeMsgAnswerQuestion
}

func (msg *MsgAnswerQuestion) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAnswerQuestion) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAnswerQuestion) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
