import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const tutorials = [
  {
    slug: "designer-son-verger",
    title: "Designer son verger",
    description:
      "Observation, zonage, plan de plantation et successions végétales.",
  },
  {
    slug: "greffage-de-fruitiers",
    title: "Greffage de fruitiers",
    description: "Matériel, périodes, techniques de greffe et reprises.",
  },
  {
    slug: "mise-en-place-de-swales",
    title: "Mise en place de swales",
    description: "Tracer, creuser et végétaliser pour capter et infiltrer l’eau.",
  },
];

export default function TutorialsPage() {
  return (
    <main className="mx-auto max-w-6xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Tutoriels</h1>
        <p className="mt-3 text-muted-foreground">
          Guides pas-à-pas pour créer, entretenir et faire évoluer un verger en
          permaculture.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((t) => (
          <Card key={t.slug}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={`/tutorials/${t.slug}`}
                  className="hover:text-green-700"
                >
                  {t.title}
                </Link>
              </CardTitle>
              <CardDescription>{t.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href={`/tutorials/${t.slug}`}
                className="text-sm font-medium text-green-700 hover:underline"
              >
                Ouvrir →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
