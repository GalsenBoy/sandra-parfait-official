import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import FilmsTab from "@/components/profile/filmography/films/films-tab"
import SeriesTab from "@/components/profile/filmography/series/series-tab"
import PlaysTab from "@/components/profile/filmography/plays/plays-tab"

function FilmographyTabs() {
  return (
    <Tabs defaultValue="films" className="w-full lg:px-60">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="films">Films</TabsTrigger>
        <TabsTrigger value="series">Series</TabsTrigger>
        <TabsTrigger value="plays">Plays</TabsTrigger>
      </TabsList>
      <TabsContent value="films">
        <FilmsTab />
      </TabsContent>
      <TabsContent value="series">
        <SeriesTab />
      </TabsContent>
      <TabsContent value="plays">
        <PlaysTab />
      </TabsContent>
    </Tabs>
  )
}

export default FilmographyTabs
