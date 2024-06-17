import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function SeriesTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Series</CardTitle>
        <CardDescription>
          Series performances list here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
    </Card>
  )
}

export default SeriesTab
