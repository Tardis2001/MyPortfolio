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
    <Card className="w-full my-12 bg-background">
      <CardHeader>
        <CardTitle className="text-2xl">Matheus Santos Evangelista</CardTitle>
        <CardDescription className="text-xl">
          Desenvolvedor & Estudante
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        Sou um desenvolvedor apaixonado por tecnologia e inovação, com
        experiência em criar soluções digitais desde jovem. Além de programar,
        gosto de jogar basquete, que me ajuda a manter disciplina e espírito de
        equipe. Estou sempre explorando novas ferramentas e aplicando meus
        conhecimentos em projetos criativos e funcionais.
      </CardContent>
    </Card>
  );
}
