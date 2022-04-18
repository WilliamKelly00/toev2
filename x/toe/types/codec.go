package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgSubmitQna{}, "toe/SubmitQna", nil)
	cdc.RegisterConcrete(&MsgAnswerQna{}, "toe/AnswerQna", nil)
	cdc.RegisterConcrete(&MsgCreateTopic{}, "toe/CreateTopic", nil)
	cdc.RegisterConcrete(&MsgUpdateTopic{}, "toe/UpdateTopic", nil)
	cdc.RegisterConcrete(&MsgDeleteTopic{}, "toe/DeleteTopic", nil)
	cdc.RegisterConcrete(&MsgAnswerQuestion{}, "toe/AnswerQuestion", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSubmitQna{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAnswerQna{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTopic{},
		&MsgUpdateTopic{},
		&MsgDeleteTopic{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAnswerQuestion{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
