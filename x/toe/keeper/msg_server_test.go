package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/WilliamKelly00/toev2/testutil/keeper"
	"github.com/WilliamKelly00/toev2/x/toe/keeper"
	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ToeKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
