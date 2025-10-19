'use server';

/**
 * @fileOverview Personalized Bible study plan generator.
 *
 * - generatePersonalizedStudyPlan - A function that generates a personalized Bible study plan.
 * - PersonalizedStudyPlanInput - The input type for the generatePersonalizedStudyPlan function.
 * - PersonalizedStudyPlanOutput - The return type for the generatePersonalizedStudyPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedStudyPlanInputSchema = z.object({
  interests: z
    .string()
    .describe('The users interests to tailor the Bible study plan.'),
  knowledgeLevel: z.enum(['beginner', 'intermediate', 'advanced']).describe('The users current knowledge level of the Bible.'),
});
export type PersonalizedStudyPlanInput = z.infer<typeof PersonalizedStudyPlanInputSchema>;

const PersonalizedStudyPlanOutputSchema = z.object({
  studyPlan: z.string().describe('The generated personalized Bible study plan.'),
});
export type PersonalizedStudyPlanOutput = z.infer<typeof PersonalizedStudyPlanOutputSchema>;

export async function generatePersonalizedStudyPlan(
  input: PersonalizedStudyPlanInput
): Promise<PersonalizedStudyPlanOutput> {
  return personalizedStudyPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedStudyPlanPrompt',
  input: {schema: PersonalizedStudyPlanInputSchema},
  output: {schema: PersonalizedStudyPlanOutputSchema},
  prompt: `You are an expert in creating personalized Bible study plans.

  Based on the users interests and knowledge level, generate a Bible study plan that is tailored to their needs.

  Interests: {{{interests}}}
  Knowledge Level: {{{knowledgeLevel}}}
  
  Consider the users knowledge level when generating the plan, and make sure it is appropriate for their level.
  The study plan should be engaging, easy to follow, and provide value to the user.
  `,
});

const personalizedStudyPlanFlow = ai.defineFlow(
  {
    name: 'personalizedStudyPlanFlow',
    inputSchema: PersonalizedStudyPlanInputSchema,
    outputSchema: PersonalizedStudyPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
