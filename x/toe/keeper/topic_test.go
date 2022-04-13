package keeper_test

import (
	"testing"

	keepertest "github.com/WilliamKelly00/toev2/testutil/keeper"
	"github.com/WilliamKelly00/toev2/testutil/nullify"
	"github.com/WilliamKelly00/toev2/x/toe/keeper"
	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNTopic(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Topic {
	items := make([]types.Topic, n)
	for i := range items {
		items[i].Id = keeper.AppendTopic(ctx, items[i])
	}
	return items
}

func TestTopicGet(t *testing.T) {
	keeper, ctx := keepertest.ToeKeeper(t)
	items := createNTopic(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetTopic(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestTopicRemove(t *testing.T) {
	keeper, ctx := keepertest.ToeKeeper(t)
	items := createNTopic(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTopic(ctx, item.Id)
		_, found := keeper.GetTopic(ctx, item.Id)
		require.False(t, found)
	}
}

func TestTopicGetAll(t *testing.T) {
	keeper, ctx := keepertest.ToeKeeper(t)
	items := createNTopic(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTopic(ctx)),
	)
}

func TestTopicCount(t *testing.T) {
	keeper, ctx := keepertest.ToeKeeper(t)
	items := createNTopic(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetTopicCount(ctx))
}
