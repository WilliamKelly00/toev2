package cli

import (
	"strconv"

	"github.com/WilliamKelly00/toev2/x/toe/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdSubmitQna() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "submit-qna [parent-topic] [question] [op-a] [op-b] [op-c] [op-d] [qsh] [reward]",
		Short: "Broadcast message submit-qna",
		Args:  cobra.ExactArgs(8),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argParentTopic := args[0]
			argQuestion := args[1]
			argOpA := args[2]
			argOpB := args[3]
			argOpC := args[4]
			argOpD := args[5]
			argQsh := args[6]
			argReward := args[7]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSubmitQna(
				clientCtx.GetFromAddress().String(),
				argParentTopic,
				argQuestion,
				argOpA,
				argOpB,
				argOpC,
				argOpD,
				argQsh,
				argReward,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
