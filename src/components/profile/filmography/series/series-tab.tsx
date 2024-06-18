import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "./series-columns"
import series from "@/data/series"


function SeriesTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="sr-only">Series</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 2xl:px-52">
        <DataTable columns={columns} data={series} />
      </CardContent>
    </Card>
  )
}

export default SeriesTab
