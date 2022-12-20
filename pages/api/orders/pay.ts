import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { IPaypal } from "../../../interfaces";
import { db } from "../../../database";
import { Order } from "../../../models";

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "POST":
      return payOrder(req, res);

    default:
      return res.status(400).json({ message: "Bad request" });
  }
}

const getPaypalBearerToken = async (): Promise<string | null> => {
  const PAYPAL_CLIENT = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
  const base = "https://api-m.sandbox.paypal.com";
  const base64Token = Buffer.from(PAYPAL_CLIENT + ":" + PAYPAL_SECRET ).toString("base64");
  

  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${base64Token}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}


  

 
const payOrder = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  

  const paypalBearerToken = await getPaypalBearerToken();

    if (!paypalBearerToken) {
      return res.status(400).json({ message: "No se pudo confirmar el token de paypal" });
    }

  const { transactionId = "", orderId = "" } = req.body;

  const { data } = await axios.get<IPaypal.PaypalOrderStatusResponse>(
    `${process.env.PAYPAL_ORDERS_URL}/${transactionId}`,
    {
      headers: {
        Authorization: `Bearer ${paypalBearerToken}`,
      },
    }
  );

  if (data.status !== "COMPLETED") {
    return res.status(401).json({ message: "Orden no reconocida" });
  }

  await db.connect();
  const dbOrder = await Order.findById(orderId)
  if (!dbOrder) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: "Orden no existe en nuestra base de datos" });
  }

  if (dbOrder.total !== Number(data.purchase_units[0].amount.value)) {
    await db.disconnect();
    return res
      .status(400)
      .json({ message: "Los montos de PayPal y nuestra orden no son iguales" });
  }

  dbOrder.transactionId = transactionId;
  dbOrder.isPaid = true;
  await dbOrder.save();
  //Aqui pondria funcion para enviar correo al cliente, si fuese algo virtual daria ya el acceso
  
  await db.disconnect();

  return res.status(200).json({ message: `Orden pagada` });
};
    

