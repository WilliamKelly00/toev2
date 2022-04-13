package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SubmitQna(goCtx context.Context, msg *types.MsgSubmitQna) (*types.MsgSubmitQnaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSubmitQnaResponse{}, nil
}
