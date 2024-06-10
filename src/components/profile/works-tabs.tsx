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
    <Tabs defaultValue="cinema" className="w-full lg:px-60">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="cinema">Cinema</TabsTrigger>
        <TabsTrigger value="television">Television</TabsTrigger>
        <TabsTrigger value="stage">Stage</TabsTrigger>
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
      <TabsContent value="stage">
        <Card>
          <CardHeader>
            <CardTitle>Stage</CardTitle>
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
