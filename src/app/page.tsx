import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent dark:from-emerald-900/20" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="flex flex-col items-start gap-6 md:max-w-2xl">
            <Badge className="bg-green-600 hover:bg-green-700">
              Permaculture & Vergers
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Cultiver des vergers durables, productifs et résilients
            </h1>
            <p className="text-lg text-muted-foreground">
              Permaverger partage méthodes, retours d’expérience et tutoriels pour
              mettre en place des systèmes comestibles inspirés de la nature.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700"
              >
                <Link href="#decouvrir">Découvrir</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog">Lire le blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="decouvrir"
        className="mx-auto max-w-6xl px-4 py-12 md:py-16"
      >
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Les piliers de Permaverger
          </h2>
          <p className="mt-2 text-muted-foreground">
            Des pratiques clés pour des vergers vivants et autonomes.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Agroforesterie</CardTitle>
              <CardDescription>
                Associer arbres, arbustes et cultures.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Haies fruitières, strates végétales et microclimats pour favoriser la
              biodiversité et la production.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sol vivant</CardTitle>
              <CardDescription>Couvert permanent et compost.</CardDescription>
            </CardHeader>
            <CardContent>
              Paillis, BRF et mycorhizes pour nourrir l’activité biologique et
              améliorer la structure du sol.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Gestion de l’eau</CardTitle>
              <CardDescription>Captation et infiltration.</CardDescription>
            </CardHeader>
            <CardContent>
              Swales, cuvettes de plantation et ombrage pour optimiser l’eau et
              limiter le stress hydrique.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter / Appel à l’action */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Card>
          <CardHeader>
            <CardTitle>Recevoir nos nouveautés</CardTitle>
            <CardDescription>
              Articles, tutoriels et retours d’expérience directement dans votre
              boîte mail.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Votre email"
                className="sm:max-w-xs"
                aria-label="Votre email"
              />
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700"
              >
                S’inscrire
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Nous contacter
          </h2>
          <p className="mt-2 text-muted-foreground">
            Une question, un projet de verger ? Parlons-en.
          </p>
        </div>
        <form className="grid gap-4 sm:grid-cols-2">
          <Input placeholder="Votre nom" aria-label="Votre nom" />
          <Input type="email" placeholder="Votre email" aria-label="Votre email" />
          <div className="sm:col-span-2">
            <Textarea
              placeholder="Votre message"
              aria-label="Votre message"
              rows={5}
            />
          </div>
          <div>
            <Button className="bg-green-600 hover:bg-green-700">
              Envoyer
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
