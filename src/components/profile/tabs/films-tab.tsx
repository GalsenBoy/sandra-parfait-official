import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function FilmsTabs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Films</CardTitle>
        <CardDescription>
          Filmography list here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
    </Card>
  )
}

export default FilmsTabs
