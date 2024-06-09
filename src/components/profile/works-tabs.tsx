import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function WorksTabs() {
  return (
    <Tabs defaultValue="cinema" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="cinema">Cinema</TabsTrigger>
        <TabsTrigger value="television">Television</TabsTrigger>
        <TabsTrigger value="theater">Theater</TabsTrigger>
      </TabsList>
      <TabsContent value="cinema">
        <Card>
          <CardHeader>
            <CardTitle>Cinema</CardTitle>
            <CardDescription>
              Filmography list here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="television">
        <Card>
          <CardHeader>
            <CardTitle>Television</CardTitle>
            <CardDescription>
              Television performances list here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="theater">
        <Card>
          <CardHeader>
            <CardTitle>Theater</CardTitle>
            <CardDescription>
              Stage performances list here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default WorksTabs
