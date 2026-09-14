# EmergencyDental

After-hours emergency dental website.

## Environment setup

Create a local `.env` file based on `.env.example`.

Email notifications use Hostinger SMTP with a fixed transport in the app:

- `EMAIL_USER`: Hostinger mailbox username
- `EMAIL_PASSWORD`: Hostinger mailbox password
- `SMTP_FROM`: optional sender address override
- `APPOINTMENT_EMAIL_TO`: optional recipient override for appointment emails

SMS notifications use Twilio:

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_KEY`
- `TWILIO_FROM_NUMBER`

Start the server with:

```bash
npm start
```
