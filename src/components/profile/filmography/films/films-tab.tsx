import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./films-columns"
import films from "@/data/films"

function FilmsTabs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="sr-only">Films</CardTitle>
        <CardDescription>
          <DataTable columns={columns} data={films} />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
    </Card>
  )
}

export default FilmsTabs
