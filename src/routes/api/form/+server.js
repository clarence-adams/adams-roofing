import nodemailer from 'nodemailer';

const sender = import.meta.env.VITE_EMAIL;
const password = import.meta.env.VITE_EMAIL_PASS;
const recipient = import.meta.env.VITE_EMAIL_RECIPIENT;

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	auth: {
		user: sender,
		pass: password
	}
});

export const POST = async ({ request }) => {
	const body = await request.formData();

	const mailData0 = {
		from: sender, // sender address
		to: recipient, // list of receivers
		replyTo: body.get('email'),
		subject: 'New contact',
		text: `name: ${body.get('name')} \nemail: ${body.get('email')} \n\nmessage: ${body.get(
			'message'
		)}`
	};

	const mailData1 = {
		from: sender,
		to: body.get('email'),
		subject: 'Thank you for contacting me!',
		text:
			'Hello ' +
			body.get('name') +
			',\n\nThank you for getting in touch with me through adamsroofingky.com. I will get back with you ASAP! \n\n- Clarence'
	};

	let nodemailer0;
	let nodemailer1;

	try {
		// @ts-ignore
		nodemailer0 = await transporter.sendMail(mailData0);
		// @ts-ignore
		nodemailer1 = await transporter.sendMail(mailData1);
	} catch (error) {
		console.log(error);
		return new Response(null, {
			status: 500
		});
	}

	if (nodemailer0.accepted[0] !== sender) {
		return new Response(null, {
			status: 500
		});
	}

	return new Response(null, {
		status: 200
	});
};
