package keeper

import (
	"context"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) QnaAll(c context.Context, req *types.QueryAllQnaRequest) (*types.QueryAllQnaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var qnas []types.Qna
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	qnaStore := prefix.NewStore(store, types.KeyPrefix(types.QnaKeyPrefix))

	pageRes, err := query.Paginate(qnaStore, req.Pagination, func(key []byte, value []byte) error {
		var qna types.Qna
		if err := k.cdc.Unmarshal(value, &qna); err != nil {
			return err
		}

		qnas = append(qnas, qna)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllQnaResponse{Qna: qnas, Pagination: pageRes}, nil
}

func (k Keeper) Qna(c context.Context, req *types.QueryGetQnaRequest) (*types.QueryGetQnaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetQna(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetQnaResponse{Qna: val}, nil
}
