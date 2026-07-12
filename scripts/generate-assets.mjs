import QRCode from 'qrcode';

const whatsappChannel = 'https://whatsapp.com/channel/0029Vb8MkN93wtb5LNUftx0r';

await QRCode.toFile('public/images/auno-whatsapp-qr.svg', whatsappChannel, {
  type: 'svg',
  errorCorrectionLevel: 'H',
  margin: 2,
  color: {
    dark: '#24102fff',
    light: '#ffffffff'
  },
  width: 512
});

await QRCode.toFile('public/images/auno-whatsapp-qr.png', whatsappChannel, {
  type: 'png',
  errorCorrectionLevel: 'H',
  margin: 2,
  color: {
    dark: '#24102fff',
    light: '#ffffffff'
  },
  width: 512
});

console.log('Generated AUNO Center WhatsApp QR assets.');
