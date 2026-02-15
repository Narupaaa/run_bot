const ccxt = require('ccxt');

async function run() {
    const exchange = new ccxt.binance({
        apiKey: process.env.BINANCE_API_KEY,
        secret: process.env.BINANCE_API_SECRET,
    });

    // 💡 วิธีแก้: บังคับให้ใช้ Endpoint อื่นที่ไม่ใช่ตัวหลัก
    // ลองเปลี่ยนเป็น api1, api2 หรือ api3
    exchange.urls['api']['public'] = 'https://api3.binance.com/api/v3';
    exchange.urls['api']['private'] = 'https://api3.binance.com/api/v3';

    try {
        console.log("กำลังส่งคำสั่งซื้อ BTC 15 USDT ผ่าน Endpoint สำรอง...");
        // สั่งซื้อแบบราคาตลาด
        const order = await exchange.createMarketBuyOrder('BTC/USDT', 15);
        console.log("✅ ซื้อสำเร็จ!", order.id);
    } catch (e) {
        console.error("❌ เกิดข้อผิดพลาด:", e.message);
        process.exit(1);
    }
}

run();
