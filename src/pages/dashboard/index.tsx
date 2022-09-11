import { Box } from "@mui/system";
import AppBar from "../../components/appbar";
import MiniDrawer from "../../components/drawer";
import { ContentContainer, DrawerHeader } from "../../components/drawer/styles";

export default function Dashboard() {
  return (
    <Box>
      <AppBar />
      <MiniDrawer />
      <ContentContainer component="main">
        <DrawerHeader />
        <h1>Dashboard</h1>
      </ContentContainer>
    </Box>
  )
}
