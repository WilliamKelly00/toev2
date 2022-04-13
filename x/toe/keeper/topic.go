package keeper

import (
	"encoding/binary"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetTopicCount get the total number of topic
func (k Keeper) GetTopicCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TopicCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetTopicCount set the total number of topic
func (k Keeper) SetTopicCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.TopicCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendTopic appends a topic in the store with a new id and update the count
func (k Keeper) AppendTopic(
	ctx sdk.Context,
	topic types.Topic,
) uint64 {
	// Create the topic
	count := k.GetTopicCount(ctx)

	// Set the ID of the appended value
	topic.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKey))
	appendedValue := k.cdc.MustMarshal(&topic)
	store.Set(GetTopicIDBytes(topic.Id), appendedValue)

	// Update topic count
	k.SetTopicCount(ctx, count+1)

	return count
}

// SetTopic set a specific topic in the store
func (k Keeper) SetTopic(ctx sdk.Context, topic types.Topic) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKey))
	b := k.cdc.MustMarshal(&topic)
	store.Set(GetTopicIDBytes(topic.Id), b)
}

// GetTopic returns a topic from its id
func (k Keeper) GetTopic(ctx sdk.Context, id uint64) (val types.Topic, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKey))
	b := store.Get(GetTopicIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTopic removes a topic from the store
func (k Keeper) RemoveTopic(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKey))
	store.Delete(GetTopicIDBytes(id))
}

// GetAllTopic returns all topic
func (k Keeper) GetAllTopic(ctx sdk.Context) (list []types.Topic) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TopicKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Topic
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTopicIDBytes returns the byte representation of the ID
func GetTopicIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTopicIDFromBytes returns ID in uint64 format from a byte array
func GetTopicIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
