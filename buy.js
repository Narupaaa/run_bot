const ccxt = require('ccxt');

async function run() {
    const exchange = new ccxt.binance({
        apiKey: process.env.BINANCE_API_KEY,
        secret: process.env.BINANCE_API_SECRET,
    });

    try {
        console.log("กำลังส่งคำสั่งซื้อ BTC 15 USDT...");
        // สั่งซื้อแบบราคาตลาด (Market Order)
        const order = await exchange.createMarketBuyOrder('BTC/USDT', 15);
        console.log("✅ ซื้อสำเร็จ!", order.id);
    } catch (e) {
        console.error("❌ เกิดข้อผิดพลาด:", e.message);
        process.exit(1);
    }
}

run();
