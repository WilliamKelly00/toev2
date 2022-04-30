package types_test

import (
	"testing"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/stretchr/testify/require"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

				QnaList: []types.Qna{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				TopicList: []types.Topic{
					{
						Id: 0,
					},
					{
						Id: 1,
					},
				},
				TopicCount: 2,
				WhoisList: []types.Whois{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated qna",
			genState: &types.GenesisState{
				QnaList: []types.Qna{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated topic",
			genState: &types.GenesisState{
				TopicList: []types.Topic{
					{
						Id: 0,
					},
					{
						Id: 0,
					},
				},
			},
			valid: false,
		},
		{
			desc: "invalid topic count",
			genState: &types.GenesisState{
				TopicList: []types.Topic{
					{
						Id: 1,
					},
				},
				TopicCount: 0,
			},
			valid: false,
		},
		{
			desc: "duplicated whois",
			genState: &types.GenesisState{
				WhoisList: []types.Whois{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
