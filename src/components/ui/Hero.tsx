import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Hero() {
  return (
    <Card id="sobre" className="w-full my-12 bg-background border-0 shadow-none">
      <CardHeader>
        <CardTitle className="font-display text-5xl font-semibold tracking-tight">
          Matheus Santos Evangelista
        </CardTitle>
        <CardDescription className="text-xl font-light text-muted-foreground">
          Desenvolvedor & Estudante
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Sou um desenvolvedor apaixonado por tecnologia e inovação, com
        experiência em criar soluções digitais desde jovem. Além de programar,
        gosto de jogar basquete, que me ajuda a manter disciplina e espírito de
        equipe. Estou sempre explorando novas ferramentas e aplicando meus
        conhecimentos em projetos criativos e funcionais.
      </CardContent>
    </Card>
  );
}
