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

func CmdAnswerQuestion() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "answer-question [qsh] [backup]",
		Short: "Broadcast message answer-question",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argQsh := args[0]
			argBackup := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAnswerQuestion(
				clientCtx.GetFromAddress().String(),
				argQsh,
				argBackup,
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
