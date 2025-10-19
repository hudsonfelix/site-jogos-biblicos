"use server";

import { generatePersonalizedStudyPlan, PersonalizedStudyPlanInput } from "@/ai/flows/personalized-study-plan";
import { z } from "zod";

const StudyPlanSchema = z.object({
  interests: z.string().min(10, { message: "Por favor, descreva seus interesses com mais detalhes." }),
  knowledgeLevel: z.enum(['beginner', 'intermediate', 'advanced']),
});

export async function generateStudyPlanAction(prevState: any, formData: FormData) {
  const validatedFields = StudyPlanSchema.safeParse({
    interests: formData.get('interests'),
    knowledgeLevel: formData.get('knowledgeLevel'),
  });

  if (!validatedFields.success) {
    return {
      message: "Erro de validação. Verifique os campos.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generatePersonalizedStudyPlan(validatedFields.data as PersonalizedStudyPlanInput);
    return {
      message: "Sucesso!",
      plan: result.studyPlan,
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Ocorreu um erro ao gerar seu plano. Tente novamente.",
      plan: null,
    };
  }
}
