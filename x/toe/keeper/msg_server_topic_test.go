package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"github.com/WilliamKelly00/toev2/x/toe/types"
)

func TestTopicMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateTopic(ctx, &types.MsgCreateTopic{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestTopicMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateTopic
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateTopic{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTopic{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateTopic{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateTopic(ctx, &types.MsgCreateTopic{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateTopic(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestTopicMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteTopic
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteTopic{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteTopic{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteTopic{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateTopic(ctx, &types.MsgCreateTopic{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteTopic(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
