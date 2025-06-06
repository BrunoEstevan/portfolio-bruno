import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    
    const limits = {
      name: 100,
      email: 254, 
      subject: 200,
      message: 2000
    };

    if (name?.length > limits.name || 
        email?.length > limits.email || 
        subject?.length > limits.subject || 
        message?.length > limits.message) {
      return NextResponse.json(
        { error: 'Um ou mais campos excedem o limite de caracteres permitido.' },
        { status: 400 }
      );
    }
  
    
    const sanitize = (str: string) => str.replace(/<script[^>]*>.*?<\/script>/gi, '').trim();
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanSubject = sanitize(subject);
    const cleanMessage = sanitize(message);

    
    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    
    const spamWords = ['viagra', 'casino', 'lottery', 'winner', 'urgent', 'click here', 'free money'];
    const fullText = `${cleanName} ${cleanSubject} ${cleanMessage}`.toLowerCase();
    const hasSpam = spamWords.some(word => fullText.includes(word));
    
    if (hasSpam) {
      console.log('Possível spam detectado:', { name: cleanName, email: cleanEmail });
      return NextResponse.json(
        { error: 'Mensagem não enviada. Entre em contato através das redes sociais.' },
        { status: 400 }
      );
    }

    
    const clientIP = request.headers.get('x-forwarded-for') || 
                     request.headers.get('x-real-ip') || 
                     'unknown';
    
   
    const rateLimitKey = `rate_limit_${clientIP}`;
    const lastRequest = global[rateLimitKey as keyof typeof global] as number;
    const now = Date.now();
    const oneMinute = 60 * 1000;

    if (lastRequest && (now - lastRequest) < oneMinute) {
      return NextResponse.json(
        { error: 'Aguarde um momento antes de enviar outra mensagem.' },
        { status: 429 }
      );
    }

    
    (global as any)[rateLimitKey] = now;
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variáveis de ambiente EMAIL_USER ou EMAIL_PASS não configuradas');
      return NextResponse.json(
        { error: 'Configuração de email não encontrada. Contate o administrador.' },
        { status: 500 }
      );
    }

    
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Erro na verificação SMTP:', verifyError);
      return NextResponse.json(
        { error: 'Erro na configuração do servidor de email. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `[Portfólio] ${cleanSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6B46C1; border-bottom: 2px solid #6B46C1; padding-bottom: 10px;">
            Nova mensagem do portfólio
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${cleanName}</p>
            <p><strong>Email:</strong> ${cleanEmail}</p>
            <p><strong>Assunto:</strong> ${cleanSubject}</p>
            <p><strong>IP:</strong> ${clientIP}</p>
            <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #6B46C1; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Mensagem:</h3>
            <p style="line-height: 1.6; color: #374151;">${cleanMessage.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e0e7ff; border-radius: 6px;">
            <p style="margin: 0; font-size: 14px; color: #4338ca;">
              <strong>Para responder:</strong> Basta responder este email ou enviar diretamente para: ${cleanEmail}
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280; text-align: center;">
            Mensagem enviada através do formulário de contato do portfólio de Bruno Estevan
          </p>
        </div>
      `,
      replyTo: cleanEmail,
    };

    
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
