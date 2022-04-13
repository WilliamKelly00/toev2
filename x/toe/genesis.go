package toe

import (
	"github.com/WilliamKelly00/toev2/x/toe/keeper"
	"github.com/WilliamKelly00/toev2/x/toe/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the qna
	for _, elem := range genState.QnaList {
		k.SetQna(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.QnaList = k.GetAllQna(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
