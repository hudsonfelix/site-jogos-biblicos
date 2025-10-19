"use client";

import { useFormState, useFormStatus } from "react-dom";
import { generateStudyPlanAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Wand2, LoaderCircle } from "lucide-react";

const initialState = {
  message: "",
  plan: null,
  errors: undefined,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <LoaderCircle className="animate-spin" /> : <><Wand2 className="mr-2 h-4 w-4" /> Gerar meu Plano de Estudo</>}
    </Button>
  );
}

export function StudyPlanGenerator() {
  const [state, formAction] = useFormState(generateStudyPlanAction, initialState);
  const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message && state.message !== "Sucesso!") {
      toast({
        title: "Erro",
        description: state.message,
        variant: "destructive",
      });
    }
    if (state.plan) {
      setGeneratedPlan(state.plan);
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-12 w-12 text-accent mb-4" />
            <CardTitle className="text-3xl font-bold font-headline">Crie seu Plano de Estudo Personalizado</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Deixe nossa IA criar um roteiro de estudos bíblicos exclusivo para seus interesses e nível de conhecimento.
            </CardDescription>
          </CardHeader>
          <form action={formAction} ref={formRef}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="interests" className="text-lg">Quais são seus interesses?</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  placeholder="Ex: 'história dos reis de Israel', 'as parábolas de Jesus', 'profecias do apocalipse', 'conselhos para a vida familiar'..."
                  rows={4}
                  aria-required="true"
                />
                {state?.errors?.interests && <p className="text-sm text-destructive">{state.errors.interests[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label className="text-lg">Qual seu nível de conhecimento da Bíblia?</Label>
                <RadioGroup name="knowledgeLevel" defaultValue="beginner" className="flex flex-col sm:flex-row gap-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner">Iniciante</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate">Intermediário</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced">Avançado</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
          {generatedPlan && (
            <div className="p-6 border-t">
                <h3 className="text-2xl font-bold font-headline mb-4 text-center">Seu Plano de Estudo Personalizado!</h3>
                <div className="whitespace-pre-wrap text-foreground">{generatedPlan}</div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
