package toe

import (
	"math/rand"

	"github.com/WilliamKelly00/toev2/testutil/sample"
	toesimulation "github.com/WilliamKelly00/toev2/x/toe/simulation"
	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = toesimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgSubmitQna = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSubmitQna int = 100

	opWeightMsgAnswerQna = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAnswerQna int = 100

	opWeightMsgCreateTopic = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTopic int = 100

	opWeightMsgUpdateTopic = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateTopic int = 100

	opWeightMsgDeleteTopic = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteTopic int = 100

	opWeightMsgAnswerQuestion = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAnswerQuestion int = 100

	opWeightMsgBuyPic = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgBuyPic int = 100

	opWeightMsgSetPic = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSetPic int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	toeGenesis := types.GenesisState{
		TopicList: []types.Topic{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		TopicCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&toeGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgSubmitQna int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSubmitQna, &weightMsgSubmitQna, nil,
		func(_ *rand.Rand) {
			weightMsgSubmitQna = defaultWeightMsgSubmitQna
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSubmitQna,
		toesimulation.SimulateMsgSubmitQna(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAnswerQna int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAnswerQna, &weightMsgAnswerQna, nil,
		func(_ *rand.Rand) {
			weightMsgAnswerQna = defaultWeightMsgAnswerQna
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAnswerQna,
		toesimulation.SimulateMsgAnswerQna(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTopic int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTopic, &weightMsgCreateTopic, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTopic = defaultWeightMsgCreateTopic
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTopic,
		toesimulation.SimulateMsgCreateTopic(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateTopic int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateTopic, &weightMsgUpdateTopic, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateTopic = defaultWeightMsgUpdateTopic
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateTopic,
		toesimulation.SimulateMsgUpdateTopic(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteTopic int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteTopic, &weightMsgDeleteTopic, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteTopic = defaultWeightMsgDeleteTopic
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteTopic,
		toesimulation.SimulateMsgDeleteTopic(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAnswerQuestion int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAnswerQuestion, &weightMsgAnswerQuestion, nil,
		func(_ *rand.Rand) {
			weightMsgAnswerQuestion = defaultWeightMsgAnswerQuestion
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAnswerQuestion,
		toesimulation.SimulateMsgAnswerQuestion(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgBuyPic int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgBuyPic, &weightMsgBuyPic, nil,
		func(_ *rand.Rand) {
			weightMsgBuyPic = defaultWeightMsgBuyPic
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgBuyPic,
		toesimulation.SimulateMsgBuyPic(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSetPic int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSetPic, &weightMsgSetPic, nil,
		func(_ *rand.Rand) {
			weightMsgSetPic = defaultWeightMsgSetPic
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSetPic,
		toesimulation.SimulateMsgSetPic(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
