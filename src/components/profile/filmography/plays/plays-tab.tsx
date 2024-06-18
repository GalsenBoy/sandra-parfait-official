import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./plays-columns";
import plays from "@/data/plays";


function PlaysTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="sr-only">Plays</CardTitle>
        <CardDescription>
        <DataTable columns={columns} data={plays} />
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
    </Card>
  )
}

export default PlaysTab
