package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		QnaList:   []Qna{},
		TopicList: []Topic{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in qna
	qnaIndexMap := make(map[string]struct{})

	for _, elem := range gs.QnaList {
		index := string(QnaKey(elem.Index))
		if _, ok := qnaIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for qna")
		}
		qnaIndexMap[index] = struct{}{}
	}
	// Check for duplicated ID in topic
	topicIdMap := make(map[uint64]bool)
	topicCount := gs.GetTopicCount()
	for _, elem := range gs.TopicList {
		if _, ok := topicIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for topic")
		}
		if elem.Id >= topicCount {
			return fmt.Errorf("topic id should be lower or equal than the last id")
		}
		topicIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
