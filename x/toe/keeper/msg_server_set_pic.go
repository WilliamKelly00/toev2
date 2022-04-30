package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// Allows the owner to set the price of a picture
func (k msgServer) SetPic(goCtx context.Context, msg *types.MsgSetPic) (*types.MsgSetPicResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Try getting picture information from the store
	whois, _ := k.GetWhois(ctx, msg.Pic)
	// If the message sender address doesn't match the picture owner, throw an error
	if !(msg.Creator == whois.Owner) {
	  return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Incorrect Owner")
	}
	// Otherwise, create an updated whois record
	newWhois := types.Whois{
	  Index:   msg.Pic,
	  Pic:    msg.Pic,
	  Value:   msg.Value,
	  Owner:   whois.Owner,
	  Price:   whois.Price,
	}
	// Write whois information to the store
	k.SetWhois(ctx, newWhois)

	return &types.MsgSetPicResponse{}, nil
}
