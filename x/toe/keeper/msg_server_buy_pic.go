package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) BuyPic(goCtx context.Context, msg *types.MsgBuyPic) (*types.MsgBuyPicResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Try getting a pic from the store
	whois, isFound := k.GetWhois(ctx, msg.Pic)
	// Set the price at which the picture has to be bought if it didn't have an owner before
	minPrice := sdk.Coins{sdk.NewInt64Coin("token", 10)}
	// Convert price and bid strings to sdk.Coins
	price, _ := sdk.ParseCoinsNormalized(whois.Price)
	bid, _ := sdk.ParseCoinsNormalized(msg.Bid)
	// Convert owner and buyer address strings to sdk.AccAddress
	owner, _ := sdk.AccAddressFromBech32(whois.Owner)
	buyer, _ := sdk.AccAddressFromBech32(msg.Creator)
	// If a picture is found in store
	if isFound {
	  // If the current price is higher than the bid
	  if price.IsAllGT(bid) {
		// Throw an error
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Bid is not high enough")
	  }
	  // Otherwise (when the bid is higher), send tokens from the buyer to the owner
	  k.bankKeeper.SendCoins(ctx, buyer, owner, bid)
	} else { // If the picture is not found in the store
	  // If the minimum price is higher than the bid
	  if minPrice.IsAllGT(bid) {
		// Throw an error
		return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Bid is less than min amount")
	  }
		  // Otherwise (when the bid is higher), send tokens from the buyer's account to the module's account (as a payment for the picture)
		  k.bankKeeper.SendCoinsFromAccountToModule(ctx, buyer, types.ModuleName, bid)
	}
	// Create an updated whois record
	newWhois := types.Whois{
	  Index:   msg.Pic,
	  Pic:    msg.Pic,
	  Value:   whois.Value,
	  Price:   bid.String(),
	  Owner:   buyer.String(),
	}
	// Write whois information to the store
	k.SetWhois(ctx, newWhois)

	return &types.MsgBuyPicResponse{}, nil
}
