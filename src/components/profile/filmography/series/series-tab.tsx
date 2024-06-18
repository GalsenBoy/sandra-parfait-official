import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./series-columns"
import series from "@/data/series"


function SeriesTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="sr-only">Series</CardTitle>
        <CardDescription>
        <DataTable columns={columns} data={series} />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
    </Card>
  )
}

export default SeriesTab
