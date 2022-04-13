package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/WilliamKelly00/toev2/testutil/keeper"
	"github.com/WilliamKelly00/toev2/testutil/nullify"
	"github.com/WilliamKelly00/toev2/x/toe/types"
)

func TestTopicQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.ToeKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNTopic(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetTopicRequest
		response *types.QueryGetTopicResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetTopicRequest{Id: msgs[0].Id},
			response: &types.QueryGetTopicResponse{Topic: msgs[0]},
		},
		{
			desc:     "Second",
			request:  &types.QueryGetTopicRequest{Id: msgs[1].Id},
			response: &types.QueryGetTopicResponse{Topic: msgs[1]},
		},
		{
			desc:    "KeyNotFound",
			request: &types.QueryGetTopicRequest{Id: uint64(len(msgs))},
			err:     sdkerrors.ErrKeyNotFound,
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Topic(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestTopicQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.ToeKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNTopic(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllTopicRequest {
		return &types.QueryAllTopicRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TopicAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Topic), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Topic),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.TopicAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Topic), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Topic),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.TopicAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Topic),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.TopicAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
