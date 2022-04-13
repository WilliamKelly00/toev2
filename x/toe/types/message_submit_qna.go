package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSubmitQna = "submit_qna"

var _ sdk.Msg = &MsgSubmitQna{}

func NewMsgSubmitQna(creator string, parentTopic string, question string, opA string, opB string, opC string, opD string, qsh string, reward string) *MsgSubmitQna {
	return &MsgSubmitQna{
		Creator:     creator,
		ParentTopic: parentTopic,
		Question:    question,
		OpA:         opA,
		OpB:         opB,
		OpC:         opC,
		OpD:         opD,
		Qsh:         qsh,
		Reward:      reward,
	}
}

func (msg *MsgSubmitQna) Route() string {
	return RouterKey
}

func (msg *MsgSubmitQna) Type() string {
	return TypeMsgSubmitQna
}

func (msg *MsgSubmitQna) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitQna) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitQna) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
