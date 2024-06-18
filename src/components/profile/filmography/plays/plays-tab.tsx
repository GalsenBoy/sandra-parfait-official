import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./plays-columns";
import plays from "@/data/plays";


function PlaysTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="sr-only">Plays</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 2xl:px-52">
        <DataTable columns={columns} data={plays} />
      </CardContent>
    </Card>
  )
}

export default PlaysTab
