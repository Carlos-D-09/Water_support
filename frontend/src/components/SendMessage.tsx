import { GearApi, GearKeyring, getProgramMetadata } from "@gear-js/api";
import { Button } from "@gear-js/ui";
import { useState } from "react";

function SendMessage() {
  const [status, setStatus] = useState<any | undefined>("");

  const sendmessage = async () => {
    const gearApi = await GearApi.create({
      providerAddress: "wss://rpc-node.gear-tech.io",
    });

    const codeId =
      "0x109ffa89f6886b0ff2a8dad5c62ef45a838c78e063f998f85e0cd069b20f49dd";
    const programId =
      "0x4d47b38aa8a9b1f896283445328a43802d95f2fb413017aa90d1f668809b24d1";
    const somePayload = "0x676574";
    const meta = getProgramMetadata(codeId);
    const keyring = await GearKeyring.fromSuri("//Alice");

    const gas = await gearApi.program.calculateGas.initCreate(
      "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
      codeId,
      "0x00",
      0,
      true
    );

    try {
      const message: any = {
        destination: programId, // programId
        payload: somePayload,
        gasLimit: 40000000,
        value: 1000,
      };

      const extrinsic: any = gearApi.message.send(message, meta);
      await extrinsic.signAndSend(keyring, (event: any) => {
        console.log(event.toHuman());
      });
    } catch (error: any) {
      console.error(`${error.name}: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h1>Send Message</h1>
      <p className="mnemonic">Status: {status} </p>
      <Button text="Send Message" onClick={sendmessage} />
    </div>
  );
}

export { SendMessage };