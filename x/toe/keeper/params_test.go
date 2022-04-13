package keeper_test

import (
	"testing"

	testkeeper "github.com/WilliamKelly00/toev2/testutil/keeper"
	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ToeKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
