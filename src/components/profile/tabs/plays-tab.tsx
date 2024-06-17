import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

function PlaysTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plays</CardTitle>
        <CardDescription>
          Plays performances list here.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
      </CardContent>
    </Card>
  )
}

export default PlaysTab
