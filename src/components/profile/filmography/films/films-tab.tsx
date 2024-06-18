import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./films-columns"
import films from "@/data/films"

function FilmsTabs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="sr-only">Films</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 2xl:px-52">
        <DataTable columns={columns} data={films} />
      </CardContent>
    </Card>
  )
}

export default FilmsTabs
