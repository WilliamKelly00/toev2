package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) SubmitQna(goCtx context.Context, msg *types.MsgSubmitQna) (*types.MsgSubmitQnaResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message

	// Handle adding qna to store
	// Create qna from message data
	// Check if qna exists in store
	// Send reward tokens from creator to module acc
	// Write qna to store

	var qna = types.Qna{
		Index:       msg.Qsh,
		Qsh:         msg.Qsh,
		ParentTopic: msg.ParentTopic,
		Question:    msg.Question,
		OpA:         msg.OpA,
		OpB:         msg.OpB,
		OpC:         msg.OpC,
		OpD:         msg.OpD,
		Reward:      msg.Reward,
		Owner:       msg.Creator,
	}

	// try getting a qna from the store using the question solution hash as the key
	_, isFound := k.GetQna(ctx, qna.Qsh)

	// return an error if a qna already exists in the store
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Question already exists")
	}

	// get address of the ToE module account
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	// convert the message creator address from a string into sdk.AccAddress
	creator, err := sdk.AccAddressFromBech32(qna.Owner)
	if err != nil {
		panic(err)
	}

	// convert tokens from string into sdk.Coins
	reward, err := sdk.ParseCoinsNormalized(qna.Reward)
	if err != nil {
		panic(err)
	}

	// send tokens from the creator to the module account
	sdkError := k.bankKeeper.SendCoins(ctx, creator, moduleAcct, reward)
	if sdkError != nil {
		return nil, sdkError
	}
	// write the qna to the store
	k.SetQna(ctx, qna)

	return &types.MsgSubmitQnaResponse{}, nil
}
