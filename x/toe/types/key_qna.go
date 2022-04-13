package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// QnaKeyPrefix is the prefix to retrieve all Qna
	QnaKeyPrefix = "Qna/value/"
)

// QnaKey returns the store key to retrieve a Qna from the index fields
func QnaKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
