import * as anchor from '@coral-xyz/anchor'
import { Program } from '@coral-xyz/anchor'
import { Voting } from '../target/types/voting'
import { BankrunProvider, startAnchor } from "anchor-bankrun";
import { Keypair, PublicKey } from "@solana/web3.js";

const IDL = require("../target/idl/voting.json");

const votingAddress = new PublicKey("GUtDaoZ3HDC22sbtEanTQmeg2ajNK5KDkvm4gCk9B4eY")

describe('voting', () => {

  it('Initialize Poll', async () => {
    const context = await startAnchor("", [{name: "voting",programId: votingAddress}], []);
    const provider = new BankrunProvider(context);
  
    const votingProgram = new Program<Voting>(
      IDL,
      provider,
    );

    await votingProgram.methods.initializePoll(
      new anchor.BN(1),
      "What is your favorite type of peanut butter?",
      new anchor.BN(0),
      new anchor.BN(1841917459),
    ).rpc();
  
    });
});