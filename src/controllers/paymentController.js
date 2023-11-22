import mercadopago from "mercadopago"

export async function createOrder(req, res) {
  mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_TOKEN,
  });
  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Laptop Lenovo",
        unit_price: 500000,
        currency_id: "CLP",
        quantity: 1,
      }
    ],
    back_urls: {
      success: `${process.env.URL}/api/payment/success`,
      failure: `${process.env.URL}/api/payment/failure`,
      pending: `${process.env.URL}/api/payment/pending`,
    },
    notification_url: `${process.env.URL_SSL}/api/payment/webhook`,
  })
  console.log(result)
  res.json('Realizado con éxito', 200)
}

export async function orderSuccess(req, res) {
  res.json('Realizado con éxito', 200)
}

export async function orderFailure(req, res) {
  res.json('Error al realizar la operación', 200)
}

export async function orderPending(req, res) {
  res.json('Esperando una respuesta', 200)
}

export async function recieveWebhook(req, res) {
  try {
    const payment = req.query;
    console.log(payment);
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.status(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
}