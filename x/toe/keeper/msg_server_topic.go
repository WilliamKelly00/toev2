package keeper

import (
	"context"
	"fmt"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateTopic(goCtx context.Context, msg *types.MsgCreateTopic) (*types.MsgCreateTopicResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var topic = types.Topic{
		Creator:     msg.Creator,
		Name:        msg.Name,
		ParentTopic: msg.ParentTopic,
	}

	id := k.AppendTopic(
		ctx,
		topic,
	)

	return &types.MsgCreateTopicResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTopic(goCtx context.Context, msg *types.MsgUpdateTopic) (*types.MsgUpdateTopicResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var topic = types.Topic{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Name:        msg.Name,
		ParentTopic: msg.ParentTopic,
	}

	// Checks that the element exists
	val, found := k.GetTopic(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTopic(ctx, topic)

	return &types.MsgUpdateTopicResponse{}, nil
}

func (k msgServer) DeleteTopic(goCtx context.Context, msg *types.MsgDeleteTopic) (*types.MsgDeleteTopicResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetTopic(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTopic(ctx, msg.Id)

	return &types.MsgDeleteTopicResponse{}, nil
}
