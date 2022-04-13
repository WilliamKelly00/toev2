package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AnswerQna(goCtx context.Context, msg *types.MsgAnswerQna) (*types.MsgAnswerQnaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgAnswerQnaResponse{}, nil
}
