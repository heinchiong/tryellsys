/**
 * import next packages
 */
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * import packages
 */
import { z, ZodError } from 'zod';

/**
 * import project files
 */
import deck from '@public/data/deck.json';
import { shuffle } from 'lodash';

const submitDrawSchema = z.object({
	numberOfPeople: z.string().min(1, { message: 'This field is required' }).refine((value) => {
		return !isNaN(parseInt(value)) && parseFloat(value) % 1 === 0 && /^[0-9]\d*$/.test(value);
	}, { message: 'This field must be a number' }).refine(value => parseInt(value) > 0, { message: 'Number of poeple must be greater than 0' })
}).strict();

type ApiResponse = {
	data?: Array<Array<{ [key: string]: string }>>;
	message?: string;
	error?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
	try {
		const { numberOfPeople } = submitDrawSchema.parse(req.body);
		const shuffledCards = shuffle(deck);
		const hands: Array<Array<{ [key: string]: string }>> = Array.from({ length: parseInt(numberOfPeople) }, () => []);
		shuffledCards.map((card, index) => {
			return hands[index % parseInt(numberOfPeople)].push({ sv: card.sv, image: card.image });
		}); console.log(hands)
		res.status(200).json({ data: hands, message: 'Card drawn successfully' });
	} catch (error: ZodError | any) {
		res.status(400).json({ error: error.issues[0].message });
	}
}
