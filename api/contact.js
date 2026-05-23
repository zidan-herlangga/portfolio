import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Semua field harus diisi' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `[Portfolio] Pesan dari ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #89b4fa;">Pesan Baru dari Portfolio</h2>
        <hr style="border: 1px solid #3e3e55;" />
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr style="border: 1px solid #3e3e55;" />
        <p><strong>Pesan:</strong></p>
        <p style="background: #2d2d3f; padding: 16px; border-radius: 8px; color: #cdd6f4;">${message}</p>
        <hr style="border: 1px solid #3e3e55;" />
        <p style="color: #6c7086; font-size: 12px;">Dikirim dari portfolio zidanherlangga</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Pesan berhasil dikirim!' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ success: false, error: 'Gagal mengirim pesan. Coba lagi nanti.' })
  }
}
