import { Box } from "@mui/system";
import { useContext } from "react";
import AppBar from "../../components/appbar";
import MiniDrawer from "../../components/drawer";
import { ContentContainer, DrawerHeader } from "../../components/drawer/styles";
import HeadCounterChart from "../../components/headCountChart";
import { DrawerContext } from "../../contexts/DrawerProvider";

export default function Dashboard() {
  const { page } = useContext(DrawerContext)
  return (
    <Box>
      <AppBar />
      <MiniDrawer />
      <ContentContainer component="main">
        <DrawerHeader />
        {
          page === "HEADCOUNT" && <HeadCounterChart />
        }
      </ContentContainer>
    </Box>
  )
}
