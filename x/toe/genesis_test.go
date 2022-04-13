package toe_test

import (
	"testing"

	keepertest "github.com/WilliamKelly00/toev2/testutil/keeper"
	"github.com/WilliamKelly00/toev2/testutil/nullify"
	"github.com/WilliamKelly00/toev2/x/toe"
	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		QnaList: []types.Qna{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ToeKeeper(t)
	toe.InitGenesis(ctx, *k, genesisState)
	got := toe.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.QnaList, got.QnaList)
	// this line is used by starport scaffolding # genesis/test/assert
}
