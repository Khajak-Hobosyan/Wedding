export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbzEm2P_lg6uG2U3jP8_UZznWzBjIvKauJp1EAmhCq5otvfU2N2Lh7ipTKCbGITCvjTY/exec',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(req.body),
                }
            );

            const text = await response.text();

            res.status(200).send(text);
        } catch (error) {
            res.status(500).json({ error: 'Failed to save RSVP.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
