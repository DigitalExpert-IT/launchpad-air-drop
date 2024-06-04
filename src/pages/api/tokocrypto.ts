// pages/api/markets.js

import ccxt from 'ccxt';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  info: {
    symbol: string;
    highPrice?: number;
    lowPrice?: number;
    weightedAvgPrice: number;
    priceChangePercent: number;
    volume: number;
    lastPrice: number;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>
) {
  const { query } = req;

  try {
    const tokocrypto = new ccxt.tokocrypto();
    const markets = await tokocrypto.fetchTicker("AI/USDT");
    res.status(200).json(markets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
