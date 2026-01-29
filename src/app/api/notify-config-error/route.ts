import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Only process in production
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.json({ message: 'Skipped in non-production' }, { status: 200 });
  }

  // Check if admin notification credentials exist
  const serviceId = process.env.EMAILJS_ADMIN_SERVICE_ID;
  const templateId = process.env.EMAILJS_ADMIN_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_ADMIN_PUBLIC_KEY;
  const adminEmail = process.env.ADMIN_EMAIL || 'mina@minademian.com';

  if (!serviceId || !templateId || !publicKey) {
    // eslint-disable-next-line no-console
    console.error('[Config Error] Admin EmailJS credentials not configured');
    return NextResponse.json({ message: 'Admin notification not configured' }, { status: 200 });
  }

  try {
    const body = await request.json();
    const { error } = body;

    // Send notification via EmailJS REST API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          to_email: adminEmail,
          subject: 'minademian.com - Contact Form Configuration Error',
          message: `Configuration Error Detected:\n\n${error}\n\nTimestamp: ${new Date().toISOString()}\n\nPlease check that the following environment variables are set:\n- NEXT_PUBLIC_EMAILJS_SERVICE_ID\n- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID\n- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.status}`);
    }

    return NextResponse.json({ message: 'Notification sent' }, { status: 200 });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[Config Error] Failed to send notification:', err);
    return NextResponse.json({ message: 'Failed to send notification' }, { status: 500 });
  }
}
