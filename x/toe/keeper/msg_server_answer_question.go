package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// Right version
func (k msgServer) AnswerQuestion(goCtx context.Context, msg *types.MsgAnswerQuestion) (*types.MsgAnswerQuestionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Try getting the question from the store by quesiton + solution hash
	qna, isFound := k.GetQna(ctx, msg.Qsh)

	if !isFound {
		// Then the answer was wrong 
		// get backup
		backup, isFound := k.GetQna(ctx, msg.Backup)

		if !isFound {
			// If the backup doesn't exist, something went wrong.
			return nil, sdkerrors.Wrap(sdkerrors.ErrInsufficientFunds, "Wrong answer")
		}

		// If the question is found, but the answer is wrong
		// pay the current owner
		price, _ := sdk.ParseCoinsNormalized(backup.Reward)

		owner, _ := sdk.AccAddressFromBech32(backup.Owner)
		buyer, _ := sdk.AccAddressFromBech32(msg.Creator)

		k.bankKeeper.SendCoins(ctx, buyer, owner, price)

	} else {

		// Transfer ownership of the question

		newQna := types.Qna{
			Index:       qna.Qsh,
			Qsh:         qna.Qsh,
			ParentTopic: qna.ParentTopic,
			Question:    qna.Question,
			OpA:         qna.OpA,
			OpB:         qna.OpB,
			OpC:         qna.OpC,
			OpD:         qna.OpD,
			Reward:      qna.Reward,
			Owner:       msg.Creator,
		}

		k.SetQna(ctx, newQna)

	}

	return &types.MsgAnswerQuestionResponse{}, nil
}
