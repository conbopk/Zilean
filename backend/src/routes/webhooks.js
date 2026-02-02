import {Webhook} from "svix";
import {inngest} from "../inngest/index.js";

export async function handleClerkWebhook(req, res) {
    const payload = JSON.stringify(req.body);
    const headers = req.headers;

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    try {
        const evt = wh.verify(payload, headers);

        await inngest.send({
            name: `clerk/${evt.type || evt.name || evt.event_type || "webhook.received"}`,
            data: evt.data,
        });

        res.status(200).json({success: true});
    } catch (e) {
        console.error('Webhook error:', e);
        res.status(400).json({error: e.message});
    }
}