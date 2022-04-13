package keeper

import (
	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetQna set a specific qna in the store from its index
func (k Keeper) SetQna(ctx sdk.Context, qna types.Qna) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QnaKeyPrefix))
	b := k.cdc.MustMarshal(&qna)
	store.Set(types.QnaKey(
		qna.Index,
	), b)
}

// GetQna returns a qna from its index
func (k Keeper) GetQna(
	ctx sdk.Context,
	index string,

) (val types.Qna, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QnaKeyPrefix))

	b := store.Get(types.QnaKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveQna removes a qna from the store
func (k Keeper) RemoveQna(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QnaKeyPrefix))
	store.Delete(types.QnaKey(
		index,
	))
}

// GetAllQna returns all qna
func (k Keeper) GetAllQna(ctx sdk.Context) (list []types.Qna) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.QnaKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Qna
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
