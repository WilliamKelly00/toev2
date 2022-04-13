package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) AnswerQna(goCtx context.Context, msg *types.MsgAnswerQna) (*types.MsgAnswerQnaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	// Get qna by qsh
	// if one exists
		// transfer ownership
		// pay coins (do later)
	// else
		// pay coins (do later)

		
	_ = ctx

	return &types.MsgAnswerQnaResponse{}, nil
}
